import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, SealCheck, Copy, ShareNetwork, CheckCircle, Trophy,
  Users, Heart, RoadHorizon, SteeringWheel, Star, Signature, WhatsappLogo,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import { WHATSAPP_LINK } from "../data/sitemapData";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (p: PageKey) => void;
}

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } };

const PLEDGES = [
  { title: "Seatbelts always", desc: "I will wear a seatbelt and make sure every passenger does too.", icon: ShieldCheck },
  { title: "Zero drink driving", desc: "I will never drive after drinking alcohol or using drugs.", icon: ShieldCheck },
  { title: "No phone distraction", desc: "I will keep my phone out of reach and my eyes on the road.", icon: ShieldCheck },
  { title: "Speed compliance", desc: "I will respect speed limits and drive to road and weather conditions.", icon: SteeringWheel },
  { title: "Pedestrian respect", desc: "I will give way to pedestrians, cyclists and boda boda riders.", icon: RoadHorizon },
  { title: "Safe overtaking", desc: "I will overtake only when it is legal, visible and safe.", icon: RoadHorizon },
  { title: "Roadworthy vehicle", desc: "I will keep my vehicle insured, inspected and properly maintained.", icon: CheckCircle },
  { title: "Rest before driving", desc: "I will never drive when tired, and will rest on long journeys.", icon: Heart },
  { title: "Defensive driving", desc: "I will keep a safe following distance and anticipate hazards.", icon: ShieldCheck },
  { title: "Speak up", desc: "I will report reckless driving and encourage safer roads for all.", icon: Users },
];

const BASE_COUNT = 4821;
const STORE_KEY = "georgeal_pledge_state";

interface PledgeState {
  count: number;
  name: string;
  signedDate: string;
}

function loadState(): PledgeState {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw) as PledgeState;
  } catch {
    /* ignore malformed storage */
  }
  return { count: BASE_COUNT, name: "", signedDate: "" };
}

