import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHero } from "@/components/pages/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View a responsive gallery of campus moments, academics, sports, events, arts, labs, and school life."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero label="Gallery" title="A visual walk through campus life" text="Explore moments from classrooms, assemblies, events, sports, arts, labs, and everyday learning." />
      <Section title="Campus Gallery"><GalleryGrid /></Section>
    </>
  );
}
