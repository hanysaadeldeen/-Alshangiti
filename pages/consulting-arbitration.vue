<template>
  <main>
    <header-img-section
      :img="ConsultingContracts"
      title="services.litigation.title"
    />
    <WhatTheService title="services.litigation.question">
      <div
        class="text-text text-lg md:text-xl font-normal flex flex-col max-w-[1164px]"
      >
        <span class="">
          {{ $t("services.litigation.description[0]") }}
        </span>
        <br />
        <span class="">
          {{ $t("services.litigation.description[1]") }}
        </span>
        <br />
        <span class="text-justify">
          {{ $t("services.litigation.description[2]") }}
        </span>
        <br />
        <span class="text-justify">
          {{ $t("services.litigation.description[3]") }}
        </span>
        <br />
        <span class="text-justify">
          {{ $t("services.litigation.description[4]") }}
        </span>
        <br />
        <span class="text-justify">
          {{ $t("services.litigation.description[5]") }}
        </span>
        <br />
        <span class="text-justify">
          {{ $t("services.litigation.description[6]") }}
        </span>
        <br />
        <span class="text-justify">
          {{ $t("services.litigation.description[7]") }}
        </span>
      </div>
    </WhatTheService>
    <DetailedServiceSection
      title="services.litigation.details"
      :details="locale === 'ar' ? detailsAr : detailsEn"
    />
    <CTASection
      title="services.litigation.cta"
      buttonO="اطلب خدمة"
      buttonT="احجز استشارة قانونية"
      :img="arbitration"
    />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";

const { data, pending, error, refresh } = await useFetch<SEODataFetch>(
  () => "https://be.shangiti.com/shangiti/api/pages/consulting-arbitration"
);

usePageSeo(data, locale);

const detailsAr = [
  "القضايا الإدارية",
  "القضايا التجارية",
  "القضايا الإنشائية",
  "القضايا العمالية",
  "القضايا الجمركية",
  "قضايا المنافسة",
  "القضايا الدولية",
  "التحكيم",
  "القضايا الاقتصادية",
  "القضايا المدنية",
  "التحصيل",
];

const detailsEn = [
  "Administrative Disputes",
  "Commercial Disputes",
  "Construction Disputes",
  "Labor and Employment Disputes",
  "Customs Litigation",
  "Competition Disputes",
  "International Disputes",
  "Arbitration",
  "Economic Disputes",
  "Civil Disputes",
  "Debt Collection",
];

import ConsultingContracts from "../assets/img/pannel/cta.webp";
import arbitration from "../assets/img/pannel/arbitration.webp";
</script>

<style scoped></style>
