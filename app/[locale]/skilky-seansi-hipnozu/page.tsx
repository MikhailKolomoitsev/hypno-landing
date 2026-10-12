import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, CtaText, serviceMetadata } from '../components/ServiceShell';
import { LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'skilky-seansi-hipnozu';

const content = {
  uk: {
    metaTitle: 'Скільки сеансів гіпнозу потрібно для результату? | kolomoitsev.com',
    metaDescription: 'Скільки сеансів гіпнозу потрібно залежно від запиту. Реальні цифри від практикуючого гіпнотерапевта. Від 1 до 6 зустрічей для більшості проблем.',
    breadcrumb: 'Скільки сеансів гіпнозу',
    title1: 'Скільки сеансів гіпнозу', title2: 'потрібно для результату?',
    lead: 'Найчастіше запитують: «А якщо я прийду і нічого не відбудеться?». Відповідь чесна — результат залежить від запиту. Ось реальні цифри з практики.',
    tableTitle: 'Кількість сеансів залежно від запиту',
    rows: [
      { problem: 'Куріння', sessions: '1–2 сеанси', note: 'Один сеанс часто достатній для повної зупинки' },
      { problem: 'Конкретна фобія (павуки, польоти, висота)', sessions: '1–3 сеанси', note: 'Чим чіткіше сформульований страх, тим швидший результат' },
      { problem: 'Панічні атаки та тривожність', sessions: '3–5 сеансів', note: 'Потребує роботи з першопричиною, яка може бути глибшою' },
      { problem: 'Прокрастинація та самосаботаж', sessions: '2–4 сеанси', note: 'Залежить від складності підсвідомих програм' },
      { problem: 'Зайва вага та харчова поведінка', sessions: '3–6 сеансів', note: 'Харчові звички формуються роками — потрібен час на перепрограмування' },
      { problem: 'Регресивний гіпноз', sessions: '1–3 сеанси', note: 'Кожна сесія — окрема робота, не обов\'язково пов\'язана з наступною' },
      { problem: 'Залежності (алкоголь, азартні ігри)', sessions: '4–8 сеансів', note: 'Складні випадки можуть потребувати більше — залежить від глибини проблеми' },
    ],
    factorsTitle: 'Що впливає на кількість сеансів?',
    factors: [
      { factor: 'Глибина проблеми', text: 'Страх, який з\'явився після однієї події, зазвичай минає швидше, ніж той, що формувався роками.' },
      { factor: 'Готовність до змін', text: 'Чим більше людина хоче змінитись і вірить у метод — тим швидший результат.' },
      { factor: 'Чіткість запиту', text: 'Конкретна проблема вирішується швидше, ніж розмите «хочу стати кращою версією себе».' },
      { factor: 'Глибина трансу', text: 'Деякі люди входять у глибший транс, що прискорює роботу. Але навіть легкий транс дає результат.' },
    ],
    guaranteeTitle: '100% гарантія результату',
    guarantee: 'Якщо після сесії ви не відчуєте жодних змін — я повертаю гроші повністю, без запитань. Це не маркетинговий хід: за 3+ роки практики мені не довелося повертати гроші жодному клієнту.',
    oneTitle: 'Чи можна зробити одну сесію і зупинитись?',
    one: 'Так, цілком. Після першої зустрічі саме ви вирішуєте, чи йти далі. Я не продаю «пакети» і не вимагаю передоплати за кілька сесій наперед — кожна зустріч закрита сама по собі, зі своїм конкретним результатом.',
    ctaTitle: 'Дізнайтесь, скільки потрібно саме вам', ctaBefore: 'Напишіть кодове слово', ctaAfter: '— і я безкоштовно проконсультую по вашій ситуації',
  },
  ru: {
    metaTitle: 'Сколько сеансов гипноза нужно для результата? | kolomoitsev.com',
    metaDescription: 'Сколько сеансов гипноза нужно в зависимости от запроса. Реальные цифры от практикующего гипнотерапевта. От 1 до 6 встреч для большинства проблем.',
    breadcrumb: 'Сколько сеансов гипноза',
    title1: 'Сколько сеансов гипноза', title2: 'нужно для результата?',
    lead: 'Чаще всего спрашивают: «А если я приду и ничего не произойдёт?». Ответ честный — результат зависит от запроса. Вот реальные цифры из практики.',
    tableTitle: 'Количество сеансов в зависимости от запроса',
    rows: [
      { problem: 'Курение', sessions: '1–2 сеанса', note: 'Одного сеанса часто достаточно для полной остановки' },
      { problem: 'Конкретная фобия (пауки, полёты, высота)', sessions: '1–3 сеанса', note: 'Чем чётче сформулирован страх, тем быстрее результат' },
      { problem: 'Панические атаки и тревожность', sessions: '3–5 сеансов', note: 'Требует работы с первопричиной, которая может быть глубже' },
      { problem: 'Прокрастинация и самосаботаж', sessions: '2–4 сеанса', note: 'Зависит от сложности подсознательных программ' },
      { problem: 'Лишний вес и пищевое поведение', sessions: '3–6 сеансов', note: 'Пищевые привычки формируются годами — нужно время на перепрограммирование' },
      { problem: 'Регрессивный гипноз', sessions: '1–3 сеанса', note: 'Каждая сессия — отдельная работа, не обязательно связанная со следующей' },
      { problem: 'Зависимости (алкоголь, азартные игры)', sessions: '4–8 сеансов', note: 'Сложные случаи могут требовать больше — зависит от глубины проблемы' },
    ],
    factorsTitle: 'Что влияет на количество сеансов?',
    factors: [
      { factor: 'Глубина проблемы', text: 'Страх, появившийся после одного события, обычно проходит быстрее, чем тот, что формировался годами.' },
      { factor: 'Готовность к изменениям', text: 'Чем больше человек хочет измениться и верит в метод — тем быстрее результат.' },
      { factor: 'Чёткость запроса', text: 'Конкретная проблема решается быстрее, чем размытое «хочу стать лучшей версией себя».' },
      { factor: 'Глубина транса', text: 'Некоторые люди входят в более глубокий транс, что ускоряет работу. Но даже лёгкий транс даёт результат.' },
    ],
    guaranteeTitle: '100% гарантия результата',
    guarantee: 'Если после сессии вы не почувствуете никаких изменений — я возвращаю деньги полностью, без вопросов. Это не маркетинговый ход: за 3+ года практики мне не пришлось возвращать деньги ни одному клиенту.',
    oneTitle: 'Можно ли сделать одну сессию и остановиться?',
    one: 'Да, вполне. После первой встречи именно вы решаете, идти ли дальше. Я не продаю «пакеты» и не требую предоплаты за несколько сессий вперёд — каждая встреча закрыта сама по себе, со своим конкретным результатом.',
    ctaTitle: 'Узнайте, сколько нужно именно вам', ctaBefore: 'Напишите кодовое слово', ctaAfter: '— и я бесплатно проконсультирую по вашей ситуации',
  },
  en: {
    metaTitle: 'How Many Hypnosis Sessions Do You Need for Results? | kolomoitsev.com',
    metaDescription: 'How many hypnosis sessions you need depending on the issue. Real numbers from a practicing hypnotherapist. 1 to 6 meetings for most problems.',
    breadcrumb: 'How many hypnosis sessions',
    title1: 'How Many Hypnosis Sessions', title2: 'do you need for results?',
    lead: 'The most common question: "What if I come and nothing happens?" The honest answer is that it depends on the issue. Here are real numbers from practice.',
    tableTitle: 'Number of sessions by issue',
    rows: [
      { problem: 'Smoking', sessions: '1–2 sessions', note: 'One session is often enough to stop completely' },
      { problem: 'Specific phobia (spiders, flying, heights)', sessions: '1–3 sessions', note: 'The more clearly the fear is defined, the faster the result' },
      { problem: 'Panic attacks and anxiety', sessions: '3–5 sessions', note: 'Requires work on the root cause, which may run deeper' },
      { problem: 'Procrastination and self-sabotage', sessions: '2–4 sessions', note: 'Depends on the complexity of the subconscious programs' },
      { problem: 'Excess weight and eating behavior', sessions: '3–6 sessions', note: 'Eating habits form over years; reprogramming takes time' },
      { problem: 'Regression hypnosis', sessions: '1–3 sessions', note: 'Each session is a self-contained piece of work, not necessarily linked to the next' },
      { problem: 'Addictions (alcohol, gambling)', sessions: '4–8 sessions', note: 'Complex cases may need more, depending on how deep the problem goes' },
    ],
    factorsTitle: 'What affects the number of sessions?',
    factors: [
      { factor: 'Depth of the problem', text: 'A fear that appeared after a single event usually resolves faster than one that formed over years.' },
      { factor: 'Readiness for change', text: 'The more a person wants to change and trusts the method, the faster the result.' },
      { factor: 'Clarity of the request', text: 'A specific problem is solved faster than a vague "I want to become a better version of myself".' },
      { factor: 'Depth of trance', text: 'Some people enter a deeper trance, which speeds up the work. But even a light trance produces results.' },
    ],
    guaranteeTitle: '100% results guarantee',
    guarantee: 'If you feel no change at all after a session, I refund the full amount, no questions asked. This is not a marketing trick: in 3+ years of practice I have not had to refund a single client.',
    oneTitle: 'Can I do one session and stop?',
    one: 'Yes, absolutely. After the first meeting it is you who decides whether to continue. I do not sell "packages" or require prepayment for several sessions; each meeting is complete in itself, with its own concrete result.',
    ctaTitle: 'Find out how many you need', ctaBefore: 'Message me the code word', ctaAfter: 'and I will give you a free consultation on your situation',
  },
} satisfies Record<Locale, unknown>;

export function generateStaticParams() { return LOCALES.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return serviceMetadata(locale, SLUG, content[locale].metaTitle, content[locale].metaDescription);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = content[locale];

  return (
    <ServiceShell
      locale={locale} slug={SLUG} breadcrumb={t.breadcrumb} serviceDescription={t.metaDescription}
      titleLine1={t.title1} titleLine2={t.title2} lead={t.lead}
      faq={[{ q: t.oneTitle, a: t.one }]}
      cta={{ title: t.ctaTitle, text: <CtaText before={t.ctaBefore} locale={locale} after={t.ctaAfter} />, button: CODE_WORD[locale].button }}
    >
      <section className="space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-white text-2xl font-bold mb-6">{t.tableTitle}</h2>
          <div className="space-y-3">
            {t.rows.map((item) => (
              <div key={item.problem} className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-white font-medium">{item.problem}</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/15 border border-green-500/20 text-green-400 text-xs font-medium">{item.sessions}</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.factorsTitle}</h2>
          <div className="space-y-3">
            {t.factors.map((item) => (
              <div key={item.factor} className="p-4 rounded-xl border border-white/8 bg-white/3">
                <div className="text-green-400 font-medium text-sm mb-1">{item.factor}</div>
                <div className="text-gray-400 text-sm">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.guaranteeTitle}</h2>
          <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
            <p className="text-gray-300">{t.guarantee}</p>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.oneTitle}</h2>
          <p>{t.one}</p>
        </div>
      </section>
    </ServiceShell>
  );
}
