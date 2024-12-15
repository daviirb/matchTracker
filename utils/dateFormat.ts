import { format } from "date-fns";

export function formatUtcDate(utcDate: string): string {
  const date = new Date(utcDate);
  return format(date, "dd MMM");
}

export function formatTimeFromUtc(utcDate: string): string {
  const date = new Date(utcDate);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
