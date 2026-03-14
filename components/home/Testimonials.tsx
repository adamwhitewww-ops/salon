"use client";

import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Vendégeink mondták"
            subtitle="Több ezer elégedett vendég nem tévedhet – olvasd el véleményeiket"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.15}>
              <div className="bg-cream rounded-3xl p-8 h-full flex flex-col relative">
                <Quote
                  size={40}
                  className="text-rose-200 absolute top-6 right-6"
                />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="text-charcoal-light leading-relaxed flex-grow mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-charcoal/10">
                  <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-charcoal-light text-xs">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
