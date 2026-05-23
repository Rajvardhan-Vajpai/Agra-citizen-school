"use client";

import Link from "next/link";
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
      <section className="relative min-h-screen overflow-hidden bg-background pt-32 lg:pt-40">
        {/* Animated Background Presence */}
        <div className="blob top-[-10%] left-[-10%] opacity-15" />
        <div className="blob blob-green bottom-[-10%] right-[-10%] opacity-10" />
        <div className="absolute inset-0 hero-grid opacity-[0.03] pointer-events-none" />
        
        <div className="container-premium relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <Reveal delay={0}>
              <div className="mb-8 flex items-center gap-2 rounded-full border border-brand/10 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand shadow-sm w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                CBSE • CO-EDUCATIONAL • AGRA
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-medium leading-[1] text-brand sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                Where tradition <span className="italic text-brand/80 font-normal">meets</span> tomorrow, on the banks of the <span className="relative inline-block">Yamuna.<span className="absolute bottom-2 left-0 h-1.5 w-full bg-gold/30 -z-10" /></span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand/70 sm:text-xl">
                A prestigious co-educational day school in Agra nurturing curious, kind and capable minds since 2009. Rooted in classical values, re-imagined for a modern world.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/admissions" className="group bg-brand text-white hover:bg-brand-dark px-8 py-4 text-base shadow-xl">
                  Apply for Admission <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </Button>
                <Button href="/contact" variant="secondary" className="border-brand/20 text-brand hover:bg-brand/5 px-8 py-4 text-base">
                  Schedule a Visit
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 flex gap-12 border-t border-brand/10 pt-8">
                {[
                  { label: "Founded", value: "2009" },
                  { label: "Faculty", value: "45+" },
                  { label: "Students", value: "850+" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <p className="font-display text-2xl font-bold text-brand">{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand/40 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 40 }} 
            animate={{ opacity: 1, scale: 1, x: 0 }} 
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative lg:-mt-24 flex flex-col items-end"
          >
            {/* The "Admissions Open" button placed above the card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <Link 
                href="/admissions" 
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gold/10 px-6 py-3 text-sm font-bold text-gold backdrop-blur-md border border-gold/20 transition-all hover:bg-gold hover:text-white shadow-lg"
              >
                <span className="relative z-10">Admissions Open 2026-27</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-0 translate-y-full bg-gold transition-transform group-hover:translate-y-0" />
              </Link>
            </motion.div>

            {/* The "Identity" Floating Card */}
            <motion.div 
              className="relative z-10 overflow-hidden rounded-[2.5rem] bg-brand p-8 text-white shadow-2xl lg:p-10 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <div className="rounded-full border-2 border-white p-3">
                  <CheckCircle2 size={32} />
                </div>
              </div>
              
              <div className="mb-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">IDENTITY • 2026</p>
                <h3 className="mt-2 text-sm font-display font-bold tracking-widest text-gold">AGRA CITIZEN SCHOOL</h3>
              </div>
              
              <div className="mb-12">
                <h2 className="font-display text-4xl font-medium sm:text-5xl lg:text-6xl">
                  Veritas. Virtus. <span className="italic text-gold">Vita.</span>
                </h2>
                <p className="mt-4 text-sm font-medium tracking-wide text-white/60 uppercase">Truth • Excellence • Life well-lived</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "OLYMPIAD", value: "National Gold", icon: ArrowRight },
                  { label: "BOARDS", value: "98% Pass", icon: ArrowRight },
                  { label: "LABS", value: "6 Modern", icon: ArrowRight },
                  { label: "ARTS", value: "12 Studios", icon: ArrowRight }
                ].map((item) => (
                  <motion.div 
                    key={item.label} 
                    className="group rounded-2xl bg-white/5 p-5 backdrop-blur-md border border-white/10 transition-all hover:border-white/40 hover:shadow-2xl"
                    whileHover={{ y: -12, scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <p className="text-[9px] font-black tracking-[0.3em] text-gold/60 mb-3 uppercase transition-colors group-hover:text-gold">{item.label}</p>
                    <p className="font-display text-xl font-bold text-white group-hover:text-white">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-gold/10 -z-10 blur-2xl" />
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-brand/5 -z-10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      <Section className="bg-white relative" eyebrow="About" title="AGRA CITIZEN SCHOOL" text="A premier school in Agra focused on academic discipline, holistic growth, and a safe, inclusive learning environment.">
        <div className="grid items-center gap-16 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <div className="relative group">
              <PlaceholderImage title="Campus Life" className="min-h-[420px] rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 rounded-[3rem] border border-brand/5 pointer-events-none" />
            </div>
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={0.2}>
              <p className="text-xl leading-relaxed text-brand/80 font-medium">Inspired by the heritage of Agra, AGRA CITIZEN SCHOOL provides a modern, sophisticated environment for the leaders of tomorrow.</p>
            </Reveal>
            <div className="grid gap-4">
              {["Experienced faculty and thoughtful mentoring", "Smart classrooms with active learning routines", "Clubs, sports, arts, leadership, and service"].map((item, idx) => (
                <Reveal key={item} delay={0.3 + idx * 0.1}>
                  <p className="flex items-center gap-4 rounded-[2rem] border border-brand/5 bg-white p-6 font-bold text-brand shadow-sm transition-all hover:shadow-md hover:translate-x-2 group">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                      <CheckCircle2 size={20} />
                    </span>
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-white py-12">
        <div className="container-premium grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => (
            <Reveal key={item.label} delay={idx * 0.1}>
              <AnimatedCounter {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <Section className="bg-white" eyebrow="Why Choose Us" title="A refined school experience with measurable care">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card className="h-full">
                <item.icon className="mb-6 text-gold" size={34} />
                <h3 className="font-display text-xl font-bold text-brand">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-brand/60">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Academic" title="Wings" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <Card className="group h-full transition-all hover:translate-y-[-8px]">
                <item.icon className="mb-6 text-brand transition-transform group-hover:scale-110" size={40} />
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-brand/60">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Facilities" title="Purpose-built spaces for discovery">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.slice(0, 6).map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <Card className="group transition-all hover:bg-brand/[0.02]">
                <item.icon className="mb-4 text-brand transition-colors group-hover:text-gold" />
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand/60">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Message" className="bg-white">
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

      <Section className="bg-brand text-white">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <PlaceholderImage title="Principal" tone="from-brand-dark to-brand" className="min-h-[400px] rounded-[2.5rem] shadow-2xl" />
          <div>
            <Quote className="mb-8 text-gold" size={48} />
            <h2 className="font-display text-4xl font-medium sm:text-5xl lg:text-6xl leading-tight">From the Principal’s Desk</h2>
            <p className="mt-8 text-lg leading-relaxed text-white/80">Our promise is simple: to know every child, stretch every learner, and nurture the habits of excellence that make young people ready for life beyond school.</p>
            <div className="mt-8">
              <p className="font-display text-xl font-bold text-gold">Mrs. Shobha Sharma</p>
              <p className="text-sm font-bold tracking-widest text-white/40 uppercase mt-1">Principal, AGRA CITIZEN SCHOOL</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="News & Highlights" title="Latest from campus">
        <div className="grid gap-5 md:grid-cols-3">{events.map((event) => <Card key={event.title}><p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">{event.date}</p><h3 className="font-display text-xl font-bold">{event.title}</h3><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{event.text}</p></Card>)}</div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by families and alumni" className="bg-white">
        <div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <Card key={item.name}><p className="leading-7 text-[color:var(--muted)]">“{item.text}”</p><p className="mt-5 font-display font-bold">{item.name}</p><p className="text-sm text-emerald-700">{item.role}</p></Card>)}</div>
      </Section>

      <Section className="bg-white" eyebrow="Gallery" title="Moments from campus">
        <div className="grid gap-5 md:grid-cols-3">{["Assembly", "Sports", "Laboratory"].map((title, i) => <PlaceholderImage key={title} title={title} tone={["from-emerald-800 to-lime-500", "from-teal-700 to-amber-500", "from-green-900 to-sky-500"][i]} className="min-h-[320px]" />)}</div>
      </Section>

      <Section className="bg-brand text-white text-center">
        <div className="mx-auto max-w-4xl py-12">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-gold">Admissions Open 2026-27</p>
          <h2 className="font-display text-5xl font-medium sm:text-6xl lg:text-7xl leading-tight">Begin your child’s journey with AGRA CITIZEN SCHOOL</h2>
          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto">Explore programs, visit the campus, and speak with our admissions team to experience the elite difference.</p>
          <div className="mt-12 flex justify-center gap-4">
            <Button href="/admissions" className="bg-gold text-white hover:bg-gold/90 px-10 py-5 rounded-full text-lg font-bold shadow-2xl">
              Start Admission Inquiry
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Contact" title="Plan a visit or ask a question">
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
