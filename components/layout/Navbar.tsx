"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Facebook, Instagram, Menu, Moon, Sun, X, Youtube } from "lucide-react";
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-premium pt-4">
        <div
          className={cn(
            "glass pointer-events-auto relative flex items-center justify-between gap-5 rounded-full px-4 py-3 transition-all duration-300",
            scrolled ? "translate-y-0" : "translate-y-1"
          )}
        >
          <Link href="/" className="min-w-max" aria-label="AGRA CITIZEN SCHOOL home">
            <LogoLockup />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.label === "Academics" && setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition",
                    pathname === item.href
                      ? "bg-[var(--gold-soft)] text-[var(--brand)]"
                      : "text-[color:var(--muted)] hover:bg-[var(--brand-faint)] hover:text-[var(--brand)]"
                  )}
                >
                  {item.label}
                  {item.label === "Academics" && <ChevronDown size={14} />}
                </Link>
                {item.label === "Academics" && (
                  <AnimatePresence>
                    {dropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="soft-card absolute left-0 top-11 w-48 p-2"
                      >
                        {dropdown.map((drop) => (
                          <Link
                            key={drop.href}
                            href={drop.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--brand)] hover:bg-[var(--brand-faint)]"
                          >
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
            <div className="hidden items-center gap-3 text-[var(--brand-strong)] lg:flex">
              <Facebook size={16} />
              <Instagram size={16} />
              <Youtube size={17} />
            </div>
            <Link
              href="/admissions"
              className="hidden rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] px-5 py-3 text-sm font-medium text-[var(--warm)] shadow-[0_16px_32px_rgba(10,61,31,0.22)] lg:inline-flex"
            >
              Admissions Open -&gt;
            </Link>
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(10,61,31,0.1)] bg-white/80 text-[var(--brand)] shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand)] text-[var(--warm)] lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[rgba(240,216,122,0.35)] bg-[rgba(10,61,31,0.92)] px-4 py-2 text-xs font-medium text-[var(--warm)] shadow-[0_18px_45px_rgba(10,61,31,0.22)] lg:flex">
            <span className="text-[var(--gold-soft)]">Admissions Open 2025-26</span>
            <span>Limited seats available for early applicants</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[rgba(10,61,31,0.48)] backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24 }}
              className="ml-auto h-full w-[86%] max-w-sm rounded-l-[28px] bg-[var(--warm)] p-5 shadow-2xl dark:bg-emerald-950"
            >
              <div className="mb-6 flex items-center justify-between">
                <LogoLockup />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand-faint)] text-[var(--brand)] dark:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium",
                      pathname === item.href
                        ? "bg-[var(--brand)] text-[var(--warm)]"
                        : "bg-white text-[var(--brand)] dark:bg-white/10 dark:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/admissions"
                className="mt-5 inline-flex rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] px-5 py-3 text-sm font-medium text-[var(--warm)]"
              >
                Admissions Open -&gt;
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
