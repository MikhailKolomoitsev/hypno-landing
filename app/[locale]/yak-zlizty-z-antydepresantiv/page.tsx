import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'yak-zlizty-z-antydepresantiv';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Horowitz M.A., Taylor D. (2019). Tapering of SSRI treatment to mitigate withdrawal symptoms. The Lancet Psychiatry.', url: 'https://pubmed.ncbi.nlm.nih.gov/30850328/' },
  { label: 'Davies J., Read J. (2019). A systematic review into the incidence, severity and duration of antidepressant withdrawal effects. Addictive Behaviors.', url: 'https://pubmed.ncbi.nlm.nih.gov/30292574/' },
  { label: 'Royal College of Psychiatrists. Stopping antidepressants — patient information.', url: 'https://www.rcpsych.ac.uk/mental-health/treatments-and-wellbeing/stopping-antidepressants' },
  { label: 'Milling L.S., Valentine K.E., McCarley H.S., LoStimolo L.M. (2019). A meta-analysis of hypnotic interventions for depression symptoms: high hopes for hypnosis? American Journal of Clinical Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/34874235/' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Як відмовитися від антидепресантів безпечно: роль гіпнотерапії | kolomoitsev.com',
    metaDescription: 'Як злізти з антидепресантів без зриву: чому відміну веде психіатр, що таке синдром відміни і як гіпнотерапія підтримує на цьому шляху. Без обіцянок і міфів.',
    breadcrumb: 'Як відмовитися від антидепресантів',
    titleLine1: 'Як відмовитися від антидепресантів',
    titleLine2: 'безпечно і без повернення стану',
    lead: 'Запит «як злізти з антидепресантів» — один із найчастіших, із якими до мене приходять. І перше, що я кажу: цей шлях ви проходите разом із лікарем, який їх призначив. Моя роль інша — зробити так, щоб після відміни стан не повернувся.',
    sections: [
      {
        heading: 'Головне правило: не відміняйте самостійно',
        paragraphs: [
          'Антидепресанти змінюють біохімію мозку, і мозок до цього адаптується. Різка відміна або занадто швидке зниження дози викликає синдром відміни: запаморочення, «удари током» у голові, тривогу, безсоння, дратівливість, грипоподібний стан. Систематичний огляд Davies & Read (2019) показує, що із синдромом відміни стикається близько половини людей, і в частини з них симптоми тривають тижні й місяці.',
          'Є і друга пастка: симптоми відміни легко сплутати з «поверненням депресії» — і повернутися до препарату, вирішивши, що без нього не можна. Саме тому схему зниження складає психіатр, часто за принципом «гіперболічного» зниження (Horowitz & Taylor, 2019): чим нижча доза, тим повільніше вона зменшується.',
        ],
        callout: 'Я не психіатр і не даю рекомендацій щодо дозувань, термінів чи самого рішення про відміну. Усе, що написано далі, — про психологічну підтримку поруч із медичним веденням, а не замість нього.',
      },
      {
        heading: 'Чому стан повертається після відміни',
        paragraphs: [
          'Антидепресанти знімають симптоми, але не змінюють причину, яка запустила депресію: спосіб реагувати на стрес, пригнічені емоції, переконання про себе, хронічне перенапруження. Поки препарат працює, ці механізми «приглушені». Після відміни вони знову стають чутними — і якщо з ними ніхто не працював, депресія повертається.',
          'Тому найкращий час для психотерапевтичної роботи — ще під час прийому препаратів, до початку зниження. Коли ви підходите до відміни з уже зміненими реакціями, ризик рецидиву значно нижчий.',
        ],
      },
      {
        heading: 'Що робить гіпнотерапія на цьому шляху',
        steps: [
          { title: 'Знаходимо справжню причину', text: 'Що саме привело до депресії: втрата, виснаження, травма, стосунки, нереалізованість. У трансі це видно значно чіткіше, ніж у звичайній розмові.' },
          { title: 'Змінюємо автоматичні реакції', text: 'Переконання «я не впораюся», «я тягар», «це ніколи не закінчиться» перепрописуємо на підсвідомому рівні — саме там, де вони запускають депресивну петлю.' },
          { title: 'Стабілізуємо нервову систему', text: 'Техніки самогіпнозу дають швидкий доступ до стану спокою. Це особливо важливо в період зниження дози, коли тривога й безсоння можуть посилюватися.' },
          { title: 'Проходимо період зниження', text: 'Коли психіатр починає знижувати дозу, гіпнотерапія допомагає відрізняти тимчасові симптоми відміни від реального погіршення — і не піддаватися паніці.' },
          { title: 'Закріплюємо новий стан', text: 'Формуємо образ життя без препаратів і ресурси для нього. Мозок починає шукати підтвердження цьому образу, а не старому.' },
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Гіпноз при депресії', text: 'Метааналіз Milling et al. (2019): гіпнотерапія суттєво зменшує депресивні симптоми, ефект зберігається після закінчення роботи. Це той фундамент, який знижує ризик рецидиву після відміни.' },
          { title: 'Психотерапія знижує ризик рецидиву', text: 'Клінічні настанови (зокрема Royal College of Psychiatrists) рекомендують поєднувати відміну антидепресантів із психологічною підтримкою — саме для профілактики повернення депресії.' },
          { title: 'Повільне зниження', text: 'Lancet Psychiatry (2019): рівномірне зниження дози на останніх етапах викликає непропорційно сильні зміни в мозку; саме тому зниження має бути поступовим і під наглядом лікаря.' },
        ],
      },
      {
        heading: 'Як виглядає оптимальний сценарій',
        bullets: [
          'Ви приймаєте препарат і паралельно починаєте гіпнотерапію (4–6 сесій).',
          'Стан стабілізується: сон, енергія, реакції на стрес змінюються без залежності від дози.',
          'Ви обговорюєте з психіатром готовність до зниження і отримуєте схему.',
          'У період зниження — 1–2 підтримувальні сесії та техніки самогіпнозу щодня.',
          'Після повної відміни — контрольна зустріч через 1–2 місяці.',
        ],
      },
    ],
    faq: [
      { q: 'Чи можна відмовитися від антидепресантів за допомогою гіпнозу?', a: 'Ні — гіпноз не відміняє препарати, це робить лікар. Гіпнотерапія працює з причиною депресії та допомагає пройти період зниження без повернення стану.' },
      { q: 'Чи варто починати гіпнотерапію, поки я ще приймаю антидепресанти?', a: 'Так, це найкращий час. Препарат стабілізує стан, а ми встигаємо змінити реакції, які привели до депресії, до початку зниження.' },
      { q: 'Чи заважають антидепресанти входженню в транс?', a: 'Ні. Більшість людей на антидепресантах входять у транс без проблем. Іноді трохи повільніше — це враховується.' },
      { q: 'Що робити, якщо під час зниження стан погіршився?', a: 'Повідомити лікаря — він вирішує, чи це відміна, чи рецидив, і чи коригувати схему. Гіпнотерапія підтримує, але рішення щодо препарату — за психіатром.' },
      { q: 'Чи працюєте ви з психіатром клієнта?', a: 'За вашим бажанням — так. Я не втручаюся у медичні рішення, але можу бути на зв\'язку, якщо лікарю потрібна інформація про психологічну динаміку.' },
    ],
    disclaimer: 'Ця стаття має інформаційний характер і не є медичною порадою. Рішення про відміну або зміну дози антидепресантів ухвалює лише лікар, який вас веде. Ніколи не припиняйте приймати препарати самостійно. Гіпнотерапія є доповненням до медичного супроводу, а не його заміною.',
    references,
    cta: { title: 'Готуєтеся до відміни або вже в процесі?', text: 'Напишіть кодове слово «Перезапуск» і коротко опишіть ситуацію — обговоримо, чим я можу бути корисним поруч із вашим лікарем', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Как отказаться от антидепрессантов безопасно: роль гипнотерапии | kolomoitsev.com',
    metaDescription: 'Как слезть с антидепрессантов без срыва: почему отмену ведёт психиатр, что такое синдром отмены и как гипнотерапия поддерживает на этом пути. Без обещаний и мифов.',
    breadcrumb: 'Как отказаться от антидепрессантов',
    titleLine1: 'Как отказаться от антидепрессантов',
    titleLine2: 'безопасно и без возврата состояния',
    lead: 'Запрос «как слезть с антидепрессантов» — один из самых частых, с которыми ко мне приходят. И первое, что я говорю: этот путь вы проходите вместе с врачом, который их назначил. Моя роль другая — сделать так, чтобы после отмены состояние не вернулось.',
    sections: [
      {
        heading: 'Главное правило: не отменяйте самостоятельно',
        paragraphs: [
          'Антидепрессанты меняют биохимию мозга, и мозг к этому адаптируется. Резкая отмена или слишком быстрое снижение дозы вызывает синдром отмены: головокружение, «удары током» в голове, тревогу, бессонницу, раздражительность, гриппоподобное состояние. Систематический обзор Davies & Read (2019) показывает, что с синдромом отмены сталкивается около половины людей, и у части из них симптомы длятся недели и месяцы.',
          'Есть и вторая ловушка: симптомы отмены легко спутать с «возвращением депрессии» — и вернуться к препарату, решив, что без него нельзя. Именно поэтому схему снижения составляет психиатр, часто по принципу «гиперболического» снижения (Horowitz & Taylor, 2019): чем ниже доза, тем медленнее она уменьшается.',
        ],
        callout: 'Я не психиатр и не даю рекомендаций по дозировкам, срокам или самому решению об отмене. Всё, что написано дальше, — о психологической поддержке рядом с медицинским ведением, а не вместо него.',
      },
      {
        heading: 'Почему состояние возвращается после отмены',
        paragraphs: [
          'Антидепрессанты снимают симптомы, но не меняют причину, которая запустила депрессию: способ реагировать на стресс, подавленные эмоции, убеждения о себе, хроническое перенапряжение. Пока препарат работает, эти механизмы «приглушены». После отмены они снова становятся слышны — и если с ними никто не работал, депрессия возвращается.',
          'Поэтому лучшее время для психотерапевтической работы — ещё во время приёма препаратов, до начала снижения. Когда вы подходите к отмене с уже изменёнными реакциями, риск рецидива значительно ниже.',
        ],
      },
      {
        heading: 'Что делает гипнотерапия на этом пути',
        steps: [
          { title: 'Находим настоящую причину', text: 'Что именно привело к депрессии: потеря, истощение, травма, отношения, нереализованность. В трансе это видно значительно чётче, чем в обычном разговоре.' },
          { title: 'Меняем автоматические реакции', text: 'Убеждения «я не справлюсь», «я обуза», «это никогда не закончится» переписываем на подсознательном уровне — именно там, где они запускают депрессивную петлю.' },
          { title: 'Стабилизируем нервную систему', text: 'Техники самогипноза дают быстрый доступ к состоянию покоя. Это особенно важно в период снижения дозы, когда тревога и бессонница могут усиливаться.' },
          { title: 'Проходим период снижения', text: 'Когда психиатр начинает снижать дозу, гипнотерапия помогает отличать временные симптомы отмены от реального ухудшения — и не поддаваться панике.' },
          { title: 'Закрепляем новое состояние', text: 'Формируем образ жизни без препаратов и ресурсы для него. Мозг начинает искать подтверждения этому образу, а не старому.' },
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Гипноз при депрессии', text: 'Метаанализ Milling et al. (2019): гипнотерапия существенно уменьшает депрессивные симптомы, эффект сохраняется после окончания работы. Это тот фундамент, который снижает риск рецидива после отмены.' },
          { title: 'Психотерапия снижает риск рецидива', text: 'Клинические руководства (в частности Royal College of Psychiatrists) рекомендуют сочетать отмену антидепрессантов с психологической поддержкой — именно для профилактики возврата депрессии.' },
          { title: 'Медленное снижение', text: 'Lancet Psychiatry (2019): равномерное снижение дозы на последних этапах вызывает непропорционально сильные изменения в мозге; именно поэтому снижение должно быть постепенным и под наблюдением врача.' },
        ],
      },
      {
        heading: 'Как выглядит оптимальный сценарий',
        bullets: [
          'Вы принимаете препарат и параллельно начинаете гипнотерапию (4–6 сессий).',
          'Состояние стабилизируется: сон, энергия, реакции на стресс меняются без зависимости от дозы.',
          'Вы обсуждаете с психиатром готовность к снижению и получаете схему.',
          'В период снижения — 1–2 поддерживающие сессии и техники самогипноза ежедневно.',
          'После полной отмены — контрольная встреча через 1–2 месяца.',
        ],
      },
    ],
    faq: [
      { q: 'Можно ли отказаться от антидепрессантов с помощью гипноза?', a: 'Нет — гипноз не отменяет препараты, это делает врач. Гипнотерапия работает с причиной депрессии и помогает пройти период снижения без возврата состояния.' },
      { q: 'Стоит ли начинать гипнотерапию, пока я ещё принимаю антидепрессанты?', a: 'Да, это лучшее время. Препарат стабилизирует состояние, а мы успеваем изменить реакции, которые привели к депрессии, до начала снижения.' },
      { q: 'Мешают ли антидепрессанты входу в транс?', a: 'Нет. Большинство людей на антидепрессантах входят в транс без проблем. Иногда чуть медленнее — это учитывается.' },
      { q: 'Что делать, если во время снижения состояние ухудшилось?', a: 'Сообщить врачу — он решает, отмена это или рецидив, и корректировать ли схему. Гипнотерапия поддерживает, но решение по препарату — за психиатром.' },
      { q: 'Работаете ли вы с психиатром клиента?', a: 'По вашему желанию — да. Я не вмешиваюсь в медицинские решения, но могу быть на связи, если врачу нужна информация о психологической динамике.' },
    ],
    disclaimer: 'Эта статья носит информационный характер и не является медицинской рекомендацией. Решение об отмене или изменении дозы антидепрессантов принимает только ведущий вас врач. Никогда не прекращайте приём препаратов самостоятельно. Гипнотерапия — дополнение к медицинскому сопровождению, а не его замена.',
    references,
    cta: { title: 'Готовитесь к отмене или уже в процессе?', text: 'Напишите кодовое слово «Перезапуск» и коротко опишите ситуацию — обсудим, чем я могу быть полезен рядом с вашим врачом', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'How to Come Off Antidepressants Safely: The Role of Hypnotherapy | kolomoitsev.com',
    metaDescription: 'How to stop antidepressants without relapse: why tapering is led by your psychiatrist, what withdrawal syndrome is and how hypnotherapy supports you. No promises, no myths.',
    breadcrumb: 'Coming off antidepressants',
    titleLine1: 'How to Come Off Antidepressants',
    titleLine2: 'safely and without relapse',
    lead: '"How do I get off antidepressants" is one of the most common requests I receive. And the first thing I say is: you walk this path together with the doctor who prescribed them. My role is different: to make sure the state does not come back once the medication is gone.',
    sections: [
      {
        heading: 'The main rule: never stop on your own',
        paragraphs: [
          'Antidepressants change brain chemistry, and the brain adapts to them. Abrupt discontinuation or tapering too fast causes withdrawal syndrome: dizziness, "brain zaps", anxiety, insomnia, irritability, flu-like symptoms. A systematic review by Davies & Read (2019) found that about half of people experience withdrawal effects, and for some they last weeks or months.',
          'There is a second trap: withdrawal symptoms are easily mistaken for "the depression coming back", leading people to resume the drug, convinced they cannot manage without it. This is why the tapering schedule is set by a psychiatrist, often following a "hyperbolic" pattern (Horowitz & Taylor, 2019): the lower the dose, the slower it is reduced.',
        ],
        callout: 'I am not a psychiatrist and I give no recommendations on doses, timelines or the decision to stop itself. Everything below is about psychological support alongside medical care, never instead of it.',
      },
      {
        heading: 'Why the state returns after stopping',
        paragraphs: [
          'Antidepressants relieve symptoms but do not change what triggered the depression: the way you respond to stress, suppressed emotions, beliefs about yourself, chronic overload. While the medication works, these mechanisms are muted. After stopping, they become audible again, and if nobody has worked on them, depression returns.',
          'That is why the best time for psychotherapeutic work is while you are still on medication, before tapering begins. When you approach discontinuation with already changed responses, the risk of relapse is much lower.',
        ],
      },
      {
        heading: 'What hypnotherapy does along the way',
        steps: [
          { title: 'Finding the real cause', text: 'What exactly led to the depression: loss, exhaustion, trauma, relationships, unfulfilment. In trance this is far clearer than in ordinary conversation.' },
          { title: 'Changing automatic responses', text: 'Beliefs like "I cannot cope", "I am a burden", "this will never end" are rewritten at the subconscious level, exactly where they trigger the depressive loop.' },
          { title: 'Stabilizing the nervous system', text: 'Self-hypnosis techniques give quick access to a state of calm. This matters most during tapering, when anxiety and insomnia can flare up.' },
          { title: 'Getting through the taper', text: 'When your psychiatrist starts reducing the dose, hypnotherapy helps you tell temporary withdrawal symptoms from a real worsening, and not panic.' },
          { title: 'Anchoring the new state', text: 'We build an image of life without medication and the resources for it. The brain starts looking for confirmation of this image rather than the old one.' },
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Hypnosis for depression', text: 'Milling et al. meta-analysis (2019): hypnotherapy substantially reduces depressive symptoms, and the effect persists after the intervention ends. This is the foundation that lowers relapse risk after discontinuation.' },
          { title: 'Psychotherapy reduces relapse risk', text: 'Clinical guidance (including the Royal College of Psychiatrists) recommends combining antidepressant discontinuation with psychological support, precisely to prevent the return of depression.' },
          { title: 'Slow tapering', text: 'Lancet Psychiatry (2019): linear dose reductions at the final stages cause disproportionately large changes in the brain; this is why tapering must be gradual and medically supervised.' },
        ],
      },
      {
        heading: 'What the optimal scenario looks like',
        bullets: [
          'You continue your medication and start hypnotherapy in parallel (4–6 sessions).',
          'Your state stabilizes: sleep, energy and stress responses change independently of the dose.',
          'You discuss readiness to taper with your psychiatrist and receive a schedule.',
          'During the taper: 1–2 supportive sessions and daily self-hypnosis techniques.',
          'After full discontinuation: a follow-up meeting after 1–2 months.',
        ],
      },
    ],
    faq: [
      { q: 'Can I stop antidepressants with the help of hypnosis?', a: 'No. Hypnosis does not stop medication; your doctor does. Hypnotherapy works with the cause of depression and helps you get through the taper without the state returning.' },
      { q: 'Should I start hypnotherapy while still taking antidepressants?', a: 'Yes, this is the best time. The medication stabilizes you, and we have time to change the responses that led to depression before tapering begins.' },
      { q: 'Do antidepressants interfere with entering trance?', a: 'No. Most people on antidepressants enter trance without difficulty. Occasionally a little more slowly, which we account for.' },
      { q: 'What if my state worsens during tapering?', a: 'Tell your doctor; they decide whether it is withdrawal or relapse and whether to adjust the schedule. Hypnotherapy supports you, but medication decisions belong to the psychiatrist.' },
      { q: 'Do you work together with a client\'s psychiatrist?', a: 'If you wish, yes. I do not interfere with medical decisions, but I can stay in touch if your doctor needs information about your psychological progress.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Only your treating physician decides whether and how to reduce or stop antidepressants. Never stop taking medication on your own. Hypnotherapy is a complement to medical care, not a replacement for it.',
    references,
    cta: { title: 'Preparing to taper, or already in the process?', text: 'Message me the code word "Restart" and briefly describe your situation. We will discuss how I can be useful alongside your doctor', button: 'Message "Restart"' },
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
