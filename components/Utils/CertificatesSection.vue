<template>
  <section
    class="CertificatesSection bg-[#F6F6F6] max-2xl:px-6 py-20 md:py-24 lg:py-36"
  >
    <div
      class="container mx-auto max-w-[1315px] flex justify-between items-center max-lg:flex-col max-md:gap-6 max-lg:gap-16"
    >
      <h1
        class="text-text text-2xl md:text-3xl lg:text-[40px] lg:!leading-[72px] font-bold max-w-[602px] max-lg:text-center"
      >
        {{ $t("homePage.licenses.subtitle") }}
      </h1>
      <div class="grid grid-cols-1 gap-6 md:gap-10">
        <div
          class="boxShadow rounded-3xl bg-white p-4 md:p-6 flex gap-6 items-center w-full max-w-[534px]"
        >
          <div
            class="border-[#D0D0D0]"
            :class="
              locale === 'ar'
                ? 'border-l-[2.5px]  pl-4 '
                : 'border-r-[2.5px]  pr-4 '
            "
          >
            <div class="w-[100px] sm:max-w-[120px] h-[100px] sm:max-h-[120px]">
              <img
                src="~/assets/img/Certificates/Certificates1.svg"
                alt="Certificates1"
                width="120"
                height="120"
                class="w-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div class="">
            <h2
              class="text-primary-600 font-bold text-base md:text-lg mb-2"
              :class="locale === 'ar' ? ' text-right' : 'text-left'"
            >
              {{ $t("homePage.licenses.items.moj") }}
            </h2>
            <p class="text-[#A1A1A1] font-bold text-base md:text-lg">26141</p>
          </div>
        </div>
        <div
          class="boxShadow rounded-3xl bg-white p-4 md:p-6 flex gap-6 items-center w-full max-w-[534px]"
        >
          <div
            class="border-[#D0D0D0]"
            :class="
              locale === 'ar'
                ? 'border-l-[2.5px]  pl-4 '
                : 'border-r-[2.5px]  pr-4 '
            "
          >
            <div class="w-[100px] sm:max-w-[120px] h-[100px] sm:max-h-[120px]">
              <img
                src="~/assets/img/Certificates/Certificates2.svg"
                alt="Certificates2"
                width="120"
                height="120"
                class="w-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div class="">
            <h2
              class="text-primary-600 font-bold text-base md:text-lg mb-2"
              :class="locale === 'ar' ? ' text-right' : 'text-left'"
            >
              {{ $t("homePage.licenses.items.sba") }}
            </h2>
            <p class="text-[#A1A1A1] font-bold text-base md:text-lg">
              SBA00007274
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>
