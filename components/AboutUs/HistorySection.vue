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
                <p class="text-lg md:text-xl text-justify lg:text-2xl font-normal text-[#5E5E5E] transition-all duration-500 ease-in-out"
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
    { title: "عام 2005", desc: "تأسس محمود الشنقيطي للمحاماة والاستشارات القانونية عام 2005م، وقد حقق اعترافًا وتقديرًا مهنيًا واسعًا، ونموذجا متقدما لفريق محلي يعمل وفقاً للمعايير الدولية في قطاع المحاماة والاستشارات القانونية. إنّ قيادات التحول السعودية من الفئة الشابة ثنائي اللغة محليًا ودوليًا، وسنحافظ على نفس هذا الخط العمري بفريق في أغلبه من الجيل الجديد الديناميكي، والذي يتميز بتبسيط عمله والاختصار وتنفيذ الخدمة بذكاء مما ينعكس على مناولة الخدمة بقيمة عادلة. ", active: false },
    { title: "منذ عام 2005 وحتى الآن", desc: "نعمل بشكل يومي على تعميق معرفتنا النظرية وتطبيقاتها العملية في مسارنا مستلهمين فلسفة قطاع الأعمال بتحويل خامتنا المصقولة الى منحوتة فريدة.", active: false },
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