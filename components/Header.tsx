import { HeritageLogo } from "./HeritageLogo";

export function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 px-2 py-4 text-sm uppercase tracking-[0.18em] text-white">
      <div className="flex items-center gap-3">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/60 bg-gradient-to-br from-[#f8fbff] via-[#dfeef8] to-[#d4e8d1] shadow-[0_12px_25px_rgba(18,40,52,0.18)]">
          <HeritageLogo />
        </div>
        <div className="leading-none">
          <div className="text-[0.78rem] font-bold tracking-[0.18em] text-white">PANGASINAN</div>
          <div className="mt-1 text-[0.52rem] font-medium italic tracking-[0.38em] text-[#f6d87a]">HERITAGE</div>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-[0.62rem] font-medium tracking-[0.2em] text-white/85 md:flex">
        <a href="#home" className="transition hover:text-[#f8c957]">Home</a>
        <a href="#destinations" className="transition hover:text-[#f8c957]">Destinations</a>
        <a href="#about" className="transition hover:text-[#f8c957]">About</a>
      </nav>

      <div className="flex items-center gap-3">
        <a href="#destinations" className="hidden rounded-full border border-white/60 bg-transparent px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white/15 sm:inline-flex">Explore Sites</a>
        <a href="#destinations" className="inline-flex rounded-full bg-[#f8c957] px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#17324d] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffd978]">Discover</a>
      </div>
    </header>
  );
}
