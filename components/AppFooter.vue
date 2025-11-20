<template>
  <footer
    class="relative"
    :class="[
      adjustedPath.includes('contact-us') ? 'pt-28 ' : '',
      adjustedPath === '/book-consultation' ? 'bg-[#F6F6F6]' : '',
    ]"
  >
    <div
      class="bg-primary-500 absolute bottom-0 left-0 w-full"
      :class="
        adjustedPath.includes('contact-us') ? 'h-full ' : 'h-[calc(100%-100px)]'
      "
    >
      <div class="relative h-full">
        <div class="absolute top-0 left-0 h-full">
          <img
            src="~/assets/img/Utils/FooterLeftVector.svg"
            alt="FooterLeftVector.svg"
            class="object-contain h-full"
          />
        </div>
        <div class="absolute top-0 right-0 max-lg:hidden h-full">
          <img
            src="~/assets/img/Utils/FooterRightVector.svg"
            alt="FooterLeftVector.svg"
            class="object-contain h-full"
          />
        </div>
      </div>
    </div>
    <div class="container max-w-[1316px] max-2xl:px-6 mx-auto pb-12 relative">
      <div
        class="flex justify-center mb-16 md:mb-[120px]"
        :class="adjustedPath.includes('contact-us') ? 'hidden' : ''"
      >
        <FormSec />
      </div>
      <div
        class="flex flex-wrap gap-6 lg:gap-10 pb-10 md:pb-14 relative border-b border-white"
      >
        <div class="flex-grow col-span-2">
          <div class="flex items-start gap-y-4 gap-x-16 max-[390px]:flex-col">
            <nuxt-link
              :to="localePath('index')"
              class="block relative cursor-pointer"
            >
              <img
                src="~/assets/img/Logo.svg"
                class="h-[50px] w-fit xl:h-[80px] relative block"
                alt="techOzone"
                height="80"
                width="186"
                loading="lazy"
              />
            </nuxt-link>
            <div
              class="text-secondary font-medium text-xl text-center relative mb-6 max-[390px]:mr-[40px]"
            >
              <div class="absolute top-1/2 -translate-y-1/2 -right-10">
                <img
                  src="~/assets/img/date.svg"
                  alt="date"
                  width="40"
                  height="40"
                  class="-rotate-6"
                />
              </div>
              <p>{{ locale === "ar" ? "منذ" : "since " }}</p>
              <p>2005</p>
              <div class="absolute top-1/2 -translate-y-1/2 -left-10">
                <img
                  src="~/assets/img/date.svg"
                  alt="date"
                  width="40"
                  height="40"
                  class="-scale-x-100 rotate-6"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 md:gap-6 font-bold mt-6">
            <nuxt-link
              :to="$localePath('our-achievement')"
              class="max-[390px]:w-full sm:w-fit"
            >
              <button
                class="relative overflow-hidden max-[390px]:w-full sm:w-fit border-[2px] px-6 py-2.5 flex flex-col max-h-[47px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white hover:bg-secondary border-secondary"
              >
                <span
                  class="text-sm lg:text-base group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer ease-in-out text-secondary"
                >
                  {{ locale === "ar" ? "استكشف انجازاتنا" : "Our Achievement" }}
                </span>
                <span
                  class="absolute w-full -bottom-10 text-sm lg:text-base group-hover:-bottom-0 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer ease-in-out text-primary-700"
                >
                  {{ locale === "ar" ? "استكشف انجازاتنا" : "Our Achievement" }}
                </span>
              </button>
            </nuxt-link>

            <nuxt-link
              :to="$localePath('blogs')"
              class="max-[390px]:w-full sm:w-fit"
            >
              <button
                class="relative overflow-hidden border-[2px] max-[390px]:w-full sm:w-fit px-6 py-2.5 flex flex-col max-h-[47px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white hover:bg-secondary border-secondary"
              >
                <span
                  class="text-sm lg:text-base group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer ease-in-out text-secondary"
                >
                  {{ $t("pages.blog") }}
                </span>
                <span
                  class="absolute w-full -bottom-10 text-sm lg:text-base group-hover:-bottom-0 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer ease-in-out text-primary-700"
                >
                  {{ $t("pages.blog") }}
                </span>
              </button>
            </nuxt-link>
          </div>
        </div>
        <div class="min-w-[120px] lg:w-[183px] md:mx-auto">
          <h1 class="text-white text-base font-medium mb-6">
            {{ locale === "ar" ? "استكشف" : "Explore" }}
          </h1>
          <nav>
            <ul>
              <li :class="{ active: adjustedPath === '/about-us' }">
                <nuxt-link :to="localePath('/about-us')">
                  {{ $t("pages.aboutUs") }}
                </nuxt-link>
              </li>
              <li :class="{ active: adjustedPath === '/blogs' }">
                <nuxt-link :to="localePath('/blogs')">
                  {{ $t("pages.blog") }}
                </nuxt-link>
              </li>
              <li :class="{ active: adjustedPath === '/contact-us' }">
                <nuxt-link :to="localePath('/contact-us')">
                  {{ $t("pages.contactUs") }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="min-w-[120px] lg:w-[183px] md:mx-auto">
          <h1 class="text-white text-base font-medium mb-6">
            {{ $t("pages.footerService") }}
          </h1>
          <nav class="text-white">
            <ul>
              <li :class="{ active: adjustedPath === '/consulting-contracts' }">
                <nuxt-link :to="localePath('/consulting-contracts')">
                  {{ $t("pages.contracts") }}
                </nuxt-link>
              </li>
              <li
                :class="{ active: adjustedPath === '/consulting-arbitration' }"
                class="my-4"
              >
                <nuxt-link :to="localePath('/consulting-arbitration')">
                  {{ $t("pages.litigation") }}
                </nuxt-link>
              </li>
              <li
                :class="{ active: adjustedPath === '/consulting-projects' }"
                class="my-4"
              >
                <nuxt-link :to="localePath('/consulting-projects')">
                  {{ $t("pages.projects") }}
                </nuxt-link>
              </li>
              <li>
                <a href="https://mohsl.com/" target="_blank">
                  {{ $t("pages.collectionservices") }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <div
            class="text-white text-base font-medium mb-6 capitalize border-[#EEC882] py-2.5"
            :class="
              locale === 'ar'
                ? 'border-r-[2.5px] pr-2.5'
                : 'border-l-[2.5px] pl-2.5'
            "
          >
            <p>
              <span v-if="locale === 'ar'">
                خبرة في قطاع الأعمال B2B
                <span class="text-[#EEC882]">منذ 2005</span>
              </span>
              <span v-else>
                Expertise in the B2B business sector
                <span class="text-[#EEC882]">since 2005</span>
              </span>
            </p>
          </div>
          <nav class="max-w-[350px]">
            <ul>
              <li class="pb-0 flex items-center gap-4 group cursor-pointer">
                <a
                  href="https://maps.app.goo.gl/BwhvmWm2MVtbuNcj6?g_st=aw"
                  target="_blank"
                  class="flex items-center gap-2 group cursor-pointer"
                >
                  <i
                    class="fa-solid fa-location-dot text-TextM group-hover:text-[#EEC882] transition-all ease-in-out duration-300"
                  ></i>
                  <span>
                    {{ $t("contact.JeddahLocation") }}
                  </span>
                </a>
              </li>
              <li class="pb-0 flex items-center gap-4 group cursor-pointer">
                <a
                  href="https://maps.app.goo.gl/jrgqJeYTCxMdmoM66?g_st=iw"
                  target="_blank"
                  class="flex items-center gap-2 group cursor-pointer"
                >
                  <i
                    class="fa-solid fa-location-dot text-TextM group-hover:text-[#EEC882] transition-all ease-in-out duration-300"
                  ></i>
                  <span>
                    {{ $t("contact.Al-Madinah") }}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="flex justify-between flex-wrap items-center gap-4 md:gap-6 pt-6 md:pt-8"
      >
        <!-- <div class="flex flex-wrap gap-3 md:gap-4">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white group cursor-pointer hover:border-[#EEC882] transition-all duration-200 ease-in-out"
            v-for="social in SocialMedia"
            :key="social.id"
          >
            <a
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-base group-hover:text-[#EEC882]"
              :aria-label="`Visit our ${social.socialName} page`"
            >
              <i
                class="fa-brands text-white group-hover:text-[#EEC882] duration-200 ease-in-out transition-all text-xl group-hover:text-2xl"
                :class="social.icon"
              ></i>
            </a>
          </div>
        </div> -->
        <p class="text-base font-normal text-white">
          {{
            locale === "ar"
              ? "© 2025 جميع الحقوق محفوظة محمود الشنقيطي للمحاماة  بواسطة "
              : "© 2025 All rights reserved to Alshangiti & Associates Law Firm — powered by"
          }}
          <a href="https://do.com.sa/" target="_blank"> DO </a>
        </p>
        <div class="flex gap-4 md:gap-6 items-center text-white">
          <nuxt-link
            :to="localePath('/terms')"
            :class="{ active: adjustedPath === '/terms' }"
          >
            <p
              class="text-base font-normal hover:text-[#EEC882] duration-300 ease-in-out"
            >
              {{ $t("pages.terms") }}
            </p>
          </nuxt-link>
          <nuxt-link
            :to="localePath('/privacy')"
            :class="{ active: adjustedPath === '/privacy' }"
          >
            <p
              class="text-base font-normal hover:text-[#EEC882] duration-300 ease-in-out"
            >
              {{ $t("pages.privacy") }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();

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
    icon: '<i class="fa-brands fa-whatsapp text-[#7B7B7B]"></i>',
    socialName: "whatsapp",
    link: "https://wa.me/966126069234",
  },
];
</script>

<style scoped>
li {
  @apply text-white text-base font-normal my-2 hover:text-[#EEC882] duration-300 ease-in-out;
}

.active {
  color: #eec882;
}
</style>
