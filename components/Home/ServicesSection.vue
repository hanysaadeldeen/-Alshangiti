<template>
    <section class="ServicesSection">
        <div class="border-b border-[#D3D3D3] pb-[76px]">
            <div class="max-w-[1315px] mx-auto  max-2xl:px-6">
                <h1 class="text-text mb-2 font-bold text-2xl lg:text-[40px] lg:!leading-[72px] max-w-[624px]">

                    {{ $t("homePage.services.title") }}
                </h1>
                <p class="text-[#5E5E5E] text-lg md:text-xl lg:text-2xl font-normal max-w-[624px] text-justify">
                    {{ $t("homePage.services.intro") }}

                </p>
            </div>
        </div>

        <services-section-card v-for="service in Services" :link="service.link" :Details="service.Details"
            :img="service.img" :title="service.title" :description="service.description"
            :descriptionToogle="service.descriptionToogle" />

    </section>
</template>

<script setup lang="ts">

import cta from "../../assets/img/pannel/cta.webp"
import ConsultingContracts from "../../assets/img/pannel/ConsultingContracts.webp"
import table from "../../assets/img/pannel/table.webp"

const Services = [
    {
        title: "homePage.services.services[0].title",
        description: "homePage.services.services[0].description",
        descriptionToogle: "homePage.services.services[0].descriptionToggle",
        img: cta,
        Details: [
            "homePage.services.services[0].details[0]",
            "homePage.services.services[0].details[1]",
            "homePage.services.services[0].details[2]",
            "homePage.services.services[0].details[3]",
            "homePage.services.services[0].details[4]",
            "homePage.services.services[0].details[5]",
            "homePage.services.services[0].details[6]",
            "homePage.services.services[0].details[7]",
            "homePage.services.services[0].details[8]",
            "homePage.services.services[0].details[9]",
            "homePage.services.services[0].details[10]",
        ],
        link: "consulting-arbitration"
    },
    {
        title: "homePage.services.services[1].title",
        description: "homePage.services.services[1].description",
        descriptionToogle: "homePage.services.services[1].descriptionToggle",
        img: ConsultingContracts,
        Details: [
            "homePage.services.services[1].details[0]",
            "homePage.services.services[1].details[1]",
            "homePage.services.services[1].details[2]",
            "homePage.services.services[1].details[3]",
            "homePage.services.services[1].details[4]",
            "homePage.services.services[1].details[5]",
            "homePage.services.services[1].details[6]",
            "homePage.services.services[1].details[7]",
        ],
        link: "consulting-contracts"
    },

    {
        title: "homePage.services.services[2].title",
        description: "homePage.services.services[2].description",
        descriptionToogle: "homePage.services.services[2].descriptionToggle",
        img: table,
        Details: [
            "homePage.services.services[2].details[0]",
            "homePage.services.services[2].details[1]",
            "homePage.services.services[2].details[2]",
            "homePage.services.services[2].details[3]",
        ],
        link: "consulting-arbitration"
    },
]
</script>

<style scoped></style>