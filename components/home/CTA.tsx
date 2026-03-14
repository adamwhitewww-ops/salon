"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <p className="text-rose-200 tracking-widest uppercase text-sm font-medium mb-4">
            Ne habozz
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] mb-6">
            Készen állsz a változásra?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Foglalj időpontot online pár kattintással, és engedd, hogy
            gondoskodjunk a hajadról. Első foglaláshoz csupán 3 000 Ft előleg
            szükséges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/foglaljas"
              variant="secondary"
              size="lg"
              className="bg-white text-rose-600 hover:bg-cream hover:text-rose-700"
            >
              Online foglalás
            </Button>
            <Button
              href="/kapcsolat"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-rose-600"
            >
              Kapcsolatfelvétel
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
