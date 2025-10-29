<template>
  <div class="relative border-b border-[#D3D3D3] py-[60px]">
    <div
      class="absolute top-0 left-0 h-full w-full bg-text transition-all ease-in-out duration-300"
      :class="isOpen ? 'opacity-100' : 'opacity-0'"
    >
      <img
        :src="img"
        :alt="$t(title)"
        class="w-full h-full object-cover opacity-20"
      />
    </div>
    <div
      class="max-w-[1315px] mx-auto max-2xl:px-6 flex justify-between items-center relative z-20"
    >
      <div class="w-full">
        <div class="flex gap-6 items-center justify-between">
          <div>
            <h1
              class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] mb-1 transition-all ease-in-out duration-300"
              :class="isOpen ? 'text-white' : 'text-text'"
            >
              {{ $t(title) }}
            </h1>
            <p
              class="text-lg md:text-xl font-normal transition-all ease-in-out duration-300"
              :class="isOpen ? 'text-white' : 'text-[#5E5E5E]'"
            >
              {{ $t(description) }}
            </p>
          </div>
          <div class="p-2 cursor-pointer lg:hidden" @click="toggle">
            <i
              class="fa-solid fa-chevron-up transition-all ease-in-out duration-300"
              :class="isOpen ? ' rotate-0 text-white' : '-rotate-180 text-text'"
            ></i>
          </div>
        </div>
        <div
          ref="answer"
          class="overflow-hidden transition-all duration-500"
          :style="{ maxHeight: isOpen ? answerHeight + 'px' : '0px' }"
        >
          <div
            class="mt-6 flex justify-between items-start lg:items-center max-lg:flex-col max-lg:gap-6"
          >
            <div class="flex flex-col gap-5">
              <p
                class="text-lg md:text-xl text-white font-normal max-w-[656px] text-justify"
                :class="locale === 'ar' ? ' pl-4' : ' pr-4'"
              >
                {{ $t(descriptionToogle) }}
              </p>

              <div
                class="flex gap-3 md:gap-6 justify-start items-center flex-wrap"
              >
                <nuxt-link :to="$localePath(link)">
                  <button
                    class="w-fit relative overflow-hidden border-[2px] max-md:w-full min-w-[191px] py-2 px-5 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white hover:text-secondary border-white hover:border-secondary"
                  >
                    <span
                      class="text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer ease-in-out text-white"
                    >
                      {{
                        locale === "ar"
                          ? "عرض المزيد من التفاصيل"
                          : "Show more details"
                      }}
                    </span>
                    <span
                      class="absolute -bottom-10 text-sm lg:text-base font-bold group-hover:bottom-0 group-hover:-translate-y-1/2 w-full left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer ease-in-out text-secondary"
                    >
                      {{
                        locale === "ar"
                          ? "عرض المزيد من التفاصيل"
                          : "Show more details"
                      }}
                    </span>
                  </button>
                </nuxt-link>
                <nuxt-link :to="$localePath('contact-us')">
                  <button
                    class="border-[2px] border-primary-500 border-transparent relative overflow-hidden max-md:w-full min-w-[120px] w-fit px-5 py-2 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700"
                  >
                    <span
                      class="text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer ease-in-out text-white"
                    >
                      {{ locale === "ar" ? " اطلب خدمة" : "Request service" }}
                    </span>
                    <span
                      class="absolute w-full -bottom-10 text-sm lg:text-base font-bold group-hover:-bottom-0 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer ease-in-out text-secondary"
                    >
                      {{
                        locale === "ar" ? " اطلب خدمة" : "Request service"
                      }}</span
                    >
                  </button>
                </nuxt-link>
              </div>
            </div>

            <div
              class="border-primary-50 max-w-[466px]"
              :class="
                locale === 'ar'
                  ? ' md:pr-4 md:border-r'
                  : ' md:pl-4 md:border-l'
              "
            >
              <div class="flex gap-x-2 gap-y-4 justify-start flex-wrap">
                <div
                  v-for="value in Details"
                  class="rounded-full bg-primary-50 text-text py-2 px-4 text-sm w-fit max-md:text-center"
                >
                  {{ $t(value) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 cursor-pointer max-lg:hidden" @click="toggle">
        <i
          class="fa-solid fa-chevron-up transition-all ease-in-out duration-300"
          :class="isOpen ? ' rotate-0 text-white' : '-rotate-180 text-text'"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

defineProps<{
  img: string;
  title: string;
  description: string;
  descriptionToogle: string;
  Details: string[];
  link: string;
}>();

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

<style scoped></style>
