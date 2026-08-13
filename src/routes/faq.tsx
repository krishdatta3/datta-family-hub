import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/data/business";
import { useI18n } from "@/i18n/LanguageProvider";

const title = "वारंवार विचारले जाणारे प्रश्न | दत्ता कुटुंब व्यवसाय समूह";
const description =
  "दुकानाची वेळ, CSC सेवा, शिवणकामाचा कालावधी, ऑर्डर व पेमेंट पर्याय आणि पत्ता — ग्राहकांच्या नेहमीच्या प्रश्नांची उत्तरे.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://datta-family-hub.lovable.app/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://datta-family-hub.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  const { t } = useI18n();
  return (
    <div className="section">
      <h1 className="text-3xl text-foreground sm:text-4xl">{t.faq.h1}</h1>
      <div className="mt-8 grid gap-3">
        {t.faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 shadow-soft">
            <summary className="cursor-pointer list-none font-medium text-foreground">{f.q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
