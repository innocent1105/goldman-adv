import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_LINK } from "@/site-data";
import { cn } from "@/lib/utils";

type PageShellProps = {
  eyebrow: string;
  heading: string;
  body: string;
  cta?: string;
  children?: ReactNode;
  className?: string;
};

export function PageShell({ eyebrow, heading, body, cta, children, className }: PageShellProps) {
  const { t } = useLanguage();

  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-muted-foreground">{eyebrow}</p>
          <h1 className="mt-5 rule-gold text-3xl leading-tight md:text-4xl">{heading}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{body}</p>
          {cta && (
            <Link
              to={CONTACT_LINK}
              className="mt-8 inline-flex bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {cta ?? t.nav.talk}
            </Link>
          )}
        </div>
        <div className="mt-14 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
