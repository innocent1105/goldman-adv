import { useLanguage } from "@/i18n/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";
import { PageShell } from "@/components/site/PageShell";

export default function AIICTPage() {
  const { t } = useLanguage();
  usePageTitle(t.titles.ai);

  return (
    <PageShell
      eyebrow={t.pages.ai.eyebrow}
      heading={t.pages.ai.heading}
      body={t.pages.ai.body}
      cta={t.pages.ai.cta}
    >
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {t.pages.ai.priorities.map((item) => (
          <article key={item.title} className="border-t border-border pt-6">
            <h2 className="text-lg">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <p className="eyebrow text-muted-foreground">{t.pages.ai.matrixEyebrow}</p>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {t.pages.ai.matrix.map((item) => (
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
