// Hand-authored post (structured `sections` model).
// Source: HHS 2026Q3 Art. 10 — Neurodivergence and Suicidality: Risk Factors and Prevention Strategies
//
// All 8 source citations fetch-verified against the specific claim each supports (docs/blog-post-standard.md
// §1 — no miscitations found):
//   [1] Newell et al. (2023), Molecular Autism — pooled prevalence in autistic/possibly-autistic adults without
//       intellectual disability: suicidal ideation 34.2% ("about one in three"), suicide plans 21.9% ("about 22%"),
//       attempts/related behavior 24.3% ("about 24%"). All three figures confirmed against the published abstract.
//   [2] Garas et al. (2025), Brain and Behavior — meta-analysis of longitudinal ADHD studies in children/
//       adolescents: pooled OR for overall suicidal behavior = 3.336 (95% CI 2.201-5.057), confirmed via the
//       PMC full text. Docx's "roughly three times the odds" matches.
//   [3] Kim et al. (2024), eClinicalMedicine — pooled analysis, 301,841 autistic participants ("more than
//       300,000"), higher odds of self-harm among those with a co-occurring psychiatric condition (incl. ADHD,
//       mood disorders) than those without. Confirmed.
//   [4] Evans et al. (2024), Autism in Adulthood — masking/camouflaging in autistic adults associated with more
//       anxiety/depression symptoms, more past interpersonal trauma, lower self-esteem, weaker sense of self.
//       Title and framing confirmed as a real, correctly described study.
//   [5] Cervantes et al. (2024), J. Autism Dev. Disord. — ED-care interviews with autistic youth, caregivers,
//       clinicians on distress going unnoticed. Confirmed real/correctly described.
//   [6] NIMH, Warning Signs of Suicide — standard warning-sign list and "asking directly does not raise risk"
//       guidance. Confirmed against the live NIMH page.
//   [7] Goodwin et al. (2025), Autism in Adulthood — Autism Adapted Safety Plan (AASP), developed with autistic
//       adults/family/providers; concrete language, visual emotion tools, personal-question headings, flexible
//       storage. Confirmed.
//   [8] Rodgers et al. (2024), eClinicalMedicine — external pilot RCT of AASP feasibility/acceptability in
//       autistic adults with self-harm/suicidal behavior. Confirmed.
//
// Author: docx names "Tracy Sibley, PMHNP-BC" as suggested author — matches the roster as
// `tracy-sibley-pmhnp-bc-aprn` (Board-Certified Psychiatric Mental Health Nurse Practitioner). No reviewer
// named in the docx, so kept as the standing clinical reviewer, Kristine Schlichting, PhD.
//
// Sensitive-content handling: this post covers suicide risk factors directly. Kept the docx's own framing
// (prevention- and treatment-focused, no method detail, crisis resources surfaced prominently — 988 Suicide
// and Crisis Lifeline + 911) and did not add anything beyond it. Category: "Inclusive Care" (matches the
// existing LGBTQ+ inclusivity post — identity/accessibility-focused mental health content).
//
// Hero image: NO sourced photo exists yet for this topic (checked ~/Downloads and public/Assets/Blogs — nothing
// matches). Placeholder is a plain abstract brand-color graphic (not a stock photo standing in as real
// photography) at /Assets/Blogs/opt/{slug}-PLACEHOLDER.svg — swap for a real, licensed photo before publishing,
// per the site's real-photography-only rule.
//
// Infographics: three section-adjacent SVGs, each its own visual language (a two-panel risk-stat snapshot, an
// iceberg diagram for the cost of masking, and a five-part card strip for the adapted safety plan) — none reuse
// shapes from prior posts' bar chart / icon grid / loop diagram.
//
// Internal links (first occurrence only, every target verified to exist under src/pages/):
//   /what-we-treat/adhd/ · /treatment-methods/neuropsychological-testing/ · /treatment-methods/adhd-testing/ ·
//   /treatment-methods/dbt/ · /treatment-methods/therapeutic-treatments/ (CBT + ART) ·
//   /treatment-methods/emdr/ · /treatment-methods/genesight-testing/ · /treatment-methods/group-therapy/ ·
//   /programs/intensive-outpatient-program/ · /programs/partial-hospitalization-program/ ·
//   /programs/teen-tween-iop/ · /post/what-is-a-safety-plan-and-how-can-you-make-one/ (existing post on the
//   general safety-plan concept this article adapts).
export default {
  slug: "neurodivergence-and-suicidality-risk-factors-and-prevention-strategies",
  title: "Neurodivergence and Suicidality: Risk Factors and Prevention Strategies",
  metaTitle: "Neurodivergence and Suicidality | Hopewell Health Solutions",
  metaDescription:
    "Autistic and ADHD adults report suicidal thoughts at rates far above the general population. Here is what raises risk, the warning signs, and how prevention works.",
  category: "Inclusive Care",
  excerpt:
    "Autistic and ADHD adults report suicidal thoughts at rates well above the general population, and the reasons are specific: exhaustion from masking, untreated depression, and support built for a different kind of mind.",
  heroImage: "/Assets/Blogs/opt/neurodivergence-and-suicidality-risk-factors-and-prevention-strategies-PLACEHOLDER.svg",
  authorSlug: "tracy-sibley-pmhnp-bc-aprn",
  reviewerSlug: "kristine-a-schlichting-ph-d",
  datePublished: "2026-09-26",
  dateModified: "2026-09-26",
  readingMinutes: 8,
  intro:
    "A review of studies covering over 48,000 autistic and possibly autistic participants without an intellectual disability found that about one in three had experienced thoughts of suicide. That number says very little about autism itself. It says a great deal about what happens when a person spends years being misread, works twice as hard to look ordinary, and then reaches a mental health system built for someone else.",
  sections: [
    {
      id: "what-does-neurodivergence-mean",
      h2: "What Does Neurodivergence Mean?",
      blocks: [
        {
          p: 'Neurodivergence is a plain term for brains that process information differently from what schools, workplaces, and clinics expect. It covers autism, <a href="/what-we-treat/adhd/">Attention-Deficit/Hyperactivity Disorder (ADHD)</a>, and learning differences such as dyslexia. It is a description rather than a diagnosis, and a person can be neurodivergent with or without a formal evaluation.',
        },
      ],
    },
    {
      id: "how-much-higher-is-the-risk",
      h2: "How Much Higher Is the Risk?",
      blocks: [
        {
          p: "In that same review, about 22% of participants reported having made a plan, and about 24% reported attempts or related behavior. The pattern holds for ADHD: 2025 research that followed children with a clinical ADHD diagnosis over time found roughly three times the odds of suicidal behavior compared with children without the diagnosis.",
        },
        {
          img: "/Assets/Blogs/neurodivergence-risk-snapshot.svg",
          alt: "Two-panel risk snapshot: autistic and possibly autistic adults report 34.2% suicidal ideation, 21.9% suicide plans, and 24.3% attempts or related behavior; children and adolescents with ADHD have roughly 3.3 times the odds of suicidal behavior compared with children without the diagnosis.",
        },
        {
          p: "Elevated risk is not a forecast for any one person. Much of what pushes risk upward can be changed: untreated depression, isolation, exhaustion, and support that does not fit.",
        },
      ],
    },
    {
      id: "do-other-conditions-explain-part-of-the-risk",
      h2: "Do Other Conditions Explain Part of the Risk?",
      blocks: [
        {
          p: "Often, yes. An analysis covering more than 300,000 autistic people found higher odds of self-harm among those who also had a psychiatric condition, including ADHD and mood disorders, than among those who did not.",
        },
        {
          p: '<a href="/what-we-treat/depression/">Depression</a> and <a href="/what-we-treat/anxiety/">anxiety</a> are common alongside autism and ADHD, and both respond to treatment.',
        },
      ],
    },
    {
      id: "what-does-masking-cost",
      h2: "What Does Masking Cost?",
      blocks: [
        {
          p: "Masking, also called camouflaging, is the effort of hiding traits to fit in: rehearsing conversations in advance, forcing eye contact, and suppressing the movement (stimming) that would otherwise settle the nervous system.",
        },
        {
          p: "In a study of autistic adults, higher masking was associated with more symptoms of anxiety and depression, more past interpersonal trauma, lower self-esteem, and a weaker sense of being oneself.",
        },
        {
          img: "/Assets/Blogs/neurodivergence-masking-iceberg.svg",
          alt: "Iceberg diagram: above the waterline is what others see — rehearsed conversations, forced eye contact, suppressed stimming, someone who looks calm and composed. Below the waterline is the cost — more anxiety and depression, more past interpersonal trauma, lower self-esteem, and a weaker sense of self.",
        },
        {
          p: "For families, the practical version is this: a person who appears fine at work or school may be spending everything they have to appear that way. The collapse that follows at home is the cost of that performance.",
        },
      ],
    },
    {
      id: "why-does-distress-go-unnoticed",
      h2: "Why Does Distress Go Unnoticed?",
      blocks: [
        {
          p: "Risk gets missed when a person does not express distress the way others expect. In interviews about emergency care, autistic youth, caregivers, and clinicians described limited facial expression being read as calm, real difficulty naming a feeling on request, and rushed conversations producing answers that were not accurate. A steady voice is not proof that someone is safe.",
        },
      ],
    },
    {
      id: "what-are-the-warning-signs",
      h2: "What Are the Warning Signs?",
      blocks: [
        {
          p: "The standard signs still apply, along with some patterns specific to neurodivergent people. Act promptly when someone:",
        },
        {
          ul: [
            "Talks about suicide or says they are trapped or empty",
            "Talks about being a burden or having no reason to live",
            "Withdraws from people, dropping masking where it was always present before",
            "Gives away possessions with no clear purpose or criteria",
            "Shows extreme changes in mood, particularly if the behavior is new or increasing",
            "Loses interest in activities that were a reliable source of relief",
            "Stops asking for routine or rest, having given up on making life manageable",
          ],
        },
      ],
    },
    {
      id: "how-do-you-ask",
      h2: "How Do You Ask?",
      blocks: [
        {
          p: "Ask directly, in simple terms. Asking someone whether they are thinking about suicide does not plant the idea or raise the risk, and it is often the step that leads to help.",
        },
        {
          ul: [
            "Use the actual word. A question built on euphemism invites a literal answer that misses what you meant.",
            "Offer another channel. Some people answer honestly by text or in writing when speaking is too much.",
            "Do not promise secrecy. Say instead that you will help them get support and that you are staying with them.",
          ],
        },
      ],
    },
    {
      id: "what-goes-into-an-adapted-safety-plan",
      h2: "What Goes Into an Adapted Safety Plan",
      blocks: [
        {
          p: 'A <a href="/post/what-is-a-safety-plan-and-how-can-you-make-one/">safety plan</a> is a short written list of steps made in advance and used when distress starts to rise. The standard version covers personal warning signs, coping strategies, people and places that help, professional contacts, and how to make the environment safer.',
        },
        {
          img: "/Assets/Blogs/neurodivergence-adapted-safety-plan.svg",
          alt: "Five parts of a safety plan: personal warning signs, coping strategies, people and places that help, professional contacts, and making the environment safer. Adapted for autistic adults with concrete descriptions, visual emotion tools, personal-question headings, and flexible storage.",
        },
        {
          p: "Researchers working directly with autistic adults adapted that format. They replaced abstract wording with concrete descriptions, added visual tools for identifying emotions, rephrased headings as personal questions such as what matters to me, and let each person choose how the plan is stored so it can be found during a crisis.",
        },
        {
          p: "In a pilot trial, autistic adults who were experiencing self-harm and suicidal behavior completed these adapted plans with a trained supporter, and the approach proved workable enough to justify a full trial.",
        },
        {
          p: "Two details matter for families. Build the plan while the person is steady rather than during a crisis. Fill it with coping steps that work for that particular person.",
        },
      ],
    },
    {
      id: "what-helps-between-crises",
      h2: "What Helps Between Crises?",
      blocks: [
        {
          p: "Prevention is not only what happens during a crisis. A few daily habits protect against the next one:",
        },
        {
          ul: [
            "Protect recovery time after demanding days, and treat it as maintenance rather than avoidance.",
            "Keep one or two settings where masking is not required, and make contact there regular and low-demand, so the connection does not depend on conversation.",
            "Put accommodations in writing at work or school before exhaustion turns into a crisis.",
            "Keep sleep and routine steady, since unpredictability costs a neurodivergent person more.",
          ],
        },
      ],
    },
    {
      id: "when-should-someone-talk-to-a-professional",
      h2: "When Should Someone Talk to a Professional?",
      blocks: [
        {
          p: "Any of the following is a reason to bring in a clinician rather than wait:",
        },
        {
          ul: [
            "Thoughts of suicide, however calmly they are described.",
            "Functioning that has dropped for more than two weeks at work, school, or home.",
            "Withdrawal from the people and interests that usually sustain them.",
            "Self-harm of any frequency.",
            "Alcohol or substance use that has become the main way to manage overload.",
          ],
        },
        {
          p: 'If someone is thinking about suicide now, get help immediately. The <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer">988 Suicide and Crisis Lifeline</a> is available in the United States by call, text, or chat, around the clock. Call 911 in a life-threatening situation.',
        },
      ],
    },
    {
      id: "how-does-treatment-help",
      h2: "How Does Treatment Help",
      blocks: [
        {
          p: 'Treatment starts with an accurate picture. <a href="/treatment-methods/neuropsychological-testing/">Neuropsychological</a> and <a href="/treatment-methods/adhd-testing/">ADHD testing</a> can clarify what is actually happening, which matters when depression has been treated for years while an undiagnosed profile went unaddressed. Further care may include:',
        },
        {
          ul: [
            '<a href="/treatment-methods/dbt/">Dialectical Behavior Therapy (DBT)</a> for emotional regulation, distress tolerance, and crisis skills, including safety planning.',
            '<a href="/treatment-methods/therapeutic-treatments/">Cognitive Behavioral Therapy (CBT)</a>, adapted with concrete language and written materials.',
            '<a href="/treatment-methods/emdr/">Eye Movement Desensitization and Reprocessing (EMDR)</a> or Accelerated Resolution Therapy (ART) when trauma is part of the picture.',
            'Psychiatric medication management for co-occurring depression, anxiety, or ADHD, informed by <a href="/treatment-methods/genesight-testing/">GeneSight testing</a> where useful.',
            '<a href="/treatment-methods/group-therapy/">Group therapy</a>, which addresses the isolation that drives so much of the risk.',
          ],
        },
        {
          p: 'At Hopewell Health Solutions, treatment is available at all levels without changing teams. We offer weekly counseling, an <a href="/programs/intensive-outpatient-program/">Intensive Outpatient Program (IOP)</a>, and a <a href="/programs/partial-hospitalization-program/">Partial Hospitalization Program (PHP)</a>, with separate tracks for <a href="/programs/teen-tween-iop/">tweens, teens, and adults</a>.',
        },
      ],
    },
    {
      id: "what-matters-most",
      h2: "What Matters Most",
      blocks: [
        {
          ul: [
            "Autistic and ADHD people report suicidal thoughts at rates well above the general population, though most never attempt suicide.",
            "Much of the risk travels with treatable conditions such as depression and anxiety, which is why assessment comes before conclusions.",
            "Masking carries a cost, and a person who functions well in public may be closer to crisis than they appear.",
            "Flat expression, literal answers, and slower processing can hide distress, so ask in plain words and allow time for the answer.",
            "A written safety plan, adapted to how the person actually thinks, is one of the most practical prevention tools available.",
          ],
        },
      ],
    },
    {
      id: "there-is-hope-to-heal",
      h2: "There Is Hope to Heal",
      blocks: [
        {
          p: "If you are worried about yourself or someone in your family, a conversation with a clinician is worth having now rather than after a crisis.",
        },
        {
          p: "At Hopewell Health Solutions, the IOP and PHP offer tailored tracks for people with neurodivergence and different kinds of learners. Our programs are multi-modal and experiential so everyone can access the learning and treatment. We have 50+ expert clinicians who work with our clients to help them find success in their lives.",
        },
        {
          p: "We provide outpatient mental health care from six Connecticut locations, including Glastonbury, West Hartford, East Hampton, and Westbrook, plus telehealth statewide.",
        },
        {
          p: "Neurodivergent people do better with care built around the way they actually think. Whether you are asking for yourself or for someone you love, admissions will walk you through the next step. Call (860) 735-1448.",
        },
      ],
    },
  ],
  sources: [
    {
      text: "Newell, V., et al. (2023). A Systematic Review and Meta-Analysis of Suicidality in Autistic and Possibly Autistic People Without Co-Occurring Intellectual Disability. Molecular Autism, 14(1), Article 12.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10018918/",
    },
    {
      text: "Garas, P., et al. (2025). Longitudinal Suicide Risk in Children and Adolescents With Attention Deficit and Hyperactivity Disorder: A Systematic Review and Meta-Analysis. Brain and Behavior, 15(6), Article e70618.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12177204/",
    },
    {
      text: "Kim, J.H., et al. (2024). Association of Self-Harm and Suicidality With Psychiatric Co-Occurring Conditions in Autistic Individuals: A Systematic Review and Pooled Analysis. eClinicalMedicine, 77, Article 102863.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11474393/",
    },
    {
      text: "Evans, J.A., et al. (2024). What You Are Hiding Could Be Hurting You: Autistic Masking in Relation to Mental Health, Interpersonal Trauma, Authenticity, and Self-Esteem. Autism in Adulthood, 6(2), 229-240.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11317797/",
    },
    {
      text: "Cervantes, P.E., et al. (2024). Improving Emergency Department Care for Suicidality in Autism: Perspectives From Autistic Youth, Caregivers, and Clinicians. Journal of Autism and Developmental Disorders, 55(8), 2820-2833.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12296981/",
    },
    {
      text: "National Institute of Mental Health. (n.d.). Warning Signs of Suicide. National Institute of Mental Health.",
      href: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide",
    },
    {
      text: "Goodwin, J., et al. (2025). Adapting Safety Plans for Autistic Adults With Involvement From the Autism Community. Autism in Adulthood, 7(3), 293-302.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12174830/",
    },
    {
      text: "Rodgers, J., et al. (2024). Feasibility and Acceptability of Autism Adapted Safety Plans: An External Pilot Randomised Controlled Trial. eClinicalMedicine, 73, Article 102662.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11165343/",
    },
  ],
};
