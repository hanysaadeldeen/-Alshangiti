<template>
    <section class="WhyUsSection max-w-[1315px] mx-auto max-2xl:px-6">
        <div class="sectionTitle">
            <h1
                class="text-text font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2 text-center">
                {{ $t("homePage.features.title") }}
            </h1>
            <p class="text-2xl font-normal text-[#5E5E5E] text-center">
                {{ $t("homePage.features.desc") }}
            </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-20">
            <div class="card boxShadow py-8 px-4 rounded-3xl flex flex-col justify-center items-center gap-4"
                v-for="card in Cards">
                <div class="w-full h-full max-w-[80px] max-h-[80px]">
                    <img :src="card.img" :alt="card.title" width="80" height="80" class="w-full max-w-full"
                        loading="lazy" />
                </div>
                <p class="text-text text-base font-bold text-center">{{ $t(card.title) }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Headset from "../../assets/img/WhyUs/Headset.svg"
import Goals from "../../assets/img/WhyUs/Goals.svg"
import GlobalEducation from "../../assets/img/WhyUs/GlobalEducation.svg"
import DataSecurity from "../../assets/img/WhyUs/DataSecurity.svg"

const Cards = [
    {
        id: 1,
        title: "homePage.features.points[0]",
        img: Headset
    },
    {
        id: 2,
        title: "homePage.features.points[1]",
        img: DataSecurity
    },
    {
        id: 3,
        title: "homePage.features.points[2]",
        img: Goals
    },
    {
        id: 4,
        title: "homePage.features.points[3]",
        img: GlobalEducation
    }
]


</script>

<style scoped></style>