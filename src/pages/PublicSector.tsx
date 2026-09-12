import { useLanguage } from "@/i18n/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";
import { PageShell } from "@/components/site/PageShell";

export default function PublicSectorPage() {
  const { t } = useLanguage();
  usePageTitle(t.titles.public);

  return (
    <PageShell
      eyebrow={t.pages.public.eyebrow}
      heading={t.pages.public.heading}
      body={t.pages.public.body}
      cta={t.pages.public.cta}
      className="bg-secondary"
    >
      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {t.pages.public.items.map((item) => (
          <article key={item.title} className="bg-secondary p-7">
            <h2 className="text-lg">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
