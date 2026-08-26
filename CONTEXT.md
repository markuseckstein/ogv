# Domänenmodell OGV Pattenhofen-Altenthann

## Begriffe

### Beitrag (Aktuelles-Eintrag)
Ein unregelmäßig veröffentlichter Eintrag im Bereich "Aktuelles" der Website.
Enthält: Datum, Titel, Fließtext (Markdown), optionale Bilder (lokal gespeichert).
Dient sowohl als **Rückblick** (Bericht nach einer stattgefundenen Aktion/Veranstaltung)
als auch als **Veranstaltungsdetail** (Zusatzinfos zu einer geplanten Veranstaltung).
Beides ist dieselbe Inhaltsstruktur — kein eigener Typ pro Zweck.

### Veranstaltung
Ein Termin im Jahresprogramm des Vereins, mit Datum und Titel.
Wird in `src/data/veranstaltungen.ts` gepflegt und auf `/veranstaltungen` als Tabelle angezeigt.
Nicht zu verwechseln mit einem Beitrag, der Detailinfos zu einer Veranstaltung enthalten kann.

### Ankündigung
Kurze Hinweistexte auf der Startseite, verwaltet in `src/data/ankuendigungen.ts`.
Kein eigenes Navigationsmenü, kein Einzelseiten-Routing.
