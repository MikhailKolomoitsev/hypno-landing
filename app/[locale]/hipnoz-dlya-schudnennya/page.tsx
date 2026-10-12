import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, CtaText, serviceMetadata } from '../components/ServiceShell';
import { LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoz-dlya-schudnennya';

const content = {
  uk: {
    metaTitle: 'Гіпноз для схуднення: як це працює і кому підходить | kolomoitsev.com',
    metaDescription: 'Гіпноз для схуднення працює з харчовою поведінкою на рівні підсвідомості: емоційне переїдання, нічний голод, тяга до солодкого. 3–6 сесій онлайн.',
    breadcrumb: 'Гіпноз для схуднення',
    title1: 'Гіпноз для схуднення:', title2: 'як це дійсно працює',
    lead: 'Дієти не працюють у довгостроковій перспективі, бо не змінюють підсвідомі програми поведінки. Гіпноз для схуднення діє там, де сила волі не справляється.',
    whyTitle: 'Чому дієти не спрацьовують?',
    why: 'Майже кожен, хто намагався схуднути, чудово знає: треба їсти менше і рухатися більше. Проблема в тому, що знання і реальна поведінка — це різні речі. Харчова поведінка живе в підсвідомості: тривога тягне до їжі, нудьга тягне до їжі, стрес тягне до солодкого. Дієта звертається до свідомості, а сама проблема сидить глибше.',
    changeTitle: 'Що змінює гіпноз?',
    changes: [
      { before: 'Їжа = заспокоєння', after: 'Інші способи справлятися зі стресом' },
      { before: 'Переїдання «за компанію»', after: 'Відчуття насичення в потрібний момент' },
      { before: 'Тяга до солодкого/смаженого', after: 'Нейтральне або знижене бажання' },
      { before: 'Їжа вночі', after: 'Відсутність нічного голоду' },
    ],
    notMagicTitle: 'Гіпноз — не чарівна пігулка',
    notMagic1: 'Гіпноз змінює харчову поведінку і ваш емоційний зв\'язок з їжею — рухатися й харчуватися збалансовано він замість вас не буде. Що він реально робить — прибирає ',
    notMagicStrong: 'психологічний блок', notMagic2: ', який роками заважав це робити.',
    sessionTitle: 'Що відбувається на сесії?',
    session1: 'У стані трансу ми знаходимо емоційні «тригери» переїдання — конкретні ситуації, емоції або спогади, які запускають небажану поведінку. Потім замінюємо реакцію на них на більш здорову і ресурсну.',
    session2: 'Паралельно — закріплення нового образу себе: людини, яка легко і природно харчується правильно, без примусу і внутрішнього конфлікту.',
    countTitle: 'Скільки сеансів потрібно?',
    count: 'Як правило, 3–6 сесій для стійкого результату. Після першої більшість клієнтів помічають зниження тяги до шкідливих продуктів і менш виражений «емоційний голод».',
    whoTitle: 'Кому підходить гіпноз для схуднення?',
    who: ['Емоційне переїдання', 'Нічний голод', 'Залежність від солодкого', 'Переїдання від стресу або нудьги', 'Неможливість «почати правильно харчуватися»', 'Зриви після кожної дієти'],
    ctaTitle: 'Готові змінити стосунки з їжею?', ctaBefore: 'Напишіть кодове слово', ctaAfter: '— і я безкоштовно проконсультую',
  },
  ru: {
    metaTitle: 'Гипноз для похудения: как это работает и кому подходит | kolomoitsev.com',
    metaDescription: 'Гипноз для похудения работает с пищевым поведением на уровне подсознания: эмоциональное переедание, ночной голод, тяга к сладкому. 3–6 сессий онлайн.',
    breadcrumb: 'Гипноз для похудения',
    title1: 'Гипноз для похудения:', title2: 'как это действительно работает',
    lead: 'Диеты не работают в долгосрочной перспективе, потому что не меняют подсознательные программы поведения. Гипноз для похудения действует там, где сила воли не справляется.',
    whyTitle: 'Почему диеты не срабатывают?',
    why: 'Почти каждый, кто пытался похудеть, прекрасно знает: надо есть меньше и двигаться больше. Проблема в том, что знание и реальное поведение — разные вещи. Пищевое поведение живёт в подсознании: тревога тянет к еде, скука тянет к еде, стресс тянет к сладкому. Диета обращается к сознанию, а сама проблема сидит глубже.',
    changeTitle: 'Что меняет гипноз?',
    changes: [
      { before: 'Еда = успокоение', after: 'Другие способы справляться со стрессом' },
      { before: 'Переедание «за компанию»', after: 'Ощущение насыщения в нужный момент' },
      { before: 'Тяга к сладкому/жареному', after: 'Нейтральное или сниженное желание' },
      { before: 'Еда ночью', after: 'Отсутствие ночного голода' },
    ],
    notMagicTitle: 'Гипноз — не волшебная таблетка',
    notMagic1: 'Гипноз меняет пищевое поведение и вашу эмоциональную связь с едой — двигаться и питаться сбалансированно он вместо вас не будет. Что он реально делает — убирает ',
    notMagicStrong: 'психологический блок', notMagic2: ', который годами мешал это делать.',
    sessionTitle: 'Что происходит на сессии?',
    session1: 'В состоянии транса мы находим эмоциональные «триггеры» переедания — конкретные ситуации, эмоции или воспоминания, которые запускают нежелательное поведение. Затем заменяем реакцию на них на более здоровую и ресурсную.',
    session2: 'Параллельно — закрепление нового образа себя: человека, который легко и естественно питается правильно, без принуждения и внутреннего конфликта.',
    countTitle: 'Сколько сеансов нужно?',
    count: 'Как правило, 3–6 сессий для устойчивого результата. После первой большинство клиентов замечают снижение тяги к вредным продуктам и менее выраженный «эмоциональный голод».',
    whoTitle: 'Кому подходит гипноз для похудения?',
    who: ['Эмоциональное переедание', 'Ночной голод', 'Зависимость от сладкого', 'Переедание от стресса или скуки', 'Невозможность «начать правильно питаться»', 'Срывы после каждой диеты'],
    ctaTitle: 'Готовы изменить отношения с едой?', ctaBefore: 'Напишите кодовое слово', ctaAfter: '— и я бесплатно проконсультирую',
  },
  en: {
    metaTitle: 'Hypnosis for Weight Loss: How It Works and Who It Is For | kolomoitsev.com',
    metaDescription: 'Hypnosis for weight loss works with eating behavior at the subconscious level: emotional eating, night hunger, sugar cravings. 3–6 sessions online.',
    breadcrumb: 'Hypnosis for weight loss',
    title1: 'Hypnosis for Weight Loss:', title2: 'how it really works',
    lead: 'Diets do not work in the long run because they do not change the subconscious programs behind behavior. Hypnosis for weight loss works where willpower fails.',
    whyTitle: 'Why diets fail',
    why: 'Almost everyone who has tried to lose weight knows perfectly well: eat less, move more. The problem is that knowing and actually behaving are different things. Eating behavior lives in the subconscious: anxiety pulls you toward food, boredom pulls you toward food, stress pulls you toward sugar. A diet speaks to the conscious mind, while the problem sits deeper.',
    changeTitle: 'What hypnosis changes',
    changes: [
      { before: 'Food = comfort', after: 'Other ways of coping with stress' },
      { before: 'Overeating "for company"', after: 'Feeling full at the right moment' },
      { before: 'Cravings for sweet/fried food', after: 'Neutral or reduced desire' },
      { before: 'Eating at night', after: 'No night hunger' },
    ],
    notMagicTitle: 'Hypnosis is not a magic pill',
    notMagic1: 'Hypnosis changes your eating behavior and your emotional bond with food; it will not exercise or eat a balanced diet for you. What it really does is remove the ',
    notMagicStrong: 'psychological block', notMagic2: ' that has been getting in the way for years.',
    sessionTitle: 'What happens in a session',
    session1: 'In trance we find the emotional "triggers" of overeating: specific situations, emotions or memories that set off the unwanted behavior. Then we replace the response to them with a healthier, more resourceful one.',
    session2: 'In parallel, we anchor a new self-image: a person who eats well easily and naturally, without force or inner conflict.',
    countTitle: 'How many sessions are needed',
    count: 'Usually 3–6 sessions for a lasting result. After the first one, most clients notice reduced cravings for junk food and a less pronounced "emotional hunger".',
    whoTitle: 'Who hypnosis for weight loss is for',
    who: ['Emotional eating', 'Night hunger', 'Sugar dependence', 'Overeating from stress or boredom', 'Inability to "start eating properly"', 'Relapses after every diet'],
    ctaTitle: 'Ready to change your relationship with food?', ctaBefore: 'Message me the code word', ctaAfter: 'and I will give you a free consultation',
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
      faq={[{ q: t.countTitle, a: t.count }, { q: t.whyTitle, a: t.why }]}
      cta={{ title: t.ctaTitle, text: <CtaText before={t.ctaBefore} locale={locale} after={t.ctaAfter} />, button: CODE_WORD[locale].button }}
    >
      <section className="space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whyTitle}</h2>
          <p>{t.why}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.changeTitle}</h2>
          <div className="space-y-3">
            {t.changes.map((item) => (
              <div key={item.before} className="flex items-center gap-3 p-3 rounded-xl border border-white/8 bg-white/3">
                <div className="flex-1 text-sm text-red-400/80">{item.before}</div>
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="flex-1 text-sm text-green-400/80 text-right">{item.after}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.notMagicTitle}</h2>
          <div className="p-5 rounded-2xl border border-yellow-500/15 bg-yellow-500/5">
            <p className="text-gray-300 text-sm">{t.notMagic1}<strong className="text-white">{t.notMagicStrong}</strong>{t.notMagic2}</p>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.sessionTitle}</h2>
          <p>{t.session1}</p>
          <p className="mt-4">{t.session2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.countTitle}</h2>
          <p>{t.count}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whoTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.who.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-400 p-3 rounded-xl border border-white/8 bg-white/3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceShell>
  );
}
