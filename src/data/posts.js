// Blog index — auto-loads every post in ./posts/*.js so each post is its own file
// (no merge conflicts when migrating in parallel; bodies stay verbatim and auditable).
//
// Two post formats are supported by the /post/[slug] template:
//   • Migrated posts  → `bodyHtml` (verbatim HTML from the live page) + `metaTitle`/`metaDescription`
//   • Hand-authored   → structured `sections` (see the FMLA post for the block format)
// Required on every post: slug (EXACT live URL slug), title, category, datePublished,
// authorSlug, reviewerSlug, heroImage, excerpt.

const modules = import.meta.glob("./posts/*.js", { eager: true });

export const posts = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
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
