<script setup lang="ts">
const locale = useI18n().locale;

import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const error = computed(() => props.error);
</script>

<template>
  <main>
    <AppHeader />

    <div class="py-24 md:py-[200px] flex justify-center items-center">
      <div class="relative w-full text-center sm:min-w-[400px]">
        <h1
          class="text-9xl md:text-[220px] font-extrabold text-center text-[#F3F5F3] select-none"
        >
          {{ error.statusCode }}
        </h1>
        <p
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-normal text-center text-gray-700 w-full"
        >
          {{
            locale === "ar"
              ? "عذراً، الصفحة التي تبحث عنها غير موجودة"
              : "Sorry, the page you are looking for could not be found"
          }}
        </p>
        <nuxt-link :to="$localePath('/')">
          <button
            class="w-fit h-full mx-auto border-[2px] border-primary-500 relative overflow-hidden min-w-[191px] px-6 py-2.5 flex flex-col max-h-[47px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700"
          >
            <span
              class="text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer ease-in-out text-white"
            >
              {{ locale === "ar" ? "العودة للرئيسية" : "Go To Home" }}
            </span>
            <span
              class="absolute -bottom-10 text-sm lg:text-base font-bold group-hover:bottom-0 group-hover:-translate-y-1/2 left-1/2 w-full -translate-x-1/2 transition-all duration-300 cursor-pointer ease-in-out text-secondary"
            >
              {{ locale === "ar" ? "العودة للرئيسية" : "Go To Home" }}}
            </span>
          </button>
        </nuxt-link>
      </div>
    </div>

    <AppFooter />
  </main>
</template>
