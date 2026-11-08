import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/config";

export function Footer() {
  const socials = [
    { href: site.social.github, label: "JoySky on GitHub", Icon: Github },
    { href: site.social.linkedin, label: "JoySky on LinkedIn", Icon: Linkedin },
    { href: site.social.instagram, label: "JoySky on Instagram", Icon: Instagram },
  ].filter((s) => s.href);

  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline} A technology team based in India.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
                </a>
              </li>
            )}
            <li><Link href="/contact" className="hover:text-white">Send us your project details</Link></li>
          </ul>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 hover:bg-navy-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-navy-700 px-5 py-5 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} JoySky. All rights reserved.</p>
          <nav aria-label="Footer bottom" className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
            {nav.slice(2).map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
