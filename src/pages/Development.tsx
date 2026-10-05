import { useLanguage } from "@/i18n/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";
import { PageShell } from "@/components/site/PageShell";

export default function DevelopmentPage() {
  const { t } = useLanguage();
  usePageTitle(t.titles.development);

  return (
    <PageShell
      eyebrow={t.pages.development.eyebrow}
      heading={t.pages.development.heading}
      body={t.pages.development.body}
      cta={t.pages.development.cta}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {t.pages.development.pillars.map((pillar, i) => (
          <article key={pillar.title} className="group card-hover p-8 bg-white border border-border rounded-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <span className="font-display text-xl font-medium">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-foreground">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <p className="eyebrow text-muted-foreground">{t.pages.development.heavyEyebrow}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.pages.development.heavy.map((item) => (
            <article key={item.title} className="group card-hover p-6 bg-white border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <p className="eyebrow text-muted-foreground">Key Takeaways for Advisory Services</p>
        <ol className="mt-8 space-y-6">
          {t.pages.development.takeaways.map((item, i) => (
            <li key={item} className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-accent-foreground">
                <span className="font-display text-lg font-medium">{i + 1}</span>
              </div>
              <p className="pt-2 text-sm leading-relaxed text-muted-foreground">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}