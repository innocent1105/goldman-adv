import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_LINK } from "@/site-data";
import { usePageTitle } from "@/hooks/use-page-title";

export default function AssetManagementPage() {
  const { t } = useLanguage();
  usePageTitle(t.titles.asset);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-muted-foreground">{t.pages.asset.eyebrow}</p>
            <h1 className="mt-5 rule-gold text-3xl leading-tight md:text-4xl lg:text-5xl">{t.pages.asset.heading}</h1>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {t.pages.asset.body}
            </p>

            <div className="mt-10">
              <p className="eyebrow text-muted-foreground">{t.pages.asset.classesEyebrow}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.pages.asset.classes.map((assetClass) => (
                  <Link
                    key={assetClass}
                    to={CONTACT_LINK}
                    className="group card-hover p-6 bg-white border border-border rounded-xl text-center"
                  >
                    <p className="font-display text-xl text-primary group-hover:text-gold transition-colors">{assetClass}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow text-muted-foreground">Client Types</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {t.pages.asset.clients.map((client) => (
                  <li
                    key={client}
                    className="px-4 py-2 border border-border bg-white rounded text-sm font-medium text-muted-foreground hover:border-gold hover:text-primary transition-colors"
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            <Link to={CONTACT_LINK} className="mt-10 btn-primary">
              {t.pages.asset.cta}
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}