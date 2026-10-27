import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import HeaderNav from "./components/HeaderNav";
import MobileBottomBar from "./components/MobileBottomBar";
import PageViews from "./components/PageViews";
import SitemapVisualizer from "./components/SitemapVisualizer";
import Footer from "./components/Footer";
import CustomLoader from "./components/CustomLoader";
import ScrollToTopButton from "./components/ScrollToTopButton";
import type { PageKey } from "./types";

const LOADER_LABELS: Record<PageKey, string> = {
  home: "Welcome",
  about: "About Us",
  "driving-courses": "Driving Courses",
  "computer-courses": "Computer Courses",
  branches: "Our Branches",
  contact: "Contact Us",
  terms: "Terms & Conditions",
  pledge: "Road Safety Pledge",
};

export default function App() {
  const [page, setPage] = useState<PageKey>("home");
  const [viewMode, setViewMode] = useState<"site" | "sitemap">("site");
  const [branchId, setBranchId] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const navigate = (p: PageKey, branch?: string) => {
    if (branch) setBranchId(branch);
    else if (p !== "branches") setBranchId(undefined);
    setPage(p);
  };

  const navigateBranch = (id: string) => {
    setBranchId(id);
    setPage("branches");
    setViewMode("site");
  };

  // Custom driving-themed loader shown across view/page transitions.
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 460);
    return () => clearTimeout(t);
  }, [page, viewMode]);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <HeaderNav
        active={page}
        onNavigate={navigate}
        viewMode={viewMode}
        onToggleView={() => setViewMode((v) => (v === "site" ? "sitemap" : "site"))}
      />

      <main className="mx-auto max-w-[1320px] px-4 py-8 pb-28 sm:px-6 md:pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${page}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {viewMode === "sitemap" ? (
              <SitemapVisualizer onNavigate={navigate} />
            ) : (
              <PageViews page={page} onNavigate={navigate} targetBranchId={branchId} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onNavigate={navigate}
        onNavigateBranch={navigateBranch}
        viewMode={viewMode}
        onToggleView={() => setViewMode((v) => (v === "site" ? "sitemap" : "site"))}
      />
      <MobileBottomBar onNavigate={navigate} />
      <ScrollToTopButton />
      <Toaster richColors position="top-right" />
      <CustomLoader show={loading} label={viewMode === "sitemap" ? "Sitemap" : LOADER_LABELS[page]} />
    </div>
  );
}