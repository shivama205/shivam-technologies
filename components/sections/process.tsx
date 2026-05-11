"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/motion/reveal-text";
import { FadeIn } from "@/components/motion/fade-in";

const steps = [
  {
    no: "I",
    title: "Discover",
    body: "We map the problem, the constraints, and the success metric. Where AI helps, where it doesn't, and what 'shipped' actually looks like.",
    bullets: ["Stakeholder interviews", "Use-case shortlist", "Success metric"],
  },
  {
    no: "II",
    title: "Prototype",
    body: "A working slice in days, not weeks. Real data, real model, real interface — enough to find the rough edges before they're expensive.",
    bullets: ["Architecture spike", "Eval harness", "Cost & latency budget"],
  },
  {
    no: "III",
    title: "Build",
    body: "Production engineering, weekly demos, shared repo. No black-box phases — you see and steer the work as it happens.",
    bullets: ["Feature delivery", "Quality cycles", "Observability"],
  },
  {
    no: "IV",
    title: "Handover",
    body: "Documented, deployed, and trained. Your team owns the system; I'm reachable if you want me back for the next round.",
    bullets: ["Production deploy", "Docs & training", "Optional retainer"],
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Translate inner track horizontally as the outer container scrolls.
  // 4 panels → translate by -75% across the scroll progress.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="process" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-b border-paper/10">
        <FadeIn className="flex items-center gap-3 text-paper/60 mb-10">
          <span className="block h-px w-10 bg-paper/60" />
          <span className="eyebrow">How I work</span>
        </FadeIn>
        <RevealText
          as="h2"
          text="Four phases. Weekly demos. No surprises."
          className="display text-5xl md:text-7xl text-paper max-w-[18ch]"
        />
        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-paper/70">
            A predictable rhythm so you always know what's shipping, what's
            next, and what it'll cost.
          </p>
        </FadeIn>
      </div>

      {/* Horizontal scroll panels */}
      <div ref={ref} className="relative h-[400vh] hidden md:block">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-8 px-10 will-change-transform">
            {steps.map((s) => (
              <Step key={s.no} {...s} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile fallback: vertical stack */}
      <div className="md:hidden flex flex-col gap-6 px-6 py-16">
        {steps.map((s, i) => (
          <motion.div
            key={s.no}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            className="border border-paper/15 rounded-2xl p-6 bg-white/[0.02]"
          >
            <StepInner {...s} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Step(s: (typeof steps)[number]) {
  return (
    <div className="w-[80vw] md:w-[60vw] lg:w-[44vw] shrink-0 h-[70vh] border border-paper/15 rounded-2xl p-10 md:p-14 bg-white/[0.02] backdrop-blur-sm flex flex-col">
      <StepInner {...s} />
    </div>
  );
}

function StepInner({ no, title, body, bullets }: (typeof steps)[number]) {
  return (
    <>
      <div className="flex items-baseline justify-between text-paper/50 mb-10">
        <span className="font-serif italic text-3xl">{no}</span>
        <span className="eyebrow">phase</span>
      </div>
      <h3 className="font-serif text-5xl md:text-6xl text-paper leading-[1.0]">
        {title}
      </h3>
      <p className="mt-6 text-lg text-paper/70 leading-relaxed max-w-md">
        {body}
      </p>
      <ul className="mt-auto pt-10 grid grid-cols-1 gap-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm text-paper/70">
            <span className="block h-px w-6 bg-accent" />
            {b}
          </li>
        ))}
      </ul>
    </>
  );
}
