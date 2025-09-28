<template>
    <div class="HomeHeroSection h-[calc(100dvh+50vh)] relative">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/50">
        </div>
        <video autoplay muted loop playsinline poster="~/assets/img/heroPoster.webp"
            class="w-full h-full object-cover absolute -z-10">
            <source src="~/assets/img/heroVideo.webm" type="video/webm">
        </video>

        <div class="h-full flex flex-col justify-evenly z-20 relative max-2xl:px-6 ">
            <div class="max-w-[898px] mx-auto">
                <h1
                    class="text-white font-bold mb-5 text-3xl text-center md:text-5xl lg:text-[64px] lg:!leading-[100px]">
                    الشريك
                    القانوني لرحلة الاستثمار</h1>
                <p class="text-white font-normal text-lg md:text-xl text-center">حلول قانونية استباقية تحمي أصولك وتضمن
                    نموّ أعمالك
                    في السوق السعودية</p>
                <div class="flex gap-3 md:gap-6 justify-center items-center max-md:flex-col mt-10">
                    <nuxt-link to="/book-consultation">
                        <button
                            class="w-fit relative overflow-hidden border max-md:w-full min-w-[191px]  py-2 px-5  flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 border-transparent">
                            <span
                                class=" text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-white">
                                احجز استشارة قانونية</span>
                            <span
                                class="absolute -bottom-10  text-sm lg:text-base font-bold  group-hover:bottom-0 group-hover:-translate-y-1/2  left-1/2 w-full -translate-x-1/2  transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                احجز استشارة قانونية</span>
                        </button>
                    </nuxt-link>
                    <nuxt-link to="/contact-us">
                        <button
                            class="w-fit relative overflow-hidden border-[2px] max-md:w-full  min-w-[191px]  py-2 px-5  flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white  hover:text-secondary border-white hover:border-secondary">
                            <span
                                class="  text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-white">
                                اطلب عرض مالي</span>
                            <span
                                class="absolute -bottom-10  text-sm lg:text-base font-bold  group-hover:bottom-0 group-hover:-translate-y-1/2 w-full  left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                اطلب عرض مالي</span>
                        </button>
                    </nuxt-link>
                </div>
            </div>
            <div class="flex justify-center items-center  w-fit mx-auto cursor-pointer">
                <a href="#hook">
                    <img src="~/assets/img/scrollTo.gif" alt="scrollTo.gif" width="60" height="60"
                        class="size-[45px] md:size-[60px]">
                </a>
            </div>
            <p class="max-w-[1246px] mx-auto text-white font-bold text-xl md:text-2xl text-center !leading-[45px]"
                id="hook">بخبرة
                تمتد لعشرين
                عاماً في قلب قطاع الأعمال السعودي، نقدم حلولاً قانونية متخصصة في مجالي التجارة والاستثمار.نتميز بفريق
                محترف مبتكر، ومرونة في فهم متغيرات السوق، والتزام بأعلى معايير المسؤولية والأخلاقيات المهنية.نحن هنا
                لندعم نجاحك ونحمي مصالحك من البداية إلى النهاية</p>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* .HomeHeroSection {
    background-image: url("../../assets/img/heroVideo.webm");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
} */

#hook {
    scroll-margin-top: 40px;
}
</style>