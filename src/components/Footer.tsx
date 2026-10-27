import { Car, Phone, WhatsappLogo, MapPin, FacebookLogo, InstagramLogo, YoutubeLogo, ShieldCheck, Clock, CaretRight, FileText, Heart } from "@phosphor-icons/react";
import { NAV_ITEMS, DRIVING_COURSES, COMPUTER_COURSES, BRANCHES, CONTACT, WHATSAPP_LINK, telLink } from "../data/sitemapData";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (page: PageKey) => void;
  onNavigateBranch?: (branchId: string) => void;
  viewMode: "site" | "sitemap";
  onToggleView: () => void;
}

export default function Footer({ onNavigate, onNavigateBranch, viewMode, onToggleView }: Props) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#0A3D62] pb-24 text-white md:pb-8">
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Trust */}
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                <Car size={18} weight="fill" className="text-[#FF793F]" />
              </div>
              <div>
                <p className="text-[15px] font-black leading-none">Georgeal</p>
                <p className="text-[10px] font-semibold text-[#FF793F]">Driving School</p>
              </div>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-white/70">
              NTSA-accredited driving school serving Kenya since 2009. Patient instructors, modern fleet, flexible installment payments.
            </p>
            <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-semibold">
              <ShieldCheck size={14} weight="fill" className="text-[#25D366]" />
              NTSA Accreditation No. NTS/DS/2024/0891
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                <FacebookLogo size={15} />
              </a>
              <a href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                <InstagramLogo size={15} />
              </a>
              <a href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                <YoutubeLogo size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Driving Courses */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-wider text-[#FF793F]">Driving Courses</h4>
            <ul className="mt-3 space-y-2">
              {DRIVING_COURSES.slice(0, 4).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onNavigate("driving-courses")}
                    className="group flex items-center gap-1 text-left text-[12px] text-white/70 transition hover:text-white"
                  >
                    {c.category}: {c.title}
                    <CaretRight size={11} weight="bold" className="shrink-0 -translate-x-1 text-[#FF793F] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Computer & Packages */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-wider text-[#FF793F]">Computer Courses</h4>
            <ul className="mt-3 space-y-2">
              {COMPUTER_COURSES.slice(0, 4).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onNavigate("computer-courses")}
                    className="group flex items-center gap-1 text-left text-[12px] text-white/70 transition hover:text-white"
                  >
                    {c.title}
                    <CaretRight size={11} weight="bold" className="shrink-0 -translate-x-1 text-[#FF793F] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Branches & Contacts */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-wider text-[#FF793F]">Branches & Contacts</h4>
            <ul className="mt-3 space-y-2">
              {BRANCHES.slice(0, 3).map((b) => (
                <li key={b.id} className="flex items-start gap-2 text-[12px] text-white/70">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-[#FF793F]" />
                  <div>
                    <button
                      onClick={() => onNavigateBranch?.(b.id)}
                      className="group inline-flex items-center gap-1 text-left font-semibold text-white/90 transition hover:text-[#FF793F]"
                    >
                      {b.name}
                      <CaretRight size={10} weight="bold" className="shrink-0 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                    </button>
                    <a href={telLink(b.phone)} className="block hover:text-[#25D366]">{b.phone}</a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2.5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:brightness-110 active:scale-[0.98]">
                <WhatsappLogo size={16} weight="fill" /> Chat on WhatsApp
              </a>
              <a href={telLink(CONTACT.phone)} className="flex items-center gap-2 text-[12px] font-semibold text-white/80 hover:text-white">
                <Phone size={13} weight="fill" className="text-[#FF793F]" /> {CONTACT.phone} · {CONTACT.altPhone}
              </a>
              <p className="flex items-start gap-2 text-[12px] text-white/70">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#FF793F]" /> {CONTACT.address}
              </p>
              <p className="flex items-center gap-2 text-[12px] text-white/70">
                <Clock size={13} className="text-[#FF793F]" /> {CONTACT.hours}
              </p>
              <p className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/80">
                M-Pesa <span className="font-bold text-[#25D366]">{CONTACT.mpesaPaybill}</span> · {CONTACT.mpesaAccount}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Georgeal Driving School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleView}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                viewMode === "sitemap"
                  ? "bg-[#FF793F] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {viewMode === "sitemap" ? "Back to Live Site" : "Interactive Sitemap"}
            </button>
            <button
              onClick={() => onNavigate("pledge")}
              className="group inline-flex items-center gap-1 transition hover:text-white"
            >
              <Heart size={12} weight="fill" className="text-[#FF793F]" /> Road Safety Pledge
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onNavigate("terms")}
              className="group inline-flex items-center gap-1 transition hover:text-white"
            >
              <FileText size={12} weight="fill" className="text-[#FF793F]" /> Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}