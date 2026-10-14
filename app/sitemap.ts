import type { MetadataRoute } from "next";
import { ARTICLES, BASE_URL, LOCALES } from "../lib/articles";

/** Bump when static pages change materially — a constantly moving date gets ignored by crawlers. */
const SITE_UPDATED = new Date("2026-10-14");

const alternates = (path: string) => ({
  languages: Object.fromEntries([...LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`]), ["x-default", `${BASE_URL}/uk${path}`]]),
});

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: alternates(""),
  }));

  const seoPages = [
    { slug: "hipnoterapevt-onlayn",   priority: 0.9 },
    { slug: "vidhuky",                priority: 0.9 },
    { slug: "hipnoz-protypokazannya", priority: 0.85 },
    { slug: "skilky-seansi-hipnozu",  priority: 0.85 },
    { slug: "hipnoz-dlya-schudnennya",priority: 0.8 },
    { slug: "hipnoz-kynuty-palyty",   priority: 0.8 },
    { slug: "rehresyvnyy-hipnoz",              priority: 0.75 },
    { slug: "rozkryttya-tvorchoho-potentsialu", priority: 0.8 },
  ].flatMap(({ slug, priority }) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/${slug}`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority,
      alternates: alternates(`/${slug}`),
    })),
  );

  const blogIndex = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}/blog`,
    lastModified: new Date(ARTICLES.map((a) => a.modified).sort().at(-1)!),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    alternates: alternates("/blog"),
  }));

  const articlePages = ARTICLES.flatMap((a) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/${a.slug}`,
      lastModified: new Date(a.modified),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: alternates(`/${a.slug}`),
    })),
  );

  return [
    { url: BASE_URL, lastModified: SITE_UPDATED, changeFrequency: "monthly" as const, priority: 1 },
    ...mainPages,
    ...seoPages,
    ...blogIndex,
    ...articlePages,
  ];
}
