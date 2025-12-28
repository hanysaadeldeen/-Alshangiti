<template>
  <main class="MainPage">
    <HomeHeroSection />
    <AboutSection />
    <NumbersSection />
    <ServicesSection />
    <WhyUsSection />
    <CertificatesSection />
    <BlogSection />
    <section />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";

const { data } = await useFetch<SEODataFetch>(
  () => "https://be.shangiti.com/shangiti/api/pages/home"
);

useHead(() => {
  if (!data.value) return {};

  const isAr = locale.value === "ar";
  const description = isAr
    ? data.value.meta_description_ar
    : data.value.meta_description_en;

  const url = data.value.slug
    ? `https://law.shangiti.com/${data.value.slug}`
    : "https://law.shangiti.com/";

  return {
    title: null,
    meta: [
      { name: "description", content: description },
      {
        property: "og:title",
        content: isAr ? data.value.title_ar : data.value.title_en,
      },
      { property: "og:description", content: description },
      {
        property: "og:image",
        content:
          data.value.banner_image_url || "https://law.shangiti.com/LogoTap.png",
      },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
    ],
  };
});
</script>
