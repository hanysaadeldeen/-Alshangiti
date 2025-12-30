export default defineSitemapEventHandler(async () => {
  const res = await $fetch<any>(
    "https://be.shangiti.com/shangiti/api/blog/blog-posts/?page_size=1000",
    { headers: { accept: "application/json" } }
  );

  const posts = res?.results ?? [];

  return posts.flatMap((post: any) => [
    // Arabic (default language)
    {
      loc: `/blogs/${post.slug}`,
      lastmod: post.updated_at || post.published_at || post.created_at,
      changefreq: "weekly",
      priority: 0.7,
    },
    // English
    {
      loc: `/en/blogs/${post.slug}`,
      lastmod: post.updated_at || post.published_at || post.created_at,
      changefreq: "weekly",
      priority: 0.7,
    },
  ]);
});
