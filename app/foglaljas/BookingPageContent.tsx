"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import CalEmbed from "@/components/booking/CalEmbed";
import StripeDepositButton from "@/components/booking/StripeDepositButton";
import { CalendarDays, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <CalendarDays size={24} />,
    title: "Válassz időpontot",
    description: "Válaszd ki a neked megfelelő szolgáltatást és időpontot",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Előleg fizetése",
    description: "Fizess 3 000 Ft előleget a foglalás megerősítéséhez",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Kész!",
    description: "Megkapod a visszaigazolást e-mailben",
  },
];

function BookingContent() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const isPaymentStep = step === "payment";

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Időpontfoglalás"
            subtitle="Foglalj időpontot online pár egyszerű lépésben"
            light
          />
        </div>
      </div>

      {/* Steps indicator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {steps.map((s, index) => (
              <div
                key={s.title}
                className={`flex items-start gap-4 p-6 rounded-2xl transition-all ${
                  (index === 0 && !isPaymentStep) ||
                  (index === 1 && isPaymentStep)
                    ? "bg-rose-50 border-2 border-rose-200"
                    : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    (index === 0 && !isPaymentStep) ||
                    (index === 1 && isPaymentStep)
                      ? "bg-rose-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{s.title}</h3>
                  <p className="text-sm text-charcoal-light">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.2}>
          {isPaymentStep ? (
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-charcoal mb-4">
                Előleg fizetése
              </h2>
              <p className="text-charcoal-light mb-8">
                A foglalás megerősítéséhez kérjük, fizess 3 000 Ft előleget.
                Az előleg összege a végső árból levonásra kerül.
              </p>
              <StripeDepositButton />
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-charcoal mb-4">
                Válassz időpontot
              </h2>
              <p className="text-charcoal-light mb-8">
                Az alábbi naptárban válaszd ki a neked megfelelő szolgáltatást
                és időpontot. A foglalás után lehetőséged lesz az előleg
                kifizetésére.
              </p>
              <CalEmbed />
            </div>
          )}
        </AnimatedSection>

        {/* Info */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 bg-cream rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-charcoal mb-3">
              Fontos tudnivalók
            </h3>
            <ul className="space-y-2 text-charcoal-light text-sm">
              <li>• Az előleg összege (3 000 Ft) a végső árból levonásra kerül</li>
              <li>• Foglalás módosítása vagy lemondása legalább 24 órával az időpont előtt lehetséges</li>
              <li>• Késés esetén kérjük, telefonon jelezz minél előbb</li>
              <li>• 15 percet meghaladó késés esetén a foglalás automatikusan törlődik</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default function BookingPageContent() {
  return (
    <Suspense
      fallback={
        <div className="pt-28 pb-20 flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent" />
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
