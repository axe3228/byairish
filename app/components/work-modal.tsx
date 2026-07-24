"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Project } from "@/data/content";

type WorkModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function WorkModal({ project, onClose }: WorkModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
    >
      <button
        type="button"
        aria-label="Close project preview"
        className="absolute inset-0 bg-black/85 cursor-default"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-6xl max-h-[95vh] overflow-y-auto border border-border/50 bg-iris-noir-black cursor-default select-none">
        <div
          className="relative flex items-center justify-center w-full bg-iris-noir-black p-4 md:p-6"
          onDragStart={(e) => e.preventDefault()}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-border/60 bg-iris-noir-black/80 text-iris-cotton hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            draggable={false}
            className="w-full h-auto max-h-[75vh] object-contain pointer-events-none"
            sizes="95vw"
            priority
          />
        </div>

        <div className="border-t border-border/50 p-6 md:p-8">
          <p className="font-syncopate text-[11px] uppercase tracking-[0.15em] text-iris-cotton mb-3">
            {project.tag}
          </p>
          <h2 id="work-modal-title" className="font-serif text-3xl md:text-4xl leading-[0.95] text-iris-cotton">
            {project.title}
          </h2>
          <p className="font-sans text-base text-iris-cotton/75 leading-relaxed mt-4">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
