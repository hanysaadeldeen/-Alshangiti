<template>
  <main class="AboutUsPage">
    <header-img-section :img="aboutUs" title="pages.aboutUs" />
    <!-- <AboutNumbersSection /> -->
    <HistorySection />
    <TeamSection />
    <VisionMissionSection />
    <OurValuesSection />
    <CertificatesSection />
  </main>
</template>

<script setup lang="ts">
import aboutUs from "~/assets/img/pannel/table.webp";
</script>

<style scoped></style>
