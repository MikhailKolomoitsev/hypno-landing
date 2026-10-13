import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout, { articleMetadata, type ArticleContent, type Reference } from '../components/ArticleLayout';
import { ARTICLES, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-pry-depresiyi';
const meta = ARTICLES.find((a) => a.slug === SLUG)!;

const references: Reference[] = [
  { label: 'Milling L.S., Valentine K.E., McCarley H.S., LoStimolo L.M. (2019). A meta-analysis of hypnotic interventions for depression symptoms: high hopes for hypnosis? American Journal of Clinical Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/34874235/' },
  { label: 'Shih M., Yang Y.H., Koo M. (2009). A meta-analysis of hypnosis in the treatment of depressive symptoms: a brief communication. International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/20183000/' },
  { label: 'Alladin A., Alibhai A. (2007). Cognitive hypnotherapy for depression: an empirical investigation. International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/17365072/' },
  { label: 'WHO. Depressive disorder (depression) — fact sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/depression' },
];

const content: Record<Locale, ArticleContent> = {
  uk: {
    metaTitle: 'Гіпноз при депресії: чи допомагає гіпнотерапія і як саме | kolomoitsev.com',
    metaDescription: 'Гіпнотерапія при депресії: коли доречна, що показують метааналізи, як поєднується з лікуванням у психіатра та чого очікувати від сесій.',
    breadcrumb: 'Гіпноз при депресії',
    titleLine1: 'Гіпноз при депресії:',
    titleLine2: 'коли і як це працює',
    lead: 'Депресія — не просто «поганий настрій», а стан, що змінює мислення, енергію, сон і тіло. Гіпнотерапія не є чарівною пігулкою від депресії, але дослідження показують: вона може суттєво посилити результат лікування і допомогти там, де одними розмовами не зрушити.',
    sections: [
      {
        heading: 'Спочатку чесно: що гіпноз може і чого не може',
        paragraphs: [
          'При важкій депресії, суїцидальних думках, біполярному розладі чи психотичних симптомах перший крок — психіатр. Гіпнотерапія у таких випадках може бути лише доповненням до медичного лікування, і лише за згодою лікаря.',
          'При легких і помірних депресивних станах, затяжному вигоранні, депресії після втрати чи важких життєвих змін гіпнотерапія може бути самостійним або основним методом. Саме з такими запитами я працюю найчастіше.',
        ],
      },
      {
        heading: 'Чому депресія тримає так міцно',
        paragraphs: [
          'Депресивний стан має власну «петлю»: негативні автоматичні думки → зниження активності → брак позитивного досвіду → підтвердження негативних думок. Мозок вчиться жити у цьому режимі й починає фільтрувати реальність під нього — помічати лише те, що підтверджує безнадію.',
          'Усвідомлена робота (КПТ, розмова) намагається змінити цю петлю на рівні свідомих думок. Гіпноз діє на рівні, де ці думки виникають автоматично — тому зміни часто відчуваються швидше та глибше.',
        ],
      },
      {
        heading: 'Що показують дослідження',
        cards: [
          { title: 'Метааналіз Milling et al. (2019)', text: 'Учасники, які проходили гіпноз, у середньому показали кращий результат, ніж близько 76% учасників контрольних груп. Ефект зберігався і через час після закінчення роботи.' },
          { title: 'Метааналіз Shih, Yang & Koo (2009)', text: 'Гіпнотерапія суттєво зменшувала депресивні симптоми; автори зробили висновок, що це життєздатна альтернатива або доповнення до інших методів.' },
          { title: 'Alladin & Alibhai (2007)', text: 'Когнітивна гіпнотерапія (поєднання гіпнозу з КПТ) дала більше зниження депресії, тривоги та безнадії, ніж сама КПТ — і перевага зберігалася через 12 місяців.' },
        ],
      },
      {
        heading: 'З чим саме працюємо на сесіях',
        steps: [
          { title: 'Відновлення ресурсу', text: 'Першочергове завдання — повернути відчуття, що стан може змінюватися. Транс сам по собі дає глибокий відпочинок нервовій системі, що при депресії вже відчутно.' },
          { title: 'Автоматичні думки', text: 'Знаходимо «фонові» переконання про себе, майбутнє, світ, які запускають депресивну петлю, і змінюємо їх на рівні підсвідомості.' },
          { title: 'Пригнічені емоції', text: 'Часто за депресією стоїть не прожитий гнів, горе чи провина. У трансі їх можна безпечно завершити — без повторного травмування.' },
          { title: 'Сон, енергія, тіло', text: 'Окремо працюємо з безсонням, ранковою важкістю, апетитом. Покращення сну часто стає першим відчутним результатом.' },
          { title: 'Новий сценарій', text: 'Формуємо образ життя після депресії і «прописуємо» його так, щоб мозок почав шукати шляхи до нього сам.' },
        ],
      },
      {
        heading: 'Якщо ви вже приймаєте антидепресанти',
        paragraphs: ['Це не перешкода для гіпнотерапії — навпаки, поєднання часто дає кращий результат, ніж кожен метод окремо. Я не змінюю і не відміняю призначення лікаря. Якщо з часом ви захочете зменшити препарати, це рішення ухвалюється разом із психіатром; гіпнотерапія може підтримати вас на цьому шляху.'],
        callout: 'Якщо у вас є думки про те, щоб заподіяти собі шкоду, негайно зверніться до лікаря або на лінію психологічної підтримки. В Україні: 7333 (Lifeline Ukraine, цілодобово).',
      },
    ],
    faq: [
      { q: 'Чи може гіпноз замінити антидепресанти?', a: 'Ні, таке рішення не ухвалюється гіпнотерапевтом. При легких станах гіпнотерапія може бути достатньою сама по собі; при помірних і важких — доповнює лікування у психіатра. Будь-які зміни у препаратах узгоджуються з лікарем.' },
      { q: 'Скільки сесій потрібно при депресії?', a: 'Зазвичай 4–8 зустрічей. Перші зміни — сон, рівень енергії — помітні після 1–2 сесій. Стійка зміна стану потребує часу на закріплення.' },
      { q: 'А якщо я не вірю, що мені щось допоможе?', a: 'Це типовий симптом депресії, а не ваша об\'єктивна оцінка. Віра не потрібна — потрібна готовність спробувати. Гіпноз працює незалежно від скепсису.' },
      { q: 'Чи безпечний гіпноз при депресії?', a: 'При легких і помірних станах — так, це м\'який метод без побічних ефектів. Протипоказання: психотичні симптоми, біполярний розлад у гострій фазі, активні суїцидальні наміри. У таких випадках спочатку психіатр.' },
      { q: 'Чи працює гіпноз при вигоранні, а не клінічній депресії?', a: 'Так, і зазвичай навіть швидше. Вигорання — стан виснаження, що ще не став повноцінною депресією. 3–4 сесій часто достатньо.' },
    ],
    disclaimer: 'Стаття має інформаційний характер і не є медичною порадою. Депресія — медичний діагноз, який ставить лікар. Гіпнотерапія не замінює консультацію психіатра та не є підставою для зміни або відміни призначених препаратів.',
    references,
    cta: { title: 'Не впевнені, чи ваш випадок підходить?', text: 'Напишіть кодове слово «Перезапуск» і коротко опишіть ситуацію — я чесно скажу, чи зможу допомогти, або порекомендую, до кого звернутися', button: 'Написати «Перезапуск»' },
  },
  ru: {
    metaTitle: 'Гипноз при депрессии: помогает ли гипнотерапия и как именно | kolomoitsev.com',
    metaDescription: 'Гипнотерапия при депрессии: когда уместна, что показывают метаанализы, как сочетается с лечением у психиатра и чего ожидать от сессий.',
    breadcrumb: 'Гипноз при депрессии',
    titleLine1: 'Гипноз при депрессии:',
    titleLine2: 'когда и как это работает',
    lead: 'Депрессия — не просто «плохое настроение», а состояние, которое меняет мышление, энергию, сон и тело. Гипнотерапия не волшебная таблетка от депрессии, но исследования показывают: она может существенно усилить результат лечения и помочь там, где одними разговорами не сдвинуться.',
    sections: [
      {
        heading: 'Сначала честно: что гипноз может и чего не может',
        paragraphs: [
          'При тяжёлой депрессии, суицидальных мыслях, биполярном расстройстве или психотических симптомах первый шаг — психиатр. Гипнотерапия в таких случаях может быть только дополнением к медицинскому лечению, и только с согласия врача.',
          'При лёгких и умеренных депрессивных состояниях, затяжном выгорании, депрессии после потери или тяжёлых жизненных перемен гипнотерапия может быть самостоятельным или основным методом. Именно с такими запросами я работаю чаще всего.',
        ],
      },
      {
        heading: 'Почему депрессия держит так крепко',
        paragraphs: [
          'Депрессивное состояние имеет собственную «петлю»: негативные автоматические мысли → снижение активности → нехватка позитивного опыта → подтверждение негативных мыслей. Мозг учится жить в этом режиме и начинает фильтровать реальность под него — замечать только то, что подтверждает безнадёжность.',
          'Осознанная работа (КПТ, разговор) пытается изменить эту петлю на уровне сознательных мыслей. Гипноз действует на уровне, где эти мысли возникают автоматически — поэтому изменения часто ощущаются быстрее и глубже.',
        ],
      },
      {
        heading: 'Что показывают исследования',
        cards: [
          { title: 'Метаанализ Milling et al. (2019)', text: 'Участники, проходившие гипноз, в среднем показали лучший результат, чем около 76% участников контрольных групп. Эффект сохранялся и спустя время после окончания работы.' },
          { title: 'Метаанализ Shih, Yang & Koo (2009)', text: 'Гипнотерапия существенно уменьшала депрессивные симптомы; авторы заключили, что это жизнеспособная альтернатива или дополнение к другим методам.' },
          { title: 'Alladin & Alibhai (2007)', text: 'Когнитивная гипнотерапия (сочетание гипноза с КПТ) дала большее снижение депрессии, тревоги и безнадёжности, чем сама КПТ — и преимущество сохранялось через 12 месяцев.' },
        ],
      },
      {
        heading: 'С чем именно работаем на сессиях',
        steps: [
          { title: 'Восстановление ресурса', text: 'Первоочередная задача — вернуть ощущение, что состояние может меняться. Транс сам по себе даёт глубокий отдых нервной системе, что при депрессии уже ощутимо.' },
          { title: 'Автоматические мысли', text: 'Находим «фоновые» убеждения о себе, будущем, мире, которые запускают депрессивную петлю, и меняем их на уровне подсознания.' },
          { title: 'Подавленные эмоции', text: 'Часто за депрессией стоит непрожитый гнев, горе или вина. В трансе их можно безопасно завершить — без повторной травматизации.' },
          { title: 'Сон, энергия, тело', text: 'Отдельно работаем с бессонницей, утренней тяжестью, аппетитом. Улучшение сна часто становится первым ощутимым результатом.' },
          { title: 'Новый сценарий', text: 'Формируем образ жизни после депрессии и «прописываем» его так, чтобы мозг начал искать пути к нему сам.' },
        ],
      },
      {
        heading: 'Если вы уже принимаете антидепрессанты',
        paragraphs: ['Это не препятствие для гипнотерапии — наоборот, сочетание часто даёт лучший результат, чем каждый метод отдельно. Я не меняю и не отменяю назначения врача. Если со временем вы захотите снизить препараты, это решение принимается вместе с психиатром; гипнотерапия может поддержать вас на этом пути.'],
        callout: 'Если у вас есть мысли о том, чтобы причинить себе вред, немедленно обратитесь к врачу или на линию психологической поддержки. В Украине: 7333 (Lifeline Ukraine, круглосуточно).',
      },
    ],
    faq: [
      { q: 'Может ли гипноз заменить антидепрессанты?', a: 'Нет, такое решение не принимается гипнотерапевтом. При лёгких состояниях гипнотерапия может быть достаточной сама по себе; при умеренных и тяжёлых — дополняет лечение у психиатра. Любые изменения в препаратах согласуются с врачом.' },
      { q: 'Сколько сессий нужно при депрессии?', a: 'Обычно 4–8 встреч. Первые изменения — сон, уровень энергии — заметны после 1–2 сессий. Устойчивое изменение состояния требует времени на закрепление.' },
      { q: 'А если я не верю, что мне что-то поможет?', a: 'Это типичный симптом депрессии, а не ваша объективная оценка. Вера не нужна — нужна готовность попробовать. Гипноз работает независимо от скепсиса.' },
      { q: 'Безопасен ли гипноз при депрессии?', a: 'При лёгких и умеренных состояниях — да, это мягкий метод без побочных эффектов. Противопоказания: психотические симптомы, биполярное расстройство в острой фазе, активные суицидальные намерения. В таких случаях сначала психиатр.' },
      { q: 'Работает ли гипноз при выгорании, а не клинической депрессии?', a: 'Да, и обычно даже быстрее. Выгорание — состояние истощения, которое ещё не стало полноценной депрессией. 3–4 сессий часто достаточно.' },
    ],
    disclaimer: 'Статья носит информационный характер и не является медицинской рекомендацией. Депрессия — медицинский диагноз, который ставит врач. Гипнотерапия не заменяет консультацию психиатра и не является основанием для изменения или отмены назначенных препаратов.',
    references,
    cta: { title: 'Не уверены, подходит ли ваш случай?', text: 'Напишите кодовое слово «Перезапуск» и коротко опишите ситуацию — я честно скажу, смогу ли помочь, или порекомендую, к кому обратиться', button: 'Написать «Перезапуск»' },
  },
  en: {
    metaTitle: 'Hypnosis for Depression: Does Hypnotherapy Help and How | kolomoitsev.com',
    metaDescription: 'Hypnotherapy for depression: when it is appropriate, what meta-analyses show, how it combines with psychiatric treatment and what to expect from sessions.',
    breadcrumb: 'Hypnosis for depression',
    titleLine1: 'Hypnosis for Depression:',
    titleLine2: 'when and how it works',
    lead: 'Depression is not just a "bad mood"; it is a state that changes thinking, energy, sleep and the body. Hypnotherapy is no magic pill for depression, but research shows it can substantially strengthen treatment outcomes and help where talking alone does not move things.',
    sections: [
      {
        heading: 'First, honestly: what hypnosis can and cannot do',
        paragraphs: [
          'For severe depression, suicidal thoughts, bipolar disorder or psychotic symptoms, the first step is a psychiatrist. In these cases hypnotherapy can only be an addition to medical treatment, and only with the doctor\'s agreement.',
          'For mild to moderate depressive states, prolonged burnout, depression after loss or major life changes, hypnotherapy can be a standalone or primary method. These are the requests I work with most often.',
        ],
      },
      {
        heading: 'Why depression holds on so tightly',
        paragraphs: [
          'A depressive state has its own loop: negative automatic thoughts → reduced activity → lack of positive experience → confirmation of the negative thoughts. The brain learns to live in this mode and starts filtering reality to fit it, noticing only what confirms hopelessness.',
          'Conscious work (CBT, talking) tries to change this loop at the level of deliberate thought. Hypnosis acts at the level where those thoughts arise automatically, which is why change is often felt faster and deeper.',
        ],
      },
      {
        heading: 'What the research shows',
        cards: [
          { title: 'Milling et al. meta-analysis (2019)', text: 'The average participant receiving hypnosis improved more than about 76% of control participants. The effect held up at follow-up after the intervention ended.' },
          { title: 'Shih, Yang & Koo meta-analysis (2009)', text: 'Hypnotherapy significantly reduced depressive symptoms; the authors concluded it is a viable alternative or complement to other approaches.' },
          { title: 'Alladin & Alibhai (2007)', text: 'Cognitive hypnotherapy (hypnosis combined with CBT) produced greater reductions in depression, anxiety and hopelessness than CBT alone, and the advantage remained at 12-month follow-up.' },
        ],
      },
      {
        heading: 'What exactly we work on in sessions',
        steps: [
          { title: 'Restoring resources', text: 'The first task is to bring back the sense that the state can change. Trance itself gives the nervous system deep rest, which is already noticeable in depression.' },
          { title: 'Automatic thoughts', text: 'We find the background beliefs about yourself, the future and the world that trigger the depressive loop, and change them at the subconscious level.' },
          { title: 'Suppressed emotions', text: 'Behind depression there is often unprocessed anger, grief or guilt. In trance these can be safely completed without re-traumatization.' },
          { title: 'Sleep, energy, body', text: 'We work separately on insomnia, morning heaviness and appetite. Better sleep is often the first tangible result.' },
          { title: 'A new script', text: 'We build an image of life after depression and "install" it so the brain starts looking for ways to get there on its own.' },
        ],
      },
      {
        heading: 'If you are already taking antidepressants',
        paragraphs: ['This is not an obstacle to hypnotherapy; on the contrary, the combination often works better than either method alone. I do not change or stop your doctor\'s prescriptions. If in time you want to reduce medication, that decision is made together with your psychiatrist; hypnotherapy can support you along the way.'],
        callout: 'If you have thoughts of harming yourself, contact a doctor or a crisis line immediately. In Ukraine: 7333 (Lifeline Ukraine, 24/7). Elsewhere, use your local emergency or crisis number.',
      },
    ],
    faq: [
      { q: 'Can hypnosis replace antidepressants?', a: 'No, and that decision is not made by a hypnotherapist. For mild states hypnotherapy may be sufficient on its own; for moderate to severe depression it complements psychiatric treatment. Any medication changes are agreed with your doctor.' },
      { q: 'How many sessions are needed for depression?', a: 'Usually 4–8 meetings. The first changes, in sleep and energy, are noticeable after 1–2 sessions. A lasting shift takes time to consolidate.' },
      { q: 'What if I do not believe anything will help me?', a: 'That is a typical symptom of depression, not your objective assessment. Belief is not required, only willingness to try. Hypnosis works regardless of skepticism.' },
      { q: 'Is hypnosis safe for depression?', a: 'For mild to moderate states, yes; it is a gentle method without side effects. Contraindications: psychotic symptoms, bipolar disorder in an acute phase, active suicidal intent. In those cases, a psychiatrist comes first.' },
      { q: 'Does hypnosis work for burnout rather than clinical depression?', a: 'Yes, and usually even faster. Burnout is a state of exhaustion that has not yet become full depression. 3–4 sessions are often enough.' },
    ],
    disclaimer: 'This article is for information only and is not medical advice. Depression is a medical diagnosis made by a physician. Hypnotherapy does not replace a psychiatric consultation and is not grounds for changing or stopping prescribed medication.',
    references,
    cta: { title: 'Not sure your case is a fit?', text: 'Message me the code word "Restart" and briefly describe your situation. I will tell you honestly whether I can help, or recommend who to see', button: 'Message "Restart"' },
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
