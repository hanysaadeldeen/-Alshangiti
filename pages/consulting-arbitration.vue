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

useHead(() => ({
  title:
    locale.value === "ar" ? "التقاضي والتحكيم" : "Litigation and Arbitration",
  meta: [
    {
      name: "description",
      content:
        locale.value === "ar"
          ? "خدمة التقاضي والتحكيم هي عملية التمثيل القانوني التي يتم تقديمها للأفراد والشركات لحل المنازعات القانونية. تشمل هذه الخدمة الترافع أمام المحاكم على اختلاف أنواعها ودرجاتها، بالإضافة إلى تقديم الدعم اللازم في عمليات التحكيم أمام الهيئات المتخصصة."
          : "Litigation and arbitration services involve legal representation provided to individuals and companies to resolve disputes efficiently and effectively. This includes advocacy before courts of all types and levels, as well as comprehensive support in arbitration proceedings before specialised tribunals and institutions.",
    },
  ],
}));

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
