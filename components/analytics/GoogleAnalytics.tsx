"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (typeof window !== "undefined" && window.CookieConsent) {
        const consent = window.CookieConsent.acceptedCategories;
        if (consent && consent.includes("analytics")) {
          setHasConsent(true);
        }
      }
    };

    // Check on consent change
    window.addEventListener("cc:onConsent", checkConsent);
    window.addEventListener("cc:onChange", checkConsent);

    // Check immediately in case consent was already given
    checkConsent();

    return () => {
      window.removeEventListener("cc:onConsent", checkConsent);
      window.removeEventListener("cc:onChange", checkConsent);
    };
  }, []);

  if (!GA_ID || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
