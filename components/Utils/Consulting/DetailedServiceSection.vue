<template>
    <div class="bg-[#F6F6F6]  py-16 md:py-[100px] DetailedService ">
        <div class="container mx-auto max-w-[1315px] max-2xl:px-6">
            <h1
                class="font-bold text-text text-2xl md:text-[32px] lg:text-[40px] leading-[50px] md:leading-[72px] mb-6 md:mb-8">
                {{ title }}
            </h1>
            <div class="flex  gap-4 justify-start   flex-wrap max-w-[1152px]">
                <div v-for="value in details"
                    class="rounded-full bg-primary-500 text-white py-3 px-6 text-xl md:text-2xl w-fit  max-md:text-center">
                    {{ value }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string
    details: string[]
}>()

</script>

<style scoped></style>