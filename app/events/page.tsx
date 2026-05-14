import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events, school celebrations, innovation showcases, and student activities at AGRA CITIZEN SCHOOL."
};

export default function EventsPage() {
  return (
    <>
      <PageHero label="Events" title="A vibrant calendar of discovery and celebration" text="Events at ACS give students stages to lead, perform, compete, question, serve, and celebrate community." />
      <Section title="Upcoming Events">
        <div className="grid gap-5 md:grid-cols-3">{events.map((event) => <Card key={event.title}><p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">{event.date}</p><h3 className="font-display text-2xl font-bold">{event.title}</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">{event.text}</p></Card>)}</div>
      </Section>
    </>
  );
}
