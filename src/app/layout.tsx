import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Grotesque moderne auto-hébergée au build — aucune requête vers Google
const sans = Archivo({
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
    <html lang="fr" className={`${sans.variable} antialiased`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
