import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_LINK } from "@/site-data";
import { usePageTitle } from "@/hooks/use-page-title";

export default function AssetManagementPage() {
  const { t } = useLanguage();
  usePageTitle(t.titles.asset);

  return (
    <section className="surface-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold">{t.pages.asset.eyebrow}</p>
            <h1 className="mt-5 text-3xl leading-tight md:text-4xl">{t.pages.asset.heading}</h1>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/75">
              {t.pages.asset.body}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-primary-foreground/15 sm:grid-cols-3">
              {t.pages.asset.classes.map((assetClass) => (
                <div key={assetClass} className="surface-deep px-5 py-7">
                  <p className="font-display text-xl text-gold">{assetClass}</p>
                </div>
              ))}
            </div>
            <Link
              to={CONTACT_LINK}
              className="mt-10 inline-flex bg-gold px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t.pages.asset.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
