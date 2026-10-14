import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import SiteFooter from './SiteFooter';
import {
  ARTICLES,
  BASE_URL,
  LOCALES,
  TELEGRAM_URL,
  articleUrl,
  type ArticleMeta,
  type Locale,
  ogImage,
} from '../../../lib/articles';

export type Step = { title: string; text: string; list?: string[] };
export type Card = { title: string; text: string };
export type Faq = { q: string; a: string };

export type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: Card[];
  steps?: Step[];
  /** Highlighted box, e.g. a key takeaway or a warning */
  callout?: string;
  /** Internal links (slug relative to locale) rendered as a card grid */
  links?: { slug: string; label: string; text?: string }[];
};

export type Reference = { label: string; url: string };

export type ArticleContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titleLine1: string;
  titleLine2: string;
  lead: string;
  sections: Section[];
  faq?: Faq[];
  /** Medical/YMYL disclaimer shown before the CTA */
  disclaimer?: string;
  references?: Reference[];
  source?: { text: string; url: string; label: string };
  cta: { title: string; text: string; button: string };
};

const UI: Record<Locale, {
  home: string; book: string; faq: string; references: string; readAlso: string;
  published: string; author: string; jobTitle: string; disclaimerTitle: string; allArticles: string;
}> = {
  uk: {
    home: 'Головна', book: 'Записатися', faq: 'Часті запитання', references: 'Джерела',
    readAlso: 'Читайте також', published: 'Опубліковано', author: 'Михайло Коломийцев',
    jobTitle: 'Гіпнотерапевт', disclaimerTitle: 'Важливо', allArticles: 'Усі статті',
  },
  ru: {
    home: 'Главная', book: 'Записаться', faq: 'Частые вопросы', references: 'Источники',
    readAlso: 'Читайте также', published: 'Опубликовано', author: 'Михаил Коломойцев',
    jobTitle: 'Гипнотерапевт', disclaimerTitle: 'Важно', allArticles: 'Все статьи',
  },
  en: {
    home: 'Home', book: 'Book a session', faq: 'FAQ', references: 'References',
    readAlso: 'Read also', published: 'Published', author: 'Mykhailo Kolomoitsev',
    jobTitle: 'Hypnotherapist', disclaimerTitle: 'Important', allArticles: 'All articles',
  },
};

const OG_LOCALE: Record<Locale, string> = { uk: 'uk_UA', ru: 'ru_RU', en: 'en_US' };

const formatDate = (iso: string, locale: Locale) =>
  new Date(iso).toLocaleDateString(locale === 'en' ? 'en-GB' : locale === 'uk' ? 'uk-UA' : 'ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

/** Shared metadata builder for article pages. */
export function articleMetadata(locale: Locale, meta: ArticleMeta, t: ArticleContent): Metadata {
  const url = articleUrl(locale, meta.slug);
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(LOCALES.map((l) => [l, articleUrl(l, meta.slug)])), 'x-default': articleUrl('uk', meta.slug) },
    },
    openGraph: {
      type: 'article',
      locale: OG_LOCALE[locale],
      url,
      title: t.metaTitle,
      description: t.metaDescription,
      publishedTime: meta.published,
      modifiedTime: meta.modified,
      authors: [`${BASE_URL}/${locale}`],
      images: [ogImage(meta.title[locale], locale)],
    },
  };
}

