import { cn } from "@/lib/utils";

export function PlaceholderImage({ title, className, tone = "from-emerald-800 via-emerald-600 to-lime-500" }: { title: string; className?: string; tone?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/8", className)}>
      <div className={cn("absolute inset-x-0 top-0 h-2/3 bg-gradient-to-br", tone)} />
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-amber-300 shadow-[0_0_55px_rgba(252,211,77,.65)]" />
      <div className="absolute left-8 top-16 h-28 w-40 rounded-[2rem] bg-white/22 backdrop-blur-sm" />
      <div className="absolute left-14 top-28 h-20 w-52 rounded-t-[3rem] bg-white/92 shadow-xl" />
      <div className="absolute left-20 top-36 grid h-12 w-40 grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="rounded-md bg-emerald-100/90" />
        ))}
      </div>
      <div className="absolute bottom-24 right-10 flex items-end gap-3">
        {[44, 58, 50].map((height, index) => (
          <span key={index} className="relative block w-10 rounded-t-full bg-white/95 shadow-lg" style={{ height }}>
            <span className="absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-amber-200" />
          </span>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-white p-6">
        <div className="mb-4 h-2 w-28 rounded-full bg-emerald-600" />
        <div className="rounded-xl border border-emerald-900/10 bg-emerald-50/60 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">AI sample visual</p>
          <p className="font-display text-xl font-bold text-emerald-950">{title}</p>
        </div>
      </div>
    </div>
  );
}
