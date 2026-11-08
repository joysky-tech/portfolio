import { reasons } from "@/lib/config";
import { WhyIconView } from "./icons";
import { Reveal } from "./Reveal";

export function WhyChoose() {
  return (
    <section id="why" aria-labelledby="why-title" className="scroll-mt-20 bg-mist-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 id="why-title" className="max-w-2xl font-display text-3xl font-bold text-navy-900 md:text-4xl">
            Why choose JoySky?
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">Straightforward work, honest communication and software built to last.</p>
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <li key={r.title}>
              <Reveal delay={i * 0.05}>
                <div className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-brand-400">
                    <WhyIconView name={r.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
