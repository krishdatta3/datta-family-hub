import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { getTodayHours, isOpenNow, type OpeningHours } from "@/lib/hours";
import { useI18n } from "@/i18n/LanguageProvider";

export function OpenNowBadge({ hours }: { hours: OpeningHours[] }) {
  const { t } = useI18n();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const today = getTodayHours(hours, now ?? undefined);
  const open = now ? isOpenNow(hours, now) : false;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        aria-live="polite"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
          now === null
            ? "bg-secondary text-muted-foreground"
            : open
              ? "bg-whatsapp/15 text-whatsapp"
              : "bg-destructive/10 text-destructive"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${
            now === null ? "bg-muted-foreground" : open ? "animate-pulse bg-whatsapp" : "bg-destructive"
          }`}
        />
        {now === null ? t.common.todayHours : open ? t.common.openNow : t.common.closedNow}
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5" />
        {today ? `${t.common.todayHours}: ${today.open} – ${today.close}` : t.common.closedToday}
      </span>
    </div>
  );
}
