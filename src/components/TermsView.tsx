import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FileText, Scales, CreditCard, CalendarBlank, ShieldCheck,
  Printer, Phone, WhatsappLogo, CheckCircle, User, CaretRight,
} from "@phosphor-icons/react";
import { CONTACT, WHATSAPP_LINK, telLink } from "../data/sitemapData";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (p: PageKey) => void;
}

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } };

const SECTIONS = [
  {
    id: "enrolment",
    title: "1. Course Enrolment & Eligibility",
    icon: User,
    body: [
      "Enrolment is confirmed only after you submit a valid Kenyan National ID or passport, a KRA PIN, two passport-size photographs, and a medical fitness report where required.",
      "Learners must meet the NTSA minimum age requirements for the license class they select. Class A and B licenses require a learner aged 18 years and above, while commercial classes require a valid lower-class license held for the minimum statutory period.",
      "Placement at a specific branch and instructor is subject to availability. Georgeal reserves the right to reallocate learners to a nearby branch when a training point is at full capacity.",
    ],
  },
  {
    id: "fees",
    title: "2. Fees, Payments & M-Pesa Installments",
    icon: CreditCard,
    body: [
      `Course fees are payable via M-Pesa Paybill ${CONTACT.mpesaPaybill}, account name ${CONTACT.mpesaAccount}, cash at any branch, or bank transfer.`,
      "Installment plans are available for every course. Each plan states the number of payments and the amount per installment before you enrol, and no hidden charges are added later.",
      "The NTSA examination and license processing fees are included in the quoted price unless stated otherwise in your enrolment receipt. Any government fee revision may be passed on with prior notice.",
      "Lessons are released progressively as installments are settled. Examination bookings are processed once the account is fully paid, unless a written arrangement has been agreed with admissions.",
    ],
  },
  {
    id: "pdl",
    title: "3. PDL & Interim License Processing",
    icon: Scales,
    body: [
      "Georgeal facilitates your Provisional Driving License (PDL) application and the interim driving license on your behalf once the required documents are verified.",
      "Processing timelines depend on NTSA systems and are outside our direct control. We commit to submitting applications promptly and keeping you updated on progress.",
      "Learners must carry their PDL at all times during practical training. Training without a valid PDL contravenes NTSA regulations and will be suspended until the document is presented.",
    ],
  },
  {
    id: "test-booking",
    title: "4. Practical Test Booking & Rescheduling",
    icon: CalendarBlank,
    body: [
      "We book your NTSA practical test only when your instructor confirms you are ready. This protects our high first-time pass rate and your own safety.",
      "Rescheduling is permitted at no charge with at least 48 hours notice to your branch. Late cancellations may attract a rebooking fee because test slots are reserved on your behalf.",
      "If you do not pass on the first attempt, refresher sessions and a follow-up test booking are arranged at a discounted rate.",
    ],
  },
  {
    id: "conduct",
    title: "5. Code of Conduct & Learner Responsibilities",
    icon: ShieldCheck,
    body: [
      "Learners must arrive on time and sober for every session. Any learner who reports to training under the influence of alcohol or drugs will be turned away and the session forfeited.",
      "Respect the instructor, fellow learners, and the training vehicle. Wilful damage to school property will be charged to the learner.",
      "Attend theory classes and complete all assigned practice hours. Consistent absence without notice may result in your slot being released to another learner.",
    ],
  },
  {
    id: "liability",
    title: "6. Liability, Safety & Vehicle Use",
    icon: ShieldCheck,
    body: [
      "All Georgeal training vehicles are dual-control, insured, and inspected regularly. Learners are covered while driving under instructor supervision during scheduled lessons.",
      "The school is not liable for personal items lost or left in a training vehicle, or for traffic offences committed by a learner while driving unaccompanied outside supervised lessons.",
      "Reckless behaviour behind the wheel may lead to immediate termination of training without refund, in line with NTSA safety standards.",
    ],
  },
  {
    id: "refunds",
    title: "7. Refunds & Cancellation Policy",
    icon: CreditCard,
    body: [
      "Cancel within 7 days of enrolment and before your first practical lesson for a full refund, less any government fees already paid on your behalf.",
      "After training has begun, refunds are calculated on a pro-rata basis for unused lessons. Completed lessons, consumed test bookings, and non-refundable government fees are deducted.",
      "Refunds are processed within 14 working days to the original payment channel or an agreed M-Pesa number.",
    ],
  },
  {
    id: "privacy",
    title: "8. Data Privacy & Consent",
    icon: FileText,
    body: [
      "We collect only the personal data needed to enrol you, process NTSA documents, and contact you about your training.",
      "Your ID, KRA PIN, and photos are used solely for license processing and are never sold or shared with third parties beyond NTSA and relevant licensing authorities.",
      "You may request access to, correction of, or deletion of your records by contacting admissions, subject to any legal retention requirements.",
    ],
  },
];

