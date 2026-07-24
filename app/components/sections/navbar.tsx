import Image from "next/image";
import { nav } from "@/data/content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-iris-noir-black">
      <div className="max-w-7xl mx-auto px-12 py-5 flex items-center gap-8">
        <a href="#" aria-label="Airish Absin home" className="shrink-0">
          <Image src="/images/logo.svg" alt="Airish Absin" width={179} height={25} priority />
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
  );
}
