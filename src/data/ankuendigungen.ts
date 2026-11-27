/**
 * Homepage-Ankündigungen für bevorstehende Veranstaltungen.
 *
 * Jeder Eintrag wird automatisch ausgeblendet, sobald das Datum vergangen ist.
 * Nur die wichtigsten Informationen – keine Tagesordnung o.Ä.
 *
 * Felder:
 *   datum       – Datum im Format "dd.MM.yyyy"
 *   titel       – Titel der Veranstaltung
 *   uhrzeit     – Optionale Uhrzeit, z. B. "19:00 Uhr"
 *   ort         – Optionaler Veranstaltungsort
 *   hinweis     – Optionaler kurzer Zusatzhinweis (z. B. Kontext, Treffpunkt)
 */
export interface Ankuendigung {
  datum: string;
  titel: string;
  uhrzeit?: string;
  ort?: string;
  hinweis?: string;
}

export const ankuendigungen: Ankuendigung[] = [
  {
    datum: "12.03.2027",
    titel: "Jahreshauptversammlung",
    uhrzeit: "19:00 Uhr",
    ort: 'Gasthaus „Weißes Kreuz", Altenthann',
  },
  {
    datum: "09.04.2027",
    titel: "Flurreinigung",
    uhrzeit: "16:00 Uhr",
    ort: "Treffpunkt am Dorfweiher, Altenthann",
  },
  {
    datum: "12.09.2027",
    titel: "Jubiläumsfeier zum 80-jährigen Bestehen des OGV",
    ort: 'Gasthaus „Weißes Kreuz", Altenthann',
  },
];
