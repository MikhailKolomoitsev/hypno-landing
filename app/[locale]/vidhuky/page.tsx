import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Відгуки клієнтів — гіпнотерапія Михайла Коломийцева | kolomoitsev.com',
  description: 'Реальні відеовідгуки клієнтів гіпнотерапевта Михайла Коломийцева. Результати після гіпнозу: страхи, тривога, куріння, прокрастинація.',
  alternates: {
    canonical: 'https://kolomoitsev.com/uk/vidhuky',
  },
};

const testimonials = [
  { id: '1',  title: 'Відгук Оля',       youtubeId: 'gpPFMAvc2vI' },
  { id: '2',  title: 'Відгук клієнта',   youtubeId: 'Q_HsnObwtwI' },
  { id: '3',  title: 'Відгук Валерій',   youtubeId: 'Q5sK6CtgGjk' },
  { id: '4',  title: 'Відгук Олена',     youtubeId: 'K8YPEOkdExg' },
  { id: '5',  title: 'Відгук Олександр', youtubeId: '4l5cSAPt57U' },
  { id: '6',  title: 'Відгук клієнта',   youtubeId: '-1Ms6Jk2V2M' },
  { id: '7',  title: 'Відгук клієнта',   youtubeId: 'FQ40Du6B4mA' },
  { id: '8',  title: 'Відгук клієнта',   youtubeId: 'EULa61gySNE' },
  { id: '9',  title: 'Відгук клієнта',   youtubeId: '71CglstaVWM' },
  { id: '10', title: 'Відгук клієнта',   youtubeId: '09mqrFk_VzM' },
  { id: '11', title: 'Відгук клієнта',   youtubeId: 'c3_NDzdvNo4' },
];

export default function Vidhuky() {
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

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20">

        <nav className="text-xs text-gray-600 mb-8">
          <Link href="/uk" className="hover:text-gray-400">Головна</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Відгуки</span>
        </nav>

        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">Реальні результати</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4" style={{ letterSpacing: '-0.03em' }}>
            Що кажуть клієнти
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            11 відео-відгуків від реальних людей — без монтажу і сценарію
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { value: '100+', label: 'клієнтів' },
            { value: '12', label: 'країн' },
            { value: '100%', label: 'гарантія' },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-2xl border border-white/8 bg-white/3">
              <div className="text-2xl font-bold text-green-400 mb-1">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-2xl overflow-hidden border border-white/8 bg-white/3">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${t.youtubeId}`}
                  title={t.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
              {t.title && (
                <div className="px-3 py-2 text-xs text-gray-500">{t.title}</div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org structured data for reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Гіпнотерапія Михайла Коломийцева",
              "url": "https://kolomoitsev.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "11",
              },
              "review": testimonials.map((t) => ({
                "@type": "Review",
                "author": { "@type": "Person", "name": t.title || "Клієнт" },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                },
                "reviewBody": "Відео-відгук про результати гіпнотерапії",
              })),
            }),
          }}
        />

        {/* CTA */}
        <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">Хочете такий самий результат?</h2>
          <p className="text-gray-400 text-sm mb-6">Напишіть кодове слово <span className="text-white font-semibold">«Перезапуск»</span> — і я безкоштовно проконсультую вас</p>
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
