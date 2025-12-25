export interface SEODataFetch {
  id: number;
  title_ar: string;
  title_en: string;
  slug: string;
  content_ar: string;
  content_en: string;
  meta_description_ar: string;
  meta_description_en: string;
  banner_image: string | null;
  banner_image_url: string | null;
  thumbnail_image: string | null;
  thumbnail_image_url: string | null;
  is_published: boolean;
  show_in_menu: boolean;
  menu_order: number;
  created_at: string;
  updated_at: string;
}
