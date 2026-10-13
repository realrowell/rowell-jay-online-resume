import { useMemo } from "react";

export function useMonthDateFormat(date?: Date | string | number | null) {
  // useMemo runs the logic and stores the resulting string string/null
  return useMemo(() => {
    if (!date) return null;

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return null;
    }

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      timeZone: "UTC",
    }).format(parsedDate);
  }, [date]); // Re-runs automatically if 'date' changes
}
