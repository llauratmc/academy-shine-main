import hero from "../assets/hero.jpg";
import aboutHero from "../assets/about-hero.jpg";
import philosophy from "../assets/philosophy.jpg";
import p01 from "../assets/p01.jpg";
import p02 from "../assets/p02.jpg";
import p03 from "../assets/p03.webp";
import p04 from "../assets/p04.webp";
import p05 from "../assets/p05.webp";
import p06 from "../assets/p06.webp";
import p07 from "../assets/p07.webp";
import p08 from "../assets/p08.webp";
import p09 from "../assets/p09.webp";
import p10 from "../assets/p10.webp";
import p11 from "../assets/p11.webp";
import p12 from "../assets/p12.webp";
import p13 from "../assets/p13.webp";
import p14 from "../assets/p14.webp";

export const photos = {
  hero,
  aboutHero,
  philosophy,
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14,
};

export type GalleryCategory =
  | "Antrenmanlar"
  | "Maçlar"
  | "Turnuvalar"
  | "Etkinlikler"
  | "Takım Fotoğrafları";

export interface GalleryItem {
  src: string;
  alt: string;
  cat: GalleryCategory;
}

// Curated categorization of the real academy photos.
export const galleryItems: GalleryItem[] = [
  { src: hero,        alt: "Antrenman ısınması", cat: "Antrenmanlar" },
  { src: aboutHero,   alt: "Yeni tesiste ilk antrenman", cat: "Antrenmanlar" },
  { src: p01,         alt: "Antrenman anı", cat: "Antrenmanlar" },
  { src: p02,         alt: "Takım antrenmanı", cat: "Antrenmanlar" },
  { src: philosophy,  alt: "Teknik denetleme ziyareti", cat: "Etkinlikler" },
  { src: p03,         alt: "Sahadan bir kare", cat: "Antrenmanlar" },
  { src: p04,         alt: "Maç anı", cat: "Maçlar" },
  { src: p05,         alt: "Turnuva anısı", cat: "Turnuvalar" },
  { src: p06,         alt: "Takım fotoğrafı", cat: "Takım Fotoğrafları" },
  { src: p07,         alt: "Maç anı", cat: "Maçlar" },
  { src: p08,         alt: "Etkinlikten kare", cat: "Etkinlikler" },
  { src: p09,         alt: "Antrenman kare", cat: "Antrenmanlar" },
  { src: p10,         alt: "Turnuva kare", cat: "Turnuvalar" },
  { src: p11,         alt: "Takım fotoğrafı", cat: "Takım Fotoğrafları" },
  { src: p12,         alt: "Maç anı", cat: "Maçlar" },
  { src: p13,         alt: "Antrenman", cat: "Antrenmanlar" },
  { src: p14,         alt: "Etkinlik", cat: "Etkinlikler" },
];
