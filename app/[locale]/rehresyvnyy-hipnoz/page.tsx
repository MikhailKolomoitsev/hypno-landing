import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Регресивний гіпноз: що це і як працює | kolomoitsev.com',
  description: 'Регресивний гіпноз — подорож у минуле для пошуку причин нинішніх проблем. Як відбувається сесія, кому підходить, і що можна опрацювати.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/rehresyvnyy-hipnoz',
  },
};

export default function RehresyvnyyHipnoz() {
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
          <span className="text-gray-400">Регресивний гіпноз</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          Регресивний гіпноз:<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            що це і як працює
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Регресивний гіпноз — техніка, яка дозволяє «повернутися» у минулі спогади і переосмислити події, що лежать в основі нинішніх проблем.
        </p>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що таке регресивний гіпноз?</h2>
            <p>
              В стані гіпнотичного трансу підсвідомість відкриває доступ до спогадів, які зазвичай недоступні свідомому розуму. Регресія дозволяє знайти і опрацювати первинну подію — «корінь» поточної проблеми.
            </p>
            <p className="mt-4">
              Важливо розуміти: ми не «змінюємо» минуле. Ми змінюємо те, як підсвідомість його інтерпретує — і це знімає емоційний заряд, який ця подія несла роками.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">З чим допомагає регресія?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Незрозумілі страхи та фобії без видимої причини',
                'Повторювані сценарії у стосунках',
                'Дитячі травми та їх наслідки',
                'Відчуття провини або сорому без пояснення',
                'Хронічна тривога невідомого походження',
                'Труднощі з прийняттям рішень',
                'Психосоматичні прояви',
                'Глибинна робота над собою',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-400 p-3 rounded-xl border border-white/8 bg-white/3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Як проходить регресивна сесія?</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Вхід у транс', text: 'Через техніки глибокого розслаблення і спрямованої уваги — 10–15 хвилин.' },
                { step: '2', title: 'Пошук події', text: 'Підсвідомість сама веде до потрібного спогаду. Не завжди це те, чого очікує клієнт — іноді відкривається несподіваний момент.' },
                { step: '3', title: 'Опрацювання', text: 'Переосмислення події з позиції дорослої людини. Зняття емоційного заряду. Інтеграція нового розуміння.' },
                { step: '4', title: 'Вихід і обговорення', text: 'М\'який вихід з трансу, обмін враженнями. Іноді потрібен час, щоб «осісти» досвіду.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
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
            <h2 className="text-white text-2xl font-bold mb-4">Чи обов'язково пам'ятати травму наперед?</h2>
            <p>
              Ні. Часто клієнти самі не знають, що лежить в основі їхньої проблеми. Це і є мета регресії — знайти те, що підсвідомість приховує від свідомого розуму.
            </p>
            <p className="mt-4">
              Якщо подія «відкрилась» — це не означає, що вам доведеться її «переживати» знову в усій силі. Терапевт контролює рівень емоційного залучення і підтримує безпечний простір.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Скільки потрібно сесій?</h2>
            <p>
              Регресивний гіпноз — це не курс, а окрема техніка. Зазвичай 1–3 сесії для роботи з конкретним запитом. Кожна сесія завершена сама по собі.
            </p>
          </div>

        </section>

        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Хочете спробувати регресивний гіпноз?</h2>
          <p className="text-gray-400 text-sm mb-6">Напишіть кодове слово <span className="text-white font-semibold">«Перезапуск»</span> — і я безкоштовно розберу вашу ситуацію</p>
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
