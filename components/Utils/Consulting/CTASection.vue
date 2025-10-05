<template>
    <div class="mb-16 md:mb-[120px] py-24 lg:py-44  relative">
        <div class="absolute top-0 left-0 w-full h-full ">
            <img :src="img" :alt="title" class="w-full h-full  object-cover brightness-50">
        </div>
        <div class="mx-auto max-w-[1315px] max-2xl:px-6">

            <div class=" max-w-[834px] relative z-10">
                <h1 class="text-2xl md:text-3xl lg:text-[40px]  lg:!leading-[72px] text-white font-bold">{{ title }}
                </h1>
                <div class="flex gap-3 md:gap-6 justify-start items-center max-md:flex-col mt-8 md:mt-12">
                    <nuxt-link to="contact-us">
                        <button
                            class="border-[2px] border-white border-transparent relative overflow-hidden  max-md:w-full min-w-[168px] w-fit  px-5 py-2 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 ">
                            <span
                                class="text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-white">
                                اطلب خدمة</span>
                            <span
                                class="absolute w-full -bottom-10 text-sm lg:text-base font-bold  group-hover:-bottom-0 group-hover:-translate-y-1/2  left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                اطلب خدمة</span>
                        </button>
                    </nuxt-link>
                    <nuxt-link to="contact-us">
                        <button
                            class="w-fit relative overflow-hidden border-[2px] max-md:w-full  min-w-[191px]  py-2 px-5  flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-transparent text-white  hover:text-secondary border-white hover:border-secondary">
                            <span
                                class="  text-sm lg:text-base font-bold group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-white">
                                احجز استشارة قانونية</span>
                            <span
                                class="absolute -bottom-10  text-sm lg:text-base font-bold  group-hover:bottom-0 group-hover:-translate-y-1/2 w-full  left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                احجز استشارة قانونية</span>
                        </button>
                    </nuxt-link>
                </div>
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