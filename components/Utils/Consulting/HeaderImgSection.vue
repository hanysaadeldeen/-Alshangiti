<template>
    <div class="py-24 lg:py-44  relative">
        <div class="absolute top-0 left-0 w-full h-full ">
            <img :src="img" :alt="title" class="w-full h-full  object-cover brightness-50">
        </div>
        <div class="mx-auto max-w-[1315px] relative z-10">
            <h1 class="text-[32px] md:text-[40px] lg:text-[52px] lg:!leading-[52px] text-white font-bold">{{ title }}
            </h1>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    img: string,
    title: string
}>()
</script>

<style scoped></style>