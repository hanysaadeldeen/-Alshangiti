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
import aboutUs from "~/assets/img/pannel/table.webp";
</script>

<style scoped></style>
