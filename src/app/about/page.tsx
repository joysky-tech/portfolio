import { buildMetadata } from "@/lib/seo";
import { team } from "@/lib/config";
import { WhyChoose } from "@/components/WhyChoose";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Meet JoySky, a four-member technology team in India making technology practical and accessible for businesses.",
  path: "/about",
});

const initials = (n: string) => n.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h1 id="about-title" className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            A small team that makes technology practical.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            JoySky is a four-member technology team based in India. We help businesses build digital products, improve their workflows and grow online.
          </p>
        </div>
      </section>

      <section aria-labelledby="mission-title" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.4fr]">
          <h2 id="mission-title" className="font-display text-3xl font-bold text-navy-900">Our mission</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>To make technology practical and accessible for businesses of every size.</p>
            <p>
              We focus on solving real problems: a website that brings in enquiries, a system that replaces manual tracking, or an automation that gives your team time back. We keep the tools simple and the communication clear.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="team-title" className="bg-mist-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 id="team-title" className="font-display text-3xl font-bold text-navy-900 md:text-4xl">The team</h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={i * 0.06} className="h-full">
                  <article className="h-full rounded-2xl border border-mist-200 bg-white p-6 shadow-soft">
                    <span aria-hidden="true" className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 font-display text-xl font-bold text-white">
                      {initials(m.name)}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{m.name}</h3>
                    <p className="text-sm font-medium text-brand-700">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.bio}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyChoose />
      <CtaBand />
    </>
  );
}
