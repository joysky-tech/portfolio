import { Suspense } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/config";
import { ContactForm } from "@/components/ContactForm";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Tell JoySky about your project. Share your goals and we will reply with practical next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h1 id="contact-title" className="font-display text-4xl font-bold leading-tight text-navy-900 md:text-5xl">
            Let&rsquo;s Build Something Great Together.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
            Share a few details about your project. We will reply by email with practical next steps.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 font-medium text-navy-900 hover:text-brand-600">
                  <Mail className="h-5 w-5 text-brand-600" aria-hidden="true" /> {site.email}
                </a>
              </li>
            )}
            {site.whatsapp && (
              <li>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
                </a>
              </li>
            )}
          </ul>
        </div>
        <Suspense fallback={<div className="h-96 rounded-2xl bg-mist-50" />}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
