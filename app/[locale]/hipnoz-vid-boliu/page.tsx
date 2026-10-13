import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-vid-boliu';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Thompson T. et al. (2019). The effectiveness of hypnosis for pain relief: a systematic review and meta-analysis of 85 controlled experimental trials. Neuroscience & Biobehavioral Reviews.', url: 'https://pubmed.ncbi.nlm.nih.gov/30790634/' },
  { label: 'Montgomery G.H., DuHamel K.N., Redd W.H. (2000). A meta-analysis of hypnotically induced analgesia: how effective is hypnosis? International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/10769981/' },
  { label: 'Jensen M.P., Patterson D.R. (2014). Hypnotic approaches for chronic pain management: clinical implications of recent research findings. American Psychologist.', url: 'https://pubmed.ncbi.nlm.nih.gov/24547802/' },
  { label: 'Flik C.E. et al. (2019). Efficacy of individual and group hypnotherapy in irritable bowel syndrome (IMAGINE): a multicentre randomised controlled trial. The Lancet Gastroenterology & Hepatology.', url: 'https://pubmed.ncbi.nlm.nih.gov/30473202/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз від болю: чи допомагає гіпнотерапія при хронічному болі | kolomoitsev.com',
    metaDescription: 'Гіпноз при хронічному болі, мігрені, болях у спині та психосоматиці. Що показують 85 контрольованих досліджень, як проходять сесії та скільки їх потрібно.',
    breadcrumb: 'Гіпноз від болю',
    titleLine1: 'Гіпноз від болю:',
    titleLine2: 'що реально може гіпнотерапія',
    lead: 'Біль — це не лише сигнал від тіла. Це ще й те, як мозок цей сигнал обробляє, підсилює або приглушує. Саме з цією «обробкою» працює гіпноз — і це один із найбільш досліджених напрямів гіпнотерапії.',
    sections: [
      {
        heading: 'Коли варто розглядати гіпноз при болі',
        paragraphs: ['Гіпнотерапія не замінює діагностику та лікування причини. Вона доречна, коли причина вже відома або медичне обстеження не знаходить органічного пояснення, а біль триває:'],
        bullets: [
          'Хронічний біль у спині, шиї, суглобах, що триває понад 3 місяці.',
          'Мігрені та головний біль напруги.',
          'Фіброміалгія та інші стани з «розмитим» болем.',
          'Синдром подразненого кишківника та функціональні розлади ШКТ.',
          'Психосоматичний біль: тіло «говорить» те, що не вдається прожити емоційно.',
          'Біль, що посилюється на тлі стресу, тривоги або безсоння.',
        ],
      },
      {
        heading: 'Як мозок створює біль — і чому гіпноз на це впливає',
        paragraphs: [
          'Сигнал від тканин — лише частина відчуття болю. Далі його обробляють ділянки мозку, що відповідають за увагу, емоції та очікування. Якщо ви тривожні, виснажені або очікуєте болю, ті самі сигнали відчуваються сильніше. Це не «вигадка» — це нейрофізіологія.',
          'У стані гіпнотичного транса можна змінювати саме цю обробку: зменшувати увагу до болю, змінювати його емоційне забарвлення, формувати нові автоматичні реакції тіла. Нейровізуалізаційні дослідження показують, що під час гіпнотичної анальгезії змінюється активність передньої поясної кори та інших зон, що відповідають за сприйняття болю.',
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Метааналіз 85 досліджень (2019)', text: 'Гіпноз достовірно знижує інтенсивність болю; у людей із середньою та високою гіпнабельністю ефект можна порівняти з дією анальгетиків середньої сили.' },
          { title: 'Метааналіз Montgomery et al. (2000)', text: 'Гіпнотична анальгезія дала помітне полегшення болю приблизно у 75% учасників у порівнянні з контрольними групами.' },
          { title: 'Огляд Jensen & Patterson (2014)', text: 'При хронічному болі гіпноз не поступається іншим психологічним методам і часто дає додаткову користь: кращий сон, нижчу тривогу, менше знеболювальних.' },
          { title: 'Дослідження IMAGINE (2019)', text: 'При синдромі подразненого кишківника гіпнотерапія суттєво зменшувала симптоми, а ефект зберігався через 9 місяців після завершення курсу.' },
        ],
      },
      {
        heading: 'Як проходить робота',
        steps: [
          { title: 'Розбір болю', text: 'Де, коли, за яких обставин посилюється. Яка історія стоїть за ним: травма, перенавантаження, тривалий стрес, втрата. Чи є вторинні вигоди, яких ви не помічаєте.' },
          { title: 'Навчання стану', text: 'Я навчаю входити у стан глибокого розслаблення, у якому тіло перестає «триматися» за біль. Більшість людей вже на першій сесії відчувають, що інтенсивність змінюється.' },
          { title: 'Робота з причиною', text: 'Якщо біль психосоматичний — працюємо з емоцією, що за ним стоїть. Якщо органічний — змінюємо спосіб, у який мозок його обробляє, і знімаємо страх перед болем.' },
          { title: 'Самогіпноз', text: 'Ви отримуєте техніку, яку застосовуєте самостійно. Мета — не залежність від терапевта, а контроль над власним станом.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Для гострого стресового болю або мігреней часто достатньо 2–3 сесій. Хронічний біль із тривалою історією потребує 4–6 зустрічей із перервою в 1–2 тижні, щоб нові реакції закріпилися. Результат оцінюєте ви самі: шкала болю, кількість знеболювальних, якість сну.'],
        callout: 'Гіпноз не прибирає біль, який сигналізує про реальне пошкодження і потребує лікування. Якщо біль з\'явився недавно, різко посилюється або супроводжується іншими симптомами — спочатку до лікаря.',
      },
    ],
    faq: [
      { q: 'Чи працює гіпноз, якщо причина болю фізична, а не «в голові»?', a: 'Так. Відчуття болю завжди формується в мозку, незалежно від того, звідки надійшов сигнал. Гіпноз змінює обробку сигналу, тому допомагає і при органічному болі — як доповнення до лікування, а не замість нього.' },
      { q: 'Чи можна поєднувати гіпнотерапію із знеболювальними?', a: 'Так, і зазвичай саме так і відбувається. Багато клієнтів із часом зменшують дозування — але будь-яку зміну медикаментів узгоджуйте з лікарем.' },
      { q: 'Чи підходить гіпноз при мігрені?', a: 'Так, це один із напрямів із найкращою доказовою базою. Працюємо як із частотою нападів, так і з реакцією на перші ознаки мігрені.' },
      { q: 'Я не впевнений, що мене можна загіпнотизувати.', a: 'Глибокий транс не обов\'язковий. Дослідження показують ефект і при середній гіпнабельності. На першій сесії ми перевіримо, як ваш мозок реагує на техніки, і підберемо підхід.' },
      { q: 'Чи працюєте ви онлайн?', a: 'Так, усі сесії проходять онлайн. Для роботи з болем це не має значення: ви у звичній обстановці, і техніки самогіпнозу одразу застосовуються в побуті.' },
    ],
    disclaimer: 'Ця стаття має інформаційний характер і не є медичною порадою. Гіпнотерапія не замінює діагностику та лікування у лікаря. Якщо біль гострий, різко посилюється або супроводжується іншими симптомами, зверніться до лікаря перш ніж починати будь-яку психологічну роботу.',
    references,
    cta: { title: 'Хочете спробувати на власному досвіді?', text: 'Напишіть кодове слово «Перезапуск» — коротко опишіть свій біль, і я скажу, чи зможу допомогти', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз от боли: помогает ли гипнотерапия при хронической боли | kolomoitsev.com',
    metaDescription: 'Гипноз при хронической боли, мигрени, болях в спине и психосоматике. Что показывают 85 контролируемых исследований, как проходят сессии и сколько их нужно.',
    breadcrumb: 'Гипноз от боли',
    titleLine1: 'Гипноз от боли:',
    titleLine2: 'что реально может гипнотерапия',
    lead: 'Боль — это не только сигнал от тела. Это ещё и то, как мозг этот сигнал обрабатывает, усиливает или приглушает. Именно с этой «обработкой» работает гипноз — и это одно из самых исследованных направлений гипнотерапии.',
    sections: [
      {
        heading: 'Когда стоит рассматривать гипноз при боли',
        paragraphs: ['Гипнотерапия не заменяет диагностику и лечение причины. Она уместна, когда причина уже известна или обследование не находит органического объяснения, а боль продолжается:'],
        bullets: [
          'Хроническая боль в спине, шее, суставах длительностью более 3 месяцев.',
          'Мигрени и головная боль напряжения.',
          'Фибромиалгия и другие состояния с «размытой» болью.',
          'Синдром раздражённого кишечника и функциональные расстройства ЖКТ.',
          'Психосоматическая боль: тело «говорит» то, что не удаётся прожить эмоционально.',
          'Боль, усиливающаяся на фоне стресса, тревоги или бессонницы.',
        ],
      },
      {
        heading: 'Как мозг создаёт боль — и почему гипноз на это влияет',
        paragraphs: [
          'Сигнал от тканей — лишь часть ощущения боли. Дальше его обрабатывают участки мозга, отвечающие за внимание, эмоции и ожидания. Если вы тревожны, истощены или ждёте боли, те же сигналы ощущаются сильнее. Это не «выдумка» — это нейрофизиология.',
          'В состоянии гипнотического транса можно менять именно эту обработку: снижать внимание к боли, менять её эмоциональную окраску, формировать новые автоматические реакции тела. Нейровизуализационные исследования показывают, что при гипнотической анальгезии меняется активность передней поясной коры и других зон, отвечающих за восприятие боли.',
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Метаанализ 85 исследований (2019)', text: 'Гипноз достоверно снижает интенсивность боли; у людей со средней и высокой гипнабельностью эффект сопоставим с действием анальгетиков средней силы.' },
          { title: 'Метаанализ Montgomery et al. (2000)', text: 'Гипнотическая анальгезия дала заметное облегчение боли примерно у 75% участников по сравнению с контрольными группами.' },
          { title: 'Обзор Jensen & Patterson (2014)', text: 'При хронической боли гипноз не уступает другим психологическим методам и часто даёт дополнительную пользу: лучший сон, меньше тревоги, меньше обезболивающих.' },
          { title: 'Исследование IMAGINE (2019)', text: 'При синдроме раздражённого кишечника гипнотерапия существенно уменьшала симптомы, а эффект сохранялся через 9 месяцев после завершения курса.' },
        ],
      },
      {
        heading: 'Как проходит работа',
        steps: [
          { title: 'Разбор боли', text: 'Где, когда, при каких обстоятельствах усиливается. Какая история за ней стоит: травма, перегрузка, длительный стресс, потеря. Есть ли вторичные выгоды, которых вы не замечаете.' },
          { title: 'Обучение состоянию', text: 'Я учу входить в состояние глубокого расслабления, в котором тело перестаёт «держаться» за боль. Большинство людей уже на первой сессии чувствуют, что интенсивность меняется.' },
          { title: 'Работа с причиной', text: 'Если боль психосоматическая — работаем с эмоцией, которая за ней стоит. Если органическая — меняем способ, которым мозг её обрабатывает, и снимаем страх перед болью.' },
          { title: 'Самогипноз', text: 'Вы получаете технику, которую применяете самостоятельно. Цель — не зависимость от терапевта, а контроль над собственным состоянием.' },
        ],
      },
      {
        heading: 'Сколько сессий нужно',
        paragraphs: ['Для острой стрессовой боли или мигреней часто достаточно 2–3 сессий. Хроническая боль с долгой историей требует 4–6 встреч с перерывом в 1–2 недели, чтобы новые реакции закрепились. Результат оцениваете вы сами: шкала боли, количество обезболивающих, качество сна.'],
        callout: 'Гипноз не убирает боль, которая сигнализирует о реальном повреждении и требует лечения. Если боль появилась недавно, резко усиливается или сопровождается другими симптомами — сначала к врачу.',
      },
    ],
    faq: [
      { q: 'Работает ли гипноз, если причина боли физическая, а не «в голове»?', a: 'Да. Ощущение боли всегда формируется в мозге, независимо от того, откуда пришёл сигнал. Гипноз меняет обработку сигнала, поэтому помогает и при органической боли — как дополнение к лечению, а не вместо него.' },
      { q: 'Можно ли сочетать гипнотерапию с обезболивающими?', a: 'Да, и обычно именно так и происходит. Многие клиенты со временем снижают дозировку — но любое изменение медикаментов согласуйте с врачом.' },
      { q: 'Подходит ли гипноз при мигрени?', a: 'Да, это одно из направлений с лучшей доказательной базой. Работаем как с частотой приступов, так и с реакцией на первые признаки мигрени.' },
      { q: 'Я не уверен, что меня можно загипнотизировать.', a: 'Глубокий транс не обязателен. Исследования показывают эффект и при средней гипнабельности. На первой сессии мы проверим, как ваш мозг реагирует на техники, и подберём подход.' },
      { q: 'Вы работаете онлайн?', a: 'Да, все сессии проходят онлайн. Для работы с болью это не имеет значения: вы в привычной обстановке, и техники самогипноза сразу применяются в быту.' },
    ],
    disclaimer: 'Эта статья носит информационный характер и не является медицинской рекомендацией. Гипнотерапия не заменяет диагностику и лечение у врача. Если боль острая, резко усиливается или сопровождается другими симптомами, обратитесь к врачу, прежде чем начинать любую психологическую работу.',
    references,
    cta: { title: 'Хотите попробовать на собственном опыте?', text: 'Напишите кодовое слово «Перезапуск» — коротко опишите свою боль, и я скажу, смогу ли помочь', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Pain: Does Hypnotherapy Help With Chronic Pain | kolomoitsev.com',
    metaDescription: 'Hypnosis for chronic pain, migraine, back pain and psychosomatic symptoms. What 85 controlled trials show, how sessions work and how many you need.',
    breadcrumb: 'Hypnosis for pain',
    titleLine1: 'Hypnosis for Pain:',
    titleLine2: 'what hypnotherapy can really do',
    lead: 'Pain is not just a signal from the body. It is also how the brain processes that signal, amplifies it or dampens it. That processing is exactly what hypnosis works with, and it is one of the best-researched areas of hypnotherapy.',
    sections: [
      {
        heading: 'When to consider hypnosis for pain',
        paragraphs: ['Hypnotherapy does not replace diagnosis and treatment of the cause. It is appropriate when the cause is already known, or when medical tests find no organic explanation, yet the pain persists:'],
        bullets: [
          'Chronic back, neck or joint pain lasting more than 3 months.',
          'Migraine and tension headaches.',
          'Fibromyalgia and other conditions with diffuse pain.',
          'Irritable bowel syndrome and functional gut disorders.',
          'Psychosomatic pain: the body expressing what cannot be processed emotionally.',
          'Pain that worsens with stress, anxiety or poor sleep.',
        ],
      },
      {
        heading: 'How the brain creates pain, and why hypnosis affects it',
        paragraphs: [
          'The signal from the tissues is only part of the pain experience. It is then processed by brain regions responsible for attention, emotion and expectation. If you are anxious, exhausted or expecting pain, the same signals feel stronger. This is not imagination; it is neurophysiology.',
          'In a hypnotic trance this processing can be changed: reducing attention to pain, shifting its emotional tone, and building new automatic bodily responses. Neuroimaging studies show that during hypnotic analgesia the activity of the anterior cingulate cortex and other pain-perception areas changes.',
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Meta-analysis of 85 trials (2019)', text: 'Hypnosis reliably reduces pain intensity; in people with medium to high hypnotic suggestibility the effect is comparable to moderate-strength analgesics.' },
          { title: 'Montgomery et al. meta-analysis (2000)', text: 'Hypnotic analgesia produced substantial pain relief for roughly 75% of participants compared with control groups.' },
          { title: 'Jensen & Patterson review (2014)', text: 'For chronic pain, hypnosis performs at least as well as other psychological methods and often adds benefits: better sleep, less anxiety, fewer painkillers.' },
          { title: 'IMAGINE trial (2019)', text: 'In irritable bowel syndrome, hypnotherapy significantly reduced symptoms, and the effect persisted 9 months after the course ended.' },
        ],
      },
      {
        heading: 'How the work goes',
        steps: [
          { title: 'Mapping the pain', text: 'Where, when and under what circumstances it gets worse. What story stands behind it: injury, overload, prolonged stress, loss. Whether there are hidden secondary gains you have not noticed.' },
          { title: 'Learning the state', text: 'I teach you to enter a state of deep relaxation in which the body stops "holding on" to the pain. Most people notice the intensity shift during the very first session.' },
          { title: 'Working with the cause', text: 'If the pain is psychosomatic, we work with the emotion behind it. If it is organic, we change how the brain processes it and remove the fear of pain.' },
          { title: 'Self-hypnosis', text: 'You get a technique you can use on your own. The goal is control over your own state, not dependence on a therapist.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['For acute stress-related pain or migraines, 2–3 sessions are often enough. Chronic pain with a long history needs 4–6 meetings spaced 1–2 weeks apart so the new responses settle in. You judge the result yourself: pain scale, number of painkillers, sleep quality.'],
        callout: 'Hypnosis does not remove pain that signals real damage and needs treatment. If the pain is new, rapidly worsening or accompanied by other symptoms, see a doctor first.',
      },
    ],
    faq: [
      { q: 'Does hypnosis work if the cause of pain is physical, not "in my head"?', a: 'Yes. The experience of pain is always formed in the brain, regardless of where the signal came from. Hypnosis changes how the signal is processed, so it helps with organic pain too, as a complement to treatment, not a replacement.' },
      { q: 'Can I combine hypnotherapy with painkillers?', a: 'Yes, and that is usually how it goes. Many clients reduce their dosage over time, but any medication change should be agreed with your doctor.' },
      { q: 'Is hypnosis suitable for migraine?', a: 'Yes, it is one of the areas with the strongest evidence base. We work both on the frequency of attacks and on your response to the first signs of a migraine.' },
      { q: 'I am not sure I can be hypnotized.', a: 'Deep trance is not required. Studies show an effect even with medium suggestibility. In the first session we check how your brain responds to the techniques and adjust the approach.' },
      { q: 'Do you work online?', a: 'Yes, all sessions are online. For pain work this makes no difference: you are in your usual environment, and self-hypnosis techniques transfer directly into daily life.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Hypnotherapy does not replace diagnosis and treatment by a physician. If your pain is acute, rapidly worsening or accompanied by other symptoms, see a doctor before starting any psychological work.',
    references,
    cta: { title: 'Want to try it for yourself?', text: 'Message me the code word "Restart", briefly describe your pain, and I will tell you honestly whether I can help', button: 'Message "Restart"' },
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
