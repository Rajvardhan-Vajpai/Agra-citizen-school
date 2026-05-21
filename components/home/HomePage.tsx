"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  FlaskConical,
  LibraryBig,
  Palette,
  Quote,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound
} from "lucide-react";
import { AnimatedCounter } from "@/components/home/AnimatedCounter";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";
import { events, programs, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const heroStats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 1200, suffix: "+", label: "Students" },
  { value: 98, suffix: "%", label: "Results" }
];

const whyCards = [
  { icon: Trophy, title: "Academic Excellence", text: "Clear lesson design, regular practice, feedback loops, and result-focused mentoring." },
  { icon: Building2, title: "Modern Campus", text: "Learning spaces shaped for attention, collaboration, practical work, and confidence." },
  { icon: ShieldCheck, title: "Safe Environment", text: "Thoughtful supervision, disciplined routines, and a school culture built on care." },
  { icon: Sparkles, title: "Holistic Growth", text: "Sports, arts, clubs, leadership, public speaking, and values in everyday life." }
];

const admissionSteps = [
  { title: "Inquiry", text: "Share the class, contact details, and preferred visit time." },
  { title: "Campus Visit", text: "Explore classrooms, labs, sports areas, and school culture." },
  { title: "Interaction", text: "Meet the academic team and understand the right learning fit." },
  { title: "Confirmation", text: "Complete documents and begin the ACS journey." }
];

const galleryTiles = [
  { label: "Campus", icon: Building2, large: true },
  { label: "Library", icon: LibraryBig },
  { label: "Labs", icon: FlaskConical },
  { label: "Sports", icon: Trophy },
  { label: "Events", icon: UsersRound },
  { label: "Clubs", icon: Sparkles }
];

