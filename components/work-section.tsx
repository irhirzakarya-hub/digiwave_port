"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Settings,
  Film,
  Globe,
  Megaphone,
  TrendingUp,
  Users,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  PenTool,
  Download,
  FileX,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import WhatsappQuickReplies from "@/components/ui/whatsapp-quick-replies";

interface DesignProject {
  id: number;
  title: string;
  fileName: string;
  url: string;
  rawUrl: string;
  category?: string;
}

type FilterCategory = "all" | "design" | "automation" | "video" | "web" | "ads" | "boost" | "management";

// PDF Modal Component with robust viewer and fallback
function PDFModal({
  isOpen,
  onClose,
  project,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: DesignProject | null;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const [pdfError, setPdfError] = useState(false);

  const { t } = useLanguage();

  // Reset error state when project changes
  useEffect(() => {
    setPdfError(false);
  }, [project]);

  if (!project) return null;

  const pdfSrc = project.url;

  const pdfOptions = [
    {
      label: t.whatsapp.pdfRequestLabel,
      message: t.whatsapp.pdfRequestMessage.replace("{title}", project.title),
    },
    ...t.whatsapp.questions,
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(2, 8, 16, 0.95)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[90vw] h-[85vh] max-w-6xl bg-background/50 glass rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-background to-transparent">
              <div className="flex flex-col gap-1 pr-4 min-w-0">
                <h3 className="text-lg font-bold text-foreground truncate">
                  {project.title}
                </h3>
                <span
                  className="text-sm font-medium truncate"
                  style={{ color: "#00d4ff" }}
                >
                  {project.fileName}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {/* Download Button */}
                <a
                  href={pdfSrc}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 flex items-center gap-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-bold border border-primary/40"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Télécharger</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer with Fallback */}
            <div className="w-full h-full pt-20 pb-4 px-4">
              {pdfError ? (
                /* Error Fallback Card */
                <div className="w-full h-full flex flex-col items-center justify-center bg-muted/50 rounded-lg border border-primary/20">
                  <FileX className="w-20 h-20 text-primary/50 mb-6" />
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    PDF disponible sur demande
                  </h4>
                  <p className="text-muted-foreground mb-6 text-center px-4 max-w-md">
                    Ce document n&apos;est pas disponible en ligne. Contactez-nous
                    pour le recevoir directement.
                  </p>
                  <WhatsappQuickReplies
                    phone="212661306863"
                    options={pdfOptions}
                    buttonClass="px-6 py-3 rounded-full bg-green-600 text-white font-bold hover:bg-green-500 transition-all duration-300 flex items-center gap-2"
                    className="inline-flex items-center"
                  />
                </div>
              ) : (
                <iframe
                  src={pdfSrc}
                  className="w-full h-full rounded-lg bg-white"
                  onError={() => setPdfError(true)}
                  title={project.title}
                >
                  {/* Fallback for browsers that don't support iframe */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-muted rounded-lg">
                    <FileText className="w-16 h-16 text-primary/50 mb-4" />
                    <p className="text-muted-foreground mb-4 text-center px-4">
                      Le PDF ne peut pas être affiché dans le navigateur.
                    </p>
                    <a
                      href={pdfSrc}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:neon-glow transition-all duration-300"
                    >
                      Cliquez ici pour télécharger
                    </a>
                  </div>
                </iframe>
              )}
            </div>

            {/* Navigation Arrows */}
            {hasPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPdfError(false);
                  onPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPdfError(false);
                  onNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border"
                aria-label="Suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Design Project Card
function DesignProjectCard({
  project,
  onClick,
}: {
  project: DesignProject;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl glass cursor-pointer neon-border"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Placeholder with Type Badge */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-700 flex flex-col items-center justify-center gap-3">
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-bold rounded-full border border-primary/60 text-primary bg-background/80 backdrop-blur-sm">
            PDF
          </span>
        </div>

        <div className="relative">
          <Palette className="w-12 h-12 text-white/40" />
          <FileText className="w-6 h-6 text-white/60 absolute -bottom-1 -right-1" />
        </div>

        <div className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}>
          <span className="flex items-center gap-2 text-primary font-bold text-sm">
            فتح الملف
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-bold text-foreground mb-1 truncate">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-4 break-words">
          {project.fileName}
        </p>
        <a
          href={project.url}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <Download className="w-3 h-3" />
          تنزيل
        </a>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

export function WorkSection() {
  const { t, language, isRTL } = useLanguage();
  const [projects, setProjects] = useState<DesignProject[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("design");

  // PDF Modal State
  const [selectedPdfIndex, setSelectedPdfIndex] = useState<number | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const pageSize = 3;
  
  // Filter categories
  const filterCategories: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "Tous" },
    { key: "design", label: "Design" },
    { key: "automation", label: "Automatisation" },
    { key: "video", label: "Montage Vidéo" },
    { key: "web", label: "Sites Web" },
    { key: "ads", label: "Publicités" },
    { key: "boost", label: "Boost" },
    { key: "management", label: "Gestion" },
  ];

  // Filter projects by category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const pageProjects = filteredProjects.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  useEffect(() => {
    let isActive = true;

    fetch("/api/design-files")
      .then(async (res) => {
        const data = await res.json();
        if (!isActive) return;
        if (Array.isArray(data)) {
          // Set category to 'design' for all files from the design folder
          const projectsWithCategory = data.map((p: DesignProject) => ({
            ...p,
            category: "design" as const,
          }));
          setProjects(projectsWithCategory);
          setFetchError(false);
          setCurrentPage(0);
        } else {
          setFetchError(true);
        }
      })
      .catch(() => setFetchError(true))
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const openPdfModal = (index: number) => {
    setSelectedPdfIndex(index);
    setIsPdfModalOpen(true);
  };

  const closePdfModal = () => {
    setIsPdfModalOpen(false);
    setSelectedPdfIndex(null);
  };

  const goToPrevPdf = () => {
    if (selectedPdfIndex !== null && selectedPdfIndex > 0) {
      setSelectedPdfIndex(selectedPdfIndex - 1);
    }
  };

  const goToNextPdf = () => {
    if (selectedPdfIndex !== null && selectedPdfIndex < filteredProjects.length - 1) {
      setSelectedPdfIndex(selectedPdfIndex + 1);
    }
  };

  return (
    <>
      <section
        id="work"
        className={`py-20 md:py-32 relative ${isRTL ? "rtl" : ""}`}
      >
        {/* Semi-transparent background per spec */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(5,13,26,0.6)" }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-4">
              {t.work.overline}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-orbitron)]">
              {t.work.title}
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          {!loading && !fetchError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
            >
              {filterCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    activeFilter === cat.key
                      ? "bg-primary text-primary-foreground neon-glow border border-primary"
                      : "border border-border text-silver hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          )}

          {loading ? (
            <div className="text-center py-20 text-muted-foreground">
              {language === "fr" ? "Chargement des fichiers..." : language === "ar" ? "جاري تحميل الملفات..." : "Loading files..."}
            </div>
          ) : fetchError ? (
            <div className="text-center py-20 text-muted-foreground">
              {language === "fr" ? "Impossible de charger les fichiers." : language === "ar" ? "تعذر تحميل الملفات." : "Unable to load files."}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              {language === "fr" ? "Aucun fichier trouvé." : language === "ar" ? "لا يوجد ملفات." : "No files found."}
            </div>
          ) : (
            <>
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {pageProjects.map((project, index) => (
                    <DesignProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => openPdfModal(filteredProjects.findIndex(p => p.id === project.id))}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-8">
                <p className="text-sm text-muted-foreground">
                  {language === "fr"
                    ? `Page ${currentPage + 1} / ${pageCount}`
                    : language === "ar"
                    ? `الصفحة ${currentPage + 1} من ${pageCount}`
                    : `Page ${currentPage + 1} / ${pageCount}`}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className="px-4 py-2 rounded-full border border-border text-sm font-bold text-silver disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {language === "fr" ? "Précédent" : language === "ar" ? "السابق" : "Previous"}
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(pageCount - 1, currentPage + 1))}
                    disabled={currentPage >= pageCount - 1}
                    className="px-4 py-2 rounded-full border border-border text-sm font-bold text-silver disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {language === "fr" ? "Suivant" : language === "ar" ? "التالي" : "Next"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <PDFModal
        isOpen={isPdfModalOpen}
        onClose={closePdfModal}
        project={selectedPdfIndex !== null ? filteredProjects[selectedPdfIndex] : null}
        onPrev={goToPrevPdf}
        onNext={goToNextPdf}
        hasPrev={selectedPdfIndex !== null && selectedPdfIndex > 0}
        hasNext={selectedPdfIndex !== null && selectedPdfIndex < filteredProjects.length - 1}
      />
    </>
  );
}
