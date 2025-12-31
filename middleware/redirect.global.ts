export default defineNuxtRouteMiddleware(async (to) => {
  const path = to.path.replace(/^\/|\/$/g, "");
  if (!path) return;

  try {
    const response = await fetch(
      `https://be.shangiti.com/api/redirects/check/${path}/`
    );

    if (!response.ok) return;

    const data = await response.json();

    if (data.success && data.redirect) {
      return navigateTo(data.new_url, {
        redirectCode: data.redirect_type === "301" ? 301 : 302,
      });
    }
  } catch (error) {
    console.error("Redirect check failed:", error);
  }
});
