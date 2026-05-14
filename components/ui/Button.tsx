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
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary" && "bg-emerald-700 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-800 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-400",
    variant === "secondary" && "border border-emerald-700/20 bg-white/85 text-emerald-950 shadow-sm hover:border-emerald-700/40 hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
    variant === "ghost" && "text-emerald-900 hover:bg-emerald-50 dark:text-emerald-100 dark:hover:bg-white/10",
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
