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
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-muted-foreground">{t.pages.financial.sectorsEyebrow}</p>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-muted-foreground sm:grid-cols-1">
            {sectors.map((s) => (
              <li key={s} className="border-l-2 border-gold pl-3">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-px self-start bg-border lg:col-span-7">
          {t.pages.financial.practices.map((practice) => (
            <article key={practice.title} className="bg-background p-8 md:p-10">
              <h2 className="text-xl">{practice.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{practice.body}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
