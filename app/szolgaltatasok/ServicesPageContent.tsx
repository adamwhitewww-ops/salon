"use client";

import { Scissors, Palette, Sparkles, Wind, Heart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors size={28} />,
  Palette: <Palette size={28} />,
  Sparkles: <Sparkles size={28} />,
  Wind: <Wind size={28} />,
  Heart: <Heart size={28} />,
};

export default function ServicesPageContent() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Szolgáltatásaink"
            subtitle="Teljes árlista és szolgáltatásleírások – válaszd ki a számodra tökéleteset"
            light
          />
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {SERVICES.map((category, catIndex) => (
          <AnimatedSection key={category.id} delay={catIndex * 0.1}>
            <div className="mb-16 last:mb-0">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500">
                  {iconMap[category.icon]}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-charcoal">
                    {category.category}
                  </h2>
                </div>
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-rose-100 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-charcoal group-hover:text-rose-500 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-gold font-bold text-lg whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-charcoal-light text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-charcoal-light bg-cream px-3 py-1 rounded-full">
                        ⏱ {item.duration}
                      </span>
                      <Button
                        href="/foglaljas"
                        variant="ghost"
                        size="sm"
                        className="text-rose-500 hover:text-rose-600"
                      >
                        Foglalás →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-charcoal mb-4">
              Nem találod, amit keresel?
            </h2>
            <p className="text-charcoal-light mb-8">
              Egyedi igényeidhez személyre szabott megoldást kínálunk. Vedd fel
              velünk a kapcsolatot, és segítünk megtalálni a tökéletes
              szolgáltatást!
            </p>
            <Button href="/kapcsolat" variant="primary" size="lg">
              Kapcsolatfelvétel
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
