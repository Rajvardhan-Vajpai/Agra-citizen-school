import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Section } from "@/components/ui/Section";
import { AlumniCard } from "@/components/content/AlumniCard";
import { alumniProfiles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Meet AGRA CITIZEN SCHOOL alumni and discover the growing alumni network."
};

export default function AlumniPage() {
  return (
    <>
      <PageHero label="Alumni" title="A growing network of confident citizens" text="Our alumni carry the ACS spirit into universities, professions, creative fields, public service, and entrepreneurship." />
      <Section title="Alumni Stories">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alumniProfiles.map((profile) => (
            <AlumniCard key={profile.id} profile={profile} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Connect" title="Alumni Association" className="bg-white dark:bg-white/[0.03]">
        <div className="mx-auto max-w-3xl text-center text-lg leading-8 text-[color:var(--muted)]">Mentor current students, share professional opportunities, join reunions, and help build the next chapter of AGRA CITIZEN SCHOOL.</div>
      </Section>
    </>
  );
}
