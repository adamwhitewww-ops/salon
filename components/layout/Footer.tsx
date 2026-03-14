import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import {
  SALON_NAME,
  SALON_PHONE,
  SALON_EMAIL,
  SALON_ADDRESS,
  OPENING_HOURS,
  SOCIAL_LINKS,
  NAV_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
              {SALON_NAME}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Prémium fodrász szalon Budapest szívében. Szakértő csapatunk
              gondoskodik róla, hogy mindig a legjobb formádat hozd.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Gyors linkek</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Elérhetőség</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{SALON_ADDRESS}</span>
              </li>
              <li>
                <a
                  href={`tel:${SALON_PHONE}`}
                  className="flex items-center gap-3 text-white/70 hover:text-rose-400 transition-colors"
                >
                  <Phone size={18} className="shrink-0 text-gold" />
                  {SALON_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SALON_EMAIL}`}
                  className="flex items-center gap-3 text-white/70 hover:text-rose-400 transition-colors"
                >
                  <Mail size={18} className="shrink-0 text-gold" />
                  {SALON_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock size={18} className="text-gold" />
              Nyitvatartás
            </h4>
            <ul className="space-y-2">
              {OPENING_HOURS.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between text-white/70 text-sm"
                >
                  <span>{item.day}</span>
                  <span
                    className={
                      item.hours === "Zárva" ? "text-rose-400" : ""
                    }
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} {SALON_NAME}. Minden jog
            fenntartva.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link
              href="/adatvedelem"
              className="hover:text-white transition-colors"
            >
              Adatvédelem
            </Link>
            <Link href="/aszf" className="hover:text-white transition-colors">
              ÁSZF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
