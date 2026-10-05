import { useState } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_LINK, SECTION_PATH } from "@/site-data";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

const PARENT_COMPANY_URL = "https://goldman.co.zm/";

const offices = [
  {
    name: "Head Office",
    address: "3rd Floor, Goldman House, Great East Road, Arcades, Lusaka, Zambia",
    phone: "+260 953 137869",
  },
  {
    name: "Kafue Road Office",
    address: "BUK Building, Ground Floor, Plot 20995, Lusaka",
    phone: "+260 953 137508",
  },
  {
    name: "Ndola Branch",
    address: "Mulasikwanda House, Corner of President Avenue / Kaunda Drive",
    phone: "+260 961 079 970",
  },
  {
    name: "Kitwe Branch",
    address: "Suite No. 210/211, Mukuba Pension House, Kitwe",
    phone: "+260 954 176379",
  },
  {
    name: "Livingstone Branch",
    address: "Plot 1367, Nango Kalimba House, Mosi-O-Tunya Road, Livingstone",
    phone: "+260 954 176473",
  },
  {
    name: "Solwezi Branch",
    address: "Plot 1843 Independence Avenue, Shang Building Complex, Solwezi",
    phone: "+260 969 564173",
  },
];

const practices = [
  { label: "Approach", path: SECTION_PATH.approach },
  { label: "Financial Consulting", path: SECTION_PATH.financial },
  { label: "Public Sector & PPP", path: SECTION_PATH.public },
  { label: "AI & ICT", path: SECTION_PATH.ai },
  { label: "Asset Management", path: SECTION_PATH.asset },
  { label: "Development & EPC", path: SECTION_PATH.development },
];

const company = [
  { label: "Home", path: "/" },
  { label: "Purpose & Values", path: "/#purpose" },
  { label: "The Now of Work", path: "/#now-of-work" },
  { label: "Contact", path: CONTACT_LINK },
];

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

  return (
    <footer className="surface-blue text-primary-foreground">
      <div className="mx-auto max-w-[88rem] px-6 pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-4">
            <Link to="/" aria-label="Goldman Advisors & Investors — home" className="inline-block mb-6">
              <Logo variant="footer" />
            </Link>
            <p className="eyebrow text-gold mb-4">
              Goldman Advisors &amp; Investors — Member of the Goldman Group of Companies
            </p>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-sm">{t.footer.about}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">{t.footer.tagline}</p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://facebook.com/goldman.co.zm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary-foreground hover:bg-gold hover:text-accent-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary-foreground hover:bg-gold hover:text-accent-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/50">{t.footer.langLabel}</p>
              <LanguageToggle className="mt-3 max-w-max border-primary-foreground/25 bg-transparent text-primary-foreground" />
            </div>
          </div>

          {/* Practices */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">{t.footer.expertise}</h3>
            <ul className="space-y-3">
              {practices.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">{t.footer.company}</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PARENT_COMPANY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-primary-foreground"
                >
                  {t.nav.parentCompany}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter + contact */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">{t.footer.stayInformed}</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-sm mb-6">
              {t.footer.stayInformedBody}
            </p>
            {subscribed ? (
              <p className="mb-6 max-w-xs border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
                {t.footer.subscribed}
              </p>
            ) : (
              <form onSubmit={submit} className="mb-6 flex max-w-sm gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  aria-label={t.footer.emailPlaceholder}
                  className="flex-1 input-style"
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  {t.footer.subscribe}
                </button>
              </form>
            )}

            <div className="pt-6 border-t border-primary-foreground/15">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">{t.footer.contactHeading}</h3>
              <address className="space-y-3 text-sm not-italic text-primary-foreground/70">
                <p className="font-medium text-primary-foreground">Goldman Advisors &amp; Investors</p>
                <p>{t.footer.address}</p>
                <p>
                  <a href="tel:+260953137869" className="transition-colors hover:text-gold">
                    +260 953 137869
                  </a>
                </p>
                <p>
                  <a href="mailto:advisors@goldman.africa" className="transition-colors hover:text-gold">
                    advisors@goldman.africa
                  </a>
                </p>
                <p className="mt-2">
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

        {/* Offices */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/15">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-8">Our Offices</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div key={office.name} className="bg-primary/20 border border-primary/30 rounded-lg p-5 card-hover">
                <h4 className="font-semibold text-primary-foreground">{office.name}</h4>
                <p className="mt-2 text-xs text-primary-foreground/70 leading-snug">{office.address}</p>
                <p className="mt-2 text-xs text-primary-foreground/70">
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                    {office.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/15">
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