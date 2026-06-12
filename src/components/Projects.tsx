"use client";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

// Projets de démonstration — remplacer par de vrais visuels dans /public
// et passer les cartes en <Image> de next/image.
const projets = [
  {
    title: "Identité — Café Lumen",
    category: "Branding",
    year: "2026",
    gradient: "from-orange-200 via-rose-200 to-amber-100",
  },
  {
    title: "Affiches — Festival Hors-Champ",
    category: "Édition",
    year: "2025",
    gradient: "from-stone-300 via-zinc-200 to-orange-100",
  },
  {
    title: "Motion — Studio Particule",
    category: "Animation",
    year: "2025",
    gradient: "from-amber-100 via-orange-200 to-stone-200",
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projets" className="scroll-mt-24 bg-ink py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-paper/50">
            Projets sélectionnés
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Travaux <span className="italic text-accent">récents</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet, i) => (
            <Reveal key={projet.title} delay={i * 0.12}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group cursor-pointer"
              >
                <div
                  className={`aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${projet.gradient}`}
                >
                  <div className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                    <span className="font-display text-7xl italic text-ink/20">
                      ✺
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-xl font-medium">
                      {projet.title}
                    </h3>
                    <p className="mt-1 text-sm text-paper/50">{projet.category}</p>
                  </div>
                  <span className="text-sm text-paper/50">{projet.year}</span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center text-paper/50">
            D&apos;autres projets sur demande —{" "}
            <a
              href="#contact"
              className="text-paper underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            >
              écrivez-moi
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
