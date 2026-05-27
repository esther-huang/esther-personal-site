import type { Metadata } from "next";
import { Geist_Mono, Newsreader, Sora } from "next/font/google";
import "./globals.css";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SystemStatusTags } from "@/components/SystemStatusTags";
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
  title: {
    default: "Esther | AI-native systems for opportunity, action, and trust",
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
        <SystemStatusTags />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
