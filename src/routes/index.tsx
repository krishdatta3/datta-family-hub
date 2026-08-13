import { createFileRoute, Link } from "@tanstack/react-router";
import { businesses } from "@/data/business";
import { useI18n } from "@/i18n/LanguageProvider";
import { BusinessSection } from "@/components/site/BusinessSection";
import { MapSection } from "@/components/site/MapSection";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero.jpg";
import { Phone, MessageCircle, ShieldCheck, Clock, MapPin, Star } from "lucide-react";

const title = "दत्ता कुटुंब व्यवसाय समूह, जारावंडी | CSC व टेलरिंग";
const description =
  "जारावंडी, ता. एटापल्ली येथे CSC ऑनलाइन सेवा, बांगड्या व लेडीज अ‍ॅक्सेसरीज, स्वस्त व दर्जेदार चप्पल-जोडे आणि टेलरिंग-विणकाम सेवा — एकाच कुटुंबाच्या विश्वासाने.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "CSC केंद्र जारावंडी, ऑनलाइन फॉर्म एटापल्ली, बांगडी दुकान गडचिरोली, चप्पल दुकान जारावंडी, टेलरिंग शॉप एटापल्ली, दत्ता सर्व्हिसेस",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://datta-family-hub.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://datta-family-hub.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "दत्ता कुटुंब व्यवसाय समूह",
          description,
          telephone: "+919404884450",
          address: {
            "@type": "PostalAddress",
            streetAddress: "दत्ता निवास, भापडा मेन रोड, जारावंडी",
            addressLocality: "एटापल्ली",
            addressRegion: "महाराष्ट्र",
            postalCode: "442606",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:00-20:00",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  const featureIcons = [ShieldCheck, Clock, Star];

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt={t.home.heroAlt}
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-accent/30 px-4 py-1.5 text-xs font-medium text-accent-foreground">
            <MapPin className="h-3.5 w-3.5" /> {t.home.badge}
          </span>
          <h1
            style={{ animationDelay: "120ms" }}
            className="mt-5 max-w-3xl animate-fade-up text-3xl leading-tight text-foreground sm:text-5xl"
          >
            {t.home.h1}
          </h1>
          <p
            style={{ animationDelay: "240ms" }}
            className="mt-4 max-w-2xl animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.home.intro}
          </p>
          <div style={{ animationDelay: "360ms" }} className="mt-7 flex animate-fade-up flex-wrap gap-3">
            <a
              href="tel:9404884450"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft press transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> {t.common.callNow}
            </a>
            <a
              href="https://wa.me/919404884450"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-medium text-whatsapp-foreground shadow-soft press transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> {t.common.askOnWhatsapp}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground press transition-colors hover:bg-secondary"
            >
              {t.common.viewServices}
            </Link>
          </div>

          <div style={{ animationDelay: "480ms" }} className="mt-10 grid max-w-3xl animate-fade-up gap-3 sm:grid-cols-3">
            {t.home.features.map((f, i) => {
              const Icon = featureIcons[i]!;
              return (
                <div key={f.t} className="hover-lift rounded-2xl border border-border bg-card/90 p-4">
                  <Icon className="h-5 w-5 animate-float-soft text-primary" />
                  <p className="mt-2 text-sm font-medium text-foreground">{f.t}</p>
                  <p className="text-xs text-muted-foreground">{f.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="animate-fade-up text-2xl text-foreground sm:text-3xl">{t.home.businessesHeading}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.home.businessesSub}</p>
        <div className="mt-8 grid gap-8">
          {businesses.map((b, i) => (
            <Reveal key={b.slug} delay={i * 90}>
              <BusinessSection b={b} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="animate-fade-up text-2xl text-foreground sm:text-3xl">{t.home.testimonialsHeading}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.testimonials.map((tm, ti) => (
            <Reveal key={tm.name} delay={ti * 90}>
              <figure className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground">“{tm.text}”</blockquote>
                <figcaption className="mt-3 text-xs text-muted-foreground">
                  {tm.name} — {tm.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <MapSection />

      <section className="section">
        <div className="hover-lift rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
          <h2 className="text-2xl sm:text-3xl">{t.home.ctaHeading}</h2>
          <p className="mt-3 max-w-2xl text-sm opacity-90">{t.address}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:9404884450" className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground">
              {t.home.ctaCall}
            </a>
            <Link to="/contact" className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium">
              {t.home.ctaForm}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
