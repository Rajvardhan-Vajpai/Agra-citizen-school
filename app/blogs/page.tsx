import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/content/BlogCard";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read school updates, learning insights, wellbeing notes, and educational articles from AGRA CITIZEN SCHOOL."
};

export default function BlogsPage() {
  return (
    <>
      <PageHero label="Blogs" title="Ideas, updates, and learning notes" text="Read perspectives from the school community on learning, wellbeing, achievement, creativity, and campus life." />
      <Section title="Latest Articles">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
