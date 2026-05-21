"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [spring]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6 }}
      className="rounded-[22px] border border-[rgba(10,61,31,0.1)] bg-white/60 p-4 text-left shadow-[0_14px_40px_rgba(10,61,31,0.08)] backdrop-blur"
    >
      <p className="font-display text-3xl font-bold leading-none text-[var(--brand)]">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-[color:var(--muted)]">{label}</p>
    </motion.div>
  );
}
