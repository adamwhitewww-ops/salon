import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, CalendarDays, Phone } from "lucide-react";
import { SALON_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sikeres foglalás",
  robots: { index: false },
};

export default function SikeresPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen flex items-center justify-center bg-cream">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-display)] text-charcoal mb-4">
            Sikeres foglalás!
          </h1>
          <p className="text-charcoal-light mb-8 leading-relaxed">
            Az előleg fizetése sikeresen megtörtént. A foglalás részleteit
            e-mailben küldtük el neked. Várunk szeretettel a szalonunkban!
          </p>
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full bg-rose-500 text-white rounded-full py-3 px-6 font-semibold hover:bg-rose-600 transition-colors"
            >
              <CalendarDays size={18} />
              Vissza a főoldalra
            </Link>
            <a
              href={`tel:${SALON_PHONE}`}
              className="flex items-center justify-center gap-2 w-full border-2 border-rose-500 text-rose-500 rounded-full py-3 px-6 font-semibold hover:bg-rose-50 transition-colors"
            >
              <Phone size={18} />
              Hívj minket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
