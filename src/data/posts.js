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

export const posts = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .map((p) => (!p.bodyImages && BODY_IMAGES[p.slug] ? { ...p, bodyImages: BODY_IMAGES[p.slug] } : p))
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
