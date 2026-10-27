import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  House, Car, Monitor, Buildings, Info, Star, Envelope,
  List, X, WhatsappLogo, Phone, ShieldCheck, CaretDown, Clock,
} from "@phosphor-icons/react";
import { NAV_ITEMS, CONTACT, WHATSAPP_LINK, telLink } from "../data/sitemapData";
import type { PageKey } from "../types";

const ICON_MAP: Record<string, React.FC<{ size?: number; weight?: "fill" | "bold" | "regular"; className?: string }>> = {
  House, Car, Monitor, Buildings, Info, Star, Envelope,
};

interface Props {
  active: PageKey;
  onNavigate: (page: PageKey) => void;
  viewMode: "site" | "sitemap";
  onToggleView: () => void;
}

export default function HeaderNav({ active, onNavigate, viewMode, onToggleView }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden bg-[#0A3D62] text-white md:block">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-1.5 text-[12px] sm:px-6">
          <div className="flex items-center gap-4">
            <a href={telLink(CONTACT.phone)} className="flex items-center gap-1.5 hover:text-[#FF793F]">
              <Phone size={13} weight="fill" /> {CONTACT.phone}
            </a>
            <span className="flex items-center gap-1.5 opacity-80">
              <Clock size={13} /> {CONTACT.hours}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold">
              <ShieldCheck size={13} weight="fill" className="text-[#25D366]" /> NTSA Certified
            </span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold text-[#25D366] hover:text-white">
              <WhatsappLogo size={14} weight="fill" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand */}
          <button onClick={() => onNavigate("home")} className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#0A3D62]">
              <Car size={18} weight="fill" className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-[14px] font-black leading-none text-[#0A3D62]">Georgeal</p>
              <p className="text-[10px] font-semibold leading-tight text-[#FF793F]">Driving School</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`flex items-center whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-semibold transition ${
                  active === item.key
                    ? "bg-[#0A3D62]/8 text-[#0A3D62]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0A3D62]"
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1 rounded-full bg-[#FF793F] px-1.5 py-0.5 text-[9px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2 text-[13px] font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:brightness-110 active:scale-[0.97]"
            >
              <WhatsappLogo size={16} weight="fill" /> WhatsApp Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href={telLink(CONTACT.phone)} className="grid h-10 w-10 place-items-center rounded-full bg-[#0A3D62]/10 text-[#0A3D62]">
              <Phone size={18} weight="fill" />
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#0A3D62]/10 text-[#0A3D62]"
            >
              <List size={20} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#0A3D62]">
                    <Car size={16} weight="fill" className="text-white" />
                  </div>
                  <p className="text-[14px] font-black text-[#0A3D62]">Georgeal</p>
                </div>
                <button onClick={() => setDrawerOpen(false)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-slate-100">
                  <X size={18} className="text-slate-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                {NAV_ITEMS.map((item) => {
                  const IconComp = ICON_MAP[item.icon];
                  return (
                    <button
                      key={item.key}
                      onClick={() => { onNavigate(item.key); setDrawerOpen(false); }}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-semibold transition ${
                        active === item.key
                          ? "bg-[#0A3D62] text-white"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {IconComp && <IconComp size={18} weight={active === item.key ? "fill" : "regular"} />}
                      {item.label}
                      {item.badge && (
                        <span className="ml-auto rounded-full bg-[#FF793F] px-2 py-0.5 text-[10px] font-bold text-white">{item.badge}</span>
                      )}
                    </button>
                  );
                })}

                <div className="mt-4 border-t border-slate-100 pt-4">
                  <button
                    onClick={() => { onToggleView(); setDrawerOpen(false); }}
                    className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-[13px] font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    <CaretDown size={14} /> {viewMode === "sitemap" ? "Switch to Live Site" : "View Sitemap"}
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-100 p-4 space-y-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-[14px] font-bold text-white">
                  <WhatsappLogo size={18} weight="fill" /> Chat on WhatsApp
                </a>
                <a href={telLink(CONTACT.phone)} className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0A3D62] py-3 text-[14px] font-bold text-[#0A3D62]">
                  <Phone size={16} weight="fill" /> Call {CONTACT.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}