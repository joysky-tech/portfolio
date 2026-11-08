import {
  Globe, LayoutDashboard, Code2, Workflow, Bot, Plug, Rocket,
  Wrench, MessageSquareText, Cpu, TrendingUp, Users, LifeBuoy,
} from "lucide-react";
import type { ServiceIcon, WhyIcon } from "@/lib/config";

const serviceMap = { globe: Globe, app: LayoutDashboard, code: Code2, workflow: Workflow, bot: Bot, plug: Plug, rocket: Rocket };
const whyMap = { practical: Wrench, comms: MessageSquareText, modern: Cpu, scale: TrendingUp, collab: Users, support: LifeBuoy };

export function ServiceIconView({ name, className = "h-6 w-6" }: { name: ServiceIcon; className?: string }) {
  const I = serviceMap[name];
  return <I className={className} aria-hidden="true" />;
}
export function WhyIconView({ name, className = "h-6 w-6" }: { name: WhyIcon; className?: string }) {
  const I = whyMap[name];
  return <I className={className} aria-hidden="true" />;
}
