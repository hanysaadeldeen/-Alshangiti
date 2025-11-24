<template>
  <section class="OurValuesSection max-w-[1315px] mx-auto max-2xl:px-6">
    <div class="sectionTitle">
      <h2
        class="text-text font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2 text-center"
      >
        {{ $t("about.values.title") }}
      </h2>
      <p class="text-xl md:text-2xl font-normal text-[#5E5E5E] text-center">
        {{
          locale === "ar"
            ? " أساس ثابت لشراكة مثمرة"
            : "A solid foundation for a fruitful partnership"
        }}
      </p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-20">
      <article
        class="card boxShadow p-6 rounded-3xl flex flex-col justify-start items-center gap-4"
        v-for="card in Cards"
      >
        <div class="w-full h-full max-w-[80px] max-h-[80px]">
          <img
            :src="card.img"
            :alt="card.title"
            width="80"
            height="80"
            class="w-full max-w-full"
            loading="lazy"
          />
        </div>
        <div>
          <h3 class="text-text text-lg font-bold text-center mb-1">
            {{ $t(card.title) }}
          </h3>
          <p class="text-[#5E5E5E] text-base font-normal text-center">
            {{ $t(card.desc) }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import flexibility from "../../assets/img/About/OurValues/flexibility.svg";
import integration from "../../assets/img/About/OurValues/integration.svg";
import socialEngagement from "../../assets/img/About/OurValues/socialEngagement.svg";
import diplomacy from "../../assets/img/About/OurValues/diplomacy.svg";

const Cards = [
  {
    id: 1,
    title: "about.values.items[3].name",
    desc: "about.values.items[3].description",
    img: flexibility,
  },
  {
    id: 2,
    title: "about.values.items[0].name",
    desc: "about.values.items[0].description",
    img: integration,
  },
  {
    id: 3,
    title: "about.values.items[1].name",
    desc: "about.values.items[1].description",
    img: socialEngagement,
  },
  {
    id: 4,
    title: "about.values.items[2].name",
    desc: "about.values.items[2].description",
    img: diplomacy,
  },
];
</script>

<style scoped></style>
