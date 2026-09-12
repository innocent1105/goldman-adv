import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_LINK, SECTION_KEYS, SECTION_PATH } from "@/site-data";
import { usePageTitle } from "@/hooks/use-page-title";
import { cn } from "@/lib/utils";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import advisorsMeeting from "@/assets/advisors-meeting.jpg";

const slideImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const SLIDE_INTERVAL_MS = 6000;

export default function Home() {
  const { t } = useLanguage();
  usePageTitle(t.titles.home);

  const [index, setIndex] = useState(0);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slideImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slideImages.length) % slideImages.length);
  const next = () => setIndex((i) => (i + 1) % slideImages.length);

  return (
    <div id="top">
      {/* Hero slideshow */}
      <section className="relative isolate overflow-hidden surface-deep">
        {slideImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            width={1600}
            height={1200}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000",
              i === index && "opacity-40",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent opacity-60" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">{t.hero.eyebrow}</p>
            <h1 className="mt-6 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl md:text-6xl">
              {t.hero.headline}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              {t.hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to={CONTACT_LINK}
                className="bg-gold px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                to={SECTION_PATH.approach}
                className="border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Slide caption + controls */}
        <div className="relative border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow text-gold">{t.slides[index]?.kicker}</p>
              <p className="mt-1 max-w-md text-sm text-primary-foreground/70">
                {t.slides[index]?.tagline}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === index
                        ? "w-7 bg-gold"
                        : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/60",
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 border-l border-primary-foreground/20 pl-4">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="flex h-9 w-9 items-center justify-center border border-primary-foreground/30 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="flex h-9 w-9 items-center justify-center border border-primary-foreground/30 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-primary-foreground/10">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4">
            {t.stats.map((stat) => (
              <div key={`${stat.title}-${stat.body}`} className="py-8 md:py-10">
                <dt className="font-display text-3xl text-gold">{stat.title}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60">
                  {stat.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">{t.navItems[0]?.title}</p>
          <h2 className="mt-5 rule-gold text-3xl md:text-4xl">{t.home.whatTitle}</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.home.whatSub}</p>
        </div>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SECTION_KEYS.map((key, i) => {
            const item = t.navItems[i];
            if (!item) return null;
            return (
              <Link
                key={key}
                to={SECTION_PATH[key]}
                className="group bg-background p-8 transition-colors hover:bg-accent"
              >
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {t.home.learnMore}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Purpose & values */}
      <section id="purpose" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:py-28 lg:grid-cols-2">
          <img
            src={advisorsMeeting}
            alt="Goldman advisors working through a client strategy"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover"
          />
          <div>
            <p className="eyebrow text-muted-foreground">{t.home.purposeEyebrow}</p>
            <h2 className="mt-5 rule-gold text-3xl md:text-4xl">{t.home.purposeHeading}</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.home.purposeBody}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {t.home.values.map((value) => (
                <li
                  key={value}
                  className="border border-border bg-background px-3.5 py-2 text-xs uppercase tracking-widest text-muted-foreground"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="surface-deep">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">{t.home.contactEyebrow}</p>
            <h2 className="mt-5 text-3xl text-primary-foreground md:text-4xl">
              {t.home.contactHeading}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              {t.home.contactBody}
            </p>
          </div>
          <div>
            {contactSent ? (
              <p className="border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-gold">
                {t.home.contactSuccess}
              </p>
            ) : (
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSent(true);
                }}
                aria-label={t.home.contactEyebrow}
              >
                <input
                  required
                  placeholder={t.home.contactName}
                  aria-label={t.home.contactName}
                  className="border border-primary-foreground/20 bg-transparent px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:border-gold focus:outline-none"
                />
                <input
                  required
                  placeholder={t.home.contactOrg}
                  aria-label={t.home.contactOrg}
                  className="border border-primary-foreground/20 bg-transparent px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:border-gold focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder={t.home.contactEmail}
                  aria-label={t.home.contactEmail}
                  className="border border-primary-foreground/20 bg-transparent px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:border-gold focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder={t.home.contactMessage}
                  aria-label={t.home.contactMessage}
                  className="border border-primary-foreground/20 bg-transparent px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="justify-self-start bg-gold px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  {t.home.contactSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
