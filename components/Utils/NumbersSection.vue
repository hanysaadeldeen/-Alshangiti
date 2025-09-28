<template>
    <section class="NumbersSection pt-[80px] md:pt-[120px] relative">
        <div class="absolute top-0 left-0 w-full h-[calc(100%-51px)] bg-primary-500"></div>
        <div class="container max-w-[1315px] mx-auto max-2xl:px-6 z-10 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-7">
                <div class="Card boxShadow py-10 px-8 flex flex-col gap-4 bg-white rounded-3xl"
                    v-for="(state, index) in Numbers" ref="counterElements" :key="index">
                    <h1 class="text-text font-bold text-5xl lg:text-6xl lg:!leading-[84px] text-center">{{ state.value
                    }}+
                    </h1>
                    <p class="md:mb-6 text-[#777777] text-lg md:text-xl font-normal text-center">{{ state.text }}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

const Numbers = reactive([
    {
        text: "سنة في مجال المحاماة واستشارات الأعمال",
        value: 0,
        targetValue: 20
    },
    {
        text: "قضية ومنازعة تم إدارتها وتسويتها بنجاح",
        value: 0,
        targetValue: 500

    },
    {
        text: "عميل راضٍ من قطاعات الأعمال والاستثمار",
        value: 0,
        targetValue: 200

    }
]);
const counterElements = ref([]);

const interval = 1000;

const updateCounter = (stat: any) => {
    let startValue = 0;
    const endValue = stat.targetValue;
    const duration = Math.floor(interval / endValue);
    const counter = setInterval(() => {
        startValue += 1;
        stat.value = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
};

const startCounters = () => {
    Numbers.forEach(updateCounter);
};

onMounted(() => {
    const options = {
        root: null,
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counterElements.value.forEach((element) => {
        observer.observe(element);
    });
});
</script>

<style scoped></style>