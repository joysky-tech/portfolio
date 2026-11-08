// Decorative connected-workflow diagram. Pure SVG, no JS. Animation is CSS-only and disabled for reduced motion.
const nodes = [
  { x: 90, y: 70, label: "Web" },
  { x: 330, y: 50, label: "API" },
  { x: 380, y: 230, label: "Automate" },
  { x: 220, y: 330, label: "AI" },
  { x: 60, y: 240, label: "Deploy" },
];

export function HeroVisual() {
  return (
    <svg viewBox="0 0 440 380" role="img" aria-label="Diagram of JoySky services connected around a central hub: web, API, automation, AI and deployment" className="h-auto w-full">
      <g stroke="#5C8BFF" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="4 6" className="flow-line">
        {nodes.map((n) => (
          <line key={n.label} x1="220" y1="190" x2={n.x} y2={n.y} />
        ))}
      </g>
      <g stroke="#7C5CFF" strokeOpacity=".35" strokeWidth="1" fill="none">
        <polyline points={nodes.map((n) => `${n.x},${n.y}`).concat(`${nodes[0].x},${nodes[0].y}`).join(" ")} />
      </g>
      <circle cx="220" cy="190" r="62" fill="#121A33" stroke="#2F6BFF" strokeOpacity=".6" />
      <circle cx="220" cy="190" r="44" fill="#2F6BFF" fillOpacity=".15" className="hub-pulse" />
      <circle cx="232" cy="178" r="8" fill="#fff" />
      <path d="M198 206c7-11 17-11 23-3s14 7 21-4" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x - 44} y={n.y - 20} width="88" height="40" rx="12" fill="#121A33" stroke="#7C5CFF" strokeOpacity=".7" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="#fff" fontFamily="var(--font-display), system-ui, sans-serif">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
