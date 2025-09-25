<template>
    <section class="TestmonialsSection pt-28 relative">


        <div class="absolute top-0 left-0 w-full h-[calc(100%-86px)] bg-primary-500"></div>

        <div class="container max-w-[1315px] mx-auto max-2xl:px-6 z-10 relative">
            <div
                class="sectionTitle mb-12 md:mb-24 flex gap-4 md:gap-6 items-start sm:items-end justify-between  max-sm:flex-col">
                <div class="">
                    <h1 class="text-white font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2 ">
                        آراء عملاؤنا
                    </h1>
                    <p class="text-2xl font-normal text-white">
                        حلول قانونية دقيقة تدعم نجاحك وتحقق أهدافك
                    </p>
                </div>
                <div class="flex gap-4 items-center  justify-end">
                    <div ref="prevEl"
                        class="bg-primary-200 hover:bg-primary-400 transition-all ease-in-out duration-300 p-3 size-12 rounded-full  cursor-pointer flex justify-center items-center text-white">
                        <i class="fa-solid fa-chevron-right text-xl "></i>
                    </div>
                    <div ref="nextEl"
                        class="bg-primary-200 hover:bg-primary-400 transition-all ease-in-out  duration-300 p-3 size-12 rounded-full cursor-pointer  flex justify-center items-center text-white">
                        <i class="fa-solid fa-chevron-left text-xl "></i>
                    </div>
                </div>
            </div>
            <div class="">
                <Swiper :modules="modules" :breakpoints="{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }" :navigation="{
                    nextEl: nextEl,
                    prevEl: prevEl,
                }" class="rounded-3xl ">
                    <SwiperSlide v-for="(value, index) in 10" class="pb-1 px-1  ">
                        <div class="Card boxShadow py-10 px-8 flex flex-col gap-4 bg-white rounded-3xl  h-fit">
                            <div class="flex gap-2">
                                <div class="size-12 rounded-full bg-primary-50"></div>
                                <div class="flex flex-col">
                                    <h2 class="text-text font-bold text-base md:text-lg mb-1">{{ index }}
                                    </h2>
                                    <div class="flex gap-1.5 items-center ">
                                        <i class="fa-solid fa-star text-[#FFB800]" v-for="value in 5"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-text text-sm md:text-base  font-normal">
                                جربتنا مع مكتبكم كانت استثنائية. حصلنا على استشارات دقيقة وسريعة ساعدتنا على حل نزاع
                                معقد في وقت
                                قياسي.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Keyboard, } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const modules = [Navigation, Keyboard,];

const nextEl = ref<HTMLElement | null>(null);
const prevEl = ref<HTMLElement | null>(null);

</script>

<style scoped></style>