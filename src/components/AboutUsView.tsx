import { motion } from "framer-motion";
import {
  ShieldCheck, GraduationCap, Users, MapPin, Clock, WhatsappLogo,
  Phone, ArrowRight, CheckCircle, Heart, Target, Trophy,
  BookOpen, Handshake, Sparkle, Lightbulb, RoadHorizon,
  CalendarBlank, Monitor, Flag, Star, Quotes, SealCheck,
} from "@phosphor-icons/react";
import { WHATSAPP_LINK, CONTACT, whatsAppLink, telLink, TESTIMONIALS } from "../data/sitemapData";
import { IMAGES } from "../data/schoolImages";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (p: PageKey) => void;
}

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

const milestones = [
  { year: "2013", title: "Founded in Utawala", desc: "Started with a single training vehicle and a passion for road safety in Nairobi's Eastlands.", icon: Flag },
  { year: "2016", title: "Branch Expansion", desc: "Opened Embakasi, Fedha, and Ruai branches to serve growing demand across the region.", icon: MapPin },
  { year: "2019", title: "NTSA Full Accreditation", desc: "Achieved complete NTSA certification for all license classes and dual-control fleet standards.", icon: ShieldCheck },
  { year: "2021", title: "10,000+ Graduates", desc: "Milestone of over ten thousand licensed drivers trained across Buruburu, Kitengela, and beyond.", icon: Trophy },
  { year: "2024", title: "Nationwide Presence", desc: "15+ branches serving learners from Nairobi to Nakuru with flexible M-Pesa installment plans.", icon: RoadHorizon },
];

const coreValues = [
  { title: "Safety First", desc: "Defensive driving techniques embedded in every lesson from day one.", icon: ShieldCheck },
  { title: "Patience & Empathy", desc: "Zero-pressure learning environment where no student is ever rushed or left behind.", icon: Heart },
  { title: "Integrity & Compliance", desc: "Full NTSA adherence, transparent pricing, and honest progress reporting to parents.", icon: Handshake },
  { title: "Affordable Excellence", desc: "M-Pesa installment plans make professional training accessible to every Kenyan.", icon: Target },
  { title: "Modern Training Fleet", desc: "Well-maintained dual-control manual and automatic vehicles pass quarterly inspections.", icon: Lightbulb },
  { title: "Career-Ready Skills", desc: "Computer and digital literacy courses alongside driving to empower holistic growth.", icon: BookOpen },
];

const instructorTraits = [
  "NTSA Certified Instructors with 5+ years coaching experience",
  "Zero-Pressure Learning: patient guidance for nervous beginners",
  "Bi-lingual Training: lessons in English & Swahili",
  "Dual-Control Safety Cars for complete learner confidence",
  "Defensive Driving & Hazard Perception specialists",
  "Continuous professional development and refresher programs",
];

