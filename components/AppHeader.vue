<template>
    <header class="relative z-30 max-2xl:px-6 py-4 md:py-6 text-white bg-primary-500"
        :class="adjustedPath === '/' ? 'home' : ''" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="mx-auto max-w-[1315px] ">
            <div class="relative z-40">
                <div class="flex items-center justify-between ">
                    <div class="flex items-center justify-between gap-6">
                        <nuxt-link :to="localePath('index')" class="block relative ">
                            <img src="~/assets/img/Logo.svg" :class="locale === 'ar' ? '' : 'hidden'"
                                class="h-[50px] w-fit  xl:h-[57px] relative " alt="alshangiti" height="57px" width="220"
                                loading="eager" fetchpriority="high" />
                        </nuxt-link>
                        <h1
                            class="hidden md:inline text-white text-base font-medium  border-r-[2.5px] border-[#EEC882] pr-2.5 py-2.5">
                            خبرة في قطاع الأعمال <span class="text-[#EEC882]">
                                منذ 2005
                            </span>
                        </h1>
                    </div>
                    <div class="flex items-center justify-between gap-6 ">
                        <!-- <nav class="relative hidden lg:block h-full z-20 bg-text">
                            <ul class="flex  items-center">
                                <li :class="adjustedPath === '/' ? 'active' : ''">
                                    <nuxt-link :to="localePath('index')">
                                        الرئيسية
                                    </nuxt-link>
                                </li>
                                <li :class="adjustedPath === '/about-us' ? 'active' : ''">
                                    <nuxt-link :to="localePath('about-us')">

                                        من نحن

                                    </nuxt-link>
                                </li>

                                <li :class="adjustedPath.startsWith('consulting') ? 'active' : ''" class="relative">
                                    <nuxt-link :to="localePath('consulting-contracts')">
                                        خدماتنا
                                    </nuxt-link>


                                </li>

                                <li :class="adjustedPath === '/suppliers' ? 'active' : ''">
                                    <nuxt-link :to="localePath('suppliers')">
                                        المدونة
                                    </nuxt-link>
                                </li>

                            </ul>
                            <div
                                class="absolute top-0 left-0 w-fit min-w-[220px] h-fit p-6 flex flex-col items-start bg-red-500 z-10">
                                <nuxt-link to="consulting-contracts"
                                    class="block py-3 text-white hover:text-secondary font-medium text-base">
                                    الاستشارات والعقود
                                </nuxt-link>
                                <nuxt-link to="consulting-contracts"
                                    class="block py-3 text-white hover:text-secondary font-medium text-base">
                                    الاستشارات والعقود
                                </nuxt-link>
                                <nuxt-link to="consulting-contracts"
                                    class="block py-3 text-white hover:text-secondary font-medium text-base">
                                    الاستشارات والعقود
                                </nuxt-link>
                            </div>
                        </nav> -->


                        <nav class="relative hidden lg:block h-full">
                            <ul class="flex items-center">
                                <li :class="adjustedPath === '/' ? 'active' : ''">
                                    <nuxt-link :to="localePath('index')">الرئيسية</nuxt-link>
                                </li>

                                <li :class="adjustedPath === '/about-us' ? 'active' : ''">
                                    <nuxt-link :to="localePath('about-us')">من نحن</nuxt-link>
                                </li>

                                <!-- هنا: اجعل الـ li هو الـ relative و استخدم group لعرض القائمة عند hover -->
                                <li class="relative group">
                                    <div class="flex justify-center items-center gap-2" @click="openMenu = !openMenu">

                                        <span class="cursor-pointer"
                                            :class="adjustedPath.includes('consulting') ? 'active' : ''">
                                            خدماتنا
                                        </span>
                                        <i class="fa-solid fa-chevron-up text-white transition-all ease-in-out duration-300"
                                            :class="!openMenu ? '-rotate-180' : 'rotate-0'"></i>
                                    </div>

                                    <!-- dropdown: top-full => يبدأ من أسفل الـ li، z-50 => فوق باقي المحتوى -->
                                    <div class=" absolute top-[66px] right-0 mt-2 w-fit min-w-[220px] p-6 flex flex-col
                                        items-start bg-primary-600 z-50 transform transition-all duration-200"
                                        :class="openMenu ? 'opacity-100 visible translate-y-0' : 'opacity-100 invisible -translate-y-2'">
                                        <nuxt-link @click="openMenu = false" to="consulting-contracts"
                                            class="block py-3 text-white hover:text-secondary font-medium text-base">
                                            الاستشارات والعقود
                                        </nuxt-link>
                                        <nuxt-link @click="openMenu = false" to="consulting-arbitration"
                                            class="block py-3 text-white hover:text-secondary font-medium text-base">
                                            التقاضي والتحكيم
                                        </nuxt-link>
                                        <nuxt-link @click="openMenu = false" to="consulting-company"
                                            class="block py-3 text-white hover:text-secondary font-medium text-base">
                                            خدمات الشركات
                                        </nuxt-link>
                                    </div>
                                </li>

                                <li :class="adjustedPath === '/suppliers' ? 'active' : ''">
                                    <nuxt-link :to="localePath('suppliers')">المدونة</nuxt-link>
                                </li>
                            </ul>
                        </nav>
                        <div class="hidden  justify-between  lg:flex items-center gap-2 xl:gap-6">
                            <ul>
                                <li :class="adjustedPath === '/contact-us' ? 'active' : ''">
                                    <nuxt-link :to="localePath('contact-us')">
                                        تواصل معنا
                                    </nuxt-link>
                                </li>
                            </ul>
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div class="lg:hidden text-2xl cursor-pointer sm:text-3xl">
                        <i class="fa-solid fa-bars-staggered " :class="{ hidden: isSideBar }" @click="toggleSidebar" />
                        <i class="fa-solid fa-xmark text-white" :class="{ hidden: !isSideBar }"
                            @click="toggleSidebar" />
                    </div>
                </div>
            </div>
            <transition :name="transitionName">
                <div v-if="isSideBar"
                    class="sideBar fixed inset-x-0 top-0 z-30 flex h-[calc(100dvh)] w-full flex-col items-start px-6 md:px-11 transition-all sm:px-7 lg:hidden"
                    :class="[
                        {
                            'right-0': locale === 'ar',
                            'left-0': locale !== 'ar',
                        },
                    ]">
                    <div class="pt-[83px] lg:pt-[100px]">
                        <nav class="mt-4 inline-block w-full">
                            <ul class="flex flex-col gap-5">
                                <li :class="[
                                    adjustedPath === '/' ? 'active' : '',
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('index')" @click="isSideBar = !isSideBar" class="w-full">
                                        الرئيسية

                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    adjustedPath === '/about-us' ? 'active' : '',
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('about-us')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        من نحن

                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    adjustedPath === '/projects' ? 'active' : '',
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('projects')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        خدماتنا
                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    adjustedPath === '/suppliers' ? 'active' : '',
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('suppliers')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        المدونة

                                    </nuxt-link>
                                </li>

                                <li :class="[
                                    adjustedPath === '/contact-us' ? 'active' : '',
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('contact-us')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        تواصل معنا
                                    </nuxt-link>
                                </li>
                            </ul>
                        </nav>
                        <div class="mt-5 justify-between flex-col ">
                            <LanguageSwitcher isWhite />

                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script setup lang="ts">

