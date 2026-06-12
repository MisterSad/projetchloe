"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import CopyEmail from "./CopyEmail";
import Reveal from "./Reveal";

const reseaux = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

const credits = ["Next.js", "Tailwind", "Motion", "Lenis"];

function LineReveal({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduceMotion = useReducedMotion();
  // On observe le conteneur (le masque) : le span interne, translaté hors
  // du masque, est invisible pour l'IntersectionObserver.
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <span ref={ref} className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduceMotion ? false : { y: "110%" }}
        animate={inView ? { y: 0 } : undefined}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-blue py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">
          Contact
        </p>

        <h2 className="display mt-6 text-[clamp(2.6rem,7.5vw,6.5rem)]">
          <LineReveal delay={0}>Construisons quelque</LineReveal>
          <LineReveal delay={0.12}>chose de mémorable.</LineReveal>
        </h2>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
            Stage, alternance ou projet freelance — je réponds vite et toujours
            avec des idées.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 text-2xl font-bold">
            <CopyEmail light />
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-white/20 pt-10 sm:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Réseaux
            </p>
            <ul className="mt-4 space-y-2">
              {reseaux.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {r.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Site réalisé avec
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              {credits.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              © {new Date().getFullYear()}
            </p>
            <p className="mt-4 text-white/80">
              Chloé — Communication visuelle
              <br />
              Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
