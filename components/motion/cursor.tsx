"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });
  const [variant, setVariant] = useState<"default" | "hover" | "view">(
    "default",
  );
  const [enabled, setEnabled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canHover =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!canHover || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };

    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const v = el.dataset.cursor as "hover" | "view" | undefined;
      setVariant(v ?? "hover");
    };
    const leave = () => setVariant("default");

    document.addEventListener("mousemove", move);
    const targets = document.querySelectorAll<HTMLElement>(
      'a, button, [data-cursor], input, textarea, [role="button"]',
    );
    targets.forEach((t) => {
      t.addEventListener("mouseenter", enter);
      t.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", enter);
        t.removeEventListener("mouseleave", leave);
      });
      document.documentElement.classList.remove("has-custom-cursor");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = variant === "view" ? 88 : variant === "hover" ? 56 : 28;
  const dotSize = variant === "view" ? 0 : 4;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ width: ringSize, height: ringSize }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full border border-white/90 flex items-center justify-center"
        >
          {variant === "view" ? (
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">
              view
            </span>
          ) : null}
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          x,
          y,
          width: dotSize,
          height: dotSize,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
