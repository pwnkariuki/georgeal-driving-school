import { motion } from "framer-motion";
import { ShieldCheck, Check, ArrowRight, ChatCircle } from "@phosphor-icons/react";
import { trustMetrics, waLink } from "@/data/schoolData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HeroAndTrust() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92dvh] flex items-center bg-gradient-to-br from-slate-900 via-[#0F2942] to-emerald-900 overflow-hidden pt-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            >
              <ShieldCheck size={16} className="text-emerald-400" weight="fill" />
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                NTSA Accredited Driving School
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5"
            >
              Pass Your NTSA Driving Test on Your{" "}
              <span className="text-emerald-400">First Try</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
            >
              Friendly certified instructors, modern dual-pedal training cars, flexible schedules across Eastlands &amp; Nairobi CBD.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={waLink("Hi Georgeal! I want to start driving lessons. Which branch is closest to me?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 active:scale-[0.98]"
              >
                <ChatCircle size={20} weight="fill" />
                Chat on WhatsApp
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold rounded-xl transition-all active:scale-[0.98]"
              >
                Explore Courses &amp; Fees
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {["NTSA Accredited", "Free Learner's Handbook", "0% Hidden Fees"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                  <Check size={14} weight="bold" className="text-emerald-400" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="text-center lg:text-left"
              >
                <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}