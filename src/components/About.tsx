"use client";

import Reveal from "./Reveal";

const chiffres = [
  { valeur: "3+", label: "années de formation" },
  { valeur: "20+", label: "projets réalisés" },
  { valeur: "8", label: "outils maîtrisés" },
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="max-w-3xl font-display text-3xl leading-snug tracking-tight sm:text-5xl">
          Je conçois des identités visuelles{" "}
          <span className="pr-[0.18em] italic text-accent">singulières</span>et des supports
          qui racontent une histoire — du premier croquis au fichier
          d&apos;exécution.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        {chiffres.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.1}>
            <div>
              <p className="font-display text-5xl font-semibold text-accent">
                {c.valeur}
              </p>
              <p className="mt-2 text-muted">{c.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
