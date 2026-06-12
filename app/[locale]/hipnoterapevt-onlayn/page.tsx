import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Гіпнотерапевт онлайн — Михайло Коломийцев | kolomoitsev.com',
  description: 'Гіпнотерапевт онлайн: сесії через Zoom без виїзду. 100+ клієнтів з 12 країн. Той самий результат, що й очно. Запис у Telegram.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/hipnoterapevt-onlayn',
  },
};

export default function HipnoterapevtOnlayn() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <div className="site-bg" />

      {/* Header */}
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

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-600 mb-8">
          <Link href="/uk" className="hover:text-gray-400">Головна</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Гіпнотерапевт онлайн</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          Гіпнотерапевт онлайн —<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            сесії без виїзду
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Повноцінна гіпнотерапія через відеозв'язок. Той самий результат, що й на очному прийомі — незалежно від того, де ви знаходитесь.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: '100+', label: 'онлайн-клієнтів' },
            { value: '12', label: 'країн світу' },
            { value: '100%', label: 'гарантія результату' },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-2xl border border-white/8 bg-white/3">
              <div className="text-2xl font-bold text-green-400 mb-1">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Чому онлайн — це так само ефективно?</h2>
            <p>
              Гіпнотерапія працює через голос і спрямовану увагу — а не через фізичний контакт. Тому якісний відеозв'язок і навушники повністю замінюють очний прийом. Це підтверджено сотнями клієнтів по всьому світу.
            </p>
            <p className="mt-4">
              Дослідження показують, що ефективність онлайн-гіпнотерапії не поступається очній. Головна умова — тихе місце, де вас не відволікатимуть протягом 60–90 хвилин.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Як проходить онлайн-сесія?</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Первинна консультація (безкоштовно)', text: 'Обговорюємо ваш запит, я пояснюю метод і відповідаю на запитання. 20–30 хвилин у Telegram або Zoom.' },
                { step: '2', title: 'Підготовка', text: 'Ви знаходите тихе зручне місце, надягаєте навушники та підключаєтесь у призначений час.' },
                { step: '3', title: 'Сесія', text: 'Повноцінна гіпнотерапевтична сесія через Zoom тривалістю 60–90 хвилин. Ви в повній свідомості та контролі.' },
                { step: '4', title: 'Інтеграція', text: "Після сесії обговорюємо досвід і закріплюємо результат. Я на зв'язку між зустрічами." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-sm">
                    {item.step}
                  </span>
                  <div>
                    <div className="text-white font-medium mb-1">{item.title}</div>
                    <div className="text-gray-500 text-sm">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">З чим допоможе гіпнотерапевт онлайн?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Тривога та панічні атаки', 'Страхи та фобії',
                'Прокрастинація та блоки', 'Куріння та залежності',
                'Зайва вага та харчові звички', 'Психосоматика',
                'Низька самооцінка', 'Регресивний гіпноз',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що потрібно для онлайн-сесії?</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> Ноутбук, планшет або телефон з камерою</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> Навушники (бажано)</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> Тихе місце без зайвих людей</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> Зручне крісло або ліжко — де ви можете розслабитися</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> Zoom або Telegram (є у телефоні)</li>
            </ul>
          </div>

        </section>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Готові спробувати?</h2>
          <p className="text-gray-400 text-sm mb-6">Напишіть кодове слово <span className="text-white font-semibold">«Перезапуск»</span> — і я проведу безкоштовну 30-хвилинну консультацію</p>
          <a
            href="https://t.me/mykhailo_elmejor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all hover:scale-105 text-sm shadow-lg shadow-green-600/30"
          >
            <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={18} height={18} />
            Написати «Перезапуск»
          </a>
          <p className="mt-4 text-xs text-gray-600">Гіпнотерапевт онлайн · Михайло Коломийцев · kolomoitsev.com</p>
        </div>

      </main>
    </div>
  );
}
