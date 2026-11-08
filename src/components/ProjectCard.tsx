import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { projects } from "@/lib/config";

type Project = (typeof projects)[number];

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-soft">
      <div className="relative bg-mist-100">
        {/* SVG placeholder: replace with a real screenshot (PNG/JPG/WebP) and remove `unoptimized` */}
        <Image src={p.image} alt={p.alt} width={800} height={500} unoptimized className="h-auto w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-navy-900 px-3 py-1 text-xs font-medium text-white">
          Sample demo
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-navy-900">{p.name}</h3>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="font-semibold text-navy-900">Problem</dt>
            <dd className="text-slate-600">{p.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-navy-900">Solution</dt>
            <dd className="text-slate-600">{p.solution}</dd>
          </div>
        </dl>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-700">{t}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-semibold">
          {p.demoUrl ? (
            <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700">
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
            </a>
          ) : (
            <span className="text-slate-500">Demo link not added yet</span>
          )}
          {p.githubUrl && (
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700">
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
