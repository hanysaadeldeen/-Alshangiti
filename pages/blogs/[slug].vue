<template>
  <main class="BlogPage mt-20">
    <div
      v-if="!error?.data && data"
      class="relative max-w-[839px] max-2xl:px-6 w-full mx-auto"
    >
      <div class="w-full">
        <div
          class="flex gap-2 justify-center items-center flex-wrap"
          v-if="data && !pending"
        >
          <span class="text-lg text-center text-primary-900 font-normal">
            {{ formatDate(data.created_at || "") }}
            -
          </span>
          <span class="text-lg text-center text-primary-900 font-normal">
            {{
              locale === "ar" ? data.category.name_ar : data.category.name_en
            }}
            -
          </span>
          <span class="text-lg text-center text-primary-900 font-normal">
            {{ data.status_display }}
          </span>
          -
          <span class="text-lg text-center text-primary-900 font-normal">
            <span>{{ locale === "en" ? "red by" : "مقروء من " }}</span>

            {{ data.views_count }}
          </span>
        </div>
        <h1
          v-if="data && !pending"
          class="text-2xl mt-4 text-center md:text-3xl lg:text-5xl lg:!leading-[70px] mx-auto text-primary-900 font-bold max-w-[673px]"
        >
          {{ locale === "ar" ? data.title_ar : data.title_en }}
        </h1>
      </div>
      <div
        v-if="data"
        class="mx-auto max-w-[839px] mb-16 md:mb-[120px] mt-6 md:mt-12 lg:mt-16"
      >
        <p
          class="font-normal text-primary-900 text-xl mb-2 md:mb-4 text-justify"
        >
          {{ locale === "ar" ? data.excerpt_ar : data.excerpt_en }}
        </p>
        <div
          class="prose prose-lg max-w-none"
          v-html="locale === 'ar' ? data.content_ar : data.content_en"
        />
      </div>
    </div>

    <h1
      v-if="error?.data"
      class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 text-center mb-20"
    >
      {{ error?.data?.detail }}
    </h1>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const route = useRoute();
const slug = computed(() => {
  const s = route.params.slug;
  return Array.isArray(s) ? s[0] : s || "";
});

interface BlogDetails {
  id: number;
  title_ar: string;
  title_en: string;
  slug: string;
  excerpt_ar: string;
  excerpt_en: string;
  content_ar: string;
  content_en: string;
  featured_image: string;
  status_display: string;
  created_at: string;
  views_count: number;
  published_at: string;
  updated_at: string;
  category: {
    id: number;
    name_ar: string;
    name_en: string;
    slug: string;
  };
}

const url = computed(
  () => `https://37-27-29-234.nip.io/shangiti/api/blog/blog-posts/${slug.value}`
);

const { data, pending, error, refresh } = await useFetch<BlogDetails>(url, {});

useHead(() => {
  const siteUrl = "https://shangiti.com";
  const isAr = locale.value === "ar";
  const post = data.value;

  return {
    title: isAr ? `${post?.title_ar} ` : `${post?.title_en} `,
    meta: [
      {
        name: "description",
        content: isAr ? post?.excerpt_ar : post?.excerpt_en,
      },
      {
        property: "og:title",
        content: isAr ? post?.title_ar : post?.title_en,
      },
      {
        property: "og:description",
        content: isAr ? post?.excerpt_ar : post?.excerpt_en,
      },
      {
        property: "og:image",
        content: post?.featured_image,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteUrl}/${isAr ? "ar" : "en"}/blog/${post?.slug}`,
          },
          headline: isAr ? post?.title_ar : post?.title_en,
          description: isAr ? post?.excerpt_ar : post?.excerpt_en,
          image: [post?.featured_image],
          author: {
            "@type": "Organization",
            name: "Mahmoud Al-Shangiti Law Firm",
            url: "https://shangiti.com/",
          },
          publisher: {
            "@type": "Organization",
            name: "Mahmoud Al-Shangiti Law Firm",
            logo: {
              "@type": "ImageObject",
              url: "https://alshangiti.vercel.app/_nuxt/alshangiti.CRUN2QOj.svg",
            },
          },
          datePublished: post?.published_at,
          dateModified: post?.updated_at,
        }),
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  };
});

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
}

watch(slug, async () => {
  await refresh();
});
</script>

<style scoped>
section,
.section {
  margin-top: 80px;
}

@media (max-width: 768px) {
  section,
  .section {
    margin-top: 50px;
  }
}

h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #293329;
}

h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #293329;
}
</style>
