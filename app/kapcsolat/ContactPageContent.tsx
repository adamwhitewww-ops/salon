"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  SALON_PHONE,
  SALON_EMAIL,
  SALON_ADDRESS,
  OPENING_HOURS,
  SOCIAL_LINKS,
} from "@/lib/constants";

export default function ContactPageContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.error || "Hiba történt.");
      }
    } catch {
      setError("Hálózati hiba történt. Kérjük, próbáld újra.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Kapcsolat"
            subtitle="Kérdésed van? Írj nekünk, vagy gyere el személyesen!"
            light
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-charcoal mb-6">
                Írj nekünk
              </h2>

              {success ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    Üzenet elküldve!
                  </h3>
                  <p className="text-charcoal-light">
                    Hamarosan felvesszük veled a kapcsolatot.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                      Név *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                      placeholder="Teljes neved"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                      placeholder="email@pelda.hu"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                      Telefonszám
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                      placeholder="+36 30 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                      Üzenet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                      placeholder="Írd le kérdésedet vagy kérésedet..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-600 rounded-xl p-3 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-rose-500 text-white rounded-full py-4 px-6 font-semibold hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Küldés...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Üzenet küldése
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {/* Info cards */}
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-charcoal mb-6">
                  Elérhetőségeink
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Cím</p>
                      <p className="text-charcoal-light text-sm">{SALON_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Telefon</p>
                      <a href={`tel:${SALON_PHONE}`} className="text-charcoal-light text-sm hover:text-rose-500 transition-colors">
                        {SALON_PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">E-mail</p>
                      <a href={`mailto:${SALON_EMAIL}`} className="text-charcoal-light text-sm hover:text-rose-500 transition-colors">
                        {SALON_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-charcoal mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-gold" />
                  Nyitvatartás
                </h3>
                <div className="space-y-2">
                  {OPENING_HOURS.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-charcoal">{item.day}</span>
                      <span className={item.hours === "Zárva" ? "text-rose-500 font-medium" : "text-charcoal-light"}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-3xl shadow-sm p-8">
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-charcoal mb-4">
                  Kövess minket
                </h3>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-cream text-charcoal hover:bg-rose-500 hover:text-white transition-all text-sm font-medium"
                  >
                    Facebook
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-cream text-charcoal hover:bg-rose-500 hover:text-white transition-all text-sm font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-cream text-charcoal hover:bg-rose-500 hover:text-white transition-all text-sm font-medium"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Google Maps */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.54!2d19.05!3d47.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMwJzAwLjAiTiAxOcKwMDMnMDAuMCJF!5e0!3m2!1shu!2shu!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bella Salon térképen"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
