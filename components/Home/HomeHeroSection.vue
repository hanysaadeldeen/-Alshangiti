<template>
    <div class="HomeHeroSection h-[calc(100dvh+50vh)] relative">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/50">
        </div>
        <video autoplay muted loop playsinline poster="~/assets/img/heroPoster.webp"
            class="w-full h-full object-cover absolute -z-10">
            <source src="~/assets/img/heroVideo.webm" type="video/webm">
        </video>

        <div class="h-full flex flex-col justify-evenly z-20 relative max-2xl:px-6 ">
            <div
                class="absolute top-6 sm:top-10 left-[50px] sm:left-[80px] text-white font-medium text-xl md:text-2xl lg:text-3xl text-center ">
                <div class="relative w-fit">
                    <div class="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-10">
                        <img src="~/assets/img/date.svg" alt="date" width="50" height="50"
                            class="max-sm:w-[35px] -rotate-6 ">
                    </div>
                    <p>منذ</p>
                    <p>2005</p>
                    <div class="absolute top-1/2 -translate-y-1/2  -left-8 sm:-left-10">
                        <img src="~/assets/img/date.svg" alt="date" width="50" height="50"
                            class="max-sm:w-[35px] -scale-x-100 rotate-6 ">
                    </div>
                </div>


            </div>
            <div class="max-w-[898px] mx-auto">
                <h1
                    class="text-white font-bold mb-5 text-3xl text-center md:text-5xl lg:text-[64px] lg:!leading-[100px]">

                    {{ $t("homePage.home.hero.headline") }}
                </h1>
                <p class="text-white font-normal text-lg md:text-xl text-center">
                    {{ $t("homePage.home.hero.subtext") }}
                </p>
                <div class="flex gap-3 md:gap-6 justify-center items-stretch max-md:flex-col mt-10">
                    <nuxt-link to="/contact-us">
                        <button
                            class="w-fit h-full border-[2px] border-primary-500 relative overflow-hidden max-md:w-full min-w-[191px]  py-2 px-5  flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 ">
                            <span
                                class=" text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-white">
                                اطلب عرض مالي</span>
                            <span
                                class="absolute -bottom-10  text-sm lg:text-base font-bold  group-hover:bottom-0 group-hover:-translate-y-1/2  left-1/2 w-full -translate-x-1/2  transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                اطلب عرض مالي</span>
                        </button>
                    </nuxt-link>
                    <a href="https://mohsl.com/" target="_blank">
                        <button
                            class="w-fit relative overflow-hidden border-[2px] max-md:w-full  min-w-[191px]  py-2 px-5  flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white  hover:text-secondary border-white hover:border-secondary">
                            <span
                                class="  text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-white">
                                خدمة التحصيل</span>
                            <span
                                class="absolute -bottom-10  text-sm lg:text-base font-bold  group-hover:bottom-0 group-hover:-translate-y-1/2 w-full  left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                خدمة التحصيل</span>
                        </button>
                    </a>
                </div>
            </div>
            <div class="flex justify-center items-center  w-fit mx-auto cursor-pointer">
                <div @click="scrollToSection('hook')">
                    <img src="~/assets/img/scrollTo.gif" alt="scrollTo.gif" width="60" height="60"
                        class="size-[45px] md:size-[60px]">
                </div>
            </div>
            <p class="max-w-[1246px] mx-auto text-white font-bold text-xl md:text-2xl text-center !leading-[45px] "
                id="hook">بخبرة
                تمتد لعشرين
                عاماً في قلب قطاع الأعمال السعودي، نقدم حلولاً قانونية متخصصة في مجالي التجارة والاستثمار. نتميز
                بفريق
                محترف مبتكر، ومرونة في فهم متغيرات السوق، و التزام بأعلى معايير المسؤولية والأخلاقيات المهنية. نحن
                هنا
                لندعم نجاحك ونحمي مصالحك من البداية إلى النهاية</p>
        </div>

    </div>
</template>

<script setup lang="ts">

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
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