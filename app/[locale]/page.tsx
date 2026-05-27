'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import VideoCarousel from './components/VideoCarousel';
import LanguageSwitcher from './components/LanguageSwitcher';

const SECTIONS = ['hero', 'problems', 'video', 'stats', 'testimonials', 'faq', 'cta'];

const testimonials = [
  { id: '1',  title: 'Відгук Оля',      youtubeId: 'gpPFMAvc2vI' },
  { id: '2',  title: '',                youtubeId: 'Q_HsnObwtwI' },
  { id: '3',  title: 'Отзыв Валерия',   youtubeId: 'Q5sK6CtgGjk' },
  { id: '4',  title: 'Отзыв Elena',     youtubeId: 'K8YPEOkdExg' },
  { id: '5',  title: 'Отзыв Александр', youtubeId: '4l5cSAPt57U' },
  { id: '6',  title: '',                youtubeId: '-1Ms6Jk2V2M' },
  { id: '7',  title: '',                youtubeId: 'FQ40Du6B4mA' },
  { id: '8',  title: '',                youtubeId: 'EULa61gySNE' },
  { id: '9',  title: '',                youtubeId: '71CglstaVWM' },
  { id: '10', title: '',                youtubeId: '09mqrFk_VzM' },
  { id: '11', title: '',                youtubeId: 'c3_NDzdvNo4' },
];

