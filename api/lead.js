// /api/lead: CTM FormReactor proxy for the website verify-insurance form (LeadForm.astro).
//
// WHY A PROXY. FormReactor authenticates with a per-reactor key (?key=). In
// browser code that key is public, and anyone could post fake leads that CTM
// would credit as SEO. The reactor id and key live in Vercel env vars and never
// reach the browser. Fields are rebuilt from an allowlist, never passed through.
//
// FIELDS (2026-11-18, the agency's standard insurance form, as on Virtue Recovery Center and Red Rock:
// ~/Red-Rock-Recovery/src/pages/api/lead.ts). The browser posts multipart (so card photos survive); this
// function forwards multipart to CTM. CTM keys:
//   caller_name, phone_number (E.164), email                  built-in contact fields
//   custom_fields[insurance_carrier]                          select, values = LeadForm's carrier list
//   custom_fields[membership_policy_id]                       text, optional
//   custom_fields[date_of_birth]                              text (YYYY-MM-DD), optional
//   custom_fields[insurance_card_front] / [insurance_card_back]  upload (image/*), optional
//   custom_fields[opt_in_to_sms][]=yes                        list/checkbox, optional (only when ticked)
//   custom_fields[vob_consent][]=yes                          list/checkbox, always (required to submit)
//   custom_fields[transcript]                                 note: consent wording + DOB, so the record lands
//                                                             even before the new custom fields exist in CTM
//   custom_fields[visitor_sid], custom_fields[gclid]          as on Red Rock
//   sms_consent_text / vob_consent_text                       the exact wording the visitor saw
// The two checkboxes go as list items (key[]=yes): CTM rejects a plain value on a list field with
// "too many selected". CTM silently drops custom field keys the reactor doesn't have.
//
// Card photos are handled as on Virtue/Red Rock: to CTM as the upload custom fields above and, only when
// the Authorization box is ticked AND the hand-off is configured, to elev8's benefits check (sendVob below).
// Nothing is stored, and nothing submitted is logged (no PHI in logs).
//
// ENVIRONMENT (Vercel, never committed):
//   CTM_FORMREACTOR_ID    the reactor to post to (FRT...)
//   CTM_FORMREACTOR_KEY   the reactor key, sent as ?key=
//   VOB_FACILITY_ID, VOB_DEFAULT_LOCATION_CODE (optional; benefits-check hand-off is OFF until both are set)
//   VOB_ENDPOINT (optional, defaults to elev8's public-check URL)
//
// RESPONSE. Always JSON { ok, error? }. ok:false makes the form show the call-us message.

export const config = { maxDuration: 20 };

const CTM_ENDPOINT = 'https://api.calltrackingmetrics.com/api/v1/formreactor';
const UPSTREAM_TIMEOUT_MS = 8000;
const VOB_TIMEOUT_MS = 8000;
const MAX_FIELD_LEN = 512;
// Vercel caps request bodies around 4.5 MB; the form shrinks large photos first, and anything still
// too big is refused rather than truncated into a corrupt upload.
const MAX_BODY_BYTES = 4_000_000;
const SID_RE = /^[A-Za-z0-9_.:-]{6,128}$/;
const TOKEN_RE = /^[A-Za-z0-9_.-]{1,120}$/;
const REACTOR_RE = /^FRT[0-9A-F]{20,80}$/i;

// Passed through as is (attribution/session). Everything else is mapped explicitly below.
const PASSTHROUGH = [
  'paid_attribution[gclid]',
  'paid_attribution[campaign_id]',
  'paid_attribution[adgroup_id]',
  'paid_attribution[creative_id]',
  'paid_attribution[form_id]',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'keyword',
  'referrer',
  'landing_url',
  'url',
];

function toE164(raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return null;
}

// Per instance, in memory: a speed bump against floods, not a wall.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();
function rateLimited(ip, now = Date.now()) {
  if (!ip) return false;
  const fresh = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  fresh.push(now);
  hits.set(ip, fresh);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(k);
  }
  return fresh.length > RATE_MAX;
}

