import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/pages/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Apply for admission at AGRA CITIZEN SCHOOL and connect with the admissions team."
};

export default function AdmissionsPage() {
  const steps = ["Submit inquiry", "Campus interaction", "Document review", "Admission confirmation"];
  return (
    <>
      <PageHero label="Admissions" title="Admissions open for the new academic session" text="A thoughtful process for families who want strong academics, meaningful care, and a future-ready school environment." />
      <Section title="Admission Process" text="Our admissions team keeps the process clear, warm, and responsive from the first inquiry to onboarding.">
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => <Card key={step}><p className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-emerald-700 font-black text-white">{index + 1}</p><h3 className="font-display text-xl font-bold">{step}</h3></Card>)}
        </div>
      </Section>
      <Section eyebrow="Inquiry" title="Speak with our admissions team" className="bg-white dark:bg-white/[0.03]">
        <div className="mx-auto max-w-4xl"><InquiryForm /></div>
      </Section>
    </>
  );
}
