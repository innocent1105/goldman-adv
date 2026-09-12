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
      <div className="grid gap-px bg-border lg:grid-cols-3">
        {t.pages.development.pillars.map((pillar, i) => (
          <article key={pillar.title} className="bg-background p-8 md:p-10">
            <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-4 text-xl">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <p className="eyebrow text-muted-foreground">{t.pages.development.heavyEyebrow}</p>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {t.pages.development.heavy.map((item) => (
            <div key={item.title} className="border-l-2 border-gold pl-5">
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
