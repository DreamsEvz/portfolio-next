import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evan MARCEL - Développeur Fullstack",
  description: "Portfolio de Evan MARCEL - Développeur Fullstack passionné, spécialisé en React, Next.js, Laravel et Django. Actuellement en poste au sein de l'entreprise Bimedoc.",
  keywords: ["développeur", "fullstack", "react", "nextjs", "laravel", "django", "vue", "portfolio", "lyon"],
  authors: [{ name: "Evan MARCEL" }],
  creator: "Evan MARCEL",
  publisher: "Evan MARCEL",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://evan-marcel.fr",
    siteName: "Evan MARCEL - Portfolio",
    title: "Evan MARCEL - Développeur Fullstack",
    description: "Portfolio de Evan MARCEL - Développeur Fullstack passionné, spécialisé en React, Next.js, Laravel et Django.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan MARCEL - Développeur Fullstack",
    description: "Portfolio de Evan MARCEL - Développeur Fullstack passionné",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#083036",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
