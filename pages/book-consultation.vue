<template>
    <main class="contactPage">
        <div class="w-full max-w-[1315px] mx-auto mt-[60px]  md:mt-[120px]    max-xl:px-6">
            <div class="text-center mb-10 md:mb-20 max-w-[1078px] mx-auto">
                <h1 class="text-[32px] md:text-[40px] lg:text-[52px]  text-text font-bold mb-2">
                    احجز موعد استشارتك القانونية
                </h1>
                <p class="text-[#5E5E5E] font-normal text-lg md:text-xl lg:text-2xl">يسعدنا في أن نكون شريكك القانوني.


                    سواء كنت مقبلاً على مشروع جديد، أو تواجه تحدياً قانونياً، أو تحتاج إلى رأي خبير حول قرار مهم، فإن
                    الاستشارة القانونية هي خطوتك الأولى نحو اتخاذ قرار سليم ومدروس. في مكتب محمود الشنقيطي للمحاماة،
                    نوفر لك فرصة للتواصل المباشر مع خبرائنا القانونيين.
                </p>
            </div>

        </div>
        <div class="py-24 md:py-[140px] bg-[#F6F6F6]">
            <div class="max-w-[1315px] mx-auto    max-xl:px-6">
                <div class="mb-14 md:mb-[100px]">
                    <h1
                        class="font-bold text-text text-2xl md:text-[32px] lg:text-[40px] leading-[50px] md:leading-[72px] mb-6 md:mb-8">
                        لماذا تحتاج إلى استشارة قانونية؟
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch  mt-10 md:mt-14">
                        <div class=" rounded-3xl boxShadow p-6 ">
                            <div class="relative ">
                                <div
                                    class="absolute top-4 right-0 -translate-y-1/2 size-1.5 rounded-full bg-primary-500">
                                </div>
                                <p
                                    class="text-text text-base pr-4 md:text-lg lg:text-xl md:!leading-[35px] font-normal">
                                    <span class="text-primary-500">
                                        للحماية
                                    </span> : تضمن لك أن تكون كل خطواتك مبنية على أساس قانوني متين، مما يحمي أصولك
                                    واستثماراتك.
                                </p>
                            </div>

                        </div>
                        <div class="rounded-3xl boxShadow p-6 ">


                            <div class="relative ">
                                <div
                                    class="absolute top-4 right-0 -translate-y-1/2 size-1.5 rounded-full bg-primary-500">
                                </div>
                            </div>

                            <p class="text-text text-base pr-4 md:text-lg lg:text-xl md:!leading-[35px] font-normal">
                                <span class="text-primary-500">
                                    للتوجيه
                                </span>
                                : تساعدك على فهم حقوقك وواجباتك، وتوجهك نحو المسار القانوني الصحيح لحل مشكلتك.
                            </p>
                        </div>
                        <div class="rounded-3xl boxShadow p-6 ">



                            <div class="relative ">
                                <div
                                    class="absolute top-4 right-0 -translate-y-1/2 size-1.5 rounded-full bg-primary-500">
                                </div>
                            </div>
                            <p class="text-text text-base pr-4 md:text-lg lg:text-xl md:!leading-[35px] font-normal">
                                <span class="text-primary-500">
                                    للوقاية
                                </span>
                                : قبل توقيع أي عقد أو اتخاذ أي قرار تجاري، تساعدك الاستشارة القانونية على فهم
                                المخاطر المحتملة وتجنب النزاعات المستقبلية.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1
                        class="font-bold text-text text-2xl md:text-[32px] lg:text-[40px] leading-[50px] md:leading-[72px] mb-6 md:mb-8">
                        ماذا تتوقع خلال الاستشارة؟
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-20">
                        <div class="card boxShadow p-6  rounded-3xl flex flex-col justify-start items-center gap-4"
                            v-for="card in Cards">
                            <div class="w-full h-full max-w-[80px] max-h-[80px]">
                                <img :src="card.img" :alt="card.title" width="80" height="80" class="w-full max-w-full"
                                    loading="lazy" />
                            </div>
                            <div>
                                <h2 class="text-text text-lg font-bold text-center mb-1">{{ card.title }}</h2>
                                <p class="text-[#5E5E5E] text-base font-normal text-center">{{ card.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

import evaluation from "../../assets/img/consultation/evaluation.svg"
import internship from "../../assets/img/consultation/internship.svg"
import listeningSkills from "../../assets/img/consultation/listeningSkills.svg"

const Cards = [
    {
        id: 1,
        title: "فهم عميق",
        desc: "سيقوم المستشار القانوني بالاستماع إلى تفاصيل حالتك بدقة لفهم كافة جوانبها.",
        img: listeningSkills
    },
    {
        id: 2,
        title: "تقييم شامل",
        desc: "سيقوم المستشار بتقديم تقييم أولي للموقف، مع إبراز الخيارات القانونية المتاحة أمامك.",
        img: evaluation
    },
    {
        id: 3,
        title: "رأي خبير",
        desc: "ستحصل على نصائح عملية ومستنيرة، مبنية على خبرتنا الطويلة في مجال الأعمال والقانون.",
        img: internship
    }
]
</script>

<style scoped></style>