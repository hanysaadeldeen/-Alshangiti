<template>
  <main class="BlogsPage mt-20">
    <div class="relative max-w-[839px] max-2xl:px-6 w-full mx-auto">
      <div class="w-full">
        <div
          class="flex gap-2 justify-center items-center"
          v-if="data && !pending"
        >
          <p class="text-lg text-center text-primary-900 font-normal">
            {{ formatDate(data.created_at || "") }}
            -
          </p>
          <p class="text-lg text-center text-primary-900 font-normal">
            {{
              locale === "ar" ? data.category.name_ar : data.category.name_en
            }}
            -
          </p>
          <p class="text-lg text-center text-primary-900 font-normal">
            {{ data.status_display }}
          </p>
          -
          <p class="text-lg text-center text-primary-900 font-normal">
            <span>{{ locale === "en" ? "red by" : "مقروء من " }}</span>

            {{ data.views_count }}
          </p>
        </div>
        <h1
          v-if="data && !pending"
          class="text-3xl mt-2 text-center md:text-4xl lg:text-5xl lg:!leading-[70px] mx-auto text-primary-900 font-bold max-w-[673px]"
        >
          {{ locale === "ar" ? data.title_ar : data.title_en }}
        </h1>
      </div>
      <div
        v-if="data"
        class="mx-auto max-w-[839px] max-2xl:px-10 mb-16 md:mb-[120px] mt-12 md:mt-16"
      >
        <p
          class="font-normal text-primary-900 text-xl mb-2 md:mb-4 text-justify"
        >
          {{ locale === "ar" ? data.excerpt_ar : data.excerpt_en }}
        </p>
        <p
          class="font-normal text-primary-900 text-xl mb-2 md:mb-4 text-justify"
          v-html="locale === 'ar' ? data.content_ar : data.content_en"
        />
      </div>
    </div>
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

const { data, pending, error, refresh } = useFetch<BlogDetails>(url, {
  server: false,
  lazy: false,
});

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
}

watch(data, () => {
  if (data) {
    console.log(data.value);
  }
});

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
</style>
