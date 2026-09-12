import { useState } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_LINK, SECTION_KEYS, SECTION_PATH } from "@/site-data";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const companyLinks = [
    { label: t.footer.companyLinks[0], to: "/" },
    { label: t.footer.companyLinks[2], to: "/#purpose" },
    { label: t.footer.companyLinks[8], to: CONTACT_LINK },
  ];

  return (
    <footer className="surface-deep text-primary-foreground">
      <div className="mx-auto max-w-[88rem] px-6 pb-10 pt-20">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              to="/"
              aria-label="Goldman Advisors & Investors — home"
              className="inline-flex rounded-sm bg-white p-3"
            >
              <Logo className="h-12" />
            </Link>
            <p className="mt-5 eyebrow text-gold">Goldman Insurance Group of Companies</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {t.footer.about}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold">{t.footer.tagline}</p>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/50">
                {t.footer.langLabel}
              </p>
              <LanguageToggle className="mt-3 max-w-max border-primary-foreground/25 bg-transparent text-primary-foreground" />
            </div>
          </div>

          {/* Expertise */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
              {t.footer.expertise}
            </h3>
            <ul className="mt-6 space-y-3">
              {SECTION_KEYS.map((key, i) => {
                const title = t.navItems[i]?.title;
                if (!title) return null;
                return (
                  <li key={key}>
                    <Link
                      to={SECTION_PATH[key]}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
              {t.footer.company}
            </h3>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay informed + contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
              {t.footer.stayInformed}
            </h3>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {t.footer.stayInformedBody}
            </p>
            {subscribed ? (
              <p className="mt-5 max-w-xs border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
                {t.footer.subscribed}
              </p>
            ) : (
              <form onSubmit={submit} className="mt-5 flex max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  aria-label={t.footer.emailPlaceholder}
                  className="w-full border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-gold px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  {t.footer.subscribe}
                </button>
              </form>
            )}

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
                {t.footer.contactHeading}
              </h3>
              <address className="mt-5 space-y-2 text-sm not-italic text-primary-foreground/70">
                <p>Goldman Advisors &amp; Investors</p>
                <p>{t.footer.address}</p>
                <p>
                  <a
                    href="mailto:advisors@goldman.africa"
                    className="transition-colors hover:text-gold"
                  >
                    advisors@goldman.africa
                  </a>
                </p>
                <p>
                  <Link
                    to={CONTACT_LINK}
                    className="inline-block border-b border-gold pb-0.5 text-gold transition-colors hover:text-primary-foreground"
                  >
                    {t.nav.talk}
                  </Link>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-primary-foreground/15 pt-6">
          <div className="flex flex-col gap-4 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Goldman Advisors &amp; Investors. {t.footer.legal}
            </p>
            <p className="text-primary-foreground/50">
              Advisory &middot; AI &amp; ICT &middot; Asset Management &middot; Development
            </p>
            <a href="#top" className="text-primary-foreground/50 transition-colors hover:text-gold">
              {t.footer.backToTop} &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
