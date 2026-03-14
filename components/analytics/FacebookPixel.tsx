"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export default function FacebookPixel() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (typeof window !== "undefined" && window.CookieConsent) {
        const consent = window.CookieConsent.acceptedCategories;
        if (consent && consent.includes("marketing")) {
          setHasConsent(true);
        }
      }
    };

    window.addEventListener("cc:onConsent", checkConsent);
    window.addEventListener("cc:onChange", checkConsent);
    checkConsent();

    return () => {
      window.removeEventListener("cc:onConsent", checkConsent);
      window.removeEventListener("cc:onChange", checkConsent);
    };
  }, []);

  if (!FB_PIXEL_ID || !hasConsent) return null;

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
