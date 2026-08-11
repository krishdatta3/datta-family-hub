import { createFileRoute } from "@tanstack/react-router";
import { businesses } from "@/data/business";
import heroImg from "@/assets/hero.jpg";

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
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const images = [
    { src: heroImg, alt: "जारावंडी येथील आमचा परिसर" },
    ...businesses.map((b) => ({ src: b.image, alt: b.name })),
  ];

  return (
    <div className="section">
      <h1 className="text-3xl text-foreground sm:text-4xl">फोटो गॅलरी</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        आमच्या दुकानांची आणि सेवांची झलक. नवीन माल आल्यावर फोटो अपडेट केले जातात.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <figure
            key={img.alt}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
          >
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
        ))}
      </div>
    </div>
  );
}
