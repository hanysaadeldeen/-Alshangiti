<template>
    <section class="AboutSection max-w-[1315px] mx-auto max-2xl:px-6">
        <div class="container mx-auto ">
            <div class="flex max-md:flex-col gap-8 justify-between items-center">



                <!-- Content -->
                <div class="text-text flex-grow max-w-[731px]">
                    <!-- Title -->
                    <h2
                        class=" font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] text-right mb-6 border-b-[2px] w-fit sm:min-w-[242px] max-sm:pl-10 border-primary-500 ">
                        نبذة عنا
                    </h2>

                    <!-- Description -->
                    <p class="font-normal text-base md:text-lg mb-6">


                        محمود الشنقيطي للمحاماة والإستشارات
                        القانونية" هو صرح قانوني رائد تأسس على يد محامٍ خبير أمضى أكثر من 20 عامًا في قلب المشهد
                        القانوني
                        السعودي، بدءًا من وزارة التجارة والصناعة ووصولًا إلى تأسيس منشأته الخاصة.

                        <br /><br />


                        اليوم، نكرس هذه الخبرة لتقديم خدمات قانونية متخصصة ومبتكرة، لا نراها مجرد مهنة، بل شراكة حقيقية
                        تهدف
                        إلى حماية أعمالكم وتأمين استثماراتكم.
                        <br /><br />



                        نحن لا نقدم مجرد استشارات قانونية، بل نسعى لنكون "الشريك
                        القانوني لرحلة الاستثمار"، داعمين تطلعاتكم بخطوات ثابتة ومدروسة نحو النجاح.
                    </p>


                    <!-- Button -->
                    <div class="flex justify-center md:justify-start">
                        <nuxt-link to="/about-us">

                            <button
                                class="relative overflow-hidden border w-fit mt-6 px-5 py-2 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 border-transparent">
                                <span
                                    class=" text-sm lg:text-base font-medium group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer  ease-in-out text-white">
                                    اعرف أكثر عنا</span>
                                <span
                                    class="absolute w-full -bottom-10 text-sm lg:text-base font-medium  group-hover:-bottom-0 group-hover:-translate-y-1/2  left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer  ease-in-out text-secondary">
                                    اعرف أكثر عنا</span>
                            </button></nuxt-link>
                    </div>
                </div>
                <!-- Image -->
                <div class="flex justify-center">
                    <img src="~/assets/img/About/alshangiti.webp" alt="alshangiti img" width="392" height="434"
                        class="max-w-[300px] md:max-w-[392px]  object-contain" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
