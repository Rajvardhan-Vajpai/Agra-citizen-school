import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { blogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read school updates, learning insights, wellbeing notes, and educational articles from AGRA CITIZEN SCHOOL."
};

export default function BlogsPage() {
  return (
    <>
      <PageHero label="Blogs" title="Ideas, updates, and learning notes" text="Read perspectives from the school community on learning, wellbeing, achievement, creativity, and campus life." />
      <Section title="Latest Articles">
        <div className="grid gap-5 md:grid-cols-3">{blogs.map((post) => <Card key={post.title}><p className="mb-4 text-sm font-bold text-emerald-700 dark:text-emerald-300">{post.category} • {post.date}</p><h3 className="font-display text-2xl font-bold">{post.title}</h3><p className="mt-4 leading-7 text-[color:var(--muted)]">{post.excerpt}</p></Card>)}</div>
      </Section>
    </>
  );
}
