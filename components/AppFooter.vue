<template>
    <footer class="relative " :class="adjustedPath.includes('contact-us') ? 'pt-28 ' : ''">


        <div class=" bg-primary-500 absolute bottom-0 left-0 w-full"
            :class="adjustedPath.includes('contact-us') ? 'h-full ' : 'h-[calc(100%-100px)]'">
            <div class="relative h-full">
                <div class='absolute top-0 left-0  h-full'>
                    <img src="~/assets/img/Utils/FooterLeftVector.svg" alt="FooterLeftVector.svg"
                        class="object-contain h-full">
                </div>
                <div class='absolute top-0 right-0 max-md:hidden  h-full'>
                    <img src="~/assets/img/Utils/FooterRightVector.svg" alt="FooterLeftVector.svg"
                        class="object-contain h-full">

                </div>
            </div>
        </div>
        <div class="container max-w-[1316px] max-2xl:px-6 mx-auto pb-12 relative ">

            <div class=" flex justify-center mb-16 md:mb-[120px]"
                :class="adjustedPath.includes('contact-us') ? 'hidden' : ''">
                <FormSec />
            </div>
            <!-- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 -->
            <div class="flex  flex-wrap gap-6 lg:gap-10  pb-10 md:pb-14  relative border-b border-white">
                <div class="flex-grow col-span-2">
                    <nuxt-link :to="localePath('index')" class="block relative cursor-pointer">
                        <img src="~/assets/img/Logo.svg" class="h-[50px] w-fit  xl:h-[80px] relative block"
                            alt="techOzone" height="80" width="186" loading="lazy" />
                    </nuxt-link>

                    <div class="flex gap-4 md:gap-6 font-bold">
                        <nuxt-link to="/contact-us">
                            <button
                                class="relative overflow-hidden border-[2px] w-fit mt-6 px-4 py-2 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white hover:bg-secondary  border-secondary">
                                <span
                                    class=" text-sm lg:text-base  group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                    اطلب عرض مالي</span>
                                <span
                                    class="absolute w-full -bottom-10 text-sm lg:text-base  group-hover:-bottom-0 group-hover:-translate-y-1/2  left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer  ease-in-out text-primary-700 ">
                                    اطلب عرض مالي</span>
                            </button>
                        </nuxt-link>

                        <nuxt-link to="/book-consultation">
                            <button
                                class="relative overflow-hidden border-[2px] w-fit mt-6 px-5 py-2 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white hover:bg-secondary  border-secondary">
                                <span
                                    class=" text-sm lg:text-base  group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                    احجز استشارة قانونية</span>
                                <span
                                    class="absolute w-full -bottom-10 text-sm lg:text-base  group-hover:-bottom-0 group-hover:-translate-y-1/2  left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer  ease-in-out text-primary-700 ">
                                    احجز استشارة قانونية</span>
                            </button>
                        </nuxt-link>
                    </div>
                </div>
                <div class="min-w-[120px] lg:w-[183px] md:mx-auto">
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
                                <div>
                                    المدونة
                                </div>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/contact-us' }">
                                <nuxt-link :to="localePath('/contact-us')">
                                    تواصل معنا
                                </nuxt-link>
                            </li>

                        </ul>
                    </nav>
                </div>
                <div class="min-w-[120px] lg:w-[183px] md:mx-auto">
                    <h1 class="text-white text-base font-medium mb-6">
                        خدماتنا
                    </h1>
                    <nav class="text-white">
                        <ul>
                            <li :class="{ 'active': adjustedPath === '/consulting-company' }">
                                <nuxt-link :to="localePath('/consulting-company')">
                                    خدمات الشركات
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/consulting-contracts' }" class="my-4">
                                <nuxt-link :to="localePath('/consulting-contracts')">
                                    خدمات الاستشارات و العقود
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/consulting-arbitration' }">
                                <nuxt-link :to="localePath('/consulting-arbitration')">
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
                    © 2025 جميع الحقوق محفوظة لشركة Al-Shanqiti. بواسطة DO
                </p>
                <div class="flex gap-4 md:gap-6 items-center text-white">
                    <nuxt-link to="/terms" :class="{ 'active': adjustedPath === '/terms' }">
                        <p class="text-base font-normal hover:text-[#EEC882] duration-300 ease-in-out ">الشروط
                            والأحكام</p>
                    </nuxt-link>
                    <nuxt-link to="/privacy" :class="{ 'active': adjustedPath === '/privacy' }">
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
        link: "https://",
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

.active {
    color: #EEC882
}
</style>