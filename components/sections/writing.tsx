"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/motion/reveal-text";
import { FadeIn } from "@/components/motion/fade-in";

const posts = [
  {
    date: "Apr 2026",
    kind: "Essay",
    title: "Why your RAG eval lies — and what to measure instead",
    href: "#",
  },
  {
    date: "Feb 2026",
    kind: "Notes",
    title: "The unglamorous half of agent engineering",
    href: "#",
  },
  {
    date: "Dec 2025",
    kind: "Talk",
    title: "Shipping AI features without a 20-person team",
    href: "#",
  },
  {
    date: "Oct 2025",
    kind: "Essay",
    title: "Production prompts are not chat prompts",
    href: "#",
  },
];

const repos = [
  {
    name: "evals-lite",
    desc: "A 200-line eval runner for small AI features.",
    href: "#",
  },
  {
    name: "agent-recipes",
    desc: "Boring, reliable agent patterns I keep reaching for.",
    href: "#",
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
                    data-cursor="hover"
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

          <div className="lg:col-span-5">
            <h3 className="eyebrow text-ink-muted mb-6">Open source</h3>
            <ul className="grid gap-4">
              {repos.map((r) => (
                <li key={r.name}>
                  <a
                    href={r.href}
                    data-cursor="hover"
                    className="group block p-6 rounded-2xl border border-rule bg-paper hover:border-ink/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 font-mono text-sm text-ink">
                      <span className="text-accent">{`{ }`}</span>
                      <span className="group-hover:text-accent transition-colors">
                        {r.name}
                      </span>
                    </div>
                    <p className="mt-3 text-ink-soft">{r.desc}</p>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/shivama205"
                  className="link-u text-ink text-sm"
                >
                  View everything on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
