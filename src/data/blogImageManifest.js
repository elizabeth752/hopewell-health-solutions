// Single source of truth for blog post imagery — read directly by
// src/pages/post/[slug].astro, replacing the old per-category photo rotation
// (PR #73) that kept reusing the same handful of generic photos across dozens
// of unrelated posts.
//
// One row per post. Add a slug here to give that post an in-article photo;
// a post with no entry (or no `inline` field) renders with no second image
// rather than a mismatched generic one — see docs/blog-post-standard.md.
//
// `preview` is optional and only needed when the link-share image should NOT
// be the post's own heroImage — e.g. a post whose hero is a diagram/graphic
// where a real photo makes a better social-card preview. Leave it out and
// [slug].astro falls back to { src: post.heroImage, alt: post.heroAlt }
// automatically, so every post gets a unique preview with no extra work.
//
// Every `src` here is checked against the filesystem, and every image's
// total use count across this file is checked for runaway reuse, by
// `npm run check:blog-images` (wired into `prebuild`, so a missing file or a
// photo repeating past the threshold fails/warns on every build).
export const blogImages = {
  "a-new-dawn-in-depression-treatment-introducing-tms-at-hopewell-health-solutions": {
    inline: { src: "/Assets/TMS/neurostar-tms.webp", alt: "The NeuroStar TMS system used for Transcranial Magnetic Stimulation at Hopewell Health Solutions" },
  },
  "addiction-iop-treatment-what-it-is-and-why-it-works": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "addiction-treatment-and-the-brain-how-therapy-and-medication-can-help-rewire-your-mind": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "anxiety-coping-strategies-expert-tips-for-finding-calm": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "are-you-a-high-functioning-alcoholic": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "breaking-through-resistance-overcoming-the-challenges-of-starting-iop": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "building-emotional-resilience-through-iop-how-to-bounce-back-from-lifes-challenges": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "common-myths-about-iop-misconceptions-and-providing-clarity": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "emdr-therapy-what-it-is-side-effects-and-what-to-expect": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "empowering-healing-the-womens-trauma-group-at-hopewell-health-solutions": {
    inline: { src: "/Assets/couple%20hugging.webp", alt: "Women in Hopewell Health Solutions' Women's Trauma IOP group session" },
  },
  "exploring-dbt-therapy-effectiveness-and-approach-at-hopewell-health-solutions": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "exploring-genesight-testing-personalizing-mental-health-treatment-at-hopewell-health-solutions": {
    inline: { src: "/Assets/Guy%20facing%20the%20horizon.webp", alt: "A clinician reviewing a treatment plan with a patient at Hopewell Health Solutions" },
  },
  "finding-the-path-to-recovery-substance-use-disorder-iop-at-hopewell-health-solutions": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "first-responder-mental-health-when-you-need-help": {
    inline: { src: "/Assets/service/first-responder-session.webp", alt: "A first responder in a one-on-one session with a clinician at Hopewell Health Solutions" },
  },
  "guide-to-teen-counseling-navigating-challenges-and-promoting-mental-health": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "harmonizing-home-life-the-role-of-intensive-outpatient-programs-in-enhancing-family-dynamics": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "how-intensive-outpatient-programs-iop-can-help-with-bullying": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "how-much-does-iop-cost-in-connecticut-what-to-expect-with-insurance": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "how-the-world-of-social-media-affects-teens": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "how-to-help-your-kids-during-a-mental-health-crisis": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "how-to-know-if-youre-experiencing-trauma": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "how-to-make-the-most-of-your-iop-experience-tips-for-success": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "how-to-recognize-when-its-time-to-see-a-therapist": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "how-tween-anxiety-is-treated-in-an-intensive-outpatient-program-iop": {
    inline: { src: "/Assets/tweens-1729660767703.webp", alt: "A group of teens supporting one another" },
  },
  "how-womens-trauma-differs-from-mens-and-how-group-therapy-supports-healing": {
    inline: { src: "/Assets/couple%20hugging.webp", alt: "Women in Hopewell Health Solutions' Women's Trauma IOP group session" },
  },
  "inpatient-vs-intensive-outpatient-programs-understanding-the-right-fit-for-your-child": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "iop-for-depression-in-connecticut-when-outpatient-treatment-is-enough": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "iop-vs-outpatient-therapy-which-option-is-right-for-you": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "is-porn-addiction-really-a-problem-why-it-might-be-impacting-your-life-more-than-you-think": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "mood-swings-vs-a-mood-disorder-and-what-iop-does-about-it": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "php-vs-iop-which-level-of-care-is-right-for-you": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "psychiatric-medications-for-addiction-how-they-support-recovery": {
    inline: { src: "/Assets/Guy%20facing%20the%20horizon.webp", alt: "A clinician reviewing a treatment plan with a patient at Hopewell Health Solutions" },
  },
  "quick-parenting-tips-for-managing-a-childs-anxiety": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "retraining-the-brain-why-our-intensive-outpatient-programs-are-8-12-weeks": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "secrets-from-a-504-insider-a-parents-guide-to-academic-accommodations": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "signs-of-addiction-in-women": {
    inline: { src: "/Assets/service/womens-wellness.webp", alt: "Women in Hopewell Health Solutions' Women's Wellness IOP" },
  },
  "signs-you-or-your-teen-need-more-than-weekly-therapy-when-iop-is-the-right-step": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "ssris-how-do-they-work-why-are-they-important": {
    inline: { src: "/Assets/Guy%20facing%20the%20horizon.webp", alt: "A clinician reviewing a treatment plan with a patient at Hopewell Health Solutions" },
  },
  "star-behavior-five-tips-for-stellar-behavior-charts": {
    inline: { src: "/Assets/teen%20smiling.webp", alt: "A teenager at Hopewell Health Solutions" },
  },
  "suboxone-a-cornerstone-of-mat-at-hopewell-health-solutions": {
    inline: { src: "/Assets/Guy%20facing%20the%20horizon.webp", alt: "A clinician reviewing a treatment plan with a patient at Hopewell Health Solutions" },
  },
  "substance-abuse-and-young-adults-why-its-a-growing-concern": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "the-association-between-ptsd-and-addiction": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "the-connection-between-trauma-and-addiction": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "the-counterintuitive-magic-of-group-therapy-for-social-anxiety": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "the-importance-of-in-person-intensive-outpatient-programs-iops": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "the-path-to-sobriety-how-substance-use-disorder-therapy-programs-can-help-save-lives": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "the-power-of-presence-why-in-person-therapy-remains-crucial": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "the-role-of-group-therapy-in-iop-why-connection-is-key-to-healing": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "tms-what-is-it": {
    inline: { src: "/Assets/TMS/neurostar-tms.webp", alt: "The NeuroStar TMS system used for Transcranial Magnetic Stimulation at Hopewell Health Solutions" },
  },
  "top-5-reasons-to-engage-in-hopewell-health-solutions-tween-iop": {
    inline: { src: "/Assets/tweens-1729660767703.webp", alt: "A group of teens supporting one another" },
  },
  "trauma-and-first-responders-the-hidden-cost-of-heroism": {
    inline: { src: "/Assets/service/first-responder-session.webp", alt: "A first responder in a one-on-one session with a clinician at Hopewell Health Solutions" },
  },
  "trauma-is-a-trigger-word-how-to-calm-the-trauma-storms": {
    inline: { src: "/Assets/service/trauma-informed-individual.webp", alt: "A private, trauma-informed counseling room at Hopewell Health Solutions" },
  },
  "understanding-addiction-insights-from-experts": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "understanding-medication-assisted-treatment-the-what-why-and-how": {
    inline: { src: "/Assets/Guy%20facing%20the%20horizon.webp", alt: "A clinician reviewing a treatment plan with a patient at Hopewell Health Solutions" },
  },
  "vivitrol-a-key-player-in-opioid-and-alcohol-dependence-treatment-at-hopewell-health-solutions": {
    inline: { src: "/Assets/Guy%20facing%20the%20horizon.webp", alt: "A clinician reviewing a treatment plan with a patient at Hopewell Health Solutions" },
  },
  "what-are-the-levels-of-anxiety-and-when-do-you-need-more-than-therapy": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "what-is-a-partial-hospitalization-program-php": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "what-is-a-safety-plan-and-how-can-you-make-one": {
    inline: { src: "/Assets/Hands.webp", alt: "Two people offering mutual support, hand to hand" },
  },
  "what-is-iop": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "what-is-medication-management-a-comprehensive-guide-to-effective-treatment": {
    inline: { src: "/Assets/Guy%20facing%20the%20horizon.webp", alt: "A clinician reviewing a treatment plan with a patient at Hopewell Health Solutions" },
  },
  "what-its-really-like-to-go-through-an-iop-program-a-peer-recovery-perspective": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "what-makes-hopewells-intensive-outpatient-program-iop-so-special": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "what-to-expect-on-your-first-day-of-intensive-outpatient-program-iop": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "why-is-hopewell-health-solutions-tween-iop-great-for-depression": {
    inline: { src: "/Assets/tweens-1729660767703.webp", alt: "A group of teens supporting one another" },
  },
  "why-the-er-is-not-mental-health-treatment-and-why-php-and-iop-is": {
    inline: { src: "/Assets/service/iop-group-session.webp", alt: "A group therapy session in Hopewell Health Solutions' IOP" },
  },
  "why-trauma-is-different-when-it-happens-through-the-job-as-a-first-responder": {
    inline: { src: "/Assets/service/first-responder-session.webp", alt: "A first responder in a one-on-one session with a clinician at Hopewell Health Solutions" },
  },
};

// Resolves the link-share preview image for a post: an explicit `preview`
// override from this manifest, or the post's own hero by default.
export function previewImageFor(post) {
  const override = blogImages[post.slug]?.preview;
  if (override) return override;
  return { src: post.heroImage, alt: post.heroAlt || post.title };
}
