<template>
    <div class="my-[140px] mx-auto max-w-[1315px] max-2xl:px-6">
        <div class="mb-10">
            <h1
                class="font-bold text-text text-2xl md:text-[32px] lg:text-[40px] leading-[50px] md:leading-[72px] mb-2 md:mb-4">
                {{ $t(title) }}
            </h1>
            <p v-if="desc" class=" text-text text-lg md:text-xl lg:text-2xl font-normal flex-col max-w-[1164px]
                text-justify">
                {{ $t(desc) }}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-stretch">
            <div class="rounded-3xl boxShadow p-6 " v-if="cardOTitle && cardOdesc">
                <div class="relative mb-2 md:mb-4 mr-1">
                    <div class="absolute top-1/2  -translate-y-1/2 size-1.5 rounded-full bg-primary-500"
                        :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
                    <h2 class="text-text text-lg md:text-xl lg:text-2xl md:!leading-[45px] font-bold mx-4">
                        {{ $t(cardOTitle) }}</h2>
                </div>
                <p class="text-text text-base md:text-lg lg:text-xl md:!leading-[35px] font-normal  text-justify">{{
                    $t(cardOdesc) }}</p>
            </div>
            <div class="rounded-3xl boxShadow p-6 " v-if="cardTTitle && cardTdesc">
                <div class="relative mb-2 md:mb-4">
                    <div class="absolute top-1/2  -translate-y-1/2 size-1.5 rounded-full bg-primary-500"
                        :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
                    <h2 class="text-text text-lg md:text-xl lg:text-2xl md:!leading-[45px] font-bold mx-4"> {{
                        $t(cardTTitle) }}</h2>
                </div>
                <p class="text-text text-base md:text-lg lg:text-xl md:!leading-[35px] font-normal  text-justify">{{
                    $t(cardTdesc) }}</p>
            </div>
            <div class="rounded-3xl boxShadow p-6 " v-if="cardThT && cardThdesc">
                <div class="relative mb-2 md:mb-4">
                    <div class="absolute top-1/2  -translate-y-1/2 size-1.5 rounded-full bg-primary-500"
                        :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
                    <h2 class="text-text text-lg md:text-xl lg:text-2xl md:!leading-[45px] font-bold mx-4"> {{
                        $t(cardThT) }}</h2>
                </div>
                <p class="text-text text-base md:text-lg lg:text-xl md:!leading-[35px] font-normal  text-justify">{{
                    $t(cardThdesc) }}</p>
            </div>
        </div>

        <slot />

    </div>
</template>

<script setup lang="ts">

const { locale } = useI18n()

defineProps<{
    title: string,
    desc?: string,
    cardOTitle?: string,
    cardOdesc?: string,
    cardTTitle?: string,
    cardTdesc?: string,
    cardThT?: string,
    cardThdesc?: string,
    description?: string,

}>()




</script>

<style scoped></style>