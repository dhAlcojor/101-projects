import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://dhAlcojor.github.io",
  base: "/101-projects",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});