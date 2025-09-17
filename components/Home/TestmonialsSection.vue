<template>
    <section class="TestmonialsSection pt-28 relative">


        <div class="absolute top-0 left-0 w-full h-[calc(100%-86px)] bg-primary-500"></div>

        <div class="container max-w-[1315px] mx-auto max-2xl:px-6 z-10 relative">
            <div class="sectionTitle mb-24 flex justify-between items-end">
                <div>
                    <h1 class="text-white font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2 ">
                        آراء عملاؤنا
                    </h1>
                    <p class="text-2xl font-normal text-white">
                        حلول قانونية دقيقة تدعم نجاحك وتحقق أهدافك
                    </p>
                </div>
                <div class="flex gap-4">
                    <div
                        class="bg-[#6B836B] p-3 size-12 rounded-full  cursor-pointer flex justify-center items-center text-white">
                        <i class="fa-solid fa-chevron-right text-xl "></i>
                    </div>
                    <div
                        class="bg-[#6B836B] p-3 size-12 rounded-full cursor-pointer  flex justify-center items-center text-white">
                        <i class="fa-solid fa-chevron-left text-xl "></i>
                    </div>
                </div>
            </div>
            <div>
                <div class="Card boxShadow py-10 px-8 flex flex-col gap-4 bg-white rounded-3xl w-[424px]">
                    <div class="flex gap-2">
                        <div class="size-12 rounded-full bg-primary-50"></div>
                        <div class="flex flex-col">
                            <h2 class="text-text font-bold text-base md:text-lg mb-1">شركة ABC للتجارة الدولية </h2>
                            <div class="flex gap-1.5 items-center ">
                                <i class="fa-solid fa-star text-[#FFB800]" v-for="value in 5"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-text text-sm md:text-base  font-normal">
                        جربتنا مع مكتبكم كانت استثنائية. حصلنا على استشارات دقيقة وسريعة ساعدتنا على حل نزاع معقد في وقت
                        قياسي.
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>