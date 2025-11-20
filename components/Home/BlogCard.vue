<template>
  <div
    class="relative px-6 border-[#E1E1E1] flex flex-col gap-2 transition-all ease-in-out duration-300 hover:border-primary-500"
    :class="locale === 'ar' ? 'border-r-[2px]' : 'border-l-[2px]'"
  >
    <p v-if="data && !pending" class="text-[#5E5E5E] font-normal text-sm">
      {{ formatDate(data.created_at || "") }} -
      <span>{{ locale === "en" ? "red by" : "مقروء من " }}</span>
      {{ data.views_count }}
    </p>

    <nuxt-link :to="localePath(`/blogs/${data?.slug}`)">
      <h1
        v-if="data && !pending"
        class="text-2xl text-primary-500 font-bold transition-all ease-in-out duration-300 hover:underline"
      >
        {{ locale === "ar" ? data.title_ar : data.title_en }}
      </h1>
    </nuxt-link>
    <p
      v-if="data && !pending"
      class="text-primary-900 font-normal text-base text-justify line-clamp-3"
    >
      {{ locale === "ar" ? data?.excerpt_ar : data?.excerpt_en }}
    </p>
    <nuxt-link :to="localePath(`/blogs/${data?.slug}`)">
      <p
        v-if="data && !pending"
        class="text-primary-500 font-semibold text-base hover:underline"
      >
        {{ locale === "ar" ? "قراءة المزيد" : "Read more" }}
      </p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
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
  created_at: string;
  views_count: number;
  // status_display: string;
}

interface Props {
  data: BlogDetails | null;
  pending: boolean;
}

defineProps<Props>();

function formatDate(dateString: string) {
  const date = new Date(dateString);

  console.log(dateString, date);
  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
}
</script>

<style scoped></style>
