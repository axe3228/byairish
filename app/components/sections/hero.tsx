import heroImg from "@/assets/hero-spheres.jpg";
import { heroPanelOffsets, heroStats } from "@/data/content";

export function Hero() {
  return (
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
              {heroStats.map((s) => (
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
              {heroPanelOffsets.map((offset, i) => (
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
  );
}
