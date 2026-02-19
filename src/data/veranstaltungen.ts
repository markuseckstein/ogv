export interface Veranstaltung {
  datum: string; // dd.MM.yyyy
  titel: string;
}

export const veranstaltungen: Veranstaltung[] = [
  {
    datum: "12.03.2026",
    titel: 'Helferessen, 19:00 Uhr, im Gasthaus „Weißes Kreuz"',
  },
  {
    datum: "20.03.2026",
    titel:
      'Jahreshauptversammlung mit Neuwahl des Vorstandes, 19:00 Uhr im Gasthaus „Weißes Kreuz"',
  },
  {
    datum: "27.03.2026",
    titel: "Flurreinigung, 16:00 Uhr am Weiher",
  },
  {
    datum: "03.07.2026",
    titel: 'Vereinsabend, 19:00 Uhr, im Gasthaus „Weißes Kreuz"',
  },
  {
    datum: "23.07.2026",
    titel: "Mostersitzung, 19:00 Uhr",
  },
  {
    datum: "29.08.2026",
    titel: "Obstbaumversteigerung, 14:00 Uhr",
  },
  {
    datum: "20.09.2026",
    titel: "Herbstwanderung",
  },
];
