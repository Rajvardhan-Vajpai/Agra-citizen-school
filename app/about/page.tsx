import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { quickFacts } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AGRA CITIZEN SCHOOL, its vision, values, campus culture, and commitment to whole-child education."
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="About ACS" title="A learning community shaped by excellence and care" text="AGRA CITIZEN SCHOOL brings together strong academics, ethical formation, creativity, and modern infrastructure to help students flourish." />
      <Section title="Our Story" text="We believe premium education is not only about results. It is about habits of curiosity, discipline, empathy, and leadership built through daily school life.">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-[color:var(--muted)]">
            <p className="leading-8">Our campus culture is designed to be aspirational and personal. Students are encouraged to ask better questions, speak clearly, collaborate generously, and pursue excellence without losing kindness.</p>
            <p className="leading-8">Teachers work as mentors, guiding each learner through clear expectations, regular feedback, and opportunities across academics, sports, arts, public speaking, technology, and service.</p>
          </div>
          <PlaceholderImage title="School Heritage" className="min-h-[360px]" />
        </div>
      </Section>
      <Section eyebrow="Values" title="What guides us" className="bg-white dark:bg-white/[0.03]">
        <div className="grid gap-5 md:grid-cols-3">
          {["Excellence", "Integrity", "Compassion"].map((item) => <Card key={item}><h3 className="font-display text-2xl font-bold">{item}</h3><p className="mt-3 leading-7 text-[color:var(--muted)]">A daily practice reflected in classrooms, corridors, assemblies, and community life.</p></Card>)}
        </div>
      </Section>
      <Section title="At a glance">
        <div className="grid gap-5 md:grid-cols-3">
          {quickFacts.map((fact) => <Card key={fact.label}><fact.icon className="mb-4 text-emerald-700" /><p className="font-display text-xl font-bold">{fact.label}</p></Card>)}
        </div>
      </Section>
    </>
  );
}
