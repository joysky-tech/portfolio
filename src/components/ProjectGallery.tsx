"use client";
import { useState } from "react";
import { projects } from "@/lib/config";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

const categories = ["All", "Web Apps", "Automation", "AI"] as const;
type Category = (typeof categories)[number];

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-navy-900 text-white"
                : "border border-mist-200 bg-white text-navy-800 hover:border-brand-500 hover:text-brand-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="sr-only">{filteredProjects.length} projects shown</div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06} className="h-full">
            <ProjectCard p={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
