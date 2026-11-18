// Program cards and team picks for the What We Treat pages (copy matches the homepage cards).
const P = "/Assets/hhs-2026/";
export const PROGRAMS = {
  adultIop: { t: "Adult Mental Health IOP", d: "Structured therapy 3–4 days a week, while you live at home, work, and parent.", href: "/programs/adult-mental-health-iop/", img: "/Assets/Blogs/opt/php-vs-iop-which-level-of-care-is-right-for-you.webp", bar: "#2f76c4", facts: [["calendar", "Mon–Thu · day or evening"], ["users", "Adults 18+"]] },
  womens: { t: "Women’s Wellness IOP", d: "Trauma-informed, DBT-based care in a women-only group where it’s safe to be seen.", href: "/programs/womens-wellness-iop/", img: "/Assets/women%20looking%20at%20me.webp", bar: "#b6863c", facts: [["heart", "Women-only groups"], ["pin", "Glastonbury & Westbrook"]] },
  womensTrauma: { t: "Women’s Trauma IOP", d: "A women-only intensive outpatient program focused on healing from trauma, with EMDR and trauma-informed groups.", href: "/programs/womens-trauma-iop/", img: P + "womens-trauma-iop-group-room.webp", bar: "#b6863c", facts: [["heart", "Women-only groups"], ["shield", "Trauma-informed care"]] },
  teen: { t: "Teen & Tween IOP", d: "After-school support for ages 8–18, with the family woven into the work.", href: "/programs/teen-iop/", img: P + "tween-group-room.webp", bar: "#5c7c6b", facts: [["calendar", "After school"], ["users", "Tweens 8–12 · teens 13–17"]] },
  addiction: { t: "Addiction and Substance Use IOP", d: "Addiction treatment with mental health care alongside it, at our Downtown Glastonbury (300 Hebron Ave) and Westbrook offices.", href: "/programs/addiction-iop/", img: "/Assets/Blogs/are-you-a-high-functioning-alcoholic.webp", bar: "#0b2f55", facts: [["link", "Co-occurring care"], ["pin", "Glastonbury & Westbrook"]] },
  php: { t: "Partial Hospitalization (PHP)", d: "Full-day treatment for when weekly therapy simply isn’t enough.", href: "/programs/partial-hospitalization-program/", img: P + "php-group-room.webp", bar: "#265489", facts: [["clock", "About 6 hours a day"], ["calendar", "Monday through Friday"]] },
  firstResponder: { t: "First Responder IOP", d: "A program built for police, fire, EMS and dispatch, with clinicians who understand the job.", href: "/programs/first-responder-iop/", img: "/Assets/service/first-responder-session.webp", bar: "#b6863c", facts: [["shield", "Police, fire, EMS, dispatch"], ["users", "Peer-informed groups"]] },
  meds: { t: "Medication Management", d: "Thoughtful psychiatric prescribing for ages 4 and up, never one-size-fits-all.", href: "/programs/medication-management/", img: "/Assets/evaluation-session.webp", bar: "#5c7c6b", facts: [["pill", "Ages 4 and up"], ["dna", "GeneSight® testing available"]] },
  counseling: { t: "Counseling", d: "Individual, couples & family counseling, in person or by telehealth.", href: "/programs/counseling/", img: P + "westbrook-therapy-office.webp", bar: "#2f76c4", facts: [["users", "Individual, couples & family"], ["compass", "In person or telehealth"]] },
  tms: { t: "TMS Therapy", d: "FDA-cleared magnetic stimulation for treatment-resistant depression & OCD.", href: "/treatment-methods/tms/", img: P + "tms-chair.webp", bar: "#265489", facts: [["bolt", "Drug-free, no downtime"], ["brain", "Depression & OCD"]] },
  adhdTesting: { t: "ADHD Testing", d: "Thorough, compassionate assessment for children, teens & adults.", href: "/treatment-methods/adhd-testing/", img: "/Assets/Blogs/inpatient-vs-intensive-outpatient-programs-understanding-the-right-fit-for-your-child.webp", bar: "#b6863c", facts: [["clipboard", "Children, teens & adults"], ["brain", "Clear diagnosis & plan"]] },
  mat: { t: "Medication-Assisted Treatment", d: "Medication to ease cravings and withdrawal, alongside therapy, when it fits your plan.", href: "/treatment-methods/medication-assisted-treatment/", img: "/Assets/Blogs/suboxone-a-cornerstone-of-mat-at-hopewell-health-solutions-hero.webp", bar: "#5c7c6b", facts: [["pill", "Prescribed by our team"], ["link", "Paired with therapy"]] },
};
export const LEVELS = [
  { t: "Outpatient Therapy", icon: "chat", stat: "Weekly", note: "individual, couples & family sessions", days: [1, 0, 0, 0, 0, 0, 0], tone: 1,
    html: `Weekly sessions with one therapist, in person or by telehealth. <a class="inl" href="/programs/counseling/">Individual, couples &amp; family counseling</a> and <a class="inl" href="/programs/medication-management/">medication management</a> for ages 4 and up.` },
  { t: "Intensive Outpatient (IOP)", icon: "calendar", stat: "3 h", note: "a day · 4 days a week · day or evening", days: [3, 3, 3, 3, 0, 0, 0], tone: 2,
    html: `Structured therapy 3–4 days a week, while you live at home, work, and parent. Our <a class="inl" href="/programs/intensive-outpatient-program/">intensive outpatient programs</a> run day and evening tracks.` },
  { t: "Partial Hospitalization (PHP)", icon: "sun", stat: "6 h", note: "a day · Monday through Friday", days: [6, 6, 6, 6, 6, 0, 0], tone: 3,
    html: `Full-day care, highest outpatient level. Our <a class="inl" href="/programs/partial-hospitalization-program/">partial hospitalization program</a> is for when weekly therapy simply isn’t enough.` },
];
export const SERVICES = [
  { t: "Intensive Outpatient Program", href: "/programs/intensive-outpatient-program/", icon: "users" },
  { t: "Medication Management", href: "/programs/medication-management/", icon: "pill" },
  { t: "Counseling", href: "/programs/counseling/", icon: "heart" },
  { t: "HHS Therapeutic Treatments", href: "/treatment-methods/therapeutic-treatments/", icon: "refresh" },
  { t: "Neuropsychological Testing", href: "/treatment-methods/neuropsychological-testing/", icon: "clipboard" },
  { t: "Addiction Treatment (S.U.D.)", href: "/what-we-treat/substance-use-disorder/", icon: "swap" },
  { t: "ADHD Testing", href: "/treatment-methods/adhd-testing/", icon: "bolt" },
  { t: "TMS", href: "/treatment-methods/tms/", icon: "brain" },
  { t: "Alcohol Addiction Treatment", href: "/what-we-treat/alcohol/", icon: "shield" },
  { t: "Drug Addiction Treatment", href: "/what-we-treat/drug/", icon: "compass" },
  { t: "Prescription Drug Addiction Treatment", href: "/what-we-treat/prescription-drugs/", icon: "alert" },
];

