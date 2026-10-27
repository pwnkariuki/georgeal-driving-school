import { useState } from "react";
import { motion } from "framer-motion";
import {
  Car, Monitor, Phone, WhatsappLogo, ShieldCheck, MapPin, Clock,
  Star, CheckCircle, ArrowRight, Users, GraduationCap, CreditCard,
  Envelope, CaretDown,
} from "@phosphor-icons/react";
import {
  DRIVING_COURSES, COMPUTER_COURSES, BRANCHES, TESTIMONIALS,
  CONTACT, WHATSAPP_LINK, whatsAppLink, telLink,
} from "../data/sitemapData";
import type { PageKey } from "../types";
import HomeHero from "./HomeHero";
import TrustBar from "./TrustBar";
import WhyChooseUs from "./WhyChooseUs";
import HomeBranches from "./HomeBranches";
import ComputerTeaser from "./ComputerTeaser";
import FinalCTA from "./FinalCTA";
import FAQSection from "./FAQSection";
import AboutUsView from "./AboutUsView";
import DrivingCoursesView from "./DrivingCoursesView";
import ComputerCoursesView from "./ComputerCoursesView";
import BranchesView from "./BranchesView";
import ContactView from "./ContactView";
import TermsView from "./TermsView";
import PledgeView from "./PledgeView";

interface Props {
  page: PageKey;
  onNavigate: (p: PageKey) => void;
  targetBranchId?: string;
}

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } };

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">{title}</h2>
      {sub && <p className="mt-1 text-[14px] text-slate-500">{sub}</p>}
    </div>
  );
}

function WhatsAppBtn({ course, branch, label }: { course?: string; branch?: string; label?: string }) {
  return (
    <a
      href={whatsAppLink(course, branch)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-[12px] font-bold text-white shadow-md shadow-[#25D366]/20 transition hover:brightness-110 active:scale-[0.97]"
    >
      <WhatsappLogo size={14} weight="fill" /> {label || "Enquire"}
    </a>
  );
}

/* ========== HOME ========== */
function HomePage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <motion.div {...fade} className="space-y-10">
      {/* 1. Hero */}
      <HomeHero onNavigate={onNavigate} />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Driving Courses Preview */}
      <section>
        <SectionHeader title="Driving Courses" sub="NTSA license packages with flexible M-Pesa installments" />
        <div className="grid gap-4 sm:grid-cols-2">
          {DRIVING_COURSES.filter((c) => ["class-b1", "class-b2", "class-a", "class-c1"].includes(c.id)).map((c) => (
            <div key={c.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#FF793F]/10 px-2.5 py-1 text-[10px] font-bold text-[#FF793F]">{c.category}</span>
                {c.popular && <span className="rounded-full bg-[#0A3D62] px-2 py-0.5 text-[9px] font-bold text-white">MOST POPULAR</span>}
              </div>
              <p className="mt-3 text-[15px] font-bold text-[#0A3D62]">{c.title}</p>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-slate-500">
                <span className="flex items-center gap-1"><Clock size={12} /> {c.duration}</span>
                <span className="flex items-center gap-1"><CreditCard size={12} /> KES {c.priceKES.toLocaleString()}</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">{c.installments}</p>
              <div className="mt-3 flex gap-2">
                <WhatsAppBtn course={c.title} label="Learn More" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => onNavigate("driving-courses")} className="mt-4 flex items-center gap-1 text-[13px] font-bold text-[#0A3D62] hover:underline">
          View all courses <ArrowRight size={14} />
        </button>
      </section>

      {/* 4. Why Choose Georgeal */}
      <WhyChooseUs />

      {/* 5. Branches Highlight */}
      <HomeBranches onNavigate={onNavigate} />

      {/* 6. Computer Courses Teaser */}
      <ComputerTeaser onNavigate={onNavigate} />

      {/* 7. Testimonials */}
      <section>
        <SectionHeader title="Student Success Stories" sub="Real reviews from our graduates across Eastlands" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div key={t.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} weight="fill" className="text-[#F39C12]" />)}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0A3D62]/10 text-[12px] font-bold text-[#0A3D62]">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#0A3D62]">{t.name}</p>
                  <p className="text-[11px] text-slate-400">{t.course} &middot; {t.branch}</p>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#25D366]/10 px-2 py-0.5 text-[10px] font-bold text-[#25D366]">
                <ShieldCheck size={11} weight="fill" /> NTSA First-Time Pass
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ Section */}
      <FAQSection />

      {/* 9. Final CTA */}
      <FinalCTA />
    </motion.div>
  );
}

/* ========== ABOUT ========== */
function AboutPage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return <AboutUsView onNavigate={onNavigate} />;
}

/* ========== DRIVING COURSES ========== */
function DrivingCoursesPage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return <DrivingCoursesView onNavigate={onNavigate} />;
}

/* ========== COMPUTER COURSES ========== */
function ComputerCoursesPage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return <ComputerCoursesView onNavigate={onNavigate} />;
}

/* ========== BRANCHES ========== */
function BranchesPage({ onNavigate, targetBranchId }: { onNavigate: (p: PageKey) => void; targetBranchId?: string }) {
  return <BranchesView onNavigate={onNavigate} targetBranchId={targetBranchId} />;
}

/* ========== MAIN ROUTER ========== */
export default function PageViews({ page, onNavigate, targetBranchId }: Props) {
  switch (page) {
    case "home": return <HomePage onNavigate={onNavigate} />;
    case "about": return <AboutPage onNavigate={onNavigate} />;
    case "driving-courses": return <DrivingCoursesPage onNavigate={onNavigate} />;
    case "computer-courses": return <ComputerCoursesPage onNavigate={onNavigate} />;
    case "branches": return <BranchesPage onNavigate={onNavigate} targetBranchId={targetBranchId} />;
    case "terms": return <TermsView onNavigate={onNavigate} />;
    case "pledge": return <PledgeView onNavigate={onNavigate} />;
    case "contact": return <ContactView onNavigate={onNavigate} />;
    default: return <HomePage onNavigate={onNavigate} />;
  }
}