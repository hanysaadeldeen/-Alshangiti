<template>
  <header
    class="relative z-30 max-2xl:px-6 py-4 md:py-6 text-white bg-primary-500"
    :class="adjustedPath === '/' ? 'home' : ''"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="mx-auto max-w-[1315px]">
      <div class="relative z-40">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between gap-6">
            <nuxt-link :to="localePath('index')" class="block relative">
              <img
                src="~/assets/img/Logo.svg"
                class="h-[40px] md:h-[50px] w-fit xl:h-[57px] relative"
                alt="alshangiti"
                height="57px"
                width="220"
                loading="eager"
                fetchpriority="high"
              />
            </nuxt-link>
            <div
              class="hidden md:inline text-white text-base font-medium capitalize border-[#EEC882] py-2.5"
              :class="
                locale === 'ar'
                  ? 'border-r-[2.5px] pr-2.5'
                  : 'border-l-[2.5px] pl-2.5'
              "
            >
              <p>
                <span v-if="locale === 'ar'">
                  خبرة في قطاع الأعمال
                  <span class="text-[#EEC882]">منذ 2005</span>
                </span>
                <span v-else>
                  Business experience
                  <span class="text-[#EEC882]">since 2005</span>
                </span>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <nav class="relative hidden lg:block h-full">
              <ul class="flex items-center">
                <li :class="adjustedPath === '/' ? 'active' : ''">
                  <nuxt-link :to="localePath('index')">
                    {{ $t("pages.home") }}
                  </nuxt-link>
                </li>
                <li :class="adjustedPath === '/about-us' ? 'active' : ''">
                  <nuxt-link :to="localePath('about-us')">
                    {{ $t("pages.aboutUs") }}
                  </nuxt-link>
                </li>

                <!-- هنا: اجعل الـ li هو الـ relative و استخدم group لعرض القائمة عند hover -->
                <li class="relative group">
                  <div
                    class="flex justify-center items-center gap-2"
                    @click="openMenu = !openMenu"
                  >
                    <span
                      class="cursor-pointer"
                      :class="
                        adjustedPath.includes('consulting') ? 'active' : ''
                      "
                    >
                      {{ $t("pages.service") }}
                    </span>
                    <i
                      class="fa-solid fa-chevron-up text-white transition-all ease-in-out duration-300"
                      :class="!openMenu ? '-rotate-180' : 'rotate-0'"
                    ></i>
                  </div>

                  <div
                    class="absolute top-[60px] xl:top-[66px] right-0 mt-2 w-fit min-w-[220px] p-6 flex flex-col items-start bg-primary-600 z-50 transform transition-all duration-200"
                    :class="
                      openMenu
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-100 invisible -translate-y-2'
                    "
                  >
                    <nuxt-link
                      @click="openMenu = false"
                      :to="localePath('consulting-contracts')"
                      class="block py-3 text-white hover:text-secondary font-medium text-base"
                    >
                      {{ $t("pages.contracts") }}
                    </nuxt-link>
                    <nuxt-link
                      @click="openMenu = false"
                      :to="localePath('consulting-arbitration')"
                      class="block py-3 text-white hover:text-secondary font-medium text-base"
                    >
                      {{ $t("pages.litigation") }}
                    </nuxt-link>
                    <nuxt-link
                      @click="openMenu = false"
                      :to="localePath('consulting-projects')"
                      class="block py-3 text-white hover:text-secondary font-medium text-base"
                    >
                      {{ $t("pages.projects") }}
                    </nuxt-link>
                  </div>
                </li>

                <li :class="adjustedPath === '/blogs' ? 'active' : ''">
                  <nuxt-link :to="localePath('blogs')">
                    {{ $t("pages.blog") }}
                  </nuxt-link>
                </li>
              </ul>
            </nav>
            <div
              class="hidden justify-between lg:flex items-center gap-2 xl:gap-6"
            >
              <ul>
                <li :class="adjustedPath === '/contact-us' ? 'active' : ''">
                  <nuxt-link :to="localePath('contact-us')">
                    {{ $t("pages.contactUs") }}
                  </nuxt-link>
                </li>
              </ul>
              <LanguageSwitcher />
            </div>
          </div>
          <div class="lg:hidden text-2xl cursor-pointer sm:text-3xl">
            <i
              class="fa-solid fa-bars"
              :class="{ hidden: isSideBar }"
              @click="toggleSidebar"
            />
            <i
              class="fa-solid fa-xmark text-white"
              :class="{ hidden: !isSideBar }"
              @click="toggleSidebar"
            />
          </div>
        </div>
      </div>
      <transition :name="transitionName">
        <div
          v-if="isSideBar"
          class="sideBar fixed inset-x-0 top-0 z-30 flex h-[calc(100dvh)] w-full flex-col items-start px-6 md:px-11 transition-all sm:px-7 lg:hidden"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]"
        >
          <div class="pt-[83px] lg:pt-[100px]">
            <nav class="mt-4 inline-block w-full">
              <ul class="flex flex-col gap-5">
                <li
                  :class="[
                    adjustedPath === '/' ? 'active' : '',
                    'text-white hover:text-PrimaryPL3',
                  ]"
                >
                  <nuxt-link
                    :to="localePath('index')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    {{ $t("pages.home") }}
                  </nuxt-link>
                </li>
                <li
                  :class="[
                    adjustedPath === '/about-us' ? 'active' : '',
                    'text-white hover:text-PrimaryPL3',
                  ]"
                >
                  <nuxt-link
                    :to="localePath('about-us')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    {{ $t("pages.aboutUs") }}
                  </nuxt-link>
                </li>
                <ul class="flex flex-col justify-start items-start">
                  <div
                    class="w-fit flex justify-start items-center gap-2 py-2 cursor-pointer"
                    :class="adjustedPath.includes('consulting') ? 'active' : ''"
                    @click="toggle"
                  >
                    <span>
                      {{ $t("pages.service") }}
                    </span>
                    <i
                      class="fa-solid fa-chevron-up text-white transition-all ease-in-out duration-300"
                      :class="!isOpen ? '-rotate-180' : 'rotate-0'"
                    ></i>
                  </div>
                  <div
                    ref="answer"
                    class="overflow-hidden transition-all duration-500"
                    :style="{ maxHeight: isOpen ? answerHeight + 'px' : '0px' }"
                  >
                    <div
                      class="flex justify-between items-start lg:items-center flex-col"
                    >
                      <nuxt-link
                        @click="[(isSideBar = false), (isOpen = false)]"
                        to="consulting-contracts"
                        class="block py-3 text-white hover:text-secondary font-medium text-base"
                      >
                        {{ $t("pages.contracts") }}
                      </nuxt-link>
                      <nuxt-link
                        @click="[(isSideBar = false), (isOpen = false)]"
                        to="consulting-arbitration"
                        class="block py-3 text-white hover:text-secondary font-medium text-base"
                      >
                        {{ $t("pages.litigation") }}
                      </nuxt-link>
                      <nuxt-link
                        @click="[(isSideBar = false), (isOpen = false)]"
                        to="consulting-projects"
                        class="block py-3 text-white hover:text-secondary font-medium text-base"
                      >
                        {{ $t("pages.projects") }}
                      </nuxt-link>
                    </div>
                  </div>
                </ul>
                <li
                  :class="[
                    adjustedPath === '/blogs' ? 'active' : '',
                    'text-white hover:text-PrimaryPL3',
                  ]"
                >
                  <div @click="isSideBar = !isSideBar" class="w-full">
                    {{ $t("pages.blog") }}
                  </div>
                </li>

                <li
                  :class="[
                    adjustedPath === '/contact-us' ? 'active' : '',
                    'text-white hover:text-PrimaryPL3',
                  ]"
                >
                  <nuxt-link
                    :to="localePath('contact-us')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    {{ $t("pages.contactUs") }}
                  </nuxt-link>
                </li>
              </ul>
            </nav>
            <div class="mt-5 justify-between flex-col">
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
  locale.value === "ar" ? "sidebar-ar" : "sidebar-en"
);

const openMenu = ref(false);
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

const isOpen = ref(false);
const answerHeight = ref(0);
const answer = ref<HTMLDivElement | null>(null);
const toggle = async () => {
  isOpen.value = !isOpen.value;

  await nextTick();
  if (answer.value) {
    answerHeight.value = answer.value.scrollHeight;
  }
};
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

/*
@media (max-width: 1280px) {
    ul li {
        font-size: 14px;
        line-height: 22.4px;
        padding: 8px 16px;
    }
} */

@media (min-width: 768px) {
  ul li {
    padding: 8px 0;
  }
}

@media (max-width: 768px) {
  ul li {
    padding: 8px 0px;
  }
}

@media (min-width: 1024px) {
  ul li {
    /* font-size: 14px;
        line-height: 22.4px; */
    padding: 8px 16px;
  }
}

@media (min-width: 1280px) {
  ul li {
    padding: 8px 24px;
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

.active {
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
