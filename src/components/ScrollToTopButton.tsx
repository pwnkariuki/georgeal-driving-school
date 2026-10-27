import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaretUp } from "@phosphor-icons/react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll back to top"
          title="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-24 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0A3D62] text-white shadow-lg shadow-[#0A3D62]/40 transition hover:bg-[#0d4a75] md:bottom-6 md:left-6"
        >
          <CaretUp size={22} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}