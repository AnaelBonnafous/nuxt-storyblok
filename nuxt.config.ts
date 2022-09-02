import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [{ name: "description", content: "Nuxt 3 + Storyblok = <3" }],
    },
  },
  css: ["@/assets/main.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        useApiClient: true,
      },
    ],
  ],
});
