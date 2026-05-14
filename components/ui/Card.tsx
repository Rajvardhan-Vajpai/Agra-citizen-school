import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06]", className)}>
      {children}
    </div>
  );
}
