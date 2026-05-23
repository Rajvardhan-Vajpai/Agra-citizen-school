import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { facilities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Discover modern classrooms, laboratories, library, sports, creative spaces, and secure campus facilities."
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero label="Facilities" title="Spaces that make learning visible and active" text="Every facility is designed to help students explore, practice, perform, read, play, create, and collaborate safely." />
      <Section id="labs" title="Campus Facilities">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{facilities.map((item) => <Card key={item.title}><item.icon className="mb-4 text-emerald-700" /><h3 className="font-display text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p></Card>)}</div>
      </Section>
      <Section className="bg-white">
        <div className="grid gap-5 md:grid-cols-3">{["Smart Classroom", "Sports Ground", "Library"].map((title) => <PlaceholderImage key={title} title={title} className="min-h-[320px]" />)}</div>
      </Section>
    </>
  );
}
