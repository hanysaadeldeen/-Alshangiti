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

interface ContactPage {
  id: number;
  title_ar: string;
  title_en: string;
  slug: string;
  content_ar: string;
  content_en: string;
  meta_description_ar: string;
  meta_description_en: string;
  banner_image: string | null;
  banner_image_url: string | null;
  thumbnail_image: string | null;
  thumbnail_image_url: string | null;
  is_published: boolean;
  show_in_menu: boolean;
  menu_order: number;
  created_at: string;
  updated_at: string;
}

const { data, pending, error, refresh } = await useFetch<ContactPage>(
  () => "https://be.shangiti.com/shangiti/api/pages/about-us/"
);

useHead(() => ({
  title:
    locale.value === "ar"
      ? `${data.value?.title_ar}`
      : `${data.value?.title_en}`,
  meta: [
    {
      name: "description",
      content:
        locale.value === "ar"
          ? `${data.value?.meta_description_ar}`
          : `${data.value?.meta_description_en}`,
    },
  ],
}));
</script>

<style scoped></style>
