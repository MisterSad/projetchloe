"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Révélation ligne par ligne : chaque ligne monte depuis un masque
function MaskedLine({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={reduceMotion ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Léger effet de parallaxe à la sortie du hero
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6"
    >
      {/* Halo de couleur en arrière-plan */}
      <motion.div
        aria-hidden
        className="absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <MaskedLine delay={0.1} className="text-sm uppercase tracking-[0.3em] text-muted">
          Portfolio — 2026
        </MaskedLine>

        <h1 className="mt-6 font-display text-[clamp(2.5rem,10.5vw,9rem)] font-semibold leading-[0.95] tracking-tight">
          <MaskedLine delay={0.25}>Chloé,</MaskedLine>
          <MaskedLine delay={0.4}>
            <span className="pr-[0.18em] italic text-accent">designer</span>en
          </MaskedLine>
          <MaskedLine delay={0.55}>communication visuelle</MaskedLine>
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <MaskedLine delay={0.75} className="max-w-md text-lg leading-relaxed text-muted">
            Étudiante passionnée par l&apos;identité de marque, l&apos;édition et
            l&apos;image en mouvement. Je donne forme aux idées.
          </MaskedLine>
          <MaskedLine delay={0.9}>
            <a
              href="#projets"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-paper transition-transform duration-300 hover:scale-105"
            >
              Voir mes projets
              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </MaskedLine>
        </div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.span
          className="block text-2xl"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
