// Blog index — auto-loads every post in ./posts/*.js so each post is its own file
// (no merge conflicts when migrating in parallel; bodies stay verbatim and auditable).
//
// Two post formats are supported by the /post/[slug] template:
//   • Migrated posts  → `bodyHtml` (verbatim HTML from the live page) + `metaTitle`/`metaDescription`
//   • Hand-authored   → structured `sections` (see the FMLA post for the block format)
// Required on every post: slug (EXACT live URL slug), title, category, datePublished,
// authorSlug, reviewerSlug, heroImage, excerpt.

const modules = import.meta.glob("./posts/*.js", { eager: true });

// Task 16 (client doc "Hopewell Website Updates"): 2 in-body photos for the most important
// articles (pillar topics first). Real Hopewell photos only, no staff/people shots, each anchored
// to the section it illustrates via `afterHeading` (see /post/[slug].astro). A post's own
// `bodyImages` field, if set, wins over this map.
const H = "/Assets/hhs-2026/";
const BODY_IMAGES = {
  "what-is-iop": [
    { src: `${H}iop-group-room-lights.webp`, alt: "Hopewell's intensive outpatient group room in Glastonbury, CT, set up for an afternoon IOP session", afterHeading: "What is an Intensive Outpatient Program" },
    { src: `${H}group-lounge-feelings-wheel.webp`, alt: "Group lounge with a feelings wheel on the wall, used for skills groups in Hopewell's IOP", afterHeading: "Key Components" },
  ],
  "what-is-a-partial-hospitalization-program-php": [
    { src: `${H}php-group-room.webp`, alt: "The partial hospitalization program (PHP) group room at Hopewell Health Solutions in Connecticut", afterHeading: "What to Expect in a PHP" },
    { src: `${H}group-lounge-beach-mural.webp`, alt: "Day-program lounge with a beach mural and circle seating at Hopewell Health Solutions", afterHeading: "Why PHP Matters" },
  ],
  "php-vs-iop-which-level-of-care-is-right-for-you": [
    { src: `${H}east-hampton-waiting-room-2.webp`, alt: "Open treatment space at Hopewell's East Hampton, CT office", afterHeading: "What Is a Partial Hospitalization Program" },
    { src: `${H}group-lounge-feelings-wheel-2.webp`, alt: "IOP group lounge with circle seating and a feelings wheel at Hopewell Health Solutions", afterHeading: "What Is an Intensive Outpatient Program" },
  ],
  "iop-vs-outpatient-therapy-which-option-is-right-for-you": [
    { src: `${H}group-room-bright.webp`, alt: "A bright group therapy room where Hopewell's IOP groups meet several days a week", afterHeading: "What Is an IOP" },
    { src: `${H}westbrook-counseling-office.webp`, alt: "A one-on-one outpatient counseling office at Hopewell's Westbrook, CT location", afterHeading: "Key Differences" },
  ],
  "addiction-iop-treatment-what-it-is-and-why-it-works": [
    { src: `${H}iop-group-room-lights.webp`, alt: "Hopewell's IOP group room, where addiction recovery groups meet in Glastonbury, CT", afterHeading: "Why Does IOP Work for Addiction" },
    { src: `${H}south-glastonbury-med-waiting-room.webp`, alt: "Waiting area at Hopewell's South Glastonbury office, where IOP and medication appointments are held", afterHeading: "What to Expect in an IOP Session" },
  ],
  "are-you-a-high-functioning-alcoholic": [
    { src: `${H}westbrook-therapy-office.webp`, alt: "A private therapy office at Hopewell's Westbrook, CT location, a discreet place to talk about drinking", afterHeading: "Why Recognizing This Matters" },
    { src: `${H}westbrook-beach-pier.webp`, alt: "A walk along the pier near Hopewell's Westbrook office on the Connecticut shoreline", afterHeading: "What You Can Do" },
  ],
  "anxiety-coping-strategies-expert-tips-for-finding-calm": [
    { src: `${H}westbrook-beach-walk.webp`, alt: "Two people walking on the beach near Hopewell's Westbrook office, a simple way to calm anxiety", afterHeading: "Coping Strategies" },
    { src: `${H}sg-green-room.webp`, alt: "A calm, plant-filled therapy room at Hopewell's South Glastonbury office", afterHeading: "Therapy and Medication for Anxiety" },
  ],
  "what-are-the-levels-of-anxiety-and-when-do-you-need-more-than-therapy": [
    { src: `${H}sg-therapy-office.webp`, alt: "A therapy office at Hopewell's South Glastonbury location for individual anxiety treatment", afterHeading: "Social Anxiety" },
    { src: `${H}group-lounge-feelings-wheel.webp`, alt: "Hopewell's IOP group lounge, for when weekly therapy is not enough for anxiety", afterHeading: "When Is Therapy Not Enough" },
  ],
  "iop-for-depression-in-connecticut-when-outpatient-treatment-is-enough": [
    { src: `${H}east-hampton-counseling-room.webp`, alt: "A sunny counseling room at Hopewell's East Hampton, CT office", afterHeading: "How Does Outpatient Treatment Help Depression" },
    { src: `${H}group-room-bright.webp`, alt: "Hopewell's group room, where adults in the depression IOP meet in Connecticut", afterHeading: "The Benefits of an IOP for Depression" },
  ],
  "guide-to-teen-counseling-navigating-challenges-and-promoting-mental-health": [
    { src: `${H}sg-therapy-office.webp`, alt: "A comfortable counseling office for teens at Hopewell's South Glastonbury location", afterHeading: "What to Expect in Teen Counseling" },
    { src: `${H}sg-family-room.webp`, alt: "The family room at Hopewell's South Glastonbury office, used for parent and family sessions", afterHeading: "How Parents Can Support" },
  ],
  "signs-you-or-your-teen-need-more-than-weekly-therapy-when-iop-is-the-right-step": [
    { src: `${H}tx-south-glastonbury-office.webp`, alt: "An individual therapy office at Hopewell's South Glastonbury location, where weekly sessions happen", afterHeading: "IOP vs Weekly Therapy" },
    { src: `${H}teen-iop-outside.webp`, alt: "Teens in Hopewell's adolescent IOP spending time outside between groups", afterHeading: "What Are the Benefits of an IOP" },
  ],
  "how-womens-trauma-differs-from-mens-and-how-group-therapy-supports-healing": [
    { src: `${H}group-lounge-feelings-wheel-2.webp`, alt: "The group lounge where Hopewell's Women's Trauma IOP meets, with a feelings wheel on the wall", afterHeading: "How Group Therapy Helps Women" },
    { src: `${H}westbrook-beach-group.webp`, alt: "A small group sitting together on the beach near Hopewell's Westbrook, CT office", afterHeading: "Healing Together" },
  ],
  "signs-of-addiction-in-women": [
    { src: `${H}south-glastonbury-waiting-room.webp`, alt: "A quiet, private waiting area at Hopewell's South Glastonbury office", afterHeading: "The Role of Shame and Stigma" },
    { src: `${H}tx-westbrook-office-2.webp`, alt: "A therapy office at Hopewell's Westbrook location for whole-person addiction treatment", afterHeading: "Treatment That Addresses the Whole Person" },
  ],
  "tms-what-is-it": [
    { src: `${H}tms-neurostar-device-only.webp`, alt: "The NeuroStar TMS device used for depression treatment at Hopewell Health Solutions", afterHeading: "How Does it Work" },
    { src: `${H}tms-chair.webp`, alt: "The TMS treatment chair at Hopewell Health Solutions, where patients sit awake during each session", afterHeading: "What Does Treatment Entail" },
  ],
  "a-new-dawn-in-depression-treatment-introducing-tms-at-hopewell-health-solutions": [
    { src: `${H}tms-neurostar-device.webp`, alt: "Hopewell's NeuroStar TMS system in the treatment room", afterHeading: "What is TMS" },
    { src: `${H}tms-chair.webp`, alt: "The reclining TMS chair at Hopewell Health Solutions in Connecticut", afterHeading: "What to Expect from a TMS Session" },
  ],
  "what-is-medication-management-a-comprehensive-guide-to-effective-treatment": [
    { src: `${H}sg-reception.webp`, alt: "Reception at Hopewell's South Glastonbury office, where medication management visits check in", afterHeading: "Understanding Medication Management" },
    { src: `${H}east-hampton-therapy-office.webp`, alt: "A provider office at Hopewell's East Hampton, CT location for psychiatric medication reviews", afterHeading: "Benefits of Medication Management" },
  ],
};

