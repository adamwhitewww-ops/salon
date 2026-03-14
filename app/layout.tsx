import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/analytics/CookieConsent";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import FacebookPixel from "@/components/analytics/FacebookPixel";
import { SALON_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SALON_NAME} | Prémium Női Fodrász Szalon Budapest`,
    template: `%s | ${SALON_NAME}`,
  },
  description:
    "Budapest legszebb női fodrász szalonja. Professzionális hajvágás, festés, balayage, kezelések és esküvői frizurák. Foglalj online időpontot!",
  keywords: [
    "fodrász",
    "női fodrász",
    "Budapest",
    "hajvágás",
    "hajfestés",
    "balayage",
    "melír",
    "keratin kezelés",
    "esküvői frizura",
    "fodrász szalon",
  ],
  authors: [{ name: SALON_NAME }],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: SITE_URL,
    siteName: SALON_NAME,
    title: `${SALON_NAME} | Prémium Női Fodrász Szalon Budapest`,
    description:
      "Budapest legszebb női fodrász szalonja. Professzionális hajvágás, festés, balayage, kezelések és esküvői frizurák.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SALON_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SALON_NAME} | Prémium Női Fodrász Szalon`,
    description:
      "Professzionális hajvágás, festés és kezelések Budapest szívében.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
        <GoogleAnalytics />
        <FacebookPixel />
      </body>
    </html>
  );
}
