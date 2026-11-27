// Hand-authored post (structured `sections` model).
// Source: HHS 2026Q4 Art. 17 — Edinburgh Postnatal Depression Scale (EPDS): What Your Score Means
//
// All 5 source citations fetch-verified against the specific claim each supports (docs/blog-post-standard.md
// §1). [1] ACOG's full Clinical Practice Guideline No. 4 is member-gated on acog.org (public page is abstract
// only), so verified against a cached full-text PDF mirror of the same guideline instead — confirmed verbatim:
// 10+ positive screen; screening at first prenatal visit, later in pregnancy, and postpartum visits; EPDS vs.
// PHQ-9 "both find depression about equally well"; two cutoffs (10 more sensitive, 13 more specific; general
// EPDS literature, not an ACOG-specific framing — corroborated via independent secondary sources since ACOG's
// text doesn't use this exact "fewer follow-up resources" phrasing); 10–14 mild / 15–19 moderate / >19 severe
// with increased bipolar-disorder risk; EPDS anxiety subscale (items 3, 4, 5) summing to 5+ correlating with a
// positive GAD-7; bipolar-disorder screening required before starting pharmacotherapy; psychotherapy first-line
// at every severity, medication added for moderate/severe, patient preference, or prior medication need.
//   [2] CDC MMWR Vital Signs (Bauman et al. 2020) — 13.2% (~1 in 8) prevalence of self-reported postpartum
//       depressive symptoms, 2018 PRAMS data. Confirmed verbatim.
//   [3] Wisner et al. 2013, JAMA Psychiatry — 10,000 mothers screened 4–6 weeks postpartum at a Pittsburgh
//       women's hospital, 14.0% scored 10+; of those evaluated, 68.5% unipolar depression, ~2/3 comorbid
//       anxiety, 22.6% bipolar disorder; question 10 wording and answer choices; most question-10-positive
//       mothers answered "hardly ever." Confirmed verbatim.
//   [4] Earls et al. 2019, Pediatrics (AAP policy statement) — screening integrated into well-child visits at
//       1, 2, 4, and 6 months; connecting mothers to treatment/referral resources. Confirmed via independent
//       secondary summaries (full text is subscription-gated).
//   [5] NIMH, Perinatal Depression — 988/911 crisis guidance and the National Maternal Mental Health Hotline
//       (1-833-TLC-MAMA) confirmed verbatim. (NIMH's own page doesn't separately confirm "EPDS repeated to
//       track treatment progress" — that claim leans on ACOG's "measurement-guided treatment adjustments until
//       symptoms remit" language, cited alongside [1].)
//
// Author/reviewer: docx names match the roster exactly — Tracy Sibley, PMHNP-BC, APRN
// (`tracy-sibley-pmhnp-bc-aprn`) as suggested author, Kaitlyn Czapiga, LMSW (`kaitlyn-czapiga-lmsw`,
// "Clinical Team Lead, Westbrook" on the roster vs. the docx's "Women's Wellness IOP Lead Clinician" — same
// person, title wording drift per docs/blog-post-standard.md §1) as suggested reviewer.
//
// Hero image: PLACEHOLDER, not topic-matched. No photo for this article exists yet in elev8's stock article
// library (checked the Drive "HHS - Articles Graphic Files" folder — nothing staged as of 2026-11-27).
// post.heroImage feeds the BlogPosting schema's `image` field unconditionally (no null guard in
// [slug].astro), so leaving it unset produces invalid schema rather than just a missing banner — using the
// sitewide generic "Comprehensive Tailored Care" photo instead (same stand-in already live on the PHP post)
// so the page ships with valid markup. Swap for a real topic-matched photo once one is sourced — this was
// never meant to be the permanent hero.
//
// Infographics: three section-adjacent SVGs, each its own visual language (none reuse shapes from the other
// postpartum posts): a segmented score-scale/gauge (0–30, mild/moderate/severe bands, example score of 12), a
// two-level decision tree for question 10 (safe-right-now vs. call 911/988 now), and a five-step numbered
// pipeline from screening to re-screening.
//
// Internal links (first occurrence only, every target verified to exist under src/pages/):
//   /what-we-treat/depression/ · /treatment-methods/therapeutic-treatments/ · /treatment-methods/dbt/ ·
//   /programs/medication-management/ · /programs/womens-wellness-iop/ · /locations/ · /admissions/ ·
//   /post/baby-blues-vs-postpartum-depression-how-to-tell-the-difference/ (companion piece) ·
//   /post/postpartum-anxiety-symptoms-how-long-it-lasts-and-treatment/ (companion piece) ·
//   /post/postpartum-ocd-and-intrusive-thoughts-what-they-mean-and-how-theyre-treated/ (companion piece).
export default {
  slug: "edinburgh-postnatal-depression-scale-epds-what-your-score-means",
  title: "Edinburgh Postnatal Depression Scale (EPDS): What Your Score Means",
  metaTitle: "EPDS: What Your Score Means | Hopewell Health Solutions",
  metaDescription:
    "An EPDS score is a screening result, not a diagnosis. Learn what your number means and who to call next.",
  category: "Women's Mental Health",
  excerpt:
    "Did you fill out the EPDS at a checkup or your baby's pediatrician visit? A score of 10 or more usually means a follow-up with a clinician. Here is how EPDS scoring works, what a score like 12 means, and what happens next.",
  heroImage: "/Assets/Comprehensive%20Tailored%20Care.webp",
  heroAlt: "A Hopewell Health Solutions facilitator leading a women's support group in a warm, home-like group room",
  authorSlug: "tracy-sibley-pmhnp-bc-aprn",
  reviewerSlug: "kaitlyn-czapiga-lmsw",
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  readingMinutes: 8,
  intro:
    "The Edinburgh Postnatal Depression Scale (EPDS) is a 10-question postpartum depression screening that obstetric providers, pediatricians, and primary care clinicians use during pregnancy and the first year after birth. A score of 10 or more counts as a positive screen and is commonly followed up by a clinician. One question needs attention on its own: question 10 asks about thoughts of harming yourself, and any answer other than \"never\" means talking with a clinician the same day. If you have thoughts of harming yourself or your baby, or you feel confused or see or hear things others do not, call 911 or 988 now. This article explains how EPDS scoring works, what a score like 12 means, and what happens after a positive screen.",
  sections: [
    {
      id: "what-is-the-epds",
      h2: "What Is the EPDS?",
      blocks: [
        {
          p: "The EPDS is a short questionnaire about mood and worry. It lists 10 statements, and you pick one of four answers for each based on how you have felt over the past 7 days. Three of the statements ask about blaming yourself when things go wrong, feeling anxious or worried, and feeling scared or panicky for no clear reason. Each answer is worth 0 to 3 points, so totals range from 0 to 30.",
        },
        {
          p: "Screening happens in more than one office. The American College of Obstetricians and Gynecologists (ACOG) recommends screening at the first prenatal visit, later in pregnancy, and at postpartum visits. The American Academy of Pediatrics (AAP) asks pediatric offices to screen mothers at well-child visits during the baby's first six months, at 1, 2, 4, and 6 months. That is why the questionnaire may show up at your baby's checkup.",
        },
        {
          p: "Screening is common because postpartum <a href=\"/what-we-treat/depression/\">depression</a> is common. In a 2018 CDC survey, about 1 in 8 women with a recent live birth reported symptoms of postpartum depression.",
        },
      ],
    },
    {
      id: "is-the-epds-a-postpartum-depression-test",
      h2: "Is the EPDS a Postpartum Depression Test?",
      blocks: [
        {
          p: "No. The EPDS is a screening tool, not a diagnostic test. A screening shows who needs a closer look. Only an evaluation by a clinician can confirm postpartum depression or rule it out. Some offices use a different screening, the Patient Health Questionnaire-9 (PHQ-9). It has nine questions about depression, including one about self-harm. The EPDS has 10 questions and also asks about anxiety. Both find depression about equally well.",
        },
        {
          p: "The difference matters. In a study at a Pittsburgh women's hospital, 10,000 mothers were screened 4 to 6 weeks after birth, and 14% scored 10 or more. When researchers evaluated those mothers, 68.5% had depression as their main diagnosis, many also had an anxiety disorder, and 22.6% had bipolar disorder. The same score can point to different conditions, and each one is treated differently.",
        },
      ],
    },
    {
      id: "how-does-epds-scoring-work",
      h2: "How Does EPDS Scoring Work?",
      blocks: [
        {
          p: "Add up the points from all 10 answers. ACOG lists 10 or more as a positive screen for depression. The scale's developers suggested two cutoff scores. Offices that can arrange an evaluation for everyone who screens positive use 10. Offices with fewer follow-up resources may use 13, a higher score that flags fewer people. That is why some forms list 13, not 10, as a positive screen.",
        },
        {
          p: "Clinicians also look at where a score falls. In ACOG guidance, scores of 10 to 14 often reflect mild symptoms, 15 to 19 moderate symptoms, and above 19 severe symptoms with a higher chance of bipolar disorder. These ranges guide the follow-up conversation. They do not replace it.",
        },
        {
          img: "/Assets/Blogs/epds-score-scale.svg",
          alt: "A score scale from 0 to 30 showing negative screen (0 to 9), mild (10 to 14), moderate (15 to 19), and severe (above 19) ranges, with an example score of 12 marked in the mild range.",
        },
        {
          p: "Questions 3, 4, and 5 also work as a short anxiety check during pregnancy and after birth. If those three answers add up to 5 or more, the result lines up with a positive score on the GAD-7, a common anxiety screening. This can happen even when the total score is under 10. A total score under 10 is a negative screen for depression. It does not rule out anxiety, and it does not outrank how you feel. If you are struggling, tell a provider whatever your score was.",
        },
      ],
    },
    {
      id: "question-10-what-to-do-right-away-if-you-answered-yes",
      h2: "Question 10: What to Do Right Away If You Answered Yes",
      blocks: [
        {
          p: "Question 10 reads, \"The thought of harming myself has occurred to me.\" The answer choices are \"yes, quite often,\" \"sometimes,\" \"hardly ever,\" and \"never.\" Any answer other than \"never\" calls for follow-up questions from a clinician, even when the total score is low.",
        },
        {
          p: "A yes does not always mean an emergency. A clinician will ask how often the thoughts come, how strong they are, and whether there is any plan or intent to act on them. In the Pittsburgh study, most mothers who answered yes chose \"hardly ever.\" What to do next depends on what is happening now:",
        },
        {
          ul: [
            "If you have thoughts of harming yourself or your baby, or you feel confused, see or hear things that are not there, or feel suspicious or out of touch with reality, call 911 or 988 now.",
            "If you answered yes but feel safe right now, tell the clinician before you leave the office, or call your obstetric or primary care provider the same day.",
          ],
        },
        {
          img: "/Assets/Blogs/epds-question-10-decision.svg",
          alt: "A decision path for question 10: answering \"never\" needs no same-day follow-up, while any other answer means talking with a clinician the same day, then either telling the clinician you feel safe or calling 911 or 988 now if you are not.",
        },
        {
          p: "For support any time, call or text the <a href=\"https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline\" target=\"_blank\" rel=\"noopener noreferrer\">National Maternal Mental Health Hotline</a> at 1-833-TLC-MAMA (1-833-852-6262). It is free, confidential, and open 24/7, with counselors who speak English and Spanish.",
        },
        {
          p: "In a crisis, you can also call or text 988 to reach the <a href=\"https://988lifeline.org/\" target=\"_blank\" rel=\"noopener noreferrer\">988 Suicide &amp; Crisis Lifeline</a>. For support that is not urgent, the <a href=\"https://www.postpartum.net/get-help/psi-helpline/\" target=\"_blank\" rel=\"noopener noreferrer\">Postpartum Support International HelpLine</a> takes calls at 1-800-944-4773. You can also text \"HELP\" to 800-944-4773 in English or text 971-203-7773 in Spanish. Trained volunteers return messages and help you find local support. The HelpLine is not a crisis line.",
        },
      ],
    },
    {
      id: "my-score-was-12-at-the-pediatrician-what-happens-next",
      h2: "My Score Was 12 at the Pediatrician. What Happens Next?",
      blocks: [
        {
          p: "A score of 12 is a positive screen in the range ACOG describes as often mild. It does not mean you have postpartum depression, and it says nothing about how well you care for your baby. It means a clinician should take a closer look.",
        },
        {
          p: "The AAP asks pediatric offices to connect mothers with treatment and referral resources. Pediatricians care for your baby, so your own follow-up usually happens with a different clinician. Before you leave, ask who you should call. This might include your obstetric provider, primary care doctor, or a mental health clinician such as a psychiatric nurse practitioner, psychologist, or therapist.",
        },
        { h3: "What Happens at the Follow-Up Visit?" },
        {
          p: "The follow-up visit is a conversation. The clinician will ask what symptoms you have, how often they happen, how strong they are, how long they have lasted, and how they affect daily life. Expect questions about recent stress, the support you have at home, past mental health care, and family history.",
        },
        {
          p: "Your clinician may also check for medical causes, such as thyroid problems or anemia, sometimes with blood tests. If medication is on the table, ACOG recommends screening for bipolar disorder first.",
        },
        { h3: "What If My Score Was Under 10 but I Still Feel Off?" },
        {
          p: "The EPDS covers only the past 7 days, and symptoms can start at any point in pregnancy or the first year after birth. That is why screening is repeated at later visits. If your mood, sleep, or worry gets worse between visits, call your provider instead of waiting for the next screening.",
        },
        { h3: "Can I Take the EPDS on My Own?" },
        {
          p: "Many websites post the EPDS so you can score it at home. That can be a useful starting point. Bring the result to a clinician either way, because only an evaluation can tell you what the score means for you.",
        },
      ],
    },
    {
      id: "how-is-postpartum-depression-treated-after-a-positive-screen",
      h2: "How Is Postpartum Depression Treated After a Positive Screen?",
      blocks: [
        {
          p: "Treatment depends on what the evaluation finds. For depression and anxiety during pregnancy and after birth, ACOG lists <a href=\"/treatment-methods/therapeutic-treatments/\">therapy</a> as the first treatment at every level of severity. Medication alongside therapy is often recommended for moderate or severe symptoms, for people who prefer it, and for people who needed medication before.",
        },
        {
          p: "A provider can review treatment options with you, including options if you are pregnant or nursing. Once treatment starts, the EPDS is often repeated to track how well it is working.",
        },
        {
          img: "/Assets/Blogs/epds-care-pathway.svg",
          alt: "Five steps from a positive EPDS screen to treatment: screening, a positive score, a follow-up evaluation, therapy with medication added for more severe symptoms, and re-screening to track how treatment is working.",
        },
      ],
    },
    {
      id: "what-does-treatment-include",
      h2: "What Does Treatment Include?",
      blocks: [
        {
          p: "Care at Hopewell Health Solutions starts with an assessment. A clinician will ask about your mood, sleep, worry, feeding, support at home, and any medicines you take.",
        },
        {
          p: "Our prescribers offer <a href=\"/programs/medication-management/\">psychiatric medication management</a> in person or by telehealth, including a review of whether a medicine fits with breastfeeding. Our therapists use cognitive behavioral therapy (CBT) and <a href=\"/treatment-methods/dbt/\">dialectical behavior therapy (DBT)</a> as part of depression treatment.",
        },
        {
          p: "Our <a href=\"/programs/womens-wellness-iop/\">Women's Wellness Intensive Outpatient Program</a> offers structured care for women who need more support than weekly therapy, with groups in Glastonbury and Westbrook, in person or online.",
        },
        {
          p: "To get started, <a href=\"/admissions/\">contact our admissions team</a> at (860) 735-1448.",
        },
      ],
    },
    {
      id: "what-matters-most",
      h2: "What Matters Most",
      blocks: [
        {
          ul: [
            "The EPDS is a 10-question screening for postpartum depression. A score of 10 or more is a positive screen.",
            "A positive screen is not a diagnosis. A clinician's evaluation confirms what is going on.",
            "Any answer other than \"never\" on question 10 needs a conversation with a clinician the same day.",
            "A score of 12 at the pediatrician means you should ask who to call and book a follow-up with your own provider.",
            "Call 911 or 988 now for thoughts of harming yourself or your baby, confusion, or hallucinations.",
          ],
        },
      ],
    },
    {
      id: "there-is-hope-to-heal",
      h2: "There Is Hope to Heal: Mental Health Care for Mothers in Connecticut",
      blocks: [
        {
          p: "Hopewell Health Solutions provides outpatient mental health and psychiatric care from our <a href=\"/locations/\">Connecticut offices in Glastonbury, West Hartford, East Hampton, and Westbrook</a>, plus telehealth statewide.",
        },
        {
          p: "Whether you are asking for yourself or for someone you love, admissions will walk you through the next step. Related reading: <a href=\"/post/baby-blues-vs-postpartum-depression-how-to-tell-the-difference/\">baby blues vs. postpartum depression</a>, <a href=\"/post/postpartum-anxiety-symptoms-how-long-it-lasts-and-treatment/\">postpartum anxiety</a>, and <a href=\"/post/postpartum-ocd-and-intrusive-thoughts-what-they-mean-and-how-theyre-treated/\">postpartum OCD and intrusive thoughts</a>.",
        },
        {
          p: "Call (860) 735-1448.",
        },
      ],
    },
  ],
  sources: [
    {
      text: "American College of Obstetricians and Gynecologists. 2023. Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum: ACOG Clinical Practice Guideline No. 4. Obstetrics & Gynecology, 141(6), 1232–1261.",
      href: "https://www.acog.org/clinical/guidance/clinical-practice-guideline/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum",
    },
    {
      text: "Bauman, B.L., Ko, J.Y., Cox, S., et al. 2020. Vital Signs: Postpartum Depressive Symptoms and Provider Discussions About Perinatal Depression — United States, 2018. Morbidity and Mortality Weekly Report, 69(19), 575–581.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7238954/",
    },
    {
      text: "Wisner, K.L., Sit, D.K., McShea, M.C., et al. 2013. Onset Timing, Thoughts of Self-Harm, and Diagnoses in Postpartum Women With Screen-Positive Depression Findings. JAMA Psychiatry, 70(5), 490–498.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4440326/",
    },
    {
      text: "Earls, M.F., Yogman, M.W., Mattson, G., et al. 2019. Incorporating Recognition and Management of Perinatal Depression Into Pediatric Practice. Pediatrics, 143(1), e20183259.",
      href: "https://pubmed.ncbi.nlm.nih.gov/30559120/",
    },
    {
      text: "National Institute of Mental Health. 2023. Perinatal Depression. National Institute of Mental Health, NIH Publication No. 23-MH-8116.",
      href: "https://www.nimh.nih.gov/health/publications/perinatal-depression",
    },
  ],
};
