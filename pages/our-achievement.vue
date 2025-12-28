<template>
  <main class="OurAchievement">
    <header-img-section :img="achevments" title="pages.achievement" />
    <div v-if="pending" class="py-[60px]">
      <h2
        class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] cursor-pointer text-text text-center"
      >
        {{ locale === "en" ? "loading.." : "جاري التحميل... " }}
      </h2>
    </div>
    <div
      v-else-if="(data && data.results.length === 0) || error"
      class="py-[60px]"
    >
      <h2
        class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] cursor-pointer text-text text-center"
      >
        {{ locale === "en" ? "There Is No Actievements" : "لا يوجد إنجازات" }}
      </h2>
    </div>

    <div class="section" v-else>
      <OurAchievementCard
        v-for="(achievement, index) in data?.results.slice(0, limit)"
        :key="achievement.id"
        :title="locale === 'ar' ? achievement.title_ar : achievement.title_en"
        :details="
          locale === 'ar'
            ? achievement.description_ar
            : achievement.description_en
        "
        :id="achievement.id"
        :defaultToggle="index === 0"
      />
      <button
        v-if="data?.results"
        class="w-fit my-6 md:my-10 h-full mx-auto border-[2px] border-primary-500 relative overflow-hidden min-w-[191px] px-6 py-2.5 flex flex-col max-h-[47px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700"
        :class="{
          '!opacity-60 !cursor-not-allowed':
            pending || data?.results?.length <= limit,
        }"
        :disabled="pending || data?.results?.length <= limit"
        @click="limit += 10"
      >
        <span
          class="text-sm lg:text-base font-medium group-hover:-translate-y-[200%] transition-all duration-300 ease-in-out text-white"
        >
          {{ locale === "ar" ? "عرض المزيد" : "Show More" }}</span
        >
        <span
          class="absolute -bottom-10 text-sm lg:text-base font-medium group-hover:bottom-0 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out text-secondary"
        >
          {{ locale === "ar" ? "عرض المزيد" : "Show More" }}</span
        >
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import achevments from "~/assets/img/pannel/achevments.webp";
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";

const { data: dataSEO } = await useFetch<SEODataFetch>(
  () => "https://be.shangiti.com/shangiti/api/pages/our-achievement"
);

usePageSeo(dataSEO, locale);
interface Achievement {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
}

interface AchievementResponse {
  results: Achievement[];
}
const limit = ref(10);

const { data, pending, error } = useFetch<AchievementResponse>(
  "https://be.shangiti.com/shangiti/api/achievements/detailed-achievements/"
);
</script>

<style scoped>
.section {
  padding: 60px 0;
  margin-top: 0;
}

@media (max-width: 768px) {
  .section {
    padding: 40px 0;
    margin-top: 0;
  }
}
</style>