export default function Home() {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: t('hero.formSuccess') });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.error || t('hero.formError') });
      }
    } catch {
      setMessage({ type: 'error', text: t('hero.formNetworkError') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll('[data-section]');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const index = Math.round(container.scrollTop / container.clientHeight);
    setActiveSection(index);
  };

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
  ];

  return (
    <>
      {/* Fixed background */}
      <div className="site-bg" />

      {/* Sticky CTA button */}
      <a
        href="https://t.me/mykhailo_elmejor"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold text-sm shadow-xl shadow-green-600/40 hover:shadow-green-500/60 hover:scale-105 active:scale-100 transition-all duration-200"
      >
        <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={18} height={18} />
        {t('sticky')}
      </a>

      {/* Language switcher — top right */}
      <div className="fixed top-5 right-5 z-50">
        <LanguageSwitcher />
      </div>

      {/* Side nav dots */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 hidden sm:flex">
        {SECTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeSection
                ? 'w-2.5 h-6 bg-green-400'
                : 'w-2 h-2 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </nav>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-transparent"
      >

        {/* ─── 1. HERO ──────────────────────────────────────── */}
        <section data-section="hero" className="snap-start snap-always h-screen flex flex-col items-center justify-center px-4 relative">

          {/* Social proof badge */}
          <div className="mb-5 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300">
            <span className="text-yellow-400 tracking-tight">★★★★★</span>
            <span className="text-gray-400">{t('hero.badge')}</span>
          </div>

          <h1 className="text-center font-bold leading-[1.05] mb-5 max-w-4xl" style={{letterSpacing: '-0.04em'}}>
            <span className="block text-5xl sm:text-7xl md:text-8xl text-white">
              {t('hero.title1')}
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent mt-1">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-shimmer text-center text-lg sm:text-xl max-w-xl mb-3 leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          {/* Value props row */}
          <div className="flex items-center gap-4 mb-10 text-xs text-gray-500 flex-wrap justify-center">
            <span className="flex items-center gap-1"><span className="text-green-400">✓</span> {t('hero.prop1')}</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1"><span className="text-green-400">✓</span> {t('hero.prop2')}</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1"><span className="text-green-400">✓</span> {t('hero.prop3')}</span>
          </div>

          {/* Email form */}
          <div className="w-full max-w-2xl">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 shadow-2xl shadow-purple-900/20">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/15 to-transparent pointer-events-none" />
              <h2 className="text-white text-xl font-bold text-center mb-1">
                {t('hero.formTitle')}
              </h2>
              <p className="text-gray-500 text-xs text-center mb-5">
                {t('hero.formDesc')}
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t('hero.formPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:opacity-50 text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-700/40 hover:scale-105 active:scale-100 whitespace-nowrap disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? t('hero.formSubmitting') : t('hero.formButton')}
                </button>
              </form>
              <p className="text-center text-xs text-gray-600 mt-3">{t('hero.formNoSpam')}</p>
              {message && (
                <div className={`mt-3 text-center text-sm px-4 py-3 rounded-xl ${
                  message.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {message.text}
                </div>
              )}
            </div>
          </div>

          <button onClick={() => scrollToSection(1)} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </section>

        {/* ─── 2. PROBLEMS ──────────────────────────────────── */}
        <section data-section="problems" className="snap-start snap-always h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">{t('problems.label')}</span>
              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2" style={{letterSpacing: '-0.02em'}}>
                {t('problems.title')}<br className="hidden sm:block" />
                <span className="text-green-400"> {t('problems.titleAccent')}</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {([1,2,3,4,5,6] as const).map((i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm leading-snug">{t(`problems.item${i}`)}</span>
                </div>
              ))}
            </div>

            <div className="text-center p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-white font-semibold">{t('problems.footer')}</span><br />
                {t('problems.footerCont')}
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. INTRO VIDEO ───────────────────────────────── */}
        <section data-section="video" className="snap-start snap-always h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">{t('video.label')}</span>
              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2" style={{letterSpacing: '-0.02em'}}>{t('video.title')}</h2>
              <p className="text-gray-500 text-sm mt-2">{t('video.desc')}</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <div className="aspect-video bg-black">
                <iframe
                  src="https://www.youtube.com/embed/O8prn_Gi4Bw?si=opPK9528BgIGI23q"
                  title={t('video.title')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-7">
              <a
                href="https://t.me/mykhailo_elmejor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition-all duration-200 shadow-lg shadow-green-600/30 hover:scale-105 active:scale-100 text-sm"
              >
                <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={20} height={20} />
                {t('video.cta')}
              </a>
              <span className="text-gray-600 text-xs">{t('sticky')}</span>
            </div>
          </div>
        </section>

        {/* ─── 4. STATS + BENEFITS ──────────────────────────── */}
        <section data-section="stats" className="snap-start snap-always h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-5xl">

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-14">
              {[
                { value: '5+',   label: t('stats.years'),     sub: t('stats.yearsSub') },
                { value: '200+', label: t('stats.clients'),   sub: t('stats.clientsSub') },
                { value: '100%', label: t('stats.guarantee'), sub: t('stats.guaranteeSub') },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-5 sm:p-6 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm">
                  <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-br from-green-400 to-emerald-300 bg-clip-text text-transparent mb-1" style={{letterSpacing: '-0.03em'}}>
                    {stat.value}
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-600 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h2 className="text-white text-3xl sm:text-4xl font-bold" style={{letterSpacing: '-0.02em'}}>{t('stats.reasonsTitle')}</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🛡️', title: t('stats.reason1Title'), text: t('stats.reason1Text') },
                { icon: '⚡', title: t('stats.reason2Title'), text: t('stats.reason2Text') },
                { icon: '🎯', title: t('stats.reason3Title'), text: t('stats.reason3Text') },
              ].map((card) => (
                <div key={card.title} className="group p-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm hover:border-green-500/30 hover:bg-white/5 transition-all duration-300">
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. TESTIMONIALS ──────────────────────────────── */}
        <section data-section="testimonials" className="snap-start snap-always h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-5xl">
            <div className="text-center mb-7">
              <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">{t('testimonials.label')}</span>
              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2" style={{letterSpacing: '-0.02em'}}>{t('testimonials.title')}</h2>
              <p className="text-gray-500 mt-2 text-sm">
                11 видео-отзывов от реальных людей — без монтажа и сценария
              </p>
            </div>
            <VideoCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* ─── 6. FAQ ───────────────────────────────────────── */}
        <section data-section="faq" className="snap-start snap-always h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">{t('faq.label')}</span>
              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2" style={{letterSpacing: '-0.02em'}}>{t('faq.title')}</h2>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                  >
                    <span className="text-white text-sm font-medium leading-snug">{faq.q}</span>
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. FINAL CTA ─────────────────────────────────── */}
        <section data-section="cta" className="snap-start snap-always h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-2xl text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-semibold mb-8 tracking-wide uppercase">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {t('cta.badge')}
            </div>

            <div className="relative p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {t('cta.spots')}
              </div>

              <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3" style={{letterSpacing: '-0.03em'}}>
                {t('cta.title')}
              </h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {t('cta.desc')} <span className="text-white font-semibold">{t('cta.codeword')}</span> {t('cta.descCont')}
              </p>

              <a
                href="https://t.me/mykhailo_elmejor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold transition-all duration-200 shadow-lg shadow-green-600/30 hover:shadow-green-500/50 hover:scale-105 active:scale-100 text-sm"
              >
                <Image src="/telegram-svgrepo-com.svg" alt="Telegram" width={20} height={20} />
                {t('cta.button')}
              </a>

              <p className="mt-4 text-gray-600 text-xs">
                {t('cta.footer')}
              </p>
            </div>

            <p className="mt-10 text-xs text-gray-700">
              {t('cta.copyright')}
            </p>
          </div>
        </section>

      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Михаил Коломойцев",
              "url": "https://kolomoitsev.com",
              "jobTitle": "Гипнотерапевт",
              "description": "Профессиональный гипнотерапевт с 5+ летним опытом. 200+ клиентов из 12 стран мира.",
              "sameAs": ["https://t.me/mykhailo_elmejor"],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
