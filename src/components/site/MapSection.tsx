import { MAPS_QUERY } from "@/data/business";
import { useI18n } from "@/i18n/LanguageProvider";

export function MapSection() {
  const { t } = useI18n();

  return (
    <section className="section">
      <h2 className="text-2xl text-foreground sm:text-3xl">{t.map.heading}</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.address}</p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-card">
        <iframe
          title={t.map.iframeTitle}
          src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
          loading="lazy"
          className="h-[360px] w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-primary hover:underline"
      >
        {t.map.openInMaps}
      </a>
    </section>
  );
}
