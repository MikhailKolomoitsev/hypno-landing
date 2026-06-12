import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Гіпноз від куріння: кинути палити за 1–3 сесії | kolomoitsev.com',
  description: 'Гіпноз допомагає кинути палити назавжди — без ломки і замінників. Як це працює, скільки сеансів потрібно, і чому це ефективніше від пластирів.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/hipnoz-kynuty-palyty',
  },
};

export default function HipnozKynutyPalyty() {
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
          <span className="text-gray-400">Гіпноз — кинути палити</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          Гіпноз від куріння:<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            кинути палити за 1–3 сесії
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Куріння — це не тільки фізична залежність від нікотину. Це звичка і психологічний ритуал. Гіпноз працює з психологічною частиною — і саме тому він дає те, чого не дають пластирі та жуйки.
        </p>

        {/* Key stat */}
        <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5 mb-10 text-center">
          <div className="text-4xl font-bold text-green-400 mb-1">77%</div>
          <div className="text-gray-400 text-sm">ефективність гіпнозу при лікуванні нікотинової залежності<br /><span className="text-gray-600 text-xs">(за даними дослідження American Health Magazine)</span></div>
        </div>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Чому пластирі і жуйки не допомагають?</h2>
            <p>
              Нікотинозамінна терапія справляється з фізичним потягом. Але куріння — це ще й:
            </p>
            <ul className="mt-3 space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2"><span className="text-gray-600 mt-0.5">→</span> Ритуал: кава + сигарета, перерва + сигарета</li>
              <li className="flex items-start gap-2"><span className="text-gray-600 mt-0.5">→</span> Спосіб справлятися зі стресом</li>
              <li className="flex items-start gap-2"><span className="text-gray-600 mt-0.5">→</span> Соціальна звичка (всі палять — і я)</li>
              <li className="flex items-start gap-2"><span className="text-gray-600 mt-0.5">→</span> Підсвідоме переконання: «сигарета мене заспокоює»</li>
            </ul>
            <p className="mt-4">
              Гіпноз розриває саме ці зв'язки — на рівні підсвідомості, де вони і живуть.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Як відбувається сесія від куріння?</h2>
            <div className="space-y-3">
              {[
                { title: 'Вхідна розмова', text: 'З\'ясовуємо ваші тригери, скільки палите, що пробували раніше. 20 хвилин.' },
                { title: 'Введення у транс', text: 'Глибоке розслаблення з фокусом. Ви у свідомості та контролі.' },
                { title: 'Розрив зв\'язків', text: 'Прибираємо асоціації: стрес → сигарета, ранок → сигарета. Замінюємо реакції.' },
                { title: 'Нова ідентичність', text: 'Закріплюємо образ себе як людини, яка не палить — легко і природно.' },
                { title: 'Вихід і закріплення', text: 'Даємо рекомендації на перший тиждень.' },
              ].map((item) => (
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
            <h2 className="text-white text-2xl font-bold mb-4">Скільки сеансів потрібно?</h2>
            <p>
              Більшість клієнтів кидають палити після <strong className="text-white">1–2 сесій</strong>. Для тих, хто курить 20+ років або має сильний стресовий тригер — може знадобитися третя.
            </p>
            <p className="mt-4">
              Після першої сесії тяга до сигарет значно знижується або зникає. Зазвичай клієнти описують це як: «просто не хочу більше».
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Чи є «ломка»?</h2>
            <p>
              Фізична залежність від нікотину проходить за 3–5 днів — і вона набагато слабша, ніж здається. Більшість «ломки» — це психологічний компонент. Саме з ним і працює гіпноз.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Важлива умова</h2>
            <div className="p-5 rounded-2xl border border-yellow-500/15 bg-yellow-500/5">
              <p className="text-gray-300 text-sm">
                Гіпноз не діє проти волі людини. Ви маєте <strong className="text-white">дійсно хотіти кинути палити</strong> — не «спробувати», не «подивитись що буде». Якщо є реальне бажання — результат майже гарантований.
              </p>
            </div>
          </div>

        </section>

        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Готові кинути палити?</h2>
          <p className="text-gray-400 text-sm mb-6">Напишіть кодове слово <span className="text-white font-semibold">«Перезапуск»</span> — і я безкоштовно проконсультую</p>
          <a
            href="https://t.me/mykhailo_elmejor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all hover:scale-105 text-sm shadow-lg shadow-green-600/30"
          >
            <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={18} height={18} />
            Написати «Перезапуск»
          </a>
          <p className="mt-4 text-xs text-gray-600">Certified Master Hypnotherapist · Михайло Коломийцев</p>
        </div>

      </main>
    </div>
  );
}
