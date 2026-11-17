// /api/careers: job application form on /about-us/careers/ (CareersForm.astro).
//
// The applicant's details and CV are emailed to the hiring inbox through Resend (https://resend.com).
// The browser sends JSON with the CV as base64; nothing is stored on the server.
//
// ENVIRONMENT (Vercel, never committed):
//   RESEND_API_KEY   Resend API key (re_...)
//   CAREERS_TO       inbox that receives applications (comma-separated for several)
//   CAREERS_FROM     verified Resend sender, e.g. "Hopewell Careers <careers@hopewellhealthsolutions.com>"
//                    (until the domain is verified in Resend, "onboarding@resend.dev" only delivers to the
//                    Resend account owner's own address)
//
// RESPONSE. Always JSON { ok }. ok:false makes the form show the call-us / email-us message.

export const config = { maxDuration: 15 };

const MAX_FILE_BYTES = 3 * 1024 * 1024; // 3 MB, keeps the request under Vercel's 4.5 MB body limit
const TYPES = {
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
};
const clean = (v, max = 300) => String(v ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
const esc = (v) => v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const { RESEND_API_KEY, CAREERS_TO, CAREERS_FROM } = process.env;
  if (!RESEND_API_KEY || !CAREERS_TO) return res.status(503).json({ ok: false, reason: 'not_configured' });

  const b = typeof req.body === 'object' && req.body ? req.body : {};
  if (clean(b.company)) return res.status(200).json({ ok: true }); // honeypot: bots fill the hidden field

  const name = clean(b.name, 120);
  const email = clean(b.email, 160);
  const phone = clean(b.phone, 40);
  const role = clean(b.role, 160);
  const license = clean(b.license, 160);
  const office = clean(b.office, 120);
  const note = String(b.note ?? '').trim().slice(0, 3000);
  const fileName = clean(b.fileName, 140).replace(/[^\w.\- ]/g, '_');
  const fileType = clean(b.fileType, 120);
  const fileData = String(b.fileData ?? '');

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !role) return res.status(400).json({ ok: false, reason: 'fields' });
  if (!TYPES[fileType] || !fileData || !/^[A-Za-z0-9+/=]+$/.test(fileData)) return res.status(400).json({ ok: false, reason: 'file' });
  if (Math.floor((fileData.length * 3) / 4) > MAX_FILE_BYTES) return res.status(413).json({ ok: false, reason: 'size' });

  const rows = [['Name', name], ['Email', email], ['Phone', phone], ['Role', role], ['License / credentials', license], ['Preferred office', office]]
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#5a6b7a">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`)
    .join('');
  const html = `<p>New job application from the Hopewell website careers page.</p><table>${rows}</table>${note ? `<p style="margin-top:16px"><strong>Message</strong><br>${esc(note).replace(/\n/g, '<br>')}</p>` : ''}<p style="color:#5a6b7a">CV attached.</p>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CAREERS_FROM || 'Hopewell Careers <onboarding@resend.dev>',
        to: CAREERS_TO.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `Job application: ${role} (${name})`,
        html,
        attachments: [{ filename: fileName || `cv.${TYPES[fileType]}`, content: fileData }],
      }),
      signal: AbortSignal.timeout(10000),
    });
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
  } catch {
    return res.status(502).json({ ok: false });
  }
}
