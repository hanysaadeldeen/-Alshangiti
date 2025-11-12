<template>
  <div class="py-24 lg:py-44 relative">
    <div class="absolute top-0 left-0 w-full h-full">
      <img
        :src="img"
        :alt="$t(title)"
        class="w-full h-full object-cover brightness-50"
      />
    </div>
    <div class="mx-auto max-w-[1315px] relative z-10 max-2xl:px-6">
      <h1
        class="text-[32px] md:text-[40px] lg:text-[52px] lg:!leading-[52px] text-white font-bold"
      >
        {{ $t(title) }}
      </h1>
      <p
        v-if="adjustedPath === '/our-achievement'"
        class="text-white font-normal text-lg md:text-xl mt-5"
      >
        {{ $t("homePage.home.hero.subtext") }}
      </p>
      <p
        v-if="adjustedPath === '/blogs'"
        class="text-white font-normal text-lg md:text-xl mt-5"
      >
        {{ $t("blog.hero.subtext") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));
defineProps<{
  img: string;
  title: string;
}>();
</script>
<style scoped></style>
