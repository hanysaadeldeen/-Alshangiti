<template>
    <footer class="bg-primary-500">
        <div class="container max-w-[1316px] max-2xl:px-6 mx-auto py-12">
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 md:gap-10 lg:gap-20 pb-10 md:pb-14  relative border-b border-white">
                <div class="flex-grow">
                    <nuxt-link :to="localePath('index')" class="block relative cursor-pointer">
                        <img src="~/assets/img/Logo.svg" class="h-[50px] w-fit  xl:h-[80px] relative block"
                            alt="techOzone" height="80" width="186" loading="lazy" />
                    </nuxt-link>

                </div>
                <div class="max-w-[168px] md:mx-auto">
                    <h1 class="text-white text-base font-medium mb-6">
                        استكشف</h1>
                    <nav class="text-white">
                        <ul>
                            <li :class="{ 'active': adjustedPath === '/about-us' }">
                                <nuxt-link :to="localePath('/about-us')">
                                    من نحن
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath.includes('/sectors') }">
                                <nuxt-link :to="localePath('/sectors')">
                                    القطاعات
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/products' }">
                                <nuxt-link :to="localePath('/products')">
                                    الأجهزة
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/certificates-trust' }">
                                <nuxt-link :to="localePath('/certificates-trust')">
                                    الاعتمادات والثقة
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/gallery' }">
                                <nuxt-link :to="localePath('/gallery')">
                                    المعرض
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="max-w-[168px] md:mx-auto">
                    <h1 class="text-white text-base font-medium mb-6">
                        خدماتنا
                    </h1>
                    <nav class="text-white">
                        <ul>
                            <li :class="{ 'active': adjustedPath === '/faqs' }">
                                <nuxt-link :to="localePath('/faqs')">
                                    الأسئلة الشائعة
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/privacy' }">
                                <nuxt-link :to="localePath('/privacy')">
                                    سياسة الخصوصية
                                </nuxt-link>
                            </li>
                            <li :class="{ 'active': adjustedPath === '/terms' }">
                                <nuxt-link :to="localePath('/terms')">
                                    الشروط والأحكام
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="w-full md:w-[335px]">
                    <h1 class="text-white text-base font-medium mb-6 border-r-[2.5px] border-[#EEC882] pr-2.5 py-2.5">

                        خبرة في قطاع الأعمال <span class="text-[#EEC882]">
                            منذ 2005
                        </span>

                    </h1>
                    <nav class="text-white">
                        <ul>
                            <li class="pb-0 flex items-center gap-4 group  mb-4">
                                <i
                                    class="fa-solid fa-location-dot  text-TextM group-hover:text-Secondary transition-all ease-in-out duration-300"></i>
                                <span>
                                    جدة - حي الخالدية - برج جي فيو - الطابق التاسع
                                </span>
                            </li>
                            <li class="pb-0 flex items-center gap-4 group ">
                                <i
                                    class="fa-solid fa-location-dot  text-TextM group-hover:text-Secondary transition-all ease-in-out duration-300"></i>
                                <span>
                                    الرياض - طريق المطار - واجهة اعمال الرياض
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


            <div class="flex justify-between items-center pt-6 md:pt-8">
                <div class="flex flex-wrap gap-3 md:gap-4 ">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border border-white group cursor-pointer hover:border-[#474747] transition-all duration-200 ease-in-out "
                        v-for="social in SocialMedia" :key="social.id">
                        <a :href="social.link" target="_blank" rel="noopener noreferrer" class="text-base "
                            :aria-label="`Visit our ${social.socialName} page`">
                            <i class="fa-brands  text-white   duration-200 ease-in-out transition-all text-lg"
                                :class="social.icon"></i>
                        </a>
                    </div>
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

<style scoped></style>