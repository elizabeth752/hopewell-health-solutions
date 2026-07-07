// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';

// astro.config runs before Astro's env loading, so read PUBLIC_ vars via Vite's loadEnv.
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hopewellhealthsolutions.com',
  trailingSlash: 'always',      // clean, consistent URLs e.g. /programs/medical-detox/
  build: { format: 'directory' },
  integrations: [
    sanity({
      // project id + dataset are public (exposed to the browser anyway); fall back to the
      // real values so the build works even if env vars aren't set on the host.
      projectId: PUBLIC_SANITY_PROJECT_ID || 'w4c6w6qw',
      dataset: PUBLIC_SANITY_DATASET || 'production',
      useCdn: false, // false → static build always fetches the latest published content
    }),
    // Exclude internal /review/ pages from the public sitemap
    sitemap({ filter: (page) => !page.includes('/review') }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
