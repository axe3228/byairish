import { experiences } from "@/data/content";

export function Experience() {
  return (
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
  );
}
