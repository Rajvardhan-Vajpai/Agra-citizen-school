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
    <motion.div ref={ref} whileHover={{ y: -6 }} className="rounded-2xl border border-emerald-900/10 bg-emerald-800 p-6 text-center text-white shadow-xl shadow-emerald-950/10 backdrop-blur">
      <p className="font-display text-4xl font-black sm:text-5xl">{display}{suffix}</p>
      <p className="mt-2 text-sm font-medium text-emerald-50">{label}</p>
    </motion.div>
  );
}
