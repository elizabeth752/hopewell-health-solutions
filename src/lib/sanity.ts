import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

// --- Image URLs ---
const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}

// Stable heading id for table-of-contents anchors (used by both the TOC and the H2 renderer).
export function slugifyHeading(s: string): string {
  return (s || "")
    .toLowerCase()
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Plain text of a Portable Text block (for TOC labels + heading ids).
export function blockText(block: any): string {
  return (block?.children ?? []).map((c: any) => c?.text ?? "").join("");
}

// --- Shared field projection for a full post ---
// author/reviewer resolve to the legacy provider slug so /provider/<slug>/ links still work.
const POST_FIELDS = `
  title,
  "slug": slug.current,
  category,
  excerpt,
  metaTitle,
  metaDescription,
  publishedAt,
  updatedAt,
  readingMinutes,
  mainImage,
  body,
  sources[]{text, url},
  author->{ name, role, bio, image, "providerSlug": legacySlug },
  reviewer->{ name, role, "providerSlug": legacySlug }
`;

const CARD_FIELDS = `
  title,
  "slug": slug.current,
  category,
  excerpt,
  publishedAt,
  mainImage,
  "authorName": author->name
`;

// --- Queries ---
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );
}

export async function getPost(slug: string): Promise<any> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ ${POST_FIELDS} }`,
    { slug }
  );
}

export async function getBlogList(): Promise<any[]> {
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){ ${CARD_FIELDS} }`
  );
}

// Same category first, then most-recent others — mirrors the old relatedPosts() logic.
export async function getRelatedPosts(slug: string, category: string, limit = 3): Promise<any[]> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current != $slug]
      | order(select(category == $category => 0, 1) asc, publishedAt desc)[0...$limit]{ ${CARD_FIELDS} }`,
    { slug, category: category ?? "", limit }
  );
}
