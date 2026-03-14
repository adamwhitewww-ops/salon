"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SALON_NAME, SALON_PHONE } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={`text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {SALON_NAME}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  link.highlight
                    ? "bg-rose-500 text-white hover:bg-rose-600 shadow-md"
                    : pathname === link.href
                    ? scrolled
                      ? "text-rose-500 bg-rose-50"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-charcoal hover:text-rose-500 hover:bg-rose-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SALON_PHONE}`}
              className={`hidden sm:flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-charcoal hover:text-rose-500"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Phone size={16} />
              {SALON_PHONE}
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? "text-charcoal hover:bg-rose-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menü megnyitása"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-1 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                    link.highlight
                      ? "bg-rose-500 text-white text-center mt-2"
                      : pathname === link.href
                      ? "text-rose-500 bg-rose-50"
                      : scrolled
                      ? "text-charcoal hover:text-rose-500 hover:bg-rose-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${SALON_PHONE}`}
                className="flex items-center gap-2 px-4 py-3 text-base font-medium text-rose-500 sm:hidden"
              >
                <Phone size={18} />
                {SALON_PHONE}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
