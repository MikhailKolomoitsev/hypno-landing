import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, BASE_URL, LOCALES, TELEGRAM_URL, isLocale, type Locale } from '../../../lib/articles';
import SiteFooter from '../components/SiteFooter';

const T: Record<Locale, { title: string; description: string; h1a: string; h1b: string; lead: string; home: string; book: string; crumb: string }> = {
  uk: {
    title: 'Статті про гіпнотерапію | kolomoitsev.com',
    description: 'Статті сертифікованого гіпнотерапевта: гіпноз від болю, депресії, тривоги, залежностей, психосоматика та практичні вправи.',
    h1a: 'Статті', h1b: 'про гіпнотерапію',
    lead: 'Без магії й обіцянок: як працює гіпноз, що показують дослідження і чого реально очікувати від сесій.',
    home: 'Головна', book: 'Записатися', crumb: 'Статті',
  },
  ru: {
    title: 'Статьи о гипнотерапии | kolomoitsev.com',
    description: 'Статьи сертифицированного гипнотерапевта: гипноз от боли, депрессии, тревоги, зависимостей, психосоматика и практические упражнения.',
    h1a: 'Статьи', h1b: 'о гипнотерапии',
    lead: 'Без магии и обещаний: как работает гипноз, что показывают исследования и чего реально ожидать от сессий.',
    home: 'Главная', book: 'Записаться', crumb: 'Статьи',
  },
  en: {
    title: 'Articles on Hypnotherapy | kolomoitsev.com',
    description: 'Articles by a certified hypnotherapist: hypnosis for pain, depression, anxiety, addictions, psychosomatic symptoms and practical exercises.',
    h1a: 'Articles', h1b: 'on hypnotherapy',
    lead: 'No magic, no promises: how hypnosis works, what research shows and what to realistically expect from sessions.',
    home: 'Home', book: 'Book a session', crumb: 'Articles',
  },
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = T[locale];
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: { ...Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}/${l}/blog`])), 'x-default': `${BASE_URL}/uk/blog` },
    },
  };
}

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = T[locale];
  const articles = [...ARTICLES].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <div className="site-bg" />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/30 backdrop-blur-md">
        <Link href={`/${locale}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          {t.home}
        </Link>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black text-sm font-semibold transition-all">
          <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={14} height={14} />
          {t.book}
        </a>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">
        <nav className="text-xs text-gray-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-gray-400">{t.home}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{t.crumb}</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          {t.h1a}<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">{t.h1b}</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">{t.lead}</p>

        <div className="space-y-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/${locale}/${a.slug}`}
              className="block p-5 rounded-xl border border-white/8 bg-white/3 hover:border-green-500/30 hover:bg-white/5 transition-colors"
            >
              <div className="text-white font-medium mb-1">{a.title[locale]}</div>
              <div className="text-gray-500 text-sm">{a.short[locale]}</div>
              <time dateTime={a.published} className="block mt-2 text-xs text-gray-600">{a.published}</time>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
