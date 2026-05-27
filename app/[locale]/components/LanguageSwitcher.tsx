'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const LOCALES = [
  { code: 'uk', label: 'UA' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Replace the locale segment in the current path
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/') || '/');
  };

  return (
    <div className="flex items-center gap-1 px-1.5 py-1 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
            locale === l.code
              ? 'bg-white/15 text-white'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
