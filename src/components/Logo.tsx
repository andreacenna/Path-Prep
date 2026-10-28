export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#2f7bff" />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0e1a33" />
      <path d="M14 46 L26 34 L34 40 L50 20" stroke="url(#lg)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="20" r="5" fill="#2dd4bf" />
    </svg>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark />
      <div className="leading-tight">
        <div className="text-lg font-extrabold tracking-tight text-white">PATH</div>
        <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-300">Academy</div>
      </div>
    </div>
  );
}
