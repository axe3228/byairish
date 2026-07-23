"use client";

import { useState } from "react";
import Image from "next/image";
import heroImg from "@/assets/hero-spheres.jpg";
import logo from "@/assets/logo.svg";
import myschoolImg from "@/assets/work/work-myschool-suite.png";
import { Sparkles, Search, Gem, Compass } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DribbbleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.822 2.26 4.104 2.382 6.604-2.222-.47-4.274-.72-6.146-.72-.26 0-.52.005-.78.015 1.455-1.89 2.744-3.51 4.544-5.899zM12 2.16c2.52 0 4.83.88 6.65 2.35-.98 1.26-2.38 2.94-4.06 4.9-1.67-1.05-3.45-1.95-5.3-2.67C10.24 4.84 11.09 2.16 12 2.16zM4.06 7.12c1.97.77 3.82 1.72 5.54 2.82-1.43 1.84-2.72 3.9-3.84 6.15C3.53 14.7 2.16 11.58 2.16 8.24c0-.72.07-1.42.2-2.12.57.33 1.17.64 1.7.99v.01zm-.5 11.28c.38-2.6 1.28-5.05 2.65-7.28 1.02.52 2.1.98 3.22 1.38-.84 2.58-1.5 4.7-1.97 5.9-1.3-.5-2.5-1.15-3.6-1.9h-.3zm4.74 3.36c.5-1.3 1.18-3.55 2.05-6.2 1.28.3 2.6.52 3.96.65-.9 2.12-2.2 3.9-3.8 5.2-.74-.2-1.46-.44-2.21-.65zm5.9.65c1.44-1.15 2.53-2.72 3.2-4.58 1.16.1 2.3.15 3.42.15.26 0 .51 0 .76-.02-1.1 2.62-3.28 4.7-5.98 5.72-.14-.76-.28-1.52-.4-2.27z" />
    </svg>
  );
}

const nav = ["About", "Experience", "Work", "Process", "Contact"];

const services = [
  { icon: Sparkles, title: "UI Design", desc: "Pixel-perfect interfaces that speak fluently across every screen and device." },
  { icon: Search, title: "UX Research", desc: "Deep user empathy translated into friction-free, intuitive experiences." },
  { icon: Gem, title: "Branding", desc: "Visual identities that are distinctive, durable, and unmistakably yours." },
  { icon: Compass, title: "Art Direction", desc: "Cohesive creative vision from concept to final deliverable, every time." },
];

const skills = ["UI Design", "UX Research", "Brand Identity", "Design Systems", "Prototyping", "Web Design"];

