<!-- <template>
    <section class="History  mx-auto max-w-[1315px] max-2xl:px-10">

        <div
            class="relative flex flex-col gap-[119px] max-w-[1096px] border-r-[5px] pr-[38px] border-primary-200 pb-[157px]">
            <div class="relative">
                <div class="size-8 rounded-full absolute bg-primary-200 -right-[56px] flex justify-center items-center">
                    <div class="size-5 bg-primary-500 rounded-full"></div>
                </div>
                <h1 class="mb-10 font-bold text-xl md:text-2xl lg:text-[40px] ">قبل عام 2005</h1>
                <p class="text-lg md:text-xl lg:text-2xl font-normal text-[#5E5E5E]">بدأت رحلة المؤسس، محمود الشنقيطي،
                    بالعمل في الإدارة القانونية بوزارة التجارة والصناعة في الرياض. خلال هذه الفترة، اكتسب خبرة عميقة في
                    مختلف الأقسام القانونية المرتبطة بقطاع الأعمال.</p>
            </div>
            <div class="relative ">
                <div class="size-8 rounded-full absolute bg-primary-200 -right-[56px] flex justify-center items-center">
                    <div class="size-5 bg-white rounded-full"></div>
                </div>
                <h1 class="opacity-20 mb-10 font-bold text-xl md:text-2xl lg:text-[40px] ">قبل عام 2005</h1>
                <p class="opacity-20 text-lg md:text-xl lg:text-2xl font-normal text-[#5E5E5E]">بدأت رحلة المؤسس، محمود
                    الشنقيطي،
                    بالعمل في الإدارة القانونية بوزارة التجارة والصناعة في الرياض. خلال هذه الفترة، اكتسب خبرة عميقة في
                    مختلف الأقسام القانونية المرتبطة بقطاع الأعمال.</p>
            </div>
            <div class="relative">
                <div class="size-8 rounded-full absolute bg-primary-200 -right-[56px] flex justify-center items-center">
                    <div class="size-5 bg-white rounded-full"></div>
                </div>
                <h1 class="opacity-20 mb-10 font-bold text-xl md:text-2xl lg:text-[40px] ">منذ عام 2005 وحتى الآن
                </h1>
                <p class="opacity-20 text-lg md:text-xl lg:text-2xl font-normal text-[#5E5E5E]">بدأت رحلة المؤسس، محمود
                    الشنقيطي،
                    بالعمل في الإدارة القانونية بوزارة التجارة والصناعة في الرياض. خلال هذه الفترة، اكتسب خبرة عميقة في
                    مختلف الأقسام القانونية المرتبطة بقطاع الأعمال.</p>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style> -->

<template>
    <section class="History mx-auto max-w-[1315px] max-2xl:px-10">
        <div
            class="relative flex flex-col gap-[119px] max-w-[1096px] border-r-[5px] pr-[38px] border-primary-200 pb-[157px]">
            <div v-for="(item, i) in items" :key="i" ref="historyRefs" class="relative ">
                <div
                    class="size-8 rounded-full absolute bg-primary-200 -right-[56px] flex justify-center items-center ">
                    <div class="size-5 rounded-full  transition-all duration-9000 ease-in-out"
                        :class="item.active ? 'bg-primary-500' : 'bg-white'">
                    </div>
                </div>
                <h1 class=" mb-10 font-bold text-xl md:text-2xl lg:text-[40px] transition-all duration-500 ease-in-out"
                    :class="item.active ? 'opacity-100' : 'opacity-20'">
                    {{ item.title }}
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl font-normal text-[#5E5E5E] transition-all duration-500 ease-in-out"
                    :class="item.active ? 'opacity-100' : 'opacity-20'">
                    {{ item.desc }}
                </p>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const items = ref([
    { title: "قبل عام 2005", desc: "بدأت رحلة المؤسس، محمود الشنقيطي، بالعمل في الإدارة القانونية بوزارة التجارة والصناعة في الرياض. خلال هذه الفترة، اكتسب خبرة عميقة في مختلف الأقسام القانونية المرتبطة بقطاع الأعمال.", active: false },
    { title: "عام 2005", desc: "استقل المؤسس عن العمل الحكومي وأسس مكتب  محمود الشنقيطي للمحاماة والاستشارات القانونية، متخصصًا في خدمات قطاع الأعمال. كان الهدف هو سد فجوة في هذا القطاع وتوفير خدمات قانونية متخصصة.", active: false },
    { title: "منذ عام 2005 وحتى الآن", desc: "بدأت رحلة المؤسس، محمود الشنقيطي، بالعمل في الإدارة القانونية بوزارة التجارة والصناعة في الرياض. خلال هذه الفترة، اكتسب خبرة عميقة في مختلف الأقسام القانونية المرتبطة بقطاع الأعمال.", active: false },
]);

const historyRefs = ref([]);

const checkActive = () => {
    const quarterFromBottom = window.innerHeight * 0.75;

    historyRefs.value.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        if (rect.top < quarterFromBottom) {
            items.value[i].active = true;
        }

        if (rect.bottom > window.innerHeight - window.innerHeight * 0.25) {
            items.value[i].active = false;
        }
    });
};

onMounted(() => {
    window.addEventListener("scroll", checkActive);
    checkActive();
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", checkActive);
});
</script>