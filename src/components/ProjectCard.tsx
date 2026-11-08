"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import type { projects } from "@/lib/config";

type Project = (typeof projects)[number];

export function ProjectCard({ p }: { p: Project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (detailsOpen && !dialog.open) dialog.showModal();
    if (!detailsOpen && dialog.open) dialog.close();
  }, [detailsOpen]);

  return (
    <>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-soft">
        <div className="relative bg-mist-100">
          <Image src={p.image} alt={p.alt} width={800} height={500} unoptimized className="h-auto w-full" />
          <span className="absolute left-3 top-3 rounded-full bg-navy-900 px-3 py-1 text-xs font-medium text-white">
            {p.category} demo
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold text-navy-900">{p.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.problem}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {p.tech.map((t) => (
              <li key={t} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-700">{t}</li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6 text-sm font-semibold">
            <button type="button" onClick={() => setDetailsOpen(true)} className="text-brand-600 hover:text-brand-700">
              View Details
            </button>
            {p.demoUrl && (
              <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
              </a>
            )}
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700">
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            )}
          </div>
        </div>
      </article>
      <dialog
        ref={dialogRef}
        aria-labelledby={`${p.slug}-details-title`}
        onClose={() => setDetailsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setDetailsOpen(false);
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-inherit backdrop:bg-navy-950/60"
      >
        <section className="ml-auto flex h-full w-full max-w-xl flex-col overflow-y-auto bg-white p-6 shadow-2xl sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-brand-600">{p.category} demo</p>
              <h2 id={`${p.slug}-details-title`} className="mt-2 font-display text-2xl font-bold text-navy-900">{p.name}</h2>
            </div>
            <button type="button" autoFocus onClick={() => setDetailsOpen(false)} aria-label="Close project details" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-navy-800 hover:bg-mist-100">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <Image src={p.image} alt={p.alt} width={800} height={500} unoptimized className="mt-6 h-auto w-full rounded-xl border border-mist-200" />
          <dl className="mt-7 space-y-6 text-sm leading-relaxed">
            <div>
              <dt className="font-semibold text-navy-900">Problem</dt>
              <dd className="mt-1 text-slate-600">{p.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Solution</dt>
              <dd className="mt-1 text-slate-600">{p.solution}</dd>
            </div>
          </dl>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {p.tech.map((t) => (
              <li key={t} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-700">{t}</li>
            ))}
          </ul>
        </section>
      </dialog>
    </>
  );
}
