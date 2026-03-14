import type { Metadata } from "next";
import GalleryPageContent from "./GalleryPageContent";

export const metadata: Metadata = {
  title: "Galéria",
  description:
    "Nézd meg legutóbbi munkáinkat! Hajvágás, festés, balayage, esküvői frizurák és stílus inspirációk a Bella Salon-tól.",
  openGraph: {
    title: "Galéria | Bella Salon",
    description:
      "Inspiráló hajfrizurák és színek – válogass munkáink között!",
  },
};

export default function GaleriaPage() {
  return <GalleryPageContent />;
}
