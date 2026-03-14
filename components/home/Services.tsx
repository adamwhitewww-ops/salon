"use client";

import { Scissors, Palette, Sparkles, Wind, Heart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors size={32} />,
  Palette: <Palette size={32} />,
  Sparkles: <Sparkles size={32} />,
  Wind: <Wind size={32} />,
  Heart: <Heart size={32} />,
};

const serviceCards = [
  {
    icon: "Scissors",
    title: "Hajvágás",
    description: "Precíz vágástechnikák, amelyek kiemelik egyedi stílusodat és arcformádat.",
    price: "5 000 Ft-tól",
  },
  {
    icon: "Palette",
    title: "Festés & Színezés",
    description: "Balayage, melír, ombre – bármilyen árnyalat, amit csak elképzelsz.",
    price: "10 000 Ft-tól",
  },
  {
    icon: "Sparkles",
    title: "Kezelések",
    description: "Olaplex, keratin és botox kezelések a ragyogóan egészséges hajért.",
    price: "6 000 Ft-tól",
  },
  {
    icon: "Wind",
    title: "Styling & Formázás",
    description: "Professzionális berakás, lokni és szárítás minden alkalomra.",
    price: "4 500 Ft-tól",
  },
  {
    icon: "Heart",
    title: "Esküvői frizurák",
    description: "Álomfrizura a nagy napodra – próbával és tökéletes kivitelezéssel.",
    price: "15 000 Ft-tól",
  },
  {
    icon: "Sparkles",
    title: "Fejbőr kezelés",
    description: "Tisztító és tápláló terápia az egészséges fejbőrért és hajnövekedésért.",
    price: "6 000 Ft-tól",
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Szolgáltatásaink"
            subtitle="Minden, amire szükséged van a tökéletes hajért – egy helyen"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-gold font-semibold text-lg">
                  {service.price}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Button href="/szolgaltatasok" variant="primary" size="lg">
              Összes szolgáltatás megtekintése
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
