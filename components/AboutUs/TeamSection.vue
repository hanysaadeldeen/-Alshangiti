<template>
    <div class="TeamSection relative">
        <div class="pt-[100px] text-center relative z-10">
            <h1 class="text-white font-bold text-xl md:text-2xl lg:text-[40px] lg:!leading-[72px]">فريقنا القانوني
            </h1>
            <p class="text-[#EFF2EF] text-lg md:text-xl lg:text-2xl">خبرة متكاملة وشغف بالتميز</p>
        </div>
        <div class=" bg-primary-500 absolute bottom-0 left-0 w-full h-full">
            <div class="relative h-full">
                <div class='max-md:hidden absolute top-0 left-0  h-full'>
                    <img src="~/assets/img/Utils/FooterLeftVector.svg" alt="FooterLeftVector.svg"
                        class="object-contain h-full">
                </div>
                <div class=' absolute top-0 right-0  h-full'>
                    <img src="~/assets/img/Utils/FooterRightVector.svg" alt="FooterLeftVector.svg"
                        class="object-contain h-full">

                </div>
            </div>
        </div>
        <div class="max-md:hidden members mx-auto max-w-[1315px] relative z-10 flex items-end mt-[132px]">
            <div class="pt-10 px-4 flex gap-[62px] flex-col items-center justify-between bg-primary-200 ">
                <div class="text-center max-w-[174px]">
                    <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / بندر الشهري</h1>
                    <p class="text-[#656565] font-normal text-sm">بكالوريوس قانون
                        جامعة الملك عبد العزيز</p>
                </div>
                <div class="max-w-[242px] max-h-[196px]">
                    <img src="~/assets/img/About/bander.webp" alt="bander.webp" width="242" height="196" loading="lazy"
                        class="w-full h-full object-contain">
                </div>
            </div>
            <div class="pt-10 px-4 flex gap-6 flex-col items-center justify-between bg-primary-100">
                <div class="text-center max-w-[174px]">
                    <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / البراء محضار</h1>
                    <p class="text-[#656565] font-normal text-sm">بكالوريوس قانون
                        جامعة الملك عبد العزيز</p>
                </div>
                <div class="max-h-[198px] max-w-[232px]">
                    <img src="~/assets/img/About/baraa.webp" alt="baraa.webp" width="232" height="198" loading="lazy"
                        class="w-full h-full object-contain">
                </div>
            </div>
            <div class="pt-10 px-11 flex gap-20 flex-col items-center justify-between bg-primary-200">
                <div class="text-center max-w-[174px]">
                    <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / محمود الشنقيطي</h1>
                    <p class="text-[#656565] font-normal text-sm">
                        بكالوريوس قانون
                        جامعة الملك عبد العزيز</p>
                </div>
                <div class="max-h-[220px] max-w-[198px]">
                    <img src="~/assets/img/About/shangiti.webp" alt="shangiti.webp" width="198" height="220"
                        loading="lazy" class="w-full h-full object-contain">
                </div>
            </div>
            <div class="pt-10 px-4 flex gap-[62px] flex-col items-center justify-between bg-primary-100">
                <div class="text-center max-w-[174px]">
                    <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / صهيب باحاذق</h1>
                    <p class="text-[#656565] font-normal text-sm">ماجيستير قانون دولي جامعة كينت - بريطانييا</p>
                </div>
                <div class="max-h-[196px] max-w-[246px]">
                    <img src="~/assets/img/About/dohib.webp" alt="dohib.webp" width="246" height="196" loading="lazy"
                        class="w-full h-full object-contain">
                </div>
            </div>
            <div class="pt-10 px-4 flex gap-6 flex-col items-center justify-between bg-primary-200">
                <div class="text-center max-w-[174px]">
                    <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / حسان رسلان</h1>
                    <p class="text-[#656565] font-normal text-sm">بكالوريوس شريعة وقانون
                        جامعة الأزهر</p>
                </div>
                <div class="max-h-[198px] max-w-[232px]">
                    <img src="~/assets/img/About/hosam.webp" alt="baraa.webp" width="232" height="198" loading="lazy"
                        class="w-full h-full object-contain">
                </div>
            </div>
        </div>

        <div class="md:hidden px-16  mt-20 relative">
            <div ref="prevEl"
                class="bg-primary-200 hover:bg-primary-400 transition-all ease-in-out p-3 size-12 rounded-full  cursor-pointer flex justify-center items-center text-white absolute top-1/2  -translate-y-1/2 right-1">
                <i class="fa-solid fa-chevron-right text-xl "></i>
            </div>
            <div ref="nextEl"
                class="bg-primary-200 hover:bg-primary-400 transition-all ease-in-out p-3 size-12 rounded-full cursor-pointer  flex justify-center items-center text-white absolute top-1/2  -translate-y-1/2 left-1">
                <i class="fa-solid fa-chevron-left text-xl "></i>
            </div>
            <Swiper :modules="modules" :slidesPerView="'auto'" class="px-10" :navigation="{
                nextEl: nextEl,
                prevEl: prevEl,
            }">

                <SwiperSlide class="justify-end items-end h-full  rounded-full">
                    <div class="pt-10 px-4 flex gap-20 flex-col items-center justify-between bg-primary-200 ">
                        <div class="text-center max-w-[174px]">
                            <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / بندر الشهري</h1>
                            <p class="text-[#656565] font-normal text-sm">بكالوريوس قانون
                                جامعة الملك عبد العزيز</p>
                        </div>
                        <div class="h-[220px] max-w-[198px]">
                            <img src="~/assets/img/About/bander.webp" alt="bander.webp" width="198" height="220"
                                loading="lazy" class="w-full h-full object-cover">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pt-10 px-4 flex gap-20 flex-col items-center justify-between bg-primary-100">
                        <div class="text-center max-w-[174px]">
                            <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / البراء محضار</h1>
                            <p class="text-[#656565] font-normal text-sm">بكالوريوس قانون
                                جامعة الملك عبد العزيز</p>
                        </div>
                        <div class="h-[220px] max-w-[198px]">
                            <img src="~/assets/img/About/baraa.webp" alt="baraa.webp" width="198" height="220"
                                loading="lazy" class="w-full h-full object-cover">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pt-10 px-4 flex gap-20 flex-col items-center justify-between bg-primary-200">
                        <div class="text-center max-w-[174px]">
                            <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / محمود الشنقيطي</h1>
                            <p class="text-[#656565] font-normal text-sm">
                                بكالوريوس قانون
                                جامعة الملك عبد العزيز</p>
                        </div>
                        <div class="h-[220px] max-w-[198px]">
                            <img src="~/assets/img/About/shangiti.webp" alt="shangiti.webp" width="198" height="220"
                                loading="lazy" class="w-full h-full object-cover">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pt-10 px-4 flex gap-20 flex-col items-center justify-between bg-primary-100">
                        <div class="text-center max-w-[174px]">
                            <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / صهيب باحاذق</h1>
                            <p class="text-[#656565] font-normal text-sm">ماجيستير قانون دولي جامعة كينت - بريطانييا</p>
                        </div>
                        <div class="h-[220px] max-w-[198px]">
                            <img src="~/assets/img/About/dohib.webp" alt="dohib.webp" width="198" height="220"
                                loading="lazy" class="w-full h-full object-cover">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="pt-10 px-4 flex gap-20 flex-col items-center justify-between bg-primary-200">
                        <div class="text-center max-w-[174px]">
                            <h1 class="text-base md:text-lg font-bold text-[#354335]">أ / حسان رسلان</h1>
                            <p class="text-[#656565] font-normal text-sm">بكالوريوس شريعة وقانون
                                جامعة الأزهر</p>
                        </div>
                        <div class="h-[220px] max-w-[198px]">
                            <img src="~/assets/img/About/hosam.webp" alt="baraa.webp" width="198" height="220"
                                loading="lazy" class="w-full h-full object-cover">
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>



    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Keyboard, } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const modules = [Navigation, Keyboard];


const nextEl = ref<HTMLElement | null>(null);
const prevEl = ref<HTMLElement | null>(null);
</script>

<style scoped></style>