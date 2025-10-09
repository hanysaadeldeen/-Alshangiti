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
                    {{ $t(item.title) }}
                </h1>
                <p class="text-lg md:text-xl text-justify lg:text-2xl font-normal text-[#5E5E5E] transition-all duration-500 ease-in-out"
                    :class="item.active ? 'opacity-100' : 'opacity-20'">
                    {{ $t(item.desc) }}
                </p>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const items = ref([
    { title: "about.before2005.title", desc: "about.before2005.content", active: false },
    { title: "about.in2005.title", desc: "about.in2005.content", active: false },
    { title: "about.since2005.title", desc: "about.since2005.content", active: false },
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