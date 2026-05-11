"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-paper/70 backdrop-blur-md border-b border-rule/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-ink"
          aria-label="Shivam Technologies — home"
        >
          <span className="font-serif text-2xl leading-none">S</span>
          <span className="text-sm tracking-tight font-medium">
            Shivam Technologies
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors link-u"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper hover:bg-accent transition-colors"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col items-end gap-1.5"
        >
          <span
            className={cn(
              "h-px bg-ink transition-all duration-300",
              open ? "w-6 rotate-45 translate-y-[3px]" : "w-6",
            )}
          />
          <span
            className={cn(
              "h-px bg-ink transition-all duration-300",
              open ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-paper border-t border-rule"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-serif text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-full bg-ink text-paper"
              >
                Start a project <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
