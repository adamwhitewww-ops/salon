import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Szolgáltatások",
  description:
    "Fedezd fel szolgáltatásainkat: hajvágás, festés, balayage, melír, keratin kezelés, esküvői frizurák és még sok más. Árlista és részletek.",
  openGraph: {
    title: "Szolgáltatások | Bella Salon",
    description:
      "Hajvágás, festés, balayage, kezelések és esküvői frizurák Budapest szívében.",
  },
};

export default function SzolgaltatasokPage() {
  return <ServicesPageContent />;
}
