const destinations = [
  { title: "Hundred Islands", description: "Crystal waters, limestone cliffs, and island-hopping adventures.", accent: "Alaminos", image: "/image/hundred-island.jpg" },
  { title: "Tondaligan Beach", description: "Golden sunsets, breezy coastlines, and laid-back family escapes.", accent: "Dagupan", image: "/image/tondaligan-beach.jpg" },
  { title: "Bolinao Falls", description: "Cool cascades, nature trails, and scenic views in the north.", accent: "Bolinao", image: "/image/bolinao-falls.jpg" },
];

export function Destinations() {
  return (
    <section id="destinations" className="mx-auto max-w-[1400px] px-4 pb-20 pt-12 sm:px-6 lg:px-10">
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#db6748]">Featured places</p><h2 className="font-serif text-3xl leading-none text-[#17324d] sm:text-4xl lg:text-5xl">Iconic destinations</h2></div><a href="#about" className="inline-flex text-sm font-bold uppercase tracking-[0.2em] text-[#db6748]">See more <span className="ml-2">-&gt;</span></a></div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((place, index) => <article key={place.title} className="group overflow-hidden rounded-[28px] border border-[#17324d]/10 bg-white shadow-[0_18px_40px_rgba(173,77,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(173,77,42,0.2)]"><div className="relative h-72 overflow-hidden"><img src={place.image} alt={place.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#13314a]/80 via-[#13314a]/10 to-transparent" /><span className="absolute left-5 top-5 rounded-full border border-white/70 bg-[#db6748]/80 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">{place.accent}</span></div><div className="space-y-4 p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><h3 className="font-serif text-2xl leading-none text-[#17324d] sm:text-3xl">{place.title}</h3><span className="text-xl text-[#e7a928]">0{index + 1}</span></div><p className="text-[0.95rem] leading-7 text-[#4e6272]">{place.description}</p><a href="#about" className="inline-flex items-center rounded-full border border-[#db6748]/35 bg-[#fff3df] px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#bd4e32] transition hover:bg-[#ffe6c4]">Plan a visit</a></div></article>)}
      </div>
    </section>
  );
}
