// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hopewellhealthsolutions.com',
  trailingSlash: 'always',      // clean, consistent URLs e.g. /programs/medical-detox/
  build: { format: 'directory' },
  integrations: [
    // Exclude internal /review/ pages and the /home-b/ design proposal (noindex) from the public sitemap
    sitemap({ filter: (page) => !page.includes('/review') && !page.includes('/home-b') }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
