"use client";

import { useState } from "react";

const EMAIL = "chloe@exemple.fr";

// Bouton « copier l'e-mail » — pattern repris des portfolios studio
export default function CopyEmail({ light = false }: { light?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard indisponible (permissions) : on n'affiche rien de cassé
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <a href={`mailto:${EMAIL}`} className="transition-opacity hover:opacity-60">
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copier l'adresse e-mail"
        className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wider transition-all duration-300 ${
          light
            ? "border-white/40 hover:bg-white hover:text-blue"
            : "border-ink/25 hover:bg-ink hover:text-white"
        } ${copied ? (light ? "bg-white text-blue" : "bg-ink text-white") : ""}`}
      >
        {copied ? "copié ✓" : "copier"}
      </button>
    </span>
  );
}
