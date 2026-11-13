// Guard rail for src/data/blogImageManifest.js — the single list of which
// photo goes inside which blog post, and which photo is used as the
// link-share preview. Run on every build (wired into `prebuild`) so two
// failure modes can't creep back in unnoticed:
//
//   1. A manifest entry (or a post's heroImage) pointing at a file that
//      doesn't actually exist on disk.
//   2. The same photo quietly taking over dozens of unrelated posts again,
//      the way the old category-rotation pool did before this manifest
//      replaced it (see docs/blog-post-standard.md).
//
// Missing files are a hard failure (exit 1) — a broken <img> in production
// is a real bug. Repeat-count is a warning only (exit 0) — some reuse is
// legitimate (there is exactly one real "IOP group session" photo in the
// library and ~30 posts are genuinely about IOP/PHP/addiction recovery), so
// this is a prompt for a human to look, not an automatic failure.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { blogImages, previewImageFor } from "../src/data/blogImageManifest.js";

const REPEAT_WARN_THRESHOLD = 15;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const postsDir = path.join(root, "src", "data", "posts");
const publicDir = path.join(root, "public");

const postFiles = fs.readdirSync(postsDir).filter((f) => f.endsWith(".js"));
const posts = [];
for (const f of postFiles) {
  const mod = await import(pathToFileURL(path.join(postsDir, f)).href);
  posts.push(mod.default);
}
const postSlugs = new Set(posts.map((p) => p.slug));

let errors = 0;
const warnings = [];

function fileExists(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  return fs.existsSync(path.join(publicDir, decoded));
}

function checkImage(label, img) {
  if (!img || !img.src) {
    errors++;
    console.error(`✗ ${label}: missing src`);
    return;
  }
  if (!fileExists(img.src)) {
    errors++;
    console.error(`✗ ${label}: file not found — ${img.src}`);
  }
  if (!img.alt || !img.alt.trim()) {
    errors++;
    console.error(`✗ ${label}: missing alt text — ${img.src}`);
  }
}

// 1. Every manifest key must point at a real, current post slug.
for (const slug of Object.keys(blogImages)) {
  if (!postSlugs.has(slug)) {
    errors++;
    console.error(`✗ blogImageManifest.js has an entry for "${slug}" but no post with that slug exists`);
  }
}

// 2. Every post's hero image must exist, and resolve a preview image.
const usageCounts = new Map(); // src -> count, inline images only
for (const post of posts) {
  checkImage(`${post.slug} (heroImage)`, { src: post.heroImage, alt: post.heroAlt || post.title });

  const entry = blogImages[post.slug];
  if (entry?.inline) {
    checkImage(`${post.slug} (inline)`, entry.inline);
    usageCounts.set(entry.inline.src, (usageCounts.get(entry.inline.src) || 0) + 1);
  }
  if (entry?.preview) {
    checkImage(`${post.slug} (preview override)`, entry.preview);
  }

  // Sanity-check previewImageFor never silently returns something unusable.
  const preview = previewImageFor(post);
  checkImage(`${post.slug} (resolved preview)`, preview);
}

// 3. Flag any inline photo that's drifting back toward "generic rotation"
// territory.
for (const [src, count] of [...usageCounts.entries()].sort((a, b) => b[1] - a[1])) {
  if (count > REPEAT_WARN_THRESHOLD) {
    warnings.push(`⚠ ${src} is the in-article photo on ${count} posts — if that's not because they're all genuinely the same narrow topic, it's worth a second look.`);
  }
}

console.log(`\nChecked ${posts.length} posts, ${Object.keys(blogImages).length} manifest entries.`);
if (warnings.length) {
  console.log("");
  warnings.forEach((w) => console.log(w));
}
if (errors) {
  console.error(`\n${errors} error(s) found in blog image data — fix before building.`);
  process.exit(1);
}
console.log("No missing files or alt text. ✓");
