<template>
  <main class="MainPage">
    <HomeHeroSection />
    <AboutSection />
    <NumbersSection />

    <ServicesSection />
    <WhyUsSection />
    <CertificatesSection />
    <!-- <TestmonialsSection /> -->
    <BlogSection />

    <section></section>
  </main>
</template>

<script setup>
const { locales, setLocale } = useI18n();
</script>
