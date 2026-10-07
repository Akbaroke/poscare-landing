// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://poscare.id',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
