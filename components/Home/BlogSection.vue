<template>
  <section class="BlogSection max-w-[1315px] mx-auto max-2xl:px-6">
    <div
      class="sectionTitle mb-10 md:mb-16 lg:mb-24 flex gap-4 md:gap-6 sm:items-end justify-between max-sm:flex-col"
    >
      <div>
        <h1
          class="text-text font-bold text-[32px] md:text-[40px] leading-[50px] md:leading-[72px] mb-2"
        >
          {{ $t("homePage.licenses.blog") }}
        </h1>
        <p class="text-2xl font-normal text-[#5E5E5E]">
          {{
            locale === "ar"
              ? " مرجعك الشامل لأبرز الموضوعات القانونية"
              : "Your comprehensive reference for the most important legal topics"
          }}
        </p>
      </div>
      <div class="flex gap-4 items-center justify-end max-md:justify-start">
        <button
          class="relative overflow-hidden border w-fit px-5 py-2 flex flex-col max-h-[46px] justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 border-transparent"
        >
          <span
            class="text-sm lg:text-base font-medium group-hover:-translate-y-[200%] transition-all duration-300 cursor-pointer ease-in-out text-white"
          >
            {{ locale === "ar" ? " عرض الكل" : "View All" }}
          </span>
          <span
            class="absolute w-full -bottom-10 text-sm lg:text-base font-medium group-hover:-bottom-0 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer ease-in-out text-secondary"
          >
            {{ locale === "ar" ? " عرض الكل" : "View All" }}</span
          >
        </button>
      </div>
    </div>
    <div v-if="pending" class="py-[60px]">
      <h1
        class="font-bold text-xl md:text-2xl lg:text-3xl lg:!leading-[60px] cursor-pointer text-text text-center"
      >
        {{ locale === "en" ? "loading.." : "جاري التحميل... " }}
      </h1>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-20">
      <blog-card
        v-for="blog in data?.results"
        :id="blog.id"
        :title="locale === 'ar' ? blog.title_ar : blog.title_en"
        :description="locale === 'ar' ? blog.excerpt_ar : blog.excerpt_en"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import Blog1 from "../../assets/img/Blog/blog1.svg";
import Blog2 from "../../assets/img/Blog/blog1.jpg";
import Blog3 from "../../assets/img/Blog/blog2.jpg";
const BlogsAr = [
  {
    id: 1,
    title: "أهمية الاستشارات القانونية للشركات الناشئة",
    desc: "تعتبر الاستشارات القانونية من العوامل الأساسية لنجاح الشركات الناشئة، حيث تساعد في تجنب المخاطر القانونية وضمان الامتثال للقوانين واللوائح المحلية والدولية.",
    img: Blog1,
    date: "20 سبتمبر 2023",
  },
  {
    id: 2,
    title: "كيف تختار المحامي المناسب لقضيتك؟",
    desc: "اختيار المحامي المناسب يمكن أن يكون قرارًا حاسمًا في نجاح قضيتك. تعرف على العوامل التي يجب مراعاتها عند اختيار المحامي.",
    img: Blog2,
    date: "15 سبتمبر 2023",
  },
  {
    id: 3,
    title: "التحديات القانونية في التجارة الإلكترونية",
    desc: "مع تزايد التجارة الإلكترونية، تواجه الشركات العديد من التحديات القانونية. تعرف على أبرز هذه التحديات وكيفية التعامل معها.",
    img: Blog3,
    date: "10 سبتمبر 2023",
  },
];
const BlogsEn = [
  {
    id: 1,
    title: "The Importance of Legal Consultations for Startups",
    desc: "Legal consultations are one of the key factors for the success of startups. They help avoid legal risks and ensure compliance with local and international laws and regulations.",
    img: Blog1,
    date: "September 20, 2023",
  },
  {
    id: 2,
    title: "How to Choose the Right Lawyer for Your Case?",
    desc: "Choosing the right lawyer can be a crucial decision in the success of your case. Learn about the important factors you should consider when selecting your lawyer.",
    img: Blog2,
    date: "September 15, 2023",
  },
  {
    id: 3,
    title: "Legal Challenges in E-Commerce",
    desc: "With the rise of e-commerce, businesses face various legal challenges. Discover the key challenges and how to effectively address them.",
    img: Blog3,
    date: "September 10, 2023",
  },
];

interface Achievement {
  id: number;
  title_ar: string;
  title_en: string;
  excerpt_ar: string;
  excerpt_en: string;
  content_ar: string;
  content_en: string;
  featured_image: string;
}

interface AchievementResponse {
  results: Achievement[];
}

const { data, pending, error } = useFetch<AchievementResponse>(
  "http://37.27.29.234/shangiti/api/blog/blog-posts/",
  {
    server: false,
    lazy: true,
  }
);

console.log(data);
</script>

<style scoped></style>
