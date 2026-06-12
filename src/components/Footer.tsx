"use client";

import Reveal from "./Reveal";

const reseaux = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-ink py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-paper/50">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Un projet, un stage, une{" "}
            <span className="pr-[0.12em] italic text-accent">alternance</span>&nbsp;?
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="mailto:chloe@exemple.fr"
            className="mt-10 inline-block font-display text-[clamp(1.6rem,5vw,3.5rem)] italic underline decoration-accent decoration-2 underline-offset-8 transition-colors duration-300 hover:text-accent"
          >
            chloe@exemple.fr
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="mt-14 flex gap-8">
            {reseaux.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-sm text-paper/60 transition-colors hover:text-paper"
                >
                  {r.label} ↗
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-paper/10 pt-8 text-sm text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Chloé — Tous droits réservés</p>
          <p>Conçu &amp; développé avec soin</p>
        </div>
      </div>
    </footer>
  );
}
