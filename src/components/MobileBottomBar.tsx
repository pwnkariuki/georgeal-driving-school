import { motion } from "framer-motion";
import { Phone, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { CONTACT, WHATSAPP_LINK, telLink } from "../data/sitemapData";
import type { PageKey } from "../types";

interface Props {
  onNavigate: (page: PageKey) => void;
}

export default function MobileBottomBar({ onNavigate }: Props) {
  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-sm md:hidden"
    >
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        <a
          href={telLink(CONTACT.phone)}
          className="flex flex-col items-center justify-center gap-1 py-3 active:bg-slate-50"
        >
          <Phone size={20} weight="fill" className="text-[#0A3D62]" />
          <span className="text-[10px] font-bold text-[#0A3D62]">Call Now</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 active:bg-[#25D366]/10"
        >
          <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
          <span className="text-[10px] font-bold text-[#25D366]">WhatsApp</span>
        </a>
        <button
          onClick={() => onNavigate("contact")}
          className="flex flex-col items-center justify-center gap-1 py-3 active:bg-orange-50"
        >
          <EnvelopeSimple size={20} weight="fill" className="text-[#FF793F]" />
          <span className="text-[10px] font-bold text-[#FF793F]">Enquire</span>
        </button>
      </div>
    </motion.div>
  );
}