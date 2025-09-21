<template>
    <section class="my-16 md:my-[120px] mx-auto max-w-[1315px] max-2xl:px-6 overflow-hidden">
        <h1 class="text-text text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-6 md:mb-8">خدماتنا الأخرى
        </h1>
        <div class="mt-9">
            <div class="grid grid-cols-2  max-md:grid-cols-1 gap-6">
                <div class="p-6 rounded-3xl boxShadow">
                    <div class="mb-4">
                        <h2 class="text-text font-normal text-xl md:text-2xl mb-1">
                            التقاضي والتحكيم
                        </h2>
                        <p class="text-[#5E5E5E] font-normal text-sm md:text-base ">
                            الترافع بالمحاكم . التحكيم الدولي . تسوية المنازعات
                        </p>
                    </div>
                    <div class="rounded-3xl overflow-hidden group max-h-[229px]">
                        <img :src="ConsultingContracts" alt="ConsultingContracts"
                            class="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out brightness-50 group-hover:brightness-100">
                    </div>
                </div>

                <div class="p-6 rounded-3xl boxShadow">
                    <div class="mb-4">
                        <h2 class="text-text font-normal text-xl md:text-2xl mb-1">
                            التقاضي والتحكيم
                        </h2>
                        <p class="text-[#5E5E5E] font-normal text-sm md:text-base ">
                            الترافع بالمحاكم . التحكيم الدولي . تسوية المنازعات
                        </p>
                    </div>
                    <div class="rounded-3xl overflow-hidden group max-h-[229px]">
                        <img :src="ConsultingContracts" alt="ConsultingContracts"
                            class="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out brightness-50 group-hover:brightness-100">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ConsultingContracts from "../assets/img/pannel/ConsultingContracts.webp"

</script>

<style scoped></style>