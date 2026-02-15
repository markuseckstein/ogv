export interface Veranstaltung {
  date: string; // dd.MM.yyyy
  title: string;
}

export const veranstaltungen: Veranstaltung[] = [
  {
    date: "12.03.2026",
    title: 'Helferessen, 19:00 Uhr, im Gasthaus „Weißes Kreuz"',
  },
  {
    date: "20.03.2026",
    title:
      'Jahreshauptversammlung mit Neuwahl des Vorstandes, 19:00 Uhr im Gasthaus „Weißes Kreuz"',
  },
  {
    date: "27.03.2026",
    title: "Flurreinigung, 16:00 Uhr am Weiher",
  },
  {
    date: "03.07.2026",
    title: 'Vereinsabend, 19:00 Uhr, im Gasthaus „Weißes Kreuz"',
  },
  {
    date: "23.07.2026",
    title: "Mostersitzung, 19:00 Uhr",
  },
  {
    date: "29.08.2026",
    title: "Obstbaumversteigerung, 14:00 Uhr",
  },
  {
    date: "20.09.2026",
    title: "Herbstwanderung",
  },
];
