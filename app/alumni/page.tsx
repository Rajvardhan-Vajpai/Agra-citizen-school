import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { alumni } from "@/lib/data";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Meet AGRA CITIZEN SCHOOL alumni and discover the growing alumni network."
};

export default function AlumniPage() {
  return (
    <>
      <PageHero label="Alumni" title="A growing network of confident citizens" text="Our alumni carry the ACS spirit into universities, professions, creative fields, public service, and entrepreneurship." />
      <Section title="Alumni Stories">
        <div className="grid gap-5 md:grid-cols-3">{alumni.map((person) => <Card key={person.name}><p className="mb-4 text-sm font-bold text-emerald-700 dark:text-emerald-300">Class of {person.year}</p><h3 className="font-display text-2xl font-bold">{person.name}</h3><p className="mt-1 font-semibold">{person.field}</p><p className="mt-4 leading-7 text-[color:var(--muted)]">{person.text}</p></Card>)}</div>
      </Section>
      <Section eyebrow="Connect" title="Alumni Association" className="bg-white dark:bg-white/[0.03]">
        <div className="mx-auto max-w-3xl text-center text-lg leading-8 text-[color:var(--muted)]">Mentor current students, share professional opportunities, join reunions, and help build the next chapter of AGRA CITIZEN SCHOOL.</div>
      </Section>
    </>
  );
}
