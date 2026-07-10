import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, ArrowUpRight } from "lucide-react";
import logoUrl from "../assets/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/maltepebesiktasfutbolokulu/";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-background sm:mt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <img
                  src={logoUrl}
                  alt="BJK Maltepe Sahil Futbol Akademisi"
                  className="h-10 w-10 object-contain"
                />
              </span>
              <div className="font-display tracking-widest text-sm">
                BJK MALTEPE SAHİL
                <div className="text-[10px] text-muted-foreground tracking-[0.35em]">
                  Futbol Akademisi
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              24 yılı aşkın tecrübemizle Maltepe'de kız ve erkek çocuklarına yaş gruplarına özel,
              disiplinli ve keyifli bir futbol eğitimi sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Menü</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Ana Sayfa" },
                { to: "/hakkimizda", label: "Hakkımızda" },
                { to: "/galeri", label: "Galeri" },
                { to: "/iletisim", label: "İletişim" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-flex items-center gap-1 hover:text-brand transition"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+905412778497"
                  className="flex items-start gap-2 hover:text-brand transition"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>+90 541 277 84 97</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+905414131483"
                  className="flex items-start gap-2 hover:text-brand transition"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>+90 541 413 14 83</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Yıldıztekin Halı Saha, Altayçeşme Mah.
                  <br />
                  Birsen Sok. No:8, 34843 Maltepe / İstanbul
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
              Bizi Takip Edin
            </h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram'da bizi takip edin"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-brand hover:text-brand transition"
            >
              <Instagram className="h-4 w-4" />
              @maltepebesiktasfutbolokulu
            </a>

            <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
              Antrenman anları, turnuva görüntüleri ve akademi haberleri için bizi sosyal medyada
              takip edin.
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BJK Maltepe Sahil Futbol Akademisi. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <Link to="/gizlilik-politikasi" className="hover:text-foreground transition">
              Gizlilik Politikası
            </Link>
            <Link to="/cerez-politikasi" className="hover:text-foreground transition">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
    </footer>
  );
}
