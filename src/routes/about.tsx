import { createFileRoute } from "@tanstack/react-router";
import { businesses } from "@/data/business";
import { useI18n } from "@/i18n/LanguageProvider";

const title = "आमच्याविषयी | दत्ता कुटुंब व्यवसाय समूह, जारावंडी";
const description =
  "जारावंडी येथील दत्ता कुटुंबाची चार दुकाने — CSC सेवा केंद्र, बांगडी भंडार, शू शॉप आणि टेलरिंग शॉप. आमचा प्रवास, मूल्ये आणि कुटुंबातील सदस्यांची ओळख.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  return (
    <div className="section">
      <h1 className="text-3xl text-foreground sm:text-4xl">{t.about.h1}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{t.about.p1}</p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{t.about.p2}</p>

      <h2 className="mt-12 text-2xl text-foreground">{t.about.familyHeading}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {businesses.map((b) => (
          <div key={b.slug} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg text-foreground">{t.businesses[b.slug]?.name ?? b.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.businesses[b.slug]?.tagline ?? b.tagline}</p>
            <p className="mt-3 text-sm text-foreground">{b.owner}</p>
            <a href={`tel:${b.phone}`} className="text-sm text-primary hover:underline">{b.phone}</a>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-2xl text-foreground">{t.about.valuesHeading}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {t.about.values.map((v) => (
          <li key={v.t} className="rounded-2xl bg-secondary p-5">
            <p className="font-medium text-foreground">{v.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        {t.about.addressLabel}: {t.address}
      </p>
    </div>
  );
}
