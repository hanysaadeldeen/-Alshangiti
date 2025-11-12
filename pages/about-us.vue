<template>
  <main class="AboutUsPage">
    <header-img-section :img="aboutUs" title="pages.aboutUs" />
    <!-- <AboutNumbersSection /> -->
    <HistorySection />
    <TeamSection />
    <VisionMissionSection />
    <OurValuesSection />
    <CertificatesSection />
    <!-- <div class="mb-24 md:mb-[154px]">

            <TestmonialsSection />
        </div> -->
  </main>
</template>

<script setup lang="ts">
import aboutUs from "~/assets/img/pannel/table.webp";
</script>

<style scoped></style>
