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
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {t.pages.approach.cards.map((card, i) => (
          <article key={card.title} className="bg-background p-8 md:p-10">
            <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-4 text-xl">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
