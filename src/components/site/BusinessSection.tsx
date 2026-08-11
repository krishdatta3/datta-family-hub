import type { Business } from "@/data/business";
import { Phone, MessageCircle } from "lucide-react";

const accentMap = {
  csc: { bar: "bg-csc", chip: "bg-csc-soft text-csc", btn: "bg-csc text-primary-foreground" },
  bangdi: {
    bar: "bg-bangdi",
    chip: "bg-bangdi-soft text-bangdi",
    btn: "bg-bangdi text-primary-foreground",
  },
  shoe: { bar: "bg-shoe", chip: "bg-shoe-soft text-shoe", btn: "bg-shoe text-primary-foreground" },
  tailor: {
    bar: "bg-tailor",
    chip: "bg-tailor-soft text-tailor",
    btn: "bg-tailor text-primary-foreground",
  },
} as const;

export function BusinessSection({ b, reverse }: { b: Business; reverse?: boolean }) {
  const a = accentMap[b.accent];
  return (
    <article
      id={b.slug}
      className="hover-lift group overflow-hidden rounded-3xl border border-border bg-card shadow-card"
    >
      <div className={`h-1.5 w-full ${a.bar}`} />
      <div className={`grid gap-0 md:grid-cols-2 ${reverse ? "md:[direction:rtl]" : ""}`}>
        <img
          src={b.image}
          alt={b.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
        />
        <div className="p-6 sm:p-8 md:[direction:ltr]">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${a.chip}`}>
            {b.tagline}
          </span>
          <h3 className="mt-3 text-2xl text-foreground">{b.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground">
            {b.items.map((i) => (
              <li key={i} className="flex gap-2">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.bar}`} />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            प्रोप्रायटर: <span className="font-medium text-foreground">{b.owner}</span>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`tel:${b.phone}`}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium press transition-transform hover:scale-105 ${a.btn}`}
            >
              <Phone className="h-4 w-4" /> {b.phone}
            </a>
            <a
              href={`https://wa.me/91${b.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground press transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
