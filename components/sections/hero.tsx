"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/motion/magnetic";

const HeroCanvas = dynamic(
  () => import("./hero-canvas").then((m) => m.HeroCanvas),
  { ssr: false },
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col"
    >
      {/* WebGL backdrop */}
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>
      {/* Soft paper overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-paper/40 pointer-events-none" />

      <div className="flex-1 mx-auto max-w-7xl w-full px-6 md:px-10 pt-40 md:pt-48 pb-24 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 text-ink-soft"
        >
          <span className="block h-px w-10 bg-ink-soft" />
          <span className="eyebrow">Shivam Technologies · est. 2026</span>
        </motion.div>

        <h1 className="display mt-6 text-[15vw] md:text-[10.5vw] lg:text-[8.4rem] xl:text-[10rem] text-ink max-w-[18ch]">
          <RevealLine delay={0.2}>
            <span>AI&nbsp;</span>
            <em className="italic">products,</em>
          </RevealLine>
          <RevealLine delay={0.5}>
            <span>built with</span>{" "}
            <span className="relative">
              care
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                viewBox="0 0 300 24"
                className="absolute -bottom-2 left-0 w-full h-3 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <motion.path d="M2 16 Q 80 4 160 14 T 298 10" />
              </motion.svg>
            </span>
            <span className="text-ink-soft">.</span>
          </RevealLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed"
        >
          A senior engineer working directly with founders and teams to design
          and ship AI features, automations, and the production systems behind
          them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors"
            >
              Start a project
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Magnetic>
          <a href="#work" className="text-sm text-ink-soft link-u">
            See selected work
          </a>
        </motion.div>
      </div>

      {/* Bottom marker */}
      <div className="relative border-t border-ink/15">
        <div className="overflow-hidden whitespace-nowrap py-4">
          <div className="animate-marquee inline-block">
            <Tags />
            <Tags />
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Tags() {
  const items = [
    "AI Strategy",
    "RAG & Retrieval",
    "Agents & Workflows",
    "LLM Evaluation",
    "Production Infra",
    "Automation",
    "Founder-direct",
    "India · Global",
  ];
  return (
    <div className="inline-flex items-center gap-10 pr-10 text-xs uppercase tracking-[0.2em] text-ink-soft">
      {items.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-10">
          {t}
          <span aria-hidden className="text-accent">
            ◇
          </span>
        </span>
      ))}
    </div>
  );
}
