import type { Locale } from './articles';

export type ServicePage = { slug: string; title: Record<Locale, string>; group: 'main' | 'method' };

/** Service / landing pages (non-article). Feeds SiteNav and Footer. */
export const SERVICE_PAGES: ServicePage[] = [
  { slug: 'vidhuky',                group: 'main',   title: { uk: 'Відгуки', ru: 'Отзывы', en: 'Reviews' } },
  { slug: 'hipnoterapevt-onlayn',   group: 'main',   title: { uk: 'Онлайн-сесії', ru: 'Онлайн-сессии', en: 'Online sessions' } },
  { slug: 'hipnoz-protypokazannya', group: 'main',   title: { uk: 'Протипоказання', ru: 'Противопоказания', en: 'Contraindications' } },
  { slug: 'skilky-seansi-hipnozu',  group: 'main',   title: { uk: 'Скільки сеансів', ru: 'Сколько сеансов', en: 'How many sessions' } },
  { slug: 'hipnoz-dlya-schudnennya',           group: 'method', title: { uk: 'Гіпноз для схуднення', ru: 'Гипноз для похудения', en: 'Hypnosis for weight loss' } },
  { slug: 'hipnoz-kynuty-palyty',             group: 'method', title: { uk: 'Гіпноз від куріння', ru: 'Гипноз от курения', en: 'Quit smoking' } },
  { slug: 'rehresyvnyy-hipnoz',               group: 'method', title: { uk: 'Регресивний гіпноз', ru: 'Регрессивный гипноз', en: 'Regression hypnosis' } },
  { slug: 'rozkryttya-tvorchoho-potentsialu', group: 'method', title: { uk: 'Творчий потенціал', ru: 'Творческий потенциал', en: 'Creative potential' } },
];

export const NAV_UI: Record<Locale, { home: string; pages: string; method: string; articles: string; allArticles: string; book: string; menu: string }> = {
  uk: { home: 'Головна', pages: 'Сторінки', method: 'Про метод', articles: 'Статті', allArticles: 'Усі статті', book: 'Записатися', menu: 'Меню' },
  ru: { home: 'Главная', pages: 'Страницы', method: 'О методе', articles: 'Статьи', allArticles: 'Все статьи', book: 'Записаться', menu: 'Меню' },
  en: { home: 'Home', pages: 'Pages', method: 'The method', articles: 'Articles', allArticles: 'All articles', book: 'Book a session', menu: 'Menu' },
};
