import { Sunrise } from "lucide-react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-emerald-500 text-emerald-950 shadow-lg shadow-emerald-950/15", className)}>
      <Sunrise size={28} strokeWidth={2.4} />
    </span>
  );
}

export function LogoLockup({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="hidden sm:block">
        <span className={cn("block font-display text-sm font-black tracking-[0.18em]", light ? "text-white" : "text-[color:var(--foreground)]")}>AGRA CITIZEN</span>
        <span className={cn("block text-xs font-semibold uppercase tracking-[0.28em]", light ? "text-emerald-100" : "text-emerald-700")}>School</span>
      </span>
    </span>
  );
}
