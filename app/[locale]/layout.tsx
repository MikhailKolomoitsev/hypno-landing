import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

type Locale = "ru" | "uk" | "en";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<Locale, string> = {
    ru: "Гипнотерапия — Михаил Коломойцев | kolomoitsev.com",
    uk: "Гіпнотерапія — Михайло Коломойцев | kolomoitsev.com",
    en: "Hypnotherapy — Mykhailo Kolomoitsev | kolomoitsev.com",
  };
  const descriptions: Record<Locale, string> = {
    ru: "Профессиональная гипнотерапия онлайн. 200+ клиентов, 5 лет опыта. Избавление от страхов, тревоги, прокрастинации. 100% гарантия результата.",
    uk: "Професійна гіпнотерапія онлайн. 200+ клієнтів, 5 років досвіду. Позбавлення від страхів, тривоги, прокрастинації. 100% гарантія результату.",
    en: "Professional hypnotherapy online. 200+ clients, 5 years of experience. Freedom from fears, anxiety, procrastination. 100% results guarantee.",
  };

  const l = (locale as Locale) in titles ? (locale as Locale) : "ru";

  return {
    metadataBase: new URL("https://kolomoitsev.com"),
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://kolomoitsev.com/${locale}`,
      languages: {
        "ru": "https://kolomoitsev.com/ru",
        "uk": "https://kolomoitsev.com/uk",
        "en": "https://kolomoitsev.com/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "uk" ? "uk_UA" : "ru_RU",
      url: `https://kolomoitsev.com/${locale}`,
      siteName: "Hypnotherapy — Mykhailo Kolomoitsev",
      title: titles[l],
      description: descriptions[l],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[l],
      description: descriptions[l],
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