const experiences = [
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

const projects = [
  { title: "MySchool Suite", tag: "UI/UX · PRODUCT DESIGN", image: myschoolImg, category: "UI/UX" },
  { title: "Ladmins", tag: "UI/UX · ADMIN INTERFACE", color: "from-slate-800 to-zinc-950", category: "B2B" },
  { title: "Brand Stylescapes", tag: "BRANDING · IDENTITY", color: "from-indigo-900 to-slate-950", category: "Branding" },
  { title: "Innovate Charlotte", tag: "BRAND · IDENTITY", color: "from-violet-900 to-purple-950", category: "Branding" },
  { title: "Kumik Telecom", tag: "BRANDING · ADVERTISING", color: "from-orange-900 to-red-950", category: "Branding" },
  { title: "ZIP", tag: "B2C · ECOMMERCE", color: "from-sky-900 to-blue-950", category: "B2C" },
];

const filters = ["B2B", "B2C", "Branding", "UI/UX", "All"];

const process = [
  { step: "01", title: "Understanding\nthe Problem", desc: "Deep dive into user needs, business goals, and competitors to shape the most strategic, focused starting point." },
  { step: "02", title: "Shaping\nthe Strategy", desc: "Synthesize all research into clear design alerts, user flows, and a creative direction we can align on." },
  { step: "03", title: "Crafting\nthe Vision", desc: "Iterative design experience — wireframes, high-fidelity mockups, and a refined prototype." },
  { step: "04", title: "Handoff\n& Beyond", desc: "Clean, developer-ready files with thorough documentation and support through the build phase." },
];

export default function Home() {
  const [filter, setFilter] = useState("B2B");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-iris-noir-black">
        <div className="max-w-7xl mx-auto px-12 py-5 flex items-center gap-8">
          <a href="#" aria-label="Airish Absin home" className="shrink-0">
            <Image src={logo} alt="Airish Absin" width={179} height={25} priority />
          </a>
          <nav className="hidden md:flex flex-1 items-center justify-evenly font-sans text-[11px] tracking-[0.14em] uppercase text-iris-cotton">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-white transition-colors">
                {n}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="hidden md:inline-flex shrink-0 font-sans text-[11px] tracking-[0.14em] uppercase border border-primary text-iris-cotton px-5 py-2.5 hover:bg-primary/10 transition-colors"
          >
            View CV
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-12 pt-12 pb-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 border border-primary px-3 py-1.5 mb-8 font-sans text-[15px] tracking-[0.14em] uppercase text-iris-cotton bg-primary/10 w-full max-w-[478px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                Available for new projects
              </div>

              <div className="flex items-center gap-3 mb-6 font-sans text-[15px] tracking-[0.14em] uppercase text-primary">
                <span className="h-px w-8 bg-primary shrink-0" />
                UI/UX & Creative Designer
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.92] mb-8 text-iris-cotton">
                Crafting
                <br />
                <span className="italic text-primary">Experiences</span>
                <br />
                that Matter
              </h1>

              <p className="text-iris-cotton/75 max-w-md mb-12 leading-relaxed text-sm md:text-[22px]">
                I design thoughtful digital products and visual identities that balance bold aesthetics with intuitive usability. Based in Iloilo, working globally.
              </p>

              <div className="flex gap-10 md:gap-12">
                {[
                  { n: "6", l: "Years\nExperience" },
                  { n: "10", l: "B2B\nBrands" },
                  { n: "4", l: "B2C\nProjects" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-syncopate text-4xl md:text-5xl text-iris-cotton leading-none">
                      {s.n}
                      <span className="text-primary text-4xl md:text-5xl">+</span>
                    </div>
                    <div className="text-[13px] uppercase tracking-[0.14em] text-iris-cotton/65 mt-2 whitespace-pre-line">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-[4/5] md:aspect-square">
              <div className="grid grid-cols-4 gap-[3px] h-full">
                {[0, -14, 10, -8].map((offset, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden"
                    style={{ transform: `translateY(${offset}px)` }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${heroImg.src})`,
                        backgroundSize: "400% 100%",
                        backgroundPosition: `${(i / 3) * 100}% center`,
                      }}
                      role={i === 0 ? "img" : undefined}
                      aria-label={i === 0 ? "Red glass spheres" : undefined}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 font-sans text-[15px] tracking-[0.14em] uppercase text-primary">
              <span className="h-px w-8 bg-primary shrink-0" />
              About Me
            </div>
            <h2 className="font-serif text-[55px] leading-[0.95] mb-8 text-iris-cotton">
              Design with<br />
              <span className="italic text-primary">purpose</span> &<br />
              precision
            </h2>
            <p className="text-iris-cotton leading-relaxed mb-5 text-sm md:text-[22px]">
              I&apos;m a UI/UX and Creative Designer with over 6 years of experience turning complex problems into clean, compelling interfaces. My work lives at the intersection of strategy, craft, and storytelling.
            </p>
            <p className="text-iris-cotton leading-relaxed mb-10 text-sm md:text-[22px]">
              Whether designing a product from zero or refreshing a legacy brand, I bring structure, intention, and a sharp eye for detail to every project I take on.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-5">
              {skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center justify-center font-sans font-light text-[12px] uppercase tracking-[0.15em] text-iris-cotton border border-iris-cotton px-6 py-2.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 self-center content-start">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-iris-noir-black min-h-[200px] px-6 py-10 flex flex-col items-start hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 shrink-0 border border-primary flex items-center justify-center mb-5 text-primary">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-syncopate text-sm uppercase tracking-[0.12em] mb-2 text-iris-cotton shrink-0">
                  {title}
                </h3>
                <p className="font-sans text-sm text-iris-cotton leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-12 py-24">
          <div className="flex items-center gap-3 mb-6 font-sans text-[15px] tracking-[0.14em] uppercase text-primary">
            <span className="h-px w-8 bg-primary shrink-0" />
            Where I&apos;ve Worked
          </div>
          <h2 className="font-serif text-[55px] leading-[0.95] mb-16 max-w-3xl text-iris-cotton">
            Collaborative work across<br />
            <span className="italic text-primary">beauty, finance,</span> and <span className="italic text-primary">beyond</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 lg:gap-20">
            {experiences.map((e) => (
              <div key={e.company} className="flex flex-col">
                <div className="flex justify-between items-center gap-3 mb-6">
                  <span className="font-primary font-light text-[12px] tracking-[0.15em] text-primary">{e.category}</span>
                  <span className="font-sans font-light text-[9px] uppercase tracking-[0.15em] shrink-0 rounded-full bg-iris-maroon text-primary-foreground px-3 py-1">
                    {e.period}
                  </span>
                </div>
                <h3 className="font-serif text-3xl leading-none mb-5 text-iris-cotton">{e.company}</h3>
                <div className="text-sm md:text-[18px] text-iris-cotton leading-relaxed mb-10">
                  <p>{e.roles[0]} ·</p>
                  <p>{e.roles[1]}</p>
                </div>
                <div className="border-t border-iris-cotton/20 pt-8">
                  <div className="flex flex-wrap gap-x-3 gap-y-3">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center justify-center font-sans font-light text-[9px] uppercase tracking-[0.15em] text-iris-cotton border border-iris-cotton px-3 py-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-12 py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6 font-sans text-[15px] tracking-[0.14em] uppercase text-primary">
                <span className="h-px w-8 bg-primary shrink-0" />
                Selected Works
              </div>
              <h2 className="font-serif text-[55px] leading-[0.95] text-iris-cotton">
                Projects that<br />
                <span className="italic text-primary">define</span> the craft
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`font-sans font-light text-[12px] uppercase tracking-[0.15em] px-4 py-2 rounded-md border transition-all ${
                    filter === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "surface-elevated border-border/60 text-iris-cotton/65 hover:text-iris-cotton"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <button
                key={p.title}
                type="button"
                className="group relative aspect-[4/5] overflow-hidden bg-iris-noir-black text-left transition-transform duration-300 hover:-translate-y-1"
              >
                {"image" in p && p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top z-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className={`absolute inset-0 z-0 bg-gradient-to-br ${"color" in p ? p.color : "from-slate-800 to-zinc-950"}`} />
                )}
                <div className="work-card-gradient absolute inset-0 z-10 pointer-events-none" />
                <div className="work-card-tint absolute inset-0 z-[11] pointer-events-none" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pointer-events-none">
                  <div className="font-syncopate text-[12px] uppercase tracking-[0.15em] text-iris-cotton mb-3">
                    {p.tag}
                  </div>
                  <h3 className="font-serif text-4xl leading-[0.95] text-iris-cotton">{p.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-12 py-24">
          <div className="flex items-center gap-3 mb-6 font-sans text-[15px] tracking-[0.14em] uppercase text-primary">
            <span className="h-px w-8 bg-primary shrink-0" />
            My Process
          </div>
          <h2 className="font-serif text-[55px] leading-[0.95] mb-16 text-iris-cotton">
            How I <span className="italic text-primary">shape</span><br />
            ideas into impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <div className="font-sans font-light text-[12px] text-primary tracking-[0.15em] uppercase mb-4">— {p.step}</div>
                <h3 className="font-serif text-2xl leading-[0.95] mb-4 whitespace-pre-line text-iris-cotton">{p.title}</h3>
                <p className="font-sans text-sm text-iris-cotton leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-12 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6 font-sans text-[15px] tracking-[0.14em] uppercase text-primary">
              <span className="h-px w-8 bg-primary shrink-0" />
              Get In Touch
            </div>
            <h2 className="font-serif text-[55px] leading-[0.95] mb-8 text-iris-cotton">
              Let&apos;s build<br />
              <span className="italic text-primary">something</span><br />
              great
            </h2>
            <p className="text-iris-cotton leading-relaxed mb-10 max-w-md text-sm md:text-[22px]">
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
            </p>
            <div className="space-y-5">
              <div>
                <div className="font-sans font-light text-[12px] uppercase tracking-[0.15em] text-primary mb-1">Email</div>
                <div className="text-sm md:text-[22px] text-iris-cotton">airisxarga@email.com</div>
              </div>
              <div>
                <div className="font-sans font-light text-[12px] uppercase tracking-[0.15em] text-primary mb-1">Based In</div>
                <div className="text-sm md:text-[22px] text-iris-cotton">Iloilo, Philippines</div>
              </div>
              <div>
                <div className="font-sans font-light text-[12px] uppercase tracking-[0.15em] text-primary mb-1">Status</div>
                <div className="text-sm md:text-[22px] text-iris-cotton">Open to full-time & freelance</div>
              </div>
            </div>
            <div className="flex gap-3 mt-10">
              <button type="button" className="w-10 h-10 rounded-full surface-elevated border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition">
                <LinkedinIcon size={16} />
              </button>
              <button type="button" className="w-10 h-10 rounded-full surface-elevated border border-border/60 flex items-center justify-center hover:border-primary hover:text-primary transition">
                <DribbbleIcon size={16} />
              </button>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-12 py-8 flex flex-wrap justify-between gap-4 font-sans font-light text-[12px] tracking-[0.15em] text-iris-cotton/65 uppercase">
          <div>© 2025 AIRISH ABSIN · ALL RIGHTS RESERVED</div>
          <div>Designed & coded with intention</div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 2500);
      }}
      className="space-y-5"
    >
      {[
        { label: "Your Name", placeholder: "John Doe Cruz", type: "input" },
        { label: "Email Address", placeholder: "hello@domain.com", type: "input" },
        { label: "What's your project type?", placeholder: "Design · Web · UI/UX Design · Branding · etc.", type: "input" },
        { label: "Tell me more", placeholder: "Share your company, project, timeline, budget…", type: "textarea" },
      ].map((f) => (
        <div key={f.label}>
          <label className="font-sans font-light text-[12px] uppercase tracking-[0.15em] text-primary mb-2 block">{f.label}</label>
          {f.type === "input" ? (
            <input
              required
              placeholder={f.placeholder}
              className="w-full surface-elevated border border-border/60 rounded-md px-4 py-3 text-sm text-iris-cotton placeholder:text-iris-cotton/40 focus:outline-none focus:border-primary transition"
            />
          ) : (
            <textarea
              required
              rows={5}
              placeholder={f.placeholder}
              className="w-full surface-elevated border border-border/60 rounded-md px-4 py-3 text-sm text-iris-cotton placeholder:text-iris-cotton/40 focus:outline-none focus:border-primary transition resize-none"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground rounded-md py-3.5 font-sans font-light text-[12px] uppercase tracking-[0.15em] hover:bg-primary/90 hover:shadow-[var(--shadow-glow)] transition-all"
      >
        {sent ? "Message Sent ✓" : "Send Message →"}
      </button>
    </form>
  );
}
