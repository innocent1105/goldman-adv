import { useEffect, useState, useCallback } from "react";
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
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((i: number) => setIndex(i), []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slideImages.length) % slideImages.length);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slideImages.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!isPaused) {
        setIndex((i) => (i + 1) % slideImages.length);
      }
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused]);

  return (
    <div id="top" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Hero slider */}
      <section className="relative isolate overflow-hidden surface-blue-light" aria-label="Hero slider">
        <div className="absolute inset-0" aria-hidden>
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
                i === index && "opacity-30",
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">{t.hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl leading-[1.1] text-primary-foreground sm:text-5xl md:text-6xl font-semibold">
              {t.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">{t.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={CONTACT_LINK} className="btn-gold">
                {t.hero.ctaPrimary}
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                to={SECTION_PATH.approach}
                className="inline-flex items-center justify-center border-2 border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.stats.map((stat) => (
              <div
                key={`${stat.title}-${stat.body}`}
                className="p-4 border border-primary/20 rounded-lg bg-primary/10 text-center"
              >
                <dt className="font-display text-3xl md:text-4xl text-gold">{stat.title}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/70">{stat.body}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-primary/20">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
            <div className="min-w-0 flex-1">
              <p className="eyebrow text-gold">{t.slides[index]?.kicker}</p>
              <p className="mt-1 max-w-md text-sm text-primary-foreground/70">{t.slides[index]?.tagline}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    aria-selected={i === index}
                    role="tab"
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === index ? "w-8 bg-gold" : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/60",
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 border-l border-primary/20 pl-4">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="flex h-10 w-10 items-center justify-center border border-primary/30 text-primary-foreground transition-colors hover:border-gold hover:text-gold hover:bg-primary/10 rounded-lg"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="flex h-10 w-10 items-center justify-center border border-primary/30 text-primary-foreground transition-colors hover:border-gold hover:text-gold hover:bg-primary/10 rounded-lg"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow text-muted-foreground">{t.home.introTitle}</p>
            <h2 className="mt-4 rule-gold text-3xl md:text-4xl">{t.home.whatTitle}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.home.introBody}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="surface-blue rounded-xl p-8 text-primary-foreground">
              <p className="font-display text-xl leading-snug">{t.home.nowOfWorkHeading}</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{t.home.nowOfWorkBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">{t.home.whatTitle}</p>
            <h2 className="mt-4 rule-gold text-3xl md:text-4xl">{t.home.whatSub}</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTION_KEYS.map((key, i) => {
              const item = t.navItems[i];
              if (!item) return null;
              return (
                <Link
                  key={key}
                  to={SECTION_PATH[key]}
                  className="group card-hover p-8 bg-white border border-border rounded-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary font-display text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    {t.home.learnMore}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Purpose & values */}
      <section id="purpose" className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src={advisorsMeeting}
              alt="Goldman advisors working with clients"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">{t.home.purposeEyebrow}</p>
            <h2 className="mt-4 rule-gold text-3xl md:text-4xl">{t.home.purposeHeading}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.home.purposeBody}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{t.home.valuesIntro}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {t.home.values.map((value) => (
                <li
                  key={value}
                  className="border border-border bg-white px-4 py-2 text-sm font-medium text-muted-foreground hover:border-gold hover:text-primary transition-colors rounded"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Now of work */}
      <section id="now-of-work" className="surface-blue">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">{t.home.nowOfWorkEyebrow}</p>
            <h2 className="mt-4 text-3xl md:text-4xl text-primary-foreground">{t.home.nowOfWorkHeading}</h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">{t.home.nowOfWorkBody}</p>
          </div>
          <div className="mt-12 border-l-4 border-gold bg-primary/20 rounded-r-xl p-6">
            <p className="eyebrow text-gold">Now of Work takeaway</p>
            <p className="mt-3 text-base leading-relaxed text-primary-foreground/85">{t.home.nowOfWorkTakeaway}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="surface-blue-light">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">{t.home.contactEyebrow}</p>
            <h2 className="mt-4 text-3xl md:text-4xl text-primary-foreground">{t.home.contactHeading}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/80">{t.home.contactBody}</p>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Lusaka, Zambia</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:advisors@goldman.africa" className="hover:text-gold transition-colors">
                  advisors@goldman.africa
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+260953137869" className="hover:text-gold transition-colors">
                  +260 953 137869
                </a>
              </div>
            </div>
          </div>
          <div>
            {contactSent ? (
              <div className="border border-gold/40 bg-gold/10 px-6 py-8 rounded-lg text-center">
                <svg className="mx-auto h-12 w-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="mt-4 text-gold">{t.home.contactSuccess}</p>
                <button onClick={() => setContactSent(false)} className="mt-4 text-sm text-gold underline hover:no-underline">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                className="grid gap-4 bg-primary/20 border border-primary/30 rounded-xl p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSent(true);
                }}
                aria-label={t.home.contactEyebrow}
              >
                <input required placeholder={t.home.contactName} aria-label={t.home.contactName} className="input-style" />
                <input required placeholder={t.home.contactOrg} aria-label={t.home.contactOrg} className="input-style" />
                <input required type="email" placeholder={t.home.contactEmail} aria-label={t.home.contactEmail} className="input-style" />
                <textarea rows={4} placeholder={t.home.contactMessage} aria-label={t.home.contactMessage} className="input-style resize-none" />
                <button type="submit" className="btn-gold justify-self-start">
                  {t.home.contactSubmit}
                  <span aria-hidden>&rarr;</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}