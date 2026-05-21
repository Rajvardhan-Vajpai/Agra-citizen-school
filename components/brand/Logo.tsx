import { Sunrise } from "lucide-react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] via-amber-300 to-[var(--brand-soft)] text-[var(--brand)] shadow-lg shadow-[rgba(10,61,31,0.15)]",
        className
      )}
    >
      <Sunrise size={28} strokeWidth={2.4} />
    </span>
  );
}

export function LogoLockup() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="hidden sm:block">
        <span className="block font-display text-lg font-bold tracking-[-0.045em] text-[var(--brand)]">
          Agra Citizen School
        </span>
        <span className="block text-xs font-medium text-[var(--brand-strong)]">
          Agra, Uttar Pradesh
        </span>
      </span>
    </span>
  );
}
