"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import CopyEmail from "./CopyEmail";

const links = [
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cold/75 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <a href="#" className="text-lg font-extrabold tracking-tight">
          Chloé<span className="text-blue">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CopyEmail />
        </div>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue md:hidden"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
