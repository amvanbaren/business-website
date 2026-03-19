import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://precies.software",

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: { build: 'compile', runtime: 'cloudflare-binding' },
  }),

  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [sitemap()],
});