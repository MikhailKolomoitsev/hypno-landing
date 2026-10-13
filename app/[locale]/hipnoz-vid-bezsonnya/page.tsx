import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-vid-bezsonnya';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Chamine I., Atchley R., Oken B.S. (2018). Hypnosis intervention effects on sleep outcomes: a systematic review. Journal of Clinical Sleep Medicine.', url: 'https://pubmed.ncbi.nlm.nih.gov/29198290/' },
  { label: 'Cordi M.J., Schlarb A.A., Rasch B. (2014). Deepening sleep by hypnotic suggestion. Sleep.', url: 'https://pubmed.ncbi.nlm.nih.gov/24882909/' },
  { label: 'Riemann D. et al. (2017). European guideline for the diagnosis and treatment of insomnia. Journal of Sleep Research.', url: 'https://pubmed.ncbi.nlm.nih.gov/28875581/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз від безсоння: як повернути сон без снодійних | kolomoitsev.com',
    metaDescription: 'Гіпнотерапія при безсонні: чому мозок «не вимикається», що показують дослідження про гіпноз і глибокий сон, як проходить робота і скільки сесій потрібно.',
    breadcrumb: 'Гіпноз від безсоння',
    titleLine1: 'Гіпноз від безсоння:',
    titleLine2: 'як повернути сон без снодійних',
    lead: 'Лягаєте вчасно, вимикаєте телефон, рахуєте овець — а мозок вмикає огляд усіх справ, розмов і тривог за день. Або засинаєте, але о третій ночі прокидаєтеся з думкою, яка не дає заснути знову. Безсоння — майже завжди не «поломка сну», а стан нервової системи, що не вміє вимикатися. І це саме те, чого вчить гіпноз.',
    sections: [
      {
        heading: 'Чому мозок не вимикається',
        paragraphs: [
          'Сон — не дія, а відпускання. Його не можна «зробити» зусиллям. Але людина з безсонням саме це й робить: намагається заснути, контролює процес, злиться, що не виходить, — і цим підтримує збудження нервової системи.',
          'З часом формується умовний рефлекс: ліжко = місце, де я не сплю і нервую. Мозок починає тривожитися вже з вечора — «а раптом знову не засну». Це називається психофізіологічним безсонням, і саме з ним гіпнотерапія працює найкраще.',
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Систематичний огляд Chamine et al. (2018)', text: 'Із 24 досліджень гіпнозу та сну 58% показали покращення, ще 12% — змішаний результат, і жодне — погіршення. Метод оцінено як безпечний і перспективний, особливо при тривожному безсонні.' },
          { title: 'Cordi, Schlarb & Rasch (2014)', text: 'У лабораторії сну гіпнотичне навіювання збільшило частку глибокого (повільнохвильового) сну на 80% у людей із високою гіпнабельністю — виміряно на ЕЕГ, а не за самозвітом.' },
          { title: 'Європейські настанови (2017)', text: 'Перша лінія лікування хронічного безсоння — не снодійні, а когнітивно-поведінкова терапія. Гіпнотерапія працює з тими ж механізмами: збудження, умовні рефлекси, переконання про сон.' },
        ],
      },
      {
        heading: 'Як проходить робота',
        steps: [
          { title: 'Карта вашого безсоння', text: 'Проблема із засинанням, пробудження вночі чи ранній підйом? Що відбувається в голові в ці моменти? Що ви вже пробували? Це визначає стратегію.' },
          { title: 'Досвід глибокого розслаблення', text: 'Уже на першій сесії ви проходите у стан, близький до межі сну. Нервова система «згадує», як це — відпускати.' },
          { title: 'Розрив рефлексу «ліжко = тривога»', text: 'У трансі перепрописуємо асоціацію: ліжко стає місцем безпеки та відпочинку, а не боротьби.' },
          { title: 'Робота з причиною', text: 'Якщо за безсонням стоїть тривога, невирішений конфлікт, горе або хронічний стрес — працюємо з ними безпосередньо.' },
          { title: 'Техніка на щовечора', text: 'Ви отримуєте аудіозапис або коротку техніку самогіпнозу для засинання. Більшість клієнтів користуються нею перші 2–3 тижні, потім потреба зникає.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Психофізіологічне безсоння зазвичай потребує 2–4 сесій. Перші зміни — легше засинання, менше нічних пробуджень — більшість помічає вже після першої. Якщо безсоння є частиною депресії або тривожного розладу, роботи більше: 4–6 зустрічей.'],
        callout: 'Безсоння може бути симптомом апное сну, гормональних порушень, побічною дією ліків. Якщо ви хропите, прокидаєтеся з головним болем або безсоння з\'явилося раптово разом з іншими симптомами — спочатку до лікаря.',
      },
    ],
    faq: [
      { q: 'Чи можна поєднувати з снодійними?', a: 'Так. Гіпнотерапія не конфліктує з препаратами. Багато клієнтів із часом відмовляються від снодійних, але це рішення ухвалюється разом із лікарем, який їх призначив.' },
      { q: 'Я прокидаюся о 3–4 ночі і не можу заснути. Це теж безсоння?', a: 'Так, це підтримувальне безсоння. Часто воно пов\'язане з тривогою або депресивним фоном. Гіпноз працює з ним так само, як із проблемами засинання.' },
      { q: 'Чи допоможе, якщо безсоння вже багато років?', a: 'Так. Тривалість впливає на кількість сесій, але рефлекс «ліжко = тривога» перепрописується незалежно від того, скільки років йому.' },
      { q: 'Що робити, якщо я засну прямо на сесії?', a: 'Нічого страшного. Це буває, і це навіть хороший знак. Але зазвичай транс — не сон; ви чуєте мій голос і залишаєтеся в контакті.' },
      { q: 'Чи працює онлайн?', a: 'Для безсоння онлайн навіть зручніше: ви у своєму ліжку, у тих самих умовах, де потрібно засинати.' },
    ],
    disclaimer: 'Стаття має інформаційний характер і не є медичною порадою. Хронічне безсоння може мати медичні причини, які виключає лікар. Гіпнотерапія не є підставою для самостійної відміни снодійних.',
    references,
    cta: { title: 'Хочете нарешті виспатися?', text: 'Напишіть кодове слово «Перезапуск» і опишіть, як виглядає ваше безсоння — я скажу, чи зможу допомогти', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз от бессонницы: как вернуть сон без снотворных | kolomoitsev.com',
    metaDescription: 'Гипнотерапия при бессоннице: почему мозг «не выключается», что показывают исследования о гипнозе и глубоком сне, как проходит работа и сколько сессий нужно.',
    breadcrumb: 'Гипноз от бессонницы',
    titleLine1: 'Гипноз от бессонницы:',
    titleLine2: 'как вернуть сон без снотворных',
    lead: 'Ложитесь вовремя, выключаете телефон, считаете овец — а мозг включает обзор всех дел, разговоров и тревог за день. Или засыпаете, но в три ночи просыпаетесь с мыслью, которая не даёт уснуть снова. Бессонница — почти всегда не «поломка сна», а состояние нервной системы, которая не умеет выключаться. И это именно то, чему учит гипноз.',
    sections: [
      {
        heading: 'Почему мозг не выключается',
        paragraphs: [
          'Сон — не действие, а отпускание. Его нельзя «сделать» усилием. Но человек с бессонницей именно это и делает: пытается уснуть, контролирует процесс, злится, что не получается, — и этим поддерживает возбуждение нервной системы.',
          'Со временем формируется условный рефлекс: кровать = место, где я не сплю и нервничаю. Мозг начинает тревожиться уже с вечера — «а вдруг снова не усну». Это называется психофизиологической бессонницей, и именно с ней гипнотерапия работает лучше всего.',
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Систематический обзор Chamine et al. (2018)', text: 'Из 24 исследований гипноза и сна 58% показали улучшение, ещё 12% — смешанный результат, и ни одно — ухудшение. Метод оценён как безопасный и перспективный, особенно при тревожной бессоннице.' },
          { title: 'Cordi, Schlarb & Rasch (2014)', text: 'В лаборатории сна гипнотическое внушение увеличило долю глубокого (медленноволнового) сна на 80% у людей с высокой гипнабельностью — измерено на ЭЭГ, а не по самоотчёту.' },
          { title: 'Европейские рекомендации (2017)', text: 'Первая линия лечения хронической бессонницы — не снотворные, а когнитивно-поведенческая терапия. Гипнотерапия работает с теми же механизмами: возбуждение, условные рефлексы, убеждения о сне.' },
        ],
      },
      {
        heading: 'Как проходит работа',
        steps: [
          { title: 'Карта вашей бессонницы', text: 'Проблема с засыпанием, пробуждения ночью или ранний подъём? Что происходит в голове в эти моменты? Что вы уже пробовали? Это определяет стратегию.' },
          { title: 'Опыт глубокого расслабления', text: 'Уже на первой сессии вы проходите в состояние, близкое к границе сна. Нервная система «вспоминает», как это — отпускать.' },
          { title: 'Разрыв рефлекса «кровать = тревога»', text: 'В трансе переписываем ассоциацию: кровать становится местом безопасности и отдыха, а не борьбы.' },
          { title: 'Работа с причиной', text: 'Если за бессонницей стоит тревога, нерешённый конфликт, горе или хронический стресс — работаем с ними напрямую.' },
          { title: 'Техника на каждый вечер', text: 'Вы получаете аудиозапись или короткую технику самогипноза для засыпания. Большинство клиентов пользуются ею первые 2–3 недели, потом потребность исчезает.' },
        ],
      },
      {
        heading: 'Сколько сеансов нужно',
        paragraphs: ['Психофизиологическая бессонница обычно требует 2–4 сессий. Первые изменения — легче засыпание, меньше ночных пробуждений — большинство замечает уже после первой. Если бессонница — часть депрессии или тревожного расстройства, работы больше: 4–6 встреч.'],
        callout: 'Бессонница может быть симптомом апноэ сна, гормональных нарушений, побочным действием лекарств. Если вы храпите, просыпаетесь с головной болью или бессонница появилась внезапно вместе с другими симптомами — сначала к врачу.',
      },
    ],
    faq: [
      { q: 'Можно ли сочетать со снотворными?', a: 'Да. Гипнотерапия не конфликтует с препаратами. Многие клиенты со временем отказываются от снотворных, но это решение принимается вместе с врачом, который их назначил.' },
      { q: 'Я просыпаюсь в 3–4 ночи и не могу уснуть. Это тоже бессонница?', a: 'Да, это поддерживающая бессонница. Часто она связана с тревогой или депрессивным фоном. Гипноз работает с ней так же, как с проблемами засыпания.' },
      { q: 'Поможет ли, если бессонница уже много лет?', a: 'Да. Длительность влияет на количество сессий, но рефлекс «кровать = тревога» переписывается независимо от того, сколько ему лет.' },
      { q: 'Что делать, если я усну прямо на сессии?', a: 'Ничего страшного. Это бывает, и это даже хороший знак. Но обычно транс — не сон; вы слышите мой голос и остаётесь в контакте.' },
      { q: 'Работает ли онлайн?', a: 'Для бессонницы онлайн даже удобнее: вы в своей кровати, в тех же условиях, где нужно засыпать.' },
    ],
    disclaimer: 'Статья носит информационный характер и не является медицинской рекомендацией. Хроническая бессонница может иметь медицинские причины, которые исключает врач. Гипнотерапия не является основанием для самостоятельной отмены снотворных.',
    references,
    cta: { title: 'Хотите наконец выспаться?', text: 'Напишите кодовое слово «Перезапуск» и опишите, как выглядит ваша бессонница — я скажу, смогу ли помочь', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Insomnia: Restoring Sleep Without Pills | kolomoitsev.com',
    metaDescription: 'Hypnotherapy for insomnia: why the brain "won\'t switch off", what research shows about hypnosis and deep sleep, how the work goes and how many sessions you need.',
    breadcrumb: 'Hypnosis for insomnia',
    titleLine1: 'Hypnosis for Insomnia:',
    titleLine2: 'restoring sleep without pills',
    lead: 'You go to bed on time, switch off your phone, count sheep, and your brain starts replaying every task, conversation and worry of the day. Or you fall asleep but wake at 3 a.m. with a thought that will not let you drift off again. Insomnia is almost never a "broken sleep mechanism"; it is a nervous system that does not know how to switch off. And that is exactly what hypnosis teaches.',
    sections: [
      {
        heading: 'Why the brain will not switch off',
        paragraphs: [
          'Sleep is not an action but a letting go. It cannot be "done" by effort. Yet that is exactly what a person with insomnia does: tries to fall asleep, monitors the process, gets angry that it is not working, and thereby keeps the nervous system aroused.',
          'Over time a conditioned reflex forms: bed = the place where I do not sleep and get anxious. The brain starts worrying in the evening already: "what if I can\'t sleep again". This is called psychophysiological insomnia, and it is exactly what hypnotherapy works with best.',
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Chamine et al. systematic review (2018)', text: 'Of 24 studies on hypnosis and sleep, 58% showed improvement, 12% mixed results and none showed worsening. The method was rated safe and promising, especially for anxiety-related insomnia.' },
          { title: 'Cordi, Schlarb & Rasch (2014)', text: 'In a sleep laboratory, hypnotic suggestion increased the share of deep (slow-wave) sleep by 80% in highly suggestible participants, measured by EEG rather than self-report.' },
          { title: 'European guideline (2017)', text: 'The first-line treatment for chronic insomnia is not sleeping pills but cognitive behavioral therapy. Hypnotherapy works with the same mechanisms: arousal, conditioned reflexes, beliefs about sleep.' },
        ],
      },
      {
        heading: 'How the work goes',
        steps: [
          { title: 'Mapping your insomnia', text: 'Trouble falling asleep, waking at night or waking too early? What goes on in your head at those moments? What have you tried? This determines the strategy.' },
          { title: 'Experiencing deep relaxation', text: 'In the very first session you move into a state close to the edge of sleep. The nervous system "remembers" what letting go feels like.' },
          { title: 'Breaking the "bed = anxiety" reflex', text: 'In trance we rewrite the association: bed becomes a place of safety and rest, not struggle.' },
          { title: 'Working with the cause', text: 'If anxiety, an unresolved conflict, grief or chronic stress lies behind the insomnia, we work with it directly.' },
          { title: 'A technique for every evening', text: 'You get an audio recording or a short self-hypnosis technique for falling asleep. Most clients use it for the first 2–3 weeks, after which the need fades.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['Psychophysiological insomnia usually takes 2–4 sessions. The first changes, easier sleep onset and fewer night wakings, are noticed by most people after the first one. If insomnia is part of depression or an anxiety disorder, there is more work: 4–6 meetings.'],
        callout: 'Insomnia can be a symptom of sleep apnea, hormonal disorders or a side effect of medication. If you snore, wake with headaches, or the insomnia appeared suddenly alongside other symptoms, see a doctor first.',
      },
    ],
    faq: [
      { q: 'Can I combine this with sleeping pills?', a: 'Yes. Hypnotherapy does not conflict with medication. Many clients eventually stop sleeping pills, but that decision is made with the doctor who prescribed them.' },
      { q: 'I wake at 3–4 a.m. and cannot get back to sleep. Is that insomnia too?', a: 'Yes, that is sleep-maintenance insomnia. It is often linked to anxiety or a depressive background. Hypnosis works with it the same way as with sleep-onset problems.' },
      { q: 'Will it help if I have had insomnia for many years?', a: 'Yes. Duration affects the number of sessions, but the "bed = anxiety" reflex can be rewritten regardless of how old it is.' },
      { q: 'What if I fall asleep during the session?', a: 'No problem. It happens, and it is even a good sign. But trance is usually not sleep; you hear my voice and stay in contact.' },
      { q: 'Does it work online?', a: 'For insomnia, online is actually more convenient: you are in your own bed, in the very conditions where you need to fall asleep.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Chronic insomnia can have medical causes that a physician rules out. Hypnotherapy is not grounds for stopping sleep medication on your own.',
    references,
    cta: { title: 'Want to finally get a full night\'s sleep?', text: 'Message me the code word "Restart" and describe what your insomnia looks like. I will tell you whether I can help', button: 'Message "Restart"' },
  },
};

export function generateStaticParams() { return LOCALES.map((locale) => ({ locale })); }

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
