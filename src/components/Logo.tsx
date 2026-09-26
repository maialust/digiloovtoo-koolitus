/** Projekti märk: teekond ideest (ring) prototüübini (ruut). Ei ole Tallinna Ülikooli logo. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff8a73" />
          <stop offset="0.5" stopColor="#ffc23d" />
          <stop offset="1" stopColor="#3fd6c6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0b1e45" />
      <path
        d="M16 44 C 24 44, 24 20, 32 20 S 40 44, 48 44"
        fill="none"
        stroke="url(#logo-g)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="44" r="5" fill="#ff8a73" />
      <circle cx="32" cy="20" r="5" fill="#ffc23d" />
      <rect x="43" y="39" width="10" height="10" rx="2.5" fill="#3fd6c6" />
    </svg>
  );
}
