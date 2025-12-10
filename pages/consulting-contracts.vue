<template>
  <main>
    <header-img-section
      :img="ConsultingContracts"
      title="services.contracts.title"
    />
    <WhatTheService
      title="services.contracts.question"
      desc="services.contracts.intro"
      cardOTitle="services.contracts.consulting.title"
      cardOdesc="services.contracts.consulting.text"
      cardTTitle="services.contracts.contracts.title"
      cardTdesc="services.contracts.contracts.text"
    />
    <DetailedServiceSection
      title="services.contracts.details"
      :details="locale === 'ar' ? detailsAr : detailsEn"
    />
    <CTASection
      title="services.contracts.cta"
      buttonO="services.contracts.buttons.requestService"
      buttonT="services.contracts.buttons.bookConsultation"
      :img="cta"
    />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();

useHead(() => ({
  title:
    locale.value === "ar"
      ? "محمود الشنقيطي: العقود والاستشارات "
      : "Mr. Mahmoud Alshangiti: Contracts and Consulting",
  meta: [
    {
      name: "description",
      content:
        locale.value === "ar"
          ? "خدمة الاستشارات والعقود هي ركيزة أساسية لأي عمل تجاري، حيث تعمل على توفير الحماية القانونية الوقائية والداعمة."
          : "Advisory and contract services form a fundamental pillar of any commercial enterprise. They provide both preventive and supportive legal protection, ensuring that businesses operate within a secure and compliant framework.",
    },
  ],
}));

const detailsAr = [
  "التفاوض القانوني",
  "حماية الحقوق والالتزامات",
  "عقود العمل والشراكات",
  "إدارة المخاطر",
  "حل النزاعات التعاقدية",
  "الاستشارات القانونية",
  "مراجعة الاتفاقيات",
  "صياغة العقود",
];
const detailsEn = [
  "Legal Negotiation",
  "Protection of Rights and Obligations",
  "Employment and Partnership Contracts",
  "Risk Management",
  "Resolution of Contractual Disputes",
  "Legal Consultations",
  "Agreement Review",
  "Drafting and Reviewing Contracts",
];
import ConsultingContracts from "../assets/img/pannel/ConsultingContracts.webp";
import cta from "../assets/img/pannel/cta.webp";
</script>

<style scoped></style>
