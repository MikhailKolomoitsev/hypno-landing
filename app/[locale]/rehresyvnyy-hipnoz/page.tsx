import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, CtaText, serviceMetadata } from '../components/ServiceShell';
import { LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'rehresyvnyy-hipnoz';

const content = {
  uk: {
    metaTitle: 'Регресивний гіпноз: що це і як працює | kolomoitsev.com',
    metaDescription: 'Регресивний гіпноз — подорож у минуле для пошуку причин нинішніх проблем. Як відбувається сесія, кому підходить, і що можна опрацювати.',
    breadcrumb: 'Регресивний гіпноз',
    title1: 'Регресивний гіпноз:', title2: 'що це і як працює',
    lead: 'Регресивний гіпноз — техніка, яка дозволяє «повернутися» у минулі спогади і переосмислити події, що лежать в основі нинішніх проблем.',
    whatTitle: 'Що таке регресивний гіпноз?',
    what1: 'Зазвичай ці спогади просто недоступні свідомому розуму — а в трансі підсвідомість відкриває до них доступ. Так ми знаходимо і опрацьовуємо первинну подію, той самий «корінь» поточної проблеми.',
    what2: 'Важливо розуміти одну річ: минуле ми не «переписуємо». Змінюється спосіб, яким підсвідомість інтерпретує ту подію — і саме це знімає емоційний заряд, який вона несла, можливо, ще з дитинства.',
    helpTitle: 'З чим допомагає регресія?',
    help: ['Незрозумілі страхи та фобії без видимої причини', 'Повторювані сценарії у стосунках', 'Дитячі травми та їх наслідки', 'Відчуття провини або сорому без пояснення', 'Хронічна тривога невідомого походження', 'Труднощі з прийняттям рішень', 'Психосоматичні прояви', 'Глибинна робота над собою'],
    howTitle: 'Як проходить регресивна сесія?',
    steps: [
      { title: 'Вхід у транс', text: 'Через техніки глибокого розслаблення і спрямованої уваги — 10–15 хвилин.' },
      { title: 'Пошук події', text: 'Підсвідомість сама веде до потрібного спогаду. Не завжди це те, чого очікує клієнт — іноді відкривається несподіваний момент.' },
      { title: 'Опрацювання', text: 'Переосмислення події з позиції дорослої людини. Зняття емоційного заряду. Інтеграція нового розуміння.' },
      { title: 'Вихід і обговорення', text: 'М\'який вихід з трансу, обмін враженнями. Іноді потрібен час, щоб «осісти» досвіду.' },
    ],
    rememberTitle: 'Чи обов\'язково пам\'ятати травму наперед?',
    remember1: 'Ні. Часто клієнти самі не знають, що лежить в основі їхньої проблеми. Це і є мета регресії — знайти те, що підсвідомість приховує від свідомого розуму.',
    remember2: 'Якщо подія «відкрилась» — це не означає, що вам доведеться її «переживати» знову в усій силі. Терапевт контролює рівень емоційного залучення і підтримує безпечний простір.',
    countTitle: 'Скільки потрібно сесій?',
    count: 'Регресивний гіпноз — це не курс, а окрема техніка. Зазвичай 1–3 сесії для роботи з конкретним запитом. Кожна сесія завершена сама по собі.',
    ctaTitle: 'Хочете спробувати регресивний гіпноз?', ctaBefore: 'Напишіть кодове слово', ctaAfter: '— і я безкоштовно розберу вашу ситуацію',
  },
  ru: {
    metaTitle: 'Регрессивный гипноз: что это и как работает | kolomoitsev.com',
    metaDescription: 'Регрессивный гипноз — путешествие в прошлое для поиска причин нынешних проблем. Как проходит сессия, кому подходит, и что можно проработать.',
    breadcrumb: 'Регрессивный гипноз',
    title1: 'Регрессивный гипноз:', title2: 'что это и как работает',
    lead: 'Регрессивный гипноз — техника, которая позволяет «вернуться» в прошлые воспоминания и переосмыслить события, лежащие в основе нынешних проблем.',
    whatTitle: 'Что такое регрессивный гипноз?',
    what1: 'Обычно эти воспоминания просто недоступны сознательному уму — а в трансе подсознание открывает к ним доступ. Так мы находим и прорабатываем первичное событие, тот самый «корень» текущей проблемы.',
    what2: 'Важно понимать одну вещь: прошлое мы не «переписываем». Меняется способ, которым подсознание интерпретирует то событие — и именно это снимает эмоциональный заряд, который оно несло, возможно, ещё с детства.',
    helpTitle: 'С чем помогает регрессия?',
    help: ['Непонятные страхи и фобии без видимой причины', 'Повторяющиеся сценарии в отношениях', 'Детские травмы и их последствия', 'Чувство вины или стыда без объяснения', 'Хроническая тревога неизвестного происхождения', 'Трудности с принятием решений', 'Психосоматические проявления', 'Глубинная работа над собой'],
    howTitle: 'Как проходит регрессивная сессия?',
    steps: [
      { title: 'Вход в транс', text: 'Через техники глубокого расслабления и направленного внимания — 10–15 минут.' },
      { title: 'Поиск события', text: 'Подсознание само ведёт к нужному воспоминанию. Не всегда это то, чего ожидает клиент — иногда открывается неожиданный момент.' },
      { title: 'Проработка', text: 'Переосмысление события с позиции взрослого человека. Снятие эмоционального заряда. Интеграция нового понимания.' },
      { title: 'Выход и обсуждение', text: 'Мягкий выход из транса, обмен впечатлениями. Иногда нужно время, чтобы опыт «осел».' },
    ],
    rememberTitle: 'Обязательно ли помнить травму заранее?',
    remember1: 'Нет. Часто клиенты сами не знают, что лежит в основе их проблемы. Это и есть цель регрессии — найти то, что подсознание скрывает от сознательного ума.',
    remember2: 'Если событие «открылось» — это не значит, что вам придётся «переживать» его снова во всей силе. Терапевт контролирует уровень эмоциональной вовлечённости и поддерживает безопасное пространство.',
    countTitle: 'Сколько нужно сессий?',
    count: 'Регрессивный гипноз — это не курс, а отдельная техника. Обычно 1–3 сессии для работы с конкретным запросом. Каждая сессия завершена сама по себе.',
    ctaTitle: 'Хотите попробовать регрессивный гипноз?', ctaBefore: 'Напишите кодовое слово', ctaAfter: '— и я бесплатно разберу вашу ситуацию',
  },
  en: {
    metaTitle: 'Regression Hypnosis: What It Is and How It Works | kolomoitsev.com',
    metaDescription: 'Regression hypnosis is a journey into the past to find the causes of present problems. How a session goes, who it is for, and what can be worked through.',
    breadcrumb: 'Regression hypnosis',
    title1: 'Regression Hypnosis:', title2: 'what it is and how it works',
    lead: 'Regression hypnosis is a technique that lets you "return" to past memories and reframe the events that lie at the root of present problems.',
    whatTitle: 'What is regression hypnosis?',
    what1: 'Usually these memories are simply unavailable to the conscious mind; in trance the subconscious opens access to them. This is how we find and work through the original event, the "root" of the current problem.',
    what2: 'One thing is important to understand: we do not "rewrite" the past. What changes is how the subconscious interprets that event, and that is exactly what releases the emotional charge it has carried, perhaps since childhood.',
    helpTitle: 'What regression helps with',
    help: ['Unexplained fears and phobias with no visible cause', 'Repeating patterns in relationships', 'Childhood trauma and its consequences', 'Guilt or shame with no explanation', 'Chronic anxiety of unknown origin', 'Difficulty making decisions', 'Psychosomatic symptoms', 'Deep personal work'],
    howTitle: 'How a regression session goes',
    steps: [
      { title: 'Entering trance', text: 'Through deep relaxation and directed attention techniques, 10–15 minutes.' },
      { title: 'Finding the event', text: 'The subconscious leads to the right memory on its own. It is not always what the client expects; sometimes an unexpected moment opens up.' },
      { title: 'Working through', text: 'Reframing the event from an adult perspective. Releasing the emotional charge. Integrating the new understanding.' },
      { title: 'Emergence and discussion', text: 'A gentle return from trance, sharing impressions. Sometimes the experience needs time to settle.' },
    ],
    rememberTitle: 'Do I need to remember the trauma in advance?',
    remember1: 'No. Clients often do not know themselves what lies at the root of their problem. That is the point of regression: to find what the subconscious hides from the conscious mind.',
    remember2: 'If an event "opens up", it does not mean you will have to relive it at full intensity. The therapist controls the level of emotional involvement and maintains a safe space.',
    countTitle: 'How many sessions are needed',
    count: 'Regression hypnosis is not a course but a standalone technique. Usually 1–3 sessions for a specific request. Each session is complete in itself.',
    ctaTitle: 'Want to try regression hypnosis?', ctaBefore: 'Message me the code word', ctaAfter: 'and I will look at your situation for free',
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
      faq={[{ q: t.rememberTitle, a: `${t.remember1} ${t.remember2}` }, { q: t.countTitle, a: t.count }]}
      cta={{ title: t.ctaTitle, text: <CtaText before={t.ctaBefore} locale={locale} after={t.ctaAfter} />, button: CODE_WORD[locale].button }}
    >
      <section className="space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whatTitle}</h2>
          <p>{t.what1}</p>
          <p className="mt-4">{t.what2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.helpTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.help.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-400 p-3 rounded-xl border border-white/8 bg-white/3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-1.5" />{item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.howTitle}</h2>
          <div className="space-y-4">
            {t.steps.map((item, i) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">{i + 1}</span>
                <div>
                  <div className="text-white font-medium mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.rememberTitle}</h2>
          <p>{t.remember1}</p>
          <p className="mt-4">{t.remember2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.countTitle}</h2>
          <p>{t.count}</p>
        </div>
      </section>
    </ServiceShell>
  );
}
