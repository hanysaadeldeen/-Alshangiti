<template>
    <section class="BlogSection max-w-[1315px] mx-auto max-2xl:px-6">
        <div class="sectionTitle mb-24 flex justify-between items-end">
            <div>
                <h1 class="text-text font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2 ">
                    آراء عملاؤنا
                </h1>
                <p class="text-2xl font-normal text-[#5E5E5E]">
                    حلول قانونية دقيقة تدعم نجاحك وتحقق أهدافك
                </p>
            </div>
            <button class="text-white bg-primary-500  py-2 px-5">عرض الكل</button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-20">
            <div class="card boxShadow rounded-3xl overflow-hidden cursor-pointer" v-for="blog in Blogs">
                <div class="w-full h-full max-h-[220px]">
                    <img :src="blog.img" :alt="blog.title" width="100%" height="100%"
                        class="w-full max-w-full h-full object-cover" loading="lazy" />
                </div>
                <div class="p-6 flex flex-col gap-4">
                    <h2 class="text-text font-bold text-lg md:text-xl leading-6 md:leading-7">
                        {{ blog.title }}
                    </h2>
                    <p class="text-[#5E5E5E] font-normal text-sm md:text-base leading-5 md:leading-6">
                        {{ blog.desc }}
                    </p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-primary-500 font-bold text-sm md:text-base">اقرأ المزيد</span>
                        <span class="text-[#A1A1A1] font-normal text-sm md:text-base">{{ blog.date }}</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

import Blog1 from "../../assets/img/Blog/blog1.svg"
const Blogs = [
    {
        id: 1,
        title: "أهمية الاستشارات القانونية للشركات الناشئة",
        desc: "تعتبر الاستشارات القانونية من العوامل الأساسية لنجاح الشركات الناشئة، حيث تساعد في تجنب المخاطر القانونية وضمان الامتثال للقوانين واللوائح المحلية والدولية.",
        img: Blog1,
        date: "20 سبتمبر 2023"
    },
    {
        id: 2,
        title: "كيف تختار المحامي المناسب لقضيتك؟",
        desc: "اختيار المحامي المناسب يمكن أن يكون قرارًا حاسمًا في نجاح قضيتك. تعرف على العوامل التي يجب مراعاتها عند اختيار المحامي.",
        img: Blog1,
        date: "15 سبتمبر 2023"
    },
    {
        id: 3,
        title: "التحديات القانونية في التجارة الإلكترونية",
        desc: "مع تزايد التجارة الإلكترونية، تواجه الشركات العديد من التحديات القانونية. تعرف على أبرز هذه التحديات وكيفية التعامل معها.",
        img: Blog1,
        date: "10 سبتمبر 2023"
    }
]


</script>

<style scoped></style>