import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { businesses } from "@/data/business";
import { useI18n } from "@/i18n/LanguageProvider";
import { MapSection } from "@/components/site/MapSection";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const title = "संपर्क करा | दत्ता कुटुंब व्यवसाय समूह, जारावंडी";
const description =
  "जारावंडी, ता. एटापल्ली येथील दत्ता कुटुंब व्यवसाय समूहाशी संपर्क साधा — फोन, WhatsApp, पत्ता, नकाशा आणि चौकशी फॉर्म.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://datta-family-hub.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://datta-family-hub.lovable.app/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  const subject = form.subject || t.businesses[businesses[0]!.slug]!.name;

  const waLink = `https://wa.me/919404884450?text=${encodeURIComponent(
    `${t.contact.waGreeting},\n${t.contact.waName}: ${form.name}\n${t.contact.waPhone}: ${form.phone}\n${t.contact.waSubject}: ${subject}\n${t.contact.waMessage}: ${form.message}`,
  )}`;

  return (
    <>
      <div className="section">
        <h1 className="text-3xl text-foreground sm:text-4xl">{t.contact.h1}</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t.contact.intro}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink, "_blank", "noopener,noreferrer");
            }}
            className="rounded-3xl border border-border bg-card p-6 shadow-card"
          >
            <label className="block text-sm text-foreground">
              {t.contact.name}
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder={t.contact.namePlaceholder}
              />
            </label>
            <label className="mt-4 block text-sm text-foreground">
              {t.contact.phone}
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder={t.contact.phonePlaceholder}
              />
            </label>
            <label className="mt-4 block text-sm text-foreground">
              {t.contact.subject}
              <select
                value={subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                {businesses.map((b) => (
                  <option key={b.slug}>{t.businesses[b.slug]?.name ?? b.name}</option>
                ))}
                <option>{t.contact.other}</option>
              </select>
            </label>
            <label className="mt-4 block text-sm text-foreground">
              {t.contact.message}
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder={t.contact.messagePlaceholder}
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-medium text-whatsapp-foreground"
            >
              <MessageCircle className="h-4 w-4" /> {t.contact.submit}
            </button>
          </form>

          <div className="grid content-start gap-4">
            {businesses.map((b) => (
              <div key={b.slug} className="rounded-2xl border border-border bg-card p-5">
                <h2 className="text-lg text-foreground">{t.businesses[b.slug]?.name ?? b.name}</h2>
                <p className="text-sm text-muted-foreground">{b.owner}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`tel:${b.phone}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" /> {b.phone}
                  </a>
                  <a
                    href={`https://wa.me/91${b.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"
                  >
                    <MessageCircle className="h-4 w-4" /> {t.common.whatsapp}
                  </a>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-secondary p-5 text-sm text-muted-foreground">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t.address}
              </p>
              <p className="mt-3 flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t.hours}
              </p>
            </div>
          </div>
        </div>
      </div>

      <MapSection />
    </>
  );
}
