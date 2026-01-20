<template>
  <div class="rounded-xl py-3 px-4 my-6 cursor-pointer bg-[#F6F6F6]">
    <div class="flex gap-6 items-center justify-between">
      <h3
        @click="toggle"
        class="text-base max-md:!leading-10 md:text-lg lg:text-xl text-text font-bold transition-all ease-in-out duration-300"
      >
        {{ faq.question }}
      </h3>
      <div class="p-2 cursor-pointer" @click="toggle">
        <LucideChevronUp
          class="transition-all ease-in-out duration-300 text-text"
          :size="32"
          :class="isOpen ? ' rotate-0 ' : '-rotate-180 '"
        />
      </div>
    </div>
    <div
      ref="answer"
      class="overflow-hidden transition-all duration-500 font-medium text-sm md:text-base"
      :style="{ maxHeight: isOpen ? answerHeight + 'px' : '0px' }"
    >
      {{ faq.answer }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  faq: {
    answer: string;
    id: number;
    order: number;
    question: string;
  };
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
