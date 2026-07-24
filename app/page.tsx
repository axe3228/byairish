import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Process } from "@/components/sections/process";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
