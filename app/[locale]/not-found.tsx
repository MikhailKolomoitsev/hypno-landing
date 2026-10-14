'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ARTICLES, TELEGRAM_URL, type Locale } from '../../lib/articles';
import { NAV_UI, SERVICE_PAGES } from '../../lib/pages';

const T: Record<Locale, { title: string; text: string; home: string; popular: string; write: string }> = {
  uk: { title: 'Сторінку не знайдено', text: 'Можливо, посилання застаріло або в адресі помилка. Ось що є на сайті:', home: 'На головну', popular: 'Популярні статті', write: 'Написати в Telegram' },
  ru: { title: 'Страница не найдена', text: 'Возможно, ссылка устарела или в адресе ошибка. Вот что есть на сайте:', home: 'На главную', popular: 'Популярные статьи', write: 'Написать в Telegram' },
  en: { title: 'Page not found', text: 'The link may be outdated or the address mistyped. Here is what the site has:', home: 'Home', popular: 'Popular articles', write: 'Message on Telegram' },
};

export default function NotFound() {
  const raw = useLocale();
  const locale: Locale = raw === 'ru' || raw === 'en' ? raw : 'uk';
  const t = T[locale];
  const nav = NAV_UI[locale];
  const linkCls = 'block text-sm text-gray-400 hover:text-white transition-colors py-1';

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <div className="site-bg" />
      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-3">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4" style={{ letterSpacing: '-0.03em' }}>{t.title}</h1>
        <p className="text-gray-400 text-lg mb-10">{t.text}</p>

        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">{nav.pages}</h2>
            <Link href={`/${locale}`} className={`${linkCls} text-white`}>{t.home}</Link>
            {SERVICE_PAGES.map((p) => <Link key={p.slug} href={`/${locale}/${p.slug}`} className={linkCls}>{p.title[locale]}</Link>)}
          </div>
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">{t.popular}</h2>
            {ARTICLES.slice(0, 6).map((a) => <Link key={a.slug} href={`/${locale}/${a.slug}`} className={linkCls}>{a.title[locale]}</Link>)}
            <Link href={`/${locale}/blog`} className={`${linkCls} text-green-400`}>{nav.allArticles} →</Link>
          </div>
        </div>

        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex mt-12 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold text-sm transition-all">
          {t.write}
        </a>
      </main>
    </div>
  );
}
