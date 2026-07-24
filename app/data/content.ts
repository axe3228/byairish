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

export type Project = {
  title: string;
  tag: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "MySchool Suite",
    tag: "UI/UX · PRODUCT DESIGN",
    description: "Building intuitive interfaces for school admins managing daily operations, and digital creators looking for tools built around their workflow.",
    image: "/images/work/myschool-suite.png",
    tags: ["UI/UX"],
  },
  {
    title: "Ladmins",
    tag: "UI/UX · Website Interface",
    description: "Refined the navigation architecture and introduced new content sections, while keeping the experience tightly on-brand.",
    image: "/images/work/ladmins.png",
    tags: ["UI/UX"],
  },
  {
    title: "Brand Stylescapes",
    tag: "B2B · Branding",
    description: "Curated unique stylescapes for multiple brands, realigning their visual direction to create stronger, more cohesive identities.",
    image: "/images/work/brand-stylescapes.png",
    tags: ["B2B", "Branding"],
  },
  {
    title: "Innovate Charlotte",
    tag: "B2B ·  DESIGN Creative  · Branding",
    description: "Developed a stylescape and comprehensive brand guideline, giving the organization a strong, unified creative foundation.",
    image: "/images/work/innovate-charlotte.png",
    tags: ["B2B", "Design", "Creative", "Branding"],
  },
  {
    title: "Kumik Telecom",
    tag: "Branding · Website Interface ",
    description: "Built the brand from the ground up: stylescape, logo, and a full website redesign, giving Kumik a coherent visual identity.",
    image: "/images/work/kumik-telecom.png",
    tags: ["Branding", "Website Interface"],
  },
  {
    title: "ZIP",
    tag: "B2B ·  DESIGN Creative ",
    description: "A consumer-facing ecommerce experience focused on fast browsing, strong product storytelling, and conversion.",
    image: "/images/work/zip.png",
    tags: ["B2B", "Design", "Creative"],
  },
  {
    title: "BPI",
    tag: "B2B ·  DESIGN Creative ",
    description: "Produced campaign banners and printable materials in support of one of the Philippines' most recognized banking brands.",
    image: "/images/work/bpi.png",
    tags: ["B2B", "Design", "Creative"],
  },
  {
    title: "Business Screen Blogs",
    tag: "B2B · Blog Curation",
    description: "Crafted quality blog covers, illustrations, and infographics that elevated the brand's content presence across digital channels.",
    image: "/images/work/business-screen-blogs.png",
    tags: ["B2B", "Blog Curation"],
  },
  {
    title: "Business Screen Carousel",
    tag: "B2b · Carousel Posts · Branding",
    description: "Designed LinkedIn carousel posts, one-pagers, and branded templates that gave the team a polished, consistent voice.",
    image: "/images/work/business-screen-carousel.png",
    tags: ["B2B", "Carousel Posts", "Branding"],
  },
  {
    title: "Crimson IT",
    tag: "B2B ·  DESIGN Creative",
    description: "Crafted a stylescape and campaign banners that brought visual clarity and direction to the brand's growing digital presence.",
    image: "/images/work/crimson-IT.png",
    tags: ["B2B", "Design", "Creative"],
  },
  {
    title: "Featherless AI",
    tag: "B2B ·  DESIGN Creative ",
    description: "Created social media banners and posts for an AI inference platform, translating complex, cutting-edge technology into clean visual content.",
    image: "/images/work/featherless-AI.png",
    tags: ["B2B", "Design", "Creative"],
  },
  {
    title: "Hatch Blogs",
    tag: "B2B · Blog Curation",
    description: "Designed blog covers, custom illustrations, and infographics, then organized the look into a design guide to keep every post consistent.",
    image: "/images/work/hatch-blogs.png",
    tags: ["B2B", "Blog Curation"],
  },
  {
    title: "Hatch Carousel",
    tag: "B2B · Carousel Posts",
    description: "Produced LinkedIn carousel and one-pager posts, plus reusable templates that gave the team a repeatable format for ongoing content.",
    image: "/images/work/hatch-carousel.png",
    tags: ["B2B", "Carousel Posts"],
  },
  {
    title: "Hera",
    tag: "B2C · Campaign Creative",
    description: "Delivered social media banners and posts for the luxury skincare brand, maintaining the brand's refined, high-fashion visual standard.",
    image: "/images/work/hera.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "Innisfree",
    tag: "B2C · Campaign Creative",
    description: "Designed social media banners and posts for the K-beauty skincare brand, balancing natural aesthetics with campaign-driven visual energy.",
    image: "/images/work/innisfree.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "Integrated AIR Systems",
    tag: "B2B ·  Assets  · Branding",
    description: "Developed a stylescape and custom iconography suite, laying the visual groundwork  to communicate with clarity and confidence.",
    image: "/images/work/integrated-AIR-systems.png",
    tags: ["B2B", "Assets", "Branding"],
  },
  {
    title: "Kao",
    tag: "b2c · Campaign Creative",
    description: "Created social media banners across Kao, spanning Curel, Merries, Bioré, and MegRhythm, adapting tone and aesthetics to each sub-brand.",
    image: "/images/work/kao.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "Laneige",
    tag: "B2C · Campaign Creative",
    description: "Produced social media banners and posts for the premium skincare label, maintaining the brand's signature elegance across every format.",
    image: "/images/work/laneige.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "LeEmporium",
    tag: "B2C · Campaign Creative",
    description: "Designed social media banners and posts for the modest fashion label, the Sejada and Hijab collections with culturally  elegant visuals.",
    image: "/images/work/leemporium.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "Mise En Scène",
    tag: "B2C · Campaign Creative",
    description: "Designed social media banners and posts for the hair care brand, translating K-beauty sensibility into visually compelling digital content.",
    image: "/images/work/mise-en-scène.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "Old Zip",
    tag: "B2B ·  DESIGN Creative ",
    description: "Delivered a range of assets: banners, PDFs, slides, and banner campaigns, keeping the fintech brand consistent across formats.",
    image: "/images/work/old-zip.png",
    tags: ["B2B", "Design", "Creative"],
  },
  {
    title: "Pocket Rocket",
    tag: "UI/UX · Website Interface",
    description: "Led a full website revamp, modernizing the visual language and restructuring the layout to align with the brand's current  messaging.",
    image: "/images/work/pocket-rocket.png",
    tags: ["UI/UX", "Website Interface"],
  },
  {
    title: "Revlon",
    tag: "B2C · Campaign Creative",
    description: "Designed social media banners and posts, capturing Revlon's bold, confident energy across skincare campaigns and digital content.",
    image: "/images/work/revlon.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "Ryo",
    tag: "B2C · Campaign Creative",
    description: "Crafted social media banners and posts for the premium hair care brand, with a right balance between heritage and modern   aesthetics.",
    image: "/images/work/ryo.png",
    tags: ["B2C", "Campaign Creative"],
  },
  {
    title: "Scorebuddy",
    tag: "B2B ·  DESIGN Creative  · Branding",
    description: "Refined existing brand assets, then extended the system into a polished one-pager and pitch deck ready for client-facing use.",
    image: "/images/work/scorebuddy.png",
    tags: ["B2B", "Design", "Creative", "Branding"],
  },
  {
    title: "Seed The South",
    tag: "B2B ·  DESIGN Creative  · Branding",
    description: "Developed the stylescape, social banners, slide decks, campaign assets, and printables. A full creative rollout rooted in the brand's identity.",
    image: "/images/work/seed-the-south.png",
    tags: ["B2B", "Design", "Creative", "Branding"],
  },
  {
    title: "Taxvalet",
    tag: "B2B ·  DESIGN Creative  · Branding",
    description: "Created a stylescape,  one-pager illustration, and carousel post that brought personality to a niche-but-growing service brand.",
    image: "/images/work/taxvalet.png",
    tags: ["B2B", "Design", "Creative", "Branding"],
  },
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
