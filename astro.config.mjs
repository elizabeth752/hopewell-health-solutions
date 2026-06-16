// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: set to the production domain once it's live
  site: 'https://hopewellhealthsolutions.com',
  trailingSlash: 'always',      // clean, consistent URLs e.g. /programs/medical-detox/
  build: { format: 'directory' },
  integrations: [
    // Exclude internal /review/ pages from the public sitemap
    sitemap({ filter: (page) => !page.includes('/review') }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
