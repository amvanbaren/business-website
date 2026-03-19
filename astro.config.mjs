import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://business-website-ckb.pages.dev",
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare",
  }),

  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [sitemap()],
});