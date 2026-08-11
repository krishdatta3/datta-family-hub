import { Languages } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="tablist"
      aria-label={t.common.language}
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft ${className}`}
    >
      <Languages className="ml-2 mr-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />
      {LANGS.map((l) => (
        <button
          key={l.code}
          role="tab"
          type="button"
          aria-selected={lang === l.code}
          onClick={() => setLang(l.code)}
          title={l.label}
          className={`press rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
