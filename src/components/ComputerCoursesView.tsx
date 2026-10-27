import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Presentation, Globe, Palette, Database, GraduationCap,
  Clock, CreditCard, WhatsappLogo, X, CheckCircle, ArrowRight,
  ShieldCheck, Lightbulb, Users, BookOpen, Sparkle,
} from "@phosphor-icons/react";
import { COMPUTER_COURSES, whatsAppLink } from "../data/sitemapData";
import { IMAGES } from "../data/schoolImages";
import type { ComputerCourse, PageKey } from "../types";

const ICON_MAP: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={22} weight="fill" />,
  Presentation: <Presentation size={22} weight="fill" />,
  Globe: <Globe size={22} weight="fill" />,
  Palette: <Palette size={22} weight="fill" />,
  Database: <Database size={22} weight="fill" />,
  GraduationCap: <GraduationCap size={22} weight="fill" />,
};

const FILTERS = [
  { key: "all", label: "All Courses" },
  { key: "essentials", label: "Digital Starter" },
  { key: "office", label: "Office Suite" },
  { key: "design", label: "Creative & Design" },
  { key: "data", label: "Data & Spreadsheets" },
  { key: "combo", label: "Combos" },
] as const;

const BENEFITS = [
  { icon: <Monitor size={20} weight="fill" />, title: "Modern Computer Lab", desc: "Hands-on practice with up-to-date machines and software" },
  { icon: <Users size={20} weight="fill" />, title: "1-on-1 Instructor Guidance", desc: "Personal attention so no learner falls behind" },
  { icon: <BookOpen size={20} weight="fill" />, title: "Free CV Formatting", desc: "Professional resume help included with every package" },
  { icon: <ShieldCheck size={20} weight="fill" />, title: "Certificate of Completion", desc: "Recognized certificate to boost your job applications" },
];

const FAQS = [
  { q: "Do I need prior computer experience?", a: "Not at all. Our 'Introduction to Computers' course is built for complete beginners - you start with how to hold a mouse, type and open programs, and our patient instructors guide you step by step before moving to Word, Excel and PowerPoint. Most beginners finish in 2 to 3 weeks." },
  { q: "What class timings are available?", a: "We offer morning (8-11 AM), afternoon (12-3 PM), evening (4-7 PM), and weekend (Sat 9 AM-1 PM) sessions." },
  { q: "Will I get a certificate, and is it recognized by employers?", a: "Yes. On completing your course and final assessment you receive a Georgeal College Certificate of Completion with a detailed competency breakdown. Many Kenyan employers recognize our practical-skills certification, especially for office and admin roles." },
  { q: "How many practical lab hours do I get?", a: "Every computer course includes at least 60% hands-on lab time with an individual workstation. MS Office courses include 20+ practical lab hours, and Graphic Design includes 25+ hours with real software projects." },
  { q: "Can I pay in installments?", a: "Absolutely. All packages support M-Pesa installment plans. Ask about our flexible payment schedule." },
];

interface Props {
  onNavigate: (p: PageKey) => void;
}

