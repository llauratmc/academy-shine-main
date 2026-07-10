import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight, Instagram } from "lucide-react";
import logoUrl from "../assets/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/maltepebesiktasfutbolokulu/";

const links = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/galeri", label: "Galeri" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 transition-all duration-500 ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative grid place-items-center h-11 w-11 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden group-hover:ring-brand/60 transition">
              <img
                src={logoUrl}
                alt="BJK Maltepe Sahil Futbol Akademisi"
                className="h-9 w-9 object-contain"
              />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm tracking-widest">BJK MALTEPE SAHİL</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Futbol Akademisi
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm tracking-wide text-foreground/80 hover:text-foreground transition"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-px bg-brand"
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram: @maltepebesiktasfutbolokulu"
              className="grid place-items-center h-10 w-10 rounded-full border border-white/10 text-foreground/80 hover:text-brand hover:border-brand/60 transition"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <Link
              to="/iletisim"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground hover:bg-brand/90 transition"
            >
              Kayıt Bilgisi Al
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>
          </div>

          <button
            className="lg:hidden grid place-items-center h-11 w-11 rounded-full border border-white/10 text-foreground"
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ clipPath: "circle(0% at 90% 5%)" }}
              animate={{ clipPath: "circle(150% at 90% 5%)" }}
              exit={{ clipPath: "circle(0% at 90% 5%)" }}
              transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
              className="absolute inset-0 bg-background grain"
            />
            <div className="relative flex h-full min-h-0 flex-col overflow-y-auto">
              <div className="flex items-center justify-between px-6 h-20">
                <span className="font-display text-sm tracking-widest">BJK MALTEPE SAHİL</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid place-items-center h-11 w-11 rounded-full border border-white/10"
                  aria-label="Menüyü kapat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col justify-center gap-1 px-6 py-4 sm:gap-2 sm:px-8">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-2.5 font-display text-4xl transition hover:text-brand min-[390px]:text-5xl sm:py-3 sm:text-6xl"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-3 p-6 sm:space-y-4 sm:p-8">
                <Link
                  to="/iletisim"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-full bg-brand px-6 py-4 text-brand-foreground"
                >
                  <span className="font-medium">Kayıt Bilgisi Al</span>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram: @maltepebesiktasfutbolokulu"
                  className="flex items-center justify-between rounded-full border border-white/15 px-6 py-4 text-foreground/90 hover:text-brand hover:border-brand/60 transition"
                >
                  <span className="min-w-0 text-xs font-medium sm:text-sm">
                    @maltepebesiktasfutbolokulu
                  </span>
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
