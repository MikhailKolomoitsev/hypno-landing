import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const SLUG = 'yak-pereproshyty-mozok-dlya-hroshey';
const VIDEO_URL = 'https://www.youtube.com/watch?v=v4DythQWad8';

type Locale = 'uk' | 'ru' | 'en';

const content = {
  uk: {
    metaTitle: 'Як перепрошити мозок для фінансового успіху: практична методика | kolomoitsev.com',
    metaDescription: 'Проста вправа на основі нейронауки, яка допомагає вийти зі стану застою у грошах: три версії особистості, робота з фактами та свідоме перемикання.',
    home: 'Головна',
    book: 'Записатися',
    breadcrumb: 'Як перепрошити мозок для грошей',
    titleLine1: 'Як перепрошити мозок',
    titleLine2: 'для фінансового успіху',
    lead: 'Багато людей стикаються з внутрішніми бар\'єрами, коли йдеться про гроші. Автор відео, блогер «Мечтатель», пропонує підхід на основі нейронауки, який допомагає швидко вийти зі стану застою.',
    modesTitle: 'Три версії вашої особистості',
    modesIntro: 'Кожна людина має три основні «прошивки», або патерни поведінки, які визначають її результати:',
    modes: [
      { name: 'Режим невдахи', text: 'Стан, у якому ви відчуваєте саботаж, брак енергії та відсутність віри в успіх.' },
      { name: 'Режим норми', text: 'Стабільний, але середній стан, у якому результати передбачувані.' },
      { name: 'Режим успіху (Prime)', text: 'Стан потоку, у якому ви максимально ефективні та успішні.' },
    ],
    stepsTitle: 'Покрокова інструкція вправи',
    steps: [
      {
        title: 'Візуалізація сценаріїв',
        text: 'Розділіть аркуш А4 на три зони: нижню, середню та верхню. Запишіть свою актуальну фінансову ціль. Пропишіть різні варіанти майбутнього — від негативного (провал) до X2 та X10 (успіх). Це послаблює контроль мозку та знімає напругу.',
      },
      {
        title: 'Робота з фактами',
        text: 'Заповніть кожну зону реальними прикладами зі свого минулого:',
        list: [
          'Низ: згадайте ситуацію, коли ви діяли нерезультативно (у прикладі автора — 2022 рік).',
          'Середина: запишіть три факти ваших успіхів середньої значущості, наприклад запуск першого бізнесу або перші прибутки.',
          'Верх: опишіть моменти везіння або «екстраординарні» успіхи, коли результат перевершив очікування.',
        ],
      },
      {
        title: 'Свідоме перемикання',
        text: 'Оберіть позитивну версію себе, обведіть позитивні факти та проведіть лінію до сьогоднішнього «Я». Ця майже медитативна дія допомагає «під\'єднатися» до успішних нейронних магістралей.',
      },
    ],
    whyTitle: 'Чому це працює?',
    why: [
      'Автор пояснює ефективність вправи через концепцію залежної від стану пам\'яті (State Dependent Memory): спогади дозволяють активувати потрібні патерни поведінки.',
      'Крім того, вправа впливає на ретикулярну активуючу систему — фільтр сприйняття та на мережу пасивного режиму роботи мозку (Default Mode Network). Завдяки цьому мозок автоматично шукає нові шляхи до реалізації поставлених цілей.',
    ],
    source: 'Джерело натхнення — відео блогера «Мечтатель»',
    watch: 'Дивитися відео на YouTube',
    ctaTitle: 'Хочете закріпити зміни на глибшому рівні?',
    ctaText: 'Напишіть кодове слово «Перезапуск» — і я безкоштовно проконсультую по вашій ситуації',
    ctaButton: 'Написати «Перезапуск»',
    author: 'Certified Master Hypnotherapist · Михайло Коломийцев',
  },
  ru: {
    metaTitle: 'Как перепрошить мозг для финансового успеха: практическая методика | kolomoitsev.com',
    metaDescription: 'Простое упражнение на основе нейронауки, которое помогает выйти из состояния застоя в деньгах: три версии личности, работа с фактами и осознанное переключение.',
    home: 'Главная',
    book: 'Записаться',
    breadcrumb: 'Как перепрошить мозг для денег',
    titleLine1: 'Как перепрошить мозг',
    titleLine2: 'для финансового успеха',
    lead: 'Многие люди сталкиваются с внутренними барьерами, когда речь заходит о деньгах. Автор видео, блогер «Мечтатель», предлагает подход на основе нейронауки, который помогает быстро выйти из состояния застоя.',
    modesTitle: 'Три версии вашей личности',
    modesIntro: 'У каждого человека есть три основные «прошивки», или паттерна поведения, которые определяют его результаты:',
    modes: [
      { name: 'Режим неудачника', text: 'Состояние, в котором вы чувствуете саботаж, нехватку энергии и отсутствие веры в успех.' },
      { name: 'Режим нормы', text: 'Стабильное, но среднее состояние, в котором результаты предсказуемы.' },
      { name: 'Режим успеха (Prime)', text: 'Состояние потока, в котором вы максимально эффективны и успешны.' },
    ],
    stepsTitle: 'Пошаговая инструкция упражнения',
    steps: [
      {
        title: 'Визуализация сценариев',
        text: 'Разделите лист А4 на три зоны: нижнюю, среднюю и верхнюю. Запишите свою актуальную финансовую цель. Пропишите разные варианты будущего — от негативного (провал) до X2 и X10 (успех). Это ослабляет контроль мозга и снимает напряжение.',
      },
      {
        title: 'Работа с фактами',
        text: 'Заполните каждую зону реальными примерами из своего прошлого:',
        list: [
          'Низ: вспомните ситуацию, когда вы действовали нерезультативно (в примере автора — 2022 год).',
          'Середина: запишите три факта ваших успехов средней значимости, например запуск первого бизнеса или первые прибыли.',
          'Верх: опишите моменты везения или «экстраординарные» успехи, когда результат превзошёл ожидания.',
        ],
      },
      {
        title: 'Осознанное переключение',
        text: 'Выберите позитивную версию себя, обведите позитивные факты и проведите линию к сегодняшнему «Я». Это почти медитативное действие помогает «подключиться» к успешным нейронным магистралям.',
      },
    ],
    whyTitle: 'Почему это работает?',
    why: [
      'Автор объясняет эффективность упражнения через концепцию состояние-зависимой памяти (State Dependent Memory): воспоминания позволяют активировать нужные паттерны поведения.',
      'Кроме того, упражнение влияет на ретикулярную активирующую систему — фильтр восприятия — и на сеть пассивного режима работы мозга (Default Mode Network). Благодаря этому мозг автоматически ищет новые пути к реализации поставленных целей.',
    ],
    source: 'Источник вдохновения — видео блогера «Мечтатель»',
    watch: 'Смотреть видео на YouTube',
    ctaTitle: 'Хотите закрепить изменения на более глубоком уровне?',
    ctaText: 'Напишите кодовое слово «Перезапуск» — и я бесплатно проконсультирую по вашей ситуации',
    ctaButton: 'Написать «Перезапуск»',
    author: 'Certified Master Hypnotherapist · Михаил Коломойцев',
  },
  en: {
    metaTitle: 'How to Rewire Your Brain for Financial Success: A Practical Method | kolomoitsev.com',
    metaDescription: 'A simple neuroscience-based exercise that helps you break out of a money rut: three versions of your personality, working with facts and conscious switching.',
    home: 'Home',
    book: 'Book a session',
    breadcrumb: 'Rewire your brain for money',
    titleLine1: 'How to Rewire Your Brain',
    titleLine2: 'for Financial Success',
    lead: 'Many people run into inner barriers when it comes to money. The video author, blogger "Mechtatel" (The Dreamer), offers a neuroscience-based approach that helps you get out of a rut quickly.',
    modesTitle: 'Three versions of your personality',
    modesIntro: 'Everyone has three core "firmwares", or behavior patterns, that shape their results:',
    modes: [
      { name: 'Loser mode', text: 'A state where you feel self-sabotage, low energy and no belief in success.' },
      { name: 'Normal mode', text: 'A stable but average state where results are predictable.' },
      { name: 'Success mode (Prime)', text: 'A state of flow where you are at your most effective and successful.' },
    ],
    stepsTitle: 'Step-by-step exercise',
    steps: [
      {
        title: 'Visualize the scenarios',
        text: 'Divide an A4 sheet into three zones: bottom, middle and top. Write down your current financial goal. Then describe different possible futures, from negative (failure) to X2 and X10 (success). This loosens the brain\'s grip on control and releases tension.',
      },
      {
        title: 'Work with facts',
        text: 'Fill each zone with real examples from your past:',
        list: [
          'Bottom: recall a situation where you acted ineffectively (in the author\'s example, 2022).',
          'Middle: write down three facts about moderate successes, such as launching your first business or making your first profits.',
          'Top: describe moments of luck or "extraordinary" wins, where the result exceeded your expectations.',
        ],
      },
      {
        title: 'Conscious switching',
        text: 'Choose the positive version of yourself, circle the positive facts and draw a line to today\'s "you". This near-meditative act helps you "plug in" to successful neural pathways.',
      },
    ],
    whyTitle: 'Why does it work?',
    why: [
      'The author explains the exercise through State Dependent Memory: recalling memories lets you activate the behavior patterns tied to them.',
      'It also engages the reticular activating system, the brain\'s perception filter, and the Default Mode Network. As a result, the brain automatically starts looking for new ways to reach your goals.',
    ],
    source: 'Inspired by a video from the blogger "Mechtatel"',
    watch: 'Watch the video on YouTube',
    ctaTitle: 'Want to anchor the change at a deeper level?',
    ctaText: 'Message me the code word "Restart" and I will give you a free consultation on your situation',
    ctaButton: 'Message "Restart"',
    author: 'Certified Master Hypnotherapist · Mykhailo Kolomoitsev',
  },
} satisfies Record<Locale, unknown>;

