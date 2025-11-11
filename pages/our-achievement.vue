<template>
  <main class="OurAchievement">
    <header-img-section :img="achevments" title="pages.achievement" />
    <div v-if="pending" class="py-[60px]">
      <h1
        class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] cursor-pointer text-text text-center"
      >
        {{ locale === "en" ? "loading.." : "جاري التحميل... " }}
      </h1>
    </div>
    <div
      v-else-if="(data && data.results.length === 0) || error"
      class="py-[60px]"
    >
      <h1
        class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] cursor-pointer text-text text-center"
      >
        {{ locale === "en" ? "There Is No Actievements" : "لا يوجد إنجازات" }}
      </h1>
    </div>

    <div class="section" v-else>
      <OurAchievementCard
        v-for="(achievement, index) in data?.results"
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
    </div>
  </main>
</template>

<script setup lang="ts">
import achevments from "~/assets/img/pannel/achevments.webp";
const { locale } = useI18n();
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

const { data, pending, error } = useFetch<AchievementResponse>(
  "https://37-27-29-234.nip.io/shangiti/api/achievements/detailed-achievements/",
  {
    server: false,
    lazy: true,
  }
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
