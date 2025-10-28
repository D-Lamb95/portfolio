// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({

  site: "https://d-lamb95.github.io",
 
  base: "/portfolio/",
 
  trailingSlash: "ignore",

  // ✅ Keep your Tailwind setup
  vite: {
    plugins: [tailwindcss()],
  },
