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
      <div className="grid gap-6 sm:grid-cols-2">
        {t.pages.ai.framework.map((item) => (
          <article key={item.title} className="group card-hover border border-border bg-white rounded-xl p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-foreground">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-12 border-t border-border">
        <p className="eyebrow text-muted-foreground">Strategic Priorities</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {t.pages.ai.priorities.map((item) => (
            <article key={item.title} className="group card-hover border border-border bg-white rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-border">
        <p className="eyebrow text-muted-foreground">Operational Playbook</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {t.pages.ai.playbook.map((item) => (
            <article key={item.title} className="group card-hover border border-border bg-white rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-border">
        <p className="eyebrow text-muted-foreground">{t.pages.ai.matrixEyebrow}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.pages.ai.matrix.map((item) => (
            <div key={item.title} className="group card-hover border-l-4 border-gold pl-6 bg-white/50 rounded-r-xl p-4">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-12 border-t border-border">
        <p className="eyebrow text-muted-foreground">{t.pages.ai.focusEyebrow}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.pages.ai.focus.map((item) => (
            <div key={item.title} className="group card-hover border-l-4 border-gold pl-6 bg-white/50 rounded-r-xl p-4">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}