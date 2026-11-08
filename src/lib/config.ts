// Single source of truth for brand, contact and content.
// Replace placeholders here (and in .env.local) – see README.

const clean = (v?: string) => (v && v.trim() ? v.trim() : undefined);

export const site = {
  name: "JoySky",
  tagline: "Turning Ideas Into Digital Solutions.",
  description:
    "JoySky is a technology team in India building websites, web applications, automation and AI tools that help businesses work better and grow online.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)?.replace(/\D/g, ""),
  social: {
    github: clean(process.env.NEXT_PUBLIC_GITHUB_URL),
    linkedin: clean(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    instagram: clean(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
  },
  gaId: clean(process.env.NEXT_PUBLIC_GA_ID),
  gscVerification: clean(process.env.NEXT_PUBLIC_GSC_VERIFICATION),
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export type ServiceIcon = "globe" | "app" | "code" | "workflow" | "bot" | "plug" | "rocket";

export const services: {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
  outcome: string;
  cta: string;
  tech: string[];
}[] = [
  {
    id: "website-development",
    icon: "globe",
    title: "Website Development",
    description: "Business websites, landing pages and portfolios.",
    outcome: "Look credible online and turn visitors into enquiries.",
    cta: "Plan my website",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "web-application-development",
    icon: "app",
    title: "Web Application Development",
    description: "Custom dashboards, management systems, CRM and inventory solutions.",
    outcome: "Replace spreadsheets and manual tracking with one system your team uses daily.",
    cta: "Discuss my app",
    tech: ["React", "TypeScript", "PostgreSQL"],
  },
  {
    id: "java-full-stack-development",
    icon: "code",
    title: "Java Full-Stack Development",
    description: "Spring Boot, React, REST APIs and databases.",
    outcome: "Get a dependable, well-structured product that can grow with your business.",
    cta: "Talk to our developers",
    tech: ["Java", "Spring Boot", "React"],
  },
  {
    id: "business-automation",
    icon: "workflow",
    title: "Business Automation",
    description: "Workflow automation, integrations and notifications.",
    outcome: "Save hours on repetitive tasks and cut down on errors.",
    cta: "Automate a workflow",
    tech: ["APIs", "Webhooks", "JavaScript"],
  },
  {
    id: "ai-solutions",
    icon: "bot",
    title: "AI Solutions",
    description: "AI chatbots, document assistants and intelligent business tools.",
    outcome: "Answer questions faster and make better use of your own documents and data.",
    cta: "Explore AI options",
    tech: ["AI", "RAG", "Vector search"],
  },
  {
    id: "api-integration",
    icon: "plug",
    title: "API Integration",
    description: "Connect third-party services and business platforms.",
    outcome: "Keep your tools in sync so data flows without copy-pasting.",
    cta: "Connect my tools",
    tech: ["REST APIs", "OAuth", "Webhooks"],
  },
  {
    id: "deployment-maintenance",
    icon: "rocket",
    title: "Deployment & Maintenance",
    description: "Hosting, Docker deployment, updates and technical support.",
    outcome: "Stay online, secure and up to date without managing servers yourself.",
    cta: "Get support",
    tech: ["Docker", "Cloud", "Monitoring"],
  },
];

export const team: { name: string; role: string; bio: string; avatarUrl?: string }[] = [
  {
    name: "Mohamed Jasim",
    role: "QA Engineer & Client Success Lead",
    bio: "Keeps product quality high through thoughtful testing and makes sure client needs stay at the center.",
  },
  {
    name: "Yugashri",
    role: "Tech Lead & Full-Stack Architect (Spring Boot & Cloud Systems)",
    bio: "Architects full-stack products and cloud systems with Spring Boot, building dependable foundations that scale.",
  },
  {
    name: "Sowndarya",
    role: "Backend Developer (API Integration & Database Systems)",
    bio: "Builds reliable APIs and database systems that keep business applications connected and organized.",
  },
  {
    name: "Kiruthisha",
    role: "UI/UX Designer & Frontend Engineer (React & Tailwind CSS)",
    bio: "Designs clear, accessible experiences and brings them to life with React and Tailwind CSS.",
  },
];

export type WhyIcon = "practical" | "comms" | "modern" | "scale" | "collab" | "support";

export const reasons: { icon: WhyIcon; title: string; text: string }[] = [
  { icon: "practical", title: "Practical solutions", text: "We build what your business needs now, without unnecessary complexity." },
  { icon: "comms", title: "Clear communication", text: "Plain-language updates, so you always know what is happening and why." },
  { icon: "modern", title: "Modern technologies", text: "Current, well-supported tools such as Next.js, React, Spring Boot and Docker." },
  { icon: "scale", title: "Scalable development", text: "Clean structure that is easy to extend as your needs grow." },
  { icon: "collab", title: "Collaborative approach", text: "You are part of the process, from the first idea to launch." },
  { icon: "support", title: "Ongoing support", text: "Hosting, updates and fixes after launch, so nothing is left hanging." },
];

export const projects: {
  slug: string;
  name: string;
  category: "Web Apps" | "Automation" | "AI";
  image: string;
  alt: string;
  problem: string;
  solution: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}[] = [
  {
    slug: "business-website",
    name: "Business Website",
    category: "Web Apps",
    image: "/projects/business-website.svg",
    alt: "Sample business website layout with a hero section and service cards",
    problem: "Small businesses often lack a fast, professional site that explains what they do and makes contact easy.",
    solution: "A responsive multi-page site with clear services, enquiry form and search-friendly structure.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "", // TODO: add live demo URL
    githubUrl: "", // TODO: add GitHub URL
  },
  {
    slug: "inventory-management-system",
    name: "Inventory Management System",
    category: "Web Apps",
    image: "/projects/inventory-system.svg",
    alt: "Sample inventory dashboard with stock table and summary charts",
    problem: "Stock tracked in spreadsheets leads to mismatched counts and late reordering.",
    solution: "A dashboard for products, stock levels and low-stock alerts backed by a REST API.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    slug: "appointment-booking-system",
    name: "Appointment Booking System",
    category: "Automation",
    image: "/projects/appointment-booking.svg",
    alt: "Sample appointment booking calendar with time slots",
    problem: "Booking by phone and messages causes double bookings and missed appointments.",
    solution: "Online slot booking with confirmations and reminder notifications.",
    tech: ["Next.js", "Node.js", "Email notifications"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    slug: "document-assistant",
    name: "AI Document Assistant",
    category: "AI",
    image: "/projects/document-assistant.svg",
    alt: "Sample AI document assistant with a source library and answer panel",
    problem: "Teams spend time searching long documents for answers and checking where information came from.",
    solution: "A document assistant that responds to questions using a private knowledge library and links answers to their sources.",
    tech: ["AI", "RAG", "Next.js", "Vector search"],
    demoUrl: "",
    githubUrl: "",
  },
];

export const budgetOptions = [
  "Not sure yet",
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "Above ₹2,00,000",
];
