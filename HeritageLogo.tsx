type HeritageLogoProps = {
  size?: number;
};

export function HeritageLogo({ size = 48 }: HeritageLogoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className="block"
      aria-label="Pangasinan Heritage colorful emblem"
      role="img"
    >
      <defs>
        <linearGradient id="sealBg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#d9f1f9" />
          <stop offset="100%" stopColor="#b7d3c5" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="100" height="100" rx="18" fill="url(#sealBg)" opacity="0.8" />
      <path d="M31 29h18.4c13.7 0 24.9 11.1 24.9 24.9v28.2c0 13.7-11.1 24.9-24.9 24.9H31V29Zm11 10v47.1h7.4c8.4 0 15.2-6.8 15.2-15.2V55.8c0-8.4-6.8-15.2-15.2-15.2H42Zm12 20.4h11c2.7 0 5.1 2.4 5.1 5.1v4.8c0 2.7-2.4 5.1-5.1 5.1H54V59.4Z" fill="#2d6b4f" />
      <path d="M79 33l13.8 12.5-5.6 5.2-8.2-7.3v32.3l5.9 6.5-5.3 4.8-18.2-16.5V58l18.4 16.8V42.4L79 33Z" fill="#f4c84a" />
      <circle cx="75" cy="79" r="12" fill="#f5f8fa" opacity="0.9" />
      <path d="M69 79h12M75 73v12" stroke="#2d6b4f" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 90c11-12 28-18 43-18 17 0 27 4 43 18" fill="none" stroke="#2a5f88" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
