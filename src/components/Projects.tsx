"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Reveal from "./Reveal";

const projets = [
  {
    title: "Café Lumen",
    category: "Identité visuelle & packaging",
    year: "2026",
    image: "/projet-lumen.svg",
  },
  {
    title: "Festival Hors-Champ",
    category: "Affiches & édition",
    year: "2025",
    image: "/projet-horschamp.svg",
  },
  {
    title: "Studio Particule",
    category: "Motion design",
    year: "2025",
    image: "/projet-particule.svg",
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projets" className="scroll-mt-20 bg-cold py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-[clamp(2.2rem,5.5vw,4.5rem)]">
              Projets choisis<span className="text-blue">.</span>
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-grey-txt">
              Sélection 2025-2026
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet, i) => (
            <Reveal key={projet.title} delay={i * 0.1}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={projet.image}
                    alt={`Affiche du projet ${projet.title}`}
                    width={800}
                    height={1000}
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:rotate-1"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between border-b border-line pb-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-blue">
                      {projet.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink/55">{projet.category}</p>
                  </div>
                  <span className="text-sm text-grey-txt">{projet.year}</span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
