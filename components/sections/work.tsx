"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/motion/reveal-text";
import { FadeIn } from "@/components/motion/fade-in";

const projects = [
  {
    client: "B2B SaaS · India",
    title: "AI support triage that cut response time 60%",
    summary:
      "Routing, drafting, and human-in-the-loop review for a 12-person support team handling 5k tickets/month.",
    tags: ["RAG", "Eval Harness", "Slack"],
    accent: "from-[#c2410c] to-[#f59e0b]",
  },
  {
    client: "Fintech · Global",
    title: "Document intelligence pipeline for KYC ops",
    summary:
      "Layout-aware extraction across 40+ document types, with an ops dashboard for exception handling and audit.",
    tags: ["LayoutLM", "Postgres", "Internal Tool"],
    accent: "from-[#0f766e] to-[#84cc16]",
  },
  {
    client: "Marketplace · India",
    title: "Agentic merchandising assistant",
    summary:
      "An internal copilot that drafts category pages, pricing experiments, and seller emails from a single brief.",
    tags: ["Agents", "Eval", "Internal Tool"],
    accent: "from-[#7c3aed] to-[#ec4899]",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="flex items-center gap-3 text-ink-soft mb-10">
          <span className="block h-px w-10 bg-ink-soft" />
          <span className="eyebrow">Selected work</span>
        </FadeIn>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <RevealText
            as="h2"
            text="Shipped — and still in production."
            className="display text-5xl md:text-7xl text-ink max-w-[16ch]"
          />
          <FadeIn delay={0.2}>
            <p className="text-ink-soft max-w-sm">
              Names anonymized where required. Happy to walk through any of
              these in a call.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 flex flex-col gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  client,
  title,
  summary,
  tags,
  accent,
  index,
}: (typeof projects)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const reverse = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      data-cursor="view"
      className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-rule pt-10 cursor-pointer"
    >
      <div
        className={`relative overflow-hidden rounded-3xl aspect-[5/3] lg:aspect-auto lg:h-[28rem] col-span-12 lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
      >
        <motion.div
          style={{ y }}
          className={`absolute -inset-y-12 inset-x-0 bg-gradient-to-br ${accent}`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30" />
        <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.4),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,.3),transparent_45%)]" />
        <div className="absolute top-6 left-6 right-6 flex items-start justify-between text-white/90">
          <span className="eyebrow">{client}</span>
          <span className="font-serif italic text-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            Case study →
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 text-white/90 text-xs">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`col-span-12 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
      >
        <span className="eyebrow text-ink-muted">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-serif text-3xl md:text-5xl text-ink leading-[1.05]">
          {title}
        </h3>
        <p className="mt-6 text-ink-soft text-base md:text-lg leading-relaxed max-w-md">
          {summary}
        </p>
      </div>
    </motion.article>
  );
}
