"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/motion/magnetic";
import { FadeIn } from "@/components/motion/fade-in";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-ink text-paper overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-accent/40 blur-[120px]"
      />
      <motion.div
        aria-hidden
        style={{ y: useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]) }}
        className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#7c3aed]/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-32 md:py-48">
        <FadeIn className="flex items-center gap-3 text-paper/60 mb-10">
          <span className="block h-px w-10 bg-paper/60" />
          <span className="eyebrow">Start a project</span>
        </FadeIn>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[12vw] md:text-[8.5vw] lg:text-[7.5rem] xl:text-[9rem] leading-[0.95] text-paper max-w-[12ch]"
        >
          Let&apos;s build{" "}
          <em className="italic text-accent-soft">something</em> good.
        </motion.h2>

        <FadeIn delay={0.2}>
          <p className="mt-10 max-w-xl text-lg text-paper/70 leading-relaxed">
            Drop a line about what you&apos;re trying to ship. I usually reply
            within a day. If we&apos;re a fit, we&apos;ll set up a 30-minute
            call.
          </p>
        </FadeIn>

        <div className="mt-14 flex flex-col sm:flex-row gap-8 sm:items-center">
          <Magnetic>
            <a
              href="mailto:shivama205@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-paper hover:text-accent-soft transition-colors"
            >
              shivama205@gmail.com
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-2"
              >
                →
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-paper/15 pt-10 text-sm text-paper/60">
          <Link
            label="GitHub"
            href="https://github.com/shivama205"
            external
          />
          <Link
            label="LinkedIn"
            href="https://www.linkedin.com/in/shivama205"
            external
          />
          <Link
            label="Substack"
            href="https://shivama205.substack.com"
            external
          />
          <Link label="Email" href="mailto:shivama205@gmail.com" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-paper/55">
          <div>
            <div className="eyebrow text-paper/40 mb-3">Registered office</div>
            <address className="not-italic font-serif text-lg leading-snug text-paper/80">
              Shivam Technologies
              <br />
              12B, Damdama Lake Road
              <br />
              Sahjawas (170), Rithoj
              <br />
              Gurgaon, Haryana — 122102
              <br />
              India
            </address>
          </div>
          <div>
            <div className="eyebrow text-paper/40 mb-3">Working hours</div>
            <p className="font-serif text-lg leading-snug text-paper/80">
              IST mornings for Asia / EU
              <br />
              IST evenings for US
              <br />
              Async-friendly otherwise
            </p>
          </div>
          <div>
            <div className="eyebrow text-paper/40 mb-3">For</div>
            <p className="font-serif text-lg leading-snug text-paper/80">
              Founders · operators
              <br />
              Engineering leaders
              <br />
              Teams shipping AI in production
            </p>
          </div>
        </div>
      </div>

      <footer className="relative border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-paper/40 text-xs">
          <span>© {new Date().getFullYear()} Shivam Technologies.</span>
          <span className="font-mono">Built in India · Working globally</span>
        </div>
      </footer>
    </section>
  );
}

function Link({
  label,
  href,
  external = false,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group inline-flex items-center justify-between gap-3 text-paper hover:text-accent-soft transition-colors"
    >
      <span className="link-u">{label}</span>
      <span
        aria-hidden
        className="font-serif italic transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