export default function ComputerCoursesView({ onNavigate }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [enquiryCourse, setEnquiryCourse] = useState<ComputerCourse | null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filtered = activeFilter === "all"
    ? COMPUTER_COURSES
    : COMPUTER_COURSES.filter((c) => c.category === activeFilter);

  const openEnquiry = (course: ComputerCourse) => {
    setEnquiryCourse(course);
    setFormName("");
    setFormPhone("");
    setFormSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } };

  return (
    <motion.div {...fade} className="space-y-8">
      {/* Hero Header */}
      <section className="rounded-2xl bg-gradient-to-br from-[#F0F7FA] to-[#E8F4FD] border border-[#0A3D62]/8 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2">
          <Sparkle size={16} weight="fill" className="text-[#0A3D62]" />
          <span className="text-[11px] font-bold uppercase tracking-wide text-[#0A3D62]/60">Complementary Skills</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0A3D62]">
          Digital Skills for Career & Life
        </h1>
        <p className="mt-2 text-[14px] text-slate-600 max-w-[55ch] leading-relaxed">
          Practical computer courses designed to complement your driving license.
          Perfect for school leavers, young drivers, and job seekers who want to stand out.
        </p>
        <img
          src={IMAGES.computerLab}
          alt="Georgeal computer training lab with students learning office and design software"
          className="mt-5 h-48 w-full rounded-xl object-cover ring-1 ring-[#0A3D62]/10"
          loading="lazy"
        />
      </section>

      {/* Beginner-Friendly Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="rounded-2xl border border-[#0A3D62]/10 bg-white p-5 shadow-sm"
      >
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F39C12]/10">
            <Lightbulb size={20} weight="fill" className="text-[#F39C12]" />
          </div>
          <div>
            <p className="text-[14px] font-bold text-[#0A3D62]">Practical & Beginner-Friendly</p>
            <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
              Our computer packages are designed from the ground up for complete beginners,
              school leavers, and busy drivers. No prior technical background required.
              Every lesson is hands-on in our modern lab.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`rounded-full px-4 py-2 text-[12px] font-bold transition-all duration-200 ${
              activeFilter === f.key
                ? "bg-[#0A3D62] text-white shadow-md shadow-[#0A3D62]/20"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 active:scale-[0.97]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((course, idx) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-[#0A3D62]/15"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0A3D62]/8 text-[#0A3D62]">
                  {ICON_MAP[course.icon] || <Monitor size={22} weight="fill" />}
                </div>
                {course.badge && (
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                    course.badge === "Most Popular"
                      ? "bg-[#FF793F]/10 text-[#FF793F]"
                      : course.badge === "Save 15%"
                      ? "bg-[#25D366]/10 text-[#25D366]"
                      : "bg-[#0A3D62]/8 text-[#0A3D62]"
                  }`}>
                    {course.badge}
                  </span>
                )}
              </div>

              {/* Title & Level */}
              <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-[#FF793F]">{course.level}</p>
              <h3 className="mt-0.5 text-[14px] font-bold text-[#0A3D62] leading-snug">{course.title}</h3>

              {/* Description */}
              <p className="mt-2 text-[12px] text-slate-500 leading-relaxed line-clamp-2">{course.description}</p>

              {/* Duration & Price */}
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <CreditCard size={12} /> KES {course.priceKES.toLocaleString()}
                </span>
              </div>
              {course.installments && (
                <p className="mt-1 text-[11px] text-slate-400">{course.installments}</p>
              )}

              {/* Topics */}
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {course.topics.slice(0, 4).map((t) => (
                  <li key={t} className="rounded-full bg-[#0A3D62]/5 px-2 py-0.5 text-[10px] font-semibold text-[#0A3D62]">
                    {t}
                  </li>
                ))}
                {course.topics.length > 4 && (
                  <li className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    +{course.topics.length - 4} more
                  </li>
                )}
              </ul>

              {/* Actions */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => openEnquiry(course)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A3D62] px-3 py-2 text-[12px] font-bold text-white transition hover:brightness-110 active:scale-[0.97]"
                >
                  Enquire
                </button>
                <a
                  href={whatsAppLink(course.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-[12px] font-bold text-white shadow-md shadow-[#25D366]/20 transition hover:brightness-110 active:scale-[0.97]"
                >
                  <WhatsappLogo size={14} weight="fill" /> WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Benefits Section */}
      <section className="rounded-2xl bg-gradient-to-br from-[#F0F7FA] to-white border border-[#0A3D62]/8 p-6">
        <h2 className="text-[16px] font-black text-[#0A3D62]">What You Get With Every Course</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex items-start gap-3 rounded-xl bg-white/60 p-3 border border-slate-100">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#0A3D62]/8 text-[#0A3D62]">
                {b.icon}
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#0A3D62]">{b.title}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-[16px] font-black text-[#0A3D62]">Common Questions</h2>
        <div className="mt-4 space-y-3">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-slate-100 transition hover:border-[#0A3D62]/15">
              <summary className="flex cursor-pointer items-center justify-between p-4 text-[13px] font-bold text-[#0A3D62] [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="px-4 pb-4 text-[12px] text-slate-500 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Cross-Sell Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-[#0A3D62] p-6 text-center text-white"
      >
        <p className="text-[15px] font-bold">Combine with your Driving License & Save 15%</p>
        <p className="mt-1 text-[12px] text-white/70">
          Get both skills in one enrolment. Our Ultimate Career Combo includes Class B2 driving + all computer packages.
        </p>
        <button
          onClick={() => onNavigate("driving-courses")}
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-[13px] font-bold text-[#0A3D62] transition hover:bg-white/90 active:scale-[0.97]"
        >
          View Driving Courses <ArrowRight size={14} />
        </button>
      </motion.div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {enquiryCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={() => setEnquiryCourse(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase text-[#FF793F]">Course Enquiry</p>
                  <h3 className="mt-1 text-[16px] font-black text-[#0A3D62]">{enquiryCourse.title}</h3>
                  <p className="mt-1 text-[12px] text-slate-500">
                    {enquiryCourse.duration} &middot; KES {enquiryCourse.priceKES.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setEnquiryCourse(null)}
                  className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                >
                  <X size={16} />
                </button>
              </div>

              {formSubmitted ? (
                <div className="mt-6 flex flex-col items-center py-6 text-center">
                  <CheckCircle size={40} weight="fill" className="text-[#25D366]" />
                  <p className="mt-3 text-[14px] font-bold text-[#0A3D62]">Enquiry Received!</p>
                  <p className="mt-1 text-[12px] text-slate-500">We will call you back within 2 hours.</p>
                  <a
                    href={whatsAppLink(enquiryCourse.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2 text-[12px] font-bold text-white transition hover:brightness-110"
                  >
                    <WhatsappLogo size={14} weight="fill" /> Also send via WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-slate-400">Full Name</label>
                    <input
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] outline-none transition focus:border-[#0A3D62]"
                      placeholder="e.g. James Mwangi"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase text-slate-400">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] outline-none transition focus:border-[#0A3D62]"
                      placeholder="e.g. 0700 123 456"
                    />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      className="flex-1 rounded-xl bg-[#0A3D62] py-3 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
                    >
                      Submit Enquiry
                    </button>
                    <a
                      href={whatsAppLink(enquiryCourse.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-3 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
                    >
                      <WhatsappLogo size={14} weight="fill" />
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}