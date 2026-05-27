// Root layout — minimal shell for non-locale routes (api, etc.)
// The real layout with i18n is in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
