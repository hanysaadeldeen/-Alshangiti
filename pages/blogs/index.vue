<template>
  <main class="BlogsPage">
    <header-img-section :img="blog" title="blog.hero.title" />
    <div class="mx-auto max-w-[1315px] max-2xl:px-10 mb-16 md:mb-[120px]">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-20">
        <blog-card
          v-for="blog in data?.results"
          :id="blog.id"
          :title="locale === 'ar' ? blog.title_ar : blog.title_en"
          :description="locale === 'ar' ? blog.excerpt_ar : blog.excerpt_en"
          :link="`${blog.slug}`"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import blog from "~/assets/img/Blog/blog.webp";

const { locale } = useI18n();

interface Achievement {
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

interface AchievementResponse {
  results: Achievement[];
}

const { data, pending, error } = useFetch<AchievementResponse>(
  "https://37-27-29-234.nip.io/shangiti/api/blog/blog-posts/",
  {
    server: false,
    lazy: true,
  }
);
</script>

<style scoped></style>
