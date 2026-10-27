import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass,
  CaretDown,
  Question,
  X,
  WhatsappLogo,
  BookOpen,
  CreditCard,
  Monitor,
  ShieldCheck,
  CalendarBlank,
} from "@phosphor-icons/react";
import { FAQS, FAQ_CATEGORIES, CONTACT } from "../data/sitemapData";
import type { FaqCategory } from "../data/sitemapData";

const CATEGORY_ICONS: Record<FaqCategory, React.ReactNode> = {
  driving: <BookOpen size={14} weight="fill" />,
  payments: <CreditCard size={14} weight="fill" />,
  schedule: <CalendarBlank size={14} weight="fill" />,
  computer: <Monitor size={14} weight="fill" />,
  requirements: <ShieldCheck size={14} weight="fill" />,
};

const CATEGORY_COLORS: Record<FaqCategory, string> = {
  driving: "bg-[#0A3D62]/10 text-[#0A3D62]",
  payments: "bg-[#25D366]/10 text-[#1a9e4f]",
  schedule: "bg-[#FF793F]/10 text-[#FF793F]",
  computer: "bg-blue-50 text-blue-700",
  requirements: "bg-purple-50 text-purple-700",
};

interface FAQSectionProps {
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  compact = false,
  title = "Frequently Asked Questions",
  subtitle = "Get instant answers about our driving courses, computer packages, fees, and enrollment requirements.",
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let items = FAQS;
    if (activeCategory !== "all") {
      items = items.filter((f) => f.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, search]);

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hello Georgeal! I have a question about your courses."
  )}`;

  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0A3D62]/10">
            <Question size={18} weight="fill" className="text-[#0A3D62]" />
          </div>
          <h2 className="text-xl font-black tracking-tight text-[#0A3D62] sm:text-2xl">
            {title}
          </h2>
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
          {subtitle}
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <MagnifyingGlass
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-10 text-[13px] outline-none transition focus:border-[#0A3D62] focus:bg-white focus:ring-2 focus:ring-[#0A3D62]/10"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X size={16} weight="bold" />
          </button>
        )}
      </div>

      {/* Category Tabs */}
      {!compact && (
        <div className="mb-5 flex flex-wrap gap-2">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition-all ${
                  isActive
                    ? "bg-[#0A3D62] text-white shadow-md shadow-[#0A3D62]/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.key !== "all" && CATEGORY_ICONS[cat.key as FaqCategory]}
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* FAQ List */}
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl bg-slate-50 p-6 text-center"
            >
              <p className="text-[13px] font-semibold text-slate-500">
                No questions match your search.
              </p>
              <p className="mt-1 text-[12px] text-slate-400">
                Try a different keyword or ask us directly on WhatsApp.
              </p>
            </motion.div>
          ) : (
            filtered.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? "border-[#0A3D62]/20 bg-[#0A3D62]/3"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                  >
                    <span
                      className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold sm:inline-flex ${CATEGORY_COLORS[faq.category]}`}
                    >
                      {FAQ_CATEGORIES.find((c) => c.key === faq.category)?.label}
                    </span>
                    <span className="flex-1 text-[13px] font-bold text-[#0A3D62] sm:text-[14px]">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-slate-400"
                    >
                      <CaretDown size={16} weight="bold" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-4 pb-4 pt-3">
                          <p className="text-[13px] leading-relaxed text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="mt-6 flex flex-col items-center gap-3 rounded-xl bg-gradient-to-r from-[#0A3D62]/5 to-[#25D366]/5 p-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-[13px] font-bold text-[#0A3D62]">
            Still have questions?
          </p>
          <p className="text-[12px] text-slate-500">
            Chat with our admissions team on WhatsApp for instant answers.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-[12px] font-bold text-white shadow-md shadow-[#25D366]/20 transition hover:brightness-110 active:scale-[0.97]"
        >
          <WhatsappLogo size={15} weight="fill" />
          Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