// import AOS from "aos";
// import "aos/dist/aos.css";
// onMounted(() => {
//     AOS.init({
//         duration: 600,
//         once: true,
//     })
// })
import { useDebounceFn } from "@vueuse/core";
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const isSideBar = ref<boolean>(false);
const transitionName = computed(() =>
    locale.value === "ar" ? "sidebar-ar" : "sidebar-en",
);

const openMenu = ref(false)
const route = useRoute();



// Optimize sidebar toggle function
const toggleSidebar = () => {
    isSideBar.value = !isSideBar.value;
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
    document.body.style.overflow = value ? "hidden" : "";
}, 100);

watch(isSideBar, (newValue) => {
    debouncedScrollLock(newValue);
});

// Close sidebar on scroll with debounce
const debouncedScrollHandler = useDebounceFn(() => {
    if (isSideBar.value) {
        isSideBar.value = false;
    }
}, 100);

onMounted(() => {
    window.addEventListener("scroll", debouncedScrollHandler);
});


const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/");
    if (segments[1] && segments[1].length === 2) {
        return `/${segments.slice(2).join("/")}`;
    }
    return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));


</script>

<style scoped>
a {
    text-decoration: none;
}


ul li {
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
    position: relative;
    list-style: none;
    width: fit-content;
    cursor: pointer;
    transition: color 0.3s ease;
    will-change: color;
    line-height: 25px;
    padding: 8px 24px;
    text-align: center;
    border-bottom: 2px solid transparent;
}


@media (min-width:1024px) and (max-width: 1280px) {
    ul li {
        font-size: 14px;
        line-height: 22.4px;
        padding: 8px 16px;
    }
}

@media (max-width:768px) {
    ul li {
        padding: 8px 0px;
    }
}

ul li a,
ul li {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul li:hover {
    color: white;
}

ul li.active,
.active {
    color: white;
    font-weight: 700;
}

.sideBar {
    background: linear-gradient(to right, #0a0911, #0a0911f5);
    opacity: 0.9;
    will-change: transform;
}

.sideBar nav ul li {
    border-bottom: 2px solid transparent;
}

.sideBar nav ul li:hover,
.sideBar nav ul li.active {
    border-bottom: 2px solid #617961;
}

.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
    transition: all 0.3s ease;
    will-change: transform, opacity;
}

.sidebar-en-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-en-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-ar-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.sidebar-ar-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>