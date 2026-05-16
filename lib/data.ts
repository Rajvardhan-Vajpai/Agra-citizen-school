import {
  BookOpen,
  Building2,
  CalendarDays,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Landmark,
  LibraryBig,
  Microscope,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
  Wifi
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Alumni", href: "/alumni" },
  { label: "Blogs", href: "/blogs" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of Academic Excellence" },
  { value: 100, suffix: "%", label: "Board Success Rate" },
  { value: 45, suffix: "+", label: "Expert Faculty Mentors" },
  { value: 12, suffix: "+", label: "National Sports Titles" }
];

export const whyChoose = [
  { icon: ShieldCheck, title: "Values-led environment", text: "A disciplined, caring campus where confidence and character grow together." },
  { icon: Sparkles, title: "Future-ready learning", text: "Smart pedagogy, digital tools, clubs, and projects that build real-world capability." },
  { icon: Trophy, title: "Achievement culture", text: "Academic mentoring, sports pathways, arts, debates, and leadership opportunities." },
  { icon: HeartHandshake, title: "Parent partnership", text: "Transparent communication and responsive support for every child’s progress." }
];

export const programs = [
  { icon: Sparkles, title: "Pre-Primary", text: "Play-based learning, early language, motor skills, music, stories, and joyful routines." },
  { icon: BookOpen, title: "Primary School", text: "Foundational literacy, numeracy, creative discovery, and joyful classroom routines." },
  { icon: Microscope, title: "Middle School", text: "Inquiry-led sciences, humanities, languages, arts, sports, and student agency." },
  { icon: GraduationCap, title: "Senior School", text: "Board-focused academics, career guidance, Olympiads, and leadership tracks." }
];

export const facilities = [
  { icon: FlaskConical, title: "Science Labs", text: "Hands-on laboratories for physics, chemistry, biology, and STEM exploration." },
  { icon: LibraryBig, title: "Knowledge Centre", text: "Curated books, digital research access, reading corners, and quiet study zones." },
  { icon: Wifi, title: "Smart Classrooms", text: "Interactive boards, digital learning aids, and blended classroom experiences." },
  { icon: Palette, title: "Creative Studios", text: "Spaces for visual arts, music, theatre, exhibitions, and student expression." },
  { icon: Building2, title: "Sports Arena", text: "Structured training for athletics, indoor games, fitness, and team sports." },
  { icon: Landmark, title: "Secure Campus", text: "Thoughtful supervision, access control, health room, and safe student movement." }
];

export const events = [
  { date: "18 Jun", title: "Orientation Day", text: "A warm welcome for new families with campus walk-throughs and mentor meetings." },
  { date: "09 Aug", title: "Innovation Expo", text: "Student prototypes, science demos, robotics ideas, and entrepreneurship showcases." },
  { date: "14 Nov", title: "Annual Cultural Fest", text: "A full-day celebration of performances, exhibitions, awards, and community." }
];

export const testimonials = [
  { name: "Ritika Sharma", role: "Parent", text: "The school combines academic seriousness with warmth. My child feels seen, challenged, and supported." },
  { name: "Aarav Gupta", role: "Alumnus", text: "AGRA CITIZEN SCHOOL gave me the confidence to lead, speak, compete, and keep learning." },
  { name: "Nisha Verma", role: "Parent", text: "Communication is clear, teachers are approachable, and the campus culture feels genuinely premium." }
];

export const blogs = [
  { title: "How project-based learning builds confident students", date: "May 02, 2026", category: "Learning", excerpt: "A practical look at inquiry, teamwork, and reflection in modern classrooms." },
  { title: "Preparing children for responsible digital citizenship", date: "Apr 18, 2026", category: "Wellbeing", excerpt: "Healthy habits, online safety, and purposeful technology use for school life." },
  { title: "The role of arts in whole-child education", date: "Mar 29, 2026", category: "Culture", excerpt: "Why expression, performance, and creativity belong at the heart of schooling." }
];

export const galleryItems = [
  "Campus", "Academics", "Sports", "Events", "Arts", "Labs", "Library", "Assembly", "Clubs"
].map((category, index) => ({
  id: index + 1,
  category,
  title: `${category} Moment`,
  height: [280, 360, 320, 420, 300, 380, 340, 440, 310][index],
  tone: [
    "from-emerald-700 to-lime-500",
    "from-green-700 to-cyan-500",
    "from-teal-700 to-yellow-500",
    "from-emerald-800 to-amber-500",
    "from-slate-700 to-emerald-500",
    "from-green-900 to-sky-500",
    "from-stone-700 to-lime-600",
    "from-emerald-600 to-orange-400",
    "from-zinc-700 to-green-500"
  ][index]
}));

export const alumni = [
  { name: "Ishaan Mehta", field: "Engineering", year: "2018", text: "Building sustainable mobility systems." },
  { name: "Kavya Singh", field: "Medicine", year: "2016", text: "Serving in public health and research." },
  { name: "Dev Arora", field: "Design", year: "2020", text: "Creating digital products for global teams." }
];

export const contact = {
  phone: "+91 98765 43210",
  email: "info@agracitizenschool.edu.in",
  address: "AGRA CITIZEN SCHOOL, Agra, Uttar Pradesh, India",
  whatsapp: "https://wa.me/919876543210"
};

export const quickFacts = [
  { icon: UsersRound, label: "Low student-teacher ratio" },
  { icon: CalendarDays, label: "Year-round enrichment calendar" },
  { icon: GraduationCap, label: "Career and college guidance" }
];
