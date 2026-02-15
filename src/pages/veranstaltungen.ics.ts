import { generateICS } from "../utils/ics";
import { veranstaltungen } from "../data/veranstaltungen";

export const GET = () => {
  const icsContent = generateICS(
    veranstaltungen,
    "OGV Pattenhofen-Altenthann - Veranstaltungen",
  );

  return new Response(icsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="veranstaltungen.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
};
