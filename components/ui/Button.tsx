import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({ href, children, variant = "primary", className, type = "button", disabled }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition duration-300 focus:outline-none focus:ring-4 focus:ring-[rgba(82,194,120,0.18)] disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary" && "bg-[var(--brand)] text-[var(--warm)] shadow-[0_16px_32px_rgba(10,61,31,0.22)] hover:-translate-y-1 hover:bg-[var(--brand-strong)]",
    variant === "secondary" && "border border-[rgba(10,61,31,0.14)] bg-white/65 text-[var(--brand)] shadow-sm hover:-translate-y-1 hover:bg-white",
    variant === "ghost" && "text-[var(--brand)] hover:bg-[var(--brand-faint)]",
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
