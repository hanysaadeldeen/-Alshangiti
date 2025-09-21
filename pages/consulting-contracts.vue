<template>
    <div>
        <header-img-section :img="ConsultingContracts" title="الاستشارات والعقود" />
        <WhatTheService title="ما هي خدمات الاستشارات والعقود ؟"
            desc="خدمة الاستشارات والعقود هي ركيزة أساسية لأي عمل تجاري، حيث تعمل على توفير الحماية القانونية الوقائية والداعمة. تشمل هذه الخدمة جانبيَن أساسيين:"
            cardOTitle="الاستشارات القانونية: "
            cardOdesc="هي تقديم نصائح وتوصيات مبنية على فهم عميق للقوانين واللوائح ذات الصلة بعملك. نحن نُحلل الموقف ونقدم لك رأيًا قانونيًا واضحًا يساعدك على اتخاذ القرارات الصحيحة وتجنب المخاطر المحتملة."
            cardTTitle="إعداد وصياغة العقود: "
            cardTdesc="هي عملية إعداد وكتابة العقود القانونية بشكل دقيق ومحكم. يتم ذلك لضمان أن كل اتفاق بينك وبين أطراف أخرى يتم توثيقه بشكل سليم، ويحمي مصالحك، ويقلل من احتمالات حدوث نزاعات مستقبلية." />
        <DetailedServiceSection title="خدماتنا التفصيلية" :details="Details" />
        <CTASection title="لا تنتظر حتى تواجه نزاعًا , اطلب خدمتنا الآن وابدأ عملك بأمان قانوني كامل"
            buttonO="اطلب خدمة" buttonT="احجز استشارة قانونية" :img="cta" />
        <OtherServicesSection />
    </div>
</template>



<script setup lang="ts">
const Details = ["التفاوض القانوني", "حماية الحقوق والالتزامات", "عقود العمل والشراكات", "إدارة المخاطر", "حل النزاعات التعاقدية", "الاستشارات القانونية", "مراجعة الاتفاقيات", "صياغة العقود"]

import ConsultingContracts from "../assets/img/pannel/ConsultingContracts.webp"
import cta from "../assets/img/pannel/cta.webp"

</script>

<style scoped></style>