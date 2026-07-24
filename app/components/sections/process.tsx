import { process } from "@/data/content";

export function Process() {
  return (
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
  );
}