export default function AboutUsView({ onNavigate }: Props) {
  return (
    <motion.div {...fade} className="space-y-12">
      {/* ===== 1. HERO BANNER ===== */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0A3D62] px-6 py-12 text-white sm:px-10 sm:py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#FF793F]" />
          <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/30" />
        </div>
        <div className="relative">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/90">
              <CalendarBlank size={13} weight="fill" /> Est. 2013
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF793F]/20 px-3 py-1.5 text-[11px] font-bold text-[#FF793F]">
              <ShieldCheck size={13} weight="fill" /> NTSA Accredited
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/90">
              <GraduationCap size={13} weight="fill" /> 15,000+ Graduates
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            From One Car in Utawala to
            <span className="text-[#FF793F]"> Nationwide Trust</span>
          </h1>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-white/70">
            Georgeal Driving School was born in 2013 with a single training vehicle,
            a licensed instructor, and a simple belief: every Kenyan deserves safe,
            affordable, and professional driving education.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <img
              src={IMAGES.aboutFleet}
              alt="Georgeal modern dual-control training fleet parked at a Nairobi branch"
              className="h-40 w-full rounded-2xl object-cover ring-1 ring-white/15"
              loading="lazy"
            />
            <img
              src={IMAGES.graduates}
              alt="Happy Georgeal graduates holding their driving test certificates"
              className="h-40 w-full rounded-2xl object-cover ring-1 ring-white/15"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== 2. HISTORY & MILESTONES ===== */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">Our Journey</h2>
          <p className="mt-1 text-[14px] text-slate-500">
            Over a decade of growth from Nairobi's Eastlands to branches across Kenya.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-0.5 bg-[#0A3D62]/10 sm:block" />
          <div className="space-y-5">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex gap-4 sm:gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A3D62] text-white shadow-md shadow-[#0A3D62]/20">
                  <m.icon size={18} weight="fill" />
                </div>
                <div className={`flex-1 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md ${i === 0 ? "" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#FF793F]/10 px-2.5 py-1 text-[10px] font-bold text-[#FF793F]">{m.year}</span>
                  </div>
                  <h3 className="mt-2 text-[15px] font-bold text-[#0A3D62]">{m.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. MISSION & CORE VALUES ===== */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">Mission & Core Values</h2>
          <p className="mt-1 text-[14px] text-slate-500">
            What drives us every day on and off the road.
          </p>
        </div>
        {/* Mission Statement */}
        <div className="rounded-2xl border border-[#0A3D62]/10 bg-[#0A3D62]/5 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0A3D62] text-white">
              <Sparkle size={20} weight="fill" />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#0A3D62]">Our Mission</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                Empowering safe, disciplined, and confident drivers on Kenya's roads through
                accessible, high-standard training. We combine professional instruction, modern
                dual-control vehicles, and flexible payment plans to remove every barrier between
                a learner and their license.
              </p>
            </div>
          </div>
        </div>
        {/* Values Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#FF793F]/10">
                  <v.icon size={18} weight="fill" className="text-[#FF793F]" />
                </div>
                <h4 className="text-[14px] font-bold text-[#0A3D62]">{v.title}</h4>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4. COMPUTER & DIGITAL SKILLS ===== */}
      <section>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0A3D62]/5 px-3 py-1.5 text-[11px] font-bold text-[#0A3D62]">
                <Monitor size={14} weight="fill" /> Beyond Driving
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-[#0A3D62]">
                Computer & Digital Skills for Career-Ready Graduates
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                We believe a driver's education shouldn't stop at the license. Georgeal offers
                computer literacy and professional digital courses alongside driving lessons so
                our students walk away career-ready. From basic packages to graphic design and
                ICDL office skills, we equip young Kenyans with the tools to succeed in a digital economy.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Basic Computer", "Graphic Design", "ICDL / Office", "Web Design", "Accounting Software"].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#0A3D62]/5 px-3 py-1 text-[11px] font-semibold text-[#0A3D62]">{tag}</span>
                ))}
              </div>
              <button
                onClick={() => onNavigate("computer-courses")}
                className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-[#0A3D62] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
              >
                Explore Computer Courses <ArrowRight size={14} />
              </button>
            </div>
            <div className="w-full shrink-0 lg:w-[280px]">
              <div className="rounded-2xl bg-[#0A3D62]/5 p-5">
                <h4 className="text-[13px] font-bold text-[#0A3D62]">Why Digital Skills?</h4>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Stand out in job applications",
                    "Manage your own business records",
                    "Confident in office environments",
                    "Freelance & remote work ready",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-slate-600">
                      <CheckCircle size={14} weight="fill" className="mt-0.5 shrink-0 text-[#25D366]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. INSTRUCTORS & TEAM ===== */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">Meet Our Instructors</h2>
          <p className="mt-1 text-[14px] text-slate-500">
            Certified, patient, and passionate about building confident drivers.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Team attributes */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0A3D62]/10">
                <Users size={20} weight="fill" className="text-[#0A3D62]" />
              </div>
              <h3 className="text-[16px] font-bold text-[#0A3D62]">What Makes Our Team Different</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {instructorTraits.map((trait) => (
                <li key={trait} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                  <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-[#25D366]" />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
          {/* Teaching Philosophy */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#FF793F]/10">
                <GraduationCap size={20} weight="fill" className="text-[#FF793F]" />
              </div>
              <h3 className="text-[16px] font-bold text-[#0A3D62]">Our Teaching Philosophy</h3>
            </div>
            <div className="mt-4 space-y-4 text-[13px] leading-relaxed text-slate-600">
              <p>
                Every learner is different. Some need extra time on clutch control, others
                struggle with roundabouts or highway merging. Our instructors adapt their
                approach to each student's pace, never rushing them toward a test they're
                not ready for.
              </p>
              <p>
                We train in English and Swahili so students fully understand road rules,
                signage, and defensive techniques. Our dual-control vehicles mean learners
                practice with zero fear, building real confidence before they ever face
                an NTSA examiner.
              </p>
            </div>
            <div className="mt-5 rounded-xl bg-[#0A3D62]/5 p-4">
              <p className="text-[12px] italic text-slate-500">
                "I was terrified of driving. My instructor at Georgeal Utawala was so patient.
                I passed my B2 on the first try and now I drive to work every day."
              </p>
              <p className="mt-2 text-[11px] font-bold text-[#0A3D62]">
                Wanjiru K. <span className="font-normal text-slate-400">- Class B2, Utawala Branch</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5b. STUDENT STORIES ===== */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">Student Stories</h2>
          <p className="mt-1 text-[14px] text-slate-500">
            Real graduates, real branches, real pass certificates across Kenya.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <Quotes size={22} weight="fill" className="text-[#FF793F]/30" />
              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} weight="fill" className="text-[#F39C12]" />)}
                {Array.from({ length: 5 - t.rating }).map((_, i) => <Star key={`e${i}`} size={14} className="text-slate-200" />)}
              </div>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-600">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0A3D62]/10 text-[12px] font-bold text-[#0A3D62]">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-bold text-[#0A3D62]">{t.name}</p>
                  <p className="flex items-center gap-1 truncate text-[11px] text-slate-400">
                    <MapPin size={11} /> {t.branch}
                  </p>
                </div>
                {t.verified && (
                  <SealCheck size={18} weight="fill" className="ml-auto shrink-0 text-[#25D366]" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:flex-row">
          <div>
            <p className="text-[14px] font-bold text-[#0A3D62]">Join our graduates on safer roads</p>
            <p className="text-[12px] text-slate-500">Take the Kenyan Road Safety Pledge and get your safe driver badge.</p>
          </div>
          <button
            onClick={() => onNavigate("pledge")}
            className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#FF793F] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
          >
            <ShieldCheck size={15} weight="fill" /> Take the Pledge <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* ===== 6. CALL TO ACTION ===== */}
      <section className="rounded-3xl bg-gradient-to-br from-[#0A3D62] to-[#0A3D62]/90 p-6 text-white sm:p-10">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Ready to Start Your Journey?</h2>
          <p className="mx-auto mt-3 max-w-[50ch] text-[14px] leading-relaxed text-white/70">
            Visit your nearest branch, chat with admissions on WhatsApp, or book a free
            consultation today. Our team is ready to help you get on the road.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:brightness-110 active:scale-[0.97]"
          >
            <WhatsappLogo size={16} weight="fill" /> Chat on WhatsApp
          </a>
          <a
            href={telLink(CONTACT.phone)}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.97]"
          >
            <Phone size={16} weight="fill" /> Call Admissions
          </a>
          <button
            onClick={() => onNavigate("branches")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#FF793F] px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-[#FF793F]/20 transition hover:brightness-110 active:scale-[0.97]"
          >
            <MapPin size={16} weight="fill" /> Explore Branches
          </button>
          <a
            href={whatsAppLink("Free Consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[13px] font-bold text-[#0A3D62] transition hover:bg-white/90 active:scale-[0.97]"
          >
            <Clock size={16} weight="fill" /> Book Free Consultation
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/50">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={13} weight="fill" className="text-[#25D366]" /> NTSA Accredited
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} weight="fill" className="text-[#FF793F]" /> 15+ Branches
          </span>
          <span className="flex items-center gap-1.5">
            <Trophy size={13} weight="fill" className="text-[#F39C12]" /> 98.4% First-Time Pass Rate
          </span>
        </div>
      </section>
    </motion.div>
  );
}