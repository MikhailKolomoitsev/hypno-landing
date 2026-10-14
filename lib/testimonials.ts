import type { Locale } from './articles';

type Video = { youtubeId: string; name?: Record<Locale, string> };

/** Video testimonials (YouTube). Names are shown per locale; unnamed ones get a generic label. */
export const VIDEOS: Video[] = [
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

const LABEL: Record<Locale, { review: string; client: string }> = {
  uk: { review: 'Відгук', client: 'Відгук клієнта' },
  ru: { review: 'Отзыв', client: 'Отзыв клиента' },
  en: { review: 'Review', client: 'Client review' },
};

export function testimonialsFor(locale: Locale) {
  const l = LABEL[locale];
  return VIDEOS.map((v, i) => ({
    id: String(i + 1),
    youtubeId: v.youtubeId,
    name: v.name?.[locale],
    title: v.name ? `${l.review} ${v.name[locale]}` : l.client,
  }));
}
