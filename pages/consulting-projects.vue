<template>
    <div>
        <header-img-section :img="ConsultingContracts" title="services.projectServices.title" />
        <WhatTheService title="services.projectServices.question">
            <p class="text-text text-lg md:text-xl  font-normal flex flex-col  max-w-[1164px]">
                <span class="block  text-justify">
                    {{ $t("services.projectServices.descriptionOne") }}
                </span>
                <br>
                <span class="block text-justify">
                    {{ $t("services.projectServices.descriptionTwo") }}

                </span>
            </p>
        </WhatTheService>
        <DetailedServiceSection title="services.projectServices.details"
            :details="locale === 'ar' ? detailsAr : detailsEn" />
        <CTASection title='services.projectServices.cta' buttonO="اطلب عرض مالي" buttonT="احجز استشارة قانونية"
            :img="arbitration" />
        <!-- <OtherServicesSection /> -->
    </div>
</template>



<script setup lang="ts">
const { locale } = useI18n()

const detailsAr = [
    "السجلات و التراخيص",
    "الاستثمار و الصفقات",
    "الملكية الفكرية",
    "الخدمات اللوجيستية",
]
const detailsEn = [
    "Licensing and Regulatory Records",
    "Investment and Transactions",
    "Intellectual Property",
    "Logistics Services"
]
import ConsultingContracts from "../assets/img/pannel/cta.webp"
import arbitration from "../assets/img/pannel/arbitration.webp"

</script>

<style scoped></style>