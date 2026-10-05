import { useLanguage } from "@/i18n/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";
import { PageShell } from "@/components/site/PageShell";

export default function ApproachPage() {
  const { t } = useLanguage();
  usePageTitle(t.titles.approach);

  return (
    <PageShell
      eyebrow={t.pages.approach.eyebrow}
      heading={t.pages.approach.heading}
      body={t.pages.approach.body}
      cta={t.pages.approach.cta}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {t.pages.approach.cards.map((card, i) => (
          <article
            key={card.title}
            className="group card-hover p-8 bg-white border border-border rounded-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <span className="font-display text-xl font-medium">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-foreground">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{t.pages.approach.executionTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {t.pages.approach.execution.map((item) => (
            <article
              key={item.title}
              className="group card-hover p-8 bg-white border border-border rounded-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}