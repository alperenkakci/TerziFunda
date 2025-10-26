import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://terzifunda.com'),
  title: "Terzi Funda - Bahçelievler, Yenibosna, Şirinevler Terzi | 25 Yıllık Deneyim",
  description: "Bahçelievler, Yenibosna, Şirinevler, Kocasinan bölgelerinde terzilik hizmeti. Pantolon paça kesme, daraltma, kıyafet onarımı. Metro yakını, uygun fiyat, aynı gün teslim.",
  keywords: "Bahçelievler terzi, Yenibosna terzi, Şirinevler terzi, Kocasinan terzi, Soğanlı terzi, pantolon paça kesme, pantolon daraltma, kıyafet onarımı, terzi dükkanı, Bahçelievler metro terzi, acil terzi, aynı gün terzi, uygun fiyat terzi İstanbul",
  authors: [{ name: "Terzi Funda" }],
  creator: "Terzi Funda",
  publisher: "Terzi Funda",
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
    title: "Terzi Funda - Bahçelievler, Yenibosna, Şirinevler Terzi",
    description: "25 yıllık deneyimle Bahçelievler ve çevresinde kaliteli terzilik hizmeti. Metro yakını, uygun fiyat, aynı gün teslim.",
    type: "website",
    locale: "tr_TR",
    url: "https://terzifunda.com",
    siteName: "Terzi Funda",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terzi Funda - Bahçelievler Terzi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terzi Funda - Bahçelievler Terzi",
    description: "25 yıllık deneyimle kaliteli terzilik hizmeti",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://terzifunda.com",
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": "Bahçelievler, İstanbul",
    "geo.position": "41.0082;28.8584",
    "ICBM": "41.0082, 28.8584",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Analytics />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
