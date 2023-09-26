import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://fancy-rabanadas-877332.netlify.app/",
  integrations: [preact()]
});