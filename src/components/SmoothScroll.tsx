"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Défilement fluide façon studio — désactivé si l'utilisateur
// préfère réduire les animations.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.1,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
