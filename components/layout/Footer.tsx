import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { contact, navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--brand)] text-white">
      <div className="container-premium grid gap-10 py-18 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="font-display text-2xl font-bold tracking-[-0.045em] text-[var(--warm)]">
                Agra Citizen School
              </p>
              <p className="text-sm font-medium text-white/65">Agra, Uttar Pradesh</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            Premium education in Agra, Uttar Pradesh, designed for excellence, character,
            and modern confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social media"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-bold text-[var(--warm)]">Explore</h3>
          <div className="grid gap-2">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/55 transition hover:text-[var(--brand-soft)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-bold text-[var(--warm)]">Admissions</h3>
          <div className="grid gap-2 text-sm text-white/55">
            <Link href="/contact" className="transition hover:text-[var(--brand-soft)]">
              Apply
            </Link>
            <Link href="/contact" className="transition hover:text-[var(--brand-soft)]">
              Visit Campus
            </Link>
            <Link href="/contact" className="transition hover:text-[var(--brand-soft)]">
              Fee Inquiry
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-bold text-[var(--warm)]">Connect</h3>
          <div className="grid gap-3 text-sm text-white/55">
            <p className="flex gap-3">
              <MapPin size={18} />
              {contact.address}
            </p>
            <p className="flex gap-3">
              <Phone size={18} />
              {contact.phone}
            </p>
            <p className="flex gap-3">
              <Mail size={18} />
              {contact.email}
            </p>
          </div>
          <form className="mt-5 flex overflow-hidden rounded-full bg-white p-1">
            <input
              aria-label="Email"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[var(--brand)] outline-none"
              placeholder="Email address"
              type="email"
            />
            <button
              aria-label="Subscribe"
              className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand)] text-[var(--warm)]"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/55">
        © {new Date().getFullYear()} AGRA CITIZEN SCHOOL. All rights reserved.
      </div>
    </footer>
  );
}
