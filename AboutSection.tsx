const stats = [
  { value: "4,000+", label: "sq km of scenic coastal landscapes" },
  { value: "12", label: "heritage-rich municipalities to explore" },
  { value: "1", label: "unforgettable Pangasinan experience" },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 lg:px-10"><div className="grid gap-8 rounded-[30px] border border-[#e7a928]/30 bg-[#fff0c9] p-5 shadow-[0_18px_48px_rgba(173,77,42,0.12)] md:grid-cols-[1.2fr_0.8fr] md:p-8 lg:p-10"><div><p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-[#bd4e32]">Why Visit Pangasinan</p><h2 className="font-serif text-3xl leading-none text-[#17324d] sm:text-4xl lg:text-5xl">Discover more than a destination.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-[#536476] sm:text-lg sm:leading-8">Explore historic towns, breathtaking beaches, rolling landscapes, and vibrant local traditions that make every journey through Pangasinan memorable.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{stats.map((item) => <div key={item.label} className="rounded-[20px] border border-[#17324d]/10 bg-white/75 p-4"><div className="font-serif text-2xl text-[#17324d] sm:text-3xl">{item.value}</div><div className="mt-2 text-sm leading-6 text-[#536476]">{item.label}</div></div>)}</div></div><div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-[#f08b5a] p-3"><img src="/image/bolinao-falls.jpg" alt="Bolinao Falls in Pangasinan" className="h-full min-h-[280px] w-full rounded-[18px] object-cover" /><div className="absolute bottom-7 left-7 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#bd4e32]">Made for slow days</div></div></div></section>
  );
}
