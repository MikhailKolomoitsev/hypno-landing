import { ARTICLES, BASE_URL, LOCALES, isLocale } from '../../../lib/articles';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const TITLE = { uk: 'Статті про гіпнотерапію — Михайло Коломийцев', ru: 'Статьи о гипнотерапии — Михаил Коломойцев', en: 'Hypnotherapy articles — Mykhailo Kolomoitsev' };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response('Not found', { status: 404 });

  const items = [...ARTICLES]
    .sort((a, b) => b.published.localeCompare(a.published))
    .map((a) => `    <item>
      <title>${esc(a.title[locale])}</title>
      <link>${BASE_URL}/${locale}/${a.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/${locale}/${a.slug}</guid>
      <description>${esc(a.short[locale])}</description>
      <pubDate>${new Date(a.published).toUTCString()}</pubDate>
    </item>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(TITLE[locale])}</title>
    <link>${BASE_URL}/${locale}/blog</link>
    <description>${esc(TITLE[locale])}</description>
    <language>${locale}</language>
    <atom:link href="${BASE_URL}/${locale}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600, s-maxage=86400' },
  });
}
