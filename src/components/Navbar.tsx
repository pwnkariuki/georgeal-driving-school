import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChatCircle, CaretDown, X } from "@phosphor-icons/react";
import { PHONE_DISPLAY, PHONE_INTL, waLink } from "@/data/schoolData";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#benefits" },
  { label: "Branches", href: "#branches" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-slate-900 text-lg leading-tight">Georgeal</span>
              <span className="block text-[10px] text-emerald-600 font-semibold uppercase tracking-wider -mt-0.5">Driving School</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_INTL}`}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              <Phone size={16} weight="bold" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={waLink("Hi Georgeal! I want to enroll for driving lessons.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              <ChatCircle size={18} weight="fill" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <CaretDown size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={`tel:${PHONE_INTL}`}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700"
                >
                  <Phone size={16} weight="bold" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={waLink("Hi Georgeal! I want to enroll for driving lessons.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white text-sm font-semibold rounded-lg"
                >
                  <ChatCircle size={18} weight="fill" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
