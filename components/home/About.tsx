"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const stats = [
  { value: "15+", label: "Év tapasztalat" },
  { value: "10 000+", label: "Elégedett vendég" },
  { value: "4", label: "Szakértő fodrász" },
  { value: "5.0", label: "Google értékelés" },
];

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop"
                  alt="Bella Salon belső tér"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-rose-500 text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <p className="text-3xl font-bold font-[family-name:var(--font-display)]">15+</p>
                <p className="text-sm text-white/80">Év tapasztalat</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">
              Rólunk
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] mb-6 text-charcoal">
              Ahol a szépség és a <span className="text-rose-500">szakértelem</span> találkozik
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-6">
              A Bella Salon 2010 óta Budapest egyik legkedveltebb női fodrász
              szalonja. Csapatunk folyamatosan képzi magát, hogy a legújabb
              trendeket és technikákat kínálhassuk vendégeinknek.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed mb-8">
              Nálunk nem csupán frizurát kapsz – egy komplett élményt. A
              pillanattól, hogy belépsz, egészen addig, míg mosolyogva távozol,
              gondoskodunk a kényelmedről.
            </p>
            <Button href="/rolunk" variant="secondary" size="lg">
              Ismerd meg csapatunkat
            </Button>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-cream"
              >
                <p className="text-3xl md:text-4xl font-bold text-rose-500 font-[family-name:var(--font-display)]">
                  {stat.value}
                </p>
                <p className="text-charcoal-light mt-1 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
