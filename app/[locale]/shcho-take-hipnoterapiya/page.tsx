import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'shcho-take-hipnoterapiya';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Jiang H., White M.P., Greicius M.D., Waelde L.C., Spiegel D. (2017). Brain activity and functional connectivity associated with hypnosis. Cerebral Cortex.', url: 'https://pubmed.ncbi.nlm.nih.gov/27469596/' },
  { label: 'Jensen M.P. et al. (2017). New directions in hypnosis research: strategies for advancing the cognitive and clinical neuroscience of hypnosis. Neuroscience of Consciousness.', url: 'https://pubmed.ncbi.nlm.nih.gov/29034102/' },
  { label: 'Thompson T. et al. (2019). The effectiveness of hypnosis for pain relief: a systematic review and meta-analysis of 85 controlled experimental trials. Neuroscience & Biobehavioral Reviews.', url: 'https://pubmed.ncbi.nlm.nih.gov/30790634/' },
  { label: 'Milling L.S., Valentine K.E., McCarley H.S., LoStimolo L.M. (2019). A meta-analysis of hypnotic interventions for depression symptoms: high hopes for hypnosis? American Journal of Clinical Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/34874235/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Що таке гіпнотерапія і як працює гіпноз: повний гід | kolomoitsev.com',
    metaDescription: 'Гіпнотерапія простими словами: що відбувається з мозком у трансі, з чим вона працює, що показують дослідження, як проходить сесія і як вибрати спеціаліста.',
    breadcrumb: 'Що таке гіпнотерапія',
    titleLine1: 'Що таке гіпнотерапія',
    titleLine2: 'і як насправді працює гіпноз',
    lead: 'Гіпноз оточений міфами більше, ніж будь-який інший психологічний метод. Водночас це один із найстаріших і найкраще досліджених інструментів зміни поведінки. Ця сторінка — щоб розібратися без містики та маркетингу.',
    sections: [
      {
        heading: 'Коротке визначення',
        paragraphs: [
          'Гіпноз — це стан зосередженої уваги та зниженої критичності, у якому підсвідомість стає більш відкритою до змін. Гіпнотерапія — використання цього стану для психотерапевтичної роботи: зі страхами, звичками, болем, тривогою, переконаннями про себе.',
          'Це не сон, не втрата контролю і не «зомбування». Ви чуєте кожне слово, пам\'ятаєте сесію і можете вийти з трансу в будь-який момент. Якщо порівнювати з чимось знайомим — це схоже на стан, коли ви захоплено читаєте книгу і не чуєте, як вас кличуть.',
        ],
      },
      {
        heading: 'Що відбувається з мозком у трансі',
        paragraphs: [
          'Дослідження на фМРТ у Стенфорді (Jiang et al., 2017) показали три зміни у мозку під час гіпнозу: знижується активність дорсальної передньої поясної кори (ми менше «моніторимо» і сумніваємось), посилюється зв\'язок між префронтальною корою та інсулою (мозок краще керує тілом), і послаблюється зв\'язок між префронтальною корою та мережею пасивного режиму (менше рефлексії про власні дії).',
          'Простіше кажучи: у трансі свідомий «критик» відступає, а канал між думкою та тілесною реакцією стає ширшим. Саме тому в гіпнозі можна змінити те, що не піддається логічним аргументам: автоматичні реакції страху, звички, тілесні симптоми.',
        ],
      },
      {
        heading: 'З чим працює гіпнотерапія',
        paragraphs: ['Нижче — напрями, з якими я працюю, і сторінки з деталями по кожному:'],
        links: [
          { slug: 'hipnoz-vid-tryvohy-panichni-ataky', label: 'Тривога та панічні атаки', text: 'Зупинка панічного циклу' },
          { slug: 'hipnoz-pry-depresiyi', label: 'Депресія', text: 'Доповнення до лікування або самостійна робота' },
          { slug: 'hipnoz-vid-boliu', label: 'Хронічний біль', text: 'Мігрень, спина, СПК, фіброміалгія' },
          { slug: 'hipnoz-psykhosomatyka', label: 'Психосоматика', text: 'Коли тіло говорить замість вас' },
          { slug: 'hipnoz-vid-bezsonnya', label: 'Безсоння', text: 'Повернення сну без снодійних' },
          { slug: 'hipnoz-kynuty-palyty', label: 'Куріння', text: '1–3 сесії' },
          { slug: 'hipnoz-dlya-schudnennya', label: 'Харчова поведінка', text: 'Емоційне переїдання, тяга до солодкого' },
          { slug: 'rehresyvnyy-hipnoz', label: 'Регресивний гіпноз', text: 'Пошук кореня проблеми в минулому' },
          { slug: 'rozkryttya-tvorchoho-potentsialu', label: 'Творчий потенціал', text: 'Страх оцінки, синдром самозванця' },
          { slug: 'yak-zlizty-z-antydepresantiv', label: 'Відміна антидепресантів', text: 'Підтримка поруч із психіатром' },
          { slug: 'hipnoz-vid-fobiy', label: 'Фобії та страхи', text: 'Польоти, висота, павуки, уколи' },
          { slug: 'hipnoz-vid-prokrastynatsiyi', label: 'Прокрастинація', text: 'Самосаботаж, внутрішній опір' },
          { slug: 'hipnoz-samootsinka-vpevnenist', label: 'Самооцінка', text: 'Синдром самозванця, внутрішній критик' },
          { slug: 'hipnoz-vid-zalezhnostey', label: 'Залежності', text: 'Алкоголь, азартні ігри, екрани' },
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Біль', text: 'Метааналіз 85 досліджень (Thompson et al., 2019): гіпноз достовірно знижує інтенсивність болю, у частини людей — на рівні анальгетиків.' },
          { title: 'Депресія', text: 'Метааналіз Milling et al. (2019): учасники гіпнотерапії в середньому показали кращий результат, ніж 76% контрольної групи.' },
          { title: 'Тривога, сон, СПК, куріння', text: 'Для кожного з цих напрямів є контрольовані дослідження з позитивним результатом — деталі та посилання на відповідних сторінках.' },
        ],
        callout: 'Гіпнотерапія — не альтернатива медицині. При серйозних діагнозах вона доповнює лікування у лікаря, а не замінює його.',
      },
      {
        heading: 'Як проходить сесія',
        steps: [
          { title: 'Розмова', text: 'Що саме турбує, коли почалося, що вже пробували. Формулюємо конкретну мету на сесію. 15–20 хвилин.' },
          { title: 'Індукція', text: 'Вхід у транс через розслаблення та фокус уваги. Зазвичай 5–15 хвилин. Ніякого маятника.' },
          { title: 'Робота', text: 'Залежно від запиту: пошук кореня проблеми, зміна реакцій, робота з образами й переконаннями, навчання самогіпнозу.' },
          { title: 'Вихід і обговорення', text: 'М\'який вихід, обговорення досвіду, рекомендації до наступної зустрічі.' },
        ],
        paragraphs: ['Сесія триває 60–90 хвилин і проходить онлайн через Zoom. Для більшості запитів потрібно від 1 до 6 зустрічей.'],
      },
      {
        heading: 'Чи всіх можна загіпнотизувати?',
        paragraphs: [
          'Здатність входити в транс (гіпнабельність) у людей різна, але приблизно 80–85% входять у транс достатньої глибини для терапевтичної роботи. Високий інтелект і скептицизм не заважають — заважає лише небажання.',
          'Гіпноз не працює проти волі. Якщо ви прийшли «перевірити, чи це спрацює», а не змінитися — результат буде слабшим. Якщо є реальна мета — майже завжди виходить.',
        ],
      },
      {
        heading: 'Як вибрати гіпнотерапевта',
        bullets: [
          'Сертифікація від визнаної школи (у мене — International Academy of Hypnosis, Лондон; сертифікат показую на головній сторінці).',
          'Чесність щодо меж методу: якщо вам обіцяють вилікувати все за одну сесію — це маркетинг.',
          'Безкоштовна перша розмова: нормальний спеціаліст спочатку з\'ясує, чи підходить ваш запит.',
          'Відгуки, бажано відео: їх важко підробити.',
          'Відсутність тиску: пакети «тільки сьогодні», передоплата за 10 сесій — тривожні ознаки.',
        ],
      },
    ],
    faq: [
      { q: 'Чи небезпечний гіпноз?', a: 'Для здорової людини — ні. Абсолютні протипоказання: психоз, важка епілепсія, активні суїцидальні наміри, сп\'яніння. Повний список — на сторінці «Протипоказання».' },
      { q: 'Чи буду я пам\'ятати сесію?', a: 'Так. Амнезія після гіпнозу — рідкісне явище, яке трапляється лише при спеціальному навіюванні, яке я не використовую.' },
      { q: 'Чим гіпнотерапія відрізняється від психотерапії?', a: 'Гіпнотерапія — один із методів психотерапії. Відмінність від розмовних підходів у тому, що робота йде на рівні підсвідомості, тому зміни часто настають швидше.' },
      { q: 'Чи працює онлайн?', a: 'Так. Гіпноз працює через голос і увагу; за роки роботи онлайн я не бачу різниці в результатах порівняно з очними сесіями.' },
      { q: 'Скільки коштує і як записатися?', a: 'Напишіть у Telegram кодове слово «Перезапуск» — перша консультація безкоштовна, на ній обговоримо запит, формат і вартість.' },
    ],
    references,
    cta: { title: 'Є запит — не впевнені, чи підійде гіпноз?', text: 'Напишіть кодове слово «Перезапуск» — на безкоштовній консультації я чесно скажу, чи зможу допомогти', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Что такое гипнотерапия и как работает гипноз: полный гид | kolomoitsev.com',
    metaDescription: 'Гипнотерапия простыми словами: что происходит с мозгом в трансе, с чем она работает, что показывают исследования, как проходит сессия и как выбрать специалиста.',
    breadcrumb: 'Что такое гипнотерапия',
    titleLine1: 'Что такое гипнотерапия',
    titleLine2: 'и как на самом деле работает гипноз',
    lead: 'Гипноз окружён мифами больше, чем любой другой психологический метод. При этом это один из самых старых и лучше всего исследованных инструментов изменения поведения. Эта страница — чтобы разобраться без мистики и маркетинга.',
    sections: [
      {
        heading: 'Короткое определение',
        paragraphs: [
          'Гипноз — это состояние сосредоточенного внимания и сниженной критичности, в котором подсознание становится более открытым к изменениям. Гипнотерапия — использование этого состояния для психотерапевтической работы: со страхами, привычками, болью, тревогой, убеждениями о себе.',
          'Это не сон, не потеря контроля и не «зомбирование». Вы слышите каждое слово, помните сессию и можете выйти из транса в любой момент. Если сравнивать с чем-то знакомым — это похоже на состояние, когда вы увлечённо читаете книгу и не слышите, как вас зовут.',
        ],
      },
      {
        heading: 'Что происходит с мозгом в трансе',
        paragraphs: [
          'Исследования на фМРТ в Стэнфорде (Jiang et al., 2017) показали три изменения в мозге во время гипноза: снижается активность дорсальной передней поясной коры (мы меньше «мониторим» и сомневаемся), усиливается связь между префронтальной корой и инсулой (мозг лучше управляет телом), и ослабевает связь между префронтальной корой и сетью пассивного режима (меньше рефлексии о собственных действиях).',
          'Проще говоря: в трансе сознательный «критик» отступает, а канал между мыслью и телесной реакцией становится шире. Именно поэтому в гипнозе можно изменить то, что не поддаётся логическим аргументам: автоматические реакции страха, привычки, телесные симптомы.',
        ],
      },
      {
        heading: 'С чем работает гипнотерапия',
        paragraphs: ['Ниже — направления, с которыми я работаю, и страницы с деталями по каждому:'],
        links: [
          { slug: 'hipnoz-vid-tryvohy-panichni-ataky', label: 'Тревога и панические атаки', text: 'Остановка панического цикла' },
          { slug: 'hipnoz-pry-depresiyi', label: 'Депрессия', text: 'Дополнение к лечению или самостоятельная работа' },
          { slug: 'hipnoz-vid-boliu', label: 'Хроническая боль', text: 'Мигрень, спина, СРК, фибромиалгия' },
          { slug: 'hipnoz-psykhosomatyka', label: 'Психосоматика', text: 'Когда тело говорит вместо вас' },
          { slug: 'hipnoz-vid-bezsonnya', label: 'Бессонница', text: 'Возвращение сна без снотворных' },
          { slug: 'hipnoz-kynuty-palyty', label: 'Курение', text: '1–3 сессии' },
          { slug: 'hipnoz-dlya-schudnennya', label: 'Пищевое поведение', text: 'Эмоциональное переедание, тяга к сладкому' },
          { slug: 'rehresyvnyy-hipnoz', label: 'Регрессивный гипноз', text: 'Поиск корня проблемы в прошлом' },
          { slug: 'rozkryttya-tvorchoho-potentsialu', label: 'Творческий потенциал', text: 'Страх оценки, синдром самозванца' },
          { slug: 'yak-zlizty-z-antydepresantiv', label: 'Отмена антидепрессантов', text: 'Поддержка рядом с психиатром' },
          { slug: 'hipnoz-vid-fobiy', label: 'Фобии и страхи', text: 'Полёты, высота, пауки, уколы' },
          { slug: 'hipnoz-vid-prokrastynatsiyi', label: 'Прокрастинация', text: 'Самосаботаж, внутреннее сопротивление' },
          { slug: 'hipnoz-samootsinka-vpevnenist', label: 'Самооценка', text: 'Синдром самозванца, внутренний критик' },
          { slug: 'hipnoz-vid-zalezhnostey', label: 'Зависимости', text: 'Алкоголь, азартные игры, экраны' },
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Боль', text: 'Метаанализ 85 исследований (Thompson et al., 2019): гипноз достоверно снижает интенсивность боли, у части людей — на уровне анальгетиков.' },
          { title: 'Депрессия', text: 'Метаанализ Milling et al. (2019): участники гипнотерапии в среднем показали лучший результат, чем 76% контрольной группы.' },
          { title: 'Тревога, сон, СРК, курение', text: 'Для каждого из этих направлений есть контролируемые исследования с положительным результатом — детали и ссылки на соответствующих страницах.' },
        ],
        callout: 'Гипнотерапия — не альтернатива медицине. При серьёзных диагнозах она дополняет лечение у врача, а не заменяет его.',
      },
      {
        heading: 'Как проходит сессия',
        steps: [
          { title: 'Разговор', text: 'Что именно беспокоит, когда началось, что уже пробовали. Формулируем конкретную цель на сессию. 15–20 минут.' },
          { title: 'Индукция', text: 'Вход в транс через расслабление и фокус внимания. Обычно 5–15 минут. Никакого маятника.' },
          { title: 'Работа', text: 'В зависимости от запроса: поиск корня проблемы, изменение реакций, работа с образами и убеждениями, обучение самогипнозу.' },
          { title: 'Выход и обсуждение', text: 'Мягкий выход, обсуждение опыта, рекомендации до следующей встречи.' },
        ],
        paragraphs: ['Сессия длится 60–90 минут и проходит онлайн через Zoom. Для большинства запросов нужно от 1 до 6 встреч.'],
      },
      {
        heading: 'Всех ли можно загипнотизировать?',
        paragraphs: [
          'Способность входить в транс (гипнабельность) у людей разная, но примерно 80–85% входят в транс достаточной глубины для терапевтической работы. Высокий интеллект и скептицизм не мешают — мешает только нежелание.',
          'Гипноз не работает против воли. Если вы пришли «проверить, сработает ли», а не измениться — результат будет слабее. Если есть реальная цель — почти всегда получается.',
        ],
      },
      {
        heading: 'Как выбрать гипнотерапевта',
        bullets: [
          'Сертификация от признанной школы (у меня — International Academy of Hypnosis, Лондон; сертификат показываю на главной странице).',
          'Честность о границах метода: если вам обещают вылечить всё за одну сессию — это маркетинг.',
          'Бесплатный первый разговор: нормальный специалист сначала выяснит, подходит ли ваш запрос.',
          'Отзывы, желательно видео: их трудно подделать.',
          'Отсутствие давления: пакеты «только сегодня», предоплата за 10 сессий — тревожные признаки.',
        ],
      },
    ],
    faq: [
      { q: 'Опасен ли гипноз?', a: 'Для здорового человека — нет. Абсолютные противопоказания: психоз, тяжёлая эпилепсия, активные суицидальные намерения, опьянение. Полный список — на странице «Противопоказания».' },
      { q: 'Буду ли я помнить сессию?', a: 'Да. Амнезия после гипноза — редкое явление, которое случается только при специальном внушении, которое я не использую.' },
      { q: 'Чем гипнотерапия отличается от психотерапии?', a: 'Гипнотерапия — один из методов психотерапии. Отличие от разговорных подходов в том, что работа идёт на уровне подсознания, поэтому изменения часто наступают быстрее.' },
      { q: 'Работает ли онлайн?', a: 'Да. Гипноз работает через голос и внимание; за годы работы онлайн я не вижу разницы в результатах по сравнению с очными сессиями.' },
      { q: 'Сколько стоит и как записаться?', a: 'Напишите в Telegram кодовое слово «Перезапуск» — первая консультация бесплатна, на ней обсудим запрос, формат и стоимость.' },
    ],
    references,
    cta: { title: 'Есть запрос — не уверены, подойдёт ли гипноз?', text: 'Напишите кодовое слово «Перезапуск» — на бесплатной консультации я честно скажу, смогу ли помочь', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'What Is Hypnotherapy and How Hypnosis Works: A Complete Guide | kolomoitsev.com',
    metaDescription: 'Hypnotherapy in plain language: what happens in the brain in trance, what it treats, what research shows, how a session goes and how to choose a practitioner.',
    breadcrumb: 'What is hypnotherapy',
    titleLine1: 'What Is Hypnotherapy',
    titleLine2: 'and how hypnosis really works',
    lead: 'Hypnosis is surrounded by more myths than any other psychological method. At the same time it is one of the oldest and best-researched tools for changing behavior. This page is here to make sense of it without mysticism or marketing.',
    sections: [
      {
        heading: 'A short definition',
        paragraphs: [
          'Hypnosis is a state of focused attention and reduced critical judgment in which the subconscious becomes more open to change. Hypnotherapy is the use of that state for psychotherapeutic work: with fears, habits, pain, anxiety, beliefs about yourself.',
          'It is not sleep, not loss of control and not "zombification". You hear every word, remember the session and can leave the trance at any moment. If you want a familiar comparison, it is like being so absorbed in a book that you do not hear someone calling you.',
        ],
      },
      {
        heading: 'What happens in the brain in trance',
        paragraphs: [
          'fMRI research at Stanford (Jiang et al., 2017) showed three changes in the brain during hypnosis: reduced activity in the dorsal anterior cingulate cortex (less monitoring and doubting), stronger connectivity between the prefrontal cortex and the insula (better control over the body), and weaker connectivity between the prefrontal cortex and the default mode network (less reflection on one\'s own actions).',
          'In plain terms: in trance the conscious "critic" steps back and the channel between thought and bodily response widens. That is why hypnosis can change what logical argument cannot reach: automatic fear responses, habits, physical symptoms.',
        ],
      },
      {
        heading: 'What hypnotherapy works with',
        paragraphs: ['Below are the areas I work with, with a dedicated page for each:'],
        links: [
          { slug: 'hipnoz-vid-tryvohy-panichni-ataky', label: 'Anxiety and panic attacks', text: 'Breaking the panic cycle' },
          { slug: 'hipnoz-pry-depresiyi', label: 'Depression', text: 'Alongside treatment or as standalone work' },
          { slug: 'hipnoz-vid-boliu', label: 'Chronic pain', text: 'Migraine, back pain, IBS, fibromyalgia' },
          { slug: 'hipnoz-psykhosomatyka', label: 'Psychosomatic symptoms', text: 'When the body speaks for you' },
          { slug: 'hipnoz-vid-bezsonnya', label: 'Insomnia', text: 'Restoring sleep without pills' },
          { slug: 'hipnoz-kynuty-palyty', label: 'Smoking', text: '1–3 sessions' },
          { slug: 'hipnoz-dlya-schudnennya', label: 'Eating behavior', text: 'Emotional eating, sugar cravings' },
          { slug: 'rehresyvnyy-hipnoz', label: 'Regression hypnosis', text: 'Finding the root of the problem in the past' },
          { slug: 'rozkryttya-tvorchoho-potentsialu', label: 'Creative potential', text: 'Fear of judgment, impostor syndrome' },
          { slug: 'yak-zlizty-z-antydepresantiv', label: 'Coming off antidepressants', text: 'Support alongside your psychiatrist' },
          { slug: 'hipnoz-vid-fobiy', label: 'Phobias and fears', text: 'Flying, heights, spiders, needles' },
          { slug: 'hipnoz-vid-prokrastynatsiyi', label: 'Procrastination', text: 'Self-sabotage, inner resistance' },
          { slug: 'hipnoz-samootsinka-vpevnenist', label: 'Self-esteem', text: 'Impostor syndrome, inner critic' },
          { slug: 'hipnoz-vid-zalezhnostey', label: 'Addictions', text: 'Alcohol, gambling, screens' },
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Pain', text: 'Meta-analysis of 85 trials (Thompson et al., 2019): hypnosis reliably reduces pain intensity, for some people at the level of analgesics.' },
          { title: 'Depression', text: 'Milling et al. meta-analysis (2019): the average hypnotherapy participant improved more than 76% of controls.' },
          { title: 'Anxiety, sleep, IBS, smoking', text: 'Each of these areas has controlled trials with positive results; details and references are on the respective pages.' },
        ],
        callout: 'Hypnotherapy is not an alternative to medicine. For serious diagnoses it complements your doctor\'s treatment rather than replacing it.',
      },
      {
        heading: 'How a session goes',
        steps: [
          { title: 'Conversation', text: 'What exactly is bothering you, when it started, what you have tried. We set a concrete goal for the session. 15–20 minutes.' },
          { title: 'Induction', text: 'Entering trance through relaxation and focused attention. Usually 5–15 minutes. No swinging pendulum.' },
          { title: 'The work', text: 'Depending on the request: finding the root of the problem, changing responses, working with imagery and beliefs, learning self-hypnosis.' },
          { title: 'Emergence and discussion', text: 'A gentle return, discussing the experience, recommendations until the next meeting.' },
        ],
        paragraphs: ['A session lasts 60–90 minutes and takes place online over Zoom. Most requests need 1 to 6 meetings.'],
      },
      {
        heading: 'Can everyone be hypnotized?',
        paragraphs: [
          'The ability to enter trance (hypnotizability) varies, but roughly 80–85% of people reach a depth sufficient for therapeutic work. High intelligence and skepticism do not get in the way; only unwillingness does.',
          'Hypnosis does not work against your will. If you came to "see if it works" rather than to change, the result will be weaker. If there is a real goal, it almost always works.',
        ],
      },
      {
        heading: 'How to choose a hypnotherapist',
        bullets: [
          'Certification from a recognized school (mine is the International Academy of Hypnosis, London; the certificate is shown on the home page).',
          'Honesty about the limits of the method: if someone promises to cure everything in one session, that is marketing.',
          'A free first conversation: a good practitioner first checks whether your request is a fit.',
          'Reviews, preferably on video: they are hard to fake.',
          'No pressure: "today only" packages or prepayment for 10 sessions are warning signs.',
        ],
      },
    ],
    faq: [
      { q: 'Is hypnosis dangerous?', a: 'For a healthy person, no. Absolute contraindications: psychosis, severe epilepsy, active suicidal intent, intoxication. The full list is on the "Contraindications" page.' },
      { q: 'Will I remember the session?', a: 'Yes. Post-hypnotic amnesia is rare and only occurs with a specific suggestion, which I do not use.' },
      { q: 'How does hypnotherapy differ from psychotherapy?', a: 'Hypnotherapy is one of the methods of psychotherapy. Unlike talk-based approaches, the work happens at the subconscious level, so change often comes faster.' },
      { q: 'Does it work online?', a: 'Yes. Hypnosis works through voice and attention; after years of working online I see no difference in results compared with in-person sessions.' },
      { q: 'How much does it cost and how do I book?', a: 'Message me the code word "Restart" on Telegram. The first consultation is free; we discuss your request, the format and the price there.' },
    ],
    references,
    cta: { title: 'Have a request but not sure hypnosis fits?', text: 'Message me the code word "Restart" and in a free consultation I will tell you honestly whether I can help', button: 'Message "Restart"' },
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
