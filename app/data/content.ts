import { Compass, Gem, Search, Sparkles, type LucideIcon } from "lucide-react";

export const nav = ["About", "Experience", "Work", "Process", "Contact"];

export const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Sparkles, title: "UI Design", desc: "Pixel-perfect interfaces that speak fluently across every screen and device." },
  { icon: Search, title: "UX Research", desc: "Deep user empathy translated into friction-free, intuitive experiences." },
  { icon: Gem, title: "Branding", desc: "Visual identities that are distinctive, durable, and unmistakably yours." },
  { icon: Compass, title: "Art Direction", desc: "Cohesive creative vision from concept to final deliverable, every time." },
];

export const skills = ["UI Design", "UX Research", "Brand Identity", "Design Systems", "Prototyping", "Web Design"];

export const experiences = [
  {
    category: "Agency",
    period: "2020 – 2022",
    company: "ADA",
    roles: ["Graphics Design", "B2C"],
    tags: ["Revlon", "Innisfree", "Ryo", "Mise En Scène", "Laneige", "Lao", "MegRhythm", "Bioré", "Laurel", "Merries", "Curél", "SkinInc", "Hera"],
  },
  {
    category: "Studio",
    period: "2023 – 2026",
    company: "Hatch",
    roles: ["Creative Design", "B2B"],
    tags: ["Hatch Internal", "Zip"],
  },
  {
    category: "Independent",
    period: "2023 – 2026",
    company: "Freelance",
    roles: ["UI/UX Design", "Creative Design"],
    tags: ["Crimson IT", "LAdmins", "BPI", "Integrated AIR Systems", "Seed The South", "TaxValet", "Innovate Charlotte", "Kumik"],
  },
  {
    category: "Startup",
    period: "2026 – present",
    company: "MSS",
    roles: ["UI/UX Design", "Product Design"],
    tags: ["MSS Internal", "+"],
  },
];

export const projects = [
  { title: "MySchool Suite", tag: "UI/UX · PRODUCT DESIGN", image: "@/assets/work/work-myschool-suite.png", category: "UI/UX" },
  { title: "Ladmins", tag: "UI/UX · ADMIN INTERFACE", color: "from-slate-800 to-zinc-950", category: "B2B" },
  { title: "Brand Stylescapes", tag: "BRANDING · IDENTITY", color: "from-indigo-900 to-slate-950", category: "Branding" },
  { title: "Innovate Charlotte", tag: "BRAND · IDENTITY", color: "from-violet-900 to-purple-950", category: "Branding" },
  { title: "Kumik Telecom", tag: "BRANDING · ADVERTISING", color: "from-orange-900 to-red-950", category: "Branding" },
  { title: "ZIP", tag: "B2C · ECOMMERCE", color: "from-sky-900 to-blue-950", category: "B2C" },
];

export const filters = ["B2B", "B2C", "Branding", "UI/UX", "All"];

export const process = [
  { step: "01", title: "Understanding\nthe Problem", desc: "Deep dive into user needs, business goals, and competitors to shape the most strategic, focused starting point." },
  { step: "02", title: "Shaping\nthe Strategy", desc: "Synthesize all research into clear design alerts, user flows, and a creative direction we can align on." },
  { step: "03", title: "Crafting\nthe Vision", desc: "Iterative design experience — wireframes, high-fidelity mockups, and a refined prototype." },
  { step: "04", title: "Handoff\n& Beyond", desc: "Clean, developer-ready files with thorough documentation and support through the build phase." },
];

export const heroStats = [
  { n: "6", l: "Years\nExperience" },
  { n: "10", l: "B2B\nBrands" },
  { n: "4", l: "B2C\nProjects" },
];

export const heroPanelOffsets = [0, -14, 10, -8];

export const contactFormFields = [
  { label: "Your Name", placeholder: "John Doe Cruz", type: "input" as const },
  { label: "Email Address", placeholder: "hello@domain.com", type: "input" as const },
  { label: "What's your project type?", placeholder: "Design · Web · UI/UX Design · Branding · etc.", type: "input" as const },
  { label: "Tell me more", placeholder: "Share your company, project, timeline, budget…", type: "textarea" as const },
];
