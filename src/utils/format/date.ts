/**
 * Format an ISO date string (or Date) for display. Locale-stable so server and
 * client render identically (no hydration mismatch).
 *
 *   formatDate("2026-07-22") // "July 22, 2026"
 */
export function formatDate(
  input: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...options }).format(
    date,
  );
}
