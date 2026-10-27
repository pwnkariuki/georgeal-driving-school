import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SteeringWheel, Gauge, RoadHorizon } from "@phosphor-icons/react";

const TIPS = [
  "Fasten your seatbelt before you turn the key.",
  "Keep two seconds of following distance in dry weather.",
  "Eyes on the road. Phone in the holder, not your hand.",
  "Slow down in the rain and never overtake on a blind bend.",
  "Check mirrors and blind spots before every lane change.",
  "Give way to pedestrians at every marked crossing.",
  "Never drive after drinking. There is always another way home.",
];

interface Props {
  show: boolean;
  label?: string;
}

export default function CustomLoader({ show, label }: Props) {
  const [tip, setTip] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return;
    setTip(0);
    setProgress(0);
    const tipId = setInterval(() => setTip((t) => (t + 1) % TIPS.length), 1500);
    const progId = setInterval(() => setProgress((p) => (p >= 100 ? 100 : p + 12)), 45);
    return () => {
      clearInterval(tipId);
      clearInterval(progId);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-gradient-to-br from-[#0A3D62] to-[#072b45] px-6"
        >
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="relative grid h-28 w-28 place-items-center">
              <span className="absolute inset-0 rounded-full border-2 border-white/10" />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#FF793F]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <motion.div
                className="grid h-20 w-20 place-items-center rounded-full bg-white/10 backdrop-blur"
                animate={{ rotate: [0, 9, -9, 0] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
              >
                <SteeringWheel size={44} weight="fill" className="text-[#FF793F]" />
              </motion.div>
            </div>

            <p className="mt-5 text-[15px] font-black tracking-tight text-white">
              Georgeal <span className="text-[#FF793F]">Driving School</span>
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {label || "Loading"}
            </p>

            <div className="mt-5 h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[#FF793F]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            <div className="mt-6 flex min-h-[48px] items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
              <RoadHorizon size={16} weight="fill" className="shrink-0 text-[#25D366]" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={tip}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-left text-[12px] leading-relaxed text-white/70"
                >
                  {TIPS[tip]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold text-white/30">
              <Gauge size={12} weight="fill" /> NTSA Accredited - Safe Driving Starts Here
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}