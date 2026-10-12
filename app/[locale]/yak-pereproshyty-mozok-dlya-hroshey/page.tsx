import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'yak-pereproshyty-mozok-dlya-hroshey';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;
const VIDEO_URL = 'https://www.youtube.com/watch?v=v4DythQWad8';

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Як перепрошити мозок для фінансового успіху: практична методика | kolomoitsev.com',
    metaDescription: 'Проста вправа на основі нейронауки, яка допомагає вийти зі стану застою у грошах: три версії особистості, робота з фактами та свідоме перемикання.',
    breadcrumb: 'Як перепрошити мозок для грошей',
    titleLine1: 'Як перепрошити мозок',
    titleLine2: 'для фінансового успіху',
    lead: 'Багато людей стикаються з внутрішніми бар\'єрами, коли йдеться про гроші. Автор відео, блогер «Мечтатель», пропонує підхід на основі нейронауки, який допомагає швидко вийти зі стану застою.',
    sections: [
      {
        heading: 'Три версії вашої особистості',
        paragraphs: ['Кожна людина має три основні «прошивки», або патерни поведінки, які визначають її результати:'],
        cards: [
          { title: 'Режим невдахи', text: 'Стан, у якому ви відчуваєте саботаж, брак енергії та відсутність віри в успіх.' },
          { title: 'Режим норми', text: 'Стабільний, але середній стан, у якому результати передбачувані.' },
          { title: 'Режим успіху (Prime)', text: 'Стан потоку, у якому ви максимально ефективні та успішні.' },
        ],
      },
      {
        heading: 'Покрокова інструкція вправи',
        steps: [
          { title: 'Візуалізація сценаріїв', text: 'Розділіть аркуш А4 на три зони: нижню, середню та верхню. Запишіть свою актуальну фінансову ціль. Пропишіть різні варіанти майбутнього — від негативного (провал) до X2 та X10 (успіх). Це послаблює контроль мозку та знімає напругу.' },
          { title: 'Робота з фактами', text: 'Заповніть кожну зону реальними прикладами зі свого минулого:', list: [
            'Низ: згадайте ситуацію, коли ви діяли нерезультативно (у прикладі автора — 2022 рік).',
            'Середина: запишіть три факти ваших успіхів середньої значущості, наприклад запуск першого бізнесу або перші прибутки.',
            'Верх: опишіть моменти везіння або «екстраординарні» успіхи, коли результат перевершив очікування.',
          ] },
          { title: 'Свідоме перемикання', text: 'Оберіть позитивну версію себе, обведіть позитивні факти та проведіть лінію до сьогоднішнього «Я». Ця майже медитативна дія допомагає «під\'єднатися» до успішних нейронних магістралей.' },
        ],
      },
      {
        heading: 'Чому це працює?',
        paragraphs: [
          'Автор пояснює ефективність вправи через концепцію залежної від стану пам\'яті (State Dependent Memory): спогади дозволяють активувати потрібні патерни поведінки.',
          'Крім того, вправа впливає на ретикулярну активуючу систему — фільтр сприйняття — та на мережу пасивного режиму роботи мозку (Default Mode Network). Завдяки цьому мозок автоматично шукає нові шляхи до реалізації поставлених цілей.',
        ],
      },
    ],
    source: { text: 'Джерело натхнення — відео блогера «Мечтатель»', url: VIDEO_URL, label: 'Дивитися відео на YouTube' },
    cta: { title: 'Хочете закріпити зміни на глибшому рівні?', text: 'Напишіть кодове слово «Перезапуск» — і я безкоштовно проконсультую по вашій ситуації', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Как перепрошить мозг для финансового успеха: практическая методика | kolomoitsev.com',
    metaDescription: 'Простое упражнение на основе нейронауки, которое помогает выйти из состояния застоя в деньгах: три версии личности, работа с фактами и осознанное переключение.',
    breadcrumb: 'Как перепрошить мозг для денег',
    titleLine1: 'Как перепрошить мозг',
    titleLine2: 'для финансового успеха',
    lead: 'Многие люди сталкиваются с внутренними барьерами, когда речь заходит о деньгах. Автор видео, блогер «Мечтатель», предлагает подход на основе нейронауки, который помогает быстро выйти из состояния застоя.',
    sections: [
      {
        heading: 'Три версии вашей личности',
        paragraphs: ['У каждого человека есть три основные «прошивки», или паттерна поведения, которые определяют его результаты:'],
        cards: [
          { title: 'Режим неудачника', text: 'Состояние, в котором вы чувствуете саботаж, нехватку энергии и отсутствие веры в успех.' },
          { title: 'Режим нормы', text: 'Стабильное, но среднее состояние, в котором результаты предсказуемы.' },
          { title: 'Режим успеха (Prime)', text: 'Состояние потока, в котором вы максимально эффективны и успешны.' },
        ],
      },
      {
        heading: 'Пошаговая инструкция упражнения',
        steps: [
          { title: 'Визуализация сценариев', text: 'Разделите лист А4 на три зоны: нижнюю, среднюю и верхнюю. Запишите свою актуальную финансовую цель. Пропишите разные варианты будущего — от негативного (провал) до X2 и X10 (успех). Это ослабляет контроль мозга и снимает напряжение.' },
          { title: 'Работа с фактами', text: 'Заполните каждую зону реальными примерами из своего прошлого:', list: [
            'Низ: вспомните ситуацию, когда вы действовали нерезультативно (в примере автора — 2022 год).',
            'Середина: запишите три факта ваших успехов средней значимости, например запуск первого бизнеса или первые прибыли.',
            'Верх: опишите моменты везения или «экстраординарные» успехи, когда результат превзошёл ожидания.',
          ] },
          { title: 'Осознанное переключение', text: 'Выберите позитивную версию себя, обведите позитивные факты и проведите линию к сегодняшнему «Я». Это почти медитативное действие помогает «подключиться» к успешным нейронным магистралям.' },
        ],
      },
      {
        heading: 'Почему это работает?',
        paragraphs: [
          'Автор объясняет эффективность упражнения через концепцию состояние-зависимой памяти (State Dependent Memory): воспоминания позволяют активировать нужные паттерны поведения.',
          'Кроме того, упражнение влияет на ретикулярную активирующую систему — фильтр восприятия — и на сеть пассивного режима работы мозга (Default Mode Network). Благодаря этому мозг автоматически ищет новые пути к реализации поставленных целей.',
        ],
      },
    ],
    source: { text: 'Источник вдохновения — видео блогера «Мечтатель»', url: VIDEO_URL, label: 'Смотреть видео на YouTube' },
    cta: { title: 'Хотите закрепить изменения на более глубоком уровне?', text: 'Напишите кодовое слово «Перезапуск» — и я бесплатно проконсультирую по вашей ситуации', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'How to Rewire Your Brain for Financial Success: A Practical Method | kolomoitsev.com',
    metaDescription: 'A simple neuroscience-based exercise that helps you break out of a money rut: three versions of your personality, working with facts and conscious switching.',
    breadcrumb: 'Rewire your brain for money',
    titleLine1: 'How to Rewire Your Brain',
    titleLine2: 'for Financial Success',
    lead: 'Many people run into inner barriers when it comes to money. The video author, blogger "Mechtatel" (The Dreamer), offers a neuroscience-based approach that helps you get out of a rut quickly.',
    sections: [
      {
        heading: 'Three versions of your personality',
        paragraphs: ['Everyone has three core "firmwares", or behavior patterns, that shape their results:'],
        cards: [
          { title: 'Loser mode', text: 'A state where you feel self-sabotage, low energy and no belief in success.' },
          { title: 'Normal mode', text: 'A stable but average state where results are predictable.' },
          { title: 'Success mode (Prime)', text: 'A state of flow where you are at your most effective and successful.' },
        ],
      },
      {
        heading: 'Step-by-step exercise',
        steps: [
          { title: 'Visualize the scenarios', text: 'Divide an A4 sheet into three zones: bottom, middle and top. Write down your current financial goal. Then describe different possible futures, from negative (failure) to X2 and X10 (success). This loosens the brain\'s grip on control and releases tension.' },
          { title: 'Work with facts', text: 'Fill each zone with real examples from your past:', list: [
            'Bottom: recall a situation where you acted ineffectively (in the author\'s example, 2022).',
            'Middle: write down three facts about moderate successes, such as launching your first business or making your first profits.',
            'Top: describe moments of luck or "extraordinary" wins, where the result exceeded your expectations.',
          ] },
          { title: 'Conscious switching', text: 'Choose the positive version of yourself, circle the positive facts and draw a line to today\'s "you". This near-meditative act helps you "plug in" to successful neural pathways.' },
        ],
      },
      {
        heading: 'Why does it work?',
        paragraphs: [
          'The author explains the exercise through State Dependent Memory: recalling memories lets you activate the behavior patterns tied to them.',
          'It also engages the reticular activating system, the brain\'s perception filter, and the Default Mode Network. As a result, the brain automatically starts looking for new ways to reach your goals.',
        ],
      },
    ],
    source: { text: 'Inspired by a video from the blogger "Mechtatel"', url: VIDEO_URL, label: 'Watch the video on YouTube' },
    cta: { title: 'Want to anchor the change at a deeper level?', text: 'Message me the code word "Restart" and I will give you a free consultation on your situation', button: 'Message "Restart"' },
  },
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return articleMetadata(locale, meta, content[locale]);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ArticleLayout locale={locale} meta={meta} t={content[locale]} />;
}
