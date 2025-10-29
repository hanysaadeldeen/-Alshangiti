<template>
  <div class="w-full boxShadow p-6 h-fit" :class="{ '': isOpen }">
    <div class="relative" :key="id">
      <div class="max-2xl:px-6 w-full max-w-[1315px] mx-auto">
        <div class="flex gap-4 items-center justify-between">
          <h1
            @click="toggle"
            class="text-text font-bold text-lg md:text-xl cursor-pointer leading-6 md:leading-7"
          >
            {{ $t(title) }}
          </h1>
          <div class="p-2 cursor-pointer" @click="toggle">
            <i
              class="fa-solid fa-chevron-up transition-all ease-in-out duration-300 text-text"
              :class="isOpen ? ' rotate-0 ' : '-rotate-180 '"
            ></i>
          </div>
        </div>
        <div
          ref="answer"
          class="overflow-hidden transition-all duration-500 text-justify text-[#5E5E5E] font-normal text-sm md:text-base leading-5 md:leading-6"
          :style="{ maxHeight: isOpen ? answerHeight + 'px' : '0px' }"
          :class="isOpen ? 'mt-5' : ''"
        >
          {{ $t(description) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

defineProps<{
  title: string;
  description: string;
  id: number;
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
