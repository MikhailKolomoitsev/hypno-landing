import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import SiteFooter from './SiteFooter';
import { ARTICLES, BASE_URL, LOCALES, TELEGRAM_URL, ogImage, type Locale } from '../../../lib/articles';
import { SERVICE_RELATED } from '../../../lib/pages';

export type Faq = { q: string; a: string };
export type Reference = { label: string; url: string };

export const UI: Record<Locale, { home: string; book: string; author: string; jobTitle: string; cert: string; references: string; readAlso: string }> = {
  uk: { home: 'Головна', book: 'Записатися', author: 'Михайло Коломийцев', jobTitle: 'Гіпнотерапевт', cert: 'Certified Master Hypnotherapist', references: 'Джерела', readAlso: 'Читайте також' },
  ru: { home: 'Главная', book: 'Записаться', author: 'Михаил Коломойцев', jobTitle: 'Гипнотерапевт', cert: 'Certified Master Hypnotherapist', references: 'Источники', readAlso: 'Читайте также' },
  en: { home: 'Home', book: 'Book a session', author: 'Mykhailo Kolomoitsev', jobTitle: 'Hypnotherapist', cert: 'Certified Master Hypnotherapist', references: 'References', readAlso: 'Read also' },
};

const OG_LOCALE: Record<Locale, string> = { uk: 'uk_UA', ru: 'ru_RU', en: 'en_US' };

export function serviceMetadata(locale: Locale, slug: string, title: string, description: string): Metadata {
  const url = `${BASE_URL}/${locale}/${slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}/${l}/${slug}`])), 'x-default': `${BASE_URL}/uk/${slug}` },
    },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      url,
      title,
      description,
      images: [ogImage(title, locale)],
    },
  };
}

type Props = {
  locale: Locale;
  slug: string;
  breadcrumb: string;
  /** Service name for schema.org (defaults to breadcrumb) */
  serviceName?: string;
  serviceDescription: string;
  titleLine1?: string;
  titleLine2?: string;
  lead?: string;
  /** Replaces the default H1 + lead block */
  hero?: ReactNode;
  children: ReactNode;
  faq?: Faq[];
  references?: Reference[];
  cta: { title: string; text: ReactNode; button: string; note?: string };
  wide?: boolean;
  extraJsonLd?: object[];
};

export default function ServiceShell({
  locale, slug, breadcrumb, serviceName, serviceDescription,
  titleLine1, titleLine2, lead, hero, children, faq, references, cta, wide, extraJsonLd = [],
}: Props) {
  const ui = UI[locale];
  const related = (SERVICE_RELATED[slug] ?? []).map((s) => ARTICLES.find((a) => a.slug === s)).filter((a): a is NonNullable<typeof a> => !!a);
  const url = `${BASE_URL}/${locale}/${slug}`;

  const provider = {
    '@type': 'Person',
    name: ui.author,
    jobTitle: ui.jobTitle,
    url: `${BASE_URL}/${locale}`,
    sameAs: [TELEGRAM_URL],
  };

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName ?? breadcrumb,
      description: serviceDescription,
      serviceType: 'Hypnotherapy',
      provider,
      url,
      inLanguage: locale,
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: TELEGRAM_URL, name: 'Online (Zoom / Telegram)' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: ui.home, item: `${BASE_URL}/${locale}` },
        { '@type': 'ListItem', position: 2, name: breadcrumb, item: url },
      ],
    },
    ...extraJsonLd,
  ];
  if (faq?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black text-sm font-semibold transition-all">
          <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={14} height={14} />
          {ui.book}
        </a>
      </header>

      <main className={`relative z-10 ${wide ? 'max-w-4xl' : 'max-w-3xl'} mx-auto px-6 pt-28 pb-20`}>
        <nav className="text-xs text-gray-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-gray-400">{ui.home}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{breadcrumb}</span>
        </nav>

        {hero ?? (
          <>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              {titleLine1}<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">{titleLine2}</span>
            </h1>
            {lead && <p className="text-gray-400 text-lg leading-relaxed mb-10">{lead}</p>}
          </>
        )}

        {children}

        {faq?.length ? (
          <section className="mt-10 text-gray-300">
            <h2 className="text-white text-2xl font-bold mb-4">FAQ</h2>
            <div className="space-y-3">
              {faq.map((f) => (
                <details key={f.q} className="group p-4 rounded-xl border border-white/8 bg-white/3">
                  <summary className="cursor-pointer text-white font-medium list-none flex justify-between gap-4">
                    {f.q}<span className="text-green-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-400 text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {references?.length ? (
          <section className="mt-10">
            <h2 className="text-white text-lg font-bold mb-3">{ui.references}</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-500">
              {references.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 underline decoration-white/20">{r.label}</a>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">{cta.title}</h2>
          <p className="text-gray-400 text-sm mb-6">{cta.text}</p>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all hover:scale-105 text-sm shadow-lg shadow-green-600/30">
            <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={18} height={18} />
            {cta.button}
          </a>
          <p className="mt-4 text-xs text-gray-600">{cta.note ?? `${ui.cert} · ${ui.author}`}</p>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-white text-xl font-bold mb-4">{ui.readAlso}</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {related.map((a) => (
                <Link key={a.slug} href={`/${locale}/${a.slug}`} className="p-4 rounded-xl border border-white/8 bg-white/3 hover:border-green-500/30 hover:bg-white/5 transition-colors block">
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

/** Shared "code word" CTA copy per locale. */
export const CODE_WORD: Record<Locale, { word: string; button: string }> = {
  uk: { word: '«Перезапуск»', button: 'Написати «Перезапуск»' },
  ru: { word: '«Перезапуск»', button: 'Написать «Перезапуск»' },
  en: { word: '"Restart"', button: 'Message "Restart"' },
};

export function CtaText({ before, locale, after }: { before: string; locale: Locale; after: string }) {
  return (
    <>
      {before} <span className="text-white font-semibold">{CODE_WORD[locale].word}</span> {after}
    </>
  );
}
