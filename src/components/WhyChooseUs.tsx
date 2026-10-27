import { motion } from "framer-motion";
import { ShieldCheck, CurrencyCircleDollar, Users, CarSimple } from "@phosphor-icons/react";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "NTSA Certified & Test-Ready",
    desc: "Every lesson follows the official NTSA curriculum. We book your PDL and exam so you walk in fully prepared.",
    accent: "bg-[#25D366]/10 text-[#25D366]",
  },
  {
    icon: CurrencyCircleDollar,
    title: "M-Pesa Lipa Polepole",
    desc: "No lump sum needed. Pay in 3-8 easy installments via M-Pesa paybill while you learn. Budget-friendly for everyone.",
    accent: "bg-[#FF793F]/10 text-[#FF793F]",
  },
  {
    icon: Users,
    title: "Patient & Seasoned Instructors",
    desc: "Our trainers average 8+ years experience. They teach at your pace, whether it is your first time or a refresher.",
    accent: "bg-[#0A3D62]/10 text-[#0A3D62]",
  },
  {
    icon: CarSimple,
    title: "Modern Dual-Pedal Fleet",
    desc: "Well-maintained automatic and manual cars with dual controls for safety. Highway, hill, and night driving included.",
    accent: "bg-[#0A3D62]/10 text-[#0A3D62]",
  },
];

export default function WhyChooseUs() {
  return (
    <section>
      <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">
        Why Choose Georgeal?
      </h2>
      <p className="mt-1 text-[14px] text-slate-500">
        Trusted by thousands of Eastlands drivers since 2013.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {BENEFITS.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-slate-200 active:scale-[0.99]"
          >
            <div className={`grid h-11 w-11 place-items-center rounded-xl ${b.accent}`}>
              <b.icon size={22} weight="fill" />
            </div>
            <h3 className="mt-3 text-[15px] font-bold text-[#0A3D62]">{b.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}