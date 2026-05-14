"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/brand/Logo";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-emerald-950 text-white" exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
          <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <LogoMark className="mx-auto mb-5 h-16 w-16" />
            <p className="font-display text-xl font-bold">AGRA CITIZEN SCHOOL</p>
            <div className="mx-auto mt-5 h-1 w-44 overflow-hidden rounded-full bg-white/15">
              <motion.div className="h-full bg-emerald-400" initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
