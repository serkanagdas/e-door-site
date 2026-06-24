import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://edoor.com.tr',
  integrations: [tailwind()],
});
