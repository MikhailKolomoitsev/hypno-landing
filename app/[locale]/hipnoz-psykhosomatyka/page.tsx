import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-psykhosomatyka';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Flammer E., Alladin A. (2007). The efficacy of hypnotherapy in the treatment of psychosomatic disorders: meta-analytical evidence. International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Flammer+Alladin+2007+efficacy+hypnotherapy+psychosomatic+disorders+meta-analytical' },
  { label: 'Flik C.E. et al. (2019). Efficacy of individual and group hypnotherapy in irritable bowel syndrome (IMAGINE): a multicentre randomised controlled trial. The Lancet Gastroenterology & Hepatology.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Flik+2019+hypnotherapy+irritable+bowel+syndrome+IMAGINE+Lancet' },
  { label: 'Shenefelt P.D. (2000). Hypnosis in dermatology. Archives of Dermatology.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Shenefelt+2000+hypnosis+in+dermatology' },
  { label: 'Henningsen P. et al. (2018). Management of functional somatic syndromes and bodily distress. Psychotherapy and Psychosomatics.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Henningsen+2018+management+functional+somatic+syndromes+bodily+distress' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз і психосоматика: коли тіло говорить замість вас | kolomoitsev.com',
    metaDescription: 'Психосоматика та гіпнотерапія: як емоції стають тілесними симптомами, які стани вважаються психосоматичними, що показують дослідження і як проходить робота.',
    breadcrumb: 'Гіпноз і психосоматика',
    titleLine1: 'Гіпноз і психосоматика:',
    titleLine2: 'коли тіло говорить замість вас',
    lead: 'Аналізи в нормі, обстеження нічого не знаходять, а симптом є: болить живіт перед важливими зустрічами, стискає горло, свербить шкіра, німіють руки. Лікар каже «це на нервовому ґрунті» — і на цьому розмова закінчується. А симптом залишається. Саме тут починається робота гіпнотерапевта.',
    sections: [
      {
        heading: 'Що таке психосоматика насправді',
        paragraphs: [
          'Психосоматичний симптом — не «вигаданий» і не «в голові». Біль, спазм, висип або запаморочення цілком реальні. Різниця в тому, що їх запускає не пошкодження органа, а нервова система, яка реагує на емоцію, що не знайшла іншого виходу.',
          'Механізм простий: емоція, яку не можна виразити (гнів на близьку людину, страх, який «не личить», горе, на яке «немає часу»), не зникає. Вона перетворюється на хронічну напругу в тілі — і з часом знаходить слабке місце: шлунок, шкіру, серцевий ритм, м\'язи спини.',
        ],
      },
      {
        heading: 'Які стани вважаються психосоматичними',
        bullets: [
          'Синдром подразненого кишківника, функціональна диспепсія, «нервовий шлунок».',
          'Головний біль напруги, мігрень без неврологічної причини.',
          'Шкірні прояви: нейродерміт, псоріаз, екзема, що загострюються на стресі.',
          'Ком у горлі, задишка, серцебиття без кардіологічної патології.',
          'Хронічний біль у спині та м\'язах без ортопедичних знахідок.',
          'Запаморочення, оніміння, тремор, що з\'являються в певних ситуаціях.',
          'Часті застуди на тлі хронічного стресу.',
        ],
        callout: 'Важливо: діагноз «психосоматика» ставиться методом виключення. Спочатку лікар має виключити органічну причину. Якщо ви ще не обстежувалися — почніть із цього.',
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Метааналіз Flammer & Alladin (2007)', text: '21 рандомізоване контрольоване дослідження: гіпнотерапія ефективна при психосоматичних розладах, із середнім ефектом, що перевищує більшість інших психологічних втручань для цієї групи.' },
          { title: 'Дослідження IMAGINE (2019)', text: 'Синдром подразненого кишківника — класична психосоматика. Гіпнотерапія суттєво зменшила симптоми, ефект тримався через 9 місяців. У Великобританії гіпноз входить до клінічних настанов для СПК.' },
          { title: 'Дерматологія (Shenefelt, 2000)', text: 'Огляд застосування гіпнозу при шкірних захворюваннях: доведений ефект при бородавках, нейродерміті, псоріазі, свербінні — через зниження стресової реакції та вплив на імунну відповідь.' },
        ],
      },
      {
        heading: 'Чому гіпноз тут особливо доречний',
        paragraphs: [
          'Психосоматичний симптом формується не на рівні думок, а на рівні автоматичних реакцій тіла. Розмовна терапія може пояснити, чому болить живіт перед зустрічами, — але розуміння рідко зупиняє спазм. Гіпноз працює саме з тією ланкою, де емоція перетворюється на тілесну реакцію.',
          'У трансі можна «запитати» симптом, що він намагається сказати, знайти ситуацію, у якій він з\'явився вперше, дати емоції вихід — і навчити тіло іншої реакції. Часто симптом зникає після того, як емоція нарешті прожита.',
        ],
      },
      {
        heading: 'Як проходить робота',
        steps: [
          { title: 'Історія симптому', text: 'Коли з\'явився, за яких обставин посилюється, що відбувалося в житті тоді. Часто вже тут видно зв\'язок, який людина не помічала.' },
          { title: 'Діалог із тілом', text: 'У трансі встановлюємо контакт із симптомом як із сигналом. Що він захищає? Чого вимагає? Це звучить незвично, але працює напрочуд точно.' },
          { title: 'Вивільнення емоції', text: 'Знаходимо подію або період, де емоція була заблокована, і даємо їй завершитися. Без повторного травмування, у безпечному просторі.' },
          { title: 'Нова реакція', text: 'Навчаємо нервову систему іншої відповіді на тригер: замість спазму — розслаблення, замість свербіння — спокій.' },
          { title: 'Самогіпноз', text: 'Техніка для самостійного застосування при перших ознаках симптому. Контроль повертається до вас.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Симптом із чіткою історією (з\'явився після конкретної події) зазвичай потребує 2–4 сесій. Хронічна психосоматика з багаторічною історією — 4–6. Для СПК та шкірних проявів ефект часто накопичується: помітні зміни після 2–3 зустрічей, стійкий результат — після курсу.'],
      },
    ],
    faq: [
      { q: 'Як зрозуміти, що мій симптом психосоматичний?', a: 'Три ознаки: обстеження не знаходять органічної причини; симптом посилюється на стресі або в певних ситуаціях; він з\'явився після емоційно значущої події. Але остаточно це вирішує лікар.' },
      { q: 'Чи можна працювати, якщо діагноз є (наприклад, псоріаз)?', a: 'Так. При захворюваннях із психосоматичним компонентом гіпнотерапія зменшує частоту й тяжкість загострень — паралельно з лікуванням у дерматолога, не замість.' },
      { q: 'Чи означає це, що я сам собі все вигадав?', a: 'Ні. Симптом реальний, його створює реальна нервова система. Ви не вигадали його і не контролюєте свідомо — саме тому потрібна робота на підсвідомому рівні.' },
      { q: 'Чи зникне симптом назавжди?', a: 'Якщо емоційна причина опрацьована — зазвичай так. Якщо в житті з\'явиться новий тривалий стрес, тіло може знову «заговорити», але ви вже матимете інструмент.' },
      { q: 'Чи працюєте ви з дітьми?', a: 'З підлітками від 14 років — так, за згоди батьків. З молодшими дітьми не працюю.' },
    ],
    disclaimer: 'Стаття має інформаційний характер і не є медичною порадою. Будь-який тілесний симптом спочатку потребує медичного обстеження для виключення органічної причини. Гіпнотерапія доповнює лікування, а не замінює його.',
    references,
    cta: { title: 'Обстеження нічого не знаходять, а симптом є?', text: 'Напишіть кодове слово «Перезапуск» і опишіть, що відбувається з тілом — я скажу, чи зможу допомогти', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз и психосоматика: когда тело говорит вместо вас | kolomoitsev.com',
    metaDescription: 'Психосоматика и гипнотерапия: как эмоции становятся телесными симптомами, какие состояния считаются психосоматическими, что показывают исследования и как проходит работа.',
    breadcrumb: 'Гипноз и психосоматика',
    titleLine1: 'Гипноз и психосоматика:',
    titleLine2: 'когда тело говорит вместо вас',
    lead: 'Анализы в норме, обследования ничего не находят, а симптом есть: болит живот перед важными встречами, сжимает горло, чешется кожа, немеют руки. Врач говорит «это на нервной почве» — и на этом разговор заканчивается. А симптом остаётся. Именно здесь начинается работа гипнотерапевта.',
    sections: [
      {
        heading: 'Что такое психосоматика на самом деле',
        paragraphs: [
          'Психосоматический симптом — не «выдуманный» и не «в голове». Боль, спазм, сыпь или головокружение вполне реальны. Разница в том, что их запускает не повреждение органа, а нервная система, реагирующая на эмоцию, которая не нашла другого выхода.',
          'Механизм прост: эмоция, которую нельзя выразить (гнев на близкого человека, страх, который «не к лицу», горе, на которое «нет времени»), не исчезает. Она превращается в хроническое напряжение в теле — и со временем находит слабое место: желудок, кожу, сердечный ритм, мышцы спины.',
        ],
      },
      {
        heading: 'Какие состояния считаются психосоматическими',
        bullets: [
          'Синдром раздражённого кишечника, функциональная диспепсия, «нервный желудок».',
          'Головная боль напряжения, мигрень без неврологической причины.',
          'Кожные проявления: нейродермит, псориаз, экзема, обостряющиеся на стрессе.',
          'Ком в горле, одышка, сердцебиение без кардиологической патологии.',
          'Хроническая боль в спине и мышцах без ортопедических находок.',
          'Головокружение, онемение, тремор, появляющиеся в определённых ситуациях.',
          'Частые простуды на фоне хронического стресса.',
        ],
        callout: 'Важно: диагноз «психосоматика» ставится методом исключения. Сначала врач должен исключить органическую причину. Если вы ещё не обследовались — начните с этого.',
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Метаанализ Flammer & Alladin (2007)', text: '21 рандомизированное контролируемое исследование: гипнотерапия эффективна при психосоматических расстройствах, со средним эффектом, превышающим большинство других психологических вмешательств для этой группы.' },
          { title: 'Исследование IMAGINE (2019)', text: 'Синдром раздражённого кишечника — классическая психосоматика. Гипнотерапия существенно уменьшила симптомы, эффект держался через 9 месяцев. В Великобритании гипноз входит в клинические рекомендации для СРК.' },
          { title: 'Дерматология (Shenefelt, 2000)', text: 'Обзор применения гипноза при кожных заболеваниях: доказанный эффект при бородавках, нейродермите, псориазе, зуде — через снижение стрессовой реакции и влияние на иммунный ответ.' },
        ],
      },
      {
        heading: 'Почему гипноз здесь особенно уместен',
        paragraphs: [
          'Психосоматический симптом формируется не на уровне мыслей, а на уровне автоматических реакций тела. Разговорная терапия может объяснить, почему болит живот перед встречами, — но понимание редко останавливает спазм. Гипноз работает именно с тем звеном, где эмоция превращается в телесную реакцию.',
          'В трансе можно «спросить» симптом, что он пытается сказать, найти ситуацию, в которой он появился впервые, дать эмоции выход — и научить тело другой реакции. Часто симптом исчезает после того, как эмоция наконец прожита.',
        ],
      },
      {
        heading: 'Как проходит работа',
        steps: [
          { title: 'История симптома', text: 'Когда появился, при каких обстоятельствах усиливается, что происходило в жизни тогда. Часто уже здесь видна связь, которую человек не замечал.' },
          { title: 'Диалог с телом', text: 'В трансе устанавливаем контакт с симптомом как с сигналом. Что он защищает? Чего требует? Звучит необычно, но работает на удивление точно.' },
          { title: 'Высвобождение эмоции', text: 'Находим событие или период, где эмоция была заблокирована, и даём ей завершиться. Без повторной травматизации, в безопасном пространстве.' },
          { title: 'Новая реакция', text: 'Учим нервную систему другому ответу на триггер: вместо спазма — расслабление, вместо зуда — покой.' },
          { title: 'Самогипноз', text: 'Техника для самостоятельного применения при первых признаках симптома. Контроль возвращается к вам.' },
        ],
      },
      {
        heading: 'Сколько сеансов нужно',
        paragraphs: ['Симптом с чёткой историей (появился после конкретного события) обычно требует 2–4 сессий. Хроническая психосоматика с многолетней историей — 4–6. Для СРК и кожных проявлений эффект часто накапливается: заметные изменения после 2–3 встреч, устойчивый результат — после курса.'],
      },
    ],
    faq: [
      { q: 'Как понять, что мой симптом психосоматический?', a: 'Три признака: обследования не находят органической причины; симптом усиливается на стрессе или в определённых ситуациях; он появился после эмоционально значимого события. Но окончательно это решает врач.' },
      { q: 'Можно ли работать, если диагноз есть (например, псориаз)?', a: 'Да. При заболеваниях с психосоматическим компонентом гипнотерапия уменьшает частоту и тяжесть обострений — параллельно с лечением у дерматолога, не вместо.' },
      { q: 'Значит ли это, что я сам себе всё выдумал?', a: 'Нет. Симптом реален, его создаёт реальная нервная система. Вы не выдумали его и не контролируете сознательно — именно поэтому нужна работа на подсознательном уровне.' },
      { q: 'Исчезнет ли симптом навсегда?', a: 'Если эмоциональная причина проработана — обычно да. Если в жизни появится новый длительный стресс, тело может снова «заговорить», но у вас уже будет инструмент.' },
      { q: 'Работаете ли вы с детьми?', a: 'С подростками от 14 лет — да, с согласия родителей. С младшими детьми не работаю.' },
    ],
    disclaimer: 'Статья носит информационный характер и не является медицинской рекомендацией. Любой телесный симптом сначала требует медицинского обследования для исключения органической причины. Гипнотерапия дополняет лечение, а не заменяет его.',
    references,
    cta: { title: 'Обследования ничего не находят, а симптом есть?', text: 'Напишите кодовое слово «Перезапуск» и опишите, что происходит с телом — я скажу, смогу ли помочь', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis and Psychosomatic Symptoms: When the Body Speaks for You | kolomoitsev.com',
    metaDescription: 'Psychosomatic symptoms and hypnotherapy: how emotions become physical symptoms, which conditions count as psychosomatic, what research shows and how the work goes.',
    breadcrumb: 'Hypnosis and psychosomatics',
    titleLine1: 'Hypnosis and Psychosomatic Symptoms:',
    titleLine2: 'when the body speaks for you',
    lead: 'Your tests are normal, the scans find nothing, yet the symptom is there: stomach pain before important meetings, a tight throat, itching skin, numb hands. The doctor says "it\'s nerves", and the conversation ends there. The symptom stays. This is where a hypnotherapist\'s work begins.',
    sections: [
      {
        heading: 'What psychosomatic really means',
        paragraphs: [
          'A psychosomatic symptom is not "made up" and not "in your head". The pain, spasm, rash or dizziness is entirely real. The difference is that it is triggered not by organ damage but by a nervous system responding to an emotion that found no other outlet.',
          'The mechanism is simple: an emotion that cannot be expressed (anger at a loved one, a fear that "does not suit you", grief there is "no time for") does not disappear. It turns into chronic tension in the body and eventually finds a weak spot: the stomach, the skin, the heart rhythm, the back muscles.',
        ],
      },
      {
        heading: 'Which conditions count as psychosomatic',
        bullets: [
          'Irritable bowel syndrome, functional dyspepsia, "nervous stomach".',
          'Tension headaches, migraine without a neurological cause.',
          'Skin conditions: neurodermatitis, psoriasis, eczema that flare under stress.',
          'A lump in the throat, shortness of breath, palpitations without cardiac pathology.',
          'Chronic back and muscle pain with no orthopedic findings.',
          'Dizziness, numbness, tremor that appear in specific situations.',
          'Frequent colds against a background of chronic stress.',
        ],
        callout: 'Important: a "psychosomatic" diagnosis is made by exclusion. A doctor must first rule out an organic cause. If you have not been examined yet, start there.',
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Flammer & Alladin meta-analysis (2007)', text: '21 randomized controlled trials: hypnotherapy is effective for psychosomatic disorders, with an average effect exceeding most other psychological interventions for this group.' },
          { title: 'IMAGINE trial (2019)', text: 'Irritable bowel syndrome is classic psychosomatics. Hypnotherapy significantly reduced symptoms, and the effect held at 9 months. In the UK, hypnosis is part of clinical guidance for IBS.' },
          { title: 'Dermatology (Shenefelt, 2000)', text: 'A review of hypnosis in skin conditions: documented effects on warts, neurodermatitis, psoriasis and itching, through reduced stress response and influence on immune reactivity.' },
        ],
      },
      {
        heading: 'Why hypnosis fits here especially well',
        paragraphs: [
          'A psychosomatic symptom forms not at the level of thoughts but at the level of automatic bodily responses. Talk therapy can explain why your stomach hurts before meetings, but understanding rarely stops a spasm. Hypnosis works with exactly the link where emotion turns into a physical reaction.',
          'In trance you can "ask" the symptom what it is trying to say, find the situation where it first appeared, give the emotion an outlet, and teach the body a different response. Often the symptom disappears once the emotion has finally been lived through.',
        ],
      },
      {
        heading: 'How the work goes',
        steps: [
          { title: 'History of the symptom', text: 'When it appeared, what makes it worse, what was happening in your life at the time. Often a connection the person never noticed becomes visible right here.' },
          { title: 'Dialogue with the body', text: 'In trance we make contact with the symptom as a signal. What is it protecting? What does it demand? It sounds unusual, but it works with surprising precision.' },
          { title: 'Releasing the emotion', text: 'We find the event or period where the emotion was blocked and let it complete. Without re-traumatization, in a safe space.' },
          { title: 'A new response', text: 'We teach the nervous system a different answer to the trigger: relaxation instead of spasm, calm instead of itching.' },
          { title: 'Self-hypnosis', text: 'A technique you can use yourself at the first signs of the symptom. Control returns to you.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['A symptom with a clear history (appeared after a specific event) usually takes 2–4 sessions. Chronic psychosomatics with a long history, 4–6. For IBS and skin conditions the effect often accumulates: noticeable change after 2–3 meetings, a lasting result after the course.'],
      },
    ],
    faq: [
      { q: 'How do I know my symptom is psychosomatic?', a: 'Three signs: tests find no organic cause; the symptom gets worse under stress or in specific situations; it appeared after an emotionally significant event. But the final call belongs to a doctor.' },
      { q: 'Can we work if I have a diagnosis (e.g. psoriasis)?', a: 'Yes. For conditions with a psychosomatic component, hypnotherapy reduces the frequency and severity of flare-ups, alongside dermatological treatment, not instead of it.' },
      { q: 'Does this mean I made it all up?', a: 'No. The symptom is real, created by a real nervous system. You did not invent it and you do not control it consciously, which is exactly why work at the subconscious level is needed.' },
      { q: 'Will the symptom go away for good?', a: 'If the emotional cause has been worked through, usually yes. If a new prolonged stress enters your life, the body may "speak" again, but you will already have the tool.' },
      { q: 'Do you work with children?', a: 'With teenagers from 14, yes, with parental consent. I do not work with younger children.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Any physical symptom first requires a medical examination to rule out an organic cause. Hypnotherapy complements treatment; it does not replace it.',
    references,
    cta: { title: 'Tests find nothing, but the symptom is there?', text: 'Message me the code word "Restart" and describe what is happening in your body. I will tell you whether I can help', button: 'Message "Restart"' },
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
