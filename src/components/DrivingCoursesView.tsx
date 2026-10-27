import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Car,
  Truck,
  Motorcycle,
  ShieldCheck,
  Clock,
  WhatsappLogo,
  CheckCircle,
  Info,
  PhoneCall,
  IdentificationCard,
  Sparkle,
  CaretDown,
  Users,
  TrafficSignal,
  ChalkboardTeacher,
} from "@phosphor-icons/react";
import type { PageKey } from "../types";
import {
  COURSE_PACKAGES,
  COURSE_CATEGORIES,
  DRIVING_FAQS,
  SAFETY_PILLARS,
  courseWhatsAppUrl,
  type CourseIconKey,
  type DrivingCoursePackage,
} from "../data/coursesData";
import { CONTACT, telLink } from "../data/sitemapData";
import { courseImageByIcon } from "../data/schoolImages";

interface Props {
  onNavigate: (p: PageKey) => void;
}

const COURSE_ICONS: Record<CourseIconKey, typeof Car> = {
  car: Car,
  truck: Truck,
  motorcycle: Motorcycle,
  shield: ShieldCheck,
};

const PILLAR_ICONS: Record<CourseIconKey, typeof Car> = {
  car: ChalkboardTeacher,
  truck: TrafficSignal,
  motorcycle: Motorcycle,
  shield: ShieldCheck,
};

const ALL_TAB = "All Courses";

function HeroBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0A3D62]/15 bg-white px-3 py-1.5 text-[12px] font-semibold text-[#0A3D62] shadow-sm">
      <CheckCircle size={14} weight="fill" className="text-[#25D366]" />
      {label}
    </span>
  );
}

