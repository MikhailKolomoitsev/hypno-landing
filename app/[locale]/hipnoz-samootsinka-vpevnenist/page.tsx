import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-samootsinka-vpevnenist';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Sowislo J.F., Orth U. (2013). Does low self-esteem predict depression and anxiety? A meta-analysis of longitudinal studies. Psychological Bulletin.', url: 'https://pubmed.ncbi.nlm.nih.gov/22730921/' },
  { label: 'Kirsch I., Montgomery G., Sapirstein G. (1995). Hypnosis as an adjunct to cognitive-behavioral psychotherapy: a meta-analysis. Journal of Consulting and Clinical Psychology.', url: 'https://pubmed.ncbi.nlm.nih.gov/7751482/' },
  { label: 'Pekala R.J. et al. (2004). Self-hypnosis relapse prevention training with chronic drug/alcohol users: effects on self-esteem, affect, and relapse. American Journal of Clinical Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/15190730/' },
  { label: 'Jiang H. et al. (2017). Brain activity and functional connectivity associated with hypnosis. Cerebral Cortex.', url: 'https://pubmed.ncbi.nlm.nih.gov/27469596/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз для самооцінки та впевненості в собі | kolomoitsev.com',
    metaDescription: 'Низька самооцінка, синдром самозванця, страх оцінки: звідки береться «я недостатньо хороший», чому афірмації не працюють і як гіпнотерапія змінює образ себе на глибині.',
    breadcrumb: 'Гіпноз для самооцінки',
    titleLine1: 'Гіпноз для самооцінки',
    titleLine2: 'та впевненості в собі',
    lead: 'Ви можете мати дипломи, досягнення й підтвердження від інших — і все одно всередині жити з тихим «я недостатньо хороший». Самооцінка не складається з фактів. Вона складається з того, що підсвідомість вирішила про вас дуже давно. І саме тому її не змінити аргументами.',
    sections: [
      {
        heading: 'Звідки береться низька самооцінка',
        paragraphs: [
          'Образ себе формується в дитинстві — з того, як на нас дивилися, що казали, за що хвалили й за що соромили. Дитина не може оцінити об\'єктивність: якщо значуща людина дає зрозуміти «ти не такий», це записується як факт. Пізніше мозок просто підбирає докази під уже ухвалений вирок.',
          'Так працює підтверджувальне упередження: похвалу ви не чуєте або знецінюєте («просто пощастило»), а критику запам\'ятовуєте на роки. Самооцінка не змінюється від нових досягнень, бо фільтр відкидає їх ще на вході.',
        ],
      },
      {
        heading: 'Як це проявляється',
        bullets: [
          'Синдром самозванця: «мене ось-ось викриють», попри реальні результати.',
          'Неможливість сказати «ні», страх розчарувати, постійне догоджання.',
          'Знецінення власних успіхів, невміння приймати компліменти.',
          'Страх оцінки: виступи, співбесіди, публікація своєї роботи.',
          'Порівняння себе з іншими — завжди не на свою користь.',
          'Складно називати ціну на свої послуги, просити підвищення.',
          'Стосунки, де ви погоджуєтеся на менше, ніж заслуговуєте.',
          'Внутрішній критик, що коментує кожну дію.',
        ],
      },
      {
        heading: 'Чому афірмації та «просто повір у себе» не працюють',
        paragraphs: [
          'Афірмація «я впевнений у собі» звучить на рівні свідомості — а підсвідомість у відповідь підіймає всі докази протилежного. Для людини з низькою самооцінкою афірмації часто навіть шкодять: контраст між словами й внутрішнім відчуттям посилює відчуття фальші.',
          'Зміна можлива лише там, де переконання записане. Нейровізуалізація (Jiang et al., 2017) показує: у гіпнотичному трансі знижується активність ділянки мозку, що відповідає за самомоніторинг і критичну оцінку, — тобто того самого «внутрішнього критика», який блокує нову інформацію. Саме тому в трансі можна змінити образ себе, а в звичайному стані — ні.',
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Чому це важливо: Sowislo & Orth (2013)', text: 'Метааналіз 77 лонгітюдних досліджень: низька самооцінка — не наслідок, а передвісник депресії та тривоги. Робота з нею — профілактика, а не косметика.' },
          { title: 'Гіпноз посилює терапію: Kirsch et al. (1995)', text: 'Додавання гіпнозу до КПТ суттєво покращує результат — зокрема в роботі з переконаннями про себе.' },
          { title: 'Самогіпноз і самооцінка: Pekala et al. (2004)', text: 'Навчання самогіпнозу достовірно підвищувало самооцінку й покращувало емоційний стан навіть у складній групі — людей із залежностями.' },
        ],
      },
      {
        heading: 'Як проходить робота',
        steps: [
          { title: 'Карта переконань', text: 'Що саме ви про себе «знаєте»: «я нецікавий», «я не заслуговую», «я маю бути ідеальним, щоб мене любили». Зазвичай це 2–3 ключові переконання, з яких виростає все інше.' },
          { title: 'Джерело', text: 'У трансі підсвідомість веде до моментів, де ці переконання закріпилися. Часто це конкретні сцени з дитинства, які ви давно не згадували.' },
          { title: 'Переосмислення', text: 'Ту саму сцену проживаємо з позиції дорослого: дитина не була «поганою» — дорослі поруч не впоралися. Емоційний заряд спадає, вирок перестає бути фактом.' },
          { title: 'Новий образ себе', text: 'Формуємо і «прописуємо» в трансі досвід себе цінного, компетентного, гідного. Не як афірмацію, а як пережитий стан, до якого мозок знає дорогу.' },
          { title: 'Закріплення', text: 'Техніка самогіпнозу для ситуацій оцінки: перед виступом, переговорами, важкою розмовою.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Зазвичай 3–5 сесій. Перша дає відчутне полегшення — внутрішній критик стає тихішим. Стійка зміна образу себе потребує часу на закріплення: нові реакції мають пройти перевірку реальними ситуаціями. Якщо запит вузький (страх публічних виступів, неможливість назвати ціну) — часто достатньо 2–3.'],
        callout: 'Низька самооцінка, що супроводжується тривалим пригніченим настроєм, втратою інтересу до життя або думками про самопошкодження, може бути частиною депресії. У такому разі спочатку консультація психіатра; гіпнотерапія може йти паралельно.',
      },
    ],
    faq: [
      { q: 'Чи не стану я після гіпнозу самовпевненим або нахабним?', a: 'Ні. Здорова самооцінка — це не «я кращий за інших», а «я в порядку такий, як є». Нахабство зазвичай якраз компенсує низьку самооцінку; після роботи потреба в ній зникає.' },
      { q: 'Моя самооцінка залежить від думки інших. Це можна змінити?', a: 'Так, це один із найчастіших запитів. У трансі переносимо «центр оцінки» ззовні всередину — і думка інших стає інформацією, а не вироком.' },
      { q: 'Я успішна людина, але всередині відчуваю себе самозванцем.', a: 'Класичний випадок, коли факти не допомагають. Працюємо з переконанням, яке фільтрує факти, — після цього досягнення нарешті «зараховуються».' },
      { q: 'Чи допоможе гіпноз при страху публічних виступів?', a: 'Так, це дуже вдячний запит: зазвичай 2–3 сесії. Працюємо і з самооцінкою, і з конкретною реакцією тіла перед аудиторією.' },
      { q: 'Чи працює онлайн?', a: 'Так, усі сесії онлайн через Zoom. Для цієї теми формат не має значення — робота йде з внутрішнім образом, а не з обстановкою.' },
    ],
    disclaimer: 'Стаття має інформаційний характер і не є медичною порадою. Якщо низька самооцінка супроводжується симптомами депресії, зверніться до лікаря.',
    references,
    cta: { title: 'Втомилися від внутрішнього критика?', text: 'Напишіть кодове слово «Перезапуск» і опишіть, у яких ситуаціях невпевненість заважає найбільше — я скажу, чи зможу допомогти', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз для самооценки и уверенности в себе | kolomoitsev.com',
    metaDescription: 'Низкая самооценка, синдром самозванца, страх оценки: откуда берётся «я недостаточно хорош», почему аффирмации не работают и как гипнотерапия меняет образ себя на глубине.',
    breadcrumb: 'Гипноз для самооценки',
    titleLine1: 'Гипноз для самооценки',
    titleLine2: 'и уверенности в себе',
    lead: 'У вас могут быть дипломы, достижения и подтверждения от других — и всё равно внутри жить с тихим «я недостаточно хорош». Самооценка не складывается из фактов. Она складывается из того, что подсознание решило о вас очень давно. И именно поэтому её не изменить аргументами.',
    sections: [
      {
        heading: 'Откуда берётся низкая самооценка',
        paragraphs: [
          'Образ себя формируется в детстве — из того, как на нас смотрели, что говорили, за что хвалили и за что стыдили. Ребёнок не может оценить объективность: если значимый человек даёт понять «ты не такой», это записывается как факт. Позже мозг просто подбирает доказательства под уже вынесенный приговор.',
          'Так работает подтверждающее искажение: похвалу вы не слышите или обесцениваете («просто повезло»), а критику запоминаете на годы. Самооценка не меняется от новых достижений, потому что фильтр отбрасывает их ещё на входе.',
        ],
      },
      {
        heading: 'Как это проявляется',
        bullets: [
          'Синдром самозванца: «меня вот-вот разоблачат», несмотря на реальные результаты.',
          'Невозможность сказать «нет», страх разочаровать, постоянное угождение.',
          'Обесценивание собственных успехов, неумение принимать комплименты.',
          'Страх оценки: выступления, собеседования, публикация своей работы.',
          'Сравнение себя с другими — всегда не в свою пользу.',
          'Сложно называть цену на свои услуги, просить повышение.',
          'Отношения, где вы соглашаетесь на меньшее, чем заслуживаете.',
          'Внутренний критик, комментирующий каждое действие.',
        ],
      },
      {
        heading: 'Почему аффирмации и «просто поверь в себя» не работают',
        paragraphs: [
          'Аффирмация «я уверен в себе» звучит на уровне сознания — а подсознание в ответ поднимает все доказательства обратного. Для человека с низкой самооценкой аффирмации часто даже вредят: контраст между словами и внутренним ощущением усиливает чувство фальши.',
          'Изменение возможно только там, где убеждение записано. Нейровизуализация (Jiang et al., 2017) показывает: в гипнотическом трансе снижается активность участка мозга, отвечающего за самомониторинг и критическую оценку, — того самого «внутреннего критика», который блокирует новую информацию. Именно поэтому в трансе можно изменить образ себя, а в обычном состоянии — нет.',
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Почему это важно: Sowislo & Orth (2013)', text: 'Метаанализ 77 лонгитюдных исследований: низкая самооценка — не следствие, а предвестник депрессии и тревоги. Работа с ней — профилактика, а не косметика.' },
          { title: 'Гипноз усиливает терапию: Kirsch et al. (1995)', text: 'Добавление гипноза к КПТ существенно улучшает результат — в частности в работе с убеждениями о себе.' },
          { title: 'Самогипноз и самооценка: Pekala et al. (2004)', text: 'Обучение самогипнозу достоверно повышало самооценку и улучшало эмоциональное состояние даже в сложной группе — людей с зависимостями.' },
        ],
      },
      {
        heading: 'Как проходит работа',
        steps: [
          { title: 'Карта убеждений', text: 'Что именно вы о себе «знаете»: «я неинтересный», «я не заслуживаю», «я должен быть идеальным, чтобы меня любили». Обычно это 2–3 ключевых убеждения, из которых вырастает всё остальное.' },
          { title: 'Источник', text: 'В трансе подсознание ведёт к моментам, где эти убеждения закрепились. Часто это конкретные сцены из детства, которые вы давно не вспоминали.' },
          { title: 'Переосмысление', text: 'Ту же сцену проживаем с позиции взрослого: ребёнок не был «плохим» — взрослые рядом не справились. Эмоциональный заряд спадает, приговор перестаёт быть фактом.' },
          { title: 'Новый образ себя', text: 'Формируем и «прописываем» в трансе опыт себя ценного, компетентного, достойного. Не как аффирмацию, а как пережитое состояние, к которому мозг знает дорогу.' },
          { title: 'Закрепление', text: 'Техника самогипноза для ситуаций оценки: перед выступлением, переговорами, трудным разговором.' },
        ],
      },
      {
        heading: 'Сколько сеансов нужно',
        paragraphs: ['Обычно 3–5 сессий. Первая даёт ощутимое облегчение — внутренний критик становится тише. Устойчивое изменение образа себя требует времени на закрепление: новые реакции должны пройти проверку реальными ситуациями. Если запрос узкий (страх публичных выступлений, невозможность назвать цену) — часто достаточно 2–3.'],
        callout: 'Низкая самооценка, сопровождающаяся длительным подавленным настроением, потерей интереса к жизни или мыслями о самоповреждении, может быть частью депрессии. В таком случае сначала консультация психиатра; гипнотерапия может идти параллельно.',
      },
    ],
    faq: [
      { q: 'Не стану ли я после гипноза самоуверенным или наглым?', a: 'Нет. Здоровая самооценка — это не «я лучше других», а «я в порядке такой, какой есть». Наглость обычно как раз компенсирует низкую самооценку; после работы потребность в ней исчезает.' },
      { q: 'Моя самооценка зависит от мнения других. Это можно изменить?', a: 'Да, это один из самых частых запросов. В трансе переносим «центр оценки» снаружи внутрь — и мнение других становится информацией, а не приговором.' },
      { q: 'Я успешный человек, но внутри чувствую себя самозванцем.', a: 'Классический случай, когда факты не помогают. Работаем с убеждением, которое фильтрует факты, — после этого достижения наконец «засчитываются».' },
      { q: 'Поможет ли гипноз при страхе публичных выступлений?', a: 'Да, это очень благодарный запрос: обычно 2–3 сессии. Работаем и с самооценкой, и с конкретной реакцией тела перед аудиторией.' },
      { q: 'Работает ли онлайн?', a: 'Да, все сессии онлайн через Zoom. Для этой темы формат не имеет значения — работа идёт с внутренним образом, а не с обстановкой.' },
    ],
    disclaimer: 'Статья носит информационный характер и не является медицинской рекомендацией. Если низкая самооценка сопровождается симптомами депрессии, обратитесь к врачу.',
    references,
    cta: { title: 'Устали от внутреннего критика?', text: 'Напишите кодовое слово «Перезапуск» и опишите, в каких ситуациях неуверенность мешает больше всего — я скажу, смогу ли помочь', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Self-Esteem and Confidence | kolomoitsev.com',
    metaDescription: 'Low self-esteem, impostor syndrome, fear of judgment: where "I am not good enough" comes from, why affirmations fail and how hypnotherapy changes your self-image at depth.',
    breadcrumb: 'Hypnosis for self-esteem',
    titleLine1: 'Hypnosis for Self-Esteem',
    titleLine2: 'and confidence',
    lead: 'You can have degrees, achievements and validation from others and still live with a quiet "I am not good enough" inside. Self-esteem is not made of facts. It is made of what your subconscious decided about you long ago. That is exactly why arguments cannot change it.',
    sections: [
      {
        heading: 'Where low self-esteem comes from',
        paragraphs: [
          'Your self-image forms in childhood, from how people looked at you, what they said, what you were praised for and what you were shamed for. A child cannot judge objectivity: if a significant adult signals "you are not right", it is recorded as fact. Later the brain simply collects evidence to fit the verdict already passed.',
          'This is confirmation bias at work: praise goes unheard or gets dismissed ("just luck"), while criticism is remembered for years. Self-esteem does not change with new achievements because the filter rejects them at the door.',
        ],
      },
      {
        heading: 'How it shows up',
        bullets: [
          'Impostor syndrome: "they are about to find me out", despite real results.',
          'Inability to say no, fear of disappointing, constant people-pleasing.',
          'Dismissing your own successes, inability to accept compliments.',
          'Fear of judgment: presentations, interviews, publishing your work.',
          'Comparing yourself with others, always unfavorably.',
          'Difficulty naming your price or asking for a raise.',
          'Relationships where you settle for less than you deserve.',
          'An inner critic commenting on every move.',
        ],
      },
      {
        heading: 'Why affirmations and "just believe in yourself" do not work',
        paragraphs: [
          'The affirmation "I am confident" is spoken at the conscious level, and the subconscious answers by raising every piece of evidence to the contrary. For someone with low self-esteem, affirmations can even backfire: the gap between the words and the inner feeling heightens the sense of fakeness.',
          'Change is only possible where the belief is stored. Neuroimaging (Jiang et al., 2017) shows that in hypnotic trance, activity drops in the brain region responsible for self-monitoring and critical evaluation, the very "inner critic" that blocks new information. That is why self-image can change in trance and not in the ordinary state.',
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Why it matters: Sowislo & Orth (2013)', text: 'A meta-analysis of 77 longitudinal studies: low self-esteem is not a consequence but a predictor of depression and anxiety. Working on it is prevention, not cosmetics.' },
          { title: 'Hypnosis strengthens therapy: Kirsch et al. (1995)', text: 'Adding hypnosis to CBT substantially improves outcomes, including in work with beliefs about oneself.' },
          { title: 'Self-hypnosis and self-esteem: Pekala et al. (2004)', text: 'Self-hypnosis training reliably raised self-esteem and improved emotional state even in a difficult group: people with addictions.' },
        ],
      },
      {
        heading: 'How the work goes',
        steps: [
          { title: 'Mapping the beliefs', text: 'What exactly you "know" about yourself: "I am boring", "I don\'t deserve it", "I must be perfect to be loved". Usually 2–3 core beliefs from which everything else grows.' },
          { title: 'The source', text: 'In trance the subconscious leads to the moments where these beliefs took hold. Often specific childhood scenes you have not recalled in years.' },
          { title: 'Reframing', text: 'We relive the same scene from an adult perspective: the child was not "bad"; the adults around did not cope. The emotional charge drops and the verdict stops being a fact.' },
          { title: 'A new self-image', text: 'We build and "install" in trance the experience of yourself as valuable, competent, worthy. Not as an affirmation but as a lived state the brain knows the way back to.' },
          { title: 'Anchoring', text: 'A self-hypnosis technique for evaluation situations: before a presentation, negotiation or difficult conversation.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['Usually 3–5 sessions. The first brings tangible relief: the inner critic gets quieter. A lasting change in self-image takes time to consolidate: new responses need to be tested in real situations. If the request is narrow (fear of public speaking, inability to name a price), 2–3 are often enough.'],
        callout: 'Low self-esteem accompanied by prolonged low mood, loss of interest in life or thoughts of self-harm may be part of depression. In that case, a psychiatric consultation comes first; hypnotherapy can run alongside.',
      },
    ],
    faq: [
      { q: 'Will hypnosis make me arrogant or cocky?', a: 'No. Healthy self-esteem is not "I am better than others" but "I am fine as I am". Arrogance usually compensates for low self-esteem; after the work the need for it disappears.' },
      { q: 'My self-esteem depends on what others think. Can that change?', a: 'Yes, it is one of the most common requests. In trance we move the "center of evaluation" from outside to inside, and other people\'s opinions become information rather than a verdict.' },
      { q: 'I am successful, but inside I feel like an impostor.', a: 'The classic case where facts do not help. We work with the belief that filters the facts; afterwards, achievements finally "count".' },
      { q: 'Does hypnosis help with fear of public speaking?', a: 'Yes, a very rewarding request: usually 2–3 sessions. We work both on self-esteem and on the specific bodily response in front of an audience.' },
      { q: 'Does it work online?', a: 'Yes, all sessions are online via Zoom. For this topic the format does not matter: the work is with your inner image, not your surroundings.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. If low self-esteem is accompanied by symptoms of depression, see a doctor.',
    references,
    cta: { title: 'Tired of the inner critic?', text: 'Message me the code word "Restart" and describe where insecurity gets in the way most. I will tell you whether I can help', button: 'Message "Restart"' },
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
