<?php

declare(strict_types=1);

// Nur POST-Anfragen verarbeiten
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /mosterei');
    exit;
}

// Fehler in Datei schreiben (zugänglich über Admin-Diagnose)
function ogvLog(string $msg): void
{
    $logFile = __DIR__ . '/data/error.log';
    $entry   = date('Y-m-d H:i:s') . ' ' . $msg . PHP_EOL;
    @file_put_contents($logFile, $entry, FILE_APPEND | LOCK_EX);
    error_log($msg);
}

// Konfiguration laden (liegt eine Ebene über public_html/)
$configPath = __DIR__ . '/../ogv_config.php';
if (!file_exists($configPath)) {
    ogvLog("OGV Mosterei: Konfigurationsdatei nicht gefunden: $configPath");
    header('Location: /mosterei?fehler=1&msg=' . urlencode($configPath));
    exit;
}
require $configPath;

require __DIR__ . '/phpmailer.php';

// --- Eingaben einlesen und bereinigen ---

function postText(string $key): string
{
    return trim((string)($_POST[$key] ?? ''));
}

$vorname          = postText('vorname');
$nachname         = postText('nachname');
$email            = trim((string)filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
$telefon          = postText('telefon');
$gewuenschter_tag = postText('gewuenschter_tag');
$praeferierte_zeit = postText('praeferierte_zeit');
$menge_zentner    = filter_input(INPUT_POST, 'menge_zentner', FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1],
]);
$mosttyp          = postText('mosttyp');
$abfuellung       = postText('abfuellung');
$bemerkung        = postText('bemerkung');

// --- Validierung ---

$fehler = false;

if (empty($vorname) || empty($nachname) || empty($email) || empty($telefon)
    || empty($gewuenschter_tag) || empty($praeferierte_zeit)
    || $menge_zentner === false || $menge_zentner === null
    || empty($mosttyp) || empty($abfuellung)
) {
    $fehler = true;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $fehler = true;
}

if (!in_array($praeferierte_zeit, ['Vormittags', 'Nachmittags'], true)) {
    $fehler = true;
}

if (!in_array($mosttyp, ['Süßmost', 'Sauermost'], true)) {
    $fehler = true;
}

if (!in_array($abfuellung, ['Flaschen', 'Beutel'], true)) {
    $fehler = true;
}

if ($fehler) {
    header('Location: /mosterei?fehler=1');
    exit;
}

// --- Datenbank: Anfrage speichern ---

try {
    $dsn = sprintf(
        'pgsql:host=%s;port=5432;dbname=%s',
        DB_HOST,
        DB_NAME
    );
    $db = new PDO($dsn, DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $db->exec("CREATE TABLE IF NOT EXISTS anfragen (
        id                  SERIAL PRIMARY KEY,
        created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
        vorname             TEXT NOT NULL,
        nachname            TEXT NOT NULL,
        email               TEXT NOT NULL,
        telefon             TEXT NOT NULL,
        gewuenschter_tag    TEXT NOT NULL,
        praeferierte_zeit   TEXT NOT NULL,
        menge_zentner       INTEGER NOT NULL,
        mosttyp             TEXT NOT NULL,
        abfuellung          TEXT NOT NULL,
        bemerkung           TEXT,
        vereinbarter_termin TEXT,
        status              TEXT NOT NULL DEFAULT 'offen'
    )");

    $stmt = $db->prepare(
        "INSERT INTO anfragen
            (vorname, nachname, email, telefon,
             gewuenschter_tag, praeferierte_zeit, menge_zentner,
             mosttyp, abfuellung, bemerkung)
         VALUES
            (?, ?, ?, ?,
             ?, ?, ?, ?, ?, ?)"
    );

    $stmt->execute([
        $vorname, $nachname, $email, $telefon,
        $gewuenschter_tag, $praeferierte_zeit, (int)$menge_zentner,
        $mosttyp, $abfuellung, $bemerkung,
    ]);

} catch (Exception $e) {
    ogvLog("OGV Mosterei DB-Fehler: " . $e->getMessage());
    header('Location: /mosterei?fehler=1');
    exit;
}

// --- E-Mail-Benachrichtigung an Manager ---

try {
    $smtp = new SimpleSMTP(SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS);

    $betreff = "Neue Mostanfrage von $vorname $nachname";
    $inhalt  = "Eine neue Mosttermin-Anfrage ist eingegangen:\n\n"
        . "Name:              $vorname $nachname\n"
        . "E-Mail:            $email\n"
        . "Telefon:           $telefon\n"
        . "Gewünschter Tag:   $gewuenschter_tag\n"
        . "Präferierte Zeit:  $praeferierte_zeit\n"
        . "Menge:             $menge_zentner Zentner\n"
        . "Mosttyp:           $mosttyp\n"
        . "Abfüllung:         $abfuellung\n"
        . "Bemerkung:         $bemerkung\n\n"
        . "Admin-Übersicht: https://www.ogv-altenthann-pattenhofen.de/admin/";

    $smtp->send(SMTP_USER, MANAGER_EMAIL, $betreff, $inhalt);

} catch (Exception $e) {
    // E-Mail-Fehler ist nicht kritisch – Anfrage ist gespeichert
    ogvLog("OGV Mosterei E-Mail-Fehler: " . $e->getMessage());
}

// --- Erfolg ---

header('Location: /mosterei_bestaetigung');
exit;
