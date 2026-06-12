"use client";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

const disciplines = [
  {
    title: "Identité de marque",
    description: "Logotypes, chartes graphiques, déclinaisons print & digital",
  },
  {
    title: "Design éditorial",
    description: "Mise en page, affiches, brochures, systèmes typographiques",
  },
  {
    title: "Motion design",
    description: "Animations de logo, vidéos courtes, habillages réseaux sociaux",
  },
  {
    title: "Illustration",
    description: "Illustration vectorielle, pictogrammes, univers visuels sur mesure",
  },
];

const outils = [
  "Photoshop",
  "Illustrator",
  "InDesign",
  "After Effects",
  "Figma",
  "Premiere Pro",
  "Procreate",
  "Blender",
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="competences" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Compétences</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Ce que je sais <span className="italic text-accent">faire</span>
        </h2>
      </Reveal>

      <ol className="mt-16 border-t border-line">
        {disciplines.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.08}>
            <li className="group flex flex-col gap-2 border-b border-line py-8 transition-all duration-500 hover:pl-4 sm:flex-row sm:items-baseline sm:gap-10">
              <span className="font-display text-sm italic text-accent">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl font-medium sm:w-1/3 sm:text-3xl">
                {d.title}
              </h3>
              <p className="text-muted sm:flex-1">{d.description}</p>
              <span
                aria-hidden
                className="hidden text-2xl opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100 sm:block"
              >
                →
              </span>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-16">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">Outils</p>
        </Reveal>
        <ul className="flex flex-wrap gap-3">
          {outils.map((outil, i) => (
            <motion.li
              key={outil}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -2 }}
              className="cursor-default rounded-full border border-ink/20 px-5 py-2 text-sm transition-colors hover:border-accent hover:bg-accent hover:text-paper"
            >
              {outil}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
