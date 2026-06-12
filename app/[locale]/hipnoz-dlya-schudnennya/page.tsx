import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Гіпноз для схуднення: наскільки це ефективно? | kolomoitsev.com',
  description: 'Гіпноз для схуднення змінює харчову поведінку на рівні підсвідомості. Реальні результати, механізм роботи і скільки сеансів потрібно.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/hipnoz-dlya-schudnennya',
  },
};

export default function HipnozDlyaSchudnennya() {
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
          <span className="text-gray-400">Гіпноз для схуднення</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          Гіпноз для схуднення:<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            як це дійсно працює
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Дієти не працюють у довгостроковій перспективі, бо не змінюють підсвідомі програми поведінки. Гіпноз для схуднення діє там, де сила волі не справляється.
        </p>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Чому дієти не спрацьовують?</h2>
            <p>
              Людина знає, що треба їсти менше і рухатися більше. Але знання і поведінка — різні речі. Харчова поведінка керується підсвідомим: тривога → їжа, нудьга → їжа, стрес → солодке. Дієти звертаються до свідомості, а проблема — глибше.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що змінює гіпноз?</h2>
            <div className="space-y-3">
              {[
                { before: 'Їжа = заспокоєння', after: 'Інші способи справлятися зі стресом' },
                { before: 'Переїдання «за компанію»', after: 'Відчуття насичення в потрібний момент' },
                { before: 'Тяга до солодкого/смаженого', after: 'Нейтральне або знижене бажання' },
                { before: 'Їжа вночі', after: 'Відсутність нічного голоду' },
              ].map((item) => (
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
            <h2 className="text-white text-2xl font-bold mb-4">Гіпноз — не чарівна пігулка</h2>
            <div className="p-5 rounded-2xl border border-yellow-500/15 bg-yellow-500/5">
              <p className="text-gray-300 text-sm">
                Гіпноз змінює харчову поведінку та емоційний зв'язок з їжею. Але він не прибирає необхідність рухатися і харчуватися збалансовано. Він прибирає <strong className="text-white">психологічний блок</strong>, який заважав вам це робити роками.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що відбувається на сесії?</h2>
            <p>
              У стані трансу ми знаходимо емоційні «тригери» переїдання — конкретні ситуації, емоції або спогади, які запускають небажану поведінку. Потім замінюємо реакцію на них на більш здорову і ресурсну.
            </p>
            <p className="mt-4">
              Паралельно — закріплення нового образу себе: людини, яка легко і природно харчується правильно, без примусу і внутрішнього конфлікту.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Скільки сеансів потрібно?</h2>
            <p>
              Як правило, 3–6 сесій для стійкого результату. Після першої більшість клієнтів помічають зниження тяги до шкідливих продуктів і менш виражений «емоційний голод».
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Кому підходить гіпноз для схуднення?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Емоційне переїдання',
                'Нічний голод',
                'Залежність від солодкого',
                'Переїдання від стресу або нудьги',
                'Неможливість «почати правильно харчуватися»',
                'Зриви після кожної дієти',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400 p-3 rounded-xl border border-white/8 bg-white/3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </section>

        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Готові змінити стосунки з їжею?</h2>
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
