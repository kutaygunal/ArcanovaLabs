import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // TODO: set this to your real domain before deploying (used for canonical/OG URLs)
  site: 'https://arcanovalabs.com',

  adapter: cloudflare(),
});