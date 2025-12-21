// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-lucide-icons",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "nuxt-seo-utils",
  ],
  site: {
    url: "https://shangiti.com/",
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  i18n: {
    defaultLocale: "ar",
    strategy: "prefix_except_default",
    locales: [
      { code: "ar", name: "Arabic" },
      { code: "en", name: "English" },
    ],
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
  // ssr: false,
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: false,
  //     fallback: "200.html",
  //   },
  // },
  // routeRules: {
  //   "/**": { prerender: true },
  // },
  app: {
    head: {
      script: [],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/LogoTap.svg",
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/heroPoster-1200.webp",
          imagesrcset:
            "/images/heroPoster-400.webp 400w, /images/heroPoster-800.webp 800w, /images/heroPoster-1200.webp 1200w",
          imagesizes: "100vw",
        },
      ],
      // title: "محمود الشنقيطي للمحاماة والاستشارات القانونية",

      meta: [
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        // {
        //   name: "description",
        //   content:
        //     "محمود الشنقيطي وشركاه هو صرح قانوني رائد تأسس على يد محامٍ خبير أمضى أكثر من 20 عامًا في قلب المشهد القانوني السعودي",
        // },
        {
          property: "og:image",
          content: "https://shangiti.com/LogoTap.png",
        },
        {
          name: "twitter:image",
          content: "https://shangiti.com/LogoTap.png",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // build: {
  //   extractCSS: true,
  //   optimizeCSS: true,
  //   postcss: {
  //     plugins: {
  //       tailwindcss: {},
  //       autoprefixer: {},
  //       cssnano: {},
  //     },
  //   },
  // },
});
