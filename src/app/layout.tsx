import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";

// Font configurations
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
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