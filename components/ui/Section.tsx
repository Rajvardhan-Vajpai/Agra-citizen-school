import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

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
            {eyebrow && <Reveal><p className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-gold/80">{eyebrow}</p></Reveal>}
            {title && <Reveal delay={0.1}><h2 className="font-display text-4xl font-medium tracking-tight text-brand sm:text-5xl lg:text-6xl">{title}</h2></Reveal>}
            {text && <Reveal delay={0.2}><p className="mt-6 text-base leading-relaxed text-brand/60 sm:text-lg">{text}</p></Reveal>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