// SEO audit 2026-11-18: shorter <title> tags (≤60 chars) for posts whose headline runs long.
// The on-page H1 keeps the full headline; only the search-result title changes.
const SEO_TITLES = {
  "a-new-dawn-in-depression-treatment-introducing-tms-at-hopewell-health-solutions": "TMS for Depression: A New Dawn in Treatment | Hopewell",
  "addiction-treatment-and-the-brain-how-therapy-and-medication-can-help-rewire-your-mind": "Addiction and the Brain: How Therapy & Medication Help",
  "breaking-through-resistance-overcoming-the-challenges-of-starting-iop": "Overcoming the Challenges of Starting IOP | Hopewell",
  "building-a-meaningful-relationship-beyond-loneliness-and-addiction": "Relationships Beyond Loneliness and Addiction | Hopewell",
  "building-emotional-resilience-through-iop-how-to-bounce-back-from-lifes-challenges": "Building Emotional Resilience Through IOP | Hopewell",
  "does-porn-cause-anxiety-understanding-the-possible-connection": "Does Porn Cause Anxiety? Understanding the Connection",
  "empowering-healing-the-womens-trauma-group-at-hopewell-health-solutions": "Empowering Healing: Our Women's Trauma Group | Hopewell",
  "exploring-dbt-therapy-effectiveness-and-approach-at-hopewell-health-solutions": "DBT Therapy: Effectiveness and Approach | Hopewell",
  "exploring-genesight-testing-personalizing-mental-health-treatment-at-hopewell-health-solutions": "GeneSight Testing: Personalizing Treatment | Hopewell",
  "finding-the-path-to-recovery-substance-use-disorder-iop-at-hopewell-health-solutions": "Substance Use Disorder IOP: Path to Recovery | Hopewell",
  "guide-to-teen-counseling-navigating-challenges-and-promoting-mental-health": "Guide to Teen Counseling and Mental Health | Hopewell",
  "harmonizing-home-life-the-role-of-intensive-outpatient-programs-in-enhancing-family-dynamics": "How IOP Can Strengthen Family Dynamics | Hopewell",
  "how-changes-in-routine-during-summer-can-impact-mental-health": "How Summer Routine Changes Impact Mental Health | Hopewell",
  "how-do-you-increase-dopamine-naturally-healthy-strategies-for-you-or-a-loved-one": "How to Increase Dopamine Naturally | Hopewell",
  "how-intensive-outpatient-programs-iop-can-help-with-bullying": "How Intensive Outpatient Programs Help With Bullying",
  "how-much-does-iop-cost-in-connecticut-what-to-expect-with-insurance": "How Much Does IOP Cost in CT? Insurance Guide | Hopewell",
  "how-to-make-the-most-of-your-iop-experience-tips-for-success": "How to Make the Most of Your IOP: Tips | Hopewell",
  "how-tween-anxiety-is-treated-in-an-intensive-outpatient-program-iop": "How Tween Anxiety Is Treated in an IOP | Hopewell",
  "how-womens-trauma-differs-from-mens-and-how-group-therapy-supports-healing": "How Women's Trauma Differs and How Group Therapy Helps",
  "inpatient-vs-intensive-outpatient-programs-understanding-the-right-fit-for-your-child": "Inpatient vs. IOP: The Right Fit for Your Child | Hopewell",
  "iop-for-depression-in-connecticut-when-outpatient-treatment-is-enough": "IOP for Depression in Connecticut | Hopewell",
  "is-porn-addiction-really-a-problem-why-it-might-be-impacting-your-life-more-than-you-think": "Is Porn Addiction Really a Problem? | Hopewell",
  "meet-katherine-salvador-hopewell-health-solutions-mat-expert": "Meet Katherine Salvador, Our MAT Expert | Hopewell",
  "psychiatric-medications-for-addiction-how-they-support-recovery": "Psychiatric Medications for Addiction Recovery | Hopewell",
  "recovering-from-narcissistic-abuse-when-therapy-alone-isnt-enough": "Recovering From Narcissistic Abuse | Hopewell",
  "retraining-the-brain-why-our-intensive-outpatient-programs-are-8-12-weeks": "Retraining the Brain: Why IOP Lasts 8-12 Weeks | Hopewell",
  "secrets-from-a-504-insider-a-parents-guide-to-academic-accommodations": "A Parent's Guide to 504 Plans & Accommodations | Hopewell",
  "signs-you-or-your-teen-need-more-than-weekly-therapy-when-iop-is-the-right-step": "Signs You or Your Teen Need IOP, Not Just Weekly Therapy",
  "silent-panic-attacks-what-they-are-and-when-to-seek-treatment": "Silent Panic Attacks: What They Are & When to Get Help",
  "the-counterintuitive-magic-of-group-therapy-for-social-anxiety": "Group Therapy for Social Anxiety | Hopewell",
  "the-future-of-higher-education-what-the-experts-agree-on-and-what-it-means-to-parents": "The Future of Higher Education: What Parents Should Know",
  "the-importance-of-in-person-intensive-outpatient-programs-iops": "Why In-Person Intensive Outpatient Programs Matter",
  "the-path-to-sobriety-how-substance-use-disorder-therapy-programs-can-help-save-lives": "The Path to Sobriety: How SUD Programs Save Lives",
  "the-role-of-group-therapy-in-iop-why-connection-is-key-to-healing": "The Role of Group Therapy in IOP | Hopewell",
  "the-type-a-personality-redirect-control-and-keep-your-sanity-using-this-3-step-recipe": "The Type A Personality: A 3-Step Recipe | Hopewell",
  "top-5-reasons-to-engage-in-hopewell-health-solutions-tween-iop": "Top 5 Reasons to Choose Hopewell's Tween IOP",
  "understanding-medication-assisted-treatment-the-what-why-and-how": "Medication-Assisted Treatment: What, Why & How | Hopewell",
  "vivitrol-a-key-player-in-opioid-and-alcohol-dependence-treatment-at-hopewell-health-solutions": "Vivitrol for Opioid & Alcohol Dependence | Hopewell",
  "what-are-the-levels-of-anxiety-and-when-do-you-need-more-than-therapy": "Levels of Anxiety: When You Need More Than Therapy",
  "what-is-medication-management-a-comprehensive-guide-to-effective-treatment": "What Is Medication Management? A Guide | Hopewell",
  "what-makes-hopewells-intensive-outpatient-program-iop-so-special": "What Makes Hopewell's IOP So Special?",
  "what-programs-at-hopewell-are-eligible-for-ct-paid-leave-or-fmla": "Which Hopewell Programs Qualify for CT Paid Leave or FMLA?",
  "what-to-expect-on-your-first-day-of-intensive-outpatient-program-iop": "What to Expect on Your First Day of IOP | Hopewell",
  "why-are-young-adults-struggling-more-with-mental-health-issues": "Why Young Adults Are Struggling More With Mental Health",
  "why-is-hopewell-health-solutions-tween-iop-great-for-depression": "Why Our Tween IOP Helps With Depression | Hopewell",
  "why-the-er-is-not-mental-health-treatment-and-why-php-and-iop-is": "Why the ER Isn't Mental Health Treatment (PHP & IOP Are)",
  "why-trauma-is-different-when-it-happens-through-the-job-as-a-first-responder": "Why On-the-Job Trauma Is Different for First Responders",
};

export const posts = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .map((p) => (!p.bodyImages && BODY_IMAGES[p.slug] ? { ...p, bodyImages: BODY_IMAGES[p.slug] } : p))
  .map((p) => (!p.seoTitle && SEO_TITLES[p.slug] ? { ...p, seoTitle: SEO_TITLES[p.slug] } : p))
  .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

// Related posts: same category first, then most-recent others. Excludes the current post.
export function relatedPosts(slug, limit = 3) {
  const current = getPost(slug);
  const others = posts.filter((p) => p.slug !== slug);
  const sameCat = others.filter((p) => current && p.category === current.category);
  const rest = others.filter((p) => !current || p.category !== current.category);
  return [...sameCat, ...rest].slice(0, limit);
}
