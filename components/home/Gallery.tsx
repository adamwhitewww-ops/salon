"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  const previewImages = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Munkáink"
            subtitle="Nézd meg legutóbbi munkáinkat és inspirálódj a következő frizurádhoz"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={index % 3 === 0 ? 800 : 400}
                  className="object-cover w-full h-64 md:h-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-white text-sm font-medium bg-rose-500/80 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                    <p className="text-white text-sm mt-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Button href="/galeria" variant="outline" size="lg">
              Teljes galéria megtekintése
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
