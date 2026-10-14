import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, CtaText, serviceMetadata, type Reference } from '../components/ServiceShell';
import { LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-kynuty-palyty';

const references: Reference[] = [
  { label: 'Hasan F.M. et al. (2014). Hypnotherapy is more effective than nicotine replacement therapy for smoking cessation: results of a randomized controlled trial. Complementary Therapies in Medicine.', url: 'https://pubmed.ncbi.nlm.nih.gov/24559809/' },
  { label: 'Elkins G. et al. (2006). Intensive hypnotherapy for smoking cessation: a prospective study. International Journal of Clinical and Experimental Hypnosis.', url: 'https://pubmed.ncbi.nlm.nih.gov/16766441/' },
  { label: 'Barnes J. et al. (2019). Hypnotherapy for smoking cessation. Cochrane Database of Systematic Reviews.', url: 'https://pubmed.ncbi.nlm.nih.gov/31198991/' },
];

const content = {
  uk: {
    metaTitle: 'Гіпноз від куріння: кинути палити за 1–3 сесії | kolomoitsev.com',
    metaDescription: 'Гіпноз допомагає кинути палити назавжди — без ломки і замінників. Як це працює, скільки сеансів потрібно, і чому це ефективніше від пластирів.',
    breadcrumb: 'Гіпноз — кинути палити',
    title1: 'Гіпноз від куріння:', title2: 'кинути палити за 1–3 сесії',
    lead: 'Куріння тримається не лише на фізичній залежності від нікотину — це ще й звичка, ритуал, частина дня. Гіпноз працює саме з цією психологічною частиною, тому й дає те, чого пластирі та жуйки дати не можуть.',
    statValue: '36,6% vs 18%', statLabel: 'не курили через 26 тижнів: гіпнотерапія проти нікотинових пластирів', statSource: 'рандомізоване дослідження Hasan et al., 2014 (джерела внизу сторінки)', evidenceNote: 'Чесно про докази: Cochrane-огляд 2019 року не знайшов достатньо якісних досліджень, щоб стверджувати перевагу гіпнозу над іншими методами. Окремі рандомізовані дослідження показують хороші результати, але я не обіцяю «гарантовано кинете за одну сесію».',
    whyTitle: 'Чому пластирі і жуйки не допомагають?',
    whyIntro: 'Нікотинозамінна терапія справляється з фізичним потягом. Але куріння — це ще й:',
    whyList: ['Ритуал: кава + сигарета, перерва + сигарета', 'Спосіб справлятися зі стресом', 'Соціальна звичка (всі палять — і я)', 'Підсвідоме переконання: «сигарета мене заспокоює»'],
    whyOutro: 'Гіпноз розриває саме ці зв\'язки — на рівні підсвідомості, де вони і живуть.',
    sessionTitle: 'Як відбувається сесія від куріння?',
    steps: [
      { title: 'Вхідна розмова', text: 'З\'ясовуємо ваші тригери, скільки палите, що пробували раніше. 20 хвилин.' },
      { title: 'Введення у транс', text: 'Глибоке розслаблення з фокусом. Ви у свідомості та контролі.' },
      { title: 'Розрив зв\'язків', text: 'Прибираємо асоціації: стрес → сигарета, ранок → сигарета. Замінюємо реакції.' },
      { title: 'Нова ідентичність', text: 'Закріплюємо образ себе як людини, яка не палить — легко і природно.' },
      { title: 'Вихід і закріплення', text: 'Даємо рекомендації на перший тиждень.' },
    ],
    countTitle: 'Скільки сеансів потрібно?',
    count1a: 'Більшість клієнтів кидають палити після ', count1strong: '1–2 сесій', count1b: '. Для тих, хто курить 20+ років або має сильний стресовий тригер — може знадобитися третя.',
    count2: 'Після першої сесії тяга до сигарет значно знижується або зникає. Зазвичай клієнти описують це як: «просто не хочу більше».',
    withdrawalTitle: 'Чи є «ломка»?',
    withdrawal: 'Фізична залежність від нікотину проходить за 3–5 днів — і вона набагато слабша, ніж здається. Більшість «ломки» — це психологічний компонент. Саме з ним і працює гіпноз.',
    condTitle: 'Важлива умова',
    cond1: 'Гіпноз не діє проти волі людини. Ви маєте ', condStrong: 'дійсно хотіти кинути палити', cond2: ' — не «спробувати», не «подивитись що буде». Якщо є реальне бажання — результат майже гарантований.',
    ctaTitle: 'Готові кинути палити?', ctaBefore: 'Напишіть кодове слово', ctaAfter: '— і я безкоштовно проконсультую',
  },
  ru: {
    metaTitle: 'Гипноз от курения: бросить курить за 1–3 сессии | kolomoitsev.com',
    metaDescription: 'Гипноз помогает бросить курить навсегда — без ломки и заменителей. Как это работает, сколько сеансов нужно, и почему это эффективнее пластырей.',
    breadcrumb: 'Гипноз — бросить курить',
    title1: 'Гипноз от курения:', title2: 'бросить курить за 1–3 сессии',
    lead: 'Курение держится не только на физической зависимости от никотина — это ещё и привычка, ритуал, часть дня. Гипноз работает именно с этой психологической частью, поэтому и даёт то, чего пластыри и жвачки дать не могут.',
    statValue: '36,6% vs 18%', statLabel: 'не курили через 26 недель: гипнотерапия против никотиновых пластырей', statSource: 'рандомизированное исследование Hasan et al., 2014 (источники внизу страницы)', evidenceNote: 'Честно о доказательствах: Cochrane-обзор 2019 года не нашёл достаточно качественных исследований, чтобы утверждать превосходство гипноза над другими методами. Отдельные рандомизированные исследования показывают хорошие результаты, но я не обещаю «гарантированно бросите за одну сессию».',
    whyTitle: 'Почему пластыри и жвачки не помогают?',
    whyIntro: 'Никотинозаместительная терапия справляется с физической тягой. Но курение — это ещё и:',
    whyList: ['Ритуал: кофе + сигарета, перерыв + сигарета', 'Способ справляться со стрессом', 'Социальная привычка (все курят — и я)', 'Подсознательное убеждение: «сигарета меня успокаивает»'],
    whyOutro: 'Гипноз разрывает именно эти связи — на уровне подсознания, где они и живут.',
    sessionTitle: 'Как проходит сессия от курения?',
    steps: [
      { title: 'Вводная беседа', text: 'Выясняем ваши триггеры, сколько курите, что пробовали раньше. 20 минут.' },
      { title: 'Введение в транс', text: 'Глубокое расслабление с фокусом. Вы в сознании и контроле.' },
      { title: 'Разрыв связей', text: 'Убираем ассоциации: стресс → сигарета, утро → сигарета. Заменяем реакции.' },
      { title: 'Новая идентичность', text: 'Закрепляем образ себя как человека, который не курит — легко и естественно.' },
      { title: 'Выход и закрепление', text: 'Даём рекомендации на первую неделю.' },
    ],
    countTitle: 'Сколько сеансов нужно?',
    count1a: 'Большинство клиентов бросают курить после ', count1strong: '1–2 сессий', count1b: '. Тем, кто курит 20+ лет или имеет сильный стрессовый триггер, может понадобиться третья.',
    count2: 'После первой сессии тяга к сигаретам значительно снижается или исчезает. Обычно клиенты описывают это так: «просто не хочу больше».',
    withdrawalTitle: 'Есть ли «ломка»?',
    withdrawal: 'Физическая зависимость от никотина проходит за 3–5 дней — и она намного слабее, чем кажется. Большая часть «ломки» — психологический компонент. Именно с ним и работает гипноз.',
    condTitle: 'Важное условие',
    cond1: 'Гипноз не действует против воли человека. Вы должны ', condStrong: 'действительно хотеть бросить курить', cond2: ' — не «попробовать», не «посмотреть, что будет». Если есть реальное желание — результат почти гарантирован.',
    ctaTitle: 'Готовы бросить курить?', ctaBefore: 'Напишите кодовое слово', ctaAfter: '— и я бесплатно проконсультирую',
  },
  en: {
    metaTitle: 'Hypnosis to Quit Smoking: Stop in 1–3 Sessions | kolomoitsev.com',
    metaDescription: 'Hypnosis helps you quit smoking for good, without withdrawal or substitutes. How it works, how many sessions you need, and why it beats patches.',
    breadcrumb: 'Hypnosis to quit smoking',
    title1: 'Hypnosis to Quit Smoking:', title2: 'stop in 1–3 sessions',
    lead: 'Smoking is held in place not only by physical nicotine dependence but also by habit, ritual, a part of your day. Hypnosis works with exactly this psychological part, which is why it delivers what patches and gum cannot.',
    statValue: '36.6% vs 18%', statLabel: 'abstinent at 26 weeks: hypnotherapy versus nicotine patches', statSource: 'randomized trial, Hasan et al., 2014 (references at the bottom of the page)', evidenceNote: 'Honestly about the evidence: the 2019 Cochrane review did not find enough high-quality studies to claim hypnosis beats other methods. Individual randomized trials show good results, but I do not promise you will "definitely quit in one session".',
    whyTitle: 'Why patches and gum do not help',
    whyIntro: 'Nicotine replacement handles the physical craving. But smoking is also:',
    whyList: ['A ritual: coffee + cigarette, break + cigarette', 'A way of coping with stress', 'A social habit (everyone smokes, so do I)', 'A subconscious belief: "a cigarette calms me down"'],
    whyOutro: 'Hypnosis breaks exactly these links, at the subconscious level where they live.',
    sessionTitle: 'How a stop-smoking session goes',
    steps: [
      { title: 'Intake conversation', text: 'We identify your triggers, how much you smoke, what you have tried before. 20 minutes.' },
      { title: 'Induction', text: 'Deep, focused relaxation. You remain aware and in control.' },
      { title: 'Breaking the links', text: 'We remove the associations: stress → cigarette, morning → cigarette. We replace the responses.' },
      { title: 'New identity', text: 'We anchor your self-image as a person who does not smoke, easily and naturally.' },
      { title: 'Emergence and reinforcement', text: 'You get recommendations for the first week.' },
    ],
    countTitle: 'How many sessions are needed',
    count1a: 'Most clients quit after ', count1strong: '1–2 sessions', count1b: '. For those who have smoked 20+ years or have a strong stress trigger, a third may be needed.',
    count2: 'After the first session the craving drops sharply or disappears. Clients usually describe it as "I just don\'t want to anymore".',
    withdrawalTitle: 'Is there withdrawal?',
    withdrawal: 'Physical nicotine dependence passes in 3–5 days, and it is much weaker than it seems. Most of the "withdrawal" is the psychological component. That is exactly what hypnosis works with.',
    condTitle: 'One important condition',
    cond1: 'Hypnosis does not work against a person\'s will. You must ', condStrong: 'genuinely want to quit', cond2: ', not "try" or "see what happens". If the desire is real, the result is almost guaranteed.',
    ctaTitle: 'Ready to quit smoking?', ctaBefore: 'Message me the code word', ctaAfter: 'and I will give you a free consultation',
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
      faq={[{ q: t.countTitle, a: `${t.count1a}${t.count1strong}${t.count1b} ${t.count2}` }, { q: t.withdrawalTitle, a: t.withdrawal }]}
      references={references}
      cta={{ title: t.ctaTitle, text: <CtaText before={t.ctaBefore} locale={locale} after={t.ctaAfter} />, button: CODE_WORD[locale].button }}
    >
      <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5 mb-10 text-center">
        <div className="text-4xl font-bold text-green-400 mb-1">{t.statValue}</div>
        <div className="text-gray-400 text-sm">{t.statLabel}<br /><span className="text-gray-600 text-xs">{t.statSource}</span></div>
        <p className="mt-4 text-left text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-3">{t.evidenceNote}</p>
      </div>

      <section className="space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whyTitle}</h2>
          <p>{t.whyIntro}</p>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            {t.whyList.map((li) => (
              <li key={li} className="flex items-start gap-2"><span className="text-gray-600 mt-0.5">→</span> {li}</li>
            ))}
          </ul>
          <p className="mt-4">{t.whyOutro}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.sessionTitle}</h2>
          <div className="space-y-3">
            {t.steps.map((item) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                <span className="text-green-400 font-bold text-sm flex-shrink-0 mt-0.5">→</span>
                <div>
                  <div className="text-white font-medium text-sm mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.countTitle}</h2>
          <p>{t.count1a}<strong className="text-white">{t.count1strong}</strong>{t.count1b}</p>
          <p className="mt-4">{t.count2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.withdrawalTitle}</h2>
          <p>{t.withdrawal}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.condTitle}</h2>
          <div className="p-5 rounded-2xl border border-yellow-500/15 bg-yellow-500/5">
            <p className="text-gray-300 text-sm">{t.cond1}<strong className="text-white">{t.condStrong}</strong>{t.cond2}</p>
          </div>
        </div>
      </section>
    </ServiceShell>
  );
}
