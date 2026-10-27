import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass, MapPin, Phone, WhatsappLogo, NavigationArrow,
  GridFour, List, Clock, User, X, ArrowRight, Info, Crosshair, Buildings,
} from "@phosphor-icons/react";
import { BRANCHES } from "../data/sitemapData";
import type { Branch, PageKey } from "../types";

interface Props {
  onNavigate: (p: PageKey) => void;
  targetBranchId?: string;
}

const whatsAppFor = (b: Branch) => {
  const msg = `Hello Georgeal Driving School! I would like to enquire about the ${b.name} branch. Is there an active slot available for lessons?`;
  return `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(msg)}`;
};
const telHref = (p: string) => `tel:${p.replace(/\s/g, "")}`;
const q = (b: Branch) => encodeURIComponent(b.mapQuery || `${b.name}, Nairobi`);
const gSearch = (b: Branch) => `https://www.google.com/maps/search/?api=1&query=${q(b)}`;
const gDir = (b: Branch) => `https://www.google.com/maps/dir/?api=1&destination=${q(b)}`;
const appleMaps = (b: Branch) => `https://maps.apple.com/?q=${q(b)}`;
const mapEmbed = (b: Branch) => `https://maps.google.com/maps?q=${q(b)}&z=15&output=embed`;

export default function BranchesView({ onNavigate, targetBranchId }: Props) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [active, setActive] = useState<Branch | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    if (!targetBranchId) return;
    const b = BRANCHES.find((x) => x.id === targetBranchId);
    if (b) {
      setRegion("All");
      setSearch(b.name);
      setFocused(b.name);
    }
  }, [targetBranchId]);

  const regions = useMemo(() => ["All", ...Array.from(new Set(BRANCHES.map((b) => b.region)))], []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return BRANCHES.filter((b) => {
      const inRegion = region === "All" || b.region === region;
      const hit =
        !term ||
        [b.name, b.region, b.landmark, b.town, b.contactPerson].some((v) =>
          (v || "").toLowerCase().includes(term)
        );
      return inRegion && hit;
    });
  }, [search, region]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Intro banner */}
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A3D62] to-[#0A3D62]/85 p-6 text-white sm:p-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#FF793F]">
          <Buildings size={15} weight="fill" /> Our Branches
        </div>
        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
          We have branches across Nairobi and its environs for your convenience.
        </h1>
        <p className="mt-2 max-w-[60ch] text-[13px] leading-relaxed text-white/70">
          From Eastlands to the CBD, Kangundo Road, Thika and Langata, there is a Georgeal training point near you.
        </p>
      </div>

      {/* Advisory notice */}
      <div className="flex items-start gap-3 rounded-2xl border border-[#FF793F]/30 bg-[#FF793F]/10 p-4">
        <Info size={20} weight="fill" className="mt-0.5 shrink-0 text-[#FF793F]" />
        <p className="text-[13px] leading-relaxed text-[#8a4a1a]">
          Students should confirm the nearest active branch and slot availability when enquiring.
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by branch, road or neighborhood"
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-[13px] text-slate-700 outline-none transition focus:border-[#0A3D62]"
            />
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1">
            <button
              onClick={() => setView("grid")}
              aria-label="Grid view"
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-bold transition ${view === "grid" ? "bg-[#0A3D62] text-white" : "text-slate-500 hover:bg-slate-100"}`}
            >
              <GridFour size={15} /> Grid
            </button>
            <button
              onClick={() => setView("list")}
              aria-label="List view"
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-bold transition ${view === "list" ? "bg-[#0A3D62] text-white" : "text-slate-500 hover:bg-slate-100"}`}
            >
              <List size={15} /> List
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`rounded-full px-4 py-2 text-[12px] font-bold transition ${region === r ? "bg-[#0A3D62] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Focused branch banner (from a footer deep-link) */}
      {focused && (
        <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-[#FF793F]/30 bg-[#FF793F]/10 px-4 py-3 sm:flex-row sm:items-center">
          <p className="flex items-center gap-2 text-[13px] font-semibold text-[#8a4a1a]">
            <Crosshair size={16} weight="fill" className="text-[#FF793F]" /> Showing your selected branch: {focused}
          </p>
          <button
            onClick={() => { setSearch(""); setRegion("All"); setFocused(null); }}
            className="shrink-0 rounded-lg bg-[#0A3D62] px-3 py-1.5 text-[12px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
          >
            View all branches
          </button>
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
          <MagnifyingGlass size={32} className="mx-auto text-slate-300" />
          <p className="mt-3 text-[14px] font-bold text-[#0A3D62]">No branches match your search</p>
          <p className="mt-1 text-[12px] text-slate-500">Try a different keyword or pick another region filter.</p>
          <button
            onClick={() => { setSearch(""); setRegion("All"); }}
            className="mt-4 rounded-lg bg-[#0A3D62] px-4 py-2 text-[12px] font-bold text-white transition hover:brightness-110"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className={view === "grid" ? "grid gap-4 sm:grid-cols-2" : "space-y-3"}>
          {filtered.map((b, i) => (
            <BranchCard key={b.id} branch={b} index={i} view={view} onDirections={() => setActive(b)} />
          ))}
        </div>
      )}

      {/* Nearest-branch helper */}
      <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:flex-row">
        <div>
          <p className="text-[14px] font-bold text-[#0A3D62]">Not sure which branch is closest to you?</p>
          <p className="text-[12px] text-slate-500">Send us your location and we will recommend the nearest active training point.</p>
        </div>
        <button
          onClick={() => onNavigate("contact")}
          className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#0A3D62] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
        >
          Find my branch <ArrowRight size={15} />
        </button>
      </div>

      <DirectionsModal branch={active} onClose={() => setActive(null)} />
    </motion.div>
  );
}

function BranchCard({ branch, index, view, onDirections }: { branch: Branch; index: number; view: "grid" | "list"; onDirections: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index, 8) * 0.05, duration: 0.3 }}
      className={`rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md ${view === "list" ? "sm:flex sm:items-start sm:justify-between sm:gap-4" : ""}`}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[15px] font-bold text-[#0A3D62]">{branch.name}</p>
          {branch.isHQ && (
            <span className="rounded-full bg-[#FF793F] px-2 py-0.5 text-[9px] font-bold text-white">MAIN HQ</span>
          )}
        </div>
        <p className="mt-2 flex items-start gap-1.5 text-[12px] text-slate-500">
          <MapPin size={13} className="mt-0.5 shrink-0 text-[#FF793F]" /> {branch.landmark}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-slate-500">
          <span className="flex items-center gap-1.5"><Clock size={13} /> {branch.hours}</span>
          {branch.contactPerson && (
            <span className="flex items-center gap-1.5"><User size={13} /> {branch.contactPerson}</span>
          )}
        </div>
      </div>

      <div className={`mt-4 flex flex-wrap gap-2 ${view === "list" ? "sm:mt-0 sm:shrink-0" : ""}`}>
        <a
          href={telHref(branch.phone)}
          className="flex items-center gap-1.5 rounded-lg bg-[#0A3D62] px-3 py-2 text-[12px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
        >
          <Phone size={13} weight="fill" /> Call
        </a>
        <a
          href={whatsAppFor(branch)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-[12px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
        >
          <WhatsappLogo size={13} weight="fill" /> WhatsApp
        </a>
        <button
          onClick={onDirections}
          className="flex items-center gap-1.5 rounded-lg border border-[#0A3D62]/20 bg-[#0A3D62]/5 px-3 py-2 text-[12px] font-bold text-[#0A3D62] transition hover:bg-[#0A3D62]/10 active:scale-[0.97]"
        >
          <NavigationArrow size={13} weight="fill" /> Get Directions
        </button>
      </div>
    </motion.div>
  );
}

function DirectionsModal({ branch, onClose }: { branch: Branch | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {branch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-xl sm:rounded-3xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[16px] font-bold text-[#0A3D62]">{branch.name}</p>
                <p className="mt-1 flex items-start gap-1.5 text-[12px] text-slate-500">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-[#FF793F]" /> {branch.landmark}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
              <iframe
                title={`Map to ${branch.name}`}
                src={mapEmbed(branch)}
                loading="lazy"
                className="h-52 w-full"
              />
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a href={gDir(branch)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#0A3D62] px-4 py-3 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]">
                <NavigationArrow size={16} weight="fill" /> Google Maps Route
              </a>
              <a href={appleMaps(branch)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-bold text-[#0A3D62] transition hover:bg-slate-50 active:scale-[0.98]">
                <Crosshair size={16} weight="fill" /> Apple Maps
              </a>
              <a href={gSearch(branch)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-bold text-[#0A3D62] transition hover:bg-slate-50 active:scale-[0.98]">
                <MapPin size={16} weight="fill" /> Open in Maps
              </a>
              <a href={whatsAppFor(branch)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]">
                <WhatsappLogo size={16} weight="fill" /> WhatsApp Branch
              </a>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-[12px] text-slate-500">
              <span className="flex items-center gap-1.5"><Clock size={13} /> {branch.hours}</span>
              <a href={telHref(branch.phone)} className="flex items-center gap-1.5 font-bold text-[#0A3D62]">
                <Phone size={13} weight="fill" /> {branch.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}