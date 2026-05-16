import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[2rem] border border-brand/5 bg-white p-8 shadow-2xl shadow-brand/5 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-brand/10 dark:border-white/10 dark:bg-white/[0.06]", className)}>
      {children}
    </div>
  );
}
