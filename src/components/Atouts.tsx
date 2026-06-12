"use client";

import Reveal from "./Reveal";

const atouts = [
  {
    titre: "Un regard neuf",
    texte:
      "Une direction visuelle singulière, nourrie par la culture graphique d'aujourd'hui.",
  },
  {
    titre: "Le souci du détail",
    texte:
      "Du premier croquis au fichier d'exécution, chaque pixel et chaque approche typographique comptent.",
  },
  {
    titre: "Des systèmes, pas des one-shots",
    texte:
      "Des chartes pensées pour durer et rester cohérentes sur tous vos supports.",
  },
  {
    titre: "L'écoute avant tout",
    texte:
      "Vos objectifs guident mes choix de design — pas l'inverse.",
  },
];

export default function Atouts() {
  return (
    <section className="bg-grey-bg py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,5.5vw,4.5rem)]">
            Pourquoi travailler avec moi<span className="text-blue"> ?</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {atouts.map((a, i) => (
            <Reveal key={a.titre} delay={i * 0.08}>
              <div className="group border-t border-line pt-6 transition-colors">
                <span className="text-sm font-semibold text-blue">
                  (0{i + 1})
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {a.titre}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/60">
                  {a.texte}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
