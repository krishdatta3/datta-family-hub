import { createFileRoute } from "@tanstack/react-router";
import { businesses } from "@/data/business";
import { toOpeningHoursSpecification, toSchemaOpeningHours } from "@/lib/hours";
import { BusinessSection } from "@/components/site/BusinessSection";
import { useI18n } from "@/i18n/LanguageProvider";

const title = "सेवा व उत्पादने | दत्ता कुटुंब, जारावंडी";
const description =
  "दत्ता सर्व्हिसेसच्या ऑनलाइन व शासकीय सेवा, साराचं बांगडी भंडारमधील अ‍ॅक्सेसरीज, दत्ता अँड सन्समधील चप्पल-जोडे आणि सारा टेलरिंगचे शिवणकाम — संपूर्ण यादी व दर विचारणा.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://datta-family-hub.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://datta-family-hub.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": businesses.map((b) => ({
            "@type": "LocalBusiness",
            "@id": `https://datta-family-hub.lovable.app/services#${b.slug}`,
            name: b.name,
            description: b.description,
            telephone: `+91${b.phone}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "दत्ता निवास, भापडा मेन रोड, जारावंडी",
              addressLocality: "एटापल्ली",
              addressRegion: "महाराष्ट्र",
              postalCode: "442606",
              addressCountry: "IN",
            },
            openingHours: toSchemaOpeningHours(b.hours),
            openingHoursSpecification: toOpeningHoursSpecification(b.hours),
          })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  const { t } = useI18n();
  return (
    <div className="section">
      <h1 className="text-3xl text-foreground sm:text-4xl">{t.services.h1}</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t.services.intro}</p>
      <div className="mt-8 grid gap-8">
        {businesses.map((b, i) => (
          <BusinessSection key={b.slug} b={b} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
