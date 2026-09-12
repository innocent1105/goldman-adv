import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_LINK, SECTION_KEYS, SECTION_PATH } from "@/site-data";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 8.5 3.5 3.5L13 4" />
    </svg>
  );
}

function DesktopNav({ activePath }: { activePath: string }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="relative hidden items-center lg:flex" onMouseLeave={() => setOpen(null)}>
      <nav className="flex items-center gap-7">
        {SECTION_KEYS.map((key, i) => {
          const item = t.navItems[i];
          if (!item) return null;
          const path = SECTION_PATH[key];
          const isActive = activePath === path || (path === "/approach" && activePath === "/");
          return (
            <div key={key} onMouseEnter={() => setOpen(i)}>
              <NavLink
                to={path}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.title}
              </NavLink>
            </div>
          );
        })}
      </nav>

      {open !== null && (
        <div
          className="absolute left-1/2 top-full z-50 w-[min(74rem,94vw)] -translate-x-1/2 pt-5"
          onMouseEnter={() => setOpen(open)}
        >
          {SECTION_KEYS.map((key, i) => {
            const item = t.navItems[i];
            if (!item) return null;
            const path = SECTION_PATH[key];
            return (
              <div
                key={key}
                className={cn(
                  "grid gap-10 border border-border bg-background p-9 shadow-2xl shadow-black/20 md:grid-cols-12",
                  open === i ? "animate-in fade-in-0 zoom-in-95 duration-150" : "hidden",
                )}
              >
                <div className="md:col-span-5">
                  <p className="eyebrow text-muted-foreground">Goldman Advisors &amp; Investors</p>
                  <h2 className="mt-4 font-display text-3xl leading-tight">{item.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <Link
                    to={path}
                    className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {item.cta}
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
                <div className="md:col-span-4">
                  <p className="eyebrow text-muted-foreground">{t.footer.expertise}</p>
                  <ul className="mt-5 space-y-4">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="surface-deep flex flex-col justify-between gap-6 p-6 text-primary-foreground md:col-span-3">
                  <div>
                    <p className="font-display text-2xl leading-snug">{t.hero.primaryCta}</p>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                      {t.home.contactBody}
                    </p>
                  </div>
                  <Link
                    to={CONTACT_LINK}
                    className="bg-gold px-5 py-2.5 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    {t.nav.talk}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MobileNav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden
        >
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-b border-border bg-background shadow-2xl shadow-black/20 lg:hidden">
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6">
            <ul className="space-y-2">
              {SECTION_KEYS.map((key, i) => {
                const item = t.navItems[i];
                if (!item) return null;
                const path = SECTION_PATH[key];
                return (
                  <li key={key}>
                    <Link
                      to={path}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {item.title}
                      <span aria-hidden className="text-gold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex items-center justify-between gap-4">
              <LanguageToggle />
              <Link
                to={CONTACT_LINK}
                onClick={() => setOpen(false)}
                className="flex-1 bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                {t.nav.talk}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between gap-6 px-6">
        <Link
          to="/"
          aria-label="Goldman Advisors & Investors — home"
          className="group flex shrink-0 items-center"
        >
          <Logo className="h-12 transition-transform group-hover:scale-[1.03]" />
        </Link>

        <div className="flex items-center gap-4">
          <DesktopNav activePath={pathname} />
          <MobileNav />
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle />
            <Link
              to={CONTACT_LINK}
              className="border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t.nav.talk}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
