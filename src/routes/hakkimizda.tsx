import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Compass, Eye, Heart, Users, ShieldCheck, Zap } from "lucide-react";

import { photos } from "../lib/photos";
import aboutHeader from "../assets/headers/about-hero.webp";
const philosophyImg = photos.philosophy;
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | BJK Maltepe Sahil Futbol Akademisi" },
      {
        name: "description",
        content:
          "24 yılı aşkın deneyimimizle Maltepe'de futbol eğitimine yön veriyoruz. Hikayemiz, misyonumuz, vizyonumuz ve değerlerimiz.",
      },
      { property: "og:title", content: "Hakkımızda | BJK Maltepe Sahil Futbol Akademisi" },
      { property: "og:description", content: "Akademimizin hikayesi, misyonu ve değerleri." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[80svh] w-full overflow-hidden">
        <img
          src={aboutHeader}
          alt="Antrenörüyle eğitim yapan genç futbolcular"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-center"
          width={1672}
          height={941}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 h-full flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-white/70 flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-brand" /> Hakkımızda
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="heading-hero-internal max-w-5xl font-display"
          >
            Sahanın <span className="text-brand">Kalbinde</span> Yirmi Dört Yıl.
          </motion.h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.6fr] gap-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3 lg:sticky lg:top-32">
              <span className="h-px w-10 bg-brand" /> Hikayemiz
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-section font-display">
              Küçük Bir Sahada Başlayan Büyük Bir Tutku.
            </h2>
            <div className="mt-10 space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                BJK Maltepe Sahil Futbol Akademisi, 24 yılı aşkın bir süredir Maltepe ve çevresinde
                yaşayan çocukları futbolla buluşturuyor. Küçük bir grup çocuk ve büyük bir hayalle
                başlayan yolculuğumuz, bugün binlerce sporcunun geçtiği bir eğitim yuvasına dönüştü.
              </p>
              <p>
                Yıllar içinde antrenman metodolojimizi geliştirdik, kadromuzu güçlendirdik ve pek
                çok sporcumuzun profesyonel kulüplere transferine tanıklık ettik. Ancak bizim için
                en büyük başarı; ailelerin akademiye duyduğu güvendir.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-24 sm:py-32 bg-surface/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {[
              {
                Icon: Compass,
                t: "Misyonumuz",
                d: "Her çocuğa futbolun disiplinini, keyfini ve teknik inceliklerini yaş grubuna uygun, bilimsel bir eğitim modeliyle aktarmak.",
              },
              {
                Icon: Eye,
                t: "Vizyonumuz",
                d: "Türkiye'nin en güvenilir çocuk futbol akademisi olmak; sporcularımızı hem sahada hem yaşamda güçlü bireyler olarak yetiştirmek.",
              },
              {
                Icon: Heart,
                t: "Değerlerimiz",
                d: "Saygı, disiplin, adalet ve şeffaflık. Her sporcuya eşit imkân, her aileye açık iletişim.",
              },
            ].map(({ Icon, t, d }) => (
              <StaggerItem key={t}>
                <div className="elevate rounded-2xl border border-white/10 bg-surface-2/60 p-10 h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand/15 text-brand ring-1 ring-brand/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="heading-subsection mt-6 font-display"
                    style={{ textTransform: "none" }}
                  >
                    {t}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TRAINING MODEL */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
              <span className="h-px w-10 bg-brand" /> Eğitim Modeli
            </div>
            <h2 className="heading-section mt-6 font-display">
              Bilim, Sabır ve Tutkuyla Şekillenen Bir Program.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Antrenman programlarımız; UEFA ve TFF metodolojisiyle uyumlu, çocuğun bilişsel ve
              fiziksel gelişimine göre modüler biçimde tasarlanır. Her modül, ölçülebilir bir hedefe
              odaklanır ve aile ile paylaşılan raporlarla takip edilir.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                {
                  Icon: Users,
                  t: "Küçük Gruplar",
                  d: "Sporcu başına daha fazla dokunuş ve bireysel geri bildirim.",
                },
                {
                  Icon: ShieldCheck,
                  t: "Güvenli Ortam",
                  d: "Kontrollü ekipman, sağlık takibi ve saha güvenlik protokolleri.",
                },
                {
                  Icon: Zap,
                  t: "Ölçülebilir Gelişim",
                  d: "Dönemsel testler ve performans değerlendirmeleri.",
                },
              ].map(({ Icon, t, d }) => (
                <li key={t} className="flex gap-4 border-b border-white/10 pb-4">
                  <div className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-brand/15 text-brand shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={philosophyImg}
                alt="Antrenman felsefesi"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* COACHES */}
      <section className="py-24 sm:py-32 bg-surface/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
              <span className="h-px w-10 bg-brand" /> Kadro
            </div>
            <h2 className="heading-section mt-6 max-w-3xl font-display">
              Deneyimli Antrenör Kadromuz.
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              Lisanslı, alanında yetkin ve çocuk pedagojisine hakim antrenörlerden oluşan kadromuz,
              sporcularımızın hem teknik hem karakter gelişimine liderlik eder.
            </p>
          </Reveal>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Berke Kaçar", role: "Antrenör" },
              { name: "Büşra Ahlakçı", role: "Antrenör" },
              { name: "Ali Çankaya", role: "Antrenör" },
              { name: "Taner Acar", role: "Antrenör" },
              { name: "Kaan Tomaç", role: "Antrenör" },
            ].map((c) => {
              const initials = c.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);
              return (
                <StaggerItem key={c.name}>
                  <div className="group elevate rounded-2xl border border-white/10 bg-surface-2/70 overflow-hidden h-full">
                    <div className="aspect-[4/3] relative bg-gradient-to-br from-black via-surface-2 to-surface grid place-items-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 30%, var(--brand), transparent 65%)",
                        }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_60%,rgba(0,0,0,0.6)_100%)]" />
                      <span className="relative font-display text-7xl sm:text-8xl tracking-tight text-white/90">
                        {initials}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-brand">
                        {c.role}
                      </div>
                      <div
                        className="heading-subsection mt-2 font-display"
                        style={{ textTransform: "none" }}
                      >
                        {c.name}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal>
            <div className="mt-24 text-xs uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
              <span className="h-px w-10 bg-brand" /> İdari Ekip
            </div>
            <h3 className="heading-subsection mt-6 max-w-3xl font-display">İdari Ekibimiz.</h3>
          </Reveal>

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{ name: "Çiğdem Tomaç", role: "İdari İşler Yetkilisi" }].map((c) => {
              const initials = c.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);
              return (
                <StaggerItem key={c.name}>
                  <div className="group elevate rounded-2xl border border-white/10 bg-surface-2/70 overflow-hidden h-full">
                    <div className="aspect-[4/3] relative bg-gradient-to-br from-black via-surface-2 to-surface grid place-items-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 30%, var(--brand), transparent 65%)",
                        }}
                      />
                      <span className="relative font-display text-7xl sm:text-8xl tracking-tight text-white/90">
                        {initials}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-brand">
                        {c.role}
                      </div>
                      <div
                        className="heading-subsection mt-2 font-display"
                        style={{ textTransform: "none" }}
                      >
                        {c.name}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
