/* eslint-disable @typescript-eslint/no-explicit-any */

interface Window {
  CookieConsent?: {
    acceptedCategories: string[];
  };
  Cal?: any;
  gtag?: (...args: any[]) => void;
  fbq?: (...args: any[]) => void;
  dataLayer?: any[];
}
