"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Facebook, Instagram, Menu, Moon, Phone, Sun, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/brand/Logo";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

const dropdown = [
  { label: "Curriculum", href: "/academics#curriculum" },
  { label: "Clubs", href: "/academics#clubs" },
  { label: "Labs", href: "/facilities#labs" }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={cn("transition-all duration-300 py-2", scrolled ? "bg-white/90 text-brand shadow-sm backdrop-blur-md border-b border-brand/5" : "bg-transparent text-brand")}>
        <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="AGRA CITIZEN SCHOOL home">
          <LogoLockup />
        </Link>

        <div className="hidden items-center gap-8 lg:flex ml-12">
          {navItems.map((item) => (
            <div key={item.href} className="relative" onMouseEnter={() => item.label === "Academics" && setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <Link
                href={item.href}
                className={cn("group relative inline-flex items-center gap-1 px-2 py-2 text-[13px] font-bold tracking-[0.2em] uppercase transition-colors link-underline", pathname === item.href ? "text-brand" : "text-brand/50 hover:text-brand")}
              >
                {item.label}
                {item.label === "Academics" && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                <span className={cn("absolute bottom-0 left-0 h-0.5 w-full bg-gold scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100", pathname === item.href && "scale-x-100")} />
              </Link>
              {item.label === "Academics" && (
                <AnimatePresence>
                  {dropOpen && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute left-0 top-11 w-48 rounded-2xl border border-brand/10 bg-white p-2 shadow-xl">
                      {dropdown.map((drop) => (
                        <Link key={drop.href} href={drop.href} className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-brand/5">
                          {drop.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Toggle dark mode" onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-full border border-brand/10 bg-white/50 text-brand hover:bg-white transition shadow-sm">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white lg:hidden shadow-md">
            <Menu size={20} />
          </button>
        </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 bg-emerald-950/55 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 24 }} className="ml-auto h-full w-[86%] max-w-sm bg-white p-5 shadow-2xl dark:bg-emerald-950">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-black">AGRA CITIZEN SCHOOL</span>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 dark:bg-white/10">
                  <X size={20} />
                </button>
              </div>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className={cn("rounded-2xl px-4 py-3 text-base font-semibold", pathname === item.href ? "bg-emerald-700 text-white" : "bg-emerald-50 text-emerald-950 dark:bg-white/10 dark:text-white")}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
