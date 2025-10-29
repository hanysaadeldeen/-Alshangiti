<template>
  <div class="w-full">
    <div class="relative border-b border-[#D3D3D3] py-[30px]" :key="id">
      <div class="max-2xl:px-6 w-full max-w-[1315px] mx-auto">
        <div class="flex gap-4 items-center justify-between">
          <h1
            @click="toggle"
            class="font-bold text-xl md:text-2xl lg:text-3xl text-text lg:!leading-[60px] cursor-pointer"
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
          class="overflow-hidden transition-all duration-500 text-justify text-lg md:text-xl"
          :style="{ maxHeight: isOpen ? answerHeight + 'px' : '0px' }"
          :class="isOpen ? 'mt-5' : ''"
        >
          <span v-for="content in details">
            {{ $t(content) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

defineProps<{
  title: string;
  details: string[];
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
