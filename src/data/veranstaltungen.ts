export interface Veranstaltung {
  datum: string; // dd.MM.yyyy
  titel: string;
}

export const veranstaltungen: Veranstaltung[] = [
  {
    datum: "11.03.2027",
    titel: 'Helferessen, 18:00 Uhr, im Gasthaus „Weißes Kreuz"',
  },
  {
    datum: "12.03.2027",
    titel: 'Jahreshauptversammlung, 19:00 Uhr, im Gasthaus „Weißes Kreuz"',
  },
  {
    datum: "09.04.2027",
    titel: "Flurreinigung, 16:00 Uhr am Weiher",
  },
  {
    datum: "07.05.2027",
    titel: 'Vereinsabend, 19:00 Uhr, im Gasthaus „Weißes Kreuz"',
  },
  {
    datum: "28.08.2027",
    titel: "Obstbaumversteigerung, 14:00 Uhr",
  },
  {
    datum: "12.09.2027",
    titel:
      'Jubiläumsfeier zum 80-jährigen Bestehen des OGV im Gasthaus „Weißes Kreuz"',
  },
];
