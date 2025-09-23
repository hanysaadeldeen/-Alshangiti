<template>
    <div>
        <header-img-section :img="ConsultingContracts" title="خدمات الشركات" />
        <WhatTheService title="ما هي خدمات الشركات ؟" desc="هي المرافقة القانونية الشاملة التي تبدأ معك من مجرد فكرة استثمارية وتستمر خلال المراحل الإجرائية المتعددة للمشروع لضمان سلامته النظامية. إنها الخدمة التي تحول أهدافك إلى واقع ملموس ومحمي قانونيًا.
تتضمن هذه الخدمة مساعدة العملاء في:" cardOTitle="الجانب الشكلي:"
            cardOdesc="من الحصول على التراخيص والسجلات اللازمة لضمان قيام وعمل المنشآت التجارية بشكل نظامي، إلى إدارة صفقات الاندماج والاستحواذ والتمويل لضمان استمرارية ونمو الأعمال."
            cardTTitle="حماية الأصول الفكرية:"
            cardTdesc="نساعد في توثيق وحماية الأصول الذهنية والقيمية لمشروعك، مثل العلامات التجارية والنماذج الصناعية، ونعمل على حماية منتجاتك من التقليد."
            cardThT="الوكالات والامتيازات:"
            cardThdesc="نقدم الدعم القانوني اللازم لتأسيس وإدارة الوكالات والامتيازات التجارية، لضمان حصرية عملك وتنافسيته في السوق." />
        <DetailedServiceSection title="خدماتنا التفصيلية" :details="Details" />
        <CTASection title="انت على بعد خطوة من حماية شاملة لشركتك. تواصل مع فريقنا المختص لطلب عرض مالي الآن"
            buttonO="اطلب عرض مالي" buttonT="احجز استشارة قانونية" :img="arbitration" />
        <OtherServicesSection />
    </div>
</template>



<script setup lang="ts">
const Details = [
    "السجلات و التراخيص",
    "الاستثمار و الصفقات",
    "الملكية الفكرية",
    "الخدمات اللوجيستية",
]
import ConsultingContracts from "../assets/img/pannel/cta.webp"
import arbitration from "../assets/img/pannel/arbitration.webp"

</script>

<style scoped></style>