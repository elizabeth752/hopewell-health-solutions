// Hand-authored post (structured `sections` model).
// Source: HHS 2026Q3 Art. 11 — Hopewell Health Solutions Unveils Its New Campus
// in Westbrook, CT (docx-extracted hyperlink-aware; suggested author "Terence
// Aitken, CPSRP" matches roster slug `tj-aitken-cpsrp` — "TJ Aitken, CPSRP,
// Director of Business Development" — title-wording drift, same person, same
// pattern documented for prior posts). No reviewer named in the docx; kept
// Kristine Schlichting, PhD as the standing clinical reviewer.
//
// Both citations fetch-verified against the specific claim each supports:
//   [1] Schmitt, Phibbs, Piette (2003), Stanford Health Policy mirror — exact
//       quote confirmed: "Patients who traveled 10 miles or less were 2.6
//       times more likely to obtain aftercare than those who traveled more
//       than 50 miles."
//   [2] Beardsley et al. (2003), J. Substance Abuse Treatment — ScienceDirect/
//       JSAT abstract confirmed via search: clients traveling less than 1 mile
//       were 50% more likely to complete treatment than clients traveling
//       farther, holding demographics and drug-problem type constant.
//
// Phone number: the docx repeats (860) 579-6423 for this Westbrook campaign
// specifically, distinct from the sitewide NAP number (860) 735-1448 used
// everywhere else in the repo (see src/data/locations.js) and on the existing
// WestbrookLauncher.astro floating card. Treated as an intentional, campus-
// specific tracking line for this announcement and kept as given in the docx
// rather than overwritten with the general NAP number.
//
// Infographics: per the confirmed pattern (memory: hopewell-blog-infographic-
// standard) — three small, section-adjacent SVGs, each its own visual
// language (a rollout timeline, a services card grid, a 4-step process flow).
// No baked-in CTA band on them; the post page's sidebar carries one.
// Hero image: a real photo of the new campus (70 Essex Road, signage
// included), supplied in the user's Downloads as "Westbrook new image.png" —
// resized/optimized to the repo's existing hero convention (1024w webp,
// quality 78), matching locations.js's still-null Westbrook `photoDir` now
// being filled by this post's own hero rather than a placeholder graphic.
// A 1200×628 (1.91:1) social share card was also built in the brand's SVG
// visual language, exported to public/Assets/Blogs/social/ and to the user's
// Downloads folder per their request.
//
// Internal links: 11 added at first natural occurrence, all to real,
// already-built pages (verified against src/pages/ directory listing and,
// for the three Westbrook-specific program links, cross-checked against the
// exact hrefs already used in WestbrookLauncher.astro):
//   /programs/womens-wellness-iop/, /programs/medication-management/,
//   /programs/counseling/, /programs/intensive-outpatient-program/,
//   /what-we-treat/co-occurring/, /treatment-methods/dbt/,
//   /treatment-methods/therapeutic-treatments/ (CBT), /treatment-methods/emdr/,
//   /treatment-methods/group-therapy/, /treatment-methods/genesight-testing/,
//   /treatment-methods/medication-assisted-treatment/.
export default {
  slug: "hopewell-health-solutions-westbrook-campus",
  title: "Hopewell Health Solutions Unveils Its New Campus in Westbrook, CT",
  metaTitle: "New Westbrook, CT Campus Now Open | Hopewell Health Solutions",
  metaDescription:
    "New in Westbrook, CT: Women's Wellness IOP, psychiatric medication management, and individual therapy launch September 28, with an adult co-occurring IOP following in October.",
  category: "Treatment & Access",
  excerpt:
    "Hopewell Health Solutions is opening a new campus at 70 Essex Road in Westbrook, CT, bringing Women's Wellness IOP, psychiatric medication management, and individual therapy to the Connecticut shoreline starting September 28, with an adult co-occurring IOP following in October.",
  heroImage: "/Assets/Blogs/opt/hopewell-health-solutions-westbrook-campus.webp",
  authorSlug: "tj-aitken-cpsrp",
  reviewerSlug: "kristine-a-schlichting-ph-d",
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  readingMinutes: 6,
  intro:
    "In a national study of patients discharged from inpatient substance use treatment, those who traveled 10 miles or less were about 2.6 times more likely to get follow-up outpatient care than those who traveled more than 50 miles. Distance is not a small detail in mental health care — it decides who starts, and it decides who finishes. For people on the Connecticut shoreline, the nearest intensive programming has been an hour inland. Our new Westbrook campus closes that gap.",
  sections: [
    {
      id: "where-is-the-new-campus",
      h2: "Where Is the New Campus?",
      blocks: [
        {
          p: "The new campus is Hopewell Health Solutions – Westbrook, at 70 Essex Road, Westbrook, CT 06498, serving the shoreline with Women’s Wellness IOP, psychiatric medication management, and individual therapy.",
        },
        {
          p: "The <a href=\"/programs/womens-wellness-iop/\">Women’s Wellness Intensive Outpatient Program (IOP)</a> runs in both morning and evening sessions. <a href=\"/programs/medication-management/\">Medication management</a> and <a href=\"/programs/counseling/\">individual therapy</a> are scheduled by appointment. Call us to find a time that works: (860) 579-6423.",
        },
      ],
    },
    {
      id: "when-does-it-open",
      h2: "When Does It Open?",
      blocks: [
        {
          p: "Women’s Wellness IOP, psychiatric medication management, and individual therapy go live on September 28. An adult co-ed, co-occurring Intensive Outpatient Program is added in October.",
        },
        {
          p: "Admissions is taking calls now, so clients can be assessed and scheduled ahead of the start date rather than waiting until the doors open.",
        },
        {
          img: "/Assets/Blogs/hopewell-westbrook-opening-timeline.svg",
          alt: "Timeline of the Westbrook campus rollout: today admissions is already taking calls, September 28 the campus opens with Women's Wellness IOP, medication management, and individual therapy, and October adds a co-occurring IOP",
        },
      ],
    },
    {
      id: "what-is-available-at-westbrook",
      h2: "What Is Available at Westbrook?",
      blocks: [
        {
          p: "Four services anchor the Westbrook campus: Women’s Wellness IOP, psychiatric medication management, individual therapy, and, starting in October, an adult co-ed, co-occurring IOP.",
        },
        {
          img: "/Assets/Blogs/hopewell-westbrook-services-grid.svg",
          alt: "Four services available at Westbrook: Women's Wellness IOP (morning and evening), Psychiatric Medication Management (GeneSight available), Individual Therapy (day and evening), and Adult Co-Occurring IOP (starts October)",
        },
        { h3: "Women’s Wellness IOP" },
        {
          p: "Some work is harder to do in a mixed group. Our Women’s Wellness Intensive Outpatient Program is trauma-informed and based on Dialectical Behavior Therapy (DBT), run in a women-only setting by clinicians trained specifically in this work.",
        },
        {
          p: "The program runs in both morning and evening sessions, making it easier for women managing a school run, a shift, or a caregiving schedule. You do not have to choose between treatment and the rest of your life.",
        },
        {
          p: "Groups address the overlap that general programming tends to miss: trauma, anxiety, depression, relationships, caregiving load, and the particular exhaustion of being the person everyone else leans on.",
        },
        { h3: "Psychiatric Medication Management" },
        {
          p: "Psychiatric medication is treated as one part of a plan. That involves an evaluation, a clear conversation about tradeoffs, and ongoing adjustment.",
        },
        {
          p: "Our approach is therapy first, medication second. For clients with a complicated medication history, <a href=\"/treatment-methods/genesight-testing/\">GeneSight pharmacogenomic testing</a> is available: a cheek swab indicates how a person’s genetics may affect their response to certain medications, which can reduce some of the trial and error.",
        },
        { h3: "Individual Therapy" },
        {
          p: "One-on-one counseling is available at the Westbrook campus for people who need consistent, private support rather than a group setting, and for people stepping down from an intensive program who want to keep working with a clinician.",
        },
        {
          p: "Sessions are offered in person at this office or by secure telehealth, with daytime and evening availability.",
        },
        { h3: "Adult Co-Ed, Co-Occurring IOP (Starting October)" },
        {
          p: "Beginning in October, the campus adds an adult co-ed <a href=\"/programs/intensive-outpatient-program/\">Intensive Outpatient Program</a> for <a href=\"/what-we-treat/co-occurring/\">co-occurring</a> mental health and substance use conditions.",
        },
        {
          p: "Treating those two things separately, in sequence, is one of the most common reasons treatment does not hold. This program addresses both at once, in the same room, with the same clinical team, on a schedule built so clients can keep working.",
        },
      ],
    },
    {
      id: "what-therapies-are-used",
      h2: "What Therapies Are Used?",
      blocks: [
        {
          p: "Programming at the Westbrook campus draws on the same evidence-based methods used across our Connecticut offices:",
        },
        {
          ul: [
            "<a href=\"/treatment-methods/dbt/\">Dialectical Behavior Therapy (DBT)</a> for emotional regulation, distress tolerance, and crisis skills.",
            "<a href=\"/treatment-methods/therapeutic-treatments/\">Cognitive Behavioral Therapy (CBT)</a> for the thought patterns that keep depression and anxiety in place.",
            "<a href=\"/treatment-methods/emdr/\">Eye Movement Desensitization and Reprocessing (EMDR)</a> and Accelerated Resolution Therapy (ART) when trauma is part of the picture.",
            "<a href=\"/treatment-methods/group-therapy/\">Group therapy</a>, which addresses the isolation that drives so much of the difficulty.",
            "Mindfulness and yoga therapy, for the body-based side of anxiety and trauma that talk alone does not reach.",
            "The Gottman Method when relationship work is part of what a client needs.",
            "<a href=\"/treatment-methods/medication-assisted-treatment/\">Medication-Assisted Treatment (MAT)</a>, where clinically appropriate, within the co-occurring program.",
            "GeneSight testing to inform psychiatric prescribing.",
          ],
        },
      ],
    },
    {
      id: "why-does-the-shoreline-need-this",
      h2: "Why Does the Shoreline Need This?",
      blocks: [
        {
          p: "Residents of Westbrook, Old Saybrook, Clinton, Essex, Madison, Deep River, Old Lyme, and Killingworth have largely had two options: weekly outpatient therapy, or a significant drive for anything more intensive.",
        },
        {
          p: "The research on this is consistent. One study found that people in outpatient treatment traveling less than a mile were about 50% more likely to complete treatment than those traveling farther.",
        },
        {
          p: "Intensive programs only help people who can actually attend them. Removing 50 minutes of driving from each of several weekly sessions is not a convenience. For many people it is the difference between finishing and dropping out.",
        },
      ],
    },
    {
      id: "who-is-the-program-for",
      h2: "Who Is the Program For?",
      blocks: [
        {
          p: "The Westbrook campus is a fit if any of the following describe your situation:",
        },
        {
          ul: [
            "Weekly therapy is no longer providing enough structure, but stepping away from work or family is not realistic.",
            "You are a woman who has tried mixed-gender treatment and found it hard to speak honestly there.",
            "You have recently been discharged from inpatient or hospital care and need a step-down close to home.",
            "Mental health and substance use are both part of what is going on, and treating them separately has not worked.",
            "Your psychiatric medication has been adjusted repeatedly without a clear plan behind it.",
            "You are supporting a family member and want a clinician to tell you what level of care actually fits.",
          ],
        },
      ],
    },
    {
      id: "how-can-you-get-started",
      h2: "How Can You Get Started?",
      blocks: [
        {
          p: "Getting started at the Westbrook campus takes four steps:",
        },
        {
          ul: [
            "Reach out. Call (860) 579-6423 or request a confidential callback. No commitment.",
            "Verify your insurance. Our team checks your benefits at no cost, usually within minutes.",
            "Complete an assessment. A clinical assessment determines which level of care fits, which is sometimes less than people expect and sometimes more.",
            "Begin care. You start at the right level and adjust as you progress, without changing teams.",
          ],
        },
        {
          img: "/Assets/Blogs/hopewell-westbrook-get-started-steps.svg",
          alt: "Four steps to get started at Westbrook: reach out, verify insurance, complete an assessment, and begin care",
        },
      ],
    },
    {
      id: "what-matters-most",
      h2: "What Matters Most",
      blocks: [
        {
          ul: [
            "Programs go live September 28 at 70 Essex Road, Westbrook, CT: Women’s Wellness IOP, psychiatric medication management, and individual therapy.",
            "Our admissions team verifies your specific benefits and gives you a full breakdown before you commit to anything. The Women’s Wellness IOP runs morning and evening sessions, so treatment can fit around work and caregiving.",
            "An adult co-ed, co-occurring IOP joins the campus in October, treating mental health and substance use together rather than in sequence.",
            "Care draws on DBT, CBT, EMDR, ART, group therapy, mindfulness and yoga therapy, and GeneSight-informed prescribing.",
            "You do not need a referral, benefits verification is free, and you can be assessed before the programs start.",
          ],
        },
      ],
    },
    {
      id: "there-is-hope-to-heal",
      h2: "There Is Hope to Heal",
      blocks: [
        {
          p: "If you have been putting off care because the drive was too long or the schedule did not work, one of those obstacles is now gone.",
        },
        {
          p: "Hopewell Health Solutions provides outpatient mental health care from our Connecticut locations, including Glastonbury, West Hartford, East Hampton, and Westbrook, plus telehealth statewide.",
        },
        {
          p: "More than 50 licensed clinicians, prescribers, psychologists, and therapists work with us, and we are a Joint Commission accredited practice serving Connecticut clients since 2013.",
        },
        {
          p: "Whether you are asking for yourself or for someone you love, admissions will walk you through the next step. Call (860) 579-6423.",
        },
      ],
    },
  ],
  sources: [
    {
      text: "Schmitt, S.K., Phibbs, C.S., and Piette, J.D. 2003. The Influence of Distance on Utilization of Outpatient Mental Health Aftercare Following Inpatient Substance Abuse Treatment. Addictive Behaviors, 28.",
      href: "https://healthpolicy.fsi.stanford.edu/publications/the_influence_of_distance_on_utilization_of_outpatient_mental_health_aftercare_following_inpatient_substance_abuse_treatment",
    },
    {
      text: "Beardsley, K., Wish, E.D., Fitzelle, D.B., O'Grady, K., and Arria, A.M. 2003. Distance Traveled to Outpatient Drug Treatment and Client Retention. Journal of Substance Abuse Treatment, 25(4), 279-285.",
      href: "https://www.jsatjournal.com/article/S0740-5472(03)00188-0/pdf",
    },
  ],
};
