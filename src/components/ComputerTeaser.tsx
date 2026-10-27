import { motion } from "framer-motion";
import { Monitor, Sparkle, ArrowRight } from "@phosphor-icons/react";
import { COMPUTER_COURSES, whatsAppLink } from "../data/sitemapData";
import { IMAGES } from "../data/schoolImages";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (p: PageKey) => void;
}

export default function ComputerTeaser({ onNavigate }: Props) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-[#0A3D62] to-[#0d4f7a] p-5 text-white shadow-sm sm:p-7"
      >
        {/* Decorative dot pattern */}
        <div className="absolute right-4 top-4 grid grid-cols-3 gap-1.5 opacity-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
            <Monitor size={18} weight="fill" />
          </div>
          <span className="rounded-full bg-[#FF793F] px-2.5 py-0.5 text-[10px] font-bold">
            BUNDLE DEAL
          </span>
        </div>

        <h2 className="mt-4 text-[20px] font-black tracking-tight sm:text-[24px]">
          Boost Your Career with Computer Skills
        </h2>
        <p className="mt-2 max-w-md text-[13px] leading-relaxed text-white/70">
          ICDL Packages, QuickBooks, Graphic Design & more. Perfect for school
          leavers and Eastlands youth building a future. Combine with your
          driving course and save.
        </p>

        {/* Mini topic chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {COMPUTER_COURSES.slice(0, 3).map((c) => (
            <span
              key={c.id}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/80"
            >
              {c.title}
            </span>
          ))}
        </div>

        <img
          src={IMAGES.computerLab}
          alt="Students learning in a modern Georgeal computer training lab"
          className="mt-4 h-36 w-full rounded-xl object-cover ring-1 ring-white/15"
          loading="lazy"
        />

        {/* Actions */}
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={whatsAppLink("Computer Packages")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition hover:brightness-110 active:scale-[0.97]"
          >
            <Sparkle size={14} weight="fill" /> Enquire Now
          </a>
          <button
            onClick={() => onNavigate("computer-courses")}
            className="flex items-center gap-1.5 rounded-xl border border-white/30 px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-white/10 active:scale-[0.97]"
          >
            See All Courses <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}