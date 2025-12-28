import type { Ref } from "vue";

interface SeoPage {
  title_ar?: string;
  title_en?: string;
  meta_description_ar?: string;
  meta_description_en?: string;
  banner_image_url?: string | null;
  slug?: string;
}

export const usePageSeo = (
  data: Ref<SeoPage | null>,
  locale: Ref<string>,
  baseUrl = "https://law.shangiti.com"
) => {
  useHead(() => {
    if (!data.value) return {};

    const isAr = locale.value === "ar";
    const title = isAr ? data.value.title_ar : data.value.title_en;
    const description = isAr
      ? data.value.meta_description_ar
      : data.value.meta_description_en;

    const url = data.value.slug ? `${baseUrl}/${data.value.slug}` : baseUrl;

    const ogTitleBased =
      locale.value === "ar"
        ? `محمود الشنقيطي للمحاماة والاستشارات القانونية - ${title}`
        : `${title} - Mr Mahmoud Alshangiti`;

    return {
      title,
      meta: [
        { name: "description", content: description },

        { property: "og:title", content: ogTitleBased },
        { property: "og:description", content: description },
        {
          property: "og:image",
          content: data.value.banner_image_url || `${baseUrl}/LogoTap.png`,
        },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
    };
  });
};
