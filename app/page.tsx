import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { SALON_NAME, SALON_PHONE, SITE_URL } from "@/lib/constants";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: SALON_NAME,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Váci utca 12.",
      addressLocality: "Budapest",
      postalCode: "1051",
      addressCountry: "HU",
    },
    telephone: SALON_PHONE,
    url: SITE_URL,
    priceRange: "$$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday", "Friday"], opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
    },
    description: `${SALON_NAME} – Prémium női fodrász szalon Budapest szívében.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}
