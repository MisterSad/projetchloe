"use client";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Identité de marque",
    description:
      "Logotypes, chartes graphiques et déclinaisons print et digital.",
  },
  {
    title: "Design éditorial",
    description:
      "Affiches, brochures, mise en page et systèmes typographiques.",
  },
  {
    title: "Motion design",
    description:
      "Animations de logo, vidéos courtes et habillages pour les réseaux sociaux.",
  },
  {
    title: "Illustration",
    description:
      "Illustrations vectorielles, pictogrammes et univers visuels sur mesure.",
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

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="competences" className="scroll-mt-20 bg-grey-bg py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,5.5vw,4.5rem)]">
            Je peux vous aider sur<span className="text-blue"> :</span>
          </h2>
        </Reveal>

        <ol className="mt-14 border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <li className="group grid gap-2 border-b border-line py-7 transition-all duration-500 hover:bg-white/60 sm:grid-cols-[4rem_1fr_1.2fr_3rem] sm:items-baseline sm:gap-6 sm:px-4">
                <span className="text-sm font-semibold text-blue">
                  (0{i + 1})
                </span>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {s.title}
                </h3>
                <p className="leading-relaxed text-ink/60">{s.description}</p>
                <span
                  aria-hidden
                  className="hidden justify-self-end text-2xl text-blue opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 sm:block"
                >
                  ↗
                </span>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Reveal>
            <span className="mr-2 text-sm uppercase tracking-[0.2em] text-grey-txt">
              Boîte à outils
            </span>
          </Reveal>
          {outils.map((outil, i) => (
            <motion.span
              key={outil}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="cursor-default rounded-full border border-ink/15 bg-white px-4 py-1.5 text-sm transition-colors hover:border-blue hover:text-blue"
            >
              {outil}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
