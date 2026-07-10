import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/cerez-politikasi")({
  head: () => ({
    meta: [
      { title: "Çerez Politikası | BJK Maltepe Sahil Futbol Akademisi" },
      {
        name: "description",
        content: "BJK Maltepe Sahil Futbol Akademisi çerez politikası.",
      },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="Yasal Bilgilendirme"
      title="Çerez Politikası"
      intro="Bu politika, web sitemizde çerezlerin ve benzer teknolojilerin nasıl kullanılabileceğini açıklar."
      sections={[
        {
          title: "Çerez nedir?",
          content: (
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınızda
              saklanabilen küçük metin dosyalarıdır. Sitenin güvenli ve düzgün çalışmasına veya
              tercihlerin hatırlanmasına yardımcı olabilirler.
            </p>
          ),
        },
        {
          title: "Kullandığımız teknolojiler",
          content: (
            <p>
              Sitenin temel işlevleri için gerekli teknik veriler kullanılabilir. Ayrıca sayfalarda
              yer alan Google Haritalar ve Google Fonts gibi üçüncü taraf içerikler, sağlayıcıların
              kendi politikalarına göre çerez veya benzer teknolojiler kullanabilir. Sitemizde şu
              anda reklam amaçlı bir çerez sistemi bulunmamaktadır.
            </p>
          ),
        },
        {
          title: "Çerezleri yönetme",
          content: (
            <p>
              Çerezleri tarayıcı ayarlarınızdan görüntüleyebilir, silebilir veya
              engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi bazı sayfa ve özelliklerin
              beklendiği gibi çalışmamasına neden olabilir.
            </p>
          ),
        },
        {
          title: "Değişiklikler ve iletişim",
          content: (
            <p>
              Bu politika, kullanılan hizmetler veya yasal gereklilikler değiştiğinde
              güncellenebilir. Sorularınız için{" "}
              <Link
                to="/iletisim"
                className="text-foreground underline decoration-brand/60 underline-offset-4 hover:text-brand"
              >
                iletişim sayfamızdan
              </Link>{" "}
              bize ulaşabilirsiniz.
            </p>
          ),
        },
      ]}
    />
  );
}
