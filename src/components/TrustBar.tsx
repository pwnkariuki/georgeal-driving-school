import { motion } from "framer-motion";
import { Buildings, Users, ShieldCheck, Trophy } from "@phosphor-icons/react";

const STATS = [
  { icon: Buildings, value: "8+", label: "Branches Across Nairobi", color: "text-[#0A3D62]" },
  { icon: Users, value: "50+", label: "Experienced Instructors", color: "text-[#FF793F]" },
  { icon: ShieldCheck, value: "100%", label: "NTSA-Aligned Training", color: "text-[#25D366]" },
  { icon: Trophy, value: "94%", label: "First-Time Pass Rate", color: "text-[#0A3D62]" },
];

export default function TrustBar() {
  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-3 py-5 text-center shadow-sm sm:py-6"
        >
          <div className={`grid h-10 w-10 place-items-center rounded-xl bg-slate-50 ${stat.color}`}>
            <stat.icon size={20} weight="fill" />
          </div>
          <p className={`mt-2 text-[20px] font-black tracking-tight sm:text-[24px] ${stat.color}`}>
            {stat.value}
          </p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[11px]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
