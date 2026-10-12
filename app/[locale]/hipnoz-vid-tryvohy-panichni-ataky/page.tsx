import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-vid-tryvohy-panichni-ataky';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Valentine K.E., Milling L.S., Clark L.J., Moriarty C.L. (2019). The efficacy of hypnosis as a treatment for anxiety: a meta-analysis. International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Valentine+Milling+2019+efficacy+of+hypnosis+treatment+anxiety+meta-analysis' },
  { label: 'Hammond D.C. (2010). Hypnosis in the treatment of anxiety- and stress-related disorders. Expert Review of Neurotherapeutics.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Hammond+2010+hypnosis+treatment+anxiety+stress-related+disorders' },
  { label: 'Jiang H. et al. (2017). Brain activity and functional connectivity associated with hypnosis. Cerebral Cortex.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Jiang+Spiegel+2017+brain+activity+functional+connectivity+hypnosis+Cerebral+Cortex' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз від тривоги та панічних атак: як це працює | kolomoitsev.com',
    metaDescription: 'Гіпнотерапія при тривожності та панічних атаках: чому тривога не слухає логіку, що показує метааналіз 2019 року, як проходять сесії та скільки їх потрібно.',
    breadcrumb: 'Гіпноз від тривоги',
    titleLine1: 'Гіпноз від тривоги',
    titleLine2: 'та панічних атак',
    lead: 'Ви знаєте, що боятися нічого. Ви це собі пояснювали сто разів. І все одно серце калатає, повітря не вистачає, а думка «зараз щось станеться» не відпускає. Тривога не слухає аргументів — бо живе не там, де аргументи. Саме тому гіпноз із нею працює.',
    sections: [
      {
        heading: 'Чому тривога не піддається логіці',
        paragraphs: [
          'Тривожна реакція запускається мигдалиною — ділянкою мозку, яка оцінює загрозу за мілісекунди, задовго до того, як підключиться кора з її аргументами. Коли мигдалина «вирішила», що небезпека є, тіло вже отримало команду: адреналін, прискорене серцебиття, поверхневе дихання.',
          'Панічна атака — це той самий механізм, що замкнувся в петлю: тілесні відчуття лякають → страх посилює відчуття → відчуття ще більше лякають. За 10–20 хвилин петля вичерпується сама, але за цей час встигає закріпитися страх перед наступним нападом. І людина починає уникати місць, ситуацій, іноді — виходу з дому.',
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Метааналіз Valentine et al. (2019)', text: '15 досліджень, 17 порівнянь: учасник, який проходив гіпноз, у середньому показав менше тривоги, ніж 79% контрольної групи. На контрольних вимірах через час ефект зростав — до 84%.' },
          { title: 'Гіпноз + КПТ сильніше, ніж КПТ', text: 'Той самий метааналіз: гіпноз у поєднанні з іншими психологічними методами дав більший ефект, ніж ці методи окремо.' },
          { title: 'Огляд Hammond (2010)', text: 'Гіпноз визнано ефективним методом для тривожних і стресових розладів, зокрема для генералізованої тривоги, панічних атак і фобій.' },
        ],
      },
      {
        heading: 'Як гіпнотерапія зупиняє тривожний цикл',
        steps: [
          { title: 'Навчання стану спокою', text: 'Перше, що ви отримуєте — реальний, тілесний досвід глибокого спокою. Для людини з хронічною тривогою це часто перший такий досвід за роки. Він стає точкою опори.' },
          { title: 'Робота з тригерами', text: 'Знаходимо, що саме запускає реакцію: ситуація, думка, тілесне відчуття. У трансі змінюємо автоматичну реакцію на цей тригер.' },
          { title: 'Пошук кореня', text: 'Часто за «безпричинною» тривогою стоїть конкретна подія або період: втрата, небезпека, хронічний стрес у дитинстві. Регресія допомагає знайти й завершити її.' },
          { title: 'Самогіпноз', text: 'Ви отримуєте техніку на 2–3 хвилини, яка зупиняє наростання паніки. Це знімає страх перед нападом — а саме цей страх тримає цикл.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Панічні атаки та генералізована тривога зазвичай потребують 3–5 сесій. Конкретна фобія — 1–3. Перший відчутний результат — зниження інтенсивності та частоти нападів — більшість помічає після 1–2 зустрічей.'],
        callout: 'Якщо тривога супроводжується депресією, думками про самопошкодження або триває без перерв багато місяців — спочатку консультація психіатра. Гіпнотерапія може йти паралельно з лікуванням.',
      },
    ],
    faq: [
      { q: 'Чи не стане мені гірше від трансу, якщо я тривожний?', a: 'Ні. Транс — це стан розслаблення, протилежний тривозі. На першій сесії ми йдемо поступово, і ви в будь-який момент можете відкрити очі.' },
      { q: 'Я приймаю заспокійливі. Чи можна поєднувати?', a: 'Так. Препарати не заважають гіпнозу. Будь-які зміни в дозуваннях — лише з лікарем.' },
      { q: 'Чи допоможе, якщо панічні атаки вже 5 років?', a: 'Так. Тривалість проблеми впливає на кількість сесій, але не на принципову можливість результату.' },
      { q: 'А якщо напад станеться прямо під час сесії?', a: 'Це буває рідко, але якщо так — це навіть корисно: ми відпрацюємо зупинку нападу наживо, у безпечних умовах.' },
      { q: 'Чи працюєте ви з соціальною тривогою?', a: 'Так. Страх оцінки, публічних виступів, спілкування — це один із найчастіших запитів.' },
    ],
    disclaimer: 'Стаття має інформаційний характер і не є медичною порадою. Тривожні розлади діагностує лікар. Гіпнотерапія не замінює консультацію психіатра та не є підставою для зміни призначених препаратів.',
    references,
    cta: { title: 'Втомилися жити в очікуванні нападу?', text: 'Напишіть кодове слово «Перезапуск» і опишіть, як проявляється тривога — я скажу, чи зможу допомогти', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз от тревоги и панических атак: как это работает | kolomoitsev.com',
    metaDescription: 'Гипнотерапия при тревожности и панических атаках: почему тревога не слушает логику, что показывает метаанализ 2019 года, как проходят сессии и сколько их нужно.',
    breadcrumb: 'Гипноз от тревоги',
    titleLine1: 'Гипноз от тревоги',
    titleLine2: 'и панических атак',
    lead: 'Вы знаете, что бояться нечего. Вы себе это объясняли сто раз. И всё равно сердце колотится, воздуха не хватает, а мысль «сейчас что-то случится» не отпускает. Тревога не слушает аргументов — потому что живёт не там, где аргументы. Именно поэтому гипноз с ней работает.',
    sections: [
      {
        heading: 'Почему тревога не поддаётся логике',
        paragraphs: [
          'Тревожная реакция запускается миндалиной — участком мозга, который оценивает угрозу за миллисекунды, задолго до того, как подключится кора с её аргументами. Когда миндалина «решила», что опасность есть, тело уже получило команду: адреналин, учащённое сердцебиение, поверхностное дыхание.',
          'Паническая атака — тот же механизм, замкнувшийся в петлю: телесные ощущения пугают → страх усиливает ощущения → ощущения пугают ещё больше. За 10–20 минут петля исчерпывается сама, но за это время успевает закрепиться страх перед следующим приступом. И человек начинает избегать мест, ситуаций, иногда — выхода из дома.',
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Метаанализ Valentine et al. (2019)', text: '15 исследований, 17 сравнений: участник, проходивший гипноз, в среднем показал меньше тревоги, чем 79% контрольной группы. На контрольных измерениях спустя время эффект рос — до 84%.' },
          { title: 'Гипноз + КПТ сильнее, чем КПТ', text: 'Тот же метаанализ: гипноз в сочетании с другими психологическими методами дал больший эффект, чем эти методы отдельно.' },
          { title: 'Обзор Hammond (2010)', text: 'Гипноз признан эффективным методом для тревожных и стрессовых расстройств, в том числе для генерализованной тревоги, панических атак и фобий.' },
        ],
      },
      {
        heading: 'Как гипнотерапия останавливает тревожный цикл',
        steps: [
          { title: 'Обучение состоянию покоя', text: 'Первое, что вы получаете — реальный, телесный опыт глубокого покоя. Для человека с хронической тревогой это часто первый такой опыт за годы. Он становится точкой опоры.' },
          { title: 'Работа с триггерами', text: 'Находим, что именно запускает реакцию: ситуация, мысль, телесное ощущение. В трансе меняем автоматическую реакцию на этот триггер.' },
          { title: 'Поиск корня', text: 'Часто за «беспричинной» тревогой стоит конкретное событие или период: потеря, опасность, хронический стресс в детстве. Регрессия помогает найти и завершить его.' },
          { title: 'Самогипноз', text: 'Вы получаете технику на 2–3 минуты, которая останавливает нарастание паники. Это снимает страх перед приступом — а именно этот страх держит цикл.' },
        ],
      },
      {
        heading: 'Сколько сеансов нужно',
        paragraphs: ['Панические атаки и генерализованная тревога обычно требуют 3–5 сессий. Конкретная фобия — 1–3. Первый ощутимый результат — снижение интенсивности и частоты приступов — большинство замечает после 1–2 встреч.'],
        callout: 'Если тревога сопровождается депрессией, мыслями о самоповреждении или длится без перерывов много месяцев — сначала консультация психиатра. Гипнотерапия может идти параллельно с лечением.',
      },
    ],
    faq: [
      { q: 'Не станет ли мне хуже от транса, если я тревожный?', a: 'Нет. Транс — это состояние расслабления, противоположное тревоге. На первой сессии мы идём постепенно, и вы в любой момент можете открыть глаза.' },
      { q: 'Я принимаю успокоительные. Можно ли сочетать?', a: 'Да. Препараты не мешают гипнозу. Любые изменения в дозировках — только с врачом.' },
      { q: 'Поможет ли, если панические атаки уже 5 лет?', a: 'Да. Длительность проблемы влияет на количество сессий, но не на принципиальную возможность результата.' },
      { q: 'А если приступ случится прямо во время сессии?', a: 'Это бывает редко, но если так — это даже полезно: мы отработаем остановку приступа вживую, в безопасных условиях.' },
      { q: 'Работаете ли вы с социальной тревогой?', a: 'Да. Страх оценки, публичных выступлений, общения — один из самых частых запросов.' },
    ],
    disclaimer: 'Статья носит информационный характер и не является медицинской рекомендацией. Тревожные расстройства диагностирует врач. Гипнотерапия не заменяет консультацию психиатра и не является основанием для изменения назначенных препаратов.',
    references,
    cta: { title: 'Устали жить в ожидании приступа?', text: 'Напишите кодовое слово «Перезапуск» и опишите, как проявляется тревога — я скажу, смогу ли помочь', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Anxiety and Panic Attacks: How It Works | kolomoitsev.com',
    metaDescription: 'Hypnotherapy for anxiety and panic attacks: why anxiety ignores logic, what the 2019 meta-analysis shows, how sessions go and how many you need.',
    breadcrumb: 'Hypnosis for anxiety',
    titleLine1: 'Hypnosis for Anxiety',
    titleLine2: 'and panic attacks',
    lead: 'You know there is nothing to fear. You have explained it to yourself a hundred times. And still your heart pounds, you cannot get enough air, and the thought "something is about to happen" will not let go. Anxiety does not listen to arguments, because it does not live where arguments live. That is exactly why hypnosis works with it.',
    sections: [
      {
        heading: 'Why anxiety does not respond to logic',
        paragraphs: [
          'The anxiety response is triggered by the amygdala, the part of the brain that assesses threat in milliseconds, long before the cortex and its arguments join in. Once the amygdala has "decided" there is danger, the body has already received the command: adrenaline, racing heart, shallow breathing.',
          'A panic attack is the same mechanism locked in a loop: bodily sensations frighten you → fear intensifies the sensations → the sensations frighten you more. The loop burns itself out in 10–20 minutes, but in that time the fear of the next attack takes hold. And the person starts avoiding places, situations, sometimes leaving the house at all.',
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Valentine et al. meta-analysis (2019)', text: '15 studies, 17 comparisons: the average participant receiving hypnosis showed less anxiety than 79% of controls. At follow-up the effect grew, to 84%.' },
          { title: 'Hypnosis + CBT beats CBT alone', text: 'The same meta-analysis: hypnosis combined with other psychological methods produced a larger effect than those methods on their own.' },
          { title: 'Hammond review (2010)', text: 'Hypnosis is recognized as an effective method for anxiety and stress-related disorders, including generalized anxiety, panic attacks and phobias.' },
        ],
      },
      {
        heading: 'How hypnotherapy breaks the anxiety cycle',
        steps: [
          { title: 'Learning the state of calm', text: 'The first thing you get is a real, bodily experience of deep calm. For someone with chronic anxiety this is often the first such experience in years. It becomes an anchor.' },
          { title: 'Working with triggers', text: 'We find what exactly sets off the response: a situation, a thought, a bodily sensation. In trance we change the automatic reaction to that trigger.' },
          { title: 'Finding the root', text: 'Behind "causeless" anxiety there is often a specific event or period: loss, danger, chronic stress in childhood. Regression helps find and complete it.' },
          { title: 'Self-hypnosis', text: 'You get a 2–3 minute technique that stops panic from escalating. This removes the fear of an attack, and that fear is what keeps the cycle going.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['Panic attacks and generalized anxiety usually take 3–5 sessions. A specific phobia, 1–3. The first tangible result, fewer and milder attacks, is noticed by most people after 1–2 meetings.'],
        callout: 'If anxiety comes with depression, thoughts of self-harm or has persisted without a break for many months, see a psychiatrist first. Hypnotherapy can run alongside treatment.',
      },
    ],
    faq: [
      { q: 'Will trance make me worse if I am anxious?', a: 'No. Trance is a state of relaxation, the opposite of anxiety. In the first session we go step by step, and you can open your eyes at any moment.' },
      { q: 'I take anti-anxiety medication. Can I combine them?', a: 'Yes. Medication does not interfere with hypnosis. Any dosage changes are made only with your doctor.' },
      { q: 'Will it help if I have had panic attacks for 5 years?', a: 'Yes. How long the problem has lasted affects the number of sessions, not whether a result is possible.' },
      { q: 'What if an attack happens during the session?', a: 'It is rare, but if it does, it is actually useful: we practice stopping an attack live, in safe conditions.' },
      { q: 'Do you work with social anxiety?', a: 'Yes. Fear of judgment, public speaking and social situations is one of the most common requests.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Anxiety disorders are diagnosed by a physician. Hypnotherapy does not replace a psychiatric consultation and is not grounds for changing prescribed medication.',
    references,
    cta: { title: 'Tired of living in fear of the next attack?', text: 'Message me the code word "Restart" and describe how your anxiety shows up. I will tell you whether I can help', button: 'Message "Restart"' },
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
