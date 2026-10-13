import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceShell, { CODE_WORD, CtaText, serviceMetadata } from '../components/ServiceShell';
import { BASE_URL, LOCALES, isLocale, type Locale } from '../../../lib/articles';

const SLUG = 'vidhuky';

// youtubeId + optional client first name; names are shown per locale
const VIDEOS = [
  { youtubeId: 'gpPFMAvc2vI', name: { uk: 'Оля', ru: 'Оля', en: 'Olya' } },
  { youtubeId: 'Q_HsnObwtwI' },
  { youtubeId: 'Q5sK6CtgGjk', name: { uk: 'Валерій', ru: 'Валерий', en: 'Valerii' } },
  { youtubeId: 'K8YPEOkdExg', name: { uk: 'Олена', ru: 'Елена', en: 'Olena' } },
  { youtubeId: '4l5cSAPt57U', name: { uk: 'Олександр', ru: 'Александр', en: 'Oleksandr' } },
  { youtubeId: '-1Ms6Jk2V2M' },
  { youtubeId: 'FQ40Du6B4mA' },
  { youtubeId: 'EULa61gySNE' },
  { youtubeId: '71CglstaVWM' },
  { youtubeId: '09mqrFk_VzM' },
  { youtubeId: 'c3_NDzdvNo4' },
];

const content = {
  uk: {
    metaTitle: 'Відгуки клієнтів — гіпнотерапія Михайла Коломийцева | kolomoitsev.com',
    metaDescription: 'Реальні відеовідгуки клієнтів гіпнотерапевта Михайла Коломийцева. Результати після гіпнозу: страхи, тривога, куріння, прокрастинація.',
    breadcrumb: 'Відгуки', kicker: 'Реальні результати', h1: 'Що кажуть клієнти',
    lead: '11 відео-відгуків від реальних людей — без монтажу і сценарію',
    stats: [{ value: '100+', label: 'клієнтів' }, { value: '12', label: 'країн' }, { value: '100%', label: 'гарантія' }],
    review: 'Відгук', client: 'Відгук клієнта', reviewBody: 'Відео-відгук про результати гіпнотерапії', business: 'Гіпнотерапія Михайла Коломийцева',
    ctaTitle: 'Хочете такий самий результат?', ctaBefore: 'Напишіть кодове слово', ctaAfter: '— і я безкоштовно проконсультую вас',
    note: 'Certified Master Hypnotherapist · Михайло Коломийцев · kolomoitsev.com',
  },
  ru: {
    metaTitle: 'Отзывы клиентов — гипнотерапия Михаила Коломойцева | kolomoitsev.com',
    metaDescription: 'Реальные видеоотзывы клиентов гипнотерапевта Михаила Коломойцева. Результаты после гипноза: страхи, тревога, курение, прокрастинация.',
    breadcrumb: 'Отзывы', kicker: 'Реальные результаты', h1: 'Что говорят клиенты',
    lead: '11 видеоотзывов от реальных людей — без монтажа и сценария',
    stats: [{ value: '100+', label: 'клиентов' }, { value: '12', label: 'стран' }, { value: '100%', label: 'гарантия' }],
    review: 'Отзыв', client: 'Отзыв клиента', reviewBody: 'Видеоотзыв о результатах гипнотерапии', business: 'Гипнотерапия Михаила Коломойцева',
    ctaTitle: 'Хотите такой же результат?', ctaBefore: 'Напишите кодовое слово', ctaAfter: '— и я бесплатно проконсультирую вас',
    note: 'Certified Master Hypnotherapist · Михаил Коломойцев · kolomoitsev.com',
  },
  en: {
    metaTitle: 'Client Reviews — Hypnotherapy by Mykhailo Kolomoitsev | kolomoitsev.com',
    metaDescription: 'Real video testimonials from clients of hypnotherapist Mykhailo Kolomoitsev. Results after hypnosis: fears, anxiety, smoking, procrastination.',
    breadcrumb: 'Reviews', kicker: 'Real results', h1: 'What clients say',
    lead: '11 video testimonials from real people, unedited and unscripted',
    stats: [{ value: '100+', label: 'clients' }, { value: '12', label: 'countries' }, { value: '100%', label: 'guarantee' }],
    review: 'Review', client: 'Client review', reviewBody: 'Video testimonial about hypnotherapy results', business: 'Hypnotherapy by Mykhailo Kolomoitsev',
    ctaTitle: 'Want the same result?', ctaBefore: 'Message me the code word', ctaAfter: 'and I will give you a free consultation',
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
  const videos = VIDEOS.map((v) => ({ ...v, title: v.name ? `${t.review} ${v.name[locale]}` : t.client }));

  const reviewsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: t.business,
    url: BASE_URL,
    review: videos.map((v) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: v.name?.[locale] ?? t.client },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: t.reviewBody,
    })),
  };

  return (
    <ServiceShell
      locale={locale} slug={SLUG} breadcrumb={t.breadcrumb} serviceDescription={t.metaDescription} wide
      extraJsonLd={[reviewsJsonLd]}
      hero={
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">{t.kicker}</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4" style={{ letterSpacing: '-0.03em' }}>{t.h1}</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">{t.lead}</p>
        </div>
      }
      cta={{ title: t.ctaTitle, text: <CtaText before={t.ctaBefore} locale={locale} after={t.ctaAfter} />, button: CODE_WORD[locale].button, note: t.note }}
    >
      <div className="grid grid-cols-3 gap-4 mb-14">
        {t.stats.map((s) => (
          <div key={s.label} className="text-center p-4 rounded-2xl border border-white/8 bg-white/3">
            <div className="text-2xl font-bold text-green-400 mb-1">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v) => (
          <div key={v.youtubeId} className="rounded-2xl overflow-hidden border border-white/8 bg-white/3">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
            <div className="px-3 py-2 text-xs text-gray-500">{v.title}</div>
          </div>
        ))}
      </div>
    </ServiceShell>
  );
}
