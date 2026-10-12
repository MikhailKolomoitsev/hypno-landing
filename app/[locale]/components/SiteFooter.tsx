import Link from 'next/link';
import { ARTICLES, TELEGRAM_URL, type Locale } from '../../../lib/articles';
import { NAV_UI, SERVICE_PAGES } from '../../../lib/pages';

const FOOTER_UI: Record<Locale, { services: string; contact: string; telegram: string; cert: string; name: string; disclaimer: string }> = {
  uk: {
    services: 'Послуги', contact: 'Контакти', telegram: 'Написати в Telegram',
    cert: 'Certified Master Hypnotherapist · International Academy of Hypnosis, London',
    name: 'Михайло Коломийцев',
    disclaimer: 'Гіпнотерапія не замінює медичну допомогу. Інформація на сайті має ознайомчий характер.',
  },
  ru: {
    services: 'Услуги', contact: 'Контакты', telegram: 'Написать в Telegram',
    cert: 'Certified Master Hypnotherapist · International Academy of Hypnosis, London',
    name: 'Михаил Коломойцев',
    disclaimer: 'Гипнотерапия не заменяет медицинскую помощь. Информация на сайте носит ознакомительный характер.',
  },
  en: {
    services: 'Services', contact: 'Contact', telegram: 'Message on Telegram',
    cert: 'Certified Master Hypnotherapist · International Academy of Hypnosis, London',
    name: 'Mykhailo Kolomoitsev',
    disclaimer: 'Hypnotherapy does not replace medical care. Information on this site is for general guidance only.',
  },
};

/** Site-wide footer with full internal link graph: services, articles, contact. */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const ui = FOOTER_UI[locale];
  const nav = NAV_UI[locale];
  const articles = [...ARTICLES].sort((a, b) => b.published.localeCompare(a.published));
  const linkCls = 'block text-sm text-gray-500 hover:text-white transition-colors py-1';

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/40 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">{ui.services}</h3>
            {SERVICE_PAGES.map((p) => (
              <Link key={p.slug} href={`/${locale}/${p.slug}`} className={linkCls}>{p.title[locale]}</Link>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">{nav.articles}</h3>
            {articles.map((a) => (
              <Link key={a.slug} href={`/${locale}/${a.slug}`} className={linkCls}>{a.title[locale]}</Link>
            ))}
            <Link href={`/${locale}/blog`} className={`${linkCls} text-green-400 hover:text-green-300`}>{nav.allArticles} →</Link>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">{ui.contact}</h3>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>{ui.telegram}</a>
            <Link href={`/${locale}`} className={linkCls}>{nav.home}</Link>
            <p className="mt-6 text-xs text-gray-600 leading-relaxed">{ui.name}<br />{ui.cert}</p>
          </div>
        </div>
        <p className="mt-10 pt-6 border-t border-white/5 text-xs text-gray-700">{ui.disclaimer} © {new Date().getFullYear()} kolomoitsev.com</p>
      </div>
    </footer>
  );
}
