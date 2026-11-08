import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validate";

// Simple in-memory limiter (per server instance). For serverless/production, use a shared store (e.g. Upstash).
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60_000;
const MAX = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });

  const result = validateContact(body);
  if (!result.ok) return NextResponse.json({ error: "Please fix the highlighted fields.", errors: result.errors }, { status: 400 });

  const { name, email, company, service, budget, details } = result.data;
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "JoySky <onboarding@resend.dev>";

  if (!key || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] Email not configured. Received enquiry:", result.data);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "Email delivery is not set up yet. Please contact us by email directly." }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Service: ${service}`,
    `Budget: ${budget || "-"}`,
    "",
    details,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `New JoySky enquiry: ${service} (${name})`, text }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return NextResponse.json({ error: "We could not send your message. Please try again shortly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "We could not send your message. Please try again shortly." }, { status: 502 });
  }
}
