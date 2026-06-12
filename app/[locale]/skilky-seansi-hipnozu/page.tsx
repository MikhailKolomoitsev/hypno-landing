import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Скільки сеансів гіпнозу потрібно для результату? | kolomoitsev.com',
  description: 'Скільки сеансів гіпнозу потрібно залежно від запиту. Реальні цифри від практикуючого гіпнотерапевта. Від 1 до 6 зустрічей для більшості проблем.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/skilky-seansi-hipnozu',
  },
};

export default function SkilkySeansiv() {
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
          <span className="text-gray-400">Скільки сеансів гіпнозу</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          Скільки сеансів гіпнозу<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            потрібно для результату?
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Найчастіше запитують: «А якщо я прийду і нічого не відбудеться?». Відповідь чесна — результат залежить від запиту. Ось реальні цифри з практики.
        </p>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-white text-2xl font-bold mb-6">Кількість сеансів залежно від запиту</h2>
            <div className="space-y-3">
              {[
                { problem: 'Куріння', sessions: '1–2 сеанси', note: 'Один сеанс часто достатній для повної зупинки' },
                { problem: 'Конкретна фобія (павуки, польоти, висота)', sessions: '1–3 сеанси', note: 'Чим чіткіше сформульований страх, тим швидший результат' },
                { problem: 'Панічні атаки та тривожність', sessions: '3–5 сеансів', note: 'Потребує роботи з першопричиною, яка може бути глибшою' },
                { problem: 'Прокрастинація та самосаботаж', sessions: '2–4 сеанси', note: 'Залежить від складності підсвідомих програм' },
                { problem: 'Зайва вага та харчова поведінка', sessions: '3–6 сеансів', note: 'Харчові звички формуються роками — потрібен час на перепрограмування' },
                { problem: 'Регресивний гіпноз', sessions: '1–3 сеанси', note: 'Кожна сесія — окрема робота, не обов\'язково пов\'язана з наступною' },
                { problem: 'Залежності (алкоголь, азартні ігри)', sessions: '4–8 сеансів', note: 'Складні випадки можуть потребувати більше — залежить від глибини проблеми' },
              ].map((item) => (
                <div key={item.problem} className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-white font-medium">{item.problem}</span>
                      <span className="px-3 py-1 rounded-full bg-green-500/15 border border-green-500/20 text-green-400 text-xs font-medium">{item.sessions}</span>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що впливає на кількість сеансів?</h2>
            <div className="space-y-3">
              {[
                { factor: 'Глибина проблеми', text: 'Страх, який з\'явився після однієї події, зазвичай минає швидше, ніж той, що формувався роками.' },
                { factor: 'Готовність до змін', text: 'Чим більше людина хоче змінитись і вірить у метод — тим швидший результат.' },
                { factor: 'Чіткість запиту', text: 'Конкретна проблема вирішується швидше, ніж розмите «хочу стати кращою версією себе».' },
                { factor: 'Глибина трансу', text: 'Деякі люди входять у глибший транс, що прискорює роботу. Але навіть легкий транс дає результат.' },
              ].map((item) => (
                <div key={item.factor} className="p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="text-green-400 font-medium text-sm mb-1">{item.factor}</div>
                  <div className="text-gray-400 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">100% гарантія результату</h2>
            <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
              <p className="text-gray-300">
                Якщо після сесії ви не відчуєте жодних змін — я повертаю гроші повністю, без запитань. Це не маркетинговий хід: за 3+ роки практики мені не довелося повертати гроші жодному клієнту.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Чи можна зробити одну сесію і зупинитись?</h2>
            <p>
              Так. Після першої сесії ви вирішуєте, чи хочете продовжувати. Немає ніяких «пакетів», обов'язкових курсів або передоплати за кілька зустрічей. Кожна сесія — окрема робота з конкретним результатом.
            </p>
          </div>

        </section>

        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Дізнайтесь, скільки потрібно саме вам</h2>
          <p className="text-gray-400 text-sm mb-6">Напишіть кодове слово <span className="text-white font-semibold">«Перезапуск»</span> — і я безкоштовно проконсультую по вашій ситуації</p>
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
