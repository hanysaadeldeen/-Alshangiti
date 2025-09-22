<template>
    <footer class="relative">

        <div class="h-[calc(100%-100px)] bg-primary-500 absolute bottom-0 left-0 w-full">
            <div class="relative h-full">
                <div class='absolute top-0 left-0  h-full'>
                    <img src="~/assets/img/Utils/FooterLeftVector.svg" alt="FooterLeftVector.svg"
                        class="object-contain h-full">
                </div>
                <div class='absolute top-0 right-0  h-full'>
                    <img src="~/assets/img/Utils/FooterRightVector.svg" alt="FooterLeftVector.svg"
                        class="object-contain h-full">

                </div>
            </div>
        </div>
        <div class="container max-w-[1316px] max-2xl:px-6 mx-auto pb-12 relative ">

            <div class="w-fit mx-auto ">
                <FormSec />
            </div>

            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20 pb-10 md:pb-14  relative border-b border-white">
                <div class="flex-grow">
                    <nuxt-link :to="localePath('index')" class="block relative cursor-pointer">
                        <img src="~/assets/img/Logo.svg" class="h-[50px] w-fit  xl:h-[80px] relative block"
                            alt="techOzone" height="80" width="186" loading="lazy" />
                    </nuxt-link>

                </div>
                <div class="max-w-[183px] md:mx-auto">
                    <h1 class="text-white text-base font-medium mb-6">
                        استكشف</h1>
                    <nav>
                        <ul>
                            <li :class="{ 'active': adjustedPath === '/about-us' }">
                                <nuxt-link :to="localePath('/about-us')">
                                    من نحن
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath.includes('/blogs') }" class="my-1">
                                <nuxt-link :to="localePath('/blogs')">
                                    المدونة
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/contact-us' }">
                                <nuxt-link :to="localePath('/contact-us')">
                                    تواصل معنا
                                </nuxt-link>
                            </li>

                        </ul>
                    </nav>
                </div>
                <div class="max-w-[183px] md:mx-auto">
                    <h1 class="text-white text-base font-medium mb-6">
                        خدماتنا
                    </h1>
                    <nav class="text-white">
                        <ul>
                            <li :class="{ 'active': adjustedPath === '/faqs' }">
                                <nuxt-link :to="localePath('/faqs')">
                                    خدمات الشركات
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/privacy' }" class="my-4">
                                <nuxt-link :to="localePath('/privacy')">
                                    خدمات الاستشارات و العقود
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/terms' }">
                                <nuxt-link :to="localePath('/terms')">
                                    خدمات التقاضي و التحكيم
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="">
                    <h1 class="text-white text-base font-medium mb-6 border-r-[2.5px] border-[#EEC882] pr-2.5 py-2.5">
                        خبرة في قطاع الأعمال <span class="text-[#EEC882]">
                            منذ 2005
                        </span>
                    </h1>
                    <nav>
                        <ul>
                            <li class="pb-0 flex items-center gap-4 group  mb-4 cursor-pointer">
                                <i
                                    class="fa-solid fa-location-dot  text-TextM group-hover:text-[#EEC882]   transition-all ease-in-out duration-300"></i>
                                <span>
                                    جدة - حي الخالدية - برج جي فيو - الطابق التاسع
                                </span>
                            </li>
                            <li class="pb-0 flex items-center gap-4 group cursor-pointer">
                                <i
                                    class="fa-solid fa-location-dot  text-TextM group-hover:text-[#EEC882]   transition-all ease-in-out duration-300"></i>
                                <span>
                                    الرياض - طريق المطار - واجهة اعمال الرياض
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


            <div class="flex justify-between flex-wrap items-center gap-4 md:gap-6 pt-6 md:pt-8">
                <div class="flex flex-wrap gap-3 md:gap-4 ">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border border-white group cursor-pointer hover:border-[#EEC882] transition-all duration-200 ease-in-out "
                        v-for="social in SocialMedia" :key="social.id">
                        <a :href="social.link" target="_blank" rel="noopener noreferrer"
                            class="text-base group-hover:text-[#EEC882]"
                            :aria-label="`Visit our ${social.socialName} page`">
                            <i class="fa-brands  text-white group-hover:text-[#EEC882]   duration-200 ease-in-out transition-all text-lg"
                                :class="social.icon"></i>
                        </a>
                    </div>
                </div>
                <p class="text-base font-normal text-white">
                    © 2025 جميع الحقوق محفوظة لشركة البدور. بواسطة DO
                </p>
                <div class="flex gap-4 md:gap-6 items-center text-white">
                    <nuxt-link to="/terms">
                        <p class="text-base font-normal hover:text-[#EEC882] duration-300 ease-in-out ">الشروط
                            والأحكام</p>
                    </nuxt-link>
                    <nuxt-link to="/privacy">
                        <p class="text-base font-normal hover:text-[#EEC882] duration-300 ease-in-out ">سياسة
                            الخصوصية</p>
                    </nuxt-link>
                </div>
            </div>


        </div>
    </footer>
</template>

<script setup lang="ts">

const localePath = useLocalePath();
const { locale } = useI18n()

const route = useRoute();

const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/");
    if (segments[1] && segments[1].length === 2) {
        return `/${segments.slice(2).join("/")}`;
    }
    return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));


const SocialMedia = [
    {
        id: 1,
        icon: '<i class="fa-brands fa-instagram text-[#7B7B7B]"></i>',
        socialName: "Instagram",
        link: "https://www.instagram.com/healthygo.369/",
    },
    {
        id: 2,
        icon: '<i class="fa-brands fa-snapchat text-[#7B7B7B]"></i>',
        socialName: "snapchat",
        link: "https://www.snapchat.com/in/do-sa-b3682a362/",
    },
    {
        id: 3,
        icon: '<i class="fa-brands fa-whatsapp text-[#7B7B7B]"></i>',
        socialName: "whatsapp",
        link: "https://wa.me/966502765770",
    },
    {
        id: 4,
        icon: '<i class="fa-brands fa-tiktok text-[#7B7B7B]"></i>',
        socialName: "tiktok",
        link: "https://",
    },
];

</script>

<style scoped>
li {
    @apply text-white text-base font-normal my-2 hover:text-[#EEC882] duration-300 ease-in-out
}
</style>