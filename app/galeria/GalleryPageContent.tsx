"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { GALLERY_IMAGES } from "@/lib/constants";

const categories = ["Összes", ...new Set(GALLERY_IMAGES.map((img) => img.category))];

export default function GalleryPageContent() {
  const [activeCategory, setActiveCategory] = useState("Összes");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "Összes"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Galéria"
            subtitle="Inspirálódj legutóbbi munkáinkból"
            light
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-rose-500 text-white shadow-md"
                    : "bg-cream text-charcoal hover:bg-rose-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <AnimatedSection key={`${image.src}-${index}`} delay={index * 0.05}>
              <button
                onClick={() => setLightboxIndex(index)}
                className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-full cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className="object-cover w-full h-64 md:h-72 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-white text-sm font-medium bg-rose-500/80 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                    <p className="text-white text-sm mt-2">{image.alt}</p>
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-rose-400 transition-colors cursor-pointer"
            aria-label="Bezárás"
          >
            <X size={32} />
          </button>
          <Image
            src={filteredImages[lightboxIndex].src.replace("w=600", "w=1200").replace("h=800", "h=900").replace("h=400", "h=900")}
            alt={filteredImages[lightboxIndex].alt}
            width={1200}
            height={900}
            className="max-h-[90vh] w-auto object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
