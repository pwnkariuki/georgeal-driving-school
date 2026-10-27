import { motion } from "framer-motion";
import { House, Car, Monitor, Buildings, Info, Star, Envelope, WhatsappLogo, Phone, ArrowRight, ShieldCheck } from "@phosphor-icons/react";
import { NAV_ITEMS, DRIVING_COURSES, BRANCHES, CONTACT } from "../data/sitemapData";
import type { PageKey } from "../types";

const PAGE_ICONS: Record<string, React.FC<{ size?: number; weight?: "fill" | "bold" | "regular"; className?: string }>> = {
  House, Car, Monitor, Buildings, Info, Star, Envelope,
};

interface Props {
  onNavigate: (page: PageKey) => void;
}

export default function SitemapVisualizer({ onNavigate }: Props) {
  return (
    <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A3D62]/10 px-3 py-1 text-[11px] font-bold text-[#0A3D62]">
          <ShieldCheck size={13} weight="fill" /> Architecture Inspector
        </span>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">
          Interactive Sitemap
        </h2>
        <p className="mt-1 text-[14px] text-slate-500">
          Navigate the full information architecture. Click any node to preview that page.
        </p>
      </div>

      {/* Desktop Nav Flow */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-[11px] font-black uppercase tracking-wider text-[#FF793F]">Desktop Navigation Flow</h3>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 rounded-xl bg-[#0A3D62] px-4 py-2.5 text-white"
          >
            <Car size={16} weight="fill" />
            <span className="text-[13px] font-bold">Georgeal DS</span>
          </motion.div>
          <ArrowRight size={16} className="text-slate-300" />
          {NAV_ITEMS.map((item, i) => {
            const Icon = PAGE_ICONS[item.icon];
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <button
                  onClick={() => onNavigate(item.key)}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-[12px] font-semibold text-slate-700 transition hover:border-[#0A3D62] hover:bg-[#0A3D62]/5 hover:text-[#0A3D62]"
                >
                  {Icon && <Icon size={14} />}
                  {item.label}
                  {item.badge && <span className="rounded-full bg-[#FF793F] px-1.5 text-[9px] font-bold text-white">{item.badge}</span>}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Page Hierarchy Tree */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Pages */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-[11px] font-black uppercase tracking-wider text-[#FF793F]">Page Routes & Content</h3>
          <div className="mt-4 space-y-3">
            {NAV_ITEMS.map((item, i) => {
              const Icon = PAGE_ICONS[item.icon];
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="group cursor-pointer rounded-xl border border-slate-100 p-4 transition hover:border-[#0A3D62]/30 hover:shadow-md"
                  onClick={() => onNavigate(item.key)}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0A3D62]/10 text-[#0A3D62] transition group-hover:bg-[#0A3D62] group-hover:text-white">
                      {Icon && <Icon size={18} weight="fill" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] font-bold text-[#0A3D62]">{item.label}</p>
                      <p className="text-[11px] text-slate-500">/{item.key}</p>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0A3D62]" />
                  </div>
                  {item.key === "driving-courses" && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {DRIVING_COURSES.map((c) => (
                        <span key={c.id} className="rounded-full bg-[#FF793F]/10 px-2 py-0.5 text-[10px] font-semibold text-[#FF793F]">
                          {c.category}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.key === "branches" && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {[...new Set(BRANCHES.map((b) => b.town))].map((t) => (
                        <span key={t} className="rounded-full bg-[#0A3D62]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0A3D62]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Conversion Funnel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-[11px] font-black uppercase tracking-wider text-[#FF793F]">Conversion CTAs & Mobile Flow</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl bg-[#25D366]/10 p-4">
              <div className="flex items-center gap-2">
                <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
                <p className="text-[13px] font-bold text-[#25D366]">WhatsApp Primary CTA</p>
              </div>
              <p className="mt-2 text-[12px] text-slate-600">
                Appears in: Header (desktop), Drawer (mobile), Bottom Bar (mobile), Hero, Course Cards, Footer
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Preset message: "Hello Georgeal! I am interested in..."
              </p>
            </div>

            <div className="rounded-xl bg-[#0A3D62]/10 p-4">
              <div className="flex items-center gap-2">
                <Phone size={18} weight="fill" className="text-[#0A3D62]" />
                <p className="text-[13px] font-bold text-[#0A3D62]">Tap-to-Call</p>
              </div>
              <p className="mt-2 text-[12px] text-slate-600">
                Numbers: {CONTACT.phone}, {CONTACT.altPhone}
              </p>
              <p className="mt-1 text-[11px] text-slate-400">Appears in: Utility bar, Mobile bottom bar, Branch cards, Footer</p>
            </div>

            <div className="rounded-xl bg-[#FF793F]/10 p-4">
              <div className="flex items-center gap-2">
                <Envelope size={18} weight="fill" className="text-[#FF793F]" />
                <p className="text-[13px] font-bold text-[#FF793F]">Enquiry Form</p>
              </div>
              <p className="mt-2 text-[12px] text-slate-600">
                Fields: Name, Phone, Course, Branch, Time Slot
              </p>
              <p className="mt-1 text-[11px] text-slate-400">Appears in: Contact page, Mobile bottom bar trigger</p>
            </div>

            {/* Mobile Bottom Bar Diagram */}
            <div className="mt-4 rounded-xl border-2 border-dashed border-slate-200 p-4">
              <p className="text-[11px] font-black uppercase text-slate-400">Mobile Sticky Bottom Bar</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Call", "WhatsApp", "Enquire"].map((label, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`flex flex-col items-center gap-1 rounded-lg py-3 text-[11px] font-bold ${
                      i === 0 ? "bg-[#0A3D62]/10 text-[#0A3D62]" : i === 1 ? "bg-[#25D366]/10 text-[#25D366]" : "bg-[#FF793F]/10 text-[#FF793F]"
                    }`}
                  >
                    {i === 0 && <Phone size={16} weight="fill" />}
                    {i === 1 && <WhatsappLogo size={16} weight="fill" />}
                    {i === 2 && <Envelope size={16} weight="fill" />}
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Architecture */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-[11px] font-black uppercase tracking-wider text-[#FF793F]">Footer Architecture (4 Columns)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Brand & Trust", items: ["Logo", "NTSA Accreditation", "Mission", "Social Links"] },
            { title: "Driving Courses", items: ["Class A", "Class B (Manual/Auto)", "Class C1", "Class D PSV", "Refresher"] },
            { title: "Computer & Packages", items: ["Basic Computer", "Graphic Design", "Accounting", "Bundle Deal"] },
            { title: "Branches & Contacts", items: ["Phone Directory", "WhatsApp", "Addresses", "M-Pesa Guide"] },
          ].map((col) => (
            <div key={col.title} className="rounded-xl bg-slate-50 p-4">
              <p className="text-[12px] font-bold text-[#0A3D62]">{col.title}</p>
              <ul className="mt-2 space-y-1">
                {col.items.map((item) => (
                  <li key={item} className="text-[11px] text-slate-500">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
