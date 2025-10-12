<template>
    <div>
        <header-img-section :img="ConsultingContracts" title="services.contracts.title" />
        <WhatTheService title="services.contracts.question" desc="services.contracts.intro"
            cardOTitle="services.contracts.consulting.title" cardOdesc="services.contracts.consulting.text"
            cardTTitle="services.contracts.contracts.title" cardTdesc="services.contracts.contracts.text" />
        <DetailedServiceSection title="services.contracts.details" :details="locale === 'ar' ? detailsAr : detailsEn" />
        <CTASection title="services.contracts.cta" buttonO="services.contracts.buttons.requestService"
            buttonT="services.contracts.buttons.bookConsultation" :img="cta" />
        <!-- <OtherServicesSection /> -->
    </div>
</template>



<script setup lang="ts">
const { locale } = useI18n()

const detailsAr = ["التفاوض القانوني", "حماية الحقوق والالتزامات", "عقود العمل والشراكات", "إدارة المخاطر", "حل النزاعات التعاقدية", "الاستشارات القانونية", "مراجعة الاتفاقيات", "صياغة العقود"]
const detailsEn = [
    "Legal Negotiation",
    "Protection of Rights and Obligations",
    "Employment and Partnership Contracts",
    "Risk Management",
    "Resolution of Contractual Disputes",
    "Legal Consultations",
    "Agreement Review",
    "Drafting and Reviewing Contracts"
]
import ConsultingContracts from "../assets/img/pannel/ConsultingContracts.webp"
import cta from "../assets/img/pannel/cta.webp"

</script>

<style scoped></style>