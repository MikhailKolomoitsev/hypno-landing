'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const NAV_LINKS = [
  { href: '/vidhuky',                label: 'Відгуки' },
  { href: '/hipnoterapevt-onlayn',   label: 'Онлайн-сесії' },
  { href: '/hipnoz-protypokazannya', label: 'Протипоказання' },
  { href: '/skilky-seansi-hipnozu',  label: 'Скільки сеансів' },
];

export default function SiteNav() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <>
      {/* Hamburger button — sits in the header area */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-xs text-gray-400 hover:text-white transition-colors"
        aria-label="Меню"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="hidden sm:inline">Сторінки</span>
      </button>

      {/* Overlay drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <nav className="relative ml-auto w-72 h-full bg-[#0d0d18] border-l border-white/8 flex flex-col p-6">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-8 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Home link */}
            <Link
              href={`/${locale}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-white font-semibold text-sm mb-2 hover:bg-white/5 transition-colors"
            >
              🏠 Головна
            </Link>

            {/* Nav links */}
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(link.href)}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-white/5" />

            {/* More pages */}
            <div className="space-y-1">
              <p className="text-xs text-gray-600 px-3 mb-2 uppercase tracking-wider">Про метод</p>
              {[
                { href: '/hipnoz-dlya-schudnennya',           label: 'Гіпноз для схуднення' },
                { href: '/hipnoz-kynuty-palyty',             label: 'Гіпноз від куріння' },
                { href: '/rehresyvnyy-hipnoz',               label: 'Регресивний гіпноз' },
                { href: '/rozkryttya-tvorchoho-potentsialu', label: 'Творчий потенціал' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(link.href)}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6">
              <a
                href="https://t.me/mykhailo_elmejor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold text-sm transition-all"
              >
                <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={16} height={16} />
                Записатися
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
