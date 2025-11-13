<template>
  <div class="w-full boxShadow p-6 h-full">
    <div class="relative" :key="id">
      <div class="max-2xl:px-6 w-full max-w-[1315px] mx-auto">
        <div class="flex gap-4 items-center justify-between">
          <h1
            class="text-text font-bold text-lg md:text-xl cursor-pointer leading-6 md:leading-7"
          >
            {{ title }}
          </h1>
        </div>
        <div
          ref="answer"
          class="overflow-hidden transition-all duration-500 mt-1"
        >
          <p
            class="text-justify text-[#5E5E5E] font-normal text-sm md:text-base leading-5 md:leading-6 line-clamp-2"
          >
            {{ description }}
          </p>

          <nuxt-link
            :to="localePath(`/blogs/${link}`)"
            class="text-primary-500 mt-2 inline-block hover:text-primary-700 font-normal transition-all duration-300 ease-in-out cursor-pointer"
          >
            {{ locale === "ar" ? "اعرف المزيد" : "Read more" }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

defineProps<{
  title: string;
  description: string;
  link: string;
  id: number;
}>();
</script>

<style scoped></style>
