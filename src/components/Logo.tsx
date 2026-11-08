import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 ${className}`}
    >
      <svg viewBox="0 0 32 32" className="h-[70%] w-[70%]" fill="none">
        <circle cx="21.5" cy="11" r="4" fill="#fff" />
        <path d="M5 23.5c3.2-5.2 8-5.4 11-1.4s6.8 3.2 10-2.1" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="JoySky home" className="inline-flex items-center gap-2.5 rounded-lg">
      <LogoMark />
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
        Joy<span className={light ? "text-brand-400" : "text-brand-600"}>Sky</span>
      </span>
    </Link>
  );
}
