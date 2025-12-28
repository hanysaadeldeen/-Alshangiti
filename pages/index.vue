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

const { data, pending, error, refresh } = await useFetch<SEODataFetch>(
  () => "https://be.shangiti.com/shangiti/api/pages/home"
);

usePageSeo(data, locale);
</script>
