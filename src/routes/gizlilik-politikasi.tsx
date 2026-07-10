import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/gizlilik-politikasi")({
  head: () => ({
    meta: [
      { title: "Gizlilik Politikası | BJK Maltepe Sahil Futbol Akademisi" },
      {
        name: "description",
        content: "BJK Maltepe Sahil Futbol Akademisi gizlilik politikası.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Yasal Bilgilendirme"
      title="Gizlilik Politikası"
      intro="Bu politika, web sitemizi kullandığınızda paylaştığınız kişisel verilerin hangi amaçlarla işlendiğini ve haklarınızı açıklar."
      sections={[
        {
          title: "Toplanan bilgiler",
          content: (
            <p>
              İletişim ve kayıt bilgi formunda veli adı soyadı, telefon numarası, e-posta adresi,
              çocuğun yaş bilgisi, ilgilenilen program ve mesaj içeriği istenebilir. Formu
              doldurmadığınız sürece bu bilgileri vermeniz gerekmez.
            </p>
          ),
        },
        {
          title: "Verileri kullanma amacımız",
          content: (
            <p>
              Paylaştığınız bilgiler; talebinize yanıt vermek, kayıt ve program bilgisi sunmak,
              deneme antrenmanı planlamak ve sizinle iletişim kurmak amacıyla kullanılır.
              Verileriniz pazarlama amacıyla üçüncü kişilere satılmaz.
            </p>
          ),
        },
        {
          title: "Saklama ve güvenlik",
          content: (
            <p>
              Kişisel veriler yalnızca işleme amacı için gerekli süre boyunca ve yürürlükteki
              mevzuatın gerektirdiği ölçüde saklanır. Yetkisiz erişimi, kaybı veya kötüye kullanımı
              önlemek için makul teknik ve idari tedbirler uygulanır.
            </p>
          ),
        },
        {
          title: "Üçüncü taraf hizmetleri",
          content: (
            <p>
              Sitede Google Haritalar, Google Fonts ve Instagram gibi üçüncü taraf hizmetlere ait
              içerik veya bağlantılar bulunabilir. Bu hizmetlerin veri işleme uygulamaları kendi
              gizlilik politikalarına tabidir.
            </p>
          ),
        },
        {
          title: "Haklarınız ve iletişim",
          content: (
            <>
              <p>
                Kişisel verileriniz hakkında bilgi alma, düzeltme veya silme talebinde bulunma ve
                mevzuatın tanıdığı diğer hakları kullanma hakkınız vardır.
              </p>
              <p>
                Talepleriniz için{" "}
                <a
                  className="break-all text-foreground underline decoration-brand/60 underline-offset-4 hover:text-brand sm:break-normal"
                  href="mailto:info@bjkmaltepesahilfutbolokulu.com"
                >
                  info@bjkmaltepesahilfutbolokulu.com
                </a>{" "}
                adresinden veya iletişim sayfamızdaki telefonlardan bize ulaşabilirsiniz.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
