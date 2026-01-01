export default defineNuxtRouteMiddleware(async (to) => {
  // استثناء ملفات النظام و SEO files
  if (
    to.path.startsWith("/_nuxt") ||
    to.path.startsWith("/api") ||
    to.path === "/favicon.ico" ||
    to.path === "/robots.txt" ||
    to.path.startsWith("/sitemap")
  ) {
    return;
  }

  const path = to.path.replace(/^\/|\/$/g, "");
  if (!path) return;

  try {
    const response = await fetch(
      `https://be.shangiti.com/api/redirects/check/${encodeURIComponent(path)}/`
    );

    if (!response.ok) return;

    const data = await response.json();

    if (data?.success && data?.redirect && data?.new_url) {
      return navigateTo(data.new_url, {
        redirectCode: data.redirect_type === "301" ? 301 : 302,
      });
    }
  } catch (error) {
    console.error("Redirect check failed:", error);
  }
});
