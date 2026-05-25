import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kolomoitsev.com"),
  title: {
    default: "Гипнотерапия — Михаил Коломойцев | kolomoitsev.com",
    template: "%s | Михаил Коломойцев",
  },
  description:
    "Профессиональная гипнотерапия онлайн. 200+ клиентов, 5 лет опыта. Избавление от страхов, тревоги, прокрастинации. 100% гарантия результата.",
  keywords: [
    "гипнотерапия",
    "гипноз",
    "гипнотерапевт",
    "психотерапия онлайн",
    "Михаил Коломойцев",
    "избавление от страхов",
    "тревожность",
    "прокрастинация",
    "гипнотерапия онлайн",
    "регрессия",
    "подсознание",
  ],
  authors: [{ name: "Михаил Коломойцев", url: "https://kolomoitsev.com" }],
  creator: "Михаил Коломойцев",
  publisher: "Михаил Коломойцев",
  alternates: {
    canonical: "https://kolomoitsev.com",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://kolomoitsev.com",
    siteName: "Гипнотерапия Михаил Коломойцев",
    title: "Гипнотерапия — Трансформация через подсознание",
    description:
      "200+ клиентов. 5 лет опыта. Избавление от страхов, тревоги и прокрастинации за 1–3 сессии. 100% гарантия результата.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Гипнотерапия — Михаил Коломойцев",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Гипнотерапия — Трансформация через подсознание",
    description:
      "200+ клиентов. 5 лет опыта. Избавление от страхов, тревоги и прокрастинации за 1–3 сессии.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
