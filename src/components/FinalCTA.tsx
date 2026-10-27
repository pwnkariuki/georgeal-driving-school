import { motion } from "framer-motion";
import { WhatsappLogo, Phone, CurrencyCircleDollar } from "@phosphor-icons/react";
import { CONTACT, WHATSAPP_LINK, telLink } from "../data/sitemapData";

export default function FinalCTA() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-[#0A3D62] px-5 py-10 text-center text-white sm:px-10 sm:py-14"
      >
        {/* Decorative blobs */}
        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#FF793F]/20 blur-3xl" />
        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[#25D366]/15 blur-3xl" />

        <div className="relative z-10">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF793F]">
            Ready to Start?
          </p>
          <h2 className="mt-2 text-[24px] font-black leading-tight tracking-tight sm:text-[32px]">
            Your License is One<br />
            <span className="text-[#FF793F]">WhatsApp Away</span>
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-[13px] leading-relaxed text-white/60">
            Book your first lesson today. Pay via M-Pesa lipa polepole in easy
            installments. No stress, just driving.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:brightness-110 active:scale-[0.97] sm:w-auto"
            >
              <WhatsappLogo size={18} weight="fill" />
              {CONTACT.phone}
            </a>
            <a
              href={telLink(CONTACT.phone)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3.5 text-[14px] font-bold text-white transition hover:bg-white/10 active:scale-[0.97] sm:w-auto"
            >
              <Phone size={16} weight="fill" /> Call Now
            </a>
          </div>

          {/* M-Pesa notice */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold text-white/70">
            <CurrencyCircleDollar size={14} className="text-[#FF793F]" />
            Paybill: {CONTACT.mpesaPaybill} &bull; Account: {CONTACT.mpesaAccount}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
