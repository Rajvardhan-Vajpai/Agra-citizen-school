import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function PageHero({ title, text, label }: { title: string; text: string; label: string }) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 pt-28 text-white">
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="container-premium relative grid min-h-[420px] items-center gap-8 py-14 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-emerald-200">{label}</p>
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">{text}</p>
        </div>
        <PlaceholderImage title={label} className="hidden min-h-[320px] lg:block" />
      </div>
    </section>
  );
}
