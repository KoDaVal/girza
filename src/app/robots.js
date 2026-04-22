export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://girsapuebla.org/sitemap.xml",
    host: "https://girsapuebla.org",
  };
}
