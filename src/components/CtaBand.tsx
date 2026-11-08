import Link from "next/link";
import { site } from "@/lib/config";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="px-5 py-20">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center md:px-16">
        <h2 id="cta-title" className="font-display text-3xl font-bold text-white md:text-4xl">
          Let&rsquo;s Build Something Great Together.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us what you want to build or improve. We will reply with practical next steps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary">Start a Project</Link>
          {site.whatsapp && (
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Chat on WhatsApp
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
