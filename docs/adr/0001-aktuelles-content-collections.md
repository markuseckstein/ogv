# ADR 0001: Aktuelles als Astro Content Collections mit Markdown

**Status:** Akzeptiert  
**Datum:** 2026-05-11

## Kontext

Die Website benötigt einen Bereich "Aktuelles" für unregelmäßig veröffentlichte Beiträge (Rückblicke und Veranstaltungsdetails). Der Rest der Seite besteht aus hart kodierten `.astro`-Seiten ohne CMS.

## Entscheidung

Beiträge werden als Astro **Content Collections** in `src/content/aktuelles/` verwaltet — eine Markdown-Datei pro Beitrag, Bilder lokal im selben Verzeichnis.

## Alternativen

- **Hardcodierte `.astro`-Seiten** (wie der Rest der Seite): konsistent, aber jeder neue Beitrag erfordert eine neue Datei mit Boilerplate-Code statt reinem Markdown.
- **Externes CMS** (Contentful, Sanity, etc.): unnötige Komplexität für gelegentliche Beiträge eines kleinen Vereins.

## Konsequenzen

- Neue Beiträge entstehen durch Anlegen einer `.md`-Datei in `src/content/aktuelles/` — kein Astro-spezifisches Wissen nötig.
- Content Collections sind seit Astro 2 stabil und gut dokumentiert.
- Bilder im Repo wachsen mit der Zeit — kein Problem bei vereinsüblichem Volumen (wenige Beiträge pro Jahr).
