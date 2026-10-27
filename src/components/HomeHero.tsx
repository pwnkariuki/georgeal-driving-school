import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsappLogo, ShieldCheck, ArrowRight, MapPin, CarProfile } from "@phosphor-icons/react";
import { WHATSAPP_LINK } from "../data/sitemapData";
import { IMAGES } from "../data/schoolImages";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (p: PageKey) => void;
}

const HERO_SLIDES = [
  {
    src: IMAGES.heroDriving,
    alt: "Learner driving a dual-control training car with a Georgeal instructor in Nairobi",
  },
  {
    src: IMAGES.aboutFleet,
    alt: "Georgeal training fleet of dual-control cars lined up at the Nairobi depot",
  },
  {
    src: IMAGES.graduates,
    alt: "Proud Georgeal graduates celebrating after passing their NTSA driving test",
  },
];

export default function HomeHero({ onNavigate }: Props) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((i) => (i + 1) % HERO_SLIDES.length),
      5500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[520px] overflow-hidden rounded-3xl bg-[#0A3D62] text-white sm:min-h-[600px]">
      {/* Full-bleed crossfading background slideshow */}
      <AnimatePresence initial={false}>
        <motion.img
          key={slide}
          src={HERO_SLIDES[slide].src}
          alt={HERO_SLIDES[slide].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Dark navy gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/95 via-[#0A3D62]/80 to-[#0A3D62]/50" />

      {/* Additional bottom gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#062a45]/60 via-transparent to-transparent" />

      {/* Decorative gradient blobs (kept from original) */}
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FF793F]/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#25D366]/10 blur-3xl" />

      {/* Content layer */}
      <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-5 py-12 sm:px-10 sm:py-16 md:min-h-[600px] lg:px-16">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold backdrop-blur-sm"
          >
            <ShieldCheck size={14} weight="fill" className="text-[#25D366]" />
            NTSA Certified & Test-Ready Training
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-[28px] font-black leading-tight tracking-tight sm:text-5xl lg:text-[54px]"
          >
            Master Nairobi Roads.<br />
            <span className="text-[#FF793F]">Drive with Confidence.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-lg text-[14px] leading-relaxed text-white/80 sm:text-[15px]"
          >
            From Buruburu to CBD, we train safe drivers with patient instructors,
            modern dual-pedal cars, and flexible M-Pesa lipa polepole payments.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
              <CarProfile size={14} weight="fill" className="text-[#FF793F]" />
              Dual-Control Safety Fleet
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
              <ShieldCheck size={14} weight="fill" className="text-[#25D366]" />
              Learn with Zero Risk
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
              <MapPin size={14} weight="fill" className="text-[#FF793F]" />
              8 Branches in Nairobi
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:brightness-110 active:scale-[0.97]"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => onNavigate("driving-courses")}
              className="flex items-center gap-2 rounded-xl border-2 border-white/30 px-5 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition hover:bg-white/10 active:scale-[0.97]"
            >
              View Courses <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Location hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex items-center gap-1.5 text-[11px] text-white/50"
          >
            <MapPin size={12} className="text-[#FF793F]" />
            8 branches across Nairobi Eastlands & beyond
          </motion.div>
        </div>

      </div>
    </section>
  );
}