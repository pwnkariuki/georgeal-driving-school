import { motion } from "framer-motion";
import { MapPin, Phone, WhatsappLogo, ArrowRight } from "@phosphor-icons/react";
import { BRANCHES, whatsAppLink, telLink } from "../data/sitemapData";
import { IMAGES } from "../data/schoolImages";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (p: PageKey) => void;
}

export default function HomeBranches({ onNavigate }: Props) {
  const featured = BRANCHES.filter((b) => b.region === "Eastlands").slice(0, 4);

  return (
    <section>
      <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">
        Find Us in Nairobi
      </h2>
      <p className="mt-1 text-[14px] text-slate-500">
        Multiple locations across Eastlands for your convenience.
      </p>

      <img
        src={IMAGES.branchClassroom}
        alt="Georgeal driving school branch classroom in Nairobi"
        className="mt-5 h-48 w-full rounded-2xl object-cover ring-1 ring-slate-100"
        loading="lazy"
      />

      {/* Branch cards grid */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {featured.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[14px] font-bold text-[#0A3D62]">{b.name}</p>
                <p className="mt-0.5 flex items-start gap-1 text-[11px] text-slate-500">
                  <MapPin size={12} className="mt-0.5 shrink-0 text-[#FF793F]" />
                  {b.landmark}
                </p>
              </div>
              {b.isHQ && (
                <span className="rounded-full bg-[#FF793F] px-2 py-0.5 text-[9px] font-bold text-white">
                  HQ
                </span>
              )}
            </div>
            <div className="mt-3 flex gap-2">
              <a
                href={telLink(b.phone)}
                className="flex items-center gap-1 rounded-lg bg-[#0A3D62] px-2.5 py-1.5 text-[11px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
              >
                <Phone size={11} weight="fill" /> Call
              </a>
              <a
                href={whatsAppLink(undefined, b.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg bg-[#25D366] px-2.5 py-1.5 text-[11px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
              >
                <WhatsappLogo size={11} weight="fill" /> WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all link */}
      <button
        onClick={() => onNavigate("branches")}
        className="mt-4 flex items-center gap-1 text-[13px] font-bold text-[#0A3D62] transition hover:underline"
      >
        View all branches <ArrowRight size={14} />
      </button>
    </section>
  );
}