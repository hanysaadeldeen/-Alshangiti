<template>
    <div class="py-24 lg:py-44  relative">
        <div class="absolute top-0 left-0 w-full h-full ">
            <img :src="img" :alt="title" class="w-full h-full  object-cover brightness-50">
        </div>
        <div class="mx-auto max-w-[834px] relative z-10">
            <h1 class="text-2xl md:text-3xl lg:text-[40px]  lg:!leading-[72px] text-white font-bold">{{ title }}
            </h1>
            <div class="flex gap-4 md:gap-6 mt-8 md:mt-12">
                <button class="bg-primary-500 hover:bg-primary-600 text-white font-cairo px-6 py-3  transition">
                    {{ buttonO }}
                </button>
                <button
                    class="border border-primary-500 bg-transparent hover:bg-primary-600 text-white font-cairo px-6 py-3  transition">
                    {{ buttonT }}
                </button>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
defineProps<{
    img: string,
    title: string
    buttonO: string,
    buttonT: string
}>()
</script>

<style scoped></style>