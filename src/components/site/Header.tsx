import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/faq", label: t.nav.faq },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary font-heading text-lg text-primary-foreground">
            द
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base text-foreground sm:text-lg">
              {t.brand}
            </span>
            <span className="block text-xs text-muted-foreground">{t.brandSub}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <LanguageSwitcher className="ml-2" />
          <a
            href="tel:9404884450"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> {t.common.call}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <div className="flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground font-medium" }}
                className="rounded-lg px-2 py-3 text-sm text-muted-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
