export type Locale = 'uk' | 'ru' | 'en';

export const LOCALES: Locale[] = ['uk', 'ru', 'en'];
export const BASE_URL = 'https://kolomoitsev.com';
export const TELEGRAM_URL = 'https://t.me/mykhailo_elmejor';

export type ArticleMeta = {
  slug: string;
  /** ISO date, YYYY-MM-DD */
  published: string;
  /** ISO date, YYYY-MM-DD — bump when the text materially changes */
  modified: string;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
};

/**
 * Single source of truth for blog articles: feeds the sitemap, the /blog index
 * and the "read also" block. Add a row here when adding an article page.
 */
export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'hipnoz-vid-boliu',
    published: '2026-10-12',
    modified: '2026-10-12',
    title: {
      uk: 'Гіпноз від болю: як гіпнотерапія допомагає при хронічному болі',
      ru: 'Гипноз от боли: как гипнотерапия помогает при хронической боли',
      en: 'Hypnosis for Pain: How Hypnotherapy Helps With Chronic Pain',
    },
    short: {
      uk: 'Що каже наука про гіпноз при хронічному болі, мігрені та психосоматиці — і як проходить робота.',
      ru: 'Что говорит наука о гипнозе при хронической боли, мигрени и психосоматике — и как проходит работа.',
      en: 'What research says about hypnosis for chronic pain, migraine and psychosomatic symptoms, and how sessions work.',
    },
  },
  {
    slug: 'hipnoz-pry-depresiyi',
    published: '2026-10-12',
    modified: '2026-10-12',
    title: {
      uk: 'Гіпноз при депресії: чи допомагає гіпнотерапія і як саме',
      ru: 'Гипноз при депрессии: помогает ли гипнотерапия и как именно',
      en: 'Hypnosis for Depression: Does Hypnotherapy Help and How',
    },
    short: {
      uk: 'Коли гіпнотерапія доречна при депресивних станах, що показують дослідження і чого очікувати від сесій.',
      ru: 'Когда гипнотерапия уместна при депрессивных состояниях, что показывают исследования и чего ожидать от сессий.',
      en: 'When hypnotherapy is appropriate for depressive states, what studies show and what to expect from sessions.',
    },
  },
  {
    slug: 'yak-zlizty-z-antydepresantiv',
    published: '2026-10-12',
    modified: '2026-10-12',
    title: {
      uk: 'Як відмовитися від антидепресантів безпечно: роль гіпнотерапії',
      ru: 'Как отказаться от антидепрессантов безопасно: роль гипнотерапии',
      en: 'How to Come Off Antidepressants Safely: The Role of Hypnotherapy',
    },
    short: {
      uk: 'Чому відміну препаратів узгоджують із психіатром і як гіпнотерапія підтримує на цьому шляху.',
      ru: 'Почему отмену препаратов согласуют с психиатром и как гипнотерапия поддерживает на этом пути.',
      en: 'Why tapering is done with your psychiatrist and how hypnotherapy supports you along the way.',
    },
  },
  {
    slug: 'yak-pereproshyty-mozok-dlya-hroshey',
    published: '2026-09-21',
    modified: '2026-09-21',
    title: {
      uk: 'Як перепрошити мозок для фінансового успіху: практична методика',
      ru: 'Как перепрошить мозг для финансового успеха: практическая методика',
      en: 'How to Rewire Your Brain for Financial Success: A Practical Method',
    },
    short: {
      uk: 'Проста вправа на основі нейронауки, яка допомагає вийти зі стану застою у грошах.',
      ru: 'Простое упражнение на основе нейронауки, которое помогает выйти из застоя в деньгах.',
      en: 'A simple neuroscience-based exercise that helps you break out of a money rut.',
    },
  },
];

export const isLocale = (l: string): l is Locale => (LOCALES as string[]).includes(l);

export const articleUrl = (locale: Locale, slug: string) => `${BASE_URL}/${locale}/${slug}`;
