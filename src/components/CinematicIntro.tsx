import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function CinematicIntro() {
  const [show, setShow] = useState(false);
  const [impact, setImpact] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bjk_intro_played")) return;
    setShow(true);
    sessionStorage.setItem("bjk_intro_played", "1");
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setImpact(true), reduced ? 200 : 1500);
    const t2 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, reduced ? 600 : 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  const skip = () => {
    setShow(false);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[999] bg-black overflow-hidden"
        >
          {/* Stadium glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: impact ? 0 : 0.5 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.25 0.02 260) 0%, transparent 55%)",
            }}
          />

          {/* Flash on impact */}
          <AnimatePresence>
            {impact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white"
              />
            )}
          </AnimatePresence>

          {/* Break-away panels after impact */}
          <AnimatePresence>
            {impact && (
              <>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1], delay: 0.15 }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-black"
                />
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1], delay: 0.15 }}
                  className="absolute inset-y-0 right-0 w-1/2 bg-black"
                />
              </>
            )}
          </AnimatePresence>

          {/* The ball */}
          {!reduced && !impact && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="intro-ball">
                <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  <defs>
                    <radialGradient id="ball" cx="35%" cy="35%">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="70%" stopColor="#d4d4d4" />
                      <stop offset="100%" stopColor="#111" />
                    </radialGradient>
                  </defs>
                  <circle cx="40" cy="40" r="38" fill="url(#ball)" />
                  <polygon points="40,20 52,28 48,42 32,42 28,28" fill="#111" opacity="0.9" />
                  <polygon points="40,60 52,52 56,66 40,72 24,66 28,52" fill="#111" opacity="0.6" />
                </svg>
              </div>
            </div>
          )}

          {/* Particles */}
          <AnimatePresence>
            {impact && !reduced && (
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i / 24) * Math.PI * 2;
                  const dist = 200 + Math.random() * 300;
                  return (
                    <motion.span
                      key={i}
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{
                        x: Math.cos(angle) * dist,
                        y: Math.sin(angle) * dist,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute h-1.5 w-1.5 rounded-full bg-white/70"
                    />
                  );
                })}
              </div>
            )}
          </AnimatePresence>

          <button
            onClick={skip}
            className="absolute bottom-6 right-6 text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition"
          >
            Girişi Atla →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
