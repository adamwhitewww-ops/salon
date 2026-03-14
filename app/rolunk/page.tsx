import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { TEAM_MEMBERS, SALON_NAME } from "@/lib/constants";
import { Award, Heart, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Rólunk",
  description: `Ismerd meg a ${SALON_NAME} csapatát! 15+ év tapasztalat, szenvedélyes fodrász szakemberek, akik a te szépségedért dolgoznak.`,
  openGraph: {
    title: `Rólunk | ${SALON_NAME}`,
    description: "Ismerd meg csapatunkat és történetünket!",
  },
};

const values = [
  {
    icon: <Heart size={28} />,
    title: "Szenvedély",
    description: "Imádjuk, amit csinálunk. Minden vendég számít, minden frizura egyedi alkotás.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Minőség",
    description: "Csak prémium termékeket használunk, és folyamatosan képezzük magunkat.",
  },
  {
    icon: <Users size={28} />,
    title: "Személyre szabás",
    description: "Minden vendégünkkel egyedi konzultációt tartunk a tökéletes eredményért.",
  },
  {
    icon: <Award size={28} />,
    title: "Tapasztalat",
    description: "15+ év szakmai tapasztalat és számtalan elégedett vendég áll mögöttünk.",
  },
];

export default function RolunkPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Rólunk"
            subtitle="Ismerd meg a csapatot, aki gondoskodik a szépségedről"
            light
          />
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop"
                alt="Bella Salon belső tér"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">
              Történetünk
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-charcoal mb-6">
              Egy álomból született szalon
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-4">
              A {SALON_NAME}-t 2010-ben alapította Kovács Anna, azzal a
              céllal, hogy egy olyan helyet hozzon létre Budapest szívében, ahol
              a nők valóban kényeztethetik magukat.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed mb-4">
              Azóta csapatunk négy főre bővült, és több mint 10 000 elégedett
              vendéget szolgáltunk ki. Büszkék vagyunk arra, hogy folyamatosan
              fejlődünk, követjük a nemzetközi trendeket, és személyre szabott
              megoldásokat kínálunk.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Szalonunk elegáns, barátságos légkörével és prémium
              termékeivel garantáljuk, hogy minden látogatás egy különleges
              élmény legyen.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Values */}
      <div className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Értékeink"
              subtitle="Amiben hiszünk, és ami vezérel minket nap mint nap"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <SectionTitle
            title="Csapatunk"
            subtitle="Ismerd meg a szakembereket, akik a szépségedért dolgoznak"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-rose-500 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-charcoal-light text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-cream text-charcoal-light px-2 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-charcoal mb-4">
              Gyere el hozzánk!
            </h2>
            <p className="text-charcoal-light mb-8">
              Foglalj időpontot, és tapasztald meg a {SALON_NAME} élményt!
            </p>
            <Button href="/foglaljas" variant="primary" size="lg">
              Időpontfoglalás
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
