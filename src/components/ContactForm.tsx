"use client";
import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { budgetOptions, services } from "@/lib/config";
import { validateContact, type ContactErrors } from "@/lib/validate";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const requested = useSearchParams().get("service") ?? "";
  const defaultService = [...services.map((s) => s.title), "Not sure yet"].includes(requested) ? requested : "";
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      const first = Object.keys(result.errors)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website: values.website ?? "" }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string; errors?: ContactErrors };
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        if (json.errors) setErrors(json.errors);
        setServerMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerMsg("Could not reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-900">
        <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        <h2 className="mt-3 font-display text-xl font-semibold">Message sent</h2>
        <p className="mt-1 text-sm">Thanks for reaching out. We will reply to the email you provided.</p>
        <button type="button" className="mt-5 text-sm font-semibold underline" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  const field = "mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy-900 placeholder:text-slate-400 focus:border-brand-500";
  const border = (k: keyof ContactErrors) => (errors[k] ? "border-red-500" : "border-mist-200");
  const Err = ({ k }: { k: keyof ContactErrors }) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-red-700">{errors[k]}</p> : null;
  const aria = (k: keyof ContactErrors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-2xl border border-mist-200 bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-900">Name</label>
          <input id="name" name="name" autoComplete="name" required className={`${field} ${border("name")}`} {...aria("name")} />
          <Err k="name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-900">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={`${field} ${border("email")}`} {...aria("email")} />
          <Err k="email" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="text-sm font-medium text-navy-900">Company <span className="font-normal text-slate-500">(optional)</span></label>
        <input id="company" name="company" autoComplete="organization" className={`${field} ${border("company")}`} {...aria("company")} />
        <Err k="company" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="text-sm font-medium text-navy-900">Service needed</label>
          <select id="service" name="service" required defaultValue={defaultService} className={`${field} ${border("service")}`} {...aria("service")}>
            <option value="" disabled>Choose a service</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <Err k="service" />
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-navy-900">Budget <span className="font-normal text-slate-500">(optional)</span></label>
          <select id="budget" name="budget" defaultValue="" className={`${field} border-mist-200`}>
            <option value="">Prefer not to say</option>
            {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="details" className="text-sm font-medium text-navy-900">Project details</label>
        <textarea id="details" name="details" rows={5} required placeholder="What would you like to build or improve?" className={`${field} ${border("details")}`} {...aria("details")} />
        <Err k="details" />
      </div>
      {/* Honeypot: hidden from people, bots tend to fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {serverMsg}
        </p>
      )}
      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-70 sm:w-auto sm:justify-self-start">
        {status === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…</>) : "Send message"}
      </button>
    </form>
  );
}
