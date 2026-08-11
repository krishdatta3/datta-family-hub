import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { businesses, ADDRESS } from "@/data/business";
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
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", subject: businesses[0].name, message: "" });

  const waLink = `https://wa.me/919404884450?text=${encodeURIComponent(
    `नमस्कार,\nनाव: ${form.name}\nमोबाईल: ${form.phone}\nविषय: ${form.subject}\nसंदेश: ${form.message}`,
  )}`;

  return (
    <>
      <div className="section">
        <h1 className="text-3xl text-foreground sm:text-4xl">संपर्क करा</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          चौकशीसाठी थेट कॉल करा किंवा खालील फॉर्म भरून WhatsApp वर संदेश पाठवा — आम्ही लवकरात
          लवकर उत्तर देऊ.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink, "_blank", "noopener,noreferrer");
            }}
            className="rounded-3xl border border-border bg-card p-6 shadow-card"
          >
            <label className="block text-sm text-foreground">
              आपले नाव
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="उदा. सुरेश मडावी"
              />
            </label>
            <label className="mt-4 block text-sm text-foreground">
              मोबाईल नंबर
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="१० अंकी नंबर"
              />
            </label>
            <label className="mt-4 block text-sm text-foreground">
              कोणत्या सेवेबाबत?
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                {businesses.map((b) => (
                  <option key={b.slug}>{b.name}</option>
                ))}
                <option>इतर चौकशी</option>
              </select>
            </label>
            <label className="mt-4 block text-sm text-foreground">
              आपला संदेश
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="आपली गरज थोडक्यात लिहा"
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-medium text-whatsapp-foreground"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp वर पाठवा
            </button>
          </form>

          <div className="grid content-start gap-4">
            {businesses.map((b) => (
              <div key={b.slug} className="rounded-2xl border border-border bg-card p-5">
                <h2 className="text-lg text-foreground">{b.name}</h2>
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
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-secondary p-5 text-sm text-muted-foreground">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {ADDRESS}
              </p>
              <p className="mt-3 flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> दररोज सकाळी ९:०० ते
                रात्री ८:००
              </p>
            </div>
          </div>
        </div>
      </div>

      <MapSection />
    </>
  );
}
