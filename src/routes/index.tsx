import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Shield,
  Users,
  Trophy,
  HeartHandshake,
  Target,
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import { photos } from "../lib/photos";
import heroImg from "../assets/headers/home-hero.webp";
const philosophyImg = photos.philosophy;
const g1 = photos.p06;
const g2 = photos.aboutHero;
const g3 = photos.p04;
const g4 = photos.p11;
const g5 = photos.p07;
const g6 = photos.p02;

import { CinematicIntro } from "../components/CinematicIntro";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { Counter } from "../components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", href: heroImg, fetchPriority: "high" } as never],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  return (
    <>
      <CinematicIntro />

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <motion.img
          src={heroImg}
          alt="BJK Maltepe Sahil Futbol Akademisi antrenman"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-center"
          style={{ y, scale }}
          width={1920}
          height={1200}
        />
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlay }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 sm:pb-24 lg:px-10 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/70 sm:mb-8 sm:gap-4 sm:tracking-[0.5em] lg:mb-10"
          >
            <span className="h-px w-12 bg-brand" />
            24 Yıllık Tecrübe
          </motion.div>

          <h1 className="heading-hero-home max-w-[1200px] text-balance font-display tracking-tight">
            {[
              "Geleceğin",
              "Şampiyonlarını",
              <span key="r" className="text-brand">
                Yetiştiriyoruz
              </span>,
            ].map((w, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55 + i * 0.15, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                className="block overflow-hidden pb-[0.08em]"
              >
                <span className="inline-block">{w} </span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="mt-6 max-w-2xl text-base leading-[1.7] text-white/80 sm:mt-8 sm:text-lg sm:leading-[1.8] lg:mt-12"
          >
            24 yılı aşkın deneyimimizle; kız ve erkek çocuklarına yaş gruplarına özel, profesyonel
            bir futbol eğitimi sunuyoruz. Her antrenman, karakterli bir sporcunun temellerini atmak
            için tasarlanır.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="mt-7 flex flex-wrap gap-3 sm:mt-10 sm:gap-5 lg:mt-12"
          >
            <Link
              to="/iletisim"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium tracking-wide text-brand-foreground transition hover:bg-brand/90 sm:px-8 sm:py-4"
            >
              Kayıt Bilgisi Al
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>
            <Link
              to="/hakkimizda"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium tracking-wide backdrop-blur transition hover:bg-white/10 sm:px-8 sm:py-4"
            >
              Bizi Tanıyın
              <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Aşağı Kaydır</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 py-6 overflow-hidden">
        <div className="flex marquee whitespace-nowrap font-display text-4xl sm:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              {[
                "Teknik Gelişim",
                "★",
                "Fiziksel Hazırlık",
                "★",
                "Takım Ruhu",
                "★",
                "Disiplin",
                "★",
                "Özgüven",
                "★",
                "Futbol Zekâsı",
                "★",
              ].map((w, j) => (
                <span key={j} className={w === "★" ? "text-brand" : ""}>
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              <span className="h-px w-10 bg-brand" />
              Rakamlarla Akademi
            </div>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">
            {[
              { n: 24, s: "+", l: "Yıllık Tecrübe" },
              { n: 1200, s: "+", l: "Yetiştirilen Sporcu" },
              { n: 12, s: "", l: "Uzman Antrenör" },
              { n: 6, s: "", l: "Yaş Grubu Programı" },
            ].map((s) => (
              <StaggerItem key={s.l}>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground uppercase tracking-[0.2em]">
                    {s.l}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 sm:py-32 bg-surface/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-end mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
                <span className="h-px w-10 bg-brand" /> Neden Biz
              </div>
              <h2 className="heading-section mt-6 font-display">
                Her Çocuk Bir <span className="text-brand">Yıldız</span> Olabilir.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Akademimiz; profesyonel antrenman metodolojisi, güvenli saha koşulları ve
                çocuğunuzun bireysel gelişimine odaklanan bir eğitim modeli ile Türkiye'nin en
                güvenilir futbol okullarından biridir.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Shield,
                t: "Profesyonel Antrenörler",
                d: "UEFA lisanslı ve alanında deneyimli antrenör kadromuz her sporcuya bireysel ilgi gösterir.",
              },
              {
                Icon: Users,
                t: "Yaş Gruplarına Özel Eğitim",
                d: "5-16 yaş aralığında pedagojik olarak planlanmış, seviye bazlı antrenman programları.",
              },
              {
                Icon: Target,
                t: "Teknik Gelişim",
                d: "Top hâkimiyeti, pas kalitesi ve karar verme becerisini geliştiren modern çalışmalar.",
              },
              {
                Icon: HeartHandshake,
                t: "Disiplin ve Karakter",
                d: "Sadece futbolcu değil; saygılı, sorumluluk sahibi bireyler yetiştiriyoruz.",
              },
              {
                Icon: Trophy,
                t: "Takım Ruhu",
                d: "Turnuvalar, maçlar ve etkinliklerle güçlü bir aidiyet ve dayanışma duygusu.",
              },
              {
                Icon: Sparkles,
                t: "Güvenli Antrenman Ortamı",
                d: "Modern halı sahamız, kontrollü ekipmanlar ve sürekli denetim ile ailelere huzur.",
              },
            ].map(({ Icon, t, d }) => (
              <StaggerItem key={t}>
                <div className="group elevate relative h-full rounded-2xl border border-white/10 bg-surface-2/60 p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand/15 text-brand ring-1 ring-brand/30 group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="heading-subsection mt-6 font-display tracking-normal normal-case"
                    style={{ textTransform: "none" }}
                  >
                    {t}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={philosophyImg}
                alt="Antrenman felsefesi"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1400}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Antrenman Felsefemiz
                </div>
                <div className="heading-subsection mt-2 font-display">
                  Kaliteli Tekrar, Kalıcı Gelişim.
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
              <span className="h-px w-10 bg-brand" /> Felsefe
            </div>
            <h2 className="heading-section mt-6 font-display">
              Sadece Futbolcu Değil, Karakter Yetiştiriyoruz.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Her antrenmanımız; teknik ustalık, fiziksel dayanıklılık, taktiksel zekâ ve güçlü
              karakter üzerine kurulur. Amacımız her sporcunun potansiyelini bilimsel bir yaklaşımla
              ortaya çıkarmaktır.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Teknik Gelişim",
                "Fiziksel Hazırlık",
                "Özgüven",
                "Disiplin",
                "Takım Çalışması",
                "Futbol Zekâsı",
              ].map((v) => (
                <li key={v} className="flex items-center gap-3 border-b border-white/10 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span className="text-sm">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 sm:py-32 bg-surface/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
              <span className="h-px w-10 bg-brand" /> Yolculuk
            </div>
            <h2 className="heading-section mt-6 max-w-3xl font-display">
              Çocuğunuzun Akademideki İlk Dört Adımı.
            </h2>
          </Reveal>

          <div className="relative mt-20">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true }}
              className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-brand origin-left"
            />
            <Stagger className="grid gap-10 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  t: "Kayıt",
                  d: "İletişim formu veya telefon ile hızlı kayıt süreci. Ailelere detaylı bilgi.",
                },
                {
                  n: "02",
                  t: "Sporcu Değerlendirme",
                  d: "Yaş, seviye ve motivasyon analizi ile en uygun gruba yerleştirme.",
                },
                {
                  n: "03",
                  t: "Antrenman Programı",
                  d: "Haftalık planlı antrenmanlar; teknik, taktik ve fiziksel modüller.",
                },
                {
                  n: "04",
                  t: "Sürekli Gelişim",
                  d: "Periyodik değerlendirme, veli raporları, maç ve turnuva deneyimleri.",
                },
              ].map((s) => (
                <StaggerItem key={s.n}>
                  <div>
                    <div className="relative flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground font-display text-lg ring-8 ring-background">
                        {s.n}
                      </span>
                      <span className="h-px flex-1 bg-white/10 lg:hidden" />
                    </div>
                    <h3
                      className="heading-subsection mt-6 font-display"
                      style={{ textTransform: "none" }}
                    >
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
                <span className="h-px w-10 bg-brand" /> Galeri
              </div>
              <h2 className="heading-section mt-6 font-display">Sahadan Kareler.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/galeri"
                className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:text-brand transition"
              >
                Tüm Galeri <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: g1, cls: "row-span-2 aspect-[3/4]" },
              { src: g2, cls: "aspect-[4/3]" },
              { src: g3, cls: "aspect-[4/3]" },
              { src: g4, cls: "aspect-[1/1]" },
              { src: g5, cls: "aspect-[4/3]" },
              { src: g6, cls: "aspect-[3/4]" },
            ].map((im, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl bg-surface ${im.cls}`}
              >
                <img
                  src={im.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-2 p-10 sm:p-16 lg:p-24 grain">
            <div
              aria-hidden
              className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
            />
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
                <span className="h-px w-10 bg-brand" /> Kayıt
              </div>
              <h2 className="heading-section mt-6 max-w-4xl text-balance font-display">
                Çocuğunuzun Futbol Yolculuğu <span className="text-brand">Bugün Başlasın.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Bir deneme antrenmanı planlayın, akademimizi yerinde tanıyın. Ekibimiz size en uygun
                program hakkında detaylı bilgi vermek için hazır.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/905412778497"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-brand-foreground hover:bg-brand/90 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <a
                  href="tel:+905412778497"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium hover:bg-white/5 transition"
                >
                  <Phone className="h-4 w-4" /> Bizi Arayın
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-surface p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
                  <span className="h-px w-10 bg-brand" /> Konum
                </div>
                <h3 className="heading-subsection mt-6 font-display">Sahamızı Ziyaret Edin</h3>
                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand mt-0.5" />
                    <div>
                      Yıldıztekin Halı Saha
                      <br />
                      Altayçeşme Mah. Birsen Sok. No:8
                      <br />
                      34843 Maltepe / İstanbul
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Yıldıztekin+Halı+Saha+Altayçeşme+Maltepe"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 self-start rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                Yol Tarifi Al <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden border border-white/10">
              <iframe
                title="Akademi Konumu"
                src="https://www.google.com/maps?q=Altayçeşme+Birsen+Sokak+No:8+Maltepe+İstanbul&output=embed"
                className="absolute inset-0 h-full w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
