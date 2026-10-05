import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { usePageTitle } from "@/hooks/use-page-title";

export function NotFound() {
  const { t } = useLanguage();
  usePageTitle(t.notFound.heading);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">{t.notFound.code}</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.notFound.heading}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.notFound.body}</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            {t.notFound.home}
          </Link>
        </div>
      </div>
    </div>
  );
}