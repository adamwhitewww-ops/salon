import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Vedd fel velünk a kapcsolatot! Címünk: 1051 Budapest, Váci utca 12. Telefon: +36 1 234 5678. Online kapcsolatfelvételi űrlap.",
  openGraph: {
    title: "Kapcsolat | Bella Salon",
    description:
      "Kérdésed van? Írj nekünk, vagy hívj minket! Budapest, Váci utca 12.",
  },
};

export default function KapcsolatPage() {
  return <ContactPageContent />;
}
