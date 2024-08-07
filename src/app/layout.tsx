import { Nova_Mono } from "next/font/google";
import "./globals.css";

const novaMono = Nova_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nova-mono",
});

export const metadata = {
  title: "Evan MARCEL",
  description: "Portfolio de Evan MARCEL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${novaMono.variable}`}>{children}</body>
    </html>
  );
}
