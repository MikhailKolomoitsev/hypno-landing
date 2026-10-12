'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ARTICLES, TELEGRAM_URL, type Locale } from '../../../lib/articles';
import { NAV_UI, SERVICE_PAGES } from '../../../lib/pages';

export default function SiteNav() {
  const locale = useLocale() as Locale;
  const ui = NAV_UI[locale] ?? NAV_UI.uk;
  const [open, setOpen] = useState(false);

  const href = (slug: string) => `/${locale}/${slug}`;
  const itemCls = 'flex items-center gap-2 px-3 py-2.5 rounded-xl hover:text-white hover:bg-white/5 transition-colors text-sm';

  return (
    <>
      {/* Hamburger button — sits in the header area */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-xs text-gray-400 hover:text-white transition-colors"
        aria-label={ui.menu}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="hidden sm:inline">{ui.pages}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <nav className="relative ml-auto w-72 h-full bg-[#0d0d18] border-l border-white/8 flex flex-col p-6 overflow-y-auto">
            <button onClick={() => setOpen(false)} className="self-end mb-8 text-gray-500 hover:text-white transition-colors" aria-label="Close">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <Link href={`/${locale}`} onClick={() => setOpen(false)} className={`${itemCls} text-white font-semibold mb-2`}>
              🏠 {ui.home}
            </Link>

            <div className="space-y-1">
              {SERVICE_PAGES.filter((p) => p.group === 'main').map((p) => (
                <Link key={p.slug} href={href(p.slug)} onClick={() => setOpen(false)} className={`${itemCls} text-gray-400`}>
                  {p.title[locale]}
                </Link>
              ))}
            </div>

            <div className="my-6 border-t border-white/5" />
            <div className="space-y-1">
              <p className="text-xs text-gray-600 px-3 mb-2 uppercase tracking-wider">{ui.method}</p>
              {SERVICE_PAGES.filter((p) => p.group === 'method').map((p) => (
                <Link key={p.slug} href={href(p.slug)} onClick={() => setOpen(false)} className={`${itemCls} text-gray-500`}>
                  {p.title[locale]}
                </Link>
              ))}
            </div>

            <div className="my-6 border-t border-white/5" />
            <div className="space-y-1">
              <p className="text-xs text-gray-600 px-3 mb-2 uppercase tracking-wider">{ui.articles}</p>
              {ARTICLES.map((a) => (
                <Link key={a.slug} href={href(a.slug)} onClick={() => setOpen(false)} className={`${itemCls} text-gray-500`}>
                  {a.title[locale]}
                </Link>
              ))}
              <Link href={href('blog')} onClick={() => setOpen(false)} className={`${itemCls} text-green-400`}>
                {ui.allArticles} →
              </Link>
            </div>

            <div className="mt-auto pt-6">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold text-sm transition-all">
                <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={16} height={16} />
                {ui.book}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
