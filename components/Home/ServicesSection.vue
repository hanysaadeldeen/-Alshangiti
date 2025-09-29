<template>
    <section class="ServicesSection">
        <div class="border-b border-[#D3D3D3] pb-[76px]">
            <div class="max-w-[1315px] mx-auto  max-2xl:px-6">
                <h1 class="text-text mb-2 font-bold text-2xl lg:text-[40px] lg:!leading-[72px] max-w-[624px]">
                    كيف يمكننا مساعدتك ؟
                </h1>
                <p class="text-[#5E5E5E] text-lg md:text-xl lg:text-2xl font-normal max-w-[624px]">
                    خدمات قانونية متخصصة تغطي كافة احتياجات أعمالكم في السعودية، بدعم فريق يتمتع بخبرة 20 عاماً.
                </p>
            </div>
        </div>

        <services-section-card v-for="service in Services" :Details="service.Details" :img="service.img"
            :title="service.title" :description="service.description" :descriptionToogle="service.descriptionToogle" />

    </section>
</template>

<script setup lang="ts">

import cta from "../../assets/img/pannel/cta.webp"
import ConsultingContracts from "../../assets/img/pannel/ConsultingContracts.webp"
import table from "../../assets/img/pannel/table.webp"

const Services = [
    {
        title: "1. الاستشارات والعقود",
        description: "صياغة العقود . المراجعة القانونية . الاستشارات الوقائية",
        descriptionToogle: "نقدم استشارات قانونية متخصصة تغطي كافة جوانب عملك، بدءاً من صياغة العقود بدقة عالية ومراجعتها لتحديد الثغرات والمخاطر، وصولاً إلى تقديم دراسات الجدوى القانونية والاستشارات الوقائية التي تحميك من المشكلات المستقبلية. جميع خدماتنا متاحة باللغتين العربية والإنجليزية.",
        img: ConsultingContracts,
        Details: [
            "صياغة العقود",
            "مراجعة الاتفاقيات",
            "الاستشارات القانونية",
            "حل النزاعات التعاقدية",
            "عقود العمل والشراكات",
            "التفاوض القانوني",
            "إدارة المخاطر",
            "حماية الحقوق والالتزامات",
        ]
    },
    {
        title: "2. التقاضي والتحكيم",
        description: "التقاضي - التحكيم - تسوية المنازعات",
        descriptionToogle: "نوفر تمثيلاً قانونياً قوياً في كافة المحاكم السعودية بجميع درجاتها، بدءاً من المحكمة الابتدائية ووصولاً إلى المحكمة العليا. نقدم أيضاً خدمات التحكيم المحلي والدولي، وإدارة المنازعات عبر الوساطة والتسوية الودية، ومتابعة تحصيل الديون والمستحقات المالية بكل فعالية.",
        img: cta,
        Details: [
            "القضايا الإدارية",
            "القضايا التجارية",
            "القضايا الإنشائية",
            "القضايا العمالية",
            "القضايا الجمركية",
            "قضايا المنافسة",
            "القضايا الدولية",
            "التحكيم",
            "القضايا الاقتصادية",
            "القضايا المدنية",
            "التحصيل",
        ]
    },
    {
        title: "3. خدمات الشركات",
        description: "التأسيس . الاندماج . الحوكمة . التراخيص",
        descriptionToogle: "نساندك في رحلتك الاستثمارية منذ البداية، بدءاً من تأسيس الشركات بكافة أنواعها (محلية، فروع شركات أجنبية، مساهمة)، ومروراً بهيكلة الشركات وإعادة تنظيمها، ووصولاً إلى عمليات الاندماج والاستحواذ المعقدة. كما نضمن حصولك على جميع التراخيص والموافقات الرسمية اللازمة.",
        img: table,
        Details: [
            "السجلات و التراخيص",
            "الاستثمار و الصفقات",
            "الملكية الفكرية",
            "الخدمات اللوجيستية",
        ]
    },
]
</script>

<style scoped></style>