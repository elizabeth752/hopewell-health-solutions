// Hand-authored post (structured `sections` model).
// Source: HHS 2026Q4 Art. 14 — Postpartum OCD and Intrusive Thoughts: What They Mean and How They're Treated
//
// All 6 source citations fetch-verified against the specific claim each supports (docs/blog-post-standard.md
// §1 — no miscitations found):
//   [1] Office on Women's Health, "Perinatal Mental Health Conditions: Fact Sheet" (PDF, read directly — page
//       extracted text) — "Women with postpartum OCD know that their thoughts are disturbing and are unlikely
//       to ever act on them" confirmed verbatim. Personal/family history of anxiety or OCD raising risk,
//       confirmed verbatim. Postpartum psychosis: "may see or hear things that aren't there or have an
//       unshakeable belief in something untrue," and "should call their doctor or 911, call or text the Suicide
//       and Crisis Lifeline at 988, or go to an emergency room immediately," both confirmed verbatim.
//   [2] Postpartum Support International, Perinatal Mental Health page — "these images are anxious in nature,
//       not a break from reality," parent avoidance behavior, postpartum OCD symptom list (cleaning, checking,
//       counting, avoiding, fear of being left alone, hypervigilance), "Postpartum Psychosis occurs in
//       approximately 1 to 2 out of every 1,000 deliveries," "you do not need a diagnosis to reach out for
//       help," ERP listed among evidence-based therapies, and sleep/practical help/support groups as care
//       options — all confirmed verbatim or near-verbatim.
//   [3] Abramowitz, Hellberg, Krasnow et al. (2025), Psychiatry Research (PMC12321878) — most frequent
//       intrusions at 6 weeks postpartum were suffocation/SIDS (82.4%) and accidents (77.3%); 60 of 233
//       participants (25.8%, "about one in four") reported intrusions involving intentional harm to the infant
//       at 6 weeks postpartum. Confirmed via full text.
//   [4] Miller, Hoxha, Wisner, Gossett (2015), Journal of Women's Health (PubMed 26121364) — of 461 women,
//       52 (11.2%) screened positive for OCD two weeks postpartum; 173 (37.5%, "more than one in three") had
//       subclinical obsessions/compulsions. Confirmed via abstract. MeSH geography is Illinois, consistent with
//       the docx's "Northwestern University" framing (Miller/Gossett, Northwestern Feinberg School of Medicine).
//   [5] National Institute of Mental Health, OCD publication — obsessions/compulsions definitions, the
//       can't-control/>1hr/day/real-problems screening criteria, common co-occurring mood/anxiety disorders,
//       therapy-and-or-medication treatment framing, ERP as a type of CBT, anxiety-rises-then-compulsions-
//       decrease trajectory, and SSRI 8-12-week/higher-dose-than-depression dosing — all confirmed verbatim.
//   [6] National Library of Medicine, LactMed Sertraline entry — "Most authoritative reviewers consider
//       sertraline a preferred antidepressant[] during breastfeeding" confirmed verbatim (read via rendered
//       page; low breastmilk levels / usually undetectable in infant serum also confirmed).
//
// Author: docx names "Christina Lindsay, PMHNP-BC, APRN" as suggested author — matches the roster as
// `christina-lindsay-pmhnp-bc-aprn` (her focus list already includes postpartum depression). No reviewer named
// in the docx, so kept as the standing clinical reviewer, Kristine Schlichting, PhD.
//
// Hero image: no sourced photo exists for this topic (checked ~/Downloads and the source docx — no embedded
// media). Placeholder is a plain abstract brand-color graphic at
// /Assets/Blogs/opt/{slug}-PLACEHOLDER.svg, matching the pattern used on the postpartum-rage and baby-blues
// posts — swap for a real, licensed photo before this goes fully live.
//
// Infographics: three section-adjacent SVGs, each its own visual language — a rectangular flowchart loop for
// the obsession/compulsion cycle, a branching triage diagram contrasting OCD with psychosis, and a 100-icon
// pictogram grid for the screening-prevalence stat — none reuse shapes from the two prior (postpartum-rage /
// baby-blues) posts. All rasterized to PNG and visually checked before shipping (per the standing rasterize-
// before-shipping rule): arrow directions, color-to-legend counts (11/38/51), and card text all confirmed
// correct in the render, not just read from source.
//
// Internal links (first occurrence only, every target verified to exist under src/pages/):
//   /what-we-treat/ocd/ · /what-we-treat/depression/ · /what-we-treat/anxiety/ ·
//   /treatment-methods/therapeutic-treatments/ · /treatment-methods/tms/ · /programs/medication-management/ ·
//   /programs/womens-wellness-iop/ · /locations/ · /admissions/ ·
//   /post/postpartum-rage-why-it-happens-and-when-to-get-help/ ·
//   /post/baby-blues-vs-postpartum-depression-how-to-tell-the-difference/ (companion pieces, same category).
export default {
  slug: "postpartum-ocd-and-intrusive-thoughts-what-they-mean-and-how-theyre-treated",
  title: "Postpartum OCD and Intrusive Thoughts: What They Mean and How They're Treated",
  metaTitle: "Postpartum OCD and Intrusive Thoughts | Hopewell Health Solutions",
  metaDescription:
    "Scary thoughts about your baby are common after birth and a core symptom of postpartum OCD. Here is what intrusive thoughts mean and how ERP therapy and medication help.",
  category: "Women's Mental Health",
  excerpt:
    "Having unwanted thoughts about something bad happening to your baby? They are common after birth, they do not mean you will act on them, and postpartum OCD is treatable — here is what to know.",
  heroImage:
    "/Assets/Blogs/opt/postpartum-ocd-and-intrusive-thoughts-what-they-mean-and-how-theyre-treated-PLACEHOLDER.svg",
  authorSlug: "christina-lindsay-pmhnp-bc-aprn",
  reviewerSlug: "kristine-a-schlichting-ph-d",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 9,
  intro:
    "Postpartum intrusive thoughts are sudden, unwanted thoughts or images of something bad happening to your baby. They are common in postpartum obsessive-compulsive disorder (OCD), and they are not a sign that you want to hurt your baby or that you will act on them. Many mothers are horrified by these thoughts and work hard to keep their baby safe. This article explains what intrusive thoughts are, how to tell when they point to perinatal OCD, and how exposure and response prevention (ERP) therapy and medication help.",
  sections: [
    {
      id: "what-are-postpartum-intrusive-thoughts",
      h2: "What Are Postpartum Intrusive Thoughts?",
      blocks: [
        {
          p: "An intrusive thought is a thought, image, or urge that pops into your mind without warning and feels wrong. After a baby arrives, these thoughts usually focus on the baby's safety. A new mother might suddenly picture or worry that:",
        },
        {
          ul: [
            "The baby stops breathing in the crib.",
            "She drops the baby or falls down the stairs while carrying them.",
            "Germs on her hands or on bottles make the baby sick.",
            "She harms the baby on purpose.",
          ],
        },
        {
          p: "These thoughts are common. In a 2025 study, most new mothers reported upsetting thoughts about their baby in the weeks after giving birth. The most frequent were fears of the baby suffocating or being hurt in an accident. About one in four mothers in the study reported thoughts of harming the baby on purpose at 6 weeks postpartum.",
        },
      ],
    },
    {
      id: "does-having-these-thoughts-mean-you-would-act-on-them",
      h2: "Does Having These Thoughts Mean You Would Act on Them?",
      blocks: [
        {
          p: "No. Intrusive thoughts are not wishes or plans. The Office on Women's Health states that women with <a href=\"/what-we-treat/ocd/\">postpartum OCD</a> know their thoughts are disturbing and are unlikely to ever act on them. Postpartum Support International describes these frightening images as a sign of <a href=\"/what-we-treat/anxiety/\">anxiety</a>, not a loss of touch with reality.",
        },
        {
          p: "Parents with intrusive thoughts are more likely to avoid whatever triggers the thought and anything they fear could harm the baby. For example, a mother who pictures dropping the baby on the stairs may ask her partner to carry the baby instead.",
        },
        {
          p: "Postpartum psychosis is a different and rare condition. A person with psychosis may see or hear things that are not there or hold firm beliefs that are not true. The section on psychosis below explains the warning signs.",
        },
      ],
    },
    {
      id: "what-is-perinatal-ocd",
      h2: "What Is Perinatal OCD?",
      blocks: [
        {
          p: "Obsessive-compulsive disorder has two parts. Obsessions are repeated thoughts, urges, or images that are unwanted and cause anxiety. Compulsions are actions a person feels driven to repeat, often to ease the anxiety an obsession causes.",
        },
        {
          p: "Perinatal OCD is OCD that shows up during pregnancy, after a miscarriage, or after birth. The obsessions and compulsions usually center on the health and safety of the pregnancy or the baby. When symptoms begin after birth, it is often called postpartum OCD.",
        },
        {
          p: "In a Northwestern University study of new mothers, about 11% screened positive for OCD two weeks after birth. More than one in three had milder obsessions or compulsions that did not reach that level. A personal or family history of anxiety or OCD raises the risk.",
        },
        {
          img: "/Assets/Blogs/perinatal-ocd-screening-pictogram.svg",
          alt: "Out of 100 new mothers screened two weeks after birth in one study, about 11 screened positive for OCD, 38 more had milder obsessions or compulsions short of OCD, and 51 reported no such symptoms.",
        },
        {
          p: "The difference between ordinary new-parent worry and OCD is how much the thoughts take over. According to the National Institute of Mental Health (NIMH), people with OCD usually cannot control their obsessions or compulsions, spend more than one hour a day on them, and have real problems in daily life because of them.",
        },
      ],
    },
    {
      id: "what-are-postpartum-ocd-symptoms",
      h2: "What Are Postpartum OCD Symptoms?",
      blocks: [
        {
          p: "Postpartum OCD symptoms can include:",
        },
        {
          ul: [
            "Upsetting thoughts or images about the baby that repeat and feel out of character.",
            "Cleaning, washing, or sterilizing far more than needed.",
            "Checking on the baby or checking things around the house over and over again.",
            "Counting or reordering things until they feel right.",
            "Avoiding tasks that trigger the thoughts, or fear of being left alone with the baby.",
            "Refusing to leave the house or to let trusted people hold the baby.",
            "Staying on high alert for any possible danger to the baby.",
          ],
        },
        {
          p: "Compulsion brings short relief from anxiety. The relief fades, the thought returns, and the cycle starts again. It is also common for people with OCD to have <a href=\"/what-we-treat/depression/\">depression</a> or another anxiety condition at the same time.",
        },
        {
          img: "/Assets/Blogs/ocd-cycle-loop.svg",
          alt: "The postpartum OCD cycle: an intrusive thought causes anxiety to rise, which leads to a compulsion like checking or cleaning, which brings brief relief, before the thought returns and the cycle repeats.",
        },
      ],
    },
    {
      id: "how-is-postpartum-ocd-different-from-postpartum-psychosis",
      h2: "How Is Postpartum OCD Different From Postpartum Psychosis?",
      blocks: [
        {
          p: "With postpartum OCD, the thoughts feel unwanted and upsetting. You know they do not make sense, and you take steps to protect your baby.",
        },
        {
          p: "Postpartum psychosis is a medical emergency. It affects about 1 to 2 of every 1,000 new mothers. Signs include:",
        },
        {
          ul: [
            "Seeing or hearing things others do not",
            "Strange beliefs",
            "Rapid mood swings",
            "Trouble communicating",
            "Going more than two days with little or no need for sleep",
          ],
        },
        {
          img: "/Assets/Blogs/ocd-vs-psychosis-triage.svg",
          alt: "Postpartum OCD versus postpartum psychosis: OCD is common and treatable, with thoughts that feel unwanted and no loss of touch with reality; psychosis is rare, affecting about 1 to 2 of every 1,000 births, and is a medical emergency with signs like seeing or hearing things that are not there and strange, fixed beliefs.",
        },
        {
          p: "Women with postpartum psychosis may have a higher risk of harming their baby. Anyone with these signs needs to call 911 or go to the nearest emergency room.",
        },
      ],
    },
    {
      id: "how-is-postpartum-ocd-treated",
      h2: "How Is Postpartum OCD Treated?",
      blocks: [
        {
          p: "Postpartum OCD treatment usually includes therapy, medication, or both. NIMH notes that some types of therapy can work as well as medication for many people, while others do best with a combination. Without treatment, OCD symptoms can become severe and get in the way of daily life.",
        },
        { h3: "Exposure and Response Prevention (ERP)" },
        {
          p: "ERP is a type of <a href=\"/treatment-methods/therapeutic-treatments/\">cognitive behavioral therapy</a>, a talk therapy that helps people change unhelpful patterns of thinking and behavior. In ERP, a therapist guides a person to face feared thoughts and situations in small, planned steps without turning to compulsions to ease the anxiety. Postpartum Support International lists ERP among the therapies used for perinatal OCD.",
        },
        {
          p: "Here is how that can look in practice. A mother who fears hurting her baby during bath time might start by filling the baby tub with her therapist's guidance. A later step might be giving the baby a full bath without checking the water again and again. You and your therapist choose each step together.",
        },
        {
          p: "ERP can feel uncomfortable at first because anxiety rises before it fades. For most people, compulsions decrease as they continue treatment.",
        },
        { h3: "Medication, Including While Breastfeeding" },
        {
          p: "The medicines most often used for OCD are a group of antidepressants called selective serotonin reuptake inhibitors (SSRIs). They can take 8 to 12 weeks to start working, and OCD sometimes needs higher doses than depression does.",
        },
        {
          p: "Many mothers worry about taking medicine while breastfeeding. Some options pass into breast milk in very small amounts. The National Library of Medicine reports that most expert reviewers consider sertraline, an SSRI, a preferred antidepressant during breastfeeding. A prescriber can walk you through the benefits and risks of each option.",
        },
        { h3: "Support at Home" },
        {
          p: "Telling a partner or trusted person what is happening can ease the shame and share the work of caring for the baby. Protecting sleep, asking for practical help, and joining a support group are among the care options that Postpartum Support International lists for perinatal OCD.",
        },
      ],
    },
    {
      id: "when-should-you-call-for-help",
      h2: "When Should You Call for Help?",
      blocks: [
        {
          p: "You do not need a diagnosis to reach out. Talk with your OB-GYN, midwife, primary care provider, or a mental health professional if:",
        },
        {
          ul: [
            "Intrusive thoughts keep coming back or feel impossible to manage.",
            "Checking, cleaning, or other rituals take up more than an hour a day.",
            "You avoid caring for your baby or being alone with them because of the thoughts.",
            "The thoughts come with sadness, hopelessness, or constant worry.",
            "You feel too afraid or ashamed to tell anyone what you are thinking.",
          ],
        },
        {
          note: "If you are thinking about hurting yourself or your baby, call or text 988 right away. If you notice signs of postpartum psychosis, call 911 or go to the nearest emergency room. For support any time, call or text the National Maternal Mental Health Hotline at 1-833-TLC-MAMA (1-833-852-6262). The hotline is open 24/7.",
        },
      ],
    },
    {
      id: "what-does-treatment-include",
      h2: "What Does Treatment Include?",
      blocks: [
        {
          p: "Care starts with an assessment. A clinician will ask about your thoughts, any rituals or avoidant behaviors, your mood, sleep, support at home, and past mental health. Symptoms like worry and low mood can look like other conditions, so a careful assessment matters.",
        },
        {
          p: "At Hopewell Health Solutions, OCD treatment is built around ERP, along with <a href=\"/programs/medication-management/\">psychiatric medication management</a>. A prescriber can review options with you, including medicines that are compatible with breastfeeding. When therapy and medication have not been enough, Hopewell also offers <a href=\"/treatment-methods/tms/\">transcranial magnetic stimulation (TMS)</a>.",
        },
        {
          p: "Our <a href=\"/programs/womens-wellness-iop/\">Women's Wellness Intensive Outpatient Program</a> offers structured care in a group designed for women who need more support than weekly therapy.",
        },
        {
          p: "To get started, call (860) 735-1448, and our team will verify your insurance benefits at no cost before your first appointment.",
        },
      ],
    },
    {
      id: "what-matters-most",
      h2: "What Matters Most",
      blocks: [
        {
          ul: [
            "Intrusive thoughts about harm coming to your baby are common after birth and are a core symptom of postpartum OCD.",
            "Having these thoughts does not mean you will act on them.",
            "Postpartum OCD symptoms include repeated upsetting thoughts, checking, cleaning, and avoiding the baby or certain tasks.",
            "ERP therapy and medication are the main treatments, and breastfeeding-friendly medication options exist.",
            "Call a provider when thoughts or rituals take over daily life. Call 911 for signs of psychosis, or 988 for thoughts of harming yourself or your baby.",
          ],
        },
      ],
    },
    {
      id: "there-is-hope-to-heal",
      h2: "There Is Hope to Heal",
      blocks: [
        {
          p: "Postpartum OCD is a signal that your mind needs support, not a reflection of who you are as a mother. It is also closely related to the anger and mood swings covered in our articles on <a href=\"/post/postpartum-rage-why-it-happens-and-when-to-get-help/\">postpartum rage</a> and the <a href=\"/post/baby-blues-vs-postpartum-depression-how-to-tell-the-difference/\">baby blues versus postpartum depression</a>.",
        },
        {
          p: "Hopewell Health Solutions provides outpatient mental health and psychiatric care from our <a href=\"/locations/\">Connecticut offices in Glastonbury, West Hartford, East Hampton, and Westbrook</a>, plus telehealth statewide.",
        },
        {
          p: "More than 50 licensed clinicians, prescribers, psychologists, and therapists work with us, and we have been a Joint Commission accredited practice serving Connecticut clients since 2013.",
        },
        {
          p: "Whether you are asking for yourself or for someone you love, <a href=\"/admissions/\">admissions</a> will walk you through the next step. Call (860) 735-1448.",
        },
      ],
    },
  ],
  sources: [
    {
      text: "Office on Women's Health. 2024. Perinatal Mental Health Conditions: Fact Sheet for Women and Their Support Network. U.S. Department of Health and Human Services.",
      href: "https://womenshealth.gov/sites/default/files/_documents/2025/talkingppd/23348-66_OWH24-Fact-Sheet-Perinatal-Mental-Health-Conditions-04_ADA_submitted.pdf",
    },
    {
      text: "Postpartum Support International. 2026. Perinatal Mental Health: Signs, Symptoms and Treatment. Postpartum Support International.",
      href: "https://postpartum.net/perinatal-mental-health/",
    },
    {
      text: "Abramowitz, J.S., Hellberg, S.N., Krasnow, J., et al. 2025. Prenatal Obsessive Beliefs Predict Postpartum Obsessive-Compulsive Symptoms: A Prospective Study. Psychiatry Research, 351, 116620.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12321878/",
    },
    {
      text: "Miller, E.S., Hoxha, D., Wisner, K.L., and Gossett, D.R. 2015. Obsessions and Compulsions in Postpartum Women Without Obsessive Compulsive Disorder. Journal of Women's Health, 24(10), 825-830.",
      href: "https://pubmed.ncbi.nlm.nih.gov/26121364/",
    },
    {
      text: "National Institute of Mental Health. 2023. Obsessive-Compulsive Disorder: When Unwanted Thoughts or Repetitive Behaviors Take Over. National Institute of Mental Health, NIH Publication No. 23-MH-4676.",
      href: "https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over",
    },
    {
      text: "National Library of Medicine. 2024. Sertraline. Drugs and Lactation Database (LactMed). National Institutes of Health.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK501191/",
    },
  ],
};
