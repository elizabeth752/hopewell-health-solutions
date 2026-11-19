// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// SEO audit 2026-11-18: give every local <img> without dimensions its intrinsic width/height in the built HTML,
// so the browser reserves space before the image loads (no layout shift). The values equal the file's own size,
// so rendering is unchanged (CSS still sizes the image; preflight keeps height:auto).
function imageDimensions() {
  return {
    name: 'hopewell-image-dimensions',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const sharp = (await import('sharp')).default;
        const cache = new Map();
        const size = async (src) => {
          if (cache.has(src)) return cache.get(src);
          let out = null;
          const file = join(root, decodeURIComponent(src.split(/[?#]/)[0]));
          try {
            if (/\.svg$/i.test(file)) {
              // SVG graphics: use the root width/height, else the viewBox (CSS sets their display width).
              const head = (await readFile(file, 'utf8')).match(/<svg\b[^>]*>/i)?.[0] || '';
              const num = (a) => Number((head.match(new RegExp(`\\s${a}="([\\d.]+)(?:px)?"`)) || [])[1]);
              const vb = (head.match(/viewBox="[\d.\s-]*?([\d.]+)[\s,]+([\d.]+)"/) || []).slice(1).map(Number);
              const w = num('width') || vb[0], h = num('height') || vb[1];
              if (w && h) out = { w: Math.round(w), h: Math.round(h) };
            } else {
              const m = await sharp(file).metadata();
              if (m.width && m.height) out = { w: m.width, h: m.height };
            }
          } catch { /* missing or unreadable file: leave the tag alone */ }
          cache.set(src, out);
          return out;
        };
        const walk = async (d) => (await readdir(d, { withFileTypes: true })).flatMap((e) =>
          e.isDirectory() ? [join(d, e.name)] : e.name.endsWith('.html') ? [{ file: join(d, e.name) }] : []);
        const files = [];
        const queue = [root];
        while (queue.length) for (const e of await walk(queue.pop())) typeof e === 'string' ? queue.push(e) : files.push(e.file);
        let added = 0;
        for (const file of files) {
          const html = await readFile(file, 'utf8');
          const tags = [...html.matchAll(/<img\b[^>]*>/gi)].filter(([t]) => !/\swidth=/i.test(t) && !/\sheight=/i.test(t));
          if (!tags.length) continue;
          let outHtml = html;
          for (const [tag] of tags) {
            const src = (tag.match(/\ssrc="(\/[^"]+\.(?:webp|png|jpe?g|avif|gif|svg))"/i) || [])[1];
            if (!src) continue;
            const s = await size(src);
            if (!s) continue;
            outHtml = outHtml.replace(tag, tag.replace(/^<img\b/i, `<img width="${s.w}" height="${s.h}"`));
            added++;
          }
          if (outHtml !== html) await writeFile(file, outHtml);
        }
        logger.info(`added width/height to ${added} <img> tags`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hopewellhealthsolutions.com',
  trailingSlash: 'always',      // clean, consistent URLs e.g. /programs/medical-detox/
  build: { format: 'directory' },
  // The dev toolbar injects a "Learn more" link into every dev page, which Lighthouse's SEO audit flags
  // as non-descriptive link text (dev-only; never in the build). Off so local Lighthouse runs match production.
  devToolbar: { enabled: false },
  integrations: [
    // Exclude internal /review/ pages and the /home-b/ design proposal (noindex) from the public sitemap
    sitemap({ filter: (page) => !page.includes('/review') && !page.includes('/home-b') && !page.includes('/thank-you') }),
    imageDimensions(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
