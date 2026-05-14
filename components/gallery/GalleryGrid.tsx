"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", ...galleryItems.map((item) => item.category)];

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const items = useMemo(() => (active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active)), [active]);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button key={category} onClick={() => setActive(category)} className={cn("rounded-full px-4 py-2 text-sm font-bold transition", active === category ? "bg-emerald-700 text-white" : "border border-emerald-900/10 bg-white text-emerald-950 hover:bg-emerald-50 dark:bg-white/10 dark:text-white")}>
            {category}
          </button>
        ))}
      </div>
      <div className="masonry">
        {items.map((item) => (
          <motion.button
            layout
            key={item.id}
            onClick={() => setSelected(item)}
            style={{ height: item.height }}
            className={cn("relative mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl bg-gradient-to-br text-left shadow-xl", item.tone)}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="absolute inset-0 hero-grid opacity-35" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-80">{item.category}</p>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} onClick={(event) => event.stopPropagation()} className={cn("relative flex h-[70vh] w-full max-w-4xl items-end overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-white", selected.tone)}>
              <button aria-label="Close lightbox" onClick={() => setSelected(null)} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur">
                <X size={20} />
              </button>
              <div className="absolute inset-0 hero-grid opacity-30" />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-80">{selected.category}</p>
                <h3 className="font-display text-4xl font-black">{selected.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
