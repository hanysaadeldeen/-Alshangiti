<template>
    <section class="NumbersSection pt-[80px] md:pt-[120px] relative">
        <div class="absolute top-0 left-0 w-full h-[calc(100%-51px)] bg-primary-500"></div>
        <div class="container max-w-[1315px] mx-auto max-2xl:px-6 z-10 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-7">
                <div class="Card boxShadow py-10 px-8 flex flex-col gap-4 bg-white rounded-3xl" v-for="value in 3">
                    <h1 class="text-text font-bold text-5xl lg:text-6xl lg:!leading-[84px] text-center">+20
                    </h1>
                    <p class="md:mb-6 text-[#777777] text-lg md:text-xl font-normal text-center">سنة في مجال المحاماة
                        واستشارات
                        الأعمال</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>