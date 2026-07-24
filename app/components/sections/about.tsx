import { services, skills } from "@/data/content";

export function About() {
  return (
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
  );
}
