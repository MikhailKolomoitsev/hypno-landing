import type { MetadataRoute } from "next";

const BASE = "https://kolomoitsev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["uk", "ru", "en"];

  const mainPages = locales.flatMap((locale) => [
    {
      url: `${BASE}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ]);

  const seoPages = [
    { slug: "hipnoterapevt-onlayn",   priority: 0.9 },
    { slug: "vidhuky",                priority: 0.9 },
    { slug: "hipnoz-protypokazannya", priority: 0.85 },
    { slug: "skilky-seansi-hipnozu",  priority: 0.85 },
    { slug: "hipnoz-dlya-schudnennya",priority: 0.8 },
    { slug: "hipnoz-kynuty-palyty",   priority: 0.8 },
    { slug: "rehresyvnyy-hipnoz",              priority: 0.75 },
    { slug: "rozkryttya-tvorchoho-potentsialu", priority: 0.8 },
  ].map(({ slug, priority }) => ({
    url: `${BASE}/uk/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${BASE}/guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...mainPages,
    ...seoPages,
  ];
}
