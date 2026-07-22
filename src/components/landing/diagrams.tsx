/**
 * The two editorial diagrams from the subpages, rebuilt as components. Colours
 * are the brand palette (sage, mist, ink, paper, hairline); text inherits the
 * PP Mori sans via `font-sans` on the root svg.
 */

/** How It Works — marketplaces orbit one shared record. */
export function MarketplacesDiagram() {
  return (
    <svg
      viewBox="0 0 460 380"
      className="w-full max-w-[460px] font-sans"
      fill="none"
      aria-hidden="true"
    >
      <line x1="230" y1="190" x2="110" y2="80" stroke="#CCC6C4" strokeDasharray="2 4" />
      <line x1="230" y1="190" x2="360" y2="80" stroke="#CCC6C4" strokeDasharray="2 4" />
      <line x1="230" y1="190" x2="110" y2="300" stroke="#CCC6C4" strokeDasharray="2 4" />
      <line x1="230" y1="190" x2="360" y2="300" stroke="#CCC6C4" strokeDasharray="2 4" />
      <g fontSize="13">
        <rect x="30" y="56" width="160" height="48" rx="2" fill="#FFFFFF" stroke="#2D2D2D" opacity="0.9" />
        <text x="110" y="85" textAnchor="middle" fill="#2D2D2D">Gallery + collectors</text>
        <rect x="280" y="56" width="150" height="48" rx="2" fill="#FFFFFF" stroke="#2D2D2D" opacity="0.9" />
        <text x="355" y="85" textAnchor="middle" fill="#2D2D2D">A fair</text>
        <rect x="30" y="276" width="160" height="48" rx="2" fill="#FFFFFF" stroke="#2D2D2D" opacity="0.9" />
        <text x="110" y="305" textAnchor="middle" fill="#2D2D2D">Artists, by region</text>
        <rect x="280" y="276" width="150" height="48" rx="2" fill="#FFFFFF" stroke="#2D2D2D" opacity="0.9" />
        <text x="355" y="305" textAnchor="middle" fill="#2D2D2D">A collector</text>
        <circle cx="230" cy="190" r="62" fill="#627B70" />
        <text x="230" y="185" textAnchor="middle" fontWeight="600" letterSpacing="0.06em" fill="#F0EFEA">
          SHARED
        </text>
        <text x="230" y="203" textAnchor="middle" fontWeight="600" letterSpacing="0.06em" fill="#F0EFEA">
          RECORD
        </text>
      </g>
    </svg>
  );
}

/** Why Always Art — many independent sources converge on one record. */
export function TrustDiagram() {
  const sources = [
    { x: 50, label: "Gallery" },
    { x: 155, label: "Fair" },
    { x: 260, label: "Conservator" },
    { x: 365, label: "Institution" },
    { x: 470, label: "Collector" },
  ];
  return (
    <svg
      viewBox="0 0 520 320"
      className="w-full max-w-[480px] font-sans"
      fill="none"
      aria-hidden="true"
    >
      {sources.map((s) => (
        <line
          key={s.label}
          x1={s.x}
          y1="70"
          x2="260"
          y2="250"
          stroke="#CCC6C4"
          strokeDasharray="2 4"
        />
      ))}
      <g fontSize="11" textAnchor="middle" fill="#F0EFEA">
        {sources.map((s) => (
          <g key={s.label}>
            <circle cx={s.x} cy="70" r="5" fill="#ABBFB6" />
            <text x={s.x} y="50">
              {s.label}
            </text>
          </g>
        ))}
      </g>
      <rect x="180" y="250" width="160" height="52" rx="2" fill="#627B70" />
      <text
        x="260"
        y="281"
        textAnchor="middle"
        className="font-sans"
        fontSize="12"
        fontWeight="600"
        letterSpacing="0.06em"
        fill="#F0EFEA"
      >
        ONE RECORD
      </text>
    </svg>
  );
}
