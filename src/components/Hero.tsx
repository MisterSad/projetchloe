"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

// Révélation lettre par lettre : chaque caractère monte depuis un masque
function SplitChars({ text, baseDelay }: { text: string; baseDelay: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <span aria-label={text} role="text" className="inline-block">
      {text.split("").map((char, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={reduceMotion ? false : { y: "110%", rotate: 6 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: baseDelay + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Mots « interactifs » glissés dans la phrase d'intro
function Pill({ children, delay }: { children: string; delay: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.span
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduceMotion ? undefined : { rotate: -3, scale: 1.08 }}
      className="mx-1 inline-block cursor-default rounded-full border border-ink/25 px-3 py-0.5 text-[0.8em] align-middle transition-colors hover:border-blue hover:text-blue"
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0.7);
  const my = useMotionValue(0.35);
  const sx = useSpring(mx, { stiffness: 45, damping: 18 });
  const sy = useSpring(my, { stiffness: 45, damping: 18 });
  const left = useTransform(sx, (v) => `${v * 100}%`);
  const top = useTransform(sy, (v) => `${v * 100}%`);

  return (
    <section
      onMouseMove={(e) => {
        if (reduceMotion) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-cold px-6"
    >
      {/* Halo bleu qui suit la souris */}
      <motion.div
        aria-hidden
        style={{ left, top }}
        className="pointer-events-none absolute h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/25 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl pt-20">
        <p className="overflow-hidden text-sm font-medium uppercase tracking-[0.25em] text-grey-txt">
          <motion.span
            className="block"
            initial={reduceMotion ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Portfolio — Communication visuelle
          </motion.span>
        </p>

        <div className="display mt-4 text-[clamp(4.5rem,17vw,15rem)]">
          <SplitChars text="Chloé" baseDelay={0.25} />
          <span className="text-blue">
            <SplitChars text="." baseDelay={0.55} />
          </span>
        </div>

        <h1 className="display mt-2 max-w-4xl text-[clamp(1.8rem,4.5vw,3.8rem)]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Identité visuelle, édition
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              &amp; image en mouvement<span className="text-blue">_</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70"
        >
          Étudiante designer, je passe mes journées à
          <Pill delay={1.3}>dessiner</Pill>
          <Pill delay={1.4}>composer</Pill>et
          <Pill delay={1.5}>animer</Pill>
          des idées qui font réagir.
        </motion.p>
      </div>

      {/* Indicateur de scroll */}
      <motion.a
        href="#competences"
        aria-label="Descendre vers les compétences"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-ink/50 transition-colors hover:text-blue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.span
          className="block text-xl"
          animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
