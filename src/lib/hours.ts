export type OpeningHours = {
  /** 0 = Sunday ... 6 = Saturday */
  days: number[];
  open: string; // "09:00"
  close: string; // "20:00"
};

const IST_OFFSET_MIN = 330;

function nowInIST(date = new Date()) {
  const utcMinutes = date.getUTCHours() * 60 + date.getUTCMinutes();
  const total = (utcMinutes + IST_OFFSET_MIN) % 1440;
  const dayShift = Math.floor((utcMinutes + IST_OFFSET_MIN) / 1440);
  const day = (date.getUTCDay() + dayShift) % 7;
  return { day, minutes: total };
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

export function getTodayHours(hours: OpeningHours[], date = new Date()) {
  const { day } = nowInIST(date);
  return hours.find((h) => h.days.includes(day)) ?? null;
}

export function isOpenNow(hours: OpeningHours[], date = new Date()) {
  const { day, minutes } = nowInIST(date);
  return hours.some(
    (h) => h.days.includes(day) && minutes >= toMinutes(h.open) && minutes < toMinutes(h.close),
  );
}

/** Schema.org openingHours strings, e.g. "Mo-Su 09:00-20:00" */
const SCHEMA_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function toSchemaOpeningHours(hours: OpeningHours[]) {
  return hours.map((h) => {
    const sorted = [...h.days].sort((a, b) => a - b);
    const isRange = sorted.every((d, i) => i === 0 || d === sorted[i - 1]! + 1);
    const label =
      sorted.length > 1 && isRange
        ? `${SCHEMA_DAYS[sorted[0]!]}-${SCHEMA_DAYS[sorted[sorted.length - 1]!]}`
        : sorted.map((d) => SCHEMA_DAYS[d]).join(",");
    return `${label} ${h.open}-${h.close}`;
  });
}

export function toOpeningHoursSpecification(hours: OpeningHours[]) {
  const NAMES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => NAMES[d]),
    opens: h.open,
    closes: h.close,
  }));
}
