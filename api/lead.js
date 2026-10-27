// /api/lead: CTM FormReactor proxy for the website lead form (LeadForm.astro).
//
// WHY A PROXY. FormReactor authenticates with a per-reactor key (?key=). In
// browser code that key is public, and anyone could post fake leads that CTM
// would credit as SEO. The reactor id and key live in Vercel env vars and never
// reach the browser. Fields are rebuilt from an allowlist, never passed through.
//
// ENVIRONMENT (Vercel, never committed):
//   CTM_FORMREACTOR_ID    the reactor to post to (FRT...)
//   CTM_FORMREACTOR_KEY   the reactor key, sent as ?key=
//
// RESPONSE. Always JSON { ok }. ok:false makes the form show the call-us message.

export const config = { maxDuration: 15 };

const CTM_ENDPOINT = 'https://api.calltrackingmetrics.com/api/v1/formreactor';
const UPSTREAM_TIMEOUT_MS = 8000;
const MAX_FIELD_LEN = 512;
const MAX_BODY_BYTES = 32_000;
const SID_RE = /^[A-Za-z0-9_.:-]{6,128}$/;
const REACTOR_RE = /^FRT[0-9A-F]{20,80}$/i;

// Everything the form sends today. CTM silently drops names it doesn't know.
const ALLOWED = [
  'caller_name',
  'email',
  'custom_fields[insurance_carrier]',
  'custom_fields[membership_policy_id]',
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
  'sid',
  'visitor_sid',
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

function buildPayload(fields) {
  const phone = toE164(fields.get('phone_number'));
  if (!phone) return null;
  const out = new URLSearchParams();
  out.set('phone_number', phone);
  for (const name of ALLOWED) {
    const value = (fields.get(name) || '').trim();
    if (!value) continue;
    if ((name === 'sid' || name === 'visitor_sid') && !SID_RE.test(value)) continue;
    out.set(name, value.slice(0, MAX_FIELD_LEN));
  }
  return out;
}

function readBody(req) {
  if (typeof req.body === 'string') return Promise.resolve(req.body);
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on('data', (c) => {
      total += c.length;
      if (total > MAX_BODY_BYTES) reject(new Error('TOO_LARGE'));
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  const reply = (ok, status = 200) => {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    return res.end(JSON.stringify({ ok }));
  };

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reply(false, 405);
  }

  const reactor = (process.env.CTM_FORMREACTOR_ID || '').trim();
  const key = (process.env.CTM_FORMREACTOR_KEY || '').trim();
  if (!REACTOR_RE.test(reactor) || !key) {
    console.error('[lead] CTM is not configured: set CTM_FORMREACTOR_ID and CTM_FORMREACTOR_KEY');
    return reply(false, 500);
  }

  let fields;
  try {
    fields = new URLSearchParams(await readBody(req));
  } catch (err) {
    console.error('[lead] body read failed', { message: err?.message });
    return reply(false, 400);
  }

  // Bots get a normal success so they learn nothing.
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.headers['x-real-ip'] || '';
  if (fields.get('company_website') || rateLimited(ip)) {
    console.log('[lead] discarded as spam');
    return reply(true);
  }

  const payload = buildPayload(fields);
  if (!payload) {
    console.error('[lead] unusable phone number');
    return reply(false, 400);
  }

  let ctm;
  try {
    // Never log this URL: it carries the reactor key.
    const upstream = await fetch(`${CTM_ENDPOINT}/${reactor}?key=${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload.toString(),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    ctm = await upstream.json().catch(() => ({}));
    if (!upstream.ok) throw new Error(`HTTP ${upstream.status}`);
  } catch (err) {
    console.error('[lead] upstream request failed', { name: err?.name, message: err?.message });
    return reply(false, 502);
  }

  // CTM can answer HTTP 200 with status:"error" for a missing required field.
  if (ctm.status && ctm.status !== 'success') {
    console.error('[lead] CTM rejected the submission', { text: String(ctm.text || '').replace(/\d{5,}/g, '#') });
    return reply(false, 502);
  }

  console.log('[lead] accepted', { trackback: ctm.trackback_id, sid: Boolean(payload.get('visitor_sid')) });
  return reply(true);
}
