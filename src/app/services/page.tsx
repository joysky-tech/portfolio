import { buildMetadata } from "@/lib/seo";
import { services, site } from "@/lib/config";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Website development, web applications, Java full-stack, business automation, AI solutions, API integration and deployment & maintenance from JoySky.",
  path: "/services",
});

export default function ServicesPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: `${s.description} ${s.outcome}`,
        url: `${site.url}/services#${s.id}`,
        areaServed: "IN",
        provider: { "@id": `${site.url}/#organization` },
      },
    })),
  };
  return (
    <>
      <section aria-labelledby="services-title" className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h1 id="services-title" className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Services built around your business goals.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Each service is about an outcome: more enquiries, less manual work, systems that stay reliable.
          </p>
        </div>
      </section>
      <section aria-label="All services" className="py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.05} className={s.id === "deployment-maintenance" ? "md:col-span-2 lg:col-span-3" : ""}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
