"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealText } from "@/components/motion/reveal-text";
import { FadeIn } from "@/components/motion/fade-in";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <FadeIn className="flex items-center gap-3 text-ink-soft mb-10">
            <span className="block h-px w-10 bg-ink-soft" />
            <span className="eyebrow">About</span>
          </FadeIn>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-sm rounded-2xl overflow-hidden bg-paper-2"
          >
            <Image
              src="/shivam.jpg"
              alt="Shivam — founder of Shivam Technologies"
              fill
              priority={false}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-6 left-6 right-6 flex items-start justify-between text-paper">
              <span className="eyebrow drop-shadow-sm">Shivam · Founder</span>
              <span className="font-mono text-xs drop-shadow-sm">est. 2026</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-paper/90">
              <div className="font-serif text-2xl leading-tight">
                Shivam Aggarwal
              </div>
              <div className="eyebrow text-paper/70 mt-1">
                Senior engineer · Gurgaon, IN
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <RevealText
            as="h2"
            text="A senior engineer, a small studio of one."
            className="display text-4xl md:text-6xl text-ink max-w-[18ch]"
          />
          <FadeIn delay={0.15}>
            <div className="mt-10 space-y-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              <p>
                I'm Shivam. I've spent the last several years building product
                and infrastructure for AI-heavy teams — the work people see, and
                the unglamorous work underneath that makes any of it reliable.
              </p>
              <p>
                <em className="font-serif italic text-ink">
                  Shivam Technologies
                </em>{" "}
                is the way I work with founders and teams directly: short
                feedback loops, weekly demos, a shared repo, and a clear handoff
                at the end. No agency overhead, no five-person account team —
                just senior work, shipped.
              </p>
              <p>
                I split my time between India and global engagements. Most weeks
                I'm in deep on one engagement; I take a small number on at a
                time on purpose.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-rule pt-10">
              <Stat k="10+" v="Years shipping" />
              <Stat k="∞" v="Engagements at a time" hint="usually 1–2" />
              <Stat k="IN + Global" v="Where I work" />
              <Stat k="Weekly" v="Demo cadence" />
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v, hint }: { k: string; v: string; hint?: string }) {
  return (
    <div>
      <div className="font-serif text-4xl md:text-5xl text-ink leading-none">
        {k}
      </div>
      <div className="mt-3 text-sm text-ink-soft">{v}</div>
      {hint ? (
        <div className="mt-1 text-xs text-ink-muted italic font-serif">
          {hint}
        </div>
      ) : null}
    </div>
  );
}
