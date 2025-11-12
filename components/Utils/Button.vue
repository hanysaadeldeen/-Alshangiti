<template>
  <button
    type="submit"
    class="relative overflow-hidden border w-full mt-6 py-3 px-6 md:px-8 lg:px-10 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 border-transparent"
    :class="{
      '!opacity-60 !cursor-not-allowed': loading,
    }"
    :disabled="loading"
  >
    <span
      class="text-sm lg:text-base font-medium group-hover:-translate-y-[200%] transition-all duration-300 ease-in-out text-white"
    >
      {{ locale === "ar" ? "ارسال" : "Send" }}</span
    >
    <span
      class="absolute -bottom-10 text-sm lg:text-base font-medium group-hover:bottom-0 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out text-secondary"
    >
      {{ locale === "ar" ? "ارسال" : "Send" }}</span
    >
  </button>
</template>

<script setup lang="ts">
const { locale } = useI18n();

defineProps<{
  loading: boolean;
}>();
</script>

<style scoped></style>
