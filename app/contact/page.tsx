import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AGRA CITIZEN SCHOOL for admissions, campus visits, inquiries, and school information."
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="We would love to hear from you" text="Connect with our admissions office, schedule a visit, or send an inquiry to learn more about AGRA CITIZEN SCHOOL." />
      <Section title="Contact Information">
        <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-5">
            <Card><MapPin className="mb-3 text-emerald-700" /><h3 className="font-display text-xl font-bold">Address</h3><p className="mt-2 text-[color:var(--muted)]">{contact.address}</p></Card>
            <Card><Phone className="mb-3 text-emerald-700" /><h3 className="font-display text-xl font-bold">Phone</h3><p className="mt-2 text-[color:var(--muted)]">{contact.phone}</p></Card>
            <Card><Mail className="mb-3 text-emerald-700" /><h3 className="font-display text-xl font-bold">Email</h3><p className="mt-2 text-[color:var(--muted)]">{contact.email}</p></Card>
          </div>
          <div className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-emerald-100 shadow-xl dark:border-white/10 dark:bg-white/10">
            <div className="grid min-h-[430px] place-items-center bg-gradient-to-br from-emerald-800 to-lime-500 text-center text-white">
              <div>
                <MapPin className="mx-auto mb-4" size={42} />
                <p className="font-display text-2xl font-bold">Google Maps Placeholder</p>
                <p className="mt-2 text-emerald-50">Embed live map iframe here before launch.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Inquiry Form" title="Send us a message" className="bg-white dark:bg-white/[0.03]">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <InquiryForm />
          <Card>
            <h3 className="font-display text-2xl font-bold">Quick Connect</h3>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">For urgent admission questions, use WhatsApp. Our office team will help you with documents, eligibility, campus visits, and fee details.</p>
            <div className="mt-6"><Button href={contact.whatsapp}><MessageCircle className="mr-2" size={18} /> WhatsApp Now</Button></div>
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => <a key={index} href="#" aria-label="Social media" className="grid h-11 w-11 place-items-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-white/10 dark:text-white"><Icon size={18} /></a>)}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
