import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://dhAlcojor.github.io",
  base: "/101-projects",
  integrations: [tailwind()]
});