const FAQS = [
  {
    q: "Can I change my branch after enrolling?",
    a: "Yes. Contact admissions and we will move your record to another active branch with available capacity at no extra cost.",
  },
  {
    q: "Are installment payments available for all courses?",
    a: "Yes. Every driving and computer course offers a stated M-Pesa installment plan shown on the course card.",
  },
  {
    q: "How long does NTSA license processing take?",
    a: "Interim licenses are typically issued within a few working days once documents are verified. Card collection timelines depend on NTSA production schedules.",
  },
  {
    q: "What happens if I fail my first practical test?",
    a: "We arrange discounted refresher lessons and a follow-up NTSA booking so you can retake the test with confidence.",
  },
];

export default function TermsView({ onNavigate }: Props) {
  const topRef = useRef<HTMLDivElement>(null);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div {...fade} ref={topRef} className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0A3D62] px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#FF793F]" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/30" />
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold">
              <FileText size={13} weight="fill" /> Legal
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF793F]/20 px-3 py-1.5 text-[11px] font-bold text-[#FF793F]">
              <ShieldCheck size={13} weight="fill" /> NTSA Compliant
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-white/70">
            These terms govern every enrolment, training session, and license booking with Georgeal
            Driving School. Please read them carefully before you join a course.
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Effective from January 2025
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF793F] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
            >
              <Printer size={15} weight="fill" /> Print / Save as PDF
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2.5 text-[13px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.97]"
            >
              <WhatsappLogo size={15} weight="fill" /> Ask a question
            </a>
          </div>
        </div>
      </section>

      {/* Quick jump */}
      <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <h2 className="text-[13px] font-black uppercase tracking-wider text-[#FF793F]">Jump to a section</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => jump(s.id)}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-[12px] font-semibold text-slate-600 transition hover:bg-[#0A3D62]/10 hover:text-[#0A3D62] active:scale-[0.97]"
            >
              {s.title.split(". ")[1]} <CaretRight size={12} weight="bold" />
            </button>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="space-y-5">
        {SECTIONS.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0A3D62]/10 text-[#0A3D62]">
                <s.icon size={20} weight="fill" />
              </div>
              <h2 className="text-[16px] font-bold text-[#0A3D62]">{s.title}</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {s.body.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                  <CheckCircle size={15} weight="fill" className="mt-0.5 shrink-0 text-[#25D366]" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-black tracking-tight text-[#0A3D62] sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-2.5">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-[14px] font-bold text-[#0A3D62]">
                {f.q}
                <CaretRight size={15} weight="bold" className="shrink-0 text-[#FF793F] transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-500">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-br from-[#0A3D62] to-[#0A3D62]/90 p-6 text-white sm:flex-row sm:p-8">
        <div>
          <p className="text-[15px] font-black">Still need clarification?</p>
          <p className="mt-1 text-[13px] text-white/70">
            Our admissions team answers fee, enrolment, and licensing questions any day of the week.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href={telLink(CONTACT.phone)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-[13px] font-bold text-[#0A3D62] transition hover:bg-white/90 active:scale-[0.97]"
          >
            <Phone size={15} weight="fill" /> Call Admissions
          </a>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF793F] px-4 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
          >
            Visit a Branch
          </button>
        </div>
      </section>
    </motion.div>
  );
}