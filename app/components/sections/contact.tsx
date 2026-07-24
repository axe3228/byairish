"use client";

import { useState } from "react";
import { contactFormFields } from "@/data/content";

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
      {contactFormFields.map((f) => (
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

export function Contact() {
  return (
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
  );
}
