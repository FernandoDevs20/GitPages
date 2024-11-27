import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

export default defineConfig({
  ase: '/GitPages/',
  integrations: [vue()],
});
