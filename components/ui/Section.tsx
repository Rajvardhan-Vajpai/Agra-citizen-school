import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ eyebrow, title, text, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="container-premium">
        {(eyebrow || title || text) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">{eyebrow}</p>}
            {title && <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>}
            {text && <p className="mt-4 text-base leading-8 text-[color:var(--muted)] sm:text-lg">{text}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
