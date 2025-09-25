<template>
    <div class="relative border-b border-[#D3D3D3] py-[60px] ">
        <div class="absolute top-0 left-0 h-full w-full bg-text transition-all ease-in-out duration-300"
            :class="isOpen ? 'opacity-100' : 'opacity-0'">
            <img :src="img" :alt="title" class="w-full h-full object-cover opacity-20">
        </div>
        <div class="max-w-[1315px] mx-auto  max-2xl:px-6 flex justify-between items-center relative z-20">
            <div class="w-full ">
                <div class="flex gap-6 items-center justify-between">
                    <div>
                        <h1 class=" font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] mb-1 transition-all ease-in-out duration-300"
                            :class="isOpen ? 'text-white' : 'text-text'">
                            {{ title }}
                        </h1>
                        <p class=" text-lg md:text-xl font-normal transition-all ease-in-out duration-300"
                            :class="isOpen ? 'text-white' : 'text-[#5E5E5E]'">
                            {{ description }}
                        </p>
                    </div>
                    <div class="p-2 cursor-pointer lg:hidden" @click="toggle">
                        <i class="fa-solid fa-chevron-up  transition-all ease-in-out duration-300 "
                            :class="isOpen ? ' rotate-0 text-white' : '-rotate-180 text-text'"></i>
                    </div>
                </div>
                <div ref="answer" class="overflow-hidden transition-all duration-500"
                    :style="{ maxHeight: isOpen ? answerHeight + 'px' : '0px' }">
                    <div class="mt-6 flex justify-between items-start lg:items-center max-lg:flex-col max-lg:gap-6">
                        <p class="text-lg md:text-xl text-white font-normal pl-4 max-w-[656px]">
                            {{ descriptionToogle }}
                        </p>
                        <div class="md:pr-4 md:border-r  border-primary-50 max-w-[466px]">
                            <div class="flex gap-x-2 gap-y-4 justify-start flex-wrap">
                                <div v-for="value in Details"
                                    class="rounded-full bg-primary-50 text-text py-2 px-4 text-sm w-fit max-md:w-full max-md:text-center">
                                    {{ value }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2 cursor-pointer max-lg:hidden" @click="toggle">
                <i class="fa-solid fa-chevron-up  transition-all ease-in-out duration-300 "
                    :class="isOpen ? ' rotate-0 text-white' : '-rotate-180 text-text'"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    img: string
    title: string
    description: string
    descriptionToogle: string
    Details: string[]

}>()

const isOpen = ref(false);
const answerHeight = ref(0);
const answer = ref<HTMLDivElement | null>(null);
const toggle = async () => {
    isOpen.value = !isOpen.value;

    await nextTick();
    if (answer.value) { answerHeight.value = answer.value.scrollHeight; }
};
</script>

<style scoped></style>