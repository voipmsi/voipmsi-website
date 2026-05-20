"use client";

import { ALL_PARTNERS } from "@/lib/constants";

function PartnerBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm mx-3 min-w-[140px] h-14">
      <span
        className="text-sm font-bold tracking-tight"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

export default function PartnerTicker() {
  const row1 = [...ALL_PARTNERS, ...ALL_PARTNERS];
  const row2 = [...[...ALL_PARTNERS].reverse(), ...[...ALL_PARTNERS].reverse()];

  return (
    <div className="overflow-hidden space-y-4 py-2">
      {/* Row 1 — scrolls left */}
      <div className="flex" aria-label="Partner logos row 1">
        <div className="flex animate-marquee-left" style={{ width: "max-content" }}>
          {row1.map((p, i) => (
            <PartnerBadge key={`r1-${i}`} name={p.name} color={p.color} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex" aria-label="Partner logos row 2">
        <div className="flex animate-marquee-right" style={{ width: "max-content" }}>
          {row2.map((p, i) => (
            <PartnerBadge key={`r2-${i}`} name={p.name} color={p.color} />
          ))}
        </div>
      </div>
    </div>
  );
}
