import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { galleryItems, type GalleryCategory } from "../lib/photos";
import galleryHeader from "../assets/headers/gallery-hero.webp";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri | BJK Maltepe Sahil Futbol Akademisi" },
      { name: "description", content: "Antrenman, maç, turnuva ve etkinliklerimizden kareler." },
      { property: "og:title", content: "Galeri | BJK Maltepe Sahil Futbol Akademisi" },
      { property: "og:description", content: "Sahadan, antrenmandan ve turnuvalardan kareler." },
    ],
  }),
  component: Gallery,
});

type Cat = "Tümü" | GalleryCategory;

const cats: Cat[] = [
  "Tümü",
  "Antrenmanlar",
  "Maçlar",
  "Turnuvalar",
  "Etkinlikler",
  "Takım Fotoğrafları",
];

// Assign span variations for a rich masonry feel; index-based so it's stable.
const spans = [
  "row-span-2",
  "",
  "",
  "row-span-2",
  "",
  "",
  "",
  "row-span-2",
  "",
  "",
  "",
  "row-span-2",
  "",
  "",
  "",
  "",
  "",
];

function Gallery() {
  const [active, setActive] = useState<Cat>("Tümü");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = active === "Tümü" ? galleryItems : galleryItems.filter((i) => i.cat === active);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, filtered.length]);

  const current = index !== null ? filtered[index] : null;

  return (
    <>
      <section className="relative flex min-h-[72svh] items-end overflow-hidden pb-16 pt-40">
        <img
          src={galleryHeader}
          alt="Genç futbolcuların dinamik antrenman maçı"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
          width={1672}
          height={941}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
              <span className="h-px w-10 bg-brand" /> Galeri
            </div>
            <h1 className="heading-hero-internal mt-6 max-w-4xl font-display">
              Sahadan <span className="text-brand">Anlar.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Antrenmanlarımızdan, maçlardan, turnuvalardan ve akademi etkinliklerinden seçtiğimiz
              gerçek kareler.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  active === c
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-12 sm:pb-32 sm:pt-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4"
          >
            <AnimatePresence>
              {filtered.map((im, i) => (
                <motion.button
                  layout
                  key={`${im.src}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  onClick={() => setIndex(i)}
                  className={`group relative overflow-hidden rounded-2xl bg-surface ${spans[i % spans.length]}`}
                >
                  <img
                    src={im.src}
                    alt={im.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-white/85">
                    {im.cat}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {current && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 grid place-items-center p-4 sm:p-6"
            onClick={() => setIndex(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 grid place-items-center h-11 w-11 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(null);
              }}
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
              }}
              aria-label="Önceki"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? null : (i + 1) % filtered.length));
              }}
              aria-label="Sonraki"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.img
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              src={current.src}
              alt={current.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />
            <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 px-20 text-center text-[10px] uppercase tracking-[0.2em] text-white/70 sm:bottom-6 sm:text-xs sm:tracking-[0.3em]">
              {current.cat} · {index + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
