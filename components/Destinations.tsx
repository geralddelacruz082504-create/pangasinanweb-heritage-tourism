"use client";

import { useState } from "react";

const destinations = [
  {
    title: "Hundred Islands",
    description: "Crystal waters, limestone cliffs, and island-hopping adventures.",
    accent: "Alaminos",
    image: "/pangasinanweb-heritage-tourism/image/hundred-island.jpg",
    details: "Spend the day exploring limestone islets, snorkeling in aquamarine waters, and enjoying a breezy island-hopping route.",
  },
  {
    title: "Tondaligan Beach",
    description: "Golden sunsets, breezy coastlines, and laid-back family escapes.",
    accent: "Dagupan",
    image: "/pangasinanweb-heritage-tourism/image/tondaligan-beach.jpg",
    details: "Take an easy beachside escape with sunset walks, fresh seafood, and a relaxing weekend along the coast.",
  },
  {
    title: "Bolinao Falls",
    description: "Cool cascades, nature trails, and scenic views in the north.",
    accent: "Bolinao",
    image: "/pangasinanweb-heritage-tourism/image/bolinao-falls.jpg",
    details: "Follow scenic trails to refreshing falls, cool mountain air, and panoramic views that make for a memorable day trip.",
  },
];

export function Destinations() {
  const [selectedTitle, setSelectedTitle] = useState(destinations[0].title);
  const activePlace = destinations.find((place) => place.title === selectedTitle) ?? destinations[0];

  return (
    <section id="destinations" className="mx-auto max-w-[1400px] px-4 pb-20 pt-12 sm:px-6 lg:px-10">
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#db6748]">Featured places</p>
          <h2 className="font-serif text-3xl leading-none text-[#17324d] sm:text-4xl lg:text-5xl">Iconic destinations</h2>
        </div>
        <a href="#about" className="inline-flex text-sm font-bold uppercase tracking-[0.2em] text-[#db6748]">
          See more <span className="ml-2">-&gt;</span>
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((place, index) => {
          const isSelected = place.title === activePlace.title;

          return (
            <article
              key={place.title}
              tabIndex={0}
              role="button"
              aria-pressed={isSelected}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedTitle(place.title);
                }
              }}
              onClick={() => setSelectedTitle(place.title)}
              className={`group cursor-pointer overflow-hidden rounded-[28px] border bg-white shadow-[0_18px_40px_rgba(173,77,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(173,77,42,0.2)] ${
                isSelected ? "border-[#db6748]/60 ring-2 ring-[#db6748]/20" : "border-[#17324d]/10"
              }`}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={place.image} alt={place.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13314a]/80 via-[#13314a]/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-[#db6748]/80 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {place.accent}
                </span>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl leading-none text-[#17324d] sm:text-3xl">{place.title}</h3>
                  <span className="text-xl text-[#e7a928]">0{index + 1}</span>
                </div>

                <p className="text-[0.95rem] leading-7 text-[#4e6272]">{place.description}</p>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedTitle(place.title);
                  }}
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] transition ${
                    isSelected
                      ? "border-[#db6748]/50 bg-[#db6748] text-white shadow-[0_10px_25px_rgba(219,103,72,0.2)]"
                      : "border-[#db6748]/35 bg-[#fff3df] text-[#bd4e32] hover:bg-[#ffe6c4]"
                  }`}
                >
                  {isSelected ? "Selected" : "Plan a visit"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div id="destination-detail" className="mt-8 rounded-[28px] border border-[#17324d]/10 bg-white/80 p-5 shadow-[0_18px_40px_rgba(173,77,42,0.08)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#db6748]">Selected stop</p>
            <h3 className="mt-3 font-serif text-3xl leading-none text-[#17324d] sm:text-4xl">{activePlace.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#536476] sm:text-lg">{activePlace.details}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-[#db6748]/40 bg-[#fff3df] px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#bd4e32] transition hover:bg-[#ffe6c4]">
              View story
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activePlace.title}, Pangasinan`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#17324d] px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#23476b]"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
