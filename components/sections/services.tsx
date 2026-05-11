"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/motion/reveal-text";
import { FadeIn } from "@/components/motion/fade-in";

const services = [
  {
    no: "01",
    title: "AI Consulting",
    blurb:
      "Where AI actually fits in your product — and where it doesn't. I work with founders on use-cases, architecture, model selection, evaluation, and the unglamorous bits like cost and latency.",
    deliverables: [
      "AI strategy & roadmap",
      "Architecture & model selection",
      "RAG / agents / fine-tuning",
      "Evaluation harnesses",
    ],
  },
  {
    no: "02",
    title: "Automation & Workflows",
    blurb:
      "Internal tools, agents, and AI-assisted workflows that quietly remove the work no one wants to do. Designed, built, deployed, and handed off — yours to own.",
    deliverables: [
      "Internal AI tools",
      "Agentic workflows",
      "Integrations & APIs",
      "Production deploy & handover",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="flex items-center gap-3 text-ink-soft mb-10">
          <span className="block h-px w-10 bg-ink-soft" />
          <span className="eyebrow">What I do</span>
        </FadeIn>

        <RevealText
          as="h2"
          text="Two things, done end-to-end."
          className="display text-5xl md:text-7xl lg:text-8xl text-ink max-w-[14ch]"
        />

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-ink-soft">
            No agency layer, no handoffs between five people. You work directly
            with me, from the first sketch to the production deploy.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <ServiceCard key={s.no} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  no,
  title,
  blurb,
  deliverables,
  index,
}: (typeof services)[number] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 md:p-10 bg-paper-2/40 border border-rule rounded-2xl overflow-hidden hover:bg-paper-2/80 transition-colors duration-500"
    >
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl transition-all duration-700 group-hover:bg-accent/20 group-hover:scale-125"
      />
      <div className="relative flex items-baseline justify-between mb-6">
        <span className="eyebrow text-ink-muted">{no} / 02</span>
        <span
          className="font-serif italic text-2xl text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
          aria-hidden
        >
          →
        </span>
      </div>
      <h3 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] mb-4">
        {title}
      </h3>
      <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-md">
        {blurb}
      </p>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
        {deliverables.map((d) => (
          <li
            key={d}
            className="flex items-center gap-3 text-sm text-ink-soft"
          >
            <span className="block h-px w-4 bg-accent" />
            {d}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
