<template>
  <main class="OurAchievement">
    <header-img-section :img="achevments" title="pages.achievement" />
    <div class="section" v-if="data && !pending">
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

const { data, pending, error } = await useFetch<AchievementResponse>(
  "http://37.27.29.234/shangiti/api/achievements/detailed-achievements/"
);

// const Achievements = [
//   {
//     id: 1,
//     title: "achievements.cases[0].title",
//     content: [
//       "achievements.cases[0].content[0]",
//       "achievements.cases[0].content[1]",
//       "achievements.cases[0].content[2]",
//       "achievements.cases[0].content[3]",
//     ],
//     toggle: true,
//   },
//   {
//     id: 2,
//     title: "achievements.cases[1].title",
//     content: [
//       "achievements.cases[1].content[0]",
//       "achievements.cases[1].content[1]",
//       "achievements.cases[1].content[2]",
//     ],
//     toggle: false,
//   },
//   {
//     id: 3,
//     title: "achievements.cases[2].title",
//     content: [
//       "achievements.cases[2].content[0]",
//       "achievements.cases[2].content[1]",
//       "achievements.cases[2].content[2]",
//       "achievements.cases[2].content[3]",
//     ],
//     toggle: false,
//   },
//   {
//     id: 4,
//     title: "achievements.cases[3].title",
//     content: [
//       "achievements.cases[3].content[0]",
//       "achievements.cases[3].content[1]",
//       "achievements.cases[3].content[2]",
//       "achievements.cases[3].content[3]",
//       "achievements.cases[3].content[4]",
//     ],
//     toggle: false,
//   },
// ];

const isOpen = ref(false);
const answerHeight = ref(0);
const answer = ref<HTMLDivElement | null>(null);
const toggle = async () => {
  isOpen.value = !isOpen.value;

  await nextTick();
  if (answer.value) {
    answerHeight.value = answer.value.scrollHeight;
  }
};
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
