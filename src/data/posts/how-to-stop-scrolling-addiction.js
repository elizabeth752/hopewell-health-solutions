// Hand-authored post (structured `sections` model).
// Source: HHS 2026Q3 Art. 5 — How to Stop Scrolling Addiction (Teesha Huertas)
//
// All 5 source citations fetch-verified against the specific claim each supports
// (per the discipline in docs/blog-post-standard.md on the Virtue Recovery Center
// build — no miscitations found here, unlike that project's history):
//   [1] Castelo et al. (2025), PNAS Nexus — both the "half worry / 80% under 30"
//       stat and the digital-detox RCT (91% improved on ≥1 outcome) are in this
//       same paper, confirmed by direct quote.
//   [2] Sherer, APA "Technology Addictions" page — DSM-5-TR Gambling Disorder /
//       Internet Gaming Disorder framing, "hours alone" line, the three warning
//       signs, and the CBT/family-therapy treatment claims all confirmed verbatim
//       on the live page.
//   [3] Zablotsky et al. (2025), CDC Preventing Chronic Disease — 50.4% of teens
//       at 4+ hrs/day; depression 25.9% vs 9.5%, anxiety 27.1% vs 12.3%; sleep/
//       activity/social-support findings all confirmed.
//   [4] AASM 2026 doomscrolling survey — 38%/46% sleep-worse figures, 50% daily
//       in-bed screen use, 26% ("about a quarter") prioritizing screen over sleep,
//       and the 30-60 minute power-down recommendation all confirmed.
//   [5] Balhara et al. (2026), JMIR Mental Health — 125-study synthesis; "most
//       consistent benefit" and "regaining control of use / reducing cues"
//       language confirmed via the PMC mirror (direct fetch of the JMIR page
//       itself returned no content, likely a bot challenge).
//
// Author: docx names "Teesha Huertas, Clinical Director" as suggested author —
// she's on the roster as `teesha-huertas-lcsw` (Clinic Director & LCSW), a title
// variant of the same person. The prior two hand-authored posts both used Colleen
// Callaway as author with Kristine Schlichting, PhD as reviewer; this docx names
// a different suggested author, which is normal per-post variation rather than a
// conflict, so followed the docx here. Reviewer kept as Kristine Schlichting
// (standing clinical reviewer on both prior posts) since none is specified.
//
// Hero image: stock photo already sourced to Downloads (matches the docx's own
// "friends around a table on their phones" concept, and is in fact the same
// photo already used inline on the silent-panic-attacks post) — resized/
// optimized to match the repo's existing hero convention (1024w, ~35KB).
//
// Infographics: per the confirmed pattern (see memory: hopewell-blog-
// infographic-standard) — three small, section-adjacent SVGs, each a distinct
// visual language (a bedtime feedback loop, a signs icon-grid, a stat bar
// chart), not one summary poster. No baked-in CTA band; the post page's sidebar
// already carries one.
//
// Internal links: 10 added at first natural occurrence, all to real, already-
// built pages (mirrors the Virtue Recovery Center interlinking rule — first
// occurrence only, verify every target resolves before shipping). Required
// switching `[slug].astro`'s p/li rendering from plain text to `set:html` so
// hand-authored posts can carry inline <a> tags at all — see docs/blog-post-
// standard.md §Internal Links for why and what was checked before that change.
//   /what-we-treat/anxiety/, /what-we-treat/depression/, /what-we-treat/adhd/,
//   /what-we-treat/trauma-ptsd/ — the four conditions named as scrolling's
//   underlying drivers.
//   /treatment-methods/therapeutic-treatments/ (CBT), /treatment-methods/dbt/,
//   /treatment-methods/emdr/ — the modalities named in the treatment section.
//   /programs/intensive-outpatient-program/, /programs/partial-hospitalization-
//   program/, /programs/teen-tween-iop/ — the levels of care named in the
//   closing section.
export default {
  slug: "how-to-stop-scrolling-addiction",
  title: "How to Stop Scrolling Addiction",
  metaTitle: "How to Stop Scrolling Addiction | Hopewell Health Solutions",
  metaDescription:
    "Deleting an app rarely holds. Here is what works when scrolling takes over your time, and how to tell when the habit is a symptom of something more serious.",
  category: "Mental Health",
  excerpt:
    "About half of American smartphone users worry they use their phone too much, and among adults under 30 that number climbs to 80%. Scrolling is rarely the whole problem — it is usually how anxiety, low mood, or exhaustion gets managed instead of treated.",
  heroImage: "/Assets/Blogs/opt/how-to-stop-scrolling-addiction.webp",
  authorSlug: "teesha-huertas-lcsw",
  reviewerSlug: "kristine-a-schlichting-ph-d",
  datePublished: "2026-09-09",
  dateModified: "2026-09-09",
  readingMinutes: 7,
  intro:
    "About half of American smartphone users worry that they use their phone too much, and that figure climbs to 80% among adults under 30. Stopping compulsive scrolling takes more than willpower or a screen time limit, because the habit is usually doing a job: quieting anxiety, filling silence, or postponing sleep. Here is what helps lower scrolling, and when the pattern points to a treatable mental health condition.",
  sections: [
    {
      id: "is-scrolling-addiction-a-real-condition",
      h2: "Is Scrolling Addiction a Real Condition?",
      blocks: [
        {
          p: "The American Psychiatric Association (APA) describes technology addiction as excessive use that produces problems and distress, where the behavior continues in order to avoid or relieve anxiety and irritability, rather than for enjoyment. People affected can experience tolerance and withdrawal similar to what occurs in substance use disorders.",
        },
        {
          p: "The label itself is not a diagnosis. Gambling Disorder remains the only behavioral addiction included in the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Internet Gaming Disorder appears only in the section reserved for conditions requiring further study.",
        },
        {
          p: "Scrolling addiction not being a formal diagnosis does not make the problem imaginary, but it does mean that treatment is focused largely on the consequences and the drivers of scrolling: lost sleep, missed work, avoided conversations, and anxiety or low mood.",
        },
      ],
    },
    {
      id: "how-much-screen-time-is-too-much",
      h2: "How Much Screen Time Is Too Much?",
      blocks: [
        {
          p: "No single number applies to everyone, and the APA notes that hours alone do not indicate a disorder. Volume still matters.",
        },
        {
          p: "In a nationally representative survey of United States teenagers aged 12 to 17, half reported 4 or more hours of daily non-schoolwork screen time. That group was more than twice as likely to report depression and anxiety symptoms.",
        },
        {
          img: "/Assets/Blogs/scrolling-addiction-screentime-stats.svg",
          alt: "Bar chart comparing US teens under 4 hours vs 4 or more hours of daily screen time: 9.5% vs 25.9% report depression symptoms, and 12.3% vs 27.1% report anxiety symptoms",
        },
      ],
    },
    {
      id: "signs-scrolling-has-become-a-problem",
      h2: "What Are the Signs That Scrolling Has Become a Problem?",
      blocks: [
        { p: "The APA points to several behavior patterns worth taking seriously:" },
        {
          ul: [
            "Continuing to use technology despite knowing it causes harm, including relationship strain and sleep loss.",
            "Lying to family or friends about how often you are on your phone.",
            "Constant preoccupation, cravings, or losing large blocks of time to scrolling.",
          ],
        },
        {
          p: "In practice, people notice smaller things first. Reaching for the phone before fully waking up. Losing the thread of a book after two paragraphs. Feeling restless when the phone is in another room.",
        },
        {
          img: "/Assets/Blogs/scrolling-addiction-signs-grid.svg",
          alt: "Three warning signs from the APA: continuing to use despite harm, hiding how much time is spent, and preoccupation, cravings, or lost time, plus smaller everyday tells",
        },
      ],
    },
    {
      id: "why-scrolling-gets-worse-at-night",
      h2: "Why Does Scrolling Get Worse at Night?",
      blocks: [
        {
          p: "Bedtime is where the habit does the most damage. In a 2026 national survey by the American Academy of Sleep Medicine (AASM), 38% of United States adults said that reading news on a phone or tablet before bed made their sleep worse, rising to 46% among adults aged 18 to 24.",
        },
        {
          p: "Half of adults reported using a screen in bed every day, and about a quarter said that they prioritize screen time over the sleep they need.",
        },
        {
          p: "Poor sleep then weakens the self-control required to stop scrolling the following night. That loop is why bedtime is usually the first place to take action around scrolling addiction.",
        },
        {
          img: "/Assets/Blogs/scrolling-addiction-bedtime-loop.svg",
          alt: "Diagram of the bedtime scrolling loop: screen before bed leads to worse sleep, which leads to weaker self-control, which leads to more scrolling the next night",
        },
      ],
    },
    {
      id: "how-do-you-stop-scrolling-addiction",
      h2: "How Do You Stop Scrolling Addiction?",
      blocks: [
        { p: "People can't rely on willpower alone. Changing the conditions of scrolling works better:" },
        {
          ul: [
            "Charge the phone outside the bedroom and use a standard alarm clock. The AASM recommends powering down electronics 30 to 60 minutes before bed.",
            "Turn off notifications rather than relying on yourself to ignore them.",
            "Remove the most compulsive apps from your phone and keep them on a device you reach for less often.",
            "Fill the slot instead of only deleting it. Adults who lost mobile internet access spend time socializing in person, exercising, and being outdoors.",
            "Name the trigger before you unlock the screen, because boredom, loneliness, and dread each call for a different behavioral response.",
            "Track function rather than minutes. Sleep, work, and how present you are with people tell you more than a weekly screen time report.",
          ],
        },
      ],
    },
    {
      id: "does-a-digital-detox-actually-work",
      h2: "Does a Digital Detox Actually Work?",
      blocks: [
        {
          p: "Temporarily, yes, and the effect is larger than most people expect. In a month-long randomized controlled trial, blocking mobile internet on participants' smartphones for two weeks improved mental health, subjective well-being, and sustained attention. 91% of participants improved on at least one of these three outcomes.",
        },
        {
          p: "A short break is not a cure, though. The gains hold when the habits that replaced scrolling stay in effect afterward.",
        },
      ],
    },
    {
      id: "when-is-scrolling-a-symptom-of-something-else",
      h2: "When Is Scrolling a Symptom of Something Else?",
      blocks: [
        {
          p: "Compulsive scrolling often sits on top of an untreated condition. <a href=\"/what-we-treat/anxiety/\">Anxiety</a> uses it for reassurance. <a href=\"/what-we-treat/depression/\">Depression</a> uses it to pass hours that feel unbearable. <a href=\"/what-we-treat/adhd/\">Attention-Deficit/Hyperactivity Disorder (ADHD)</a> makes low-effort stimulation difficult to leave, and <a href=\"/what-we-treat/trauma-ptsd/\">trauma</a> symptoms use it to stay numb.",
        },
        {
          p: "The relationship runs both ways. High screen use means worse sleep, less physical activity, and weaker social and emotional support, each of which feeds depression and anxiety in turn.",
        },
        {
          p: "If cutting back leaves you anxious, flat, or unable to sit still, the scrolling was probably managing something. That something responds to treatment.",
        },
      ],
    },
    {
      id: "what-treatment-helps",
      h2: "What Treatment Helps When Scrolling Feels Uncontrollable?",
      blocks: [
        {
          p: "A synthesis of 125 studies on problematic digital technology use found that structured psychological therapies produced the most consistent benefit. The strongest results came from approaches aimed at regaining control of use and reducing the cues that drive unhealthy use.",
        },
        {
          p: "The APA identifies assessment and counseling as the first step. <a href=\"/treatment-methods/therapeutic-treatments/\">Cognitive Behavioral Therapy (CBT)</a> is most commonly used, while family involvement in therapy is also helpful for many people.",
        },
        {
          p: "At Hopewell Health Solutions, our clinicians use CBT, <a href=\"/treatment-methods/dbt/\">Dialectical Behavior Therapy (DBT)</a>, <a href=\"/treatment-methods/emdr/\">Eye Movement Desensitization and Reprocessing (EMDR)</a>, and Accelerated Resolution Therapy (ART) to treat scrolling addiction and the causes that sit deeper beneath.",
        },
        {
          p: "Care is available at every level. We have weekly counseling, an <a href=\"/programs/intensive-outpatient-program/\">Intensive Outpatient Program (IOP)</a> with day and evening tracks, and a <a href=\"/programs/partial-hospitalization-program/\">Partial Hospitalization Program (PHP)</a>. <a href=\"/programs/teen-tween-iop/\">Teen and tween IOPs</a> serve ages 8 through 18, with families included in the work to ensure comprehensive healing.",
        },
      ],
    },
    {
      id: "what-matters-most",
      h2: "What Matters Most",
      blocks: [
        {
          ul: [
            "Compulsive scrolling is not a formal diagnosis, and the distress, lost sleep, and decline in functioning it produces are treatable.",
            "Hours alone do not define the problem of scrolling, impairment does. Teenagers with 4 or more hours of daily screen time are more than twice as likely to report depression symptoms.",
            "Bedtime is the highest-yield place to start addressing scrolling addiction, especially considering how late-night use tracks with worse sleep and mental health.",
            "Structured therapy shows the most consistent benefit for scrolling addiction, as it also treats the anxiety, depression, or ADHD driving the behavior.",
          ],
        },
      ],
    },
    {
      id: "there-is-hope-to-heal",
      h2: "There Is Hope to Heal",
      blocks: [
        {
          p: "If scrolling is costing you sleep, focus, or time with the people you love, Hopewell Health Solutions provides outpatient mental health care from six Connecticut locations, including Glastonbury, West Hartford, East Hampton, and Westbrook, plus telehealth services across the state.",
        },
        {
          p: "We have more than 50 licensed clinicians, prescribers, psychologists, and therapists on our team, and we're a Joint Commission accredited practice serving clients aged 4 and older.",
        },
        {
          p: "We will help you find the right level of care. Speak with admissions today. Call (860) 735-1448.",
        },
      ],
    },
  ],
  sources: [
    {
      text: "Castelo, N., et al. (2025). Blocking Mobile Internet on Smartphones Improves Sustained Attention, Mental Health, and Subjective Well-Being. PNAS Nexus, 4(2), Article pgaf017.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11834938/",
    },
    {
      text: "Sherer, J. (n.d.). Technology Addictions: Social Media, Online Gaming, and More. American Psychiatric Association.",
      href: "https://www.psychiatry.org/patients-families/technology-addictions-social-media-and-more",
    },
    {
      text: "Zablotsky, B., et al. (2025). Associations Between Screen Time Use and Health Outcomes Among US Teenagers. Preventing Chronic Disease, 22, Article 240537.",
      href: "https://www.cdc.gov/pcd/issues/2025/24_0537.htm",
    },
    {
      text: "American Academy of Sleep Medicine. (2026, Feb. 23). Americans Are Doomscrolling at Bedtime, Prioritizing Screen Time Over Sleep. American Academy of Sleep Medicine.",
      href: "https://aasm.org/americans-are-doomscrolling-at-bedtime-prioritizing-screen-time-over-sleep/",
    },
    {
      text: "Balhara, Y.P.S., et al. (2026). Therapeutic Interventions Targeted at Problematic Use of Digital Technology: Systematic Review and Meta-Analysis of Evidence. JMIR Mental Health, 13, Article e89280.",
      href: "https://mental.jmir.org/2026/1/e89280",
    },
  ],
};
