import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { contact, navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container-premium grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="font-display font-black tracking-[0.12em]">AGRA CITIZEN SCHOOL</p>
              <p className="text-sm text-emerald-100">Excellence with character</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-emerald-100">A premium school experience built around academic ambition, personal care, modern facilities, and values that stay with students for life.</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social media" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-emerald-500 hover:text-emerald-950">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Quick Links</h3>
          <div className="grid gap-2">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-emerald-100 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Contact</h3>
          <div className="grid gap-3 text-sm text-emerald-100">
            <p className="flex gap-3"><MapPin size={18} />{contact.address}</p>
            <p className="flex gap-3"><Phone size={18} />{contact.phone}</p>
            <p className="flex gap-3"><Mail size={18} />{contact.email}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Newsletter</h3>
          <p className="mb-4 text-sm leading-7 text-emerald-100">Get admission updates, events, and campus news.</p>
          <form className="flex overflow-hidden rounded-full bg-white p-1">
            <input aria-label="Email" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-emerald-950 outline-none" placeholder="Email address" type="email" />
            <button aria-label="Subscribe" className="grid h-11 w-11 place-items-center rounded-full bg-emerald-700 text-white">
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-emerald-100">
        © {new Date().getFullYear()} AGRA CITIZEN SCHOOL. All rights reserved.
      </div>
    </footer>
  );
}
