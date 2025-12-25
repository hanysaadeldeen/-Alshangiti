<template>
  <main class="AboutUsPage">
    <header-img-section :img="aboutUs" title="pages.aboutUs" />
    <HistorySection />
    <TeamSection />
    <VisionMissionSection />
    <OurValuesSection />
    <CertificatesSection />
    <section />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import aboutUs from "~/assets/img/pannel/table.webp";

import type { SEODataFetch } from "~/types/seo";

const { data, pending, error, refresh } = await useFetch<SEODataFetch>(
  () => "https://be.shangiti.com/shangiti/api/pages/about-us/"
);

usePageSeo(data, locale);
</script>

<style scoped></style>
