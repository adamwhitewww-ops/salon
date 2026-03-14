"use client";

import { useEffect } from "react";
import { CalendarDays } from "lucide-react";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME;
const CAL_EVENT_SLUG = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG;

export default function CalEmbed() {
  useEffect(() => {
    if (!CAL_USERNAME) return;

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof window !== "undefined" && window.Cal) {
        const Cal = window.Cal as (action: string, config: Record<string, unknown>) => void;
        Cal("init", {});
        Cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink: `${CAL_USERNAME}/${CAL_EVENT_SLUG || ""}`,
          config: {
            layout: "month_view",
            theme: "light",
          },
        });

        Cal("ui", {
          styles: {
            branding: { brandColor: "#f43f5e" },
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!CAL_USERNAME) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-2xl">
        <CalendarDays size={48} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-semibold text-charcoal mb-2">
          Időpontfoglaló hamarosan
        </h3>
        <p className="text-charcoal-light max-w-md mx-auto">
          Az online foglalási rendszerünk jelenleg karbantartás alatt áll.
          Kérjük, hívj minket telefonon az időpont egyeztetéshez!
        </p>
      </div>
    );
  }

  return (
    <div
      id="cal-embed"
      className="min-h-[500px] rounded-2xl overflow-hidden"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
