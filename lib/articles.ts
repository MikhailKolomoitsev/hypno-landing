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
    slug: 'hipnoz-vid-fobiy',
    published: '2026-10-13',
    modified: '2026-10-13',
    title: {
      uk: 'Гіпноз від фобій і страхів: як прибрати страх за 1–3 сесії',
      ru: 'Гипноз от фобий и страхов: как убрать страх за 1–3 сессии',
      en: 'Hypnosis for Phobias and Fears: Removing Fear in 1–3 Sessions',
    },
    short: {
      uk: 'Чому логіка не допомагає проти фобії, що показують дослідження і як гіпноз перепрограмовує реакцію страху.',
      ru: 'Почему логика не помогает против фобии, что показывают исследования и как гипноз перепрограммирует реакцию страха.',
      en: 'Why logic does not work against a phobia, what research shows and how hypnosis reprograms the fear response.',
    },
  },
  {
    slug: 'hipnoz-vid-prokrastynatsiyi',
    published: '2026-10-13',
    modified: '2026-10-13',
    title: {
      uk: 'Гіпноз від прокрастинації та самосаботажу',
      ru: 'Гипноз от прокрастинации и самосаботажа',
      en: 'Hypnosis for Procrastination and Self-Sabotage',
    },
    short: {
      uk: 'Прокрастинація — не лінощі, а спосіб уникати емоції. Як гіпнотерапія знаходить і знімає внутрішній опір.',
      ru: 'Прокрастинация — не лень, а способ избегать эмоции. Как гипнотерапия находит и снимает внутреннее сопротивление.',
      en: 'Procrastination is not laziness but a way of avoiding emotion. How hypnotherapy finds and removes inner resistance.',
    },
  },
  {
    slug: 'hipnoz-samootsinka-vpevnenist',
    published: '2026-10-13',
    modified: '2026-10-13',
    title: {
      uk: 'Гіпноз для самооцінки та впевненості в собі',
      ru: 'Гипноз для самооценки и уверенности в себе',
      en: 'Hypnosis for Self-Esteem and Confidence',
    },
    short: {
      uk: 'Звідки береться «я недостатньо хороший», чому афірмації не працюють і як гіпноз змінює образ себе на глибині.',
      ru: 'Откуда берётся «я недостаточно хорош», почему аффирмации не работают и как гипноз меняет образ себя на глубине.',
      en: 'Where "I am not good enough" comes from, why affirmations fail and how hypnosis changes your self-image at depth.',
    },
  },
  {
    slug: 'hipnoz-vid-zalezhnostey',
    published: '2026-10-13',
    modified: '2026-10-13',
    title: {
      uk: 'Гіпноз від залежностей: алкоголь, азартні ігри, екрани',
      ru: 'Гипноз от зависимостей: алкоголь, азартные игры, экраны',
      en: 'Hypnosis for Addictions: Alcohol, Gambling, Screens',
    },
    short: {
      uk: 'Чесно про те, де гіпноз допомагає при залежностях, де потрібен нарколог, і як проходить робота з тягою та тригерами.',
      ru: 'Честно о том, где гипноз помогает при зависимостях, где нужен нарколог, и как проходит работа с тягой и триггерами.',
      en: 'Honestly about where hypnosis helps with addictions, where you need a specialist, and how work with cravings and triggers goes.',
    },
  },
  {
    slug: 'shcho-take-hipnoterapiya',
    published: '2026-10-12',
    modified: '2026-10-12',
    title: {
      uk: 'Що таке гіпнотерапія і як працює гіпноз: повний гід',
      ru: 'Что такое гипнотерапия и как работает гипноз: полный гид',
      en: 'What Is Hypnotherapy and How Hypnosis Works: A Complete Guide',
    },
    short: {
      uk: 'Що відбувається з мозком у трансі, з чим працює гіпнотерапія, чого від неї чекати і як вибрати спеціаліста.',
      ru: 'Что происходит с мозгом в трансе, с чем работает гипнотерапия, чего от неё ждать и как выбрать специалиста.',
      en: 'What happens in the brain in trance, what hypnotherapy treats, what to expect and how to choose a practitioner.',
    },
  },
  {
    slug: 'hipnoz-vid-tryvohy-panichni-ataky',
    published: '2026-10-12',
    modified: '2026-10-12',
    title: {
      uk: 'Гіпноз від тривоги та панічних атак: як це працює',
      ru: 'Гипноз от тревоги и панических атак: как это работает',
      en: 'Hypnosis for Anxiety and Panic Attacks: How It Works',
    },
    short: {
      uk: 'Чому тривога не слухає логіку, що показують метааналізи і як гіпнотерапія зупиняє панічний цикл.',
      ru: 'Почему тревога не слушает логику, что показывают метаанализы и как гипнотерапия останавливает панический цикл.',
      en: 'Why anxiety ignores logic, what meta-analyses show and how hypnotherapy breaks the panic cycle.',
    },
  },
  {
    slug: 'hipnoz-vid-bezsonnya',
    published: '2026-10-12',
    modified: '2026-10-12',
    title: {
      uk: 'Гіпноз від безсоння: як повернути сон без снодійних',
      ru: 'Гипноз от бессонницы: как вернуть сон без снотворных',
      en: 'Hypnosis for Insomnia: Restoring Sleep Without Pills',
    },
    short: {
      uk: 'Чому мозок «не вимикається», що каже наука про гіпноз і сон, і як проходить робота з безсонням.',
      ru: 'Почему мозг «не выключается», что говорит наука о гипнозе и сне, и как проходит работа с бессонницей.',
      en: 'Why the brain "won\'t switch off", what science says about hypnosis and sleep, and how insomnia work goes.',
    },
  },
  {
    slug: 'hipnoz-psykhosomatyka',
    published: '2026-10-12',
    modified: '2026-10-12',
    title: {
      uk: 'Гіпноз і психосоматика: коли тіло говорить замість вас',
      ru: 'Гипноз и психосоматика: когда тело говорит вместо вас',
      en: 'Hypnosis and Psychosomatic Symptoms: When the Body Speaks for You',
    },
    short: {
      uk: 'Як емоції стають симптомами, які стани вважаються психосоматичними і чому гіпнотерапія тут особливо доречна.',
      ru: 'Как эмоции становятся симптомами, какие состояния считаются психосоматическими и почему гипнотерапия здесь особенно уместна.',
      en: 'How emotions become symptoms, which conditions count as psychosomatic and why hypnotherapy fits so well here.',
    },
  },
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

/** Dynamic OG image for a page title (see app/api/og/route.tsx). */
export const ogImage = (title: string, locale: Locale) => ({
  url: `${BASE_URL}/api/og?title=${encodeURIComponent(title.replace(/\s*\|\s*kolomoitsev\.com$/, ''))}&locale=${locale}`,
  width: 1200,
  height: 630,
});
