"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { AnimatedCounter } from "@/components/home/AnimatedCounter";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { events, facilities, programs, stats, testimonials, whyChoose } from "@/lib/data";

export function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-emerald-900 pt-28 text-white lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(252,211,77,.22),transparent_30%),linear-gradient(135deg,rgba(5,95,58,.98),rgba(7,92,58,.94))]" />
        <motion.div className="absolute inset-0 hero-grid opacity-25" animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-white" />
        <motion.div className="absolute right-8 top-32 h-28 w-28 rounded-full border border-white/20 bg-white/10 backdrop-blur" animate={{ y: [0, 18, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
        <div className="container-premium relative grid min-h-[calc(100vh-8rem)] items-center gap-10 py-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full bg-amber-300 px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-950">Admission Open 2026-27</p>
            <h1 className="font-display text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-8xl">AGRA CITIZEN</h1>
            <p className="mt-2 font-display text-3xl font-bold text-amber-200 sm:text-4xl">SCHOOL</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50 sm:text-xl">Inspired by Agra’s trusted school tradition, refined for a modern, confident, future-ready learning experience.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/admissions">Apply for Admission <ArrowRight className="ml-2" size={18} /></Button>
              <Button href="/contact" variant="secondary">Schedule a Visit</Button>
            </div>
          </Reveal>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <PlaceholderImage title="Students, Campus & Learning" className="min-h-[420px] rounded-[2rem] shadow-2xl shadow-black/20" />
          </motion.div>
        </div>
      </section>

      <Section className="bg-white dark:bg-emerald-950" eyebrow="About" title="AGRA CITIZEN SCHOOL" text="A premier school in Agra focused on academic discipline, holistic growth, and a safe, inclusive learning environment.">
        <div className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal><PlaceholderImage title="Campus Life" className="min-h-[380px]" /></Reveal>
          <Reveal delay={0.1}>
            <p className="mb-6 leading-8 text-[color:var(--muted)]">Like the best established school websites, this design keeps the story simple and image-led, but gives ACS cleaner cards, stronger spacing, and a more premium digital finish.</p>
            <div className="grid gap-4">
              {["Experienced faculty and thoughtful mentoring", "Smart classrooms with active learning routines", "Clubs, sports, arts, leadership, and service"].map((item) => (
                <p key={item} className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-white p-4 font-semibold text-emerald-950 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"><CheckCircle2 className="text-emerald-600" />{item}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-white py-8 dark:bg-emerald-950">
        <div className="container-premium grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => <AnimatedCounter key={item.label} {...item} />)}
        </div>
      </section>

      <Section className="bg-white dark:bg-emerald-950" eyebrow="Why Choose Us" title="A refined school experience with measurable care">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card className="h-full">
                <item.icon className="mb-5 text-emerald-700 dark:text-emerald-300" size={34} />
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Academic" title="Wings" className="bg-white dark:bg-white/[0.03]">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((item) => (
            <Card key={item.title}><item.icon className="mb-5 text-emerald-700" size={36} /><h3 className="font-display text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-[color:var(--muted)]">{item.text}</p></Card>
          ))}
        </div>
      </Section>

      <Section className="bg-white dark:bg-emerald-950" eyebrow="Facilities" title="Purpose-built spaces for discovery">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.slice(0, 6).map((item) => <Card key={item.title}><item.icon className="mb-4 text-emerald-700" /><h3 className="font-display text-xl font-bold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p></Card>)}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Message" className="bg-white dark:bg-emerald-950">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {["Founder Vision", "Director Message", "Principal Message"].map((title, index) => (
            <Card key={title}>
              <PlaceholderImage title={title} tone={["from-emerald-800 to-amber-400", "from-emerald-700 to-lime-500", "from-green-900 to-emerald-500"][index]} className="mb-5 min-h-[260px]" />
              <Quote className="mb-4 text-emerald-700" />
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Our leadership is committed to discipline, dedication, holistic development, and a school culture where every learner feels guided.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-emerald-900 text-white">
        <div className="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <PlaceholderImage title="Principal" tone="from-emerald-700 to-amber-500" className="min-h-[360px]" />
          <div>
            <Quote className="mb-5 text-emerald-300" size={42} />
            <h2 className="font-display text-3xl font-bold sm:text-4xl">From the Principal’s Desk</h2>
            <p className="mt-5 text-lg leading-9 text-emerald-50">Our promise is simple: to know every child, stretch every learner, and nurture the habits of excellence that make young people ready for life beyond school.</p>
            <p className="mt-5 font-display font-bold text-emerald-200">Principal, AGRA CITIZEN SCHOOL</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="News & Highlights" title="Latest from campus">
        <div className="grid gap-5 md:grid-cols-3">{events.map((event) => <Card key={event.title}><p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">{event.date}</p><h3 className="font-display text-xl font-bold">{event.title}</h3><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{event.text}</p></Card>)}</div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by families and alumni" className="bg-white dark:bg-white/[0.03]">
        <div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <Card key={item.name}><p className="leading-7 text-[color:var(--muted)]">“{item.text}”</p><p className="mt-5 font-display font-bold">{item.name}</p><p className="text-sm text-emerald-700 dark:text-emerald-300">{item.role}</p></Card>)}</div>
      </Section>

      <Section className="bg-white dark:bg-emerald-950" eyebrow="Gallery" title="Moments from campus">
        <div className="grid gap-5 md:grid-cols-3">{["Assembly", "Sports", "Laboratory"].map((title, i) => <PlaceholderImage key={title} title={title} tone={["from-emerald-800 to-lime-500", "from-teal-700 to-amber-500", "from-green-900 to-sky-500"][i]} className="min-h-[320px]" />)}</div>
      </Section>

      <Section className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-emerald-200">Admissions Open</p>
          <h2 className="font-display text-4xl font-black">Begin your child’s journey with AGRA CITIZEN SCHOOL</h2>
          <p className="mt-5 text-emerald-50">Explore programs, visit the campus, and speak with our admissions team.</p>
          <div className="mt-8"><Button href="/admissions" variant="secondary">Start Admission Inquiry</Button></div>
        </div>
      </Section>

      <Section className="bg-white dark:bg-emerald-950" eyebrow="Contact" title="Plan a visit or ask a question">
        <div className="grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <Card>
            <h3 className="font-display text-2xl font-bold">Admissions Office</h3>
            <p className="mt-4 leading-8 text-[color:var(--muted)]">Share a few details and our team will help you with campus visits, class availability, admission requirements, and next steps.</p>
            <div className="mt-6 grid gap-3 text-sm font-semibold">
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@agracitizenschool.edu.in</p>
              <p>Location: Agra, Uttar Pradesh</p>
            </div>
          </Card>
          <InquiryForm compact />
        </div>
      </Section>
    </>
  );
}
