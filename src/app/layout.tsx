import type { Metadata } from "next";
import { Roboto_Slab, Open_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";

// Font configurations
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Riklabel | B2B Solutions",
    template: "%s | Riklabel",
  },
  description: "Innovative B2B solutions by Riklabel",
  keywords: ["B2B", "Products", "Solutions", "Riklabel", "Business"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Riklabel | B2B Solutions",
    description: "Innovative B2B solutions by Riklabel",
    url: "https://riklabel.com",
    siteName: "Riklabel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riklabel | B2B Solutions",
    description: "Innovative B2B solutions by Riklabel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${openSans.variable}`}>
      <body className="bg-gray-50 antialiased">
        <Header />
        <main className="min-h-screen pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}