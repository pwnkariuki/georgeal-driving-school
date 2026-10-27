import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ChatCircle, ArrowRight, Star, Check, Monitor, Palette, Code, Calculator, Heart } from "@phosphor-icons/react";
import { branches, computerPackages, testimonials, waLink, PHONE_INTL, PHONE_DISPLAY } from "@/data/schoolData";

const regions = ["All", "Eastlands", "CBD", "North"] as const;

const pkgIcons: Record<string, React.ReactNode> = {
  monitor: <Monitor size={20} weight="duotone" className="text-emerald-600" />,
  palette: <Palette size={20} weight="duotone" className="text-emerald-600" />,
  code: <Code size={20} weight="duotone" className="text-emerald-600" />,
  calculator: <Calculator size={20} weight="duotone" className="text-emerald-600" />,
};

export default function BranchesAndTeasers() {
  const [region, setRegion] = useState<string>("All");
  const filtered = region === "All" ? branches : branches.filter((b) => b.region === region);

  return (
    <>
      {/* Branches Section */}
      <section id="branches" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Find Your Nearest Branch
            </h2>
            <p className="text-slate-500">
              15+ branches across Nairobi. Choose one close to home or work.
            </p>
          </div>

          {/* Region Filter */}
          <div className="flex justify-center gap-2 mb-8">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  region === r
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Branch Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <MapPin size={18} weight="fill" className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{branch.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{branch.landmark}</p>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-slate-500 mb-4">
                  <p className="flex items-center gap-1.5">
                    <Phone size={12} /> {branch.phone} &bull; {branch.contactPerson}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <ArrowRight size={12} /> {branch.hours}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(`Hi! I want to visit the ${branch.name} branch.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    <ChatCircle size={13} weight="fill" />
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(branch.landmark + " Nairobi")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-slate-200 hover:border-emerald-300 text-slate-700 text-xs font-medium rounded-lg transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Computer Packages Teaser */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-slate-900 to-[#0F2942]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Boost Your Career: Digital Skills &amp; Computer Packages
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Enroll in driving + computing combo and unlock special student discounts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {computerPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                  {pkgIcons[pkg.icon]}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{pkg.title}</h3>
                <p className="text-xs text-slate-400 mb-3">{pkg.description}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md">
                  <Heart size={11} weight="fill" /> {pkg.comboDiscount}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Student Success Stories
            </h2>
            <p className="text-slate-500">
              Real reviews from real graduates across our Nairobi branches.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      weight={idx < t.rating ? "fill" : "regular"}
                      className={idx < t.rating ? "text-amber-400" : "text-slate-200"}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-slate-50">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-emerald-700">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">{t.name}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1">
                      {t.branch}
                      {t.verified && <Check size={11} weight="bold" className="text-emerald-500" />}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Ready to Get Your Driving Licence?
            </h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Chat with us now and get a free consultation. We will match you with the nearest branch and best schedule.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink("Hi Georgeal! I am ready to start driving lessons. Can you help me choose a branch and schedule?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
              >
                <ChatCircle size={20} weight="fill" />
                Start on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_INTL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-all active:scale-[0.98]"
              >
                <Phone size={18} weight="bold" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
