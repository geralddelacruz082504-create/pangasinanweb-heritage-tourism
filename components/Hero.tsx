import { Header } from "./Header";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-4 sm:px-6 lg:px-10">
      <div className="hero-shell mx-auto max-w-[1400px] overflow-hidden rounded-[30px] border border-white/40 px-4 py-4 shadow-[0_25px_80px_rgba(173,77,42,0.2)] sm:px-6 lg:px-8">
        <Header />
        <div id="home" className="relative grid gap-8 px-2 pb-6 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-16 lg:pt-20">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[#ffe0a3] sm:mb-6">+ The heart of Pangasinan</p>
            <h1 className="max-w-[680px] font-serif text-[3.1rem] leading-[0.92] tracking-[-0.04em] text-white sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.8rem]">Find your<span className="block text-[#f8c957]">next island story.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg md:text-xl md:leading-8">Journey through fascinating history, breathtaking scenery, and colorful traditions in the province where every horizon feels like an invitation.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#destinations" className="inline-flex items-center justify-center rounded-full bg-[#f8c957] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#17324d] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffd978] sm:text-sm">Explore Destinations</a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/20 sm:text-sm">Discover Our Story</a>
            </div>
          </div>
          <div className="relative z-10 flex justify-end lg:pb-4">
            <div className="w-full max-w-[430px] rotate-2 rounded-[26px] border-[10px] border-white/80 bg-white p-2 shadow-[0_25px_50px_rgba(24,54,77,0.35)] transition hover:rotate-0">
              <div className="relative overflow-hidden rounded-[18px]"><img src="/pangasinanweb-heritage-tourism/image/hundred-island.jpg" alt="Hundred Islands in Pangasinan" className="aspect-[4/5] w-full object-cover" /><div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#17324d]/80 p-4 text-white backdrop-blur-sm"><div className="text-[0.55rem] uppercase tracking-[0.2em] text-[#f8c957]">Start here</div><div className="mt-1 font-serif text-2xl">Hundred Islands</div></div></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 px-2 pb-5 pt-6 text-[0.56rem] uppercase tracking-[0.36em] text-white/70 sm:pt-8"><span>Scroll to explore</span><span className="h-px flex-1 bg-white/35" /></div>
      </div>
    </section>
  );
}