function CourseCard({
  course,
  index,
  reduce,
}: {
  course: DrivingCoursePackage;
  index: number;
  reduce: boolean;
}) {
  const Icon = COURSE_ICONS[course.icon];
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: reduce ? 0 : Math.min(index * 0.06, 0.3) }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-lg hover:shadow-[#0A3D62]/5"
    >
      {course.badge && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#FF793F] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          <Sparkle size={11} weight="fill" /> {course.badge}
        </span>
      )}

      <img
        src={courseImageByIcon[course.icon]}
        alt={`${course.title} training`}
        className="mb-4 h-40 w-full rounded-xl object-cover ring-1 ring-slate-100"
        loading="lazy"
      />

      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0A3D62]/10">
          <Icon size={22} weight="fill" className="text-[#0A3D62]" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[#FF793F]">
            {course.category}
          </p>
          <h3 className="text-[16px] font-bold leading-tight text-[#0A3D62]">{course.title}</h3>
        </div>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{course.description}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-[12px]">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
          <Clock size={13} className="text-[#0A3D62]" /> {course.duration}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
          <Car size={13} className="text-[#0A3D62]" /> {course.transmission}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
          <Users size={13} className="text-[#0A3D62]" /> {course.practicalHours}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
          What&apos;s Included
        </p>
        <ul className="mt-2 grid grid-cols-1 gap-x-3 gap-y-1.5 sm:grid-cols-2">
          {course.includes.map((inc) => (
            <li key={inc} className="flex items-start gap-1.5 text-[12px] text-slate-600">
              <CheckCircle size={14} weight="fill" className="mt-0.5 shrink-0 text-[#25D366]" />
              {inc}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">
          <IdentificationCard size={13} /> Requirements
        </p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {course.requirements.map((r) => (
            <li
              key={r}
              className="rounded-full border border-slate-100 bg-white px-2.5 py-0.5 text-[10px] font-medium text-slate-600"
            >
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#FF793F]/8 p-3">
        <Info size={15} weight="fill" className="mt-0.5 shrink-0 text-[#FF793F]" />
        <p className="text-[11px] leading-snug text-slate-600">{course.pricingNote}</p>
      </div>

      <div className="mt-5 flex flex-col gap-2 pt-1 sm:flex-row">
        <a
          href={courseWhatsAppUrl(course.whatsappPrefill)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-2.5 text-[12px] font-bold text-white shadow-md shadow-[#25D366]/20 transition hover:brightness-110 active:scale-[0.98]"
        >
          <WhatsappLogo size={15} weight="fill" /> Enquire via WhatsApp
        </a>
        <a
          href={telLink(CONTACT.phone)}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0A3D62]/15 bg-white px-3 py-2.5 text-[12px] font-bold text-[#0A3D62] transition hover:bg-slate-50 active:scale-[0.98]"
        >
          <PhoneCall size={15} /> Call Branch
        </a>
      </div>
    </motion.div>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
      >
        <span className="text-[14px] font-bold text-[#0A3D62]">{q}</span>
        <CaretDown
          size={18}
          weight="bold"
          className={`shrink-0 text-[#FF793F] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <p className="px-4 pb-4 text-[13px] leading-relaxed text-slate-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DrivingCoursesView({ onNavigate }: Props) {
  const reduce = !!useReducedMotion();
  const [active, setActive] = useState<string>(ALL_TAB);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tabs = useMemo(() => [ALL_TAB, ...COURSE_CATEGORIES], []);
  const visible = useMemo(
    () => (active === ALL_TAB ? COURSE_PACKAGES : COURSE_PACKAGES.filter((c) => c.category === active)),
    [active]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-12"
    >
      {/* Hero & intro */}
      <section className="overflow-hidden rounded-3xl border border-[#0A3D62]/10 bg-gradient-to-br from-[#0A3D62] to-[#0d4f7e] p-6 text-white sm:p-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#FFB38A]">
          <ShieldCheck size={14} weight="fill" /> NTSA Approved Training
        </span>
        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
          Certified NTSA Driving Courses in Nairobi &amp; Eastlands
        </h1>
        <p className="mt-3 max-w-[65ch] text-[14px] leading-relaxed text-white/80">
          Learn to drive with safety-first dual-control vehicles, patient NTSA-certified instructors,
          and modern model-town boards built to raise your first-time pass rate. From light vehicles to
          commercial trucks, motorcycles and confidence refreshers, there is a course for every goal.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <HeroBadge label="NTSA Approved" />
          <HeroBadge label="Dual-Control Safety Fleet" />
          <HeroBadge label="Flexible Timings 7am - 6pm" />
          <HeroBadge label="M-Pesa Installments" />
        </div>
      </section>

      {/* Category filter tabs */}
      <section>
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  isActive
                    ? "text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#0A3D62]/30 hover:text-[#0A3D62]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="course-tab"
                    className="absolute inset-0 rounded-full bg-[#0A3D62]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            );
          })}
        </div>

        {/* Course cards grid */}
        <motion.div layout className="mt-6 grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} reduce={reduce} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Fees transparency notice */}
      <section className="rounded-2xl border border-[#FF793F]/25 bg-[#FF793F]/8 p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FF793F]/15">
            <Info size={20} weight="fill" className="text-[#FF793F]" />
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-[#0A3D62]">Fees &amp; Payment Transparency</h2>
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
              Exact fees and package discounts are confirmed at your branch or via WhatsApp. Prices vary
              with branch-specific offers, bundle deals (for example Driving + Computer packages) and the
              M-Pesa installment structure you choose. The figures shown are indicative starting points -
              message us for a current, personalised quote with no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Practical training & safety pillars */}
      <section>
        <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">
          Built on Practical Training &amp; Safety
        </h2>
        <p className="mt-1 text-[14px] text-slate-500">
          Three pillars that make our graduates safe, confident drivers - not just test-passers.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {SAFETY_PILLARS.map((p, i) => {
            const Icon = PILLAR_ICONS[p.icon];
            return (
              <motion.div
                key={p.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/10">
                  <Icon size={22} weight="fill" className="text-[#25D366]" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#0A3D62]">{p.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ accordion */}
      <section>
        <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-[14px] text-slate-500">
          Documents, timelines, test day and payment plans - answered.
        </p>
        <div className="mt-6 space-y-3">
          {DRIVING_FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* Direct enrollment CTA */}
      <section className="overflow-hidden rounded-3xl bg-[#0A3D62] p-7 text-center text-white sm:p-9">
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Ready to start driving?</h2>
        <p className="mx-auto mt-2 max-w-[55ch] text-[14px] text-white/80">
          Pick your course and message us on WhatsApp for current fees, flexible timings and the next
          intake at your nearest branch.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={courseWhatsAppUrl(
              "Hello Georgeal! I would like to enroll in a driving course. Please share the available packages and fees."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-[14px] font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            <WhatsappLogo size={18} weight="fill" /> Enquire via WhatsApp
          </a>
          <button
            onClick={() => onNavigate("branches")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-[14px] font-bold text-white transition hover:bg-white/20 active:scale-[0.98] sm:w-auto"
          >
            <PhoneCall size={18} /> Find a Branch
          </button>
        </div>
      </section>
    </motion.div>
  );
}