export default function PledgeView({ onNavigate }: Props) {
  const [state, setState] = useState<PledgeState>(() => loadState());
  const [nameInput, setNameInput] = useState("");
  const [certOpen, setCertOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable - silently continue */
    }
  }, [state]);

  const signed = Boolean(state.name && state.signedDate);

  const takePledge = () => {
    const clean = nameInput.trim();
    if (clean.length < 3) {
      toast.error("Please enter your full name to sign the pledge.");
      return;
    }
    const today = new Date().toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" });
    setState((prev) => ({
      count: signed ? prev.count : prev.count + 1,
      name: clean,
      signedDate: today,
    }));
    setCertOpen(true);
    toast.success("Thank you for taking the Kenyan Road Safety Pledge!");
  };

  const certificateText = `Georgeal Safe Driver Certificate

This certifies that ${state.name} has taken the Kenyan Road Safety Pledge, committing to safe, sober and distraction-free driving on all Kenyan roads.

Signed on ${state.signedDate}
Georgeal Driving School - NTSA Accredited`;

  const copyCertificate = async () => {
    try {
      await navigator.clipboard.writeText(certificateText);
      toast.success("Certificate copied to clipboard.");
    } catch {
      toast.error("Could not copy. Please select and copy the text manually.");
    }
  };

  const shareCertificate = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Georgeal Safe Driver Certificate", text: certificateText });
        return;
      }
      await navigator.clipboard.writeText(certificateText);
      toast.success("Certificate copied. Paste it anywhere to share.");
    } catch {
      toast.error("Sharing was cancelled.");
    }
  };

  return (
    <motion.div {...fade} className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A3D62] to-[#072b45] px-6 py-10 text-white sm:px-10 sm:py-14">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#FF793F]" />
          <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-white/30" />
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold">
              <ShieldCheck size={13} weight="fill" /> NTSA Road Safety
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF793F]/20 px-3 py-1.5 text-[11px] font-bold text-[#FF793F]">
              <Star size={13} weight="fill" /> Pledge Action Plan
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">The Kenyan Road Safety Pledge</h1>
          <p className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-white/70">
            Aligned with the NTSA Road Safety Action Plan, this pledge is a public commitment to safer
            roads. Sign it, share your certificate, and join thousands of Kenyan drivers choosing to
            drive with care.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm">
              <Users size={16} weight="fill" className="text-[#FF793F]" />
              <span className="text-[13px] font-bold">{state.count.toLocaleString()}</span>
              <span className="text-[12px] text-white/60">drivers pledged</span>
            </div>
            {signed && (
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366]/20 px-4 py-2.5 text-[12px] font-bold text-[#25D366]">
                <SealCheck size={15} weight="fill" /> You have signed as {state.name}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Ten commitments */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">My Ten Commitments</h2>
          <p className="mt-1 text-[14px] text-slate-500">The standard every safe Kenyan driver holds themselves to.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLEDGES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i, 9) * 0.04, duration: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#FF793F]/10">
                  <p.icon size={18} weight="fill" className="text-[#FF793F]" />
                </div>
                <span className="text-[11px] font-black text-slate-300">#{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-3 text-[14px] font-bold text-[#0A3D62]">{p.title}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-500">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Take the pledge */}
      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0A3D62] text-white">
            <Signature size={22} weight="fill" />
          </div>
          <div>
            <h2 className="text-[18px] font-black text-[#0A3D62]">Take the Pledge</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
              Enter your full name to sign the Kenyan Road Safety Pledge and receive your personalised
              Georgeal Safe Driver Certificate badge.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-700 outline-none transition focus:border-[#0A3D62]"
          />
          <button
            onClick={takePledge}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#FF793F] px-5 py-3 text-[14px] font-bold text-white shadow-lg shadow-[#FF793F]/20 transition hover:brightness-110 active:scale-[0.97]"
          >
            <SealCheck size={17} weight="fill" /> I Pledge
          </button>
        </div>

        {signed && (
          <div className="mt-6 rounded-2xl border border-[#FF793F]/30 bg-gradient-to-br from-[#0A3D62] to-[#072b45] p-6 text-center text-white">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#FF793F]/20">
              <SteeringWheel size={28} weight="fill" className="text-[#FF793F]" />
            </div>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Georgeal Safe Driver Certificate
            </p>
            <p className="mt-2 text-xl font-black tracking-tight">{state.name}</p>
            <p className="mx-auto mt-2 max-w-[46ch] text-[12px] leading-relaxed text-white/70">
              Has taken the Kenyan Road Safety Pledge, committing to safe, sober and distraction-free
              driving on all Kenyan roads.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-white/50">
              <span className="flex items-center gap-1.5">
                <Signature size={13} /> Signed {state.signedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} weight="fill" className="text-[#25D366]" /> NTSA Accredited
              </span>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <button
                onClick={copyCertificate}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2.5 text-[12px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.97]"
              >
                <Copy size={14} weight="fill" /> Copy certificate
              </button>
              <button
                onClick={shareCertificate}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-[12px] font-bold text-[#0A3D62] transition hover:bg-white/90 active:scale-[0.97]"
              >
                <ShareNetwork size={14} weight="fill" /> Share
              </button>
              <button
                onClick={() => setCertOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF793F] px-4 py-2.5 text-[12px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
              >
                <Trophy size={14} weight="fill" /> View badge
              </button>
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-[#0A3D62] p-6 text-white sm:flex-row sm:p-8">
        <div>
          <p className="text-[15px] font-black">Want to master these habits with a pro instructor?</p>
          <p className="mt-1 text-[13px] text-white/70">
            Our NTSA-accredited courses build defensive driving into every lesson from day one.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            onClick={() => onNavigate("driving-courses")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF793F] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
          >
            <RoadHorizon size={15} weight="fill" /> Browse Courses
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
          >
            <WhatsappLogo size={15} weight="fill" /> Enquire Now
          </a>
        </div>
      </section>

      {/* Badge modal */}
      <AnimatePresence>
        {certOpen && signed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCertOpen(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0A3D62] text-white">
                <SealCheck size={30} weight="fill" className="text-[#FF793F]" />
              </div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF793F]">
                Safe Driver Badge
              </p>
              <p className="mt-1 text-xl font-black text-[#0A3D62]">{state.name}</p>
              <p className="mt-1 text-[12px] text-slate-500">Kenyan Road Safety Pledge - {state.signedDate}</p>
              <p className="mt-4 text-[12px] leading-relaxed text-slate-500">
                Share your badge to inspire other drivers and help make Kenyan roads safer for everyone.
              </p>
              <div className="mt-5 flex gap-2">
                <button
                  onClick={shareCertificate}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#0A3D62] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
                >
                  <ShareNetwork size={15} weight="fill" /> Share
                </button>
                <button
                  onClick={() => setCertOpen(false)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] font-bold text-slate-600 transition hover:bg-slate-50 active:scale-[0.97]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}