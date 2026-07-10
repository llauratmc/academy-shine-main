import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <section className="pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:tracking-[0.35em]">
            <span className="h-px w-10 bg-brand" /> {eyebrow}
          </div>
          <h1 className="heading-legal mt-6 font-display">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">Son güncelleme: 10 Temmuz 2026</p>
        </Reveal>

        <div className="mt-12 space-y-6 sm:mt-14 sm:space-y-8">
          {sections.map((section) => (
            <Reveal key={section.title}>
              <article className="rounded-2xl border border-white/10 bg-surface/50 p-6 sm:p-8">
                <h2 className="heading-subsection font-display">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {section.content}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
