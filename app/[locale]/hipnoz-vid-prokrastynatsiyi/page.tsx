import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-vid-prokrastynatsiyi';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Steel P. (2007). The nature of procrastination: a meta-analytic and theoretical review of quintessential self-regulatory failure. Psychological Bulletin.', url: 'https://pubmed.ncbi.nlm.nih.gov/17201571/' },
  { label: 'Rozental A. et al. (2018). Targeting procrastination using psychological treatments: a systematic review and meta-analysis. Frontiers in Psychology.', url: 'https://pubmed.ncbi.nlm.nih.gov/30214421/' },
  { label: 'Kirsch I., Montgomery G., Sapirstein G. (1995). Hypnosis as an adjunct to cognitive-behavioral psychotherapy: a meta-analysis. Journal of Consulting and Clinical Psychology.', url: 'https://pubmed.ncbi.nlm.nih.gov/7751482/' },
  { label: 'Jiang H. et al. (2017). Brain activity and functional connectivity associated with hypnosis. Cerebral Cortex.', url: 'https://pubmed.ncbi.nlm.nih.gov/27469596/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз від прокрастинації та самосаботажу: як зняти внутрішній опір | kolomoitsev.com',
    metaDescription: 'Прокрастинація — не лінощі, а уникання емоції. Що показує метааналіз, чому списки справ не допомагають і як гіпнотерапія знімає підсвідомий опір за 2–4 сесії.',
    breadcrumb: 'Гіпноз від прокрастинації',
    titleLine1: 'Гіпноз від прокрастинації',
    titleLine2: 'та самосаботажу',
    lead: 'Ви знаєте, що треба зробити. Ви хочете це зробити. У вас є час. І ви відкриваєте соцмережі, прибираєте на столі, робите що завгодно — крім того самого. А потім відчуваєте провину, і наступного разу відкладати ще легше. Це не лінощі й не слабка воля. Це підсвідомість, яка від чогось вас захищає.',
    sections: [
      {
        heading: 'Прокрастинація — це про емоції, а не про час',
        paragraphs: [
          'Метааналіз Steel (2007), що охопив понад 24 000 учасників, показав: прокрастинація найсильніше пов\'язана не з лінощами чи поганим плануванням, а з неприємністю завдання, імпульсивністю та низькою вірою у власну спроможність. Іншими словами, ми відкладаємо не завдання, а емоцію, яку воно викликає.',
          'Завдання викликає тривогу («а якщо не вийде»), нудьгу, сором («мав зробити ще місяць тому»), страх оцінки. Мозок, як і від будь-якого дискомфорту, шукає швидке полегшення — і знаходить його в чомусь приємному. Полегшення закріплює звичку. Тому списки справ і тайм-менеджмент не допомагають: вони працюють із часом, а проблема — в емоції.',
        ],
      },
      {
        heading: 'Що стоїть за самосаботажем',
        cards: [
          { title: 'Страх невдачі', text: '«Якщо я не почну — я не провалюся». Прокрастинація дає алібі: невдача пояснюється браком часу, а не браком здібностей.' },
          { title: 'Страх успіху', text: 'Звучить дивно, але частіше, ніж здається. Успіх означає видимість, відповідальність, зміну стосунків, заздрість. Підсвідомість вирішує, що безпечніше залишитися на місці.' },
          { title: 'Перфекціонізм', text: '«Або ідеально, або ніяк». Поки не почав — робота ще може бути ідеальною. Перший рядок руйнує цю ілюзію, тому його так важко написати.' },
          { title: 'Протест', text: 'Якщо завдання нав\'язане, прокрастинація стає єдиною доступною формою «ні». Часто коріння — у дитинстві, де не можна було відмовити прямо.' },
          { title: 'Втома і виснаження', text: 'Іноді прокрастинація — не опір, а сигнал: ресурсу немає. Тоді працюємо не з мотивацією, а з відновленням.' },
        ],
      },
      {
        heading: 'Що показують дослідження',
        paragraphs: [
          'Метааналіз Rozental et al. (2018) підтвердив: психологічні втручання достовірно зменшують прокрастинацію, і найкращі результати дають ті, що працюють з емоційною регуляцією та переконаннями, а не лише з організацією часу.',
          'Гіпноз діє саме на цьому рівні. Метааналіз Kirsch et al. (1995) показав, що додавання гіпнозу до когнітивно-поведінкової терапії суттєво посилює ефект. А нейровізуалізація (Jiang et al., 2017) пояснює чому: у трансі знижується активність ділянки, що відповідає за самокритику й сумніви, і посилюється зв\'язок між наміром і дією.',
        ],
      },
      {
        heading: 'Як проходить робота',
        steps: [
          { title: 'Знаходимо, що саме ви уникаєте', text: 'Не «роботу», а конкретну емоцію: страх, що розкритикують; сором за затримку; тривогу від невизначеності. Зазвичай це стає ясно на першій розмові.' },
          { title: 'Шукаємо джерело', text: 'У трансі підсвідомість веде до моменту, коли закріпилося переконання: «якщо я щось зроблю — буде боляче». Часто це шкільний чи сімейний досвід.' },
          { title: 'Знімаємо опір', text: 'Переосмислюємо ту подію з позиції дорослого. Емоційний заряд спадає — і завдання перестає бути загрозою.' },
          { title: 'Будуємо новий зв\'язок', text: 'Намір → дія, без зупинки на сумнівах. У трансі «прописуємо» досвід легкого старту і задоволення від завершення.' },
          { title: 'Техніка на щодень', text: 'Короткий самогіпноз на 2–3 хвилини перед важливим завданням. Переключає з режиму уникання в режим дії.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Зазвичай 2–4 сесії. Якщо прокрастинація стосується однієї конкретної сфери (диплом, бізнес-проєкт, книга) — часто достатньо двох. Якщо це загальний патерн, що охоплює все життя, — 3–4, бо працюємо з глибшим переконанням про себе. Перший результат більшість помічає за тиждень: завдання, яке лежало місяцями, раптом «просто робиться».'],
        callout: 'Якщо разом із прокрастинацією є постійна втома, втрата інтересу до всього, проблеми зі сном — це може бути депресія або СДУГ, а не прокрастинація як така. Тоді спочатку варто проконсультуватися з лікарем.',
      },
    ],
    faq: [
      { q: 'Чи не стану я після гіпнозу робити все підряд, навіть непотрібне?', a: 'Ні. Гіпноз не вмикає «режим робота». Він прибирає страх, що заважає робити те, чого ви самі хочете. Якщо завдання вам справді не потрібне, після роботи ви просто чесно від нього відмовитесь.' },
      { q: 'Я пробував тайм-менеджмент, Pomodoro, додатки — нічого не допомагає.', a: 'Так і має бути: ці інструменти працюють із часом, а проблема в емоції. Коли опір знято, ті самі інструменти раптом починають працювати.' },
      { q: 'А якщо я прокрастиную все життя, з дитинства?', a: 'Це типова історія. Тривалість патерну впливає на кількість сесій, але не на можливість результату — навпаки, давні переконання часто простіше побачити.' },
      { q: 'Чи допоможе при синдромі самозванця?', a: 'Так, це дуже близька тема: «я недостатньо компетентний, щоб це робити» — одна з найчастіших причин відкладання. Працюємо з нею безпосередньо.' },
      { q: 'Чи працює онлайн?', a: 'Так, усі сесії онлайн. Для цього запиту це навіть доречно: ви вчитеся діяти саме в тому місці, де зазвичай відкладаєте.' },
    ],
    references,
    cta: { title: 'Є завдання, яке лежить місяцями?', text: 'Напишіть кодове слово «Перезапуск» і назвіть, що саме відкладаєте — я скажу, чи зможу допомогти', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз от прокрастинации и самосаботажа: как снять внутреннее сопротивление | kolomoitsev.com',
    metaDescription: 'Прокрастинация — не лень, а избегание эмоции. Что показывает метаанализ, почему списки дел не помогают и как гипнотерапия снимает подсознательное сопротивление за 2–4 сессии.',
    breadcrumb: 'Гипноз от прокрастинации',
    titleLine1: 'Гипноз от прокрастинации',
    titleLine2: 'и самосаботажа',
    lead: 'Вы знаете, что нужно сделать. Вы хотите это сделать. У вас есть время. И вы открываете соцсети, убираете на столе, делаете что угодно — кроме того самого. А потом чувствуете вину, и в следующий раз откладывать ещё легче. Это не лень и не слабая воля. Это подсознание, которое от чего-то вас защищает.',
    sections: [
      {
        heading: 'Прокрастинация — это про эмоции, а не про время',
        paragraphs: [
          'Метаанализ Steel (2007), охвативший более 24 000 участников, показал: прокрастинация сильнее всего связана не с ленью или плохим планированием, а с неприятностью задачи, импульсивностью и низкой верой в собственные силы. Иными словами, мы откладываем не задачу, а эмоцию, которую она вызывает.',
          'Задача вызывает тревогу («а если не получится»), скуку, стыд («должен был сделать ещё месяц назад»), страх оценки. Мозг, как и от любого дискомфорта, ищет быстрое облегчение — и находит его в чём-то приятном. Облегчение закрепляет привычку. Поэтому списки дел и тайм-менеджмент не помогают: они работают со временем, а проблема — в эмоции.',
        ],
      },
      {
        heading: 'Что стоит за самосаботажем',
        cards: [
          { title: 'Страх неудачи', text: '«Если я не начну — я не провалюсь». Прокрастинация даёт алиби: неудача объясняется нехваткой времени, а не нехваткой способностей.' },
          { title: 'Страх успеха', text: 'Звучит странно, но встречается чаще, чем кажется. Успех означает видимость, ответственность, изменение отношений, зависть. Подсознание решает, что безопаснее остаться на месте.' },
          { title: 'Перфекционизм', text: '«Или идеально, или никак». Пока не начал — работа ещё может быть идеальной. Первая строка разрушает эту иллюзию, поэтому её так трудно написать.' },
          { title: 'Протест', text: 'Если задача навязана, прокрастинация становится единственной доступной формой «нет». Часто корни — в детстве, где нельзя было отказать прямо.' },
          { title: 'Усталость и истощение', text: 'Иногда прокрастинация — не сопротивление, а сигнал: ресурса нет. Тогда работаем не с мотивацией, а с восстановлением.' },
        ],
      },
      {
        heading: 'Что показывают исследования',
        paragraphs: [
          'Метаанализ Rozental et al. (2018) подтвердил: психологические вмешательства достоверно уменьшают прокрастинацию, и лучшие результаты дают те, что работают с эмоциональной регуляцией и убеждениями, а не только с организацией времени.',
          'Гипноз действует именно на этом уровне. Метаанализ Kirsch et al. (1995) показал, что добавление гипноза к когнитивно-поведенческой терапии существенно усиливает эффект. А нейровизуализация (Jiang et al., 2017) объясняет почему: в трансе снижается активность участка, отвечающего за самокритику и сомнения, и усиливается связь между намерением и действием.',
        ],
      },
      {
        heading: 'Как проходит работа',
        steps: [
          { title: 'Находим, чего именно вы избегаете', text: 'Не «работы», а конкретной эмоции: страха, что раскритикуют; стыда за задержку; тревоги от неопределённости. Обычно это становится ясно на первом разговоре.' },
          { title: 'Ищем источник', text: 'В трансе подсознание ведёт к моменту, когда закрепилось убеждение: «если я что-то сделаю — будет больно». Часто это школьный или семейный опыт.' },
          { title: 'Снимаем сопротивление', text: 'Переосмысляем то событие с позиции взрослого. Эмоциональный заряд спадает — и задача перестаёт быть угрозой.' },
          { title: 'Строим новую связь', text: 'Намерение → действие, без остановки на сомнениях. В трансе «прописываем» опыт лёгкого старта и удовольствия от завершения.' },
          { title: 'Техника на каждый день', text: 'Короткий самогипноз на 2–3 минуты перед важной задачей. Переключает из режима избегания в режим действия.' },
        ],
      },
      {
        heading: 'Сколько сеансов нужно',
        paragraphs: ['Обычно 2–4 сессии. Если прокрастинация касается одной конкретной сферы (диплом, бизнес-проект, книга) — часто достаточно двух. Если это общий паттерн, охватывающий всю жизнь, — 3–4, потому что работаем с более глубоким убеждением о себе. Первый результат большинство замечает за неделю: задача, которая лежала месяцами, вдруг «просто делается».'],
        callout: 'Если вместе с прокрастинацией есть постоянная усталость, потеря интереса ко всему, проблемы со сном — это может быть депрессия или СДВГ, а не прокрастинация как таковая. Тогда сначала стоит проконсультироваться с врачом.',
      },
    ],
    faq: [
      { q: 'Не стану ли я после гипноза делать всё подряд, даже ненужное?', a: 'Нет. Гипноз не включает «режим робота». Он убирает страх, мешающий делать то, чего вы сами хотите. Если задача вам действительно не нужна, после работы вы просто честно от неё откажетесь.' },
      { q: 'Я пробовал тайм-менеджмент, Pomodoro, приложения — ничего не помогает.', a: 'Так и должно быть: эти инструменты работают со временем, а проблема в эмоции. Когда сопротивление снято, те же инструменты вдруг начинают работать.' },
      { q: 'А если я прокрастинирую всю жизнь, с детства?', a: 'Это типичная история. Длительность паттерна влияет на количество сессий, но не на возможность результата — наоборот, давние убеждения часто проще увидеть.' },
      { q: 'Поможет ли при синдроме самозванца?', a: 'Да, это очень близкая тема: «я недостаточно компетентен, чтобы это делать» — одна из самых частых причин откладывания. Работаем с ней напрямую.' },
      { q: 'Работает ли онлайн?', a: 'Да, все сессии онлайн. Для этого запроса это даже уместно: вы учитесь действовать именно в том месте, где обычно откладываете.' },
    ],
    references,
    cta: { title: 'Есть задача, которая лежит месяцами?', text: 'Напишите кодовое слово «Перезапуск» и назовите, что именно откладываете — я скажу, смогу ли помочь', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Procrastination and Self-Sabotage: Removing Inner Resistance | kolomoitsev.com',
    metaDescription: 'Procrastination is not laziness but emotional avoidance. What the meta-analysis shows, why to-do lists fail and how hypnotherapy removes subconscious resistance in 2–4 sessions.',
    breadcrumb: 'Hypnosis for procrastination',
    titleLine1: 'Hypnosis for Procrastination',
    titleLine2: 'and self-sabotage',
    lead: 'You know what needs to be done. You want to do it. You have the time. And you open social media, tidy your desk, do anything except that one thing. Then you feel guilty, and next time putting it off is even easier. This is not laziness or weak will. It is your subconscious protecting you from something.',
    sections: [
      {
        heading: 'Procrastination is about emotion, not time',
        paragraphs: [
          'Steel\'s meta-analysis (2007), covering over 24,000 participants, showed that procrastination is most strongly linked not to laziness or poor planning but to task aversiveness, impulsiveness and low belief in one\'s own ability. In other words, we do not put off the task; we put off the emotion it triggers.',
          'The task provokes anxiety ("what if it doesn\'t work"), boredom, shame ("I should have done this a month ago"), fear of judgment. The brain, as with any discomfort, looks for quick relief and finds it in something pleasant. The relief reinforces the habit. That is why to-do lists and time management do not help: they work with time, while the problem is emotion.',
        ],
      },
      {
        heading: 'What lies behind self-sabotage',
        cards: [
          { title: 'Fear of failure', text: '"If I don\'t start, I can\'t fail." Procrastination provides an alibi: failure is explained by lack of time, not lack of ability.' },
          { title: 'Fear of success', text: 'Sounds strange, but it is more common than it seems. Success means visibility, responsibility, changed relationships, envy. The subconscious decides it is safer to stay put.' },
          { title: 'Perfectionism', text: '"Perfect or nothing." Until you start, the work can still be perfect. The first line destroys that illusion, which is why it is so hard to write.' },
          { title: 'Protest', text: 'If the task was imposed, procrastination becomes the only available form of "no". The roots are often in childhood, where refusing directly was not allowed.' },
          { title: 'Exhaustion', text: 'Sometimes procrastination is not resistance but a signal: there is no fuel left. Then we work on recovery, not motivation.' },
        ],
      },
      {
        heading: 'What the research shows',
        paragraphs: [
          'Rozental et al.\'s meta-analysis (2018) confirmed that psychological interventions reliably reduce procrastination, and the best results come from those that address emotional regulation and beliefs, not just time organization.',
          'Hypnosis works at exactly this level. Kirsch et al.\'s meta-analysis (1995) showed that adding hypnosis to cognitive behavioral therapy substantially strengthens its effect. Neuroimaging (Jiang et al., 2017) explains why: in trance, activity in the region responsible for self-criticism and doubt decreases, and the link between intention and action strengthens.',
        ],
      },
      {
        heading: 'How the work goes',
        steps: [
          { title: 'Finding what you are actually avoiding', text: 'Not "the work" but a specific emotion: fear of criticism; shame about the delay; anxiety about uncertainty. This usually becomes clear in the first conversation.' },
          { title: 'Finding the source', text: 'In trance the subconscious leads to the moment the belief took hold: "if I do something, it will hurt". Often a school or family experience.' },
          { title: 'Removing the resistance', text: 'We reframe that event from an adult perspective. The emotional charge drops, and the task stops being a threat.' },
          { title: 'Building a new link', text: 'Intention → action, without stopping at doubt. In trance we "install" the experience of an easy start and the satisfaction of finishing.' },
          { title: 'A daily technique', text: 'A short 2–3 minute self-hypnosis before an important task. It switches you from avoidance mode to action mode.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['Usually 2–4 sessions. If procrastination concerns one specific area (a thesis, a business project, a book), two are often enough. If it is a general pattern across your whole life, 3–4, because we work with a deeper belief about yourself. Most people notice the first result within a week: a task that sat for months suddenly "just gets done".'],
        callout: 'If procrastination comes with constant fatigue, loss of interest in everything and sleep problems, it may be depression or ADHD rather than procrastination as such. Then it is worth consulting a doctor first.',
      },
    ],
    faq: [
      { q: 'Will hypnosis make me do everything, even what I do not need?', a: 'No. Hypnosis does not switch on "robot mode". It removes the fear that stops you doing what you yourself want. If you genuinely do not need the task, after the work you will simply decline it honestly.' },
      { q: 'I have tried time management, Pomodoro, apps; nothing helps.', a: 'That is expected: those tools work with time, while the problem is emotion. Once the resistance is gone, the same tools suddenly start working.' },
      { q: 'What if I have procrastinated all my life, since childhood?', a: 'That is the typical story. How long the pattern has lasted affects the number of sessions, not whether a result is possible; old beliefs are often easier to see.' },
      { q: 'Does it help with impostor syndrome?', a: 'Yes, it is a very close topic: "I am not competent enough to do this" is one of the most common reasons for putting things off. We work with it directly.' },
      { q: 'Does it work online?', a: 'Yes, all sessions are online. For this request it is even fitting: you learn to act in the very place where you usually put things off.' },
    ],
    references,
    cta: { title: 'Got a task that has been sitting for months?', text: 'Message me the code word "Restart" and name what you are putting off. I will tell you whether I can help', button: 'Message "Restart"' },
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
