import { MAPS_QUERY, ADDRESS } from "@/data/business";

export function MapSection() {
  return (
    <section className="section">
      <h2 className="text-2xl text-foreground sm:text-3xl">आमचे ठिकाण</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{ADDRESS}</p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-card">
        <iframe
          title="दत्ता कुटुंब व्यवसाय समूह – नकाशा"
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
        className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
      >
        दिशा मिळवा
      </a>
    </section>
  );
}
