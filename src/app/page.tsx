import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { services, site } from "@/lib/config";
import { HeroVisual } from "@/components/HeroVisual";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyChoose } from "@/components/WhyChoose";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  ...buildMetadata({
    title: "JoySky – Software Development & Digital Automation Agency",
    description:
      "JoySky is a technology team in India building websites, web apps, automation and AI tools to help businesses improve workflows and grow online.",
    path: "/",
  }),
  title: { absolute: "JoySky – Software Development & Digital Automation Agency" },
};

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy-900">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 id="hero-title" className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Build Smarter.<br />Work Better.<br />Grow Faster.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
              {site.name} is a technology team in India. We build websites and web applications, automate everyday workflows, and add AI tools that fit how your business actually works.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Start a Project</Link>
              <Link href="/portfolio" className="btn-ghost">Explore Our Work</Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none"><HeroVisual /></div>
        </div>
      </section>

      <section aria-labelledby="services-title" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 id="services-title" className="max-w-2xl font-display text-3xl font-bold text-navy-900 md:text-4xl">
              Everything you need to go digital and stay running
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">From a first website to custom software and the support after launch.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.05}>
                <ServiceCard s={s} showOutcome={false} />
              </Reveal>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/services" className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700">
              See how each service helps <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <WhyChoose />
      <CtaBand />
    </>
  );
}
