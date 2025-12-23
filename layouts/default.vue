<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
    <WhatsUpScroll />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const siteName = computed(() =>
  locale.value === "ar"
    ? "محمود الشنقيطي للمحاماة والاستشارات القانونية"
    : "Mr:Mahmoud Alshangiti"
);

useSeoMeta({
  ogSiteName: () => siteName.value,
  applicationName: () => siteName.value,
});
</script>
