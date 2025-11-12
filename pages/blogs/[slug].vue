<template>
  <main class="BlogsPage">
    <div class="py-24 lg:py-44 relative">
      <div class="absolute top-0 left-0 w-full h-full">
        <img
          :src="blog"
          alt="blog hero image"
          class="w-full h-full object-cover brightness-50"
        />
      </div>
      <div class="mx-auto max-w-[1315px] relative z-10 max-2xl:px-6">
        <h1
          class="text-[32px] md:text-[40px] lg:text-[52px] lg:!leading-[52px] text-white font-bold"
        >
          {{ $t("title") }}
        </h1>

        <p class="text-white font-normal text-lg md:text-xl mt-5">
          {{ $t("subtext") }}
        </p>
      </div>
    </div>
    <div class="mx-auto max-w-[1315px] max-2xl:px-10 mb-16 md:mb-[120px]"></div>
  </main>
</template>

<script setup lang="ts">
import blog from "~/assets/img/Blog/blog.webp";

const { locale } = useI18n();
const route = useRoute();
// const slug = computed(() => route.params.slug);
const slug = computed(() => {
  const s = route.params.slug;
  return Array.isArray(s) ? s[0] : s || "";
});

interface BlogDetails {
  id: number;
  title_ar: string;
  title_en: string;
  slug: string;
  excerpt_ar: string;
  excerpt_en: string;
  content_ar: string;
  content_en: string;
  featured_image: string;
}
const { data, pending, error, refresh } = useFetch(
  () =>
    `https://37-27-29-234.nip.io/shangiti/api/blog/blog-posts/${slug.value}`,
  {
    server: false,
    lazy: false,
  }
);

watch(slug, async () => {
  await refresh();
});
</script>

<style scoped></style>
