import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Гіпноз: протипоказання та шкода — що потрібно знати | kolomoitsev.com',
  description: 'Реальні протипоказання до гіпнозу. Кому гіпноз може нашкодити, а кому — ні. Розвіюємо міфи. Сертифікований гіпнотерапевт Михайло Коломийцев.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/hipnoz-protypokazannya',
  },
};

export default function HipnozProtypokazannya() {
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
          Запитати
        </a>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">

        <nav className="text-xs text-gray-600 mb-8">
          <Link href="/uk" className="hover:text-gray-400">Головна</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Гіпноз: протипоказання</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          Гіпноз: протипоказання<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            та шкода — правда без прикрас
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Гіпноз — потужний інструмент, але, як і будь-який інструмент, він не підходить абсолютно всім. Нижче — чесна інформація без зайвого маркетингу: де реальні протипоказання, а де просто страхи з фільмів.
        </p>

        <section className="space-y-10 text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Що таке гіпноз насправді?</h2>
            <p>
              На практиці гіпноз — це просто стан зосередженої уваги, коли підсвідомість трохи більше відкрита до змін, ніж зазвичай. Свідомість при цьому нікуди не зникає: на сесіях я регулярно бачу, як клієнти кивають, відповідають на запитання і навіть посміхаються в окремі моменти.
            </p>
            <p className="mt-4">
              Багато хто чекає чогось схожого на сон або кіношне «зомбування» — насправді нічого подібного немає. Ви чуєте кожне слово, добре пам'ятаєте все, що відбувалося на сесії, і за бажанням можете вийти з трансу в будь-яку секунду.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Абсолютні протипоказання</h2>
            <p className="text-gray-500 text-sm mb-4">Стани, при яких гіпнотерапія не проводиться ні за яких умов:</p>
            <div className="space-y-3">
              {[
                { title: 'Психоз та шизофренія', text: 'Активні психотичні епізоди, галюцинації, маячення. Гіпнотичний стан може посилити симптоми.' },
                { title: 'Важка депресія з суїцидальними думками', text: 'За наявності суїцидальних ідей необхідна термінова психіатрична допомога, а не гіпнотерапія.' },
                { title: 'Важка форма епілепсії', text: 'Стан розслаблення та зміна стану свідомості можуть спровокувати напад.' },
                { title: 'Стан сп\'яніння', text: 'Алкогольне або наркотичне сп\'яніння повністю виключає проведення сесії.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-red-500/15 bg-red-500/5">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                  <div>
                    <div className="text-white font-medium text-sm mb-1">{item.title}</div>
                    <div className="text-gray-500 text-sm">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Відносні протипоказання</h2>
            <p className="text-gray-500 text-sm mb-4">Потребують попереднього обговорення зі спеціалістом:</p>
            <div className="space-y-2">
              {[
                'Вагітність (тільки з дозволу лікаря)',
                'Серцеві аритмії у важкій формі',
                'Деякі форми розладів особистості',
                'Дитячий вік до 12 років (тільки з присутністю батьків)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl border border-yellow-500/10 bg-yellow-500/5 text-sm text-gray-400">
                  <span className="text-yellow-400 mt-0.5 flex-shrink-0">⚠</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Чи може гіпноз нашкодити?</h2>
            <p>
              Коротко: ні, якщо працюєте з людиною, яка дійсно розуміє, що робить. За роки практики я не бачив випадків, щоб гіпноз залишав якісь «сліди» в підсвідомості чи змінював характер людини. Найчастіше після сесії клієнти описують стан, схожий на глибоку медитацію — спокій і легка приємна втома.
            </p>
            <p className="mt-4">
              Проблеми трапляються там, де працює людина без сертифікації й без розуміння етики цього методу. Тому я б завжди радив перевіряти кваліфікацію спеціаліста — це займає кілька хвилин, а захищає від реальних ризиків.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Поширені міфи</h2>
            <div className="space-y-4">
              {[
                { myth: 'Під гіпнозом можна видати таємниці', fact: 'Неправда. Ви самі вирішуєте, що сказати, а що залишити при собі. Це не «сироватка правди» з фільмів.' },
                { myth: 'Загіпнотизувати можна кожного проти його волі', fact: 'Ні, і це принципово важливо. Без вашої згоди й бажання гіпноз просто не спрацює.' },
                { myth: 'Можна застрягти у трансі', fact: 'Це міф. Транс — природний стан: з нього виходять самостійно, а в гіршому разі просто засинають і прокидаються звичним чином.' },
                { myth: 'Гіпноз — це окультизм', fact: 'Зовсім ні. Гіпнотерапія — визнаний психотерапевтичний метод, який вивчають і застосовують у клінічній практиці.' },
              ].map((item) => (
                <div key={item.myth} className="p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="text-red-400 text-sm font-medium mb-1">Міф: «{item.myth}»</div>
                  <div className="text-gray-400 text-sm"><span className="text-green-400 font-medium">Факт:</span> {item.fact}</div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Залишились запитання?</h2>
          <p className="text-gray-400 text-sm mb-6">Напишіть — я безкоштовно проконсультую і скажу, чи підходить вам гіпнотерапія</p>
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
