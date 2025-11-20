// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-lucide-icons", "@nuxtjs/i18n"],
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
      { code: "ar", name: "Arabic", file: "ar.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    detectBrowserLanguage: false,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      fallback: "200.html", // هنا بنحدد ملف الـ SPA fallback
    },
  },
  ssr: false,
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
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/heroPoster-400.webp",
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/heroPoster-800.webp",
          media: "(min-width: 600px)",
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/heroPoster-1200.webp",

          media: "(min-width: 1200px)",
        },
      ],
      title: "محمود الشنقيطي للمحاماة والاستشارات القانونية",
      meta: [
        {
          name: "description",
          content:
            "محمود الشنقيطي وشركاه هو صرح قانوني رائد تأسس على يد محامٍ خبير أمضى أكثر من 20 عامًا في قلب المشهد القانوني السعودي",
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
});
