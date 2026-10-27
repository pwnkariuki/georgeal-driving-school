import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  WhatsappLogo, Phone, PhonePlus, MapPin, Clock, CheckCircle,
  CalendarCheck, NavigationArrow, ChatCircleDots, CaretRight, ArrowRight, Users,
} from "@phosphor-icons/react";
import {
  CONTACT, DRIVING_COURSES, COMPUTER_COURSES, BRANCHES,
  telLink, waLinkTo, isOpenNow,
} from "../data/sitemapData";
import type { PageKey } from "../types";
import FAQSection from "./FAQSection";

interface Props {
  onNavigate: (p: PageKey) => void;
}

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } };

const EMPTY = { name: "", phone: "", course: "", branch: "", message: "" };

export default function ContactView({ onNavigate }: Props) {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const open = isOpenNow();

  const courseOptions = useMemo(
    () => [
      ...DRIVING_COURSES.map((c) => `${c.category} - ${c.title}`),
      ...COMPUTER_COURSES.map((c) => c.title),
      "Not sure yet",
    ],
    []
  );
  const branchOptions = useMemo(() => BRANCHES.map((b) => b.name), []);

  const composedMessage = useMemo(() => {
    const lines = ["Hello Georgeal Driving School!"];
    if (form.name) lines.push(`Name: ${form.name}`);
    if (form.phone) lines.push(`Phone: ${form.phone}`);
    if (form.course) lines.push(`Interested in: ${form.course}`);
    if (form.branch) lines.push(`Preferred branch: ${form.branch}`);
    if (form.message) lines.push(`Message: ${form.message}`);
    return lines.join("\
");
  }, [form]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    setSubmitted(true);
    toast.success("Enquiry received! Our team will call you back shortly.");
  }

  function resetForm() {
    setForm(EMPTY);
    setSubmitted(false);
  }

  return (
    <motion.div {...fade} className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A3D62]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0A3D62]">
          <ChatCircleDots size={13} weight="fill" /> We reply fast
        </span>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#0A3D62] sm:text-4xl">
          Contact Georgeal Driving School
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-[14px] text-slate-500">
          Call, chat on WhatsApp, or send an enquiry below. Our instructors at Dune Plaza,
          Kangundo Road are ready to get you on the road.
        </p>
      </div>

      {/* Big WhatsApp action cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={waLinkTo(CONTACT.whatsapp, "Hello Georgeal Driving School! I would like to enquire about your courses.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl bg-[#25D366] p-5 text-white shadow-lg shadow-[#25D366]/25 transition hover:brightness-110 active:scale-[0.98]"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/20">
            <WhatsappLogo size={26} weight="fill" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-bold uppercase tracking-wide text-white/80">WhatsApp — Main Line</p>
            <p className="truncate text-[18px] font-black">{CONTACT.phone}</p>
            <p className="text-[12px] text-white/80">Tap to open a chat instantly</p>
          </div>
          <CaretRight size={20} weight="bold" className="ml-auto shrink-0 transition group-hover:translate-x-1" />
        </a>

        <a
          href={waLinkTo(CONTACT.altWhatsapp, "Hello Georgeal Driving School! I would like to enquire about your courses.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/5 p-5 text-[#0A3D62] transition hover:bg-[#25D366]/10 active:scale-[0.98]"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
            <WhatsappLogo size={26} weight="fill" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#25D366]">WhatsApp — Second Line</p>
            <p className="truncate text-[18px] font-black">{CONTACT.altPhone}</p>
            <p className="text-[12px] text-slate-500">Tap to open a chat instantly</p>
          </div>
          <CaretRight size={20} weight="bold" className="ml-auto shrink-0 text-[#25D366] transition group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Enquiry form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-[16px] font-black text-[#0A3D62]">
              <PhonePlus size={18} weight="fill" className="text-[#FF793F]" /> Send an Enquiry
            </h2>
            <p className="mt-1 text-[13px] text-slate-500">Fill the form and we will call you back within 2 hours.</p>

            {submitted ? (
              <div className="mt-5 flex flex-col items-center rounded-2xl bg-[#25D366]/8 p-8 text-center">
                <CheckCircle size={44} weight="fill" className="text-[#25D366]" />
                <p className="mt-3 text-[16px] font-black text-[#0A3D62]">Enquiry Sent!</p>
                <p className="mt-1 max-w-sm text-[13px] text-slate-500">
                  Thank you, {form.name.split(" ")[0] || "friend"}. Our team will reach you on {form.phone} shortly.
                  Prefer to chat now?
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <a
                    href={waLinkTo(CONTACT.whatsapp, composedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white shadow-md shadow-[#25D366]/25 transition hover:brightness-110 active:scale-[0.97]"
                  >
                    <WhatsappLogo size={16} weight="fill" /> Send via WhatsApp instead
                  </a>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] font-bold text-slate-600 transition hover:border-[#0A3D62] hover:text-[#0A3D62]"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className={inputCls}
                      placeholder="e.g. James Mwangi"
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      type="tel"
                      className={inputCls}
                      placeholder="e.g. 0721 563 933"
                    />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Course Interested In">
                    <select
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className={selectCls}
                    >
                      <option value="">Select a course…</option>
                      {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </Field>
                  <Field label="Preferred Branch">
                    <select
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      className={selectCls}
                    >
                      <option value="">Select a branch…</option>
                      {branchOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Message / Questions">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us what you would like to learn, your schedule, or any questions."
                  />
                </Field>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0A3D62] py-3 text-[14px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
                  >
                    Submit Enquiry <ArrowRight size={16} />
                  </button>
                  <a
                    href={waLinkTo(CONTACT.whatsapp, composedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-[14px] font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
                  >
                    <WhatsappLogo size={16} weight="fill" /> Send via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Side: hours + address + branches */}
        <div className="space-y-4 lg:col-span-2">
          {/* Opening hours */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-[14px] font-black text-[#0A3D62]">
                <Clock size={16} weight="fill" className="text-[#FF793F]" /> Opening Hours
              </h3>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                  open ? "bg-[#25D366]/12 text-[#1a9e4f]" : "bg-red-50 text-red-600"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${open ? "bg-[#25D366] animate-pulse" : "bg-red-500"}`} />
                {open ? "Open Now" : "Closed"}
              </span>
            </div>
            <div className="mt-3 space-y-1.5 text-[13px] text-slate-600">
              <p className="flex items-center gap-2"><CalendarCheck size={15} className="text-[#0A3D62]" /> {CONTACT.hours}</p>
              <p className="text-[12px] text-slate-400">
                {open ? "We are accepting calls and walk-ins right now." : "Send an enquiry and we will reply as soon as we open."}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-2 text-[14px] font-black text-[#0A3D62]">
              <MapPin size={16} weight="fill" className="text-[#FF793F]" /> Main Location
            </h3>
            <p className="mt-2 text-[14px] font-bold text-[#0A3D62]">{CONTACT.address}</p>
            <p className="mt-1 text-[12px] text-slate-500">Dune Plaza is our head office — parking available, walk-ins welcome.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A3D62]/8 px-3 py-2 text-[12px] font-bold text-[#0A3D62] transition hover:bg-[#0A3D62]/15"
              >
                <NavigationArrow size={14} weight="fill" /> Get Directions
              </a>
              <a
                href={telLink(CONTACT.phone)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A3D62]/8 px-3 py-2 text-[12px] font-bold text-[#0A3D62] transition hover:bg-[#0A3D62]/15"
              >
                <Phone size={14} weight="fill" /> Call Main Line
              </a>
            </div>
          </div>

          {/* Other branches */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-2 text-[14px] font-black text-[#0A3D62]">
              <Users size={16} weight="fill" className="text-[#FF793F]" /> Other Branches
            </h3>
            <p className="mt-1 text-[12px] text-slate-500">We are across Nairobi &amp; Kiambu. Pick the closest to you.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {BRANCHES.filter((b) => b.id !== "dune-plaza").slice(0, 8).map((b) => (
                <a
                  key={b.id}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery || `${b.name}, Nairobi`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-600 transition hover:border-[#0A3D62] hover:text-[#0A3D62]"
                >
                  <MapPin size={12} className="text-[#FF793F]" /> {b.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => onNavigate("branches")}
              className="mt-4 flex items-center gap-1 text-[13px] font-bold text-[#0A3D62] hover:underline"
            >
              View all branches &amp; contacts <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        compact
        title="Common Questions"
        subtitle="Quick answers about enrollment, fees, schedules, and courses. Can't find what you need? Chat with us on WhatsApp."
      />
    </motion.div>
  );
}

const inputCls =
  "mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] outline-none transition focus:border-[#0A3D62] focus:ring-2 focus:ring-[#0A3D62]/10";
const selectCls =
  "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[13px] outline-none transition focus:border-[#0A3D62] focus:ring-2 focus:ring-[#0A3D62]/10";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase text-slate-400">{label}</span>
      {children}
    </label>
  );
}