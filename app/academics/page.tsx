import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore academic programs, curriculum, clubs, and learning pathways at AGRA CITIZEN SCHOOL."
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero label="Academics" title="Rigorous academics with curiosity at the center" text="From foundational learning to senior school excellence, students experience clear teaching, active practice, and purposeful enrichment." />
      <Section id="curriculum" title="Curriculum Pathways">
        <div className="grid gap-5 md:grid-cols-3">{programs.map((item) => <Card key={item.title}><item.icon className="mb-4 text-emerald-700" /><h3 className="font-display text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-[color:var(--muted)]">{item.text}</p></Card>)}</div>
      </Section>
      <Section id="clubs" eyebrow="Beyond Classrooms" title="Clubs and enrichment" className="bg-white dark:bg-white/[0.03]">
        <div className="grid gap-5 md:grid-cols-3">
          {["Robotics and coding", "Debate and public speaking", "Visual arts and theatre", "Environmental leadership", "Olympiad mentoring", "Entrepreneurship studio"].map((item) => <Card key={item}><h3 className="font-display text-xl font-bold">{item}</h3><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Structured mentorship, showcases, competitions, and peer collaboration.</p></Card>)}
        </div>
      </Section>
    </>
  );
}
