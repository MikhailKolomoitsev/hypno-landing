import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-vid-fobiy';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Valentine K.E., Milling L.S., Clark L.J., Moriarty C.L. (2019). The efficacy of hypnosis as a treatment for anxiety: a meta-analysis. International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/31251710/' },
  { label: 'Kirsch I., Montgomery G., Sapirstein G. (1995). Hypnosis as an adjunct to cognitive-behavioral psychotherapy: a meta-analysis. Journal of Consulting and Clinical Psychology.', url: 'https://pubmed.ncbi.nlm.nih.gov/7751482/' },
  { label: 'Öst L.G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy.', url: 'https://pubmed.ncbi.nlm.nih.gov/2914000/' },
  { label: 'Hammond D.C. (2010). Hypnosis in the treatment of anxiety- and stress-related disorders. Expert Review of Neurotherapeutics.', url: 'https://pubmed.ncbi.nlm.nih.gov/20136382/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз від фобій і страхів: як прибрати страх за 1–3 сесії | kolomoitsev.com',
    metaDescription: 'Гіпнотерапія при фобіях: страх польотів, висоти, павуків, собак, уколів, замкнених просторів. Чому логіка не допомагає, що показують дослідження, як проходить робота.',
    breadcrumb: 'Гіпноз від фобій',
    titleLine1: 'Гіпноз від фобій і страхів:',
    titleLine2: 'як прибрати страх за 1–3 сесії',
    lead: 'Ви знаєте, що літак — найбезпечніший транспорт. Що павук у кутку не небезпечний. Що ліфт не застрягне. Знання не допомагає: тіло реагує раніше, ніж ви встигаєте подумати. Фобія — один із найвдячніших запитів для гіпнотерапії, бо живе саме там, куди гіпноз має прямий доступ.',
    sections: [
      {
        heading: 'Що таке фобія і чому вона не слухає логіку',
        paragraphs: [
          'Фобія — це умовний рефлекс страху, записаний у мигдалині. Колись (часто в дитинстві, часто непомітно) мозок пов\'язав певний об\'єкт або ситуацію з небезпекою. З того моменту реакція запускається автоматично, за мілісекунди, без участі свідомості. Ви не вирішуєте боятися — ви вже боїтеся.',
          'Саме тому вмовляння, статистика й «просто не думай про це» не працюють: вони звертаються до кори мозку, а рефлекс живе глибше. Щоб змінити реакцію, потрібно працювати на тому рівні, де вона записана. Це і робить гіпноз.',
        ],
      },
      {
        heading: 'З якими страхами працюю',
        bullets: [
          'Аерофобія — страх польотів, турбулентності, замкненого простору салону.',
          'Страх висоти, мостів, скляних ліфтів, балконів.',
          'Клаустрофобія: ліфти, МРТ, метро, натовп.',
          'Зоофобії: павуки, собаки, змії, комахи, птахи.',
          'Страх уколів, крові, стоматолога, медичних процедур.',
          'Страх водіння або їзди в автомобілі після аварії.',
          'Соціальні страхи: публічні виступи, дзвінки, знайомства, оцінка.',
          'Страх води, темряви, грози, задухи, захворіти.',
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Метааналіз Valentine et al. (2019)', text: 'Гіпноз достовірно знижує тривогу; учасник, який проходив гіпноз, показав менше тривоги, ніж 79% контрольної групи, а через час ефект зростав до 84%.' },
          { title: 'Метааналіз Kirsch et al. (1995)', text: 'Додавання гіпнозу до когнітивно-поведінкової терапії суттєво посилювало результат: клієнт із гіпнозом у середньому досягав більшого, ніж 70% тих, хто проходив лише КПТ.' },
          { title: 'Öst (1989): одна сесія', text: 'Класичне дослідження показало, що специфічну фобію можна суттєво зменшити за одну тривалу сесію інтенсивної роботи. Гіпноз дозволяє зробити цю роботу м\'якше — без реального контакту з об\'єктом страху.' },
        ],
      },
      {
        heading: 'Як проходить робота',
        steps: [
          { title: 'Розбір страху', text: 'Коли вперше з\'явився, як проявляється в тілі, чого саме ви боїтеся насправді (часто це не павук, а втрата контролю). 15–20 хвилин.' },
          { title: 'Стан безпеки', text: 'У трансі ви спочатку отримуєте доступ до глибокого спокою. Це фундамент: тіло має знати, куди повертатися.' },
          { title: 'Пошук першої події', text: 'Підсвідомість часто веде до моменту, коли страх закріпився. Це може бути щось, що ви давно забули. Переосмислюємо подію з позиції дорослого.' },
          { title: 'Перезапис реакції', text: 'Уявний контакт з об\'єктом страху — із збереженням спокою. Мозок отримує новий досвід: «це безпечно». Повторюємо, доки реакція не зміниться.' },
          { title: 'Перевірка та самогіпноз', text: 'Коротка техніка на 1–2 хвилини для реальної ситуації. Для аерофобії — окремо відпрацьовуємо зліт, турбулентність, посадку.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Проста специфічна фобія (павуки, висота, уколи) — зазвичай 1–2 сесії. Аерофобія та клаустрофобія — 2–3, бо часто містять кілька шарів: страх замкненого простору + страх втрати контролю + страх паніки. Соціальні страхи — 2–4. Результат перевіряється не на словах, а в реальній ситуації: наступному польоті, візиті до стоматолога, виступі.'],
        callout: 'Якщо страх супроводжується панічними атаками поза фобічною ситуацією, безсонням або пригніченим настроєм — це може бути тривожний розлад, а не ізольована фобія. Тоді робота триваліша і може потребувати паралельної консультації психіатра.',
      },
    ],
    faq: [
      { q: 'Чи доведеться мені дивитися на павука або сідати в літак на сесії?', a: 'Ні. Уся робота відбувається в уяві, у стані спокою. Реальний контакт — лише після того, як реакція змінилась, і тільки за вашим бажанням.' },
      { q: 'У мене фобія з дитинства, я не пам\'ятаю, звідки вона.', a: 'Це нормально. Більшість людей не пам\'ятають першу подію. Підсвідомість у трансі її знаходить — або працюємо без неї, безпосередньо з реакцією.' },
      { q: 'Чи може страх повернутися?', a: 'Після повноцінної роботи — рідко. Якщо повернувся частково, зазвичай достатньо однієї підтримувальної сесії.' },
      { q: 'Чи працює онлайн?', a: 'Так. Для фобій онлайн-формат навіть зручніший: ви у безпечному місці, і техніки самогіпнозу одразу відпрацьовуються у звичній обстановці.' },
      { q: 'Чи працюєте ви з дитячими страхами?', a: 'З підлітками від 14 років — так, за згоди батьків.' },
    ],
    disclaimer: 'Стаття має інформаційний характер і не є медичною порадою. Фобічні та тривожні розлади діагностує лікар. Гіпнотерапія не замінює консультацію психіатра при тяжких станах.',
    references,
    cta: { title: 'Хочете перестати боятися?', text: 'Напишіть кодове слово «Перезапуск» і назвіть свій страх — я скажу, скільки сесій знадобиться', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз от фобий и страхов: как убрать страх за 1–3 сессии | kolomoitsev.com',
    metaDescription: 'Гипнотерапия при фобиях: страх полётов, высоты, пауков, собак, уколов, замкнутых пространств. Почему логика не помогает, что показывают исследования, как проходит работа.',
    breadcrumb: 'Гипноз от фобий',
    titleLine1: 'Гипноз от фобий и страхов:',
    titleLine2: 'как убрать страх за 1–3 сессии',
    lead: 'Вы знаете, что самолёт — самый безопасный транспорт. Что паук в углу не опасен. Что лифт не застрянет. Знание не помогает: тело реагирует раньше, чем вы успеваете подумать. Фобия — один из самых благодарных запросов для гипнотерапии, потому что живёт именно там, куда у гипноза есть прямой доступ.',
    sections: [
      {
        heading: 'Что такое фобия и почему она не слушает логику',
        paragraphs: [
          'Фобия — это условный рефлекс страха, записанный в миндалине. Когда-то (часто в детстве, часто незаметно) мозг связал определённый объект или ситуацию с опасностью. С того момента реакция запускается автоматически, за миллисекунды, без участия сознания. Вы не решаете бояться — вы уже боитесь.',
          'Именно поэтому уговоры, статистика и «просто не думай об этом» не работают: они обращаются к коре мозга, а рефлекс живёт глубже. Чтобы изменить реакцию, нужно работать на том уровне, где она записана. Это и делает гипноз.',
        ],
      },
      {
        heading: 'С какими страхами работаю',
        bullets: [
          'Аэрофобия — страх полётов, турбулентности, замкнутого пространства салона.',
          'Страх высоты, мостов, стеклянных лифтов, балконов.',
          'Клаустрофобия: лифты, МРТ, метро, толпа.',
          'Зоофобии: пауки, собаки, змеи, насекомые, птицы.',
          'Страх уколов, крови, стоматолога, медицинских процедур.',
          'Страх вождения или езды в автомобиле после аварии.',
          'Социальные страхи: публичные выступления, звонки, знакомства, оценка.',
          'Страх воды, темноты, грозы, удушья, заболеть.',
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Метаанализ Valentine et al. (2019)', text: 'Гипноз достоверно снижает тревогу; участник, проходивший гипноз, показал меньше тревоги, чем 79% контрольной группы, а спустя время эффект рос до 84%.' },
          { title: 'Метаанализ Kirsch et al. (1995)', text: 'Добавление гипноза к когнитивно-поведенческой терапии существенно усиливало результат: клиент с гипнозом в среднем достигал большего, чем 70% тех, кто проходил только КПТ.' },
          { title: 'Öst (1989): одна сессия', text: 'Классическое исследование показало, что специфическую фобию можно существенно уменьшить за одну длительную сессию интенсивной работы. Гипноз позволяет сделать эту работу мягче — без реального контакта с объектом страха.' },
        ],
      },
      {
        heading: 'Как проходит работа',
        steps: [
          { title: 'Разбор страха', text: 'Когда впервые появился, как проявляется в теле, чего именно вы боитесь на самом деле (часто это не паук, а потеря контроля). 15–20 минут.' },
          { title: 'Состояние безопасности', text: 'В трансе вы сначала получаете доступ к глубокому покою. Это фундамент: тело должно знать, куда возвращаться.' },
          { title: 'Поиск первого события', text: 'Подсознание часто ведёт к моменту, когда страх закрепился. Это может быть что-то, что вы давно забыли. Переосмысляем событие с позиции взрослого.' },
          { title: 'Перезапись реакции', text: 'Воображаемый контакт с объектом страха — с сохранением покоя. Мозг получает новый опыт: «это безопасно». Повторяем, пока реакция не изменится.' },
          { title: 'Проверка и самогипноз', text: 'Короткая техника на 1–2 минуты для реальной ситуации. Для аэрофобии — отдельно отрабатываем взлёт, турбулентность, посадку.' },
        ],
      },
      {
        heading: 'Сколько сеансов нужно',
        paragraphs: ['Простая специфическая фобия (пауки, высота, уколы) — обычно 1–2 сессии. Аэрофобия и клаустрофобия — 2–3, потому что часто содержат несколько слоёв: страх замкнутого пространства + страх потери контроля + страх паники. Социальные страхи — 2–4. Результат проверяется не на словах, а в реальной ситуации: следующем полёте, визите к стоматологу, выступлении.'],
        callout: 'Если страх сопровождается паническими атаками вне фобической ситуации, бессонницей или подавленным настроением — это может быть тревожное расстройство, а не изолированная фобия. Тогда работа длительнее и может требовать параллельной консультации психиатра.',
      },
    ],
    faq: [
      { q: 'Придётся ли мне смотреть на паука или садиться в самолёт на сессии?', a: 'Нет. Вся работа происходит в воображении, в состоянии покоя. Реальный контакт — только после того, как реакция изменилась, и только по вашему желанию.' },
      { q: 'У меня фобия с детства, я не помню, откуда она.', a: 'Это нормально. Большинство людей не помнят первое событие. Подсознание в трансе его находит — или работаем без него, напрямую с реакцией.' },
      { q: 'Может ли страх вернуться?', a: 'После полноценной работы — редко. Если вернулся частично, обычно достаточно одной поддерживающей сессии.' },
      { q: 'Работает ли онлайн?', a: 'Да. Для фобий онлайн-формат даже удобнее: вы в безопасном месте, и техники самогипноза сразу отрабатываются в привычной обстановке.' },
      { q: 'Работаете ли вы с детскими страхами?', a: 'С подростками от 14 лет — да, с согласия родителей.' },
    ],
    disclaimer: 'Статья носит информационный характер и не является медицинской рекомендацией. Фобические и тревожные расстройства диагностирует врач. Гипнотерапия не заменяет консультацию психиатра при тяжёлых состояниях.',
    references,
    cta: { title: 'Хотите перестать бояться?', text: 'Напишите кодовое слово «Перезапуск» и назовите свой страх — я скажу, сколько сессий понадобится', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Phobias and Fears: Removing Fear in 1–3 Sessions | kolomoitsev.com',
    metaDescription: 'Hypnotherapy for phobias: fear of flying, heights, spiders, dogs, needles, enclosed spaces. Why logic does not help, what research shows, how the work goes.',
    breadcrumb: 'Hypnosis for phobias',
    titleLine1: 'Hypnosis for Phobias and Fears:',
    titleLine2: 'removing fear in 1–3 sessions',
    lead: 'You know a plane is the safest form of transport. That the spider in the corner is harmless. That the elevator will not get stuck. Knowing does not help: the body reacts before you have time to think. A phobia is one of the most rewarding requests for hypnotherapy, because it lives exactly where hypnosis has direct access.',
    sections: [
      {
        heading: 'What a phobia is and why it ignores logic',
        paragraphs: [
          'A phobia is a conditioned fear reflex stored in the amygdala. At some point (often in childhood, often unnoticed) the brain linked a certain object or situation with danger. From then on the response fires automatically, in milliseconds, without conscious involvement. You do not decide to be afraid; you already are.',
          'That is why reassurance, statistics and "just don\'t think about it" do not work: they address the cortex, while the reflex lives deeper. To change the response you have to work at the level where it is stored. That is what hypnosis does.',
        ],
      },
      {
        heading: 'Fears I work with',
        bullets: [
          'Fear of flying: take-off, turbulence, the enclosed cabin.',
          'Fear of heights, bridges, glass elevators, balconies.',
          'Claustrophobia: elevators, MRI scanners, the subway, crowds.',
          'Animal phobias: spiders, dogs, snakes, insects, birds.',
          'Fear of needles, blood, the dentist, medical procedures.',
          'Fear of driving or riding in a car after an accident.',
          'Social fears: public speaking, phone calls, meeting people, being judged.',
          'Fear of water, darkness, thunderstorms, choking, getting ill.',
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Valentine et al. meta-analysis (2019)', text: 'Hypnosis reliably reduces anxiety; the average participant receiving hypnosis showed less anxiety than 79% of controls, rising to 84% at follow-up.' },
          { title: 'Kirsch et al. meta-analysis (1995)', text: 'Adding hypnosis to cognitive behavioral therapy substantially strengthened results: the average client receiving hypnosis improved more than 70% of those receiving CBT alone.' },
          { title: 'Öst (1989): one session', text: 'A classic study showed that a specific phobia can be substantially reduced in a single long session of intensive work. Hypnosis lets this work happen more gently, without real contact with the feared object.' },
        ],
      },
      {
        heading: 'How the work goes',
        steps: [
          { title: 'Mapping the fear', text: 'When it first appeared, how it shows up in the body, what you are actually afraid of (often not the spider but losing control). 15–20 minutes.' },
          { title: 'A state of safety', text: 'In trance you first gain access to deep calm. This is the foundation: the body needs to know where to return to.' },
          { title: 'Finding the first event', text: 'The subconscious often leads to the moment the fear took hold. It may be something you forgot long ago. We reframe the event from an adult perspective.' },
          { title: 'Rewriting the response', text: 'Imagined contact with the feared object while staying calm. The brain gets new evidence: "this is safe". We repeat until the response changes.' },
          { title: 'Testing and self-hypnosis', text: 'A 1–2 minute technique for the real situation. For fear of flying we separately rehearse take-off, turbulence and landing.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['A simple specific phobia (spiders, heights, needles) usually takes 1–2 sessions. Fear of flying and claustrophobia, 2–3, because they often have several layers: fear of enclosed space + fear of losing control + fear of panic. Social fears, 2–4. The result is tested not in words but in the real situation: the next flight, dental visit or presentation.'],
        callout: 'If the fear comes with panic attacks outside the phobic situation, insomnia or low mood, it may be an anxiety disorder rather than an isolated phobia. Then the work takes longer and may require a parallel psychiatric consultation.',
      },
    ],
    faq: [
      { q: 'Will I have to look at a spider or board a plane during the session?', a: 'No. All the work happens in imagination, in a calm state. Real contact comes only after the response has changed, and only if you want it.' },
      { q: 'My phobia goes back to childhood and I do not remember where it came from.', a: 'That is normal. Most people do not remember the first event. The subconscious finds it in trance, or we work without it, directly on the response.' },
      { q: 'Can the fear come back?', a: 'After thorough work, rarely. If it partially returns, one follow-up session is usually enough.' },
      { q: 'Does it work online?', a: 'Yes. For phobias the online format is even more convenient: you are in a safe place, and self-hypnosis techniques are practiced in your usual environment.' },
      { q: 'Do you work with children\'s fears?', a: 'With teenagers from 14, yes, with parental consent.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Phobic and anxiety disorders are diagnosed by a physician. Hypnotherapy does not replace a psychiatric consultation for severe conditions.',
    references,
    cta: { title: 'Want to stop being afraid?', text: 'Message me the code word "Restart" and name your fear. I will tell you how many sessions it will take', button: 'Message "Restart"' },
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