function readBody(req) {
  const type = String(req.headers['content-type'] || '');
  if (!/^multipart\//i.test(type)) {
    if (Buffer.isBuffer(req.body)) return Promise.resolve(req.body);
    if (typeof req.body === 'string') return Promise.resolve(Buffer.from(req.body));
  }
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on('data', (c) => {
      total += c.length;
      if (total > MAX_BODY_BYTES) { reject(new Error('TOO_LARGE')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

// Multipart (the form) or urlencoded, parsed with the platform's own FormData parser.
async function parseFields(req) {
  const type = String(req.headers['content-type'] || '');
  // Vercel's helper may already have parsed a urlencoded body into an object.
  const pre = /^multipart\//i.test(type) ? undefined : req.body;
  if (pre && typeof pre === 'object' && !Buffer.isBuffer(pre)) {
    const fd = new FormData();
    for (const [k, v] of Object.entries(pre)) fd.append(k, Array.isArray(v) ? String(v[0]) : String(v));
    return fd;
  }
  const raw = await readBody(req);
  if (raw.length > MAX_BODY_BYTES) throw new Error('TOO_LARGE');
  if (/^multipart\/form-data/i.test(type)) {
    return new Request('http://local/', { method: 'POST', headers: { 'content-type': type }, body: raw }).formData();
  }
  const fd = new FormData();
  for (const [k, v] of new URLSearchParams(raw.toString('utf8'))) fd.append(k, v);
  return fd;
}

const str = (v, max = MAX_FIELD_LEN) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const image = (v) => (v && typeof v !== 'string' && v.size > 0 && /^image\//.test(v.type) ? v : null);

async function dataUrl(f) {
  if (!f) return null;
  return `data:${f.type || 'application/octet-stream'};base64,${Buffer.from(await f.arrayBuffer()).toString('base64')}`;
}

// elev8 benefits-check hand-off, as Red Rock's src/lib/vob.ts (ported from Virtue's api/vob.js). Never throws,
// never blocks CTM, never fires without the Authorization tick, and is OFF until VOB_FACILITY_ID and
// VOB_DEFAULT_LOCATION_CODE are set. Only booleans and a status are logged.
async function sendVob(v, files) {
  try {
    if (v.vob_consent !== 'yes') return 'no-consent';
    const facilityId = process.env.VOB_FACILITY_ID, locationCode = process.env.VOB_DEFAULT_LOCATION_CODE;
    if (!facilityId || !locationCode) { console.log('[lead] vob not sent (not-configured)'); return 'not-configured'; }
    const frontImage = await dataUrl(files.front), backImage = await dataUrl(files.back);
    const payload = {
      facilityId,
      locationCode,
      contactName: v.full_name,
      phone: v.phone_e164,
      email: v.email,
      consentGiven: true,
      smsConsent: v.sms_opt_in === 'yes',
      smsConsentText: v.sms_opt_in === 'yes' ? v.sms_consent_text : '',
      ctmCallId: v.ctm_call_id || '',
      ctmVisitorSid: v.visitor_sid,
      frontImage,
      backImage,
    };
    // elev8 ignores the images whenever manualFields is present, so typed values are only the fallback.
    if (!frontImage && !backImage) {
      payload.manualFields = {
        memberName: v.full_name, subscriberName: v.full_name, relationship: 'Self',
        memberId: v.member_id, dateOfBirth: v.dob, payerName: v.insurance_provider,
      };
    }
    const res = await fetch(process.env.VOB_ENDPOINT || 'https://elev8.io/api/vob/public-check', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(VOB_TIMEOUT_MS),
    });
    console.log('[lead] vob sent', { status: res.status, frontImage: Boolean(frontImage), backImage: Boolean(backImage), usedManualFields: Boolean(payload.manualFields) });
    return res.ok ? 'ok' : `http-${res.status}`;
  } catch (err) {
    console.error('[lead] vob request failed', { name: err?.name });
    return 'error';
  }
}

export default async function handler(req, res) {
  const reply = (ok, status = 200, error) => {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    return res.end(JSON.stringify(error ? { ok, error } : { ok }));
  };

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reply(false, 405);
  }
  if (Number(req.headers['content-length'] || 0) > MAX_BODY_BYTES) {
    return reply(false, 413, 'Those card photos are too large to send. Please try smaller photos, or leave them out.');
  }

  const reactor = (process.env.CTM_FORMREACTOR_ID || '').trim();
  const key = (process.env.CTM_FORMREACTOR_KEY || '').trim();
  if (!REACTOR_RE.test(reactor) || !key) {
    console.error('[lead] CTM is not configured: set CTM_FORMREACTOR_ID and CTM_FORMREACTOR_KEY');
    return reply(false, 500);
  }

  let d;
  try {
    d = await parseFields(req);
  } catch (err) {
    if (err?.message === 'TOO_LARGE') return reply(false, 413, 'Those card photos are too large to send. Please try smaller photos, or leave them out.');
    console.error('[lead] body read failed', { name: err?.name });
    return reply(false, 400);
  }
  const get = (k, max) => str(d.get(k), max);

  // Bots get a normal success so they learn nothing.
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.headers['x-real-ip'] || '';
  if (get('company_website') || rateLimited(ip)) {
    console.log('[lead] discarded as spam');
    return reply(true);
  }

  const name = get('caller_name', 80);
  const phone = toE164(get('phone_number', 40));
  const carrier = get('insurance_carrier', 80);
  if (!name) return reply(false, 400, 'Please enter your full name.');
  if (!phone) return reply(false, 400, 'Please enter a valid phone number.');
  if (!carrier) return reply(false, 400, 'Please choose your insurance carrier.');
  if (get('vob_consent') !== 'yes') return reply(false, 400, 'Please tick the authorization box so we can check your benefits.');

  const f = new FormData();
  f.set('caller_name', name);
  f.set('phone_number', phone);
  const email = get('email', 160);
  if (email) f.set('email', email);
  f.set('custom_fields[insurance_carrier]', carrier);
  // Member ID is optional on the form, but CTM rejects the whole lead with "missing required fields" when the
  // reactor requires it and it is blank (2026-11-16/17, live PR #98). Backfill so a blank field never costs a lead.
  const member = get('membership_policy_id', 60);
  f.set('custom_fields[membership_policy_id]', member || 'Not provided');
  const dobRaw = get('date_of_birth', 10), dob = /^\d{4}-\d{2}-\d{2}$/.test(dobRaw) ? dobRaw : '';
  if (dob) f.set('custom_fields[date_of_birth]', dob);
  const front = image(d.get('card_front')), back = image(d.get('card_back'));
  if (front) f.set('custom_fields[insurance_card_front]', front, front.name || 'card-front.jpg');
  if (back) f.set('custom_fields[insurance_card_back]', back, back.name || 'card-back.jpg');
  // Checkbox (list) custom fields: send as list items, or CTM answers "too many selected".
  const sms = get('sms_opt_in') === 'yes';
  if (sms) f.append('custom_fields[opt_in_to_sms][]', 'yes');
  f.append('custom_fields[vob_consent][]', 'yes');
  const smsText = sms ? get('sms_consent_text', 600) : '', vobText = get('vob_consent_text', 600);
  if (smsText) f.set('sms_consent_text', smsText);
  if (vobText) f.set('vob_consent_text', vobText);

  for (const n of PASSTHROUGH) {
    const value = get(n);
    if (value) f.set(n, value);
  }
  const sid = [get('visitor_sid', 128), get('sid', 128)].find((s) => SID_RE.test(s)) || '';
  if (sid) { f.set('visitor_sid', sid); f.set('sid', sid); f.set('custom_fields[visitor_sid]', sid); }
  const gclid = get('paid_attribution[gclid]', 200);
  if (TOKEN_RE.test(gclid)) f.set('custom_fields[gclid]', gclid);

  // The transcript note carries the consent record and the DOB even before the new custom fields exist in CTM.
  const page = get('page', 200), at = new Date().toISOString();
  const note = [`Website verify-insurance form${page ? ` on ${page}` : ''}, ${at}.`];
  if (dob) note.push(`Date of birth: ${dob}.`);
  if (front || back) note.push(`Insurance card photos: ${[front && 'front', back && 'back'].filter(Boolean).join(' and ')}.`);
  note.push(`Authorization (ticked): "${vobText}"`);
  note.push(sms ? `SMS opt-in (ticked): "${smsText}"` : 'SMS opt-in: not ticked.');
  f.set('custom_fields[transcript]', note.join(' '));

  let ctm = {};
  try {
    // Never log this URL: it carries the reactor key.
    const upstream = await fetch(`${CTM_ENDPOINT}/${reactor}?key=${encodeURIComponent(key)}`, {
      method: 'POST',
      body: f,
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    const text = await upstream.text();
    try { ctm = JSON.parse(text); } catch { /* non-JSON body */ }
    // HTTP 200 is not success: CTM rejects with 200 and {"status":"error"}.
    if (!upstream.ok || ctm.status === 'error' || (ctm.status && ctm.status !== 'success')) {
      console.error('[lead] CTM rejected the submission', { http: upstream.status, text: String(ctm.text || 'no error text').replace(/\d{5,}/g, '#') });
      return reply(false, 502);
    }
  } catch (err) {
    console.error('[lead] upstream request failed', { name: err?.name, message: err?.message });
    return reply(false, 502);
  }

  console.log('[lead] accepted', { trackback: ctm.trackback_id, sid: Boolean(sid), photos: Boolean(front || back), sms });

  // Benefits check, after CTM accepted (it never turns a delivered lead into a failure).
  await sendVob({
    full_name: name, phone_e164: phone, email, dob, member_id: member, insurance_provider: carrier,
    vob_consent: 'yes', sms_opt_in: sms ? 'yes' : '', sms_consent_text: smsText, visitor_sid: sid,
    ctm_call_id: ctm.trackback_id || '',
  }, { front, back });
  return reply(true);
}
