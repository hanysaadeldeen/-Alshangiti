<template>
  <main class="MainPage">
    <HomeHeroSection />
    <AboutSection />
    <NumbersSection />
    <ServicesSection />
    <WhyUsSection />
    <CertificatesSection />
    <BlogSection />
    <section />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";

const { data } = await useFetch<SEODataFetch>(
  () => "https://be.shangiti.com/shangiti/api/pages/home"
);

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: `{
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "محمود الشنقيطي للمحاماة والاستشارات القانونية",
        "alternateName": "Mahmoud Alshangiti Law Firm",
        "image": "https://law.shangiti.com/LogoTap.png",
        "url": "https://law.shangiti.com/",
        "telephone": "+966126065682",
        "email": "info@shangiti.com",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "شارع الأمير سعود الفيصل، برج جي ڤيو، الطابق 9، مكتب 904",
            "addressLocality": "حي الخالدية، جدة",
            "addressRegion": "مكة المكرمة",
            "addressCountry": "SA"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "طريق الأمير عبد المحسن، المركز الماسي للأعمال، الطابق 2، مكتب 5",
            "addressLocality": "حي العهن، المدينة المنورة",
            "addressRegion": "المدينة المنورة",
            "addressCountry": "SA"
          }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "21.5644",
          "longitude": "39.1722"
        },
        "license": [
          "ترخيص وزارة العدل رقم 26141",
          "عضوية الهيئة السعودية للمحامين رقم SBA00007274"
        ],
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "SBA_License",
          "value": "SBA00007274"
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "10:00",
          "closes": "16:00"
        },
        "sameAs": [
          "https://x.com/ShangitiLaw",
          "https://sa.linkedin.com/company/mahmood-alshangiti-lawoffice"
        ]
      }`,
    },
  ],
});
useHead(() => {
  if (!data.value) return {};

  const isAr = locale.value === "ar";
  const description = isAr
    ? data.value.meta_description_ar
    : data.value.meta_description_en;

  const url = data.value.slug
    ? `https://law.shangiti.com/${data.value.slug}`
    : "https://law.shangiti.com/";

  return {
    title: null,
    meta: [
      { name: "description", content: description },
      {
        property: "og:title",
        content: isAr ? data.value.title_ar : data.value.title_en,
      },
      { property: "og:description", content: description },
      {
        property: "og:image",
        content:
          data.value.banner_image_url || "https://law.shangiti.com/LogoTap.png",
      },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
    ],
  };
});
</script>
