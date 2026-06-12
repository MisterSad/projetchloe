"use client";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

// Parcours de démonstration — à remplacer par les vraies étapes.
const etapes = [
  {
    periode: "2024 — aujourd'hui",
    titre: "Bachelor Communication Visuelle",
    lieu: "École supérieure de design",
    description:
      "Spécialisation identité de marque et design éditorial. Projets en conditions réelles avec des commanditaires.",
  },
  {
    periode: "Été 2025",
    titre: "Stage — Studio de création",
    lieu: "Agence indépendante",
    description:
      "Déclinaisons d'identités visuelles, préparation de fichiers d'exécution, participation aux présentations clients.",
  },
  {
    periode: "2023 — 2024",
    titre: "Année préparatoire en arts appliqués",
    lieu: "Atelier préparatoire",
    description:
      "Fondamentaux du dessin, de la couleur et de la composition. Découverte de la chaîne graphique.",
  },
];

export default function Parcours() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="parcours" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Parcours</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Mon <span className="pr-[0.18em] italic text-accent">chemin</span>jusqu&apos;ici
        </h2>
      </Reveal>

      <div className="relative mt-16 pl-8">
        {/* Ligne verticale qui se dessine au scroll */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-0 h-full w-px origin-top bg-accent"
          initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        />

        <ol className="space-y-14">
          {etapes.map((etape, i) => (
            <Reveal key={etape.titre} delay={0.2 + i * 0.15}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
                />
                <p className="text-sm uppercase tracking-widest text-muted">
                  {etape.periode}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium">
                  {etape.titre}
                </h3>
                <p className="mt-1 text-sm text-accent">{etape.lieu}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  {etape.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={0.3}>
        <a
          href="/cv.pdf"
          download
          className="group mt-16 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-paper transition-transform duration-300 hover:scale-105"
        >
          Télécharger mon CV
          <span className="transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </Reveal>
    </section>
  );
}
