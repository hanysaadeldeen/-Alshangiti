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

useHead(() => ({
  title: locale.value === "ar" ? ": من نحن" : "About Us:",
  meta: [
    {
      name: "description",
      content:
        locale.value === "ar"
          ? "تأسس محمود الشنقيطي للمحاماة والاستشارات القانونية عام 2005م، وقد حقق اعترافا وتقديرا مهنياً واسعا، ونموذجا متقدما لفريق محلي يعمل وفقاً للمعايير الدولية في قطاع المحاماة والاستشارات القانونية."
          : "ALSHANGITI & ASSOCIATES LAW FIRM was established in 2005, earning broad professional recognition and distinction as a pioneering Saudi law firm operating in line with international standards. ",
    },
  ],
}));
</script>

<style scoped></style>
