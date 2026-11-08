import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIconView } from "./icons";
import type { services } from "@/lib/config";

type Service = (typeof services)[number];

export function ServiceCard({ s, showOutcome = true }: { s: Service; showOutcome?: boolean }) {
  return (
    <article id={s.id} className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-mist-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
        <ServiceIconView name={s.icon} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
      {showOutcome && (
        <p className="mt-3 border-l-2 border-violet-500 pl-3 text-sm leading-relaxed text-navy-800">{s.outcome}</p>
      )}
      <Link
        href={`/contact?service=${encodeURIComponent(s.title)}`}
        className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
      >
        {s.cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
