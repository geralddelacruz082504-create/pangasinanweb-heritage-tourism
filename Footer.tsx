import { HeritageLogo } from "./HeritageLogo";

export function Footer() {
  return <footer className="border-t border-[#17324d]/10 bg-[#17324d] px-4 py-8 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-[1400px] flex-col gap-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-gradient-to-br from-[#f8fbff] via-[#dfeef8] to-[#d4e8d1] p-1 shadow-[0_8px_18px_rgba(12,29,39,0.18)]"><HeritageLogo size={40} /></div><span className="uppercase tracking-[0.3em] text-white">Pangasinan Heritage</span></div><div className="uppercase tracking-[0.24em] text-[#f8c957]">Ilocos Region - Philippines</div></div></footer>;
}