function TiltCard({
  children,
  className,
  max = 7
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const [style, setStyle] = useState<CSSProperties>({});

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * max * 2;
    const rotateX = -(y / rect.height - 0.5) * max * 2;
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)` });
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)" })}
      style={style}
      className={cn(
        "soft-card relative overflow-hidden p-6 transition-[box-shadow,transform] duration-300 hover:shadow-[0_28px_70px_rgba(10,61,31,0.18)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionHeading({ tag, title, text, light = false }: { tag: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-11 max-w-3xl text-center">
      <span className={cn("section-tag mb-4", light && "bg-white/10 text-[var(--brand-pale)]")}>{tag}</span>
      <h2 className={cn("font-display text-4xl font-bold leading-none tracking-[-0.045em] sm:text-5xl lg:text-6xl", light && "text-[var(--warm)]")}>
        {title}
      </h2>
      {text && <p className={cn("mx-auto mt-5 max-w-2xl text-lg text-[color:var(--muted)]", light && "text-white/60")}>{text}</p>}
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[480px] perspective-[1000px] lg:min-h-[560px]"
    >
      <motion.span animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 4.6 }} className="absolute left-0 top-10 z-10 rounded-full border border-[rgba(10,61,31,0.12)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--brand)] shadow-[0_10px_30px_rgba(10,61,31,0.1)] backdrop-blur">
        Smart Classrooms
      </motion.span>
      <motion.span animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 5.1 }} className="absolute right-0 top-40 z-10 rounded-full border border-[rgba(10,61,31,0.12)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--brand)] shadow-[0_10px_30px_rgba(10,61,31,0.1)] backdrop-blur">
        Safe Campus
      </motion.span>
      <motion.span animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5.4 }} className="absolute bottom-20 left-12 z-10 rounded-full border border-[rgba(10,61,31,0.12)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--brand)] shadow-[0_10px_30px_rgba(10,61,31,0.1)] backdrop-blur">
        Future Ready
      </motion.span>

      <TiltCard className="absolute inset-10 rounded-[34px] border-white/60 bg-[radial-gradient(circle_at_80%_15%,rgba(240,216,122,0.46),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,0.82),rgba(255,248,238,0.5))] p-0 shadow-[0_34px_100px_rgba(10,61,31,0.22)] backdrop-blur" max={7}>
        <div className="absolute inset-5 rounded-[26px] border border-[rgba(10,61,31,0.08)]" />
        <div className="absolute inset-x-10 top-11 h-[58%] rounded-[30px] bg-[linear-gradient(180deg,transparent_0_46%,rgba(10,61,31,0.08)_46%),radial-gradient(circle_at_68%_16%,var(--gold-soft),transparent_4.5rem),linear-gradient(145deg,var(--brand-faint),#fff)] shadow-inner">
          <div className="absolute bottom-[20%] left-[13%] h-[38%] w-[74%] rounded-t-3xl bg-gradient-to-b from-white to-[#edf8f0] shadow-[0_24px_40px_rgba(10,61,31,0.14)]" />
          <div className="absolute bottom-[31%] left-[22%] h-[18%] w-[56%] bg-[repeating-linear-gradient(90deg,var(--brand-mid)_0_12%,transparent_12%_22%)] opacity-55" />
        </div>
        <div className="absolute bottom-24 left-1/2 h-28 w-[78%] -translate-x-1/2 rounded-[26px] bg-[linear-gradient(90deg,rgba(10,61,31,0.22),transparent_10%_90%,rgba(10,61,31,0.22)),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(223,245,232,0.94))] shadow-[0_24px_42px_rgba(10,61,31,0.12)]">
          <div className="absolute bottom-full left-[12%] h-12 w-[30%] bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
          <div className="absolute bottom-full right-[12%] h-12 w-[30%] bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        </div>
        <div className="absolute bottom-[68px] left-1/2 grid h-30 w-30 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--brand-soft)] text-4xl font-medium text-[var(--brand)] shadow-[inset_0_2px_16px_rgba(255,255,255,0.7),0_20px_42px_rgba(10,61,31,0.22)]">
          ACS
        </div>
        <div className="absolute bottom-14 left-7 grid min-w-32 gap-1 rounded-[20px] border border-white/60 bg-white/75 p-3 text-xs font-medium text-[var(--brand)] shadow-[0_18px_40px_rgba(10,61,31,0.14)] backdrop-blur">
          <strong className="text-2xl leading-none">98%</strong>
          Board Results
        </div>
        <div className="absolute right-7 top-16 grid min-w-34 gap-1 rounded-[20px] border border-white/60 bg-white/75 p-3 text-xs font-medium text-[var(--brand)] shadow-[0_18px_40px_rgba(10,61,31,0.14)] backdrop-blur">
          <strong className="text-2xl leading-none">1200+</strong>
          Students Guided
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-34 lg:pt-38">
        <motion.span className="absolute left-[2%] top-[18%] h-42 w-42 rounded-full bg-[rgba(82,194,120,0.2)] opacity-55" animate={{ y: [0, -26, 0], rotate: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 9 }} />
        <motion.span className="absolute right-[7%] top-[9%] h-55 w-55 rounded-full border-[26px] border-[rgba(201,162,39,0.13)] opacity-55" animate={{ y: [0, -24, 0], rotate: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 10 }} />
        <motion.span className="absolute bottom-[12%] right-[40%] h-23 w-23 rounded-full bg-[rgba(46,153,82,0.17)] opacity-55" animate={{ y: [0, 22, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 8 }} />

        <div className="container-premium relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-[rgba(46,153,82,0.22)] bg-[rgba(223,245,232,0.8)] px-4 py-2 text-sm font-medium text-[var(--brand)] before:h-2.5 before:w-2.5 before:rounded-full before:bg-[var(--brand-mid)] before:shadow-[0_0_0_7px_rgba(46,153,82,0.11)]">
              Admissions Open 2025-26
            </span>
            <span className="mb-4 block font-display text-4xl font-bold italic tracking-[-0.045em] text-[var(--brand)] sm:text-5xl">
              Agra Citizen <span className="text-[var(--gold)]">School</span>
            </span>
            <h1 className="max-w-3xl font-display text-6xl font-bold leading-none tracking-[-0.045em] text-[var(--foreground)] sm:text-7xl lg:text-[104px]">
              Where Young Minds Grow & <span className="italic text-[var(--brand-mid)]">Flourish</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
              Agra Citizen School blends academic discipline, future-ready learning,
              creative confidence, and a warm values-led environment for every child.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/admissions">Apply Now <ArrowRight className="ml-2" size={18} /></Button>
              <Button href="/gallery" variant="secondary">Virtual Tour</Button>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <AnimatedCounter key={item.label} {...item} />
              ))}
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      <section className="cream-band py-20 lg:py-24">
        <div className="container-premium">
          <SectionHeading
            tag="Why ACS"
            title="Designed for ambitious families."
            text="Everything parents look for, presented with clarity: strong academics, safe systems, modern learning, and full-person growth."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((item, index) => (
              <TiltCard key={item.title} className="min-h-[300px] p-7" max={4}>
                <span className="absolute right-5 top-4 font-display text-6xl font-bold leading-none text-[rgba(10,61,31,0.08)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="grid h-13 w-13 place-items-center rounded-[18px] bg-[var(--brand-faint)] text-[var(--brand)]">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-[color:var(--muted)]">{item.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-premium grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_75%_15%,rgba(240,216,122,0.7),transparent_8rem),linear-gradient(135deg,rgba(10,61,31,0.78),rgba(82,194,120,0.58))] shadow-[var(--shadow-soft)]">
            <div className="absolute inset-x-10 top-11 bottom-32 rounded-[28px] bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0_20%,transparent_20%_27%,rgba(255,255,255,0.95)_27%_47%,transparent_47%_54%,rgba(255,255,255,0.95)_54%_74%,transparent_74%_81%,rgba(255,255,255,0.95)_81%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.42))]" />
            <div className="absolute bottom-6 right-6 rounded-[22px] bg-[rgba(255,248,238,0.86)] px-5 py-4 font-medium text-[var(--brand)] shadow-[0_18px_36px_rgba(10,61,31,0.18)] backdrop-blur">
              20+ Expert Faculty
            </div>
          </div>

          <div>
            <span className="section-tag mb-4">About Our School</span>
            <h2 className="font-display text-4xl font-bold leading-none tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              A premium campus for confident learning.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--muted)]">
              We nurture students through clear academic systems, strong teacher guidance,
              co-curricular exposure, and a caring school culture rooted in discipline,
              curiosity, and character.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: BookOpen, title: "Smart Classrooms", text: "Interactive learning spaces with modern teaching tools." },
                { icon: FlaskConical, title: "Modern Labs", text: "Hands-on exploration across science and technology." },
                { icon: Trophy, title: "Sports", text: "Fitness, teamwork, athletics, and competitive spirit." },
                { icon: Palette, title: "Arts", text: "Music, performance, visual arts, and self-expression." }
              ].map((item) => (
                <TiltCard key={item.title} className="p-5" max={4}>
                  <div className="grid h-13 w-13 place-items-center rounded-[18px] bg-[var(--brand-faint)] text-[var(--brand)]">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{item.text}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cream-band py-20 lg:py-24">
        <div className="container-premium">
          <SectionHeading
            tag="Admissions Journey"
            title="Simple steps. Clear guidance."
            text="From first inquiry to final confirmation, families get a smooth and reassuring admission experience."
          />
          <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-5 before:absolute before:left-[9%] before:right-[9%] before:top-[54px] before:hidden before:h-1 before:rounded-full before:bg-[linear-gradient(90deg,var(--brand-pale),var(--brand-mid),var(--gold-soft))] lg:before:block">
            {admissionSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 grid h-27 w-27 place-items-center rounded-full border-[10px] border-[var(--cream)] bg-[linear-gradient(145deg,var(--brand),var(--brand-mid))] font-display text-4xl font-bold text-[var(--warm)] shadow-[0_24px_52px_rgba(10,61,31,0.22),inset_0_2px_8px_rgba(255,255,255,0.24)]">
                  {index + 1}
                </div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-56 text-[color:var(--muted)]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-premium">
          <SectionHeading tag="Academic Wings" title="Learning pathways for every age." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((item) => (
              <TiltCard key={item.title} className="p-6" max={4}>
                <div className="grid h-13 w-13 place-items-center rounded-[18px] bg-[var(--brand-faint)] text-[var(--brand)]">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-[color:var(--muted)]">{item.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand)] py-20 text-white lg:py-24">
        <div className="container-premium">
          <SectionHeading tag="Gallery" title="Moments from school life." text="A visual rhythm for campus, classrooms, clubs, and celebrations." light />
          <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryTiles.map((tile) => (
              <div
                key={tile.label}
                className={cn(
                  "group relative grid place-items-center overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,var(--brand-strong),var(--brand-soft))] shadow-[0_22px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:[transform:perspective(800px)_rotateX(5deg)_rotateY(-7deg)_translateZ(12px)] hover:shadow-[0_32px_86px_rgba(0,0,0,0.32)]",
                  tile.large && "lg:col-span-2 lg:row-span-2"
                )}
              >
                <div className="absolute inset-[-40%] -translate-x-[120%] rotate-12 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.32),transparent_65%)] transition-transform duration-700 group-hover:translate-x-[120%]" />
                <div className="relative z-10 text-center">
                  <tile.icon className="mx-auto mb-3" size={48} />
                  <strong className="font-medium">{tile.label}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-premium">
          <SectionHeading tag="News & Events" title="Campus stories with momentum." />
          <div className="grid gap-5 md:grid-cols-3">
            {events.map((event, index) => (
              <TiltCard key={event.title} className="p-0" max={4}>
                <div className={cn("h-48 rounded-t-[24px]", index === 0 && "bg-[linear-gradient(135deg,var(--brand),var(--brand-soft))]", index === 1 && "bg-[linear-gradient(135deg,var(--gold),var(--gold-soft))]", index === 2 && "bg-[linear-gradient(135deg,#b64d73,#ffd0df)]")} />
                <div className="p-6">
                  <span className="rounded-full bg-[rgba(10,61,31,0.08)] px-3 py-2 text-xs font-medium text-[var(--brand)]">{event.date}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em]">{event.title}</h3>
                  <p className="mt-3 text-[color:var(--muted)]">{event.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="cream-band py-20 lg:py-24">
        <div className="container-premium">
          <SectionHeading tag="Testimonials" title="Trusted by parents and students." />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <TiltCard key={item.name} className="min-h-[300px] p-6" max={4}>
                <div className="grid h-13 w-13 place-items-center rounded-[18px] bg-[var(--brand-faint)] text-[var(--brand)]">
                  <Quote size={24} />
                </div>
                <p className="mt-5 text-[color:var(--muted)]">&quot;{item.text}&quot;</p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--brand-soft)] font-medium text-[var(--brand)]">
                    {item.name.split(" ").map((part) => part[0]).join("")}
                  </span>
                  <span>
                    <strong className="block font-medium text-[var(--brand)]">{item.name}</strong>
                    <span className="text-sm text-[color:var(--muted)]">{item.role}</span>
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-premium grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="section-tag mb-4">Contact</span>
            <h2 className="font-display text-4xl font-bold leading-none tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Start the admission conversation.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--muted)]">
              Visit the campus, speak to our office team, or send a quick inquiry.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                ["Address", "Agra Citizen School, Agra, Uttar Pradesh"],
                ["Phone", "+91 98765 43210"],
                ["Email", "info@agracitizenschool.edu.in"],
                ["Hours", "Monday to Saturday, 8:00 AM - 3:00 PM"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[22px] bg-[rgba(223,245,232,0.6)] p-5">
                  <strong className="block font-medium text-[var(--brand)]">{label}</strong>
                  <span className="text-[color:var(--muted)]">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
