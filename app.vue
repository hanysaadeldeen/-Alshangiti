<template>
  <div :class="locale === 'ar' ? 'rtl' : 'ltr'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { watch } from "vue";

const { locale } = useI18n();

const setDirection = () => {
  const direction = locale.value === "en" ? "ltr" : "rtl";
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", locale.value);
  }
};

onMounted(() => {
  setDirection();
});
watch(locale, setDirection, { immediate: true });

useHead(() => ({
  titleTemplate: (titleChunk?: string) => {
    const siteName =
      locale.value === "en"
        ? "Mr Mahmoud Alshangiti"
        : "محمود الشنقيطي للمحاماة والاستشارات القانونية";

    if (!titleChunk) return siteName;

    return `${titleChunk} - ${siteName}`;
  },
}));
</script>

<style scoped>
html {
  direction: rtl;
}

html[dir="ltr"] {
  direction: ltr;
}
</style>
