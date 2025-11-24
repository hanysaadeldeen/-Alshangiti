<template>
  <main class="privacy relative">
    <header-img-section :img="ConsultingContracts" title="pages.privacy" />

    <section class="relative z-20 max-w-[1315px] mx-auto mt-[120px]">
      <div class="relative container max-sm:px-4 mx-auto px-2">
        <div class="terms-page flex justify-between" :key="locale">
          <main class="content lg:max-w-[584px]">
            <div
              v-for="(section, index) in sections"
              :id="section.id"
              :key="section.id"
              class="mb-16 lg:mb-24"
            >
              <h2 class="text-xl font-medium mb-4 text-TextD">
                {{ $t(section.title) }}
              </h2>
              <p
                v-if="section.description"
                class="mb-8 font-normal text-base md:text-lg text-TextMD"
              >
                {{ $t(section.description) }}
              </p>
              <ul v-if="section.content">
                <li
                  v-for="(bullet, index) in section.content"
                  :key="index"
                  class="lista px-5 mb-1 relative font-normal text-base md:text-lg text-TextMD"
                  :class="locale === 'en' ? 'before:left-0' : 'before:right-0'"
                >
                  <span v-if="section.id === 'Data_Contact' && index === 0">
                    الهاتف:
                  </span>
                  <span :dir="section.id === 'Data_Contact' ? 'ltr' : ''">
                    {{ $t(bullet) }}
                  </span>
                </li>
              </ul>
            </div>
          </main>
          <nav
            class="hidden lg:block table-of-contents sticky top-0 bottom-0"
            :class="locale === 'en' ? 'right-0' : 'left-0'"
          >
            <h3 class="text-xl font-medium mb-4 text-TextD">
              {{ locale === "ar" ? "جدول المحتوي" : "Table of Contents" }}
            </h3>
            <ul>
              <li v-for="(section, index) in sections" :key="index">
                <p
                  class="block py-2 px-4"
                  :class="locale === 'en' ? 'text-left' : 'text-right'"
                  @click="scrollToSection(section.id)"
                >
                  {{ $t(section.title) }}
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ConsultingContracts from "../assets/img/pannel/ConsultingContracts.webp";

const { locale } = useI18n();
const sections = [
  {
    id: "Introduction",
    title: "privacy.sectionOne.title",
    description: "privacy.sectionOne.description",
  },
  {
    id: "Data_We_Collect",
    title: "privacy.sectionTwo.title",
    content: [
      "privacy.sectionTwo.data.itemOne",
      "privacy.sectionTwo.data.itemTwo",
      "privacy.sectionTwo.data.itemThree",
    ],
  },
  {
    id: "How_We_Use_Data",
    title: "privacy.sectionThree.title",
    content: [
      "privacy.sectionThree.data.itemOne",
      "privacy.sectionThree.data.itemTwo",
      "privacy.sectionThree.data.itemThree",
    ],
  },
  {
    id: "Data_Privacy",
    title: "privacy.sectionFour.title",
    description: "privacy.sectionFour.description",
  },
  {
    id: "Data_Sharing",
    title: "privacy.sectionFive.title",
    description: "privacy.sectionFive.description",
  },
  {
    id: "User_rights",
    title: "privacy.sectionSix.title",
    description: "privacy.sectionSix.description",
  },
  {
    id: "Cookies",
    title: "privacy.sectionSeven.title",
    description: "privacy.sectionSeven.description",
  },
  {
    id: "Data_Updates",
    title: "privacy.sectionEight.title",
    description: "privacy.sectionEight.description",
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped>
.startSection2 {
  height: calc(75vh - 112px);
}

@media (max-width: 1024px) {
  .startSection2 {
    height: calc(75vh - 72px);
  }
}

@media (max-width: 768px) {
  section {
    margin-bottom: 80px;
  }
}

.table-of-contents {
  width: 424px;
  padding: 1rem;
  height: fit-content;
}

.table-of-contents p {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background-color: transparent;
  color: #4a5568;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  transition: all 0.1s ease-in-out;
}

.table-of-contents p:hover {
  color: #121212;
}

.content {
  flex-grow: 1;
}

.lista::before {
  content: "•";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #4a5568;
  font-size: 1rem;
  font-weight: bold;
}
</style>