// Client direction (Hopewell Website Updates doc, 2026-11-16): addiction pages lead with addiction messaging — working
// adults, problem drinking, step-down after rehab, SUD groups, co-occurring care. Addiction is only at 300 Hebron Ave and
// Westbrook.
export const ADDICTION_HIGHLIGHTS = [
  { icon: "users", t: "Built for working adults", d: "Daytime and evening addiction treatment for adults, including problem drinking and functioning alcoholism, so care fits around work and family." },
  { icon: "refresh", t: "Step-down care after rehab", d: `Coming home from inpatient rehab or detox? Step down into our addiction PHP or <a class="inl" href="/programs/addiction-iop/">Addiction and Substance Use IOP</a> and keep the structure you worked for.` },
  { icon: "heart", t: "SUD groups clients value", d: "Many clients tell us our substance use disorder (SUD) <a class='inl' href='/treatment-methods/group-therapy/'>groups</a> are the part of treatment they value most: honest, supportive and built on connection." },
  { icon: "link", t: "Addiction and mental health, together", d: `Co-occurring depression, anxiety or trauma is treated alongside substance use by one team. Learn about <a class="inl" href="/what-we-treat/co-occurring/">co-occurring disorders</a>.` },
];
export const WHO_WE_HELP = [
  { icon: "users", t: "Adults", tag: "Ages 18+", href: "/programs/adult-mental-health-iop/", d: `Day and evening <a class="inl" href="/programs/adult-mental-health-iop/">Adult Mental Health IOP</a>, therapy and <a class="inl" href="/programs/medication-management/">medication management</a> that fit around work and family.` },
  { icon: "heart", t: "Women’s mental health", tag: "Women 18+", href: "/programs/womens-wellness-iop/", d: `The <a class="inl" href="/programs/womens-wellness-iop/">Women’s Wellness IOP</a> and <a class="inl" href="/programs/womens-trauma-iop/">Women’s Trauma IOP</a>, plus care for postpartum depression and anxiety.` },
  { icon: "sparkles", t: "Teens & tweens", tag: "Ages 8–17", href: "/programs/teen-iop/", d: `After-school <a class="inl" href="/programs/teen-iop/">Teen &amp; Tween IOP</a> for ages 8–17, with the family woven into the work.` },
  { icon: "shield", t: "First responders", tag: "Police · fire · EMS", href: "/programs/first-responder-iop/", d: `A <a class="inl" href="/programs/first-responder-iop/">First Responder IOP</a> for police, fire, EMS and dispatch, with clinicians who understand the job.` },
];
