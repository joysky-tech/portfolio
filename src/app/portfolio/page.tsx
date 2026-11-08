import { Info } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/lib/config";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Sample JoySky demo projects: a business website, an inventory management system and an appointment booking system.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section aria-labelledby="portfolio-title" className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h1 id="portfolio-title" className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Sample projects that show how we work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Each project starts with a real business problem and ends with a working solution.
          </p>
        </div>
      </section>
      <section aria-label="Projects" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p role="note" className="flex items-start gap-3 rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 text-sm text-navy-800">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            These are sample demo projects built to show our approach. They are not client work. Real projects will be added here as they are completed.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
