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
    url: "https://law.shangiti.com/",
  },
  sitemap: {
    siteUrl: "https://law.shangiti.com",
    sources: ["/__sitemap__/blogs"],
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
      meta: [
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image",
          content: "https://law.shangiti.com/LogoTap.png",
        },
        {
          name: "twitter:image",
          content: "https://law.shangiti.com/LogoTap.png",
        },
      ],
    },
  },
  seo: {
    meta: {
      ogSiteName: "محمود الشنقيطي للمحاماة والاستشارات القانونية",
      applicationName: "محمود الشنقيطي للمحاماة والاستشارات القانونية",
    },
  },
  routeRules: {
    "/en/**": {
      seoMeta: {
        ogSiteName: "Mr Mahmoud Alshangiti",
        applicationName: "Mr Mahmoud Alshangiti",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
