"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

// Phrase qui « s'allume » mot après mot au fil du scroll
const PHRASE =
  "Un bon design demande du temps, de l'écoute et des choix clairs. C'est ce que je m'applique à faire sur chaque projet.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = PHRASE.split(" ");

  return (
    <section className="bg-warm py-40">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-sm uppercase tracking-[0.25em] text-grey-txt">
          Ma conviction
        </p>
        {reduceMotion ? (
          <p className="display text-[clamp(1.9rem,4.5vw,3.8rem)]">{PHRASE}</p>
        ) : (
          <p ref={ref} className="display text-[clamp(1.9rem,4.5vw,3.8rem)]">
            {words.map((word, i) => (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[i / words.length, (i + 1) / words.length]}
              >
                {word}
              </Word>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
