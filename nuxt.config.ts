import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  meta: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [],
    link: [
      {
        rel: "stylesheet",
        href: "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css",
      },
    ],
  },
});