type Step = { title: string; text: string; list?: string[] };

const isLocale = (l: string): l is Locale => l in content;

export function generateStaticParams() {
  return (Object.keys(content) as Locale[]).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = content[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `https://kolomoitsev.com/${locale}/${SLUG}`,
      languages: {
        uk: `https://kolomoitsev.com/uk/${SLUG}`,
        ru: `https://kolomoitsev.com/ru/${SLUG}`,
        en: `https://kolomoitsev.com/en/${SLUG}`,
      },
    },
  };
}

export default async function Article({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = content[locale];

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
        <a
          href="https://t.me/mykhailo_elmejor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black text-sm font-semibold transition-all"
        >
          <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={14} height={14} />
          {t.book}
        </a>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">
        <nav className="text-xs text-gray-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-gray-400">{t.home}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">{t.breadcrumb}</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          {t.titleLine1}<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            {t.titleLine2}
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">{t.lead}</p>

        <section className="space-y-10 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">{t.modesTitle}</h2>
            <p className="mb-4">{t.modesIntro}</p>
            <div className="space-y-3">
              {t.modes.map((m) => (
                <div key={m.name} className="p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="text-green-400 font-medium text-sm mb-1">{m.name}</div>
                  <div className="text-gray-400 text-sm">{m.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">{t.stepsTitle}</h2>
            <div className="space-y-3">
              {(t.steps as Step[]).map((s, i) => (
                <div key={s.title} className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-green-500/15 border border-green-500/20 text-green-400 text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">{s.title}</div>
                    <p className="text-gray-400 text-sm">{s.text}</p>
                    {s.list && (
                      <ul className="mt-2 space-y-1 list-disc pl-5 text-gray-400 text-sm">
                        {s.list.map((li) => <li key={li}>{li}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">{t.whyTitle}</h2>
            <div className="space-y-3">
              {t.why.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
            <p className="text-gray-300 mb-2">{t.source}</p>
            <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-medium">
              {t.watch} →
            </a>
          </div>
        </section>

        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">{t.ctaTitle}</h2>
          <p className="text-gray-400 text-sm mb-6">{t.ctaText}</p>
          <a
            href="https://t.me/mykhailo_elmejor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all hover:scale-105 text-sm shadow-lg shadow-green-600/30"
          >
            <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={18} height={18} />
            {t.ctaButton}
          </a>
          <p className="mt-4 text-xs text-gray-600">{t.author}</p>
        </div>
      </main>
    </div>
  );
}
