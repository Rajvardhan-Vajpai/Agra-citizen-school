"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Facebook, Instagram, Menu, Moon, Phone, Sun, X, Youtube } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 shadow-lg shadow-emerald-950/10">
      <div className="hidden border-b border-white/10 bg-emerald-950 text-white lg:block">
        <div className="container-premium flex h-10 items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
            <span>Welcome to AGRA CITIZEN SCHOOL, Agra</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-200">Online Fee Payment</a>
            <a href="#" className="hover:text-amber-200">ERP Login</a>
            <a href="/admissions" className="rounded-full bg-amber-300 px-4 py-1.5 font-black text-emerald-950">Admission Open</a>
            <Facebook size={15} />
            <Instagram size={15} />
            <Youtube size={16} />
          </div>
        </div>
      </div>
      <nav className={cn("transition duration-300", scrolled ? "bg-white/95 text-emerald-950 backdrop-blur-xl dark:bg-emerald-950/95 dark:text-white" : "bg-emerald-800 text-white")}>
        <div className="container-premium flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="AGRA CITIZEN SCHOOL home">
          <LogoLockup light={!scrolled && true} />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className="relative" onMouseEnter={() => item.label === "Academics" && setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <Link
                href={item.href}
                className={cn("inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition", pathname === item.href ? "bg-amber-300 text-emerald-950" : scrolled ? "text-emerald-950 hover:bg-emerald-50 dark:text-white dark:hover:bg-white/10" : "text-white hover:bg-white/12")}
              >
                {item.label}
                {item.label === "Academics" && <ChevronDown size={14} />}
              </Link>
              {item.label === "Academics" && (
                <AnimatePresence>
                  {dropOpen && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute left-0 top-11 w-48 rounded-2xl border border-emerald-900/10 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-emerald-950">
                      {dropdown.map((drop) => (
                        <Link key={drop.href} href={drop.href} className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-emerald-50 dark:hover:bg-white/10">
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

        <div className="flex items-center gap-2">
          <button aria-label="Toggle dark mode" onClick={toggleTheme} className={cn("grid h-11 w-11 place-items-center rounded-full border shadow-sm backdrop-blur transition", scrolled ? "border-emerald-900/10 bg-white/80 hover:bg-white dark:border-white/10 dark:bg-white/10" : "border-white/20 bg-white/12 text-white hover:bg-white/18")}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full bg-emerald-700 text-white lg:hidden">
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
