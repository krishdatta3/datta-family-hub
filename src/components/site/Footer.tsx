import { Link } from "@tanstack/react-router";
import { businesses } from "@/data/business";
import { useI18n } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-heading text-xl text-foreground">{t.brand}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.address}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {t.footer.hoursLabel}: {t.hours}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg text-foreground">{t.footer.businessesHeading}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {businesses.map((b) => (
              <li key={b.slug}>
                {t.businesses[b.slug]?.name ?? b.name} —{" "}
                <a href={`tel:${b.phone}`} className="text-foreground hover:underline">
                  {b.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-foreground">{t.footer.linksHeading}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-foreground">
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-foreground">
                {t.nav.gallery}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-foreground">
                {t.nav.faq}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} {t.brand}, {t.brandSub}. {t.footer.rights}
        </p>
      </div>

    </footer>
  );
}
