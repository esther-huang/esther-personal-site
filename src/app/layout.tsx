import type { Metadata } from "next";
import { Geist_Mono, Newsreader, Sora } from "next/font/google";
import "./globals.css";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Esther | Memory, knowledge, and action in AI systems",
    template: "%s | Esther"
  },
  description: siteConfig.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${geistMono.variable} ${newsreader.variable} font-sans`}>
        <AmbientBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
