// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Canonical origin for your site (no trailing slash)
  site: "https://d-lamb95.github.io",
  // Repo name so assets/links work on GitHub Pages
  base: "/portfolio/",
  // Keeps routes predictable on Pages
  trailingSlash: "ignore",

  vite: {
    plugins: [tailwindcss()],
  },
});

