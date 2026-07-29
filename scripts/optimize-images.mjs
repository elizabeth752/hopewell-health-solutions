/**
 * One-shot image optimizer for Core Web Vitals.
 * Converts PNG/JPG → WebP, resizes oversized assets, rewrites in place where safe.
 */
import sharp from "sharp";
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public/Assets");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function toWebpBuffer(src, { width, quality = 78 } = {}) {
  let pipeline = sharp(src).rotate();
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
  return pipeline.webp({ quality, effort: 6 }).toBuffer();
}

async function toWebp(src, dest, opts = {}) {
  const buf = await toWebpBuffer(src, opts);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  const [a, b] = await Promise.all([stat(src), stat(dest)]);
  return { from: a.size, to: b.size };
}

const jobs = [
  // Header logo — display ~112–224px CSS; ship 280w WebP
  {
    src: "logo/hopewell-wave-logo.jpg",
    dest: "logo/hopewell-wave-logo.webp",
    width: 560,
    quality: 82,
  },
  // Credibility badges (hero trust row)
  { src: "credibility/bbb.png", dest: "credibility/bbb.webp", width: 240, quality: 80 },
  { src: "credibility/psychology-today.png", dest: "credibility/psychology-today.webp", width: 240, quality: 80 },
  { src: "credibility/recovery-verified.png", dest: "credibility/recovery-verified.webp", width: 240, quality: 80 },
  // Media strip logos
  { src: "Media Appearances/hbj-logo-v3.png", dest: "Media Appearances/hbj-logo-v3.webp", width: 320, quality: 80 },
  { src: "Media Appearances/fox61.png", dest: "Media Appearances/fox61.webp", width: 280, quality: 80 },
  { src: "Media Appearances/nbc-connecticut.png", dest: "Media Appearances/nbc-connecticut.webp", width: 320, quality: 80 },
  { src: "Media Appearances/woub-public-media.jpg", dest: "Media Appearances/woub-public-media.webp", width: 280, quality: 80 },
];

// Homepage service cards / mission (display ~600–800px)
const homepageResize = [
  { src: "service/home-help-myself.webp", width: 800, quality: 75 },
  { src: "service/home-help-loved-one.webp", width: 800, quality: 75 },
  { src: "service/home-mission.webp", width: 1000, quality: 75 },
];

console.log("Converting PNG/JPG → WebP…");
for (const job of jobs) {
  const src = path.join(root, job.src);
  const dest = path.join(root, job.dest);
  await mkdir(path.dirname(dest), { recursive: true });
  const r = await toWebp(src, dest, job);
  console.log(`  ${job.dest}: ${(r.from / 1024).toFixed(0)}KB → ${(r.to / 1024).toFixed(0)}KB`);
}

console.log("Resizing oversized homepage WebPs in place…");
for (const job of homepageResize) {
  const file = path.join(root, job.src);
  const before = (await stat(file)).size;
  const meta = await sharp(file).metadata();
  if ((meta.width || 0) <= job.width) {
    console.log(`  skip ${job.src} (${meta.width}px)`);
    continue;
  }
  const buf = await toWebpBuffer(file, job);
  await writeFile(file, buf);
  const after = (await stat(file)).size;
  console.log(`  ${job.src}: ${meta.width}px ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
}

// Cap huge blog heroes used as cards (~670KB each) to max 1200w
console.log("Capping large blog WebPs (>200KB)…");
const blogs = path.join(root, "Blogs");
for (const file of await walk(blogs)) {
  if (!file.endsWith(".webp")) continue;
  const before = (await stat(file)).size;
  if (before < 200 * 1024) continue;
  const meta = await sharp(file).metadata();
  const buf = await toWebpBuffer(file, { width: 1200, quality: 72 });
  await writeFile(file, buf);
  const after = (await stat(file)).size;
  console.log(`  ${path.basename(file)}: ${meta.width}px ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
}

console.log("Done.");
