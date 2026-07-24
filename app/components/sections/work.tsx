"use client";

import { useState } from "react";
import Image from "next/image";
import { filters, projects } from "@/data/content";

export function Work() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
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
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain object-center z-0 size-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="work-card-gradient absolute inset-0 z-10 pointer-events-none" />
              <div className="work-card-tint absolute inset-0 z-[11] pointer-events-none" />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pointer-events-none">
                <div className="font-syncopate text-[12px] uppercase tracking-[0.15em] text-iris-cotton mb-3">
                  {p.tag}
                </div>
                <h3 className="font-serif text-4xl leading-[0.95] text-iris-cotton">{p.title}</h3>
                <p className="font-sans text-sm text-iris-cotton/75 leading-snug mt-3 line-clamp-2">{p.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
