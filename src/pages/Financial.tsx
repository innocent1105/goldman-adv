import { useLanguage } from "@/i18n/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";
import { PageShell } from "@/components/site/PageShell";

export default function FinancialPage() {
  const { t } = useLanguage();
  usePageTitle(t.titles.financial);

  const sectors = t.pages.financial.sectors;

  return (
    <PageShell
      eyebrow={t.pages.financial.eyebrow}
      heading={t.pages.financial.heading}
      body={t.pages.financial.body}
      cta={t.pages.financial.cta}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-muted-foreground">{t.pages.financial.sectorsEyebrow}</p>
          <ul className="mt-6 space-y-3">
            {sectors.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground group">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6 lg:col-span-7">
          {t.pages.financial.practices.map((practice) => (
            <article key={practice.title} className="group card-hover p-8 bg-white border border-border rounded-xl">
              <h2 className="text-xl font-semibold text-foreground">{practice.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{practice.body}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}