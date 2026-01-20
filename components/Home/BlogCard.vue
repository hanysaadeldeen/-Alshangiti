<template>
  <div
    class="BlogCard relative px-4 md:px-6 border-[#E1E1E1] flex flex-col gap-2 transition-all ease-in-out duration-300 hover:border-primary-500"
    :class="locale === 'ar' ? 'border-r-[2px]' : 'border-l-[2px]'"
  >
    <div v-if="data && !pending" class="text-[#5E5E5E] font-normal text-sm">
      <span>
        {{ formatDate(data.created_at || "") }}
      </span>
      <span>-</span>
      <span>{{ locale === "en" ? "red by" : "مقروء من " }}</span>
      <span>{{ data.views_count }}</span>
    </div>

    <nuxt-link :to="localePath(`/blogs/${data?.slug}`)">
      <h2
        v-if="data && !pending"
        class="text-xl md:text-2xl text-primary-500 font-bold transition-all ease-in-out duration-300 hover:underline"
      >
        {{ locale === "ar" ? data.title_ar : data.title_en }}
      </h2>
    </nuxt-link>
    <p
      v-if="data && !pending"
      class="text-primary-900 font-normal text-sm md:text-base text-justify line-clamp-3"
    >
      {{ locale === "ar" ? data?.excerpt_ar : data?.excerpt_en }}
    </p>
    <nuxt-link :to="localePath(`/blogs/${data?.slug}`)">
      <span
        v-if="data && !pending"
        class="text-primary-500 font-semibold text-base hover:underline"
      >
        {{ locale === "ar" ? "قراءة المزيد" : "Read more" }}
      </span>
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
}

interface Props {
  data: BlogDetails | null;
  pending: boolean;
}

defineProps<Props>();

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  if (locale.value === "en") {
    return `${day}/${month}/${year}`;
  } else return `${year}/${month}/${day}`;
}
</script>

<style scoped></style>
