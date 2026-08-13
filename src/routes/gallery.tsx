import { createFileRoute } from "@tanstack/react-router";
import { businesses } from "@/data/business";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero.jpg";
import { useI18n } from "@/i18n/LanguageProvider";

const title = "फोटो गॅलरी | दत्ता कुटुंब व्यवसाय समूह, जारावंडी";
const description =
  "आमच्या CSC सेवा केंद्र, बांगडी भंडार, शू शॉप आणि टेलरिंग शॉपचे फोटो — दुकानातील माल, सेवा आणि वातावरणाची झलक.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://datta-family-hub.lovable.app/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://datta-family-hub.lovable.app/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const { t } = useI18n();
  const images = [
    { src: heroImg, alt: t.gallery.areaAlt },
    ...businesses.map((b) => ({ src: b.image, alt: t.businesses[b.slug]?.name ?? b.name })),
  ];

  return (
    <div className="section">
      <h1 className="text-3xl text-foreground sm:text-4xl">{t.gallery.h1}</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t.gallery.intro}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <Reveal key={img.alt} delay={i * 70}>
            <figure className="hover-lift h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">{img.alt}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
