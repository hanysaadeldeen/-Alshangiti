<template>
  <main class="OurAchievement">
    <header-img-section :img="achevments" title="pages.achievement" />
    <!-- <div>
      <div
        v-for="(achievement, index) in Achievements"
        :key="achievement.id"
        class="section"
        :class="{ 'bg-[#F6F6F6]': index % 2 !== 0 }"
      >
        <div
          class="relative grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-10 lg:gap-16 w-full max-w-[1315px] mx-auto max-2xl:px-6"
        >
          <div
            class="lg:sticky h-fit top-10 lg:max-w-[537px]"
            :class="index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'"
          >
            <div
              class="flex gap-1 text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-semibold text-text"
            >
              <span>{{ index + 1 }}.</span>
              <h1
                class="text-2xl md:text-3xl lg:text-[40px] lg:!leading-[55px] font-semibold text-text"
              >
                {{ $t(achievement.title) }}
              </h1>
            </div>
          </div>
          <div
            class="w-full lg:max-w-[726px] text-base flex flex-col gap-6 md:text-xl lg:text-2xl font-normal text-justify"
            :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
          >
            <p v-for="content in achievement.content">
              {{ $t(content) }}
            </p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="section">
      <OurAchievementCard
        v-for="(achievement, index) in Achievements"
        :key="achievement.id"
        :title="achievement.title"
        :details="achievement.content"
        :id="achievement.id"
        :defaultToggle="achievement.toggle"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import achevments from "~/assets/img/pannel/achevments.webp";
const { locale } = useI18n();

const Achievements = [
  {
    id: 1,
    title: "achievements.cases[0].title",
    content: [
      "achievements.cases[0].content[0]",
      "achievements.cases[0].content[1]",
      "achievements.cases[0].content[2]",
      "achievements.cases[0].content[3]",
    ],
    toggle: true,
  },
  {
    id: 2,
    title: "achievements.cases[1].title",
    content: [
      "achievements.cases[1].content[0]",
      "achievements.cases[1].content[1]",
      "achievements.cases[1].content[2]",
    ],
    toggle: false,
  },
  {
    id: 3,
    title: "achievements.cases[2].title",
    content: [
      "achievements.cases[2].content[0]",
      "achievements.cases[2].content[1]",
      "achievements.cases[2].content[2]",
      "achievements.cases[2].content[3]",
    ],
    toggle: false,
  },
  {
    id: 4,
    title: "achievements.cases[3].title",
    content: [
      "achievements.cases[3].content[0]",
      "achievements.cases[3].content[1]",
      "achievements.cases[3].content[2]",
      "achievements.cases[3].content[3]",
      "achievements.cases[3].content[4]",
    ],
    toggle: false,
  },
];

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
