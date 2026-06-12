import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Розкриття творчого потенціалу через гіпноз | kolomoitsev.com',
  description: 'Гіпнотерапія для проявленості себе: як зняти внутрішні блоки, страх оцінки і розкрити творчий потенціал. Робота з самовираженням та ідентичністю.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/rozkryttya-tvorchoho-potentsialu',
  },
};

export default function RozkryttyaTvorchoho() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <div className="site-bg" />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/30 backdrop-blur-md">
        <Link href="/uk" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          На головну
        </Link>
        <a
          href="https://t.me/mykhailo_elmejor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black text-sm font-semibold transition-all"
        >
          <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={14} height={14} />
          Записатися
        </a>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">

        <nav className="text-xs text-gray-600 mb-8">
          <Link href="/uk" className="hover:text-gray-400">Головна</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Розкриття творчого потенціалу</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          Проявленість себе:<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            розкриття творчого потенціалу
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Більшість людей навіть не підозрюють, наскільки вони себе стримують. Не через брак таланту — а через страхи, переконання і заборони, засвоєні ще в дитинстві. Гіпнотерапія знімає ці обмеження на рівні підсвідомості.
        </p>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що таке «проявленість»?</h2>
            <p>
              Проявленість — це здатність виражати себе справжнього: у творчості, роботі, стосунках, публічності. Це коли ваші дії відповідають вашій глибинній природі, а не очікуванням оточення.
            </p>
            <p className="mt-4">
              Більшість людей живуть у стані часткової проявленості: щось говорять, щось ховають, щось навіть від себе не визнають. Це виснажує — бо підтримка «безпечного» образу вимагає постійних ресурсів.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Чому творчий потенціал блокується?</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Страх оцінки та критики',
                  text: 'Підсвідомість пам\'ятає кожен момент, коли вас висміяли, знецінили або відкинули за прояв себе. Вона "захищає" вас від повторення — ціною мовчання.',
                },
                {
                  title: 'Переконання «я недостатньо хороший»',
                  text: 'Синдром самозванця, перфекціонізм, відкладання на «потім, коли буду готовий» — все це форми одного підсвідомого переконання.',
                },
                {
                  title: 'Заборона на успіх і видимість',
                  text: 'Іноді в родині не заохочували виділятися. «Не висовуйся», «хто ти такий», «краще мовчи» — ці послання стають внутрішнім законом.',
                },
                {
                  title: 'Розрив між «хочу» і «роблю»',
                  text: 'Людина знає, чого хоче досягти. Але щоразу щось зупиняє: прокрастинація, самосаботаж, невпевненість. Це не лінощі — це підсвідомий опір.',
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="text-white font-medium text-sm mb-1.5">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Як гіпнотерапія розкриває потенціал?</h2>
            <p>
              У стані трансу підсвідомість стає доступною — і ми знаходимо конкретні моменти, де сформувались блокуючі переконання. Далі — переосмислення цих подій і встановлення нових внутрішніх дозволів.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                { icon: '🔓', title: 'Знімаємо заборони', text: 'Внутрішні «не можна», «не гідний», «не час»' },
                { icon: '🎯', title: 'Вирівнюємо ідентичність', text: 'Хто ти є всередині — починає збігатися з тим, що транслюєш назовні' },
                { icon: '⚡', title: 'Вивільняємо енергію', text: 'Яку витрачали на підтримку «безпечного» образу' },
                { icon: '🌱', title: 'Закріплюємо нове «я можу»', text: 'Нові дозволи і переконання на рівні підсвідомості' },
              ].map((card) => (
                <div key={card.title} className="p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="text-white font-medium text-sm mb-1">{card.title}</div>
                  <div className="text-gray-500 text-sm">{card.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Кому це підходить?</h2>
            <div className="space-y-2">
              {[
                'Митці, музиканти, автори — яким не вдається «вийти» зі своєю творчістю',
                'Підприємці та фрілансери з синдромом самозванця',
                'Люди, які роками «готуються» і не починають',
                'Ті, кому важко говорити про себе, свої досягнення або ціни',
                'Публічні особи з тривогою перед виступами або камерою',
                'Всі, хто відчуває — «всередині є більше, ніж я показую»',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-gray-400 py-1.5">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що змінюється після роботи?</h2>
            <div className="p-6 rounded-2xl border border-green-500/15 bg-green-500/5 space-y-3">
              {[
                'Зникає або різко знижується страх показати свою роботу і бути поміченим',
                'Легше говорити про себе, свої цінності і досягнення — без сорому',
                'Дії стають природними замість болісних',
                'З\'являється відчуття «це моє місце» — замість «хто я такий»',
                'Творчість перестає бути заблокованою і відновлюється потік',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Скільки сеансів потрібно?</h2>
            <p>
              Зазвичай 2–4 сесії: перша — робота з ключовим блоком (страх оцінки або «я недостатньо»), наступні — поглиблення та закріплення нової ідентичності. Багато клієнтів відчувають зсув вже після першої зустрічі.
            </p>
          </div>

        </section>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Готові проявити себе?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Напишіть кодове слово <span className="text-white font-semibold">«Перезапуск»</span> — і я безкоштовно розберу вашу ситуацію на 30-хвилинній консультації
          </p>
          <a
            href="https://t.me/mykhailo_elmejor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all hover:scale-105 text-sm shadow-lg shadow-green-600/30"
          >
            <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={18} height={18} />
            Написати «Перезапуск»
          </a>
          <p className="mt-4 text-xs text-gray-600">Certified Master Hypnotherapist · Михайло Коломийцев · kolomoitsev.com</p>
        </div>

      </main>
    </div>
  );
}
