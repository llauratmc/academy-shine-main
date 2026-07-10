import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Phone, MapPin, Instagram, MessageCircle, Send, Check } from "lucide-react";
import { useState } from "react";

import { Reveal } from "../components/Reveal";
import contactHeader from "../assets/headers/contact-hero.webp";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | BJK Maltepe Sahil Futbol Akademisi" },
      {
        name: "description",
        content:
          "Akademimize ulaşın, kayıt ve program bilgisi alın. Yıldıztekin Halı Saha, Altayçeşme, Maltepe / İstanbul.",
      },
      { property: "og:title", content: "İletişim | BJK Maltepe Sahil Futbol Akademisi" },
      { property: "og:description", content: "Kayıt bilgisi almak için bize ulaşın." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  parentName: z.string().min(2, "Lütfen adınızı ve soyadınızı yazın."),
  phone: z.string().min(10, "Geçerli bir telefon numarası girin."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  childAge: z.string().min(1, "Çocuğunuzun yaşını seçin."),
  program: z.string().min(1, "Bir program seçin."),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır."),
});

type FormValues = z.infer<typeof schema>;

const WHATSAPP_NUMBER = "905412778497";

function Contact() {
  const [sent, setSent] = useState(false);
  const [whatsAppError, setWhatsAppError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const message = `Merhaba, BJK Maltepe Sahil Futbol Okulu hakkında bilgi almak istiyorum.

Veli Adı Soyadı: ${data.parentName}
Telefon: ${data.phone}
E-posta: ${data.email}
Öğrencinin Yaşı: ${data.childAge}
İlgilenilen Program: ${data.program}

Mesaj:
${data.message}`;
    const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setSent(false);
    setWhatsAppError(false);

    const whatsAppWindow = window.open(whatsAppUrl, "_blank");
    if (!whatsAppWindow) {
      setWhatsAppError(true);
      return;
    }

    whatsAppWindow.opener = null;
    setSent(true);
  };

  return (
    <>
      <section className="relative flex min-h-[72svh] items-end overflow-hidden pb-20 pt-40">
        <img
          src={contactHeader}
          alt="Gün batımında antrenörüyle konuşan genç futbolcular"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-center"
          width={1672}
          height={941}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
              <span className="h-px w-10 bg-brand" /> İletişim
            </div>
            <h1 className="heading-hero-internal mt-6 max-w-6xl font-display">
              Bize Ulaşın, <span className="text-brand">Cevap</span> Aynı Gün Sizde.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Kayıt, deneme antrenmanı veya programlarımız hakkında merak ettiklerinizi bize iletin.
              Ekibimiz size en kısa sürede dönüş yapar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 pt-16 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Info */}
          <Reveal>
            <div className="space-y-4">
              {[
                {
                  Icon: Phone,
                  t: "Telefon",
                  lines: [
                    { href: "tel:+905412778497", v: "+90 541 277 84 97" },
                    { href: "tel:+905414131483", v: "+90 541 413 14 83" },
                  ],
                },
                {
                  Icon: MessageCircle,
                  t: "WhatsApp",
                  lines: [{ href: "https://wa.me/905412778497", v: "Mesaj gönderin" }],
                },
                {
                  Icon: MapPin,
                  t: "Adres",
                  lines: [
                    {
                      v: "Yıldıztekin Halı Saha, Altayçeşme Mah. Birsen Sok. No:8, 34843 Maltepe / İstanbul",
                    },
                  ],
                },
                {
                  Icon: Instagram,
                  t: "Instagram",
                  lines: [
                    {
                      href: "https://www.instagram.com/maltepebesiktasfutbolokulu/",
                      v: "@maltepebesiktasfutbolokulu",
                    },
                  ],
                },
              ].map(({ Icon, t, lines }) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-surface/70 p-6 flex gap-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {t}
                    </div>
                    <div className="mt-1 space-y-1">
                      {lines.map((l, i) =>
                        "href" in l ? (
                          <a
                            key={i}
                            href={l.href}
                            className="block text-sm hover:text-brand transition break-words"
                          >
                            {l.v}
                          </a>
                        ) : (
                          <div key={i} className="text-sm text-muted-foreground break-words">
                            {l.v}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative rounded-3xl border border-white/10 bg-surface-2/60 p-8 sm:p-10 grain"
            >
              <h2 className="heading-subsection font-display" style={{ textTransform: "none" }}>
                Kayıt Bilgi Formu
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Formu doldurun, size en uygun programı birlikte belirleyelim.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Veli Adı Soyadı" error={errors.parentName?.message}>
                  <input
                    {...register("parentName")}
                    placeholder="Adınız Soyadınız"
                    className={inputCls}
                  />
                </Field>
                <Field label="Telefon" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    placeholder="0 (5xx) xxx xx xx"
                    className={inputCls}
                  />
                </Field>
                <Field label="E-Posta" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    placeholder="ornek@eposta.com"
                    className={inputCls}
                  />
                </Field>
                <Field label="Çocuğun Yaşı" error={errors.childAge?.message}>
                  <select {...register("childAge")} className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {["5-6", "7-8", "9-10", "11-12", "13-14", "15-16"].map((a) => (
                      <option key={a} value={a}>
                        {a} yaş
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Program" error={errors.program?.message}>
                    <select {...register("program")} className={inputCls} defaultValue="">
                      <option value="" disabled>
                        Program seçiniz
                      </option>
                      <option>Minikler (5-6 yaş)</option>
                      <option>Minikler (7-8 yaş)</option>
                      <option>Küçükler (9-10 yaş)</option>
                      <option>Yıldızlar (11-12 yaş)</option>
                      <option>Gençler (13-14 yaş)</option>
                      <option>Ümitler (15-16 yaş)</option>
                      <option>Kız Futbol Grubu</option>
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Mesajınız" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Sormak istediklerinizi buraya yazabilirsiniz."
                      className={`${inputCls} resize-none`}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-muted-foreground max-w-sm">
                  Formu göndererek bilgilerinizin akademimiz tarafından iletişim amacıyla
                  saklanmasını kabul etmiş olursunuz.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-brand-foreground hover:bg-brand/90 disabled:opacity-60 transition"
                >
                  {isSubmitting ? (
                    "Gönderiliyor..."
                  ) : (
                    <>
                      Bilgi Talebi Gönder <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-3 rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 text-sm"
                >
                  <Check className="h-4 w-4 text-brand" />
                  WhatsApp açıldı. Mesajınızı gözden geçirip gönderebilirsiniz.
                </motion.div>
              )}

              {whatsAppError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 text-sm"
                >
                  WhatsApp açılamadı. Lütfen açılır pencere izni verin veya +90 541 277 84 97
                  numarasından bize ulaşın.
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 sm:aspect-[16/7]">
              <iframe
                title="Akademi Konumu"
                src="https://www.google.com/maps?q=Altayçeşme+Birsen+Sokak+No:8+Maltepe+İstanbul&output=embed"
                className="h-full w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-brand">{error}</span>}
    </label>
  );
}
