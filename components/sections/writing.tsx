"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/motion/reveal-text";
import { FadeIn } from "@/components/motion/fade-in";

const posts = [
  {
    date: "Apr 2026",
    kind: "Essay",
    title: "You don't have a GPU problem. You have an embedding problem.",
    href: "https://shivama205.substack.com/p/you-dont-have-a-gpu-problem-you-have",
  },
  {
    date: "Mar 2026",
    kind: "Essay",
    title:
      "Most eval frameworks assume RAG. Your AI product probably isn't.",
    href: "https://shivama205.substack.com/p/most-eval-frameworks-assume-rag-your",
  },
  {
    date: "Mar 2026",
    kind: "Essay",
    title: "Your codebase is illegible to AI. Here's what we did about it.",
    href: "https://shivama205.substack.com/p/your-codebase-is-illegible-to-ai",
  },
  {
    date: "Dec 2025",
    kind: "Deep dive",
    title:
      "Understanding softmax: the mathematical foundation behind transformer attention",
    href: "https://shivama205.substack.com/p/understanding-softmax-the-mathematical",
  },
  {
    date: "Oct 2025",
    kind: "Essay",
    title:
      "The stability/expressivity duality: architectural trade-offs in modern LLMs",
    href: "https://shivama205.substack.com/p/the-stabilityexpressivity-duality",
  },
  {
    date: "Aug 2025",
    kind: "Build log",
    title: "Building a production-ready insurance chatbot with Google ADK",
    href: "https://shivama205.substack.com/p/building-a-production-ready-insurance",
  },
];

const contributions = [
  {
    project: "modelcontextprotocol/python-sdk",
    title: "Accept wildcard media types in Accept header (RFC 7231)",
    href: "https://github.com/modelcontextprotocol/python-sdk/pull/2152",
  },
  {
    project: "openclaw/openclaw",
    title: "Deduplicate slash commands by skillName across interfaces",
    href: "https://github.com/openclaw/openclaw/pull/27521",
  },
  {
    project: "langwatch/langwatch",
    title: "Remove hardcoded model default in version-config builder",
    href: "https://github.com/langwatch/langwatch/pull/2020",
  },
];

const sideProjects = [
  {
    name: "DocBrain",
    stars: 13,
    desc: "Self-hosted RAG with RBAC, multi-LLM, and NL→SQL over tabular data.",
    href: "https://github.com/shivama205/DocBrain",
  },
  {
    name: "Dependency-Injection-Python",
    stars: 29,
    desc: "A practical, no-magic DI pattern for production Python services.",
    href: "https://github.com/shivama205/Dependency-Injection-Python",
  },
];

export function Writing() {
  return (
    <section id="writing" className="relative py-32 md:py-48 bg-paper-2/30">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="flex items-center gap-3 text-ink-soft mb-10">
          <span className="block h-px w-10 bg-ink-soft" />
          <span className="eyebrow">Writing & open source</span>
        </FadeIn>
        <RevealText
          as="h2"
          text="What I'm thinking about."
          className="display text-5xl md:text-7xl text-ink max-w-[16ch]"
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h3 className="eyebrow text-ink-muted mb-6">Recent posts</h3>
            <ul className="border-t border-rule">
              {posts.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="border-b border-rule"
                >
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-6 py-6 hover:bg-paper transition-colors duration-300 px-2 -mx-2 rounded-lg"
                  >
                    <div className="flex items-baseline gap-6 min-w-0">
                      <span className="eyebrow text-ink-muted shrink-0 hidden sm:block">
                        {p.date}
                      </span>
                      <span className="font-serif text-xl md:text-2xl text-ink leading-snug truncate">
                        {p.title}
                      </span>
                    </div>
                    <span className="flex items-center gap-3 text-ink-muted text-xs uppercase tracking-[0.18em] shrink-0">
                      <span className="hidden md:inline">{p.kind}</span>
                      <span
                        aria-hidden
                        className="font-serif italic text-base text-accent transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h3 className="eyebrow text-ink-muted mb-6">
                Recent contributions
              </h3>
              <ul className="grid gap-3">
                {contributions.map((c) => (
                  <li key={c.href}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-5 rounded-2xl border border-rule bg-paper hover:border-ink/40 transition-colors"
                    >
                      <div className="font-mono text-xs text-accent">
                        {c.project}
                      </div>
                      <p className="mt-2 text-ink leading-snug">{c.title}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-xs text-ink-muted uppercase tracking-[0.18em]">
                        Merged PR
                        <span
                          aria-hidden
                          className="font-serif italic text-base text-accent transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow text-ink-muted mb-6">Side projects</h3>
              <ul className="grid gap-3">
                {sideProjects.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-5 rounded-2xl border border-rule bg-paper hover:border-ink/40 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 font-mono text-sm text-ink">
                          <span className="text-accent">{`{ }`}</span>
                          <span className="group-hover:text-accent transition-colors truncate">
                            {s.name}
                          </span>
                        </div>
                        <p className="mt-2 text-ink-soft text-sm leading-snug">
                          {s.desc}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1 text-xs text-ink-muted">
                        <span aria-hidden>★</span>
                        {s.stars}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href="https://shivama205.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-u text-ink text-sm"
                >
                  Read everything on Substack
                </a>
                <a
                  href="https://github.com/shivama205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-u text-ink-soft text-sm"
                >
                  More on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
