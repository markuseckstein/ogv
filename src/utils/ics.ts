import crypto from "crypto";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import type { Veranstaltung } from "../data/veranstaltungen";

/**
 * Generate a deterministic UID for an event based on date and title
 */
export function generateUID(event: Veranstaltung): string {
  const hash = crypto
    .createHash("sha1")
    .update(`${event.date}${event.title}`)
    .digest("hex");
  return `${hash}@ogv-altenthann-pattenhofen.de`;
}

/**
 * Convert dd.MM.yyyy to YYYYMMDD for all-day ICS events
 */
function formatDateForICS(dateStr: string): string {
  const [day, month, year] = dateStr.split(".").map((x) => parseInt(x));
  const date = new Date(year, month - 1, day);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}${mm}${dd}`;
}

/**
 * Generate an ICS calendar file from an array of events
 */
export function generateICS(
  events: Veranstaltung[],
  calendarName: string,
): string {
  const now = new Date();
  const timestamp = format(now, "yyyyMMdd'T'HHmmss'Z'", { locale: de });

  const sortedEvents = [...events].sort((a, b) => {
    const [aDay, aMonth, aYear] = a.date.split(".").map((x) => parseInt(x));
    const [bDay, bMonth, bYear] = b.date.split(".").map((x) => parseInt(x));
    const aDate = new Date(aYear, aMonth - 1, aDay);
    const bDate = new Date(bYear, bMonth - 1, bDay);
    return aDate.getTime() - bDate.getTime();
  });

  const vevents = sortedEvents
    .map((event) => {
      const uid = generateUID(event);
      const dtstart = formatDateForICS(event.date);

      // All-day event: end date is next day
      const [day, month, year] = event.date.split(".").map((x) => parseInt(x));
      const endDate = new Date(year, month - 1, day + 1);
      const yyyy = endDate.getFullYear();
      const mm = String(endDate.getMonth() + 1).padStart(2, "0");
      const dd = String(endDate.getDate()).padStart(2, "0");
      const dtend = `${yyyy}${mm}${dd}`;

      return `BEGIN:VEVENT
UID:${uid}
DTSTAMP:${timestamp}
DTSTART;VALUE=DATE:${dtstart}
DTEND;VALUE=DATE:${dtend}
SUMMARY:${event.title}
DESCRIPTION:OGV Pattenhofen-Altenthann e.V.
END:VEVENT`;
    })
    .join("\n");

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OGV Pattenhofen-Altenthann//Veranstaltungskalender//DE
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:${calendarName}
X-WR-TIMEZONE:Europe/Berlin
X-WR-CALDESC:Veranstaltungskalender des OGV Pattenhofen-Altenthann e.V.
${vevents}
END:VCALENDAR`;
}
