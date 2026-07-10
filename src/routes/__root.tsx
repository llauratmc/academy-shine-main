import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="heading-code font-display text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sayfa Bulunamadı</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground hover:bg-brand/90"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="heading-subsection font-display">Bir Sorun Oluştu</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sayfa yüklenirken beklenmedik bir hata meydana geldi.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-brand px-5 py-2.5 text-sm text-brand-foreground hover:bg-brand/90"
          >
            Tekrar Dene
          </button>
          <a
            href="/"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:bg-white/5"
          >
            Ana Sayfa
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BJK Maltepe Sahil Futbol Akademisi | Maltepe Futbol Okulu" },
      {
        name: "description",
        content:
          "24 yılı aşkın tecrübeyle Maltepe'de kız ve erkek çocuklarına profesyonel futbol eğitimi. Yaş gruplarına özel antrenmanlar, uzman antrenörler, güvenli saha.",
      },
      { name: "author", content: "BJK Maltepe Sahil Futbol Akademisi" },
      { property: "og:title", content: "BJK Maltepe Sahil Futbol Akademisi" },
      {
        property: "og:description",
        content:
          "Geleceğin şampiyonlarını Maltepe'de yetiştiriyoruz. Yaş gruplarına özel profesyonel futbol eğitimi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
