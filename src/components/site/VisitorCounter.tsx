import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/i18n/LanguageProvider";

const SESSION_KEY = "datta-visit-counted";

export function VisitorCounter({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    const run = async () => {
      const alreadyCounted =
        typeof window !== "undefined" && window.sessionStorage.getItem(SESSION_KEY) === "1";

      if (!alreadyCounted) {
        const { data, error } = await supabase.rpc("increment_site_visits");
        if (!error) {
          window.sessionStorage.setItem(SESSION_KEY, "1");
          if (active && typeof data === "number") setCount(data);
          return;
        }
      }

      const { data } = await supabase
        .from("site_stats")
        .select("visits")
        .eq("id", "main")
        .maybeSingle();
      if (active && data) setCount(Number(data.visits));
    };

    void run();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-muted-foreground ${className}`}
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
      <span>{t.footer.visitorsLabel}</span>
      <span className="font-heading text-base text-foreground tabular-nums">
        {count === null ? "…" : count.toLocaleString("en-IN")}
      </span>
    </div>
  );
}
