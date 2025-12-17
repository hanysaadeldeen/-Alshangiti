<template>
  <main class="BlogsPage">
    <header-img-section :img="blog" title="blog.hero.title" />
    <div class="mx-auto max-w-[1315px] max-2xl:px-10 mb-16 md:mb-[120px]">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-20 items-stretch"
      >
        <blog-card
          v-for="blog in data?.results"
          :key="blog.id"
          :data="blog"
          :pending="pending"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import blog from "~/assets/img/Blog/blog.webp";

const { locale } = useI18n();
useHead(() => ({
  title:
    locale.value === "ar"
      ? "محمود الشنقيطي: المدونة"
      : "Mr. Mahmoud Alshangiti: Blog",
  meta: [
    {
      name: "description",
      content:
        locale.value === "ar"
          ? "مرجعك الشامل لأبرز الموضوعات القانونية."
          : "Your comprehensive reference for the most prominent legal topics.",
    },
  ],
}));
interface Achievement {
  id: number;
  title_ar: string;
  title_en: string;
  slug: string;
  excerpt_ar: string;
  excerpt_en: string;
  content_ar: string;
  content_en: string;
  created_at: string;
  featured_image: string;
  views_count: number;
}

interface AchievementResponse {
  results: Achievement[];
}

const { data, pending, error } = await useFetch<AchievementResponse>(
  "https://37-27-29-234.nip.io/shangiti/api/blog/blog-posts/",
  {
    lazy: true,
  }
);
// const { data, pending, error } = useFetch<AchievementResponse>(
//   "https://37-27-29-234.nip.io/shangiti/api/blog/blog-posts/",
//   {
//     server: false,
//     lazy: true,
//   }
// );
</script>

<style scoped></style>
