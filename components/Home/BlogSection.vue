<template>
  <section class="BlogSection max-w-[1315px] mx-auto max-2xl:px-6">
    <div
      class="sectionTitle mb-10 md:mb-16 lg:mb-24 flex gap-4 md:gap-6 sm:items-end justify-between max-sm:flex-col"
    >
      <div>
        <h1
          class="text-text font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2"
        >
          {{ $t("homePage.licenses.blog") }}
        </h1>
        <p class="text-2xl font-normal text-[#5E5E5E]">
          {{
            locale === "ar"
              ? " مرجعك الشامل لأبرز الموضوعات القانونية"
              : "Your comprehensive reference for the most important legal topics"
          }}
        </p>
      </div>
      <div class="flex gap-4 items-center justify-end max-md:justify-start">
        <button
          class="relative overflow-hidden border w-fit px-5 py-2 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 border-transparent"
        >
          <nuxt-link
            :to="localePath('/blogs')"
            class="text-sm lg:text-base font-medium group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer ease-in-out text-white"
          >
            {{ locale === "ar" ? " عرض الكل" : "View All" }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/blogs')"
            class="absolute w-full -bottom-10 text-sm lg:text-base font-medium group-hover:-bottom-0 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer ease-in-out text-secondary"
          >
            {{ locale === "ar" ? " عرض الكل" : "View All" }}
          </nuxt-link>
        </button>
      </div>
    </div>
    <div v-if="pending">
      <h1
        class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] cursor-pointer text-text text-center"
      >
        {{ locale === "en" ? "loading.." : "جاري التحميل... " }}
      </h1>
    </div>
    <div v-else-if="(data && data.results.length === 0) || error">
      <h1
        class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] cursor-pointer text-text text-center"
      >
        {{ locale === "en" ? "There Is No Blogs" : "لا يوجد مقالات" }}
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-20">
      <!-- <blog-card
        v-for="blog in data?.results.slice(0, 3)"
        :id="blog.id"
        :title="locale === 'ar' ? blog.title_ar : blog.title_en"
        :description="locale === 'ar' ? blog.excerpt_ar : blog.excerpt_en"
        :link="`${blog.slug}`"
      /> -->
      <blog-card-f
        v-for="blog in data?.results.slice(0, 3)"
        :key="blog.id"
        :data="blog"
        :pending="pending"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

interface Achievement {
  id: number;
  title_ar: string;
  slug: string;
  title_en: string;
  excerpt_ar: string;
  excerpt_en: string;
  content_ar: string;
  content_en: string;
  created_at: string;
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

if (data.value) {
  console.log("Blog Data:", data.value);
}
</script>

<style scoped></style>
