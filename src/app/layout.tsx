import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

// Polices auto-hébergées au build par next/font — aucune requête vers Google
const display = Fraunces({
  variable: "--font-display-var",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const sans = Instrument_Sans({
  variable: "--font-sans-var",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chloé — Communication Visuelle",
  description:
    "Portfolio de Chloé, étudiante en communication visuelle. Identité de marque, édition, illustration et motion design.",
  openGraph: {
    title: "Chloé — Communication Visuelle",
    description:
      "Portfolio de Chloé, étudiante en communication visuelle. Identité de marque, édition, illustration et motion design.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
