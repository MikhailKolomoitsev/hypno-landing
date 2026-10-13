import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-vid-zalezhnostey';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Pekala R.J. et al. (2004). Self-hypnosis relapse prevention training with chronic drug/alcohol users: effects on self-esteem, affect, and relapse. American Journal of Clinical Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/15190730/' },
  { label: 'Hasan F.M. et al. (2014). Hypnotherapy is more effective than nicotine replacement therapy for smoking cessation: results of a randomized controlled trial. Complementary Therapies in Medicine.', url: 'https://pubmed.ncbi.nlm.nih.gov/24559809/' },
  { label: 'Elkins G. et al. (2006). Intensive hypnotherapy for smoking cessation: a prospective study. International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/16766441/' },
  { label: 'Barnes J. et al. (2019). Hypnotherapy for smoking cessation. Cochrane Database of Systematic Reviews.', url: 'https://pubmed.ncbi.nlm.nih.gov/31198991/' },
  { label: 'Kirsch I., Montgomery G., Sapirstein G. (1995). Hypnosis as an adjunct to cognitive-behavioral psychotherapy: a meta-analysis. Journal of Consulting and Clinical Psychology.', url: 'https://pubmed.ncbi.nlm.nih.gov/7751482/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз від залежностей: алкоголь, азартні ігри, екрани | kolomoitsev.com',
    metaDescription: 'Гіпнотерапія при залежностях: де гіпноз реально допомагає, де потрібен нарколог, що кажуть дослідження (включно з Cochrane) і як проходить робота з тягою та тригерами.',
    breadcrumb: 'Гіпноз від залежностей',
    titleLine1: 'Гіпноз від залежностей:',
    titleLine2: 'алкоголь, азартні ігри, екрани',
    lead: 'Залежність — це не брак сили волі. Це навчена реакція: мозок знайшов швидкий спосіб прибрати дискомфорт і закріпив його. Сила волі діє на рівні свідомості, а реакція живе глибше. Ця сторінка — чесно про те, що гіпноз може зробити із залежністю, чого не може, і де межа, за якою потрібен лікар.',
    sections: [
      {
        heading: 'Спочатку межі: де гіпноз не є першим кроком',
        paragraphs: ['Є ситуації, у яких гіпнотерапія може бути лише доповненням до медичної допомоги — і починати треба з лікаря:'],
        bullets: [
          'Фізична залежність від алкоголю з синдромом відміни (тремор, пітливість, безсоння, судоми при спробі кинути). Різка відміна без нагляду може бути небезпечною для життя.',
          'Опіоїдна або інша наркотична залежність з фізичним компонентом.',
          'Залежність на тлі психіатричного діагнозу (біполярний розлад, психоз).',
          'Суїцидальні думки або нещодавній передоз.',
        ],
        callout: 'У цих випадках я працюю лише паралельно з наркологом або психіатром і лише за їхньої згоди. Я не ставлю діагнози і не замінюю детоксикацію.',
      },
      {
        heading: 'З чим гіпноз працює добре',
        cards: [
          { title: 'Психологічна залежність від алкоголю', text: 'Випиваєте «щоб розслабитися», «після роботи», «за компанію» — без фізичної ломки, але не можете зупинитися. Це класичний запит для гіпнотерапії.' },
          { title: 'Азартні ігри та ставки', text: 'Чисто психологічна залежність без хімічної речовини. Працюємо з ілюзією контролю, погонею за відіграшем і емоцією, яку заміщує гра.' },
          { title: 'Екрани, соцмережі, порно', text: 'Поведінкові залежності, у яких дофаміновий цикл не відрізняється від хімічного. Гіпноз розриває зв\'язок «дискомфорт → екран».' },
          { title: 'Куріння, вейп', text: 'Окремий детальний матеріал — на сторінці про куріння. Зазвичай 1–3 сесії.' },
          { title: 'Профілактика зриву після лікування', text: 'Якщо ви вже пройшли детокс чи реабілітацію — гіпнотерапія суттєво знижує ризик рецидиву (див. дослідження нижче).' },
        ],
      },
      {
        heading: 'Що показують дослідження — чесно',
        cards: [
          { title: 'Pekala et al. (2004): профілактика зриву', text: 'Навчання самогіпнозу у людей із хронічною алко- та наркозалежністю: ті, хто практикував щодня, мали достовірно нижчий рівень рецидивів і вищу самооцінку через 7 тижнів після виписки.' },
          { title: 'Hasan et al. (2014): гіпноз проти пластирів', text: 'Рандомізоване дослідження на госпіталізованих курцях: через 26 тижнів утримувались 36,6% групи гіпнозу проти 18% групи нікотинозамісної терапії.' },
          { title: 'Elkins et al. (2006)', text: 'Інтенсивна гіпнотерапія: 40% учасників не курили через 26 тижнів, що порівняно з найкращими поведінковими програмами.' },
          { title: 'Cochrane (Barnes et al., 2019): обережний висновок', text: 'Огляд 14 досліджень не знайшов достатніх доказів, що гіпноз переважає інші методи відмови від куріння. Причина — низька якість і різнорідність досліджень, а не доведена неефективність. Я вважаю чесним це згадати.' },
        ],
        paragraphs: ['Підсумок: докази найсильніші для гіпнозу як доповнення до інших методів і як засобу профілактики зриву. Гіпноз — не чарівна пігулка, що «вимикає» залежність за одну сесію, і я не обіцяю цього.'],
      },
      {
        heading: 'Як проходить робота',
        steps: [
          { title: 'Що заміщує залежність', text: 'Алкоголь, гра чи екран завжди «вирішують» якусь задачу: знімають тривогу, дають відчуття контролю, заповнюють порожнечу, дозволяють не відчувати. Знаходимо цю задачу — без неї робота буде поверхневою.' },
          { title: 'Карта тригерів', text: 'Час, місце, емоція, люди, після яких виникає тяга. Зазвичай 3–5 ключових ситуацій.' },
          { title: 'Розрив зв\'язків', text: 'У трансі перепрописуємо автоматичну реакцію на кожен тригер: замість «стрес → випити» — «стрес → видих, пауза, інша дія».' },
          { title: 'Робота з причиною', text: 'Часто за залежністю стоїть незавершена подія: втрата, травма, хронічна самотність. Опрацьовуємо її — інакше тяга повернеться в іншій формі.' },
          { title: 'Інструмент проти тяги', text: 'Самогіпноз на 2–3 хвилини для моменту, коли тягне. Це те, що за даними Pekala реально знижує рецидиви: щоденна практика.' },
          { title: 'Супровід', text: 'Підтримувальні сесії через 2 та 6 тижнів після основного курсу. Зрив найчастіше стається саме в цей період.' },
        ],
      },
      {
        heading: 'Скільки сеансів потрібно',
        paragraphs: ['Психологічна залежність від алкоголю, азартних ігор — зазвичай 4–8 сесій плюс 1–2 підтримувальні. Поведінкові залежності (екрани, соцмережі) — 3–5. Куріння — 1–3. Якщо ви проходите або пройшли медичне лікування, гіпнотерапія як профілактика зриву — 3–4 сесії.'],
        callout: 'Головна умова — ваше власне бажання. Гіпноз не працює, якщо вас «привели» родичі, а самі ви кидати не хочете. Якщо сумніваєтесь — це нормально; амбівалентність ми теж можемо опрацювати, але перший крок має бути вашим.',
      },
    ],
    faq: [
      { q: 'Чи можна закодуватися гіпнозом?', a: 'Я не займаюся «кодуванням». Це маркетинговий термін для навіювання страху перед вживанням. Воно може спрацювати короткостроково, але не вирішує причину, і зрив після нього часто важчий. Я працюю з причиною і тригерами.' },
      { q: 'Чи працюєте ви з людьми, які п\'ють щодня?', a: 'Якщо є ознаки фізичної залежності (ломка при відміні) — спочатку нарколог, потім гіпнотерапія паралельно. Якщо щоденне вживання психологічне, без ломки — так, працюємо.' },
      { q: 'Моя близька людина залежна, але не хоче лікуватися. Чи можете ви допомогти?', a: 'Без бажання самої людини — ні. Але я можу працювати з вами: співзалежність, тривога, виснаження від життя поруч із залежним — це окремий, дуже реальний запит.' },
      { q: 'Чи поєднується з групами (АА) чи психотерапією?', a: 'Так, і це найкращий варіант. Дослідження послідовно показують, що гіпноз посилює інші методи, а не конкурує з ними.' },
      { q: 'А якщо зрив станеться після курсу?', a: 'Зрив — це не провал, а інформація: який тригер ми пропустили. Одна підтримувальна сесія зазвичай повертає на шлях.' },
    ],
    disclaimer: 'Стаття має інформаційний характер і не є медичною порадою. Залежність із фізичним компонентом лікує нарколог; різка самостійна відміна алкоголю чи наркотиків може бути небезпечною для життя. Гіпнотерапія доповнює медичну допомогу, а не замінює її.',
    references,
    cta: { title: 'Готові чесно подивитися на свою залежність?', text: 'Напишіть кодове слово «Перезапуск» і коротко опишіть ситуацію — я скажу, чи зможу допомогти, або порекомендую, з кого почати', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз от зависимостей: алкоголь, азартные игры, экраны | kolomoitsev.com',
    metaDescription: 'Гипнотерапия при зависимостях: где гипноз реально помогает, где нужен нарколог, что говорят исследования (включая Cochrane) и как проходит работа с тягой и триггерами.',
    breadcrumb: 'Гипноз от зависимостей',
    titleLine1: 'Гипноз от зависимостей:',
    titleLine2: 'алкоголь, азартные игры, экраны',
    lead: 'Зависимость — это не нехватка силы воли. Это выученная реакция: мозг нашёл быстрый способ убрать дискомфорт и закрепил его. Сила воли действует на уровне сознания, а реакция живёт глубже. Эта страница — честно о том, что гипноз может сделать с зависимостью, чего не может, и где граница, за которой нужен врач.',
    sections: [
      {
        heading: 'Сначала границы: где гипноз не первый шаг',
        paragraphs: ['Есть ситуации, в которых гипнотерапия может быть только дополнением к медицинской помощи — и начинать нужно с врача:'],
        bullets: [
          'Физическая зависимость от алкоголя с синдромом отмены (тремор, потливость, бессонница, судороги при попытке бросить). Резкая отмена без наблюдения может быть опасна для жизни.',
          'Опиоидная или другая наркотическая зависимость с физическим компонентом.',
          'Зависимость на фоне психиатрического диагноза (биполярное расстройство, психоз).',
          'Суицидальные мысли или недавняя передозировка.',
        ],
        callout: 'В этих случаях я работаю только параллельно с наркологом или психиатром и только с их согласия. Я не ставлю диагнозы и не заменяю детоксикацию.',
      },
      {
        heading: 'С чем гипноз работает хорошо',
        cards: [
          { title: 'Психологическая зависимость от алкоголя', text: 'Выпиваете «чтобы расслабиться», «после работы», «за компанию» — без физической ломки, но не можете остановиться. Это классический запрос для гипнотерапии.' },
          { title: 'Азартные игры и ставки', text: 'Чисто психологическая зависимость без химического вещества. Работаем с иллюзией контроля, погоней за отыгрышем и эмоцией, которую замещает игра.' },
          { title: 'Экраны, соцсети, порно', text: 'Поведенческие зависимости, в которых дофаминовый цикл не отличается от химического. Гипноз разрывает связь «дискомфорт → экран».' },
          { title: 'Курение, вейп', text: 'Отдельный подробный материал — на странице о курении. Обычно 1–3 сессии.' },
          { title: 'Профилактика срыва после лечения', text: 'Если вы уже прошли детокс или реабилитацию — гипнотерапия существенно снижает риск рецидива (см. исследования ниже).' },
        ],
      },
      {
        heading: 'Что показывают исследования — честно',
        cards: [
          { title: 'Pekala et al. (2004): профилактика срыва', text: 'Обучение самогипнозу у людей с хронической алко- и наркозависимостью: те, кто практиковал ежедневно, имели достоверно более низкий уровень рецидивов и более высокую самооценку через 7 недель после выписки.' },
          { title: 'Hasan et al. (2014): гипноз против пластырей', text: 'Рандомизированное исследование на госпитализированных курильщиках: через 26 недель воздерживались 36,6% группы гипноза против 18% группы никотинозаместительной терапии.' },
          { title: 'Elkins et al. (2006)', text: 'Интенсивная гипнотерапия: 40% участников не курили через 26 недель, что сопоставимо с лучшими поведенческими программами.' },
          { title: 'Cochrane (Barnes et al., 2019): осторожный вывод', text: 'Обзор 14 исследований не нашёл достаточных доказательств, что гипноз превосходит другие методы отказа от курения. Причина — низкое качество и разнородность исследований, а не доказанная неэффективность. Я считаю честным это упомянуть.' },
        ],
        paragraphs: ['Итог: доказательства сильнее всего для гипноза как дополнения к другим методам и как средства профилактики срыва. Гипноз — не волшебная таблетка, «выключающая» зависимость за одну сессию, и я этого не обещаю.'],
      },
      {
        heading: 'Как проходит работа',
        steps: [
          { title: 'Что замещает зависимость', text: 'Алкоголь, игра или экран всегда «решают» какую-то задачу: снимают тревогу, дают ощущение контроля, заполняют пустоту, позволяют не чувствовать. Находим эту задачу — без неё работа будет поверхностной.' },
          { title: 'Карта триггеров', text: 'Время, место, эмоция, люди, после которых возникает тяга. Обычно 3–5 ключевых ситуаций.' },
          { title: 'Разрыв связей', text: 'В трансе переписываем автоматическую реакцию на каждый триггер: вместо «стресс → выпить» — «стресс → выдох, пауза, другое действие».' },
          { title: 'Работа с причиной', text: 'Часто за зависимостью стоит незавершённое событие: потеря, травма, хроническое одиночество. Прорабатываем его — иначе тяга вернётся в другой форме.' },
          { title: 'Инструмент против тяги', text: 'Самогипноз на 2–3 минуты для момента, когда тянет. Это то, что по данным Pekala реально снижает рецидивы: ежедневная практика.' },
          { title: 'Сопровождение', text: 'Поддерживающие сессии через 2 и 6 недель после основного курса. Срыв чаще всего случается именно в этот период.' },
        ],
      },
      {
        heading: 'Сколько сеансов нужно',
        paragraphs: ['Психологическая зависимость от алкоголя, азартных игр — обычно 4–8 сессий плюс 1–2 поддерживающие. Поведенческие зависимости (экраны, соцсети) — 3–5. Курение — 1–3. Если вы проходите или прошли медицинское лечение, гипнотерапия как профилактика срыва — 3–4 сессии.'],
        callout: 'Главное условие — ваше собственное желание. Гипноз не работает, если вас «привели» родственники, а сами вы бросать не хотите. Если сомневаетесь — это нормально; амбивалентность мы тоже можем проработать, но первый шаг должен быть вашим.',
      },
    ],
    faq: [
      { q: 'Можно ли закодироваться гипнозом?', a: 'Я не занимаюсь «кодированием». Это маркетинговый термин для внушения страха перед употреблением. Оно может сработать краткосрочно, но не решает причину, и срыв после него часто тяжелее. Я работаю с причиной и триггерами.' },
      { q: 'Работаете ли вы с людьми, которые пьют ежедневно?', a: 'Если есть признаки физической зависимости (ломка при отмене) — сначала нарколог, потом гипнотерапия параллельно. Если ежедневное употребление психологическое, без ломки — да, работаем.' },
      { q: 'Мой близкий человек зависим, но не хочет лечиться. Можете ли вы помочь?', a: 'Без желания самого человека — нет. Но я могу работать с вами: созависимость, тревога, истощение от жизни рядом с зависимым — это отдельный, очень реальный запрос.' },
      { q: 'Сочетается ли с группами (АА) или психотерапией?', a: 'Да, и это лучший вариант. Исследования последовательно показывают, что гипноз усиливает другие методы, а не конкурирует с ними.' },
      { q: 'А если срыв случится после курса?', a: 'Срыв — это не провал, а информация: какой триггер мы пропустили. Одна поддерживающая сессия обычно возвращает на путь.' },
    ],
    disclaimer: 'Статья носит информационный характер и не является медицинской рекомендацией. Зависимость с физическим компонентом лечит нарколог; резкая самостоятельная отмена алкоголя или наркотиков может быть опасна для жизни. Гипнотерапия дополняет медицинскую помощь, а не заменяет её.',
    references,
    cta: { title: 'Готовы честно посмотреть на свою зависимость?', text: 'Напишите кодовое слово «Перезапуск» и коротко опишите ситуацию — я скажу, смогу ли помочь, или порекомендую, с кого начать', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Addictions: Alcohol, Gambling, Screens | kolomoitsev.com',
    metaDescription: 'Hypnotherapy for addictions: where hypnosis genuinely helps, when you need an addiction specialist, what research says (including Cochrane) and how work with cravings and triggers goes.',
    breadcrumb: 'Hypnosis for addictions',
    titleLine1: 'Hypnosis for Addictions:',
    titleLine2: 'alcohol, gambling, screens',
    lead: 'Addiction is not a lack of willpower. It is a learned response: the brain found a fast way to remove discomfort and locked it in. Willpower operates at the conscious level; the response lives deeper. This page is honest about what hypnosis can do with addiction, what it cannot, and where the line is beyond which you need a doctor.',
    sections: [
      {
        heading: 'Boundaries first: where hypnosis is not the first step',
        paragraphs: ['There are situations in which hypnotherapy can only be an addition to medical care, and you need to start with a doctor:'],
        bullets: [
          'Physical alcohol dependence with withdrawal syndrome (tremor, sweating, insomnia, seizures when trying to stop). Abrupt withdrawal without supervision can be life-threatening.',
          'Opioid or other drug dependence with a physical component.',
          'Addiction alongside a psychiatric diagnosis (bipolar disorder, psychosis).',
          'Suicidal thoughts or a recent overdose.',
        ],
        callout: 'In these cases I work only in parallel with an addiction specialist or psychiatrist and only with their agreement. I do not diagnose and I do not replace detox.',
      },
      {
        heading: 'What hypnosis works well with',
        cards: [
          { title: 'Psychological alcohol dependence', text: 'Drinking "to relax", "after work", "for company", with no physical withdrawal but no ability to stop. A classic request for hypnotherapy.' },
          { title: 'Gambling and betting', text: 'A purely psychological addiction with no chemical substance. We work with the illusion of control, chasing losses, and the emotion the game replaces.' },
          { title: 'Screens, social media, porn', text: 'Behavioral addictions in which the dopamine cycle is no different from a chemical one. Hypnosis breaks the "discomfort → screen" link.' },
          { title: 'Smoking, vaping', text: 'A separate detailed page covers smoking. Usually 1–3 sessions.' },
          { title: 'Relapse prevention after treatment', text: 'If you have already been through detox or rehab, hypnotherapy substantially lowers relapse risk (see the research below).' },
        ],
      },
      {
        heading: 'What the research shows, honestly',
        cards: [
          { title: 'Pekala et al. (2004): relapse prevention', text: 'Self-hypnosis training in people with chronic alcohol and drug dependence: those who practiced daily had significantly lower relapse rates and higher self-esteem 7 weeks after discharge.' },
          { title: 'Hasan et al. (2014): hypnosis vs patches', text: 'A randomized trial with hospitalized smokers: at 26 weeks, 36.6% of the hypnosis group were abstinent versus 18% of the nicotine replacement group.' },
          { title: 'Elkins et al. (2006)', text: 'Intensive hypnotherapy: 40% of participants were not smoking at 26 weeks, comparable to the best behavioral programs.' },
          { title: 'Cochrane (Barnes et al., 2019): a cautious conclusion', text: 'A review of 14 studies found insufficient evidence that hypnosis outperforms other smoking-cessation methods. The reason is low quality and heterogeneity of the studies, not proven ineffectiveness. I think it is honest to mention this.' },
        ],
        paragraphs: ['Bottom line: the evidence is strongest for hypnosis as an addition to other methods and as relapse prevention. Hypnosis is not a magic pill that "switches off" addiction in one session, and I do not promise that.'],
      },
      {
        heading: 'How the work goes',
        steps: [
          { title: 'What the addiction replaces', text: 'Alcohol, gambling or a screen always "solves" some task: relieving anxiety, giving a sense of control, filling emptiness, allowing you not to feel. We find that task; without it the work stays superficial.' },
          { title: 'Mapping the triggers', text: 'Time, place, emotion, people after which the craving appears. Usually 3–5 key situations.' },
          { title: 'Breaking the links', text: 'In trance we rewrite the automatic response to each trigger: instead of "stress → drink", "stress → exhale, pause, a different action".' },
          { title: 'Working with the cause', text: 'Behind addiction there is often an unfinished event: loss, trauma, chronic loneliness. We work it through; otherwise the craving returns in another form.' },
          { title: 'A tool against craving', text: 'A 2–3 minute self-hypnosis for the moment the pull comes. According to Pekala\'s data, daily practice is what actually lowers relapse.' },
          { title: 'Follow-up', text: 'Support sessions 2 and 6 weeks after the main course. Relapse most often happens in exactly this period.' },
        ],
      },
      {
        heading: 'How many sessions are needed',
        paragraphs: ['Psychological dependence on alcohol or gambling usually takes 4–8 sessions plus 1–2 follow-ups. Behavioral addictions (screens, social media), 3–5. Smoking, 1–3. If you are in or have completed medical treatment, hypnotherapy for relapse prevention takes 3–4 sessions.'],
        callout: 'The main condition is your own desire. Hypnosis does not work if relatives "brought" you and you do not want to quit yourself. If you are unsure, that is normal; we can work with ambivalence too, but the first step has to be yours.',
      },
    ],
    faq: [
      { q: 'Can hypnosis "code" me against drinking?', a: 'I do not do "coding". It is a marketing term for instilling fear of using. It may work short-term, but it does not address the cause, and relapse afterwards is often harder. I work with the cause and the triggers.' },
      { q: 'Do you work with people who drink daily?', a: 'If there are signs of physical dependence (withdrawal when stopping), an addiction specialist comes first, then hypnotherapy in parallel. If daily use is psychological, without withdrawal, yes, we work.' },
      { q: 'A loved one is addicted but refuses treatment. Can you help?', a: 'Without the person\'s own desire, no. But I can work with you: codependency, anxiety, exhaustion from living next to an addicted person is a separate, very real request.' },
      { q: 'Does it combine with groups (AA) or psychotherapy?', a: 'Yes, and that is the best option. Research consistently shows that hypnosis strengthens other methods rather than competing with them.' },
      { q: 'What if I relapse after the course?', a: 'A relapse is not failure but information: which trigger we missed. One support session usually gets you back on track.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Addiction with a physical component is treated by an addiction specialist; abrupt unsupervised withdrawal from alcohol or drugs can be life-threatening. Hypnotherapy complements medical care; it does not replace it.',
    references,
    cta: { title: 'Ready to look at your addiction honestly?', text: 'Message me the code word "Restart" and briefly describe the situation. I will tell you whether I can help, or recommend where to start', button: 'Message "Restart"' },
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
