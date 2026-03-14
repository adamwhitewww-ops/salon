"use client";

import { useState } from "react";
import { CreditCard, Shield, Loader2 } from "lucide-react";
import { DEPOSIT_AMOUNT } from "@/lib/constants";

export default function StripeDepositButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: "Foglalási előleg",
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Nem sikerült létrehozni a fizetési munkamenetet.");
      }
    } catch {
      setError("Hálózati hiba történt. Kérjük, próbáld újra.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-cream rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-charcoal font-medium">Foglalási előleg</span>
          <span className="text-2xl font-bold text-rose-500">
            {DEPOSIT_AMOUNT.toLocaleString("hu-HU")} Ft
          </span>
        </div>
        <p className="text-sm text-charcoal-light">
          Az előleg a szolgáltatás teljes árából levonásra kerül. A fennmaradó
          összeget a szalonban kell rendezni.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 rounded-xl p-4 mb-4 text-sm">
          {error}
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-rose-500 text-white rounded-full py-4 px-6 font-semibold text-lg hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Átirányítás...
          </>
        ) : (
          <>
            <CreditCard size={20} />
            Előleg fizetése – {DEPOSIT_AMOUNT.toLocaleString("hu-HU")} Ft
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 mt-4 text-charcoal-light text-sm">
        <Shield size={16} />
        <span>Biztonságos fizetés a Stripe-on keresztül</span>
      </div>
    </div>
  );
}
