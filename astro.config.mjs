import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://safezone-preview.pages.dev',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile',
    prerenderEnvironment: 'node'
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