export default function ArticleLayout({ locale, meta, t }: { locale: Locale; meta: ArticleMeta; t: ArticleContent }) {
  const ui = UI[locale];
  const url = articleUrl(locale, meta.slug);
  const related = ARTICLES.filter((a) => a.slug !== meta.slug).slice(0, 3);

  const author = {
    '@type': 'Person',
    name: ui.author,
    url: `${BASE_URL}/${locale}`,
    jobTitle: ui.jobTitle,
    sameAs: [TELEGRAM_URL],
  };

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.title[locale],
      description: t.metaDescription,
      inLanguage: locale,
      datePublished: meta.published,
      dateModified: meta.modified,
      author,
      publisher: author,
      mainEntityOfPage: url,
      image: `${BASE_URL}/og-image.jpg`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: ui.home, item: `${BASE_URL}/${locale}` },
        { '@type': 'ListItem', position: 2, name: ui.allArticles, item: `${BASE_URL}/${locale}/blog` },
        { '@type': 'ListItem', position: 3, name: t.breadcrumb, item: url },
      ],
    },
  ];
  if (t.faq?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <div className="site-bg" />
      <JsonLd data={jsonLd} />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/30 backdrop-blur-md">
        <Link href={`/${locale}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          {ui.home}
        </Link>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black text-sm font-semibold transition-all"
        >
          <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={14} height={14} />
          {ui.book}
        </a>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">
        <nav className="text-xs text-gray-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-gray-400">{ui.home}</Link>
          <span className="mx-2">/</span>
          <Link href={`/${locale}/blog`} className="hover:text-gray-400">{ui.allArticles}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{t.breadcrumb}</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          {t.titleLine1}<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            {t.titleLine2}
          </span>
        </h1>

        <p className="text-xs text-gray-600 mb-6">
          {ui.published}: <time dateTime={meta.published}>{formatDate(meta.published, locale)}</time> · {ui.author}
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">{t.lead}</p>

        <article className="space-y-10 text-gray-300 leading-relaxed">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-white text-2xl font-bold mb-4">{s.heading}</h2>
              {s.paragraphs?.map((p) => <p key={p} className="mb-3">{p}</p>)}
              {s.bullets && (
                <ul className="space-y-2 list-disc pl-5 mb-3">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
              {s.cards && (
                <div className="space-y-3">
                  {s.cards.map((c) => (
                    <div key={c.title} className="p-4 rounded-xl border border-white/8 bg-white/3">
                      <div className="text-green-400 font-medium text-sm mb-1">{c.title}</div>
                      <div className="text-gray-400 text-sm">{c.text}</div>
                    </div>
                  ))}
                </div>
              )}
              {s.steps && (
                <div className="space-y-3">
                  {s.steps.map((st, i) => (
                    <div key={st.title} className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-green-500/15 border border-green-500/20 text-green-400 text-sm font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="text-white font-medium mb-1">{st.title}</div>
                        <p className="text-gray-400 text-sm">{st.text}</p>
                        {st.list && (
                          <ul className="mt-2 space-y-1 list-disc pl-5 text-gray-400 text-sm">
                            {st.list.map((li) => <li key={li}>{li}</li>)}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {s.links && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {s.links.map((l) => (
                    <Link key={l.slug} href={`/${locale}/${l.slug}`} className="p-4 rounded-xl border border-white/8 bg-white/3 hover:border-green-500/30 hover:bg-white/5 transition-colors block">
                      <div className="text-white text-sm font-medium">{l.label} →</div>
                      {l.text && <div className="text-gray-500 text-xs mt-1">{l.text}</div>}
                    </Link>
                  ))}
                </div>
              )}
              {s.callout && (
                <div className="mt-4 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 text-gray-300">
                  {s.callout}
                </div>
              )}
            </section>
          ))}

          {t.faq?.length ? (
            <section>
              <h2 className="text-white text-2xl font-bold mb-4">{ui.faq}</h2>
              <div className="space-y-3">
                {t.faq.map((f) => (
                  <details key={f.q} className="group p-4 rounded-xl border border-white/8 bg-white/3">
                    <summary className="cursor-pointer text-white font-medium list-none flex justify-between gap-4">
                      {f.q}
                      <span className="text-green-400 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 text-gray-400 text-sm">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {t.disclaimer && (
            <section className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-sm text-gray-300">
              <div className="text-amber-400 font-medium mb-1">{ui.disclaimerTitle}</div>
              {t.disclaimer}
            </section>
          )}

          {t.references?.length ? (
            <section>
              <h2 className="text-white text-lg font-bold mb-3">{ui.references}</h2>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-500">
                {t.references.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 underline decoration-white/20">
                      {r.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {t.source && (
            <section className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
              <p className="text-gray-300 mb-2">{t.source.text}</p>
              <a href={t.source.url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-medium">
                {t.source.label} →
              </a>
            </section>
          )}
        </article>

        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">{t.cta.title}</h2>
          <p className="text-gray-400 text-sm mb-6">{t.cta.text}</p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all hover:scale-105 text-sm shadow-lg shadow-green-600/30"
          >
            <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={18} height={18} />
            {t.cta.button}
          </a>
          <p className="mt-4 text-xs text-gray-600">Certified Master Hypnotherapist · {ui.author}</p>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-white text-xl font-bold mb-4">{ui.readAlso}</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${locale}/${a.slug}`}
                  className="p-4 rounded-xl border border-white/8 bg-white/3 hover:border-green-500/30 hover:bg-white/5 transition-colors block"
                >
                  <div className="text-white text-sm font-medium mb-1">{a.title[locale]}</div>
                  <div className="text-gray-500 text-xs">{a.short[locale]}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
