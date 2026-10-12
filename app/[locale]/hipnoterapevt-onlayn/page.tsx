import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, CtaText, serviceMetadata } from '../components/ServiceShell';
import { LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'hipnoterapevt-onlayn';

const content = {
  uk: {
    metaTitle: 'Гіпнотерапевт онлайн — Михайло Коломийцев | kolomoitsev.com',
    metaDescription: 'Гіпнотерапевт онлайн: сесії через Zoom без виїзду. 100+ клієнтів з 12 країн. Той самий результат, що й очно. Запис у Telegram.',
    breadcrumb: 'Гіпнотерапевт онлайн',
    title1: 'Гіпнотерапевт онлайн —', title2: 'сесії без виїзду',
    lead: 'Сесія по відеозв\'язку — це та ж сама гіпнотерапія, тільки без потреби кудись їхати. Результат не залежить від того, де ви живете: великому місті чи маленькому містечку з не дуже швидким інтернетом.',
    stats: [{ value: '100+', label: 'онлайн-клієнтів' }, { value: '12', label: 'країн світу' }, { value: '100%', label: 'гарантія результату' }],
    whyTitle: 'Чому онлайн — це так само ефективно?',
    why1: 'Гіпнотерапія працює через голос і спрямовану увагу, а не через фізичний дотик чи присутність в одній кімнаті. Тому якісні навушники й стабільний відеозв\'язок дають практично той самий ефект, що й очна зустріч — за роки роботи онлайн я не помітив суттєвої різниці в результатах.',
    why2: 'Головна умова з мого боку проста: тихе місце на 60–90 хвилин, де вас точно ніхто не відволікатиме.',
    howTitle: 'Як проходить онлайн-сесія?',
    steps: [
      { title: 'Первинна консультація (безкоштовно)', text: 'Обговорюємо ваш запит, я пояснюю метод і відповідаю на запитання. 20–30 хвилин у Telegram або Zoom.' },
      { title: 'Підготовка', text: 'Ви знаходите тихе зручне місце, надягаєте навушники та підключаєтесь у призначений час.' },
      { title: 'Сесія', text: 'Повноцінна гіпнотерапевтична сесія через Zoom тривалістю 60–90 хвилин. Ви в повній свідомості та контролі.' },
      { title: 'Інтеграція', text: 'Після сесії обговорюємо досвід і закріплюємо результат. Я на зв\'язку між зустрічами.' },
    ],
    helpTitle: 'З чим допоможе гіпнотерапевт онлайн?',
    help: ['Тривога та панічні атаки', 'Страхи та фобії', 'Прокрастинація та блоки', 'Куріння та залежності', 'Зайва вага та харчові звички', 'Психосоматика', 'Низька самооцінка', 'Регресивний гіпноз'],
    needTitle: 'Що потрібно для онлайн-сесії?',
    need: ['Ноутбук, планшет або телефон з камерою', 'Навушники (бажано)', 'Тихе місце без зайвих людей', 'Зручне крісло або ліжко — де ви можете розслабитися', 'Zoom або Telegram (є у телефоні)'],
    ctaTitle: 'Готові спробувати?', ctaBefore: 'Напишіть кодове слово', ctaAfter: '— і я проведу безкоштовну 30-хвилинну консультацію',
    note: 'Гіпнотерапевт онлайн · Михайло Коломийцев · kolomoitsev.com',
  },
  ru: {
    metaTitle: 'Гипнотерапевт онлайн — Михаил Коломойцев | kolomoitsev.com',
    metaDescription: 'Гипнотерапевт онлайн: сессии через Zoom без выезда. 100+ клиентов из 12 стран. Тот же результат, что и очно. Запись в Telegram.',
    breadcrumb: 'Гипнотерапевт онлайн',
    title1: 'Гипнотерапевт онлайн —', title2: 'сессии без выезда',
    lead: 'Сессия по видеосвязи — это та же гипнотерапия, только без необходимости куда-то ехать. Результат не зависит от того, где вы живёте: в большом городе или маленьком городке с не очень быстрым интернетом.',
    stats: [{ value: '100+', label: 'онлайн-клиентов' }, { value: '12', label: 'стран мира' }, { value: '100%', label: 'гарантия результата' }],
    whyTitle: 'Почему онлайн — это так же эффективно?',
    why1: 'Гипнотерапия работает через голос и направленное внимание, а не через физическое прикосновение или присутствие в одной комнате. Поэтому качественные наушники и стабильная видеосвязь дают практически тот же эффект, что и очная встреча — за годы работы онлайн я не заметил существенной разницы в результатах.',
    why2: 'Главное условие с моей стороны простое: тихое место на 60–90 минут, где вас точно никто не отвлечёт.',
    howTitle: 'Как проходит онлайн-сессия?',
    steps: [
      { title: 'Первичная консультация (бесплатно)', text: 'Обсуждаем ваш запрос, я объясняю метод и отвечаю на вопросы. 20–30 минут в Telegram или Zoom.' },
      { title: 'Подготовка', text: 'Вы находите тихое удобное место, надеваете наушники и подключаетесь в назначенное время.' },
      { title: 'Сессия', text: 'Полноценная гипнотерапевтическая сессия через Zoom длительностью 60–90 минут. Вы в полном сознании и контроле.' },
      { title: 'Интеграция', text: 'После сессии обсуждаем опыт и закрепляем результат. Я на связи между встречами.' },
    ],
    helpTitle: 'С чем поможет гипнотерапевт онлайн?',
    help: ['Тревога и панические атаки', 'Страхи и фобии', 'Прокрастинация и блоки', 'Курение и зависимости', 'Лишний вес и пищевые привычки', 'Психосоматика', 'Низкая самооценка', 'Регрессивный гипноз'],
    needTitle: 'Что нужно для онлайн-сессии?',
    need: ['Ноутбук, планшет или телефон с камерой', 'Наушники (желательно)', 'Тихое место без посторонних', 'Удобное кресло или кровать — где вы можете расслабиться', 'Zoom или Telegram (есть в телефоне)'],
    ctaTitle: 'Готовы попробовать?', ctaBefore: 'Напишите кодовое слово', ctaAfter: '— и я проведу бесплатную 30-минутную консультацию',
    note: 'Гипнотерапевт онлайн · Михаил Коломойцев · kolomoitsev.com',
  },
  en: {
    metaTitle: 'Online Hypnotherapist — Mykhailo Kolomoitsev | kolomoitsev.com',
    metaDescription: 'Online hypnotherapist: Zoom sessions from anywhere. 100+ clients in 12 countries. The same results as in person. Book via Telegram.',
    breadcrumb: 'Online hypnotherapist',
    title1: 'Online Hypnotherapist —', title2: 'sessions without travel',
    lead: 'A video session is the same hypnotherapy, just without the need to go anywhere. The result does not depend on where you live: a big city or a small town with so-so internet.',
    stats: [{ value: '100+', label: 'online clients' }, { value: '12', label: 'countries' }, { value: '100%', label: 'results guarantee' }],
    whyTitle: 'Why online is just as effective',
    why1: 'Hypnotherapy works through voice and directed attention, not through physical touch or being in the same room. So good headphones and a stable video connection give practically the same effect as meeting in person; over years of working online I have not seen a meaningful difference in results.',
    why2: 'My one condition is simple: a quiet place for 60–90 minutes where nobody will interrupt you.',
    howTitle: 'How an online session works',
    steps: [
      { title: 'Initial consultation (free)', text: 'We discuss your request, I explain the method and answer your questions. 20–30 minutes on Telegram or Zoom.' },
      { title: 'Preparation', text: 'You find a quiet, comfortable spot, put on headphones and join at the agreed time.' },
      { title: 'Session', text: 'A full hypnotherapy session over Zoom, 60–90 minutes. You remain fully aware and in control.' },
      { title: 'Integration', text: 'After the session we discuss the experience and anchor the result. I stay in touch between meetings.' },
    ],
    helpTitle: 'What an online hypnotherapist can help with',
    help: ['Anxiety and panic attacks', 'Fears and phobias', 'Procrastination and blocks', 'Smoking and addictions', 'Excess weight and eating habits', 'Psychosomatic symptoms', 'Low self-esteem', 'Regression hypnosis'],
    needTitle: 'What you need for an online session',
    need: ['A laptop, tablet or phone with a camera', 'Headphones (recommended)', 'A quiet place with no one around', 'A comfortable chair or bed where you can relax', 'Zoom or Telegram (already on your phone)'],
    ctaTitle: 'Ready to try?', ctaBefore: 'Message me the code word', ctaAfter: 'and I will give you a free 30-minute consultation',
    note: 'Online hypnotherapist · Mykhailo Kolomoitsev · kolomoitsev.com',
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
      cta={{ title: t.ctaTitle, text: <CtaText before={t.ctaBefore} locale={locale} after={t.ctaAfter} />, button: CODE_WORD[locale].button, note: t.note }}
    >
      <div className="grid grid-cols-3 gap-4 mb-12">
        {t.stats.map((s) => (
          <div key={s.label} className="text-center p-4 rounded-2xl border border-white/8 bg-white/3">
            <div className="text-2xl font-bold text-green-400 mb-1">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whyTitle}</h2>
          <p>{t.why1}</p>
          <p className="mt-4">{t.why2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.howTitle}</h2>
          <div className="space-y-4">
            {t.steps.map((item, i) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-sm">{i + 1}</span>
                <div>
                  <div className="text-white font-medium mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.helpTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.help.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.needTitle}</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            {t.need.map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </ServiceShell>
  );
}
