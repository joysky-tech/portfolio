// Shared by the browser form and the API route.
export type ContactInput = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
};
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(raw: Record<string, unknown>):
  | { ok: true; data: ContactInput }
  | { ok: false; errors: ContactErrors } {
  const s = (k: string) => (typeof raw[k] === "string" ? (raw[k] as string).trim() : "");
  const data: ContactInput = {
    name: s("name"),
    email: s("email"),
    company: s("company"),
    service: s("service"),
    budget: s("budget"),
    details: s("details"),
  };
  const errors: ContactErrors = {};
  if (data.name.length < 2) errors.name = "Enter your name (at least 2 characters).";
  else if (data.name.length > 100) errors.name = "Name is too long.";
  if (!EMAIL.test(data.email) || data.email.length > 200) errors.email = "Enter a valid email address, like name@company.com.";
  if (data.company.length > 120) errors.company = "Company name is too long.";
  if (!data.service) errors.service = "Choose the service you need.";
  if (data.details.length < 20) errors.details = "Tell us a bit more (at least 20 characters).";
  else if (data.details.length > 3000) errors.details = "Keep details under 3000 characters.";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
