import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://precies.software",
  vite: {
      plugins: [tailwindcss()],
	},
  integrations: [sitemap()],
});