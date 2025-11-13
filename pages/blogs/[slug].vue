<template>
  <main class="BlogsPage">
    <!-- 
    
    flex justify-center items-start
    -->
    <div class="py-16 md:py-24 relative max-h-[400px]">
      <div class="absolute top-0 left-0 w-full h-full">
        <img
          :src="blog"
          alt="blog hero image"
          class="w-full h-full object-cover brightness-50"
        />
      </div>
      <div class="max-w-[1315px] w-full mx-auto relative z-10 max-2xl:px-6">
        <div class="w-full">
          <h1
            v-if="data && !pending"
            class="text-3xl md:text-4xl lg:text-5xl lg:!leading-[70px] text-white font-bold max-w-[750px]"
            :class="locale === 'ar' ? 'ml-auto' : 'mr-auto'"
          >
            {{ locale === "ar" ? data.title_ar : data.title_en }}
          </h1>

          <p
            v-if="data && !pending"
            class="text-[#ddd] font-normal text-lg md:text-xl mt-5"
            :class="locale === 'ar' ? 'ml-auto' : 'mr-auto'"
          >
            {{
              locale === "ar"
                ? data?.category?.name_ar
                : data?.category?.name_en
            }}

            -
            {{ data?.status_display }}
            -
            {{ formatDate(data?.created_at || "") }}
          </p>
        </div>
      </div>
    </div>
    <section
      v-if="data"
      class="mx-auto max-w-[1315px] max-2xl:px-10 mb-16 md:mb-[120px]"
    >
      <h1
        class="font-bold text-text text-2xl md:text-2xl md:!leading-[40px] mb-2 md:mb-4 max-w-[800px]"
      >
        {{ locale === "ar" ? data.excerpt_ar : data.excerpt_en }}
      </h1>
      <p
        class="text-text text-lg md:text-xl font-normal flex flex-col max-w-[1100px]"
      >
        {{ locale === "ar" ? data.content_ar : data.content_en }}
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import blog from "~/assets/img/Blog/blog.webp";

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
