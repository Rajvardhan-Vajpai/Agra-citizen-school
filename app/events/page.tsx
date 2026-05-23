import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Section } from "@/components/ui/Section";
import { EventCard } from "@/components/content/EventCard";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events, school celebrations, innovation showcases, and student activities at AGRA CITIZEN SCHOOL."
};

export default function EventsPage() {
  return (
    <>
      <PageHero label="Events" title="A vibrant calendar of discovery and celebration" text="Events at ACS give students stages to lead, perform, compete, question, serve, and celebrate community." />
      <Section title="Upcoming Events">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>
    </>
  );
}
