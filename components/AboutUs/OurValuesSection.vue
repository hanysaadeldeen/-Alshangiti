<template>
    <section class="OurValuesSection max-w-[1315px] mx-auto max-2xl:px-6">
        <div class="sectionTitle">
            <h1
                class="text-text font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2 text-center">
                قيمنا
            </h1>
            <p class="text-2xl font-normal text-[#5E5E5E] text-center">
                أساس ثابت لشراكة مثمرة
            </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-20">
            <div class="card boxShadow p-6  rounded-3xl flex flex-col justify-start items-center gap-4"
                v-for="card in Cards">
                <div class="w-full h-full max-w-[80px] max-h-[80px]">
                    <img :src="card.img" :alt="card.title" width="80" height="80" class="w-full max-w-full"
                        loading="lazy" />
                </div>
                <div>
                    <h2 class="text-text text-lg font-bold text-center mb-1">{{ card.title }}</h2>
                    <p class="text-[#5E5E5E] text-base font-normal text-center ">{{ card.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import flexibility from "../../assets/img/About/OurValues/flexibility.svg"
import integration from "../../assets/img/About/OurValues/integration.svg"
import socialEngagement from "../../assets/img/About/OurValues/socialEngagement.svg"
import diplomacy from "../../assets/img/About/OurValues/diplomacy.svg"

const Cards = [
    {
        id: 1,
        title: "المرونة",
        desc: "الاهتمام المستمر والتنبؤي بالبيئات التجارية المحلية والدولية المتغيرة، وخلق تكامل عملي مرن ومتوافق عالميًا في المنهجية والممارسة.",
        img: flexibility
    },
    {
        id: 2,
        title: "النزاهة ",
        desc: "الالتزام بأصول وقواعد السلوك المهني والامتثال المؤسسي.",
        img: integration
    },
    {
        id: 3,
        title: "المسؤولية",
        desc: "ترسيخ ثقافة المسؤولية من خلال منح الثقة والتمكين السلس، مع إشراف ودعم أخلاقي عالٍ، لتحقيق الاستقرار، ودعم، وتعزيز شغف فريق العمل.",
        img: socialEngagement
    },
    {
        id: 4,
        title: "المهارة",
        desc: "فريق قانوني مبدع ومتخصص، بقيادة مدير استشاري متمرس، هدفه ريادة القطاع.",
        img: diplomacy
    }
]


</script>

<style scoped></style>