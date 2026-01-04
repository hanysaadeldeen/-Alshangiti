export default defineSitemapEventHandler(async () => {
  const blogRes = await $fetch<any>(
    "https://be.shangiti.com/shangiti/api/blog/blog-posts/?page_size=1000",
    { headers: { accept: "application/json" } }
  );
  const posts = blogRes?.results ?? [];

  const pageRes = await $fetch<any>(
    "https://be.shangiti.com/shangiti/api/pages",
    { headers: { accept: "application/json" } }
  );
  const pages = pageRes?.results ?? [];

  return [
    ...posts.flatMap((post: any) => [
      {
        loc: `/blogs/${post.slug}`,
        lastmod: post.updated_at || post.published_at || post.created_at,
        changefreq: "weekly",
        priority: 0.7,
        images: post.featured_image
          ? [
              {
                loc: post.featured_image,
              },
            ]
          : [],
      },
      {
        loc: `/en/blogs/${post.slug}`,
        lastmod: post.updated_at || post.published_at || post.created_at,
        changefreq: "weekly",
        priority: 0.7,
        images: post.featured_image
          ? [
              {
                loc: post.featured_image,
              },
            ]
          : [],
      },
    ]),

    ...pages.flatMap((page: any) => [
      {
        loc: `/${page.slug}`,
        lastmod: page.updated_at || page.created_at,
        changefreq: "monthly",
        priority: 0.6,
        images: page.banner_image_url
          ? [
              {
                loc: page.banner_image_url,
              },
            ]
          : [],
      },

      {
        loc: `/en/${page.slug}`,
        lastmod: page.updated_at || page.created_at,
        changefreq: "monthly",
        priority: 0.6,
        images: page.banner_image_url
          ? [
              {
                loc: page.banner_image_url,
              },
            ]
          : [],
      },
    ]),
  ];
});
