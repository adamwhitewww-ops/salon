import type { Metadata } from "next";
import BookingPageContent from "./BookingPageContent";

export const metadata: Metadata = {
  title: "Időpontfoglalás",
  description:
    "Foglalj időpontot online a Bella Salon-ba! Válaszd ki a szolgáltatást, időpontot, és fizetd ki az előleget kényelmesen.",
  openGraph: {
    title: "Időpontfoglalás | Bella Salon",
    description:
      "Online időpontfoglalás – gyors és egyszerű. Foglalj most!",
  },
};

export default function FoglaljasPage() {
  return <BookingPageContent />;
}
