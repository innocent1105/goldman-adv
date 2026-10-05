import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import type { NavMeta } from "@/i18n/translations";
import { CONTACT_LINK, SECTION_KEYS, SECTION_PATH } from "@/site-data";
import type { SectionKey } from "@/site-data";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

const PARENT_COMPANY_URL = "https://goldman.co.zm/";

function DropdownMenu({
  open,
  sectionKey,
  item,
  onLeave,
}: {
  open: boolean;
  sectionKey: SectionKey | null;
  item: NavMeta | undefined;
  onLeave: () => void;
}) {
  const { t } = useLanguage();

  if (!open || !sectionKey || !item) return null;

  const path = SECTION_PATH[sectionKey];

  return (
    <div
      className="absolute left-[-190px] top-full z-50 w-[min(46rem,92vw)] pt-3 animate-in fade-in-0 zoom-in-95 duration-150"
      onMouseEnter={onLeave}
      onMouseLeave={onLeave}
    >
      <div className="bg-white border border-border shadow-2xl shadow-black/10 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 border-r border-border">
            <p className="eyebrow text-muted-foreground">Goldman Advisors &amp; Investors</p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-primary">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <ul className="mt-6 space-y-3">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link to={path} className="mt-6 btn-primary" onClick={onLeave}>
              {item.cta}
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <div className="surface-blue p-8 text-primary-foreground">
            <p className="font-display text-xl leading-snug">Explore our capabilities</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              A principal investor mentality applied to transformation consulting, technology and
              development across Zambia and Africa.
            </p>
            <Link to={CONTACT_LINK} className="mt-6 btn-gold w-full justify-center" onClick={onLeave}>
              {t.nav.talk}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  const { t } = useLanguage();
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="hidden lg:flex items-center">
      <nav className="flex items-center gap-1" aria-label="Main">
        {SECTION_KEYS.map((key, index) => {
          const item = t.navItems[index];
          if (!item) return null;
          const path = SECTION_PATH[key];
          const isActive = location.pathname === path;
          const isOpen = openIndex === index;

          return (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                to={path}
                aria-expanded={isOpen}
                className={cn(
                  "relative flex items-center gap-1.5 px-4 py-3 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground hover:text-primary",
                )}
              >
                {item.title}
                <svg
                  className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m19 9-7 7-7-7" />
                </svg>
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 bg-gold" aria-hidden />
                )}
              </Link>
              <DropdownMenu
                open={isOpen}
                sectionKey={key}
                item={item}
                onLeave={() => setOpenIndex(null)}
              />
            </div>
          );
        })}
      </nav>
    </div>
  );
}

function MobileNav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {SECTION_KEYS.map((key, index) => {
                  const item = t.navItems[index];
                  if (!item) return null;
                  const path = SECTION_PATH[key];
                  const isDropdownOpen = openDropdown === item.title;

                  return (
                    <li key={key} className="border border-border rounded-lg overflow-hidden">
                      <Link
                        to={path}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                        aria-expanded={isDropdownOpen}
                      >
                        <span>{item.title}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenDropdown(isDropdownOpen ? null : item.title);
                          }}
                          aria-label={`Toggle ${item.title} submenu`}
                          className="ml-2 inline-flex h-6 w-6 items-center justify-center text-muted-foreground"
                        >
                          <svg
                            className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                          </svg>
                        </button>
                      </Link>
                      {isDropdownOpen && (
                        <ul className="bg-accent/50 border-t border-border px-4 pb-4 space-y-2">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>
                              <Link
                                to={path}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                <svg className="h-3.5 w-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                                {bullet}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 space-y-3 pt-6 border-t border-border">
              <a
                href={PARENT_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border border-border bg-white px-5 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t.nav.parentCompany}
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <div className="flex items-center gap-3">
                <LanguageToggle />
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="p-2 w-full h-auto bg-[#a3762f]">
        <div className=" px-10 text-sm text-white">Goldman Advisors & Investors — Member of the Goldman Group of Companies</div>
      </div>
      <div className="mx-auto flex h-18 max-w-[88rem] items-center justify-between gap-6 px-6">
        <Link
          to="/"
          aria-label="Goldman Advisors & Investors — home"
          className="group flex shrink-0 items-center"
        >
          <Logo className="h-12 w-34 transition-transform group-hover:scale-[1.02]" />
        </Link>

        <div className="flex items-center gap-6">
          <DesktopNav />
          <MobileNav />
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle />
            <a
              href={PARENT_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {t.nav.parentCompany}
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
           
          </div>
        </div>
      </div>
    </header>
  );
}