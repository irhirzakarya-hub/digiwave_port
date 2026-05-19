"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function AboutSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="about"
      className={`relative py-20 md:py-28 overflow-hidden ${isRTL ? "rtl" : ""}`}
    >
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at top, rgba(0,212,255,0.12), transparent 45%)" }}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-4">
            {t.nav.about}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-orbitron)]">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-[2rem] border border-white/10 p-8 md:p-12 shadow-[0_0_80px_rgba(0,212,255,0.08)]"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
            {t.about.slogan}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t.about.callout}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
