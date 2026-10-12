import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, serviceMetadata } from '../components/ServiceShell';
import { LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-protypokazannya';

const content = {
  uk: {
    metaTitle: 'Гіпноз: протипоказання та шкода — що потрібно знати | kolomoitsev.com',
    metaDescription: 'Реальні протипоказання до гіпнозу. Кому гіпноз може нашкодити, а кому — ні. Розвіюємо міфи. Сертифікований гіпнотерапевт Михайло Коломийцев.',
    breadcrumb: 'Гіпноз: протипоказання',
    title1: 'Гіпноз: протипоказання', title2: 'та шкода — правда без прикрас',
    lead: 'Гіпноз — потужний інструмент, але, як і будь-який інструмент, він не підходить абсолютно всім. Нижче — чесна інформація без зайвого маркетингу: де реальні протипоказання, а де просто страхи з фільмів.',
    whatTitle: 'Що таке гіпноз насправді?',
    what1: 'На практиці гіпноз — це просто стан зосередженої уваги, коли підсвідомість трохи більше відкрита до змін, ніж зазвичай. Свідомість при цьому нікуди не зникає: на сесіях я регулярно бачу, як клієнти кивають, відповідають на запитання і навіть посміхаються в окремі моменти.',
    what2: 'Багато хто чекає чогось схожого на сон або кіношне «зомбування» — насправді нічого подібного немає. Ви чуєте кожне слово, добре пам\'ятаєте все, що відбувалося на сесії, і за бажанням можете вийти з трансу в будь-яку секунду.',
    absTitle: 'Абсолютні протипоказання', absSub: 'Стани, при яких гіпнотерапія не проводиться ні за яких умов:',
    abs: [
      { title: 'Психоз та шизофренія', text: 'Активні психотичні епізоди, галюцинації, маячення. Гіпнотичний стан може посилити симптоми.' },
      { title: 'Важка депресія з суїцидальними думками', text: 'За наявності суїцидальних ідей необхідна термінова психіатрична допомога, а не гіпнотерапія.' },
      { title: 'Важка форма епілепсії', text: 'Стан розслаблення та зміна стану свідомості можуть спровокувати напад.' },
      { title: 'Стан сп\'яніння', text: 'Алкогольне або наркотичне сп\'яніння повністю виключає проведення сесії.' },
    ],
    relTitle: 'Відносні протипоказання', relSub: 'Потребують попереднього обговорення зі спеціалістом:',
    rel: ['Вагітність (тільки з дозволу лікаря)', 'Серцеві аритмії у важкій формі', 'Деякі форми розладів особистості', 'Дитячий вік до 12 років (тільки з присутністю батьків)'],
    harmTitle: 'Чи може гіпноз нашкодити?',
    harm1: 'Коротко: ні, якщо працюєте з людиною, яка дійсно розуміє, що робить. За роки практики я не бачив випадків, щоб гіпноз залишав якісь «сліди» в підсвідомості чи змінював характер людини. Найчастіше після сесії клієнти описують стан, схожий на глибоку медитацію — спокій і легка приємна втома.',
    harm2: 'Проблеми трапляються там, де працює людина без сертифікації й без розуміння етики цього методу. Тому я б завжди радив перевіряти кваліфікацію спеціаліста — це займає кілька хвилин, а захищає від реальних ризиків.',
    mythsTitle: 'Поширені міфи', mythLabel: 'Міф', factLabel: 'Факт',
    myths: [
      { myth: 'Під гіпнозом можна видати таємниці', fact: 'Неправда. Ви самі вирішуєте, що сказати, а що залишити при собі. Це не «сироватка правди» з фільмів.' },
      { myth: 'Загіпнотизувати можна кожного проти його волі', fact: 'Ні, і це принципово важливо. Без вашої згоди й бажання гіпноз просто не спрацює.' },
      { myth: 'Можна застрягти у трансі', fact: 'Це міф. Транс — природний стан: з нього виходять самостійно, а в гіршому разі просто засинають і прокидаються звичним чином.' },
      { myth: 'Гіпноз — це окультизм', fact: 'Зовсім ні. Гіпнотерапія — визнаний психотерапевтичний метод, який вивчають і застосовують у клінічній практиці.' },
    ],
    ctaTitle: 'Залишились запитання?', ctaText: 'Напишіть — я безкоштовно проконсультую і скажу, чи підходить вам гіпнотерапія',
  },
  ru: {
    metaTitle: 'Гипноз: противопоказания и вред — что нужно знать | kolomoitsev.com',
    metaDescription: 'Реальные противопоказания к гипнозу. Кому гипноз может навредить, а кому — нет. Развеиваем мифы. Сертифицированный гипнотерапевт Михаил Коломойцев.',
    breadcrumb: 'Гипноз: противопоказания',
    title1: 'Гипноз: противопоказания', title2: 'и вред — правда без прикрас',
    lead: 'Гипноз — мощный инструмент, но, как и любой инструмент, он подходит не абсолютно всем. Ниже — честная информация без лишнего маркетинга: где реальные противопоказания, а где просто страхи из фильмов.',
    whatTitle: 'Что такое гипноз на самом деле?',
    what1: 'На практике гипноз — это просто состояние сосредоточенного внимания, когда подсознание немного больше открыто к изменениям, чем обычно. Сознание при этом никуда не исчезает: на сессиях я регулярно вижу, как клиенты кивают, отвечают на вопросы и даже улыбаются в отдельные моменты.',
    what2: 'Многие ждут чего-то похожего на сон или киношное «зомбирование» — на самом деле ничего подобного нет. Вы слышите каждое слово, хорошо помните всё, что происходило на сессии, и по желанию можете выйти из транса в любую секунду.',
    absTitle: 'Абсолютные противопоказания', absSub: 'Состояния, при которых гипнотерапия не проводится ни при каких условиях:',
    abs: [
      { title: 'Психоз и шизофрения', text: 'Активные психотические эпизоды, галлюцинации, бред. Гипнотическое состояние может усилить симптомы.' },
      { title: 'Тяжёлая депрессия с суицидальными мыслями', text: 'При наличии суицидальных идей необходима срочная психиатрическая помощь, а не гипнотерапия.' },
      { title: 'Тяжёлая форма эпилепсии', text: 'Состояние расслабления и изменение состояния сознания могут спровоцировать приступ.' },
      { title: 'Состояние опьянения', text: 'Алкогольное или наркотическое опьянение полностью исключает проведение сессии.' },
    ],
    relTitle: 'Относительные противопоказания', relSub: 'Требуют предварительного обсуждения со специалистом:',
    rel: ['Беременность (только с разрешения врача)', 'Сердечные аритмии в тяжёлой форме', 'Некоторые формы расстройств личности', 'Детский возраст до 12 лет (только в присутствии родителей)'],
    harmTitle: 'Может ли гипноз навредить?',
    harm1: 'Коротко: нет, если работаете с человеком, который действительно понимает, что делает. За годы практики я не видел случаев, чтобы гипноз оставлял какие-то «следы» в подсознании или менял характер человека. Чаще всего после сессии клиенты описывают состояние, похожее на глубокую медитацию — спокойствие и лёгкая приятная усталость.',
    harm2: 'Проблемы случаются там, где работает человек без сертификации и без понимания этики этого метода. Поэтому я бы всегда советовал проверять квалификацию специалиста — это занимает несколько минут, а защищает от реальных рисков.',
    mythsTitle: 'Распространённые мифы', mythLabel: 'Миф', factLabel: 'Факт',
    myths: [
      { myth: 'Под гипнозом можно выдать тайны', fact: 'Неправда. Вы сами решаете, что сказать, а что оставить при себе. Это не «сыворотка правды» из фильмов.' },
      { myth: 'Загипнотизировать можно каждого против его воли', fact: 'Нет, и это принципиально важно. Без вашего согласия и желания гипноз просто не сработает.' },
      { myth: 'Можно застрять в трансе', fact: 'Это миф. Транс — естественное состояние: из него выходят самостоятельно, а в худшем случае просто засыпают и просыпаются обычным образом.' },
      { myth: 'Гипноз — это оккультизм', fact: 'Совсем нет. Гипнотерапия — признанный психотерапевтический метод, который изучают и применяют в клинической практике.' },
    ],
    ctaTitle: 'Остались вопросы?', ctaText: 'Напишите — я бесплатно проконсультирую и скажу, подходит ли вам гипнотерапия',
  },
  en: {
    metaTitle: 'Hypnosis Contraindications and Risks: What You Need to Know | kolomoitsev.com',
    metaDescription: 'Real contraindications to hypnosis. Who hypnosis can harm and who it cannot. Myths debunked. Certified hypnotherapist Mykhailo Kolomoitsev.',
    breadcrumb: 'Hypnosis: contraindications',
    title1: 'Hypnosis: Contraindications', title2: 'and risks, honestly',
    lead: 'Hypnosis is a powerful tool, but like any tool it is not for absolutely everyone. Below is honest information without the marketing: where the real contraindications are, and where it is just fears from the movies.',
    whatTitle: 'What hypnosis actually is',
    what1: 'In practice, hypnosis is simply a state of focused attention in which the subconscious is a little more open to change than usual. Consciousness does not go anywhere: in sessions I regularly see clients nod, answer questions and even smile at certain moments.',
    what2: 'Many people expect something like sleep or movie-style "zombification"; in reality there is nothing of the kind. You hear every word, remember everything that happened in the session, and can leave the trance at any second if you wish.',
    absTitle: 'Absolute contraindications', absSub: 'Conditions in which hypnotherapy is never performed:',
    abs: [
      { title: 'Psychosis and schizophrenia', text: 'Active psychotic episodes, hallucinations, delusions. A hypnotic state can intensify symptoms.' },
      { title: 'Severe depression with suicidal thoughts', text: 'Where suicidal ideation is present, urgent psychiatric care is needed, not hypnotherapy.' },
      { title: 'Severe epilepsy', text: 'Deep relaxation and an altered state of consciousness can trigger a seizure.' },
      { title: 'Intoxication', text: 'Alcohol or drug intoxication rules out a session completely.' },
    ],
    relTitle: 'Relative contraindications', relSub: 'Require prior discussion with a specialist:',
    rel: ['Pregnancy (only with a doctor\'s approval)', 'Severe cardiac arrhythmias', 'Some forms of personality disorder', 'Children under 12 (only with a parent present)'],
    harmTitle: 'Can hypnosis cause harm?',
    harm1: 'In short: no, if you work with someone who genuinely understands what they are doing. In years of practice I have not seen hypnosis leave any "traces" in the subconscious or change a person\'s character. Most often, after a session clients describe a state similar to deep meditation: calm and a light, pleasant tiredness.',
    harm2: 'Problems happen where someone works without certification and without understanding the ethics of the method. That is why I always recommend checking a specialist\'s qualifications; it takes a few minutes and protects you from real risks.',
    mythsTitle: 'Common myths', mythLabel: 'Myth', factLabel: 'Fact',
    myths: [
      { myth: 'Under hypnosis you can give away secrets', fact: 'False. You decide what to say and what to keep to yourself. It is not a "truth serum" from the movies.' },
      { myth: 'Anyone can be hypnotized against their will', fact: 'No, and this is fundamental. Without your consent and willingness, hypnosis simply does not work.' },
      { myth: 'You can get stuck in a trance', fact: 'A myth. Trance is a natural state: people come out of it on their own, or at worst simply fall asleep and wake up normally.' },
      { myth: 'Hypnosis is the occult', fact: 'Not at all. Hypnotherapy is a recognized psychotherapeutic method studied and used in clinical practice.' },
    ],
    ctaTitle: 'Still have questions?', ctaText: 'Message me and I will give you a free consultation and tell you whether hypnotherapy is right for you',
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
      cta={{ title: t.ctaTitle, text: t.ctaText, button: CODE_WORD[locale].button }}
    >
      <section className="space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whatTitle}</h2>
          <p>{t.what1}</p>
          <p className="mt-4">{t.what2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.absTitle}</h2>
          <p className="text-gray-500 text-sm mb-4">{t.absSub}</p>
          <div className="space-y-3">
            {t.abs.map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-red-500/15 bg-red-500/5">
                <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                <div>
                  <div className="text-white font-medium text-sm mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.relTitle}</h2>
          <p className="text-gray-500 text-sm mb-4">{t.relSub}</p>
          <div className="space-y-2">
            {t.rel.map((item) => (
              <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl border border-yellow-500/10 bg-yellow-500/5 text-sm text-gray-400">
                <span className="text-yellow-400 mt-0.5 flex-shrink-0">⚠</span>{item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.harmTitle}</h2>
          <p>{t.harm1}</p>
          <p className="mt-4">{t.harm2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.mythsTitle}</h2>
          <div className="space-y-4">
            {t.myths.map((item) => (
              <div key={item.myth} className="p-4 rounded-xl border border-white/8 bg-white/3">
                <div className="text-red-400 text-sm font-medium mb-1">{t.mythLabel}: «{item.myth}»</div>
                <div className="text-gray-400 text-sm"><span className="text-green-400 font-medium">{t.factLabel}:</span> {item.fact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceShell>
  );
}
