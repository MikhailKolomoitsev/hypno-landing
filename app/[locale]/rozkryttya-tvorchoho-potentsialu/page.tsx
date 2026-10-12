import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, CtaText, serviceMetadata } from '../components/ServiceShell';
import { LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'rozkryttya-tvorchoho-potentsialu';
const ICONS = ['🔓', '🎯', '⚡', '🌱'];

const content = {
  uk: {
    metaTitle: 'Розкриття творчого потенціалу через гіпноз | kolomoitsev.com',
    metaDescription: 'Гіпнотерапія для проявленості себе: як зняти внутрішні блоки, страх оцінки і розкрити творчий потенціал. Робота з самовираженням та ідентичністю.',
    breadcrumb: 'Розкриття творчого потенціалу',
    title1: 'Проявленість себе:', title2: 'розкриття творчого потенціалу',
    lead: 'Більшість людей навіть не підозрюють, наскільки вони себе стримують. Не через брак таланту — а через страхи, переконання і заборони, засвоєні ще в дитинстві. Гіпнотерапія знімає ці обмеження на рівні підсвідомості.',
    whatTitle: 'Що таке «проявленість»?',
    what1: 'Проявленість — це здатність виражати себе справжнього: у творчості, роботі, стосунках, публічності. Це коли ваші дії відповідають вашій глибинній природі, а не очікуванням оточення.',
    what2: 'Більшість людей живуть у стані часткової проявленості: щось говорять, щось ховають, щось навіть від себе не визнають. Це виснажує — бо підтримка «безпечного» образу вимагає постійних ресурсів.',
    blocksTitle: 'Чому творчий потенціал блокується?',
    blocks: [
      { title: 'Страх оцінки та критики', text: 'Підсвідомість пам\'ятає кожен момент, коли вас висміяли, знецінили або відкинули за прояв себе. Вона «захищає» вас від повторення — ціною мовчання.' },
      { title: 'Переконання «я недостатньо хороший»', text: 'Синдром самозванця, перфекціонізм, відкладання на «потім, коли буду готовий» — все це форми одного підсвідомого переконання.' },
      { title: 'Заборона на успіх і видимість', text: 'Іноді в родині не заохочували виділятися. «Не висовуйся», «хто ти такий», «краще мовчи» — ці послання стають внутрішнім законом.' },
      { title: 'Розрив між «хочу» і «роблю»', text: 'Людина знає, чого хоче досягти. Але щоразу щось зупиняє: прокрастинація, самосаботаж, невпевненість. Це не лінощі — це підсвідомий опір.' },
    ],
    howTitle: 'Як гіпнотерапія розкриває потенціал?',
    how: 'У стані трансу підсвідомість стає доступною — і ми знаходимо конкретні моменти, де сформувались блокуючі переконання. Далі — переосмислення цих подій і встановлення нових внутрішніх дозволів.',
    cards: [
      { title: 'Знімаємо заборони', text: 'Внутрішні «не можна», «не гідний», «не час»' },
      { title: 'Вирівнюємо ідентичність', text: 'Хто ти є всередині — починає збігатися з тим, що транслюєш назовні' },
      { title: 'Вивільняємо енергію', text: 'Яку витрачали на підтримку «безпечного» образу' },
      { title: 'Закріплюємо нове «я можу»', text: 'Нові дозволи і переконання на рівні підсвідомості' },
    ],
    whoTitle: 'Кому це підходить?',
    who: ['Митці, музиканти, автори — яким не вдається «вийти» зі своєю творчістю', 'Підприємці та фрілансери з синдромом самозванця', 'Люди, які роками «готуються» і не починають', 'Ті, кому важко говорити про себе, свої досягнення або ціни', 'Публічні особи з тривогою перед виступами або камерою', 'Всі, хто відчуває — «всередині є більше, ніж я показую»'],
    afterTitle: 'Що змінюється після роботи?',
    after: ['Зникає або різко знижується страх показати свою роботу і бути поміченим', 'Легше говорити про себе, свої цінності і досягнення — без сорому', 'Дії стають природними замість болісних', 'З\'являється відчуття «це моє місце» — замість «хто я такий»', 'Творчість перестає бути заблокованою і відновлюється потік'],
    countTitle: 'Скільки сеансів потрібно?',
    count: 'Зазвичай 2–4 сесії: перша — робота з ключовим блоком (страх оцінки або «я недостатньо»), наступні — поглиблення та закріплення нової ідентичності. Багато клієнтів відчувають зсув вже після першої зустрічі.',
    ctaTitle: 'Готові проявити себе?', ctaBefore: 'Напишіть кодове слово', ctaAfter: '— і я безкоштовно розберу вашу ситуацію на 30-хвилинній консультації',
    note: 'Certified Master Hypnotherapist · Михайло Коломийцев · kolomoitsev.com',
  },
  ru: {
    metaTitle: 'Раскрытие творческого потенциала через гипноз | kolomoitsev.com',
    metaDescription: 'Гипнотерапия для проявленности себя: как снять внутренние блоки, страх оценки и раскрыть творческий потенциал. Работа с самовыражением и идентичностью.',
    breadcrumb: 'Раскрытие творческого потенциала',
    title1: 'Проявленность себя:', title2: 'раскрытие творческого потенциала',
    lead: 'Большинство людей даже не подозревают, насколько они себя сдерживают. Не из-за нехватки таланта — а из-за страхов, убеждений и запретов, усвоенных ещё в детстве. Гипнотерапия снимает эти ограничения на уровне подсознания.',
    whatTitle: 'Что такое «проявленность»?',
    what1: 'Проявленность — это способность выражать себя настоящего: в творчестве, работе, отношениях, публичности. Это когда ваши действия соответствуют вашей глубинной природе, а не ожиданиям окружения.',
    what2: 'Большинство людей живут в состоянии частичной проявленности: что-то говорят, что-то прячут, что-то даже себе не признают. Это истощает — потому что поддержание «безопасного» образа требует постоянных ресурсов.',
    blocksTitle: 'Почему творческий потенциал блокируется?',
    blocks: [
      { title: 'Страх оценки и критики', text: 'Подсознание помнит каждый момент, когда вас высмеяли, обесценили или отвергли за проявление себя. Оно «защищает» вас от повторения — ценой молчания.' },
      { title: 'Убеждение «я недостаточно хорош»', text: 'Синдром самозванца, перфекционизм, откладывание на «потом, когда буду готов» — всё это формы одного подсознательного убеждения.' },
      { title: 'Запрет на успех и видимость', text: 'Иногда в семье не поощряли выделяться. «Не высовывайся», «кто ты такой», «лучше молчи» — эти послания становятся внутренним законом.' },
      { title: 'Разрыв между «хочу» и «делаю»', text: 'Человек знает, чего хочет достичь. Но каждый раз что-то останавливает: прокрастинация, самосаботаж, неуверенность. Это не лень — это подсознательное сопротивление.' },
    ],
    howTitle: 'Как гипнотерапия раскрывает потенциал?',
    how: 'В состоянии транса подсознание становится доступным — и мы находим конкретные моменты, где сформировались блокирующие убеждения. Дальше — переосмысление этих событий и установление новых внутренних разрешений.',
    cards: [
      { title: 'Снимаем запреты', text: 'Внутренние «нельзя», «не достоин», «не время»' },
      { title: 'Выравниваем идентичность', text: 'Кто ты есть внутри — начинает совпадать с тем, что транслируешь наружу' },
      { title: 'Высвобождаем энергию', text: 'Которую тратили на поддержание «безопасного» образа' },
      { title: 'Закрепляем новое «я могу»', text: 'Новые разрешения и убеждения на уровне подсознания' },
    ],
    whoTitle: 'Кому это подходит?',
    who: ['Художники, музыканты, авторы — которым не удаётся «выйти» со своим творчеством', 'Предприниматели и фрилансеры с синдромом самозванца', 'Люди, которые годами «готовятся» и не начинают', 'Те, кому трудно говорить о себе, своих достижениях или ценах', 'Публичные люди с тревогой перед выступлениями или камерой', 'Все, кто чувствует — «внутри есть больше, чем я показываю»'],
    afterTitle: 'Что меняется после работы?',
    after: ['Исчезает или резко снижается страх показать свою работу и быть замеченным', 'Легче говорить о себе, своих ценностях и достижениях — без стыда', 'Действия становятся естественными вместо мучительных', 'Появляется ощущение «это моё место» — вместо «кто я такой»', 'Творчество перестаёт быть заблокированным и восстанавливается поток'],
    countTitle: 'Сколько сеансов нужно?',
    count: 'Обычно 2–4 сессии: первая — работа с ключевым блоком (страх оценки или «я недостаточно»), следующие — углубление и закрепление новой идентичности. Многие клиенты чувствуют сдвиг уже после первой встречи.',
    ctaTitle: 'Готовы проявить себя?', ctaBefore: 'Напишите кодовое слово', ctaAfter: '— и я бесплатно разберу вашу ситуацию на 30-минутной консультации',
    note: 'Certified Master Hypnotherapist · Михаил Коломойцев · kolomoitsev.com',
  },
  en: {
    metaTitle: 'Unlocking Creative Potential Through Hypnosis | kolomoitsev.com',
    metaDescription: 'Hypnotherapy for self-expression: how to remove inner blocks and fear of judgment and unlock your creative potential. Work with identity and visibility.',
    breadcrumb: 'Unlocking creative potential',
    title1: 'Showing Up as Yourself:', title2: 'unlocking creative potential',
    lead: 'Most people do not even suspect how much they hold themselves back. Not for lack of talent, but because of fears, beliefs and prohibitions absorbed in childhood. Hypnotherapy removes these limits at the subconscious level.',
    whatTitle: 'What does "showing up" mean?',
    what1: 'Showing up is the ability to express your real self: in creative work, your job, relationships, in public. It is when your actions match your deeper nature rather than other people\'s expectations.',
    what2: 'Most people live in a state of partial expression: they say some things, hide others, and do not admit some even to themselves. It is exhausting, because maintaining a "safe" image takes constant energy.',
    blocksTitle: 'Why creative potential gets blocked',
    blocks: [
      { title: 'Fear of judgment and criticism', text: 'The subconscious remembers every moment you were mocked, dismissed or rejected for expressing yourself. It "protects" you from a repeat, at the cost of silence.' },
      { title: 'The belief "I am not good enough"', text: 'Impostor syndrome, perfectionism, putting things off "until I am ready": all forms of the same subconscious belief.' },
      { title: 'A ban on success and visibility', text: 'Sometimes standing out was not encouraged at home. "Don\'t stick your neck out", "who do you think you are", "better keep quiet": these messages become inner law.' },
      { title: 'The gap between "I want" and "I do"', text: 'A person knows what they want to achieve. But every time something stops them: procrastination, self-sabotage, doubt. This is not laziness; it is subconscious resistance.' },
    ],
    howTitle: 'How hypnotherapy unlocks potential',
    how: 'In trance the subconscious becomes accessible, and we find the specific moments where blocking beliefs were formed. Then we reframe those events and install new inner permissions.',
    cards: [
      { title: 'Lifting the bans', text: 'The inner "not allowed", "not worthy", "not the right time"' },
      { title: 'Aligning identity', text: 'Who you are inside starts to match what you show outside' },
      { title: 'Freeing energy', text: 'That was spent maintaining a "safe" image' },
      { title: 'Anchoring a new "I can"', text: 'New permissions and beliefs at the subconscious level' },
    ],
    whoTitle: 'Who this is for',
    who: ['Artists, musicians, writers who cannot "come out" with their work', 'Entrepreneurs and freelancers with impostor syndrome', 'People who have been "preparing" for years and never start', 'Those who find it hard to talk about themselves, their achievements or their prices', 'Public figures with anxiety before speaking or on camera', 'Anyone who feels "there is more inside me than I show"'],
    afterTitle: 'What changes after the work',
    after: ['The fear of showing your work and being noticed disappears or drops sharply', 'It is easier to talk about yourself, your values and achievements without shame', 'Action becomes natural instead of painful', 'A sense of "this is my place" replaces "who am I to..."', 'Creativity is no longer blocked and the flow returns'],
    countTitle: 'How many sessions are needed',
    count: 'Usually 2–4 sessions: the first works on the key block (fear of judgment or "I am not enough"), the next ones deepen and anchor the new identity. Many clients feel a shift after the very first meeting.',
    ctaTitle: 'Ready to show up as yourself?', ctaBefore: 'Message me the code word', ctaAfter: 'and I will look at your situation in a free 30-minute consultation',
    note: 'Certified Master Hypnotherapist · Mykhailo Kolomoitsev · kolomoitsev.com',
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
      faq={[{ q: t.countTitle, a: t.count }]}
      cta={{ title: t.ctaTitle, text: <CtaText before={t.ctaBefore} locale={locale} after={t.ctaAfter} />, button: CODE_WORD[locale].button, note: t.note }}
    >
      <section className="space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whatTitle}</h2>
          <p>{t.what1}</p>
          <p className="mt-4">{t.what2}</p>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.blocksTitle}</h2>
          <div className="space-y-3">
            {t.blocks.map((item) => (
              <div key={item.title} className="p-4 rounded-xl border border-white/8 bg-white/3">
                <div className="text-white font-medium text-sm mb-1.5">{item.title}</div>
                <div className="text-gray-500 text-sm">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.howTitle}</h2>
          <p>{t.how}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {t.cards.map((card, i) => (
              <div key={card.title} className="p-4 rounded-xl border border-white/8 bg-white/3">
                <div className="text-2xl mb-2">{ICONS[i]}</div>
                <div className="text-white font-medium text-sm mb-1">{card.title}</div>
                <div className="text-gray-500 text-sm">{card.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.whoTitle}</h2>
          <div className="space-y-2">
            {t.who.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-gray-400 py-1.5">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>{item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.afterTitle}</h2>
          <div className="p-6 rounded-2xl border border-green-500/15 bg-green-500/5 space-y-3">
            {t.after.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>{item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{t.countTitle}</h2>
          <p>{t.count}</p>
        </div>
      </section>
    </ServiceShell>
  );
}
