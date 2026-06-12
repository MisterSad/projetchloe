"use client";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

// Parcours de démonstration — à remplacer par les vraies étapes.
const etapes = [
  {
    periode: "Depuis 2024",
    titre: "Bachelor Communication Visuelle",
    lieu: "École supérieure de design",
    description:
      "Spécialisation identité de marque et design éditorial. Projets en conditions réelles avec des commanditaires.",
  },
  {
    periode: "Été 2025",
    titre: "Stage en studio de création",
    lieu: "Agence indépendante",
    description:
      "Déclinaisons d'identités visuelles, préparation de fichiers d'exécution, participation aux présentations clients.",
  },
  {
    periode: "2023-2024",
    titre: "Année préparatoire en arts appliqués",
    lieu: "Atelier préparatoire",
    description:
      "Fondamentaux du dessin, de la couleur et de la composition. Découverte de la chaîne graphique.",
  },
];

export default function Parcours() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="parcours" className="scroll-mt-20 bg-warm py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,5.5vw,4.5rem)]">
            Mon parcours<span className="text-blue">.</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-8">
          {/* Ligne verticale qui se dessine au scroll */}
          <motion.div
            aria-hidden
            className="absolute left-0 top-0 h-full w-px origin-top bg-blue"
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <ol className="space-y-14">
            {etapes.map((etape, i) => (
              <Reveal key={etape.titre} delay={0.15 + i * 0.12}>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-blue"
                  />
                  <p className="text-sm font-medium uppercase tracking-widest text-grey-txt">
                    {etape.periode}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">
                    {etape.titre}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-blue">
                    {etape.lieu}
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/60">
                    {etape.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.25}>
          <a
            href="/cv.pdf"
            download
            className="group mt-16 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-medium text-white transition-colors duration-300 hover:bg-blue"
          >
            Télécharger mon CV
            <span className="transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
