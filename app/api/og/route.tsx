import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const TAGLINE: Record<string, string> = {
  uk: 'Гіпнотерапія онлайн · Михайло Коломийцев',
  ru: 'Гипнотерапия онлайн · Михаил Коломойцев',
  en: 'Online hypnotherapy · Mykhailo Kolomoitsev',
};

// Satori's default font has no Cyrillic. Google Fonts' `text=` param returns a single
// subset file with exactly the glyphs we need, regardless of script.
const fontCache = new Map<string, Promise<ArrayBuffer | null>>();
function loadFont(text: string): Promise<ArrayBuffer | null> {
  const chars = Array.from(new Set(text)).sort().join('');
  const cached = fontCache.get(chars);
  if (cached) return cached;
  const p: Promise<ArrayBuffer | null> = (async (): Promise<ArrayBuffer | null> => {
    try {
      const css = await fetch(
        `https://fonts.googleapis.com/css2?family=Inter:wght@700&text=${encodeURIComponent(chars)}`,
        { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Safari/537.36' } },
      ).then((r) => r.text());
      const url = css.match(/src: url\((https:[^)]+)\)/)?.[1];
      if (!url) return null;
      const buf: ArrayBuffer = await fetch(url).then((r) => r.arrayBuffer());
      return buf;
    } catch {
      return null;
    }
  })();
  if (fontCache.size > 200) fontCache.clear();
  fontCache.set(chars, p);
  return p;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get('title') ?? 'kolomoitsev.com').slice(0, 140);
  const locale = searchParams.get('locale') ?? 'uk';
  const tagline = TAGLINE[locale] ?? TAGLINE.uk;
  const font = await loadFont(`${title}${tagline}kolomoitsev.comCertified Master Hypnotherapist`);
  const fontSize = title.length > 70 ? 52 : title.length > 45 ? 60 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '72px 80px', background: 'linear-gradient(135deg, #080810 0%, #141028 60%, #0b1a14 100%)',
          color: 'white', fontFamily: font ? 'Inter' : 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#9ca3af' }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#22c55e' }} />
          kolomoitsev.com
        </div>
        <div style={{ fontSize, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: 1000 }}>{title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 26, color: '#86efac' }}>
          <span>{tagline}</span>
          <span style={{ color: '#6b7280' }}>Certified Master Hypnotherapist</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: font ? [{ name: 'Inter', data: font, weight: 700, style: 'normal' }] : undefined,
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000' },
    },
  );
}
