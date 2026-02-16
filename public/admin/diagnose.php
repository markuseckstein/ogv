<?php

declare(strict_types=1);

session_start();

// --- Zugriff nur für eingeloggte Admins ---
// (Login läuft über index.php, erfordert keine DB-Verbindung)
$eingeloggt = !empty($_SESSION['admin_auth']);

// Config laden falls vorhanden (für DB-Test)
$configPath   = __DIR__ . '/ogv_config.php';
$configLoaded = false;
if (file_exists($configPath)) {
    require $configPath;
    $configLoaded = true;
}

// Wenn nicht eingeloggt: nur Login-Formular zeigen
// (kein Redirect zu index.php, damit die Seite auch ohne DB erreichbar bleibt)
?><!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diagnose – OGV Admin</title>
  <style>
    body { font-family: monospace; font-size: 14px; padding: 24px; background: #f5f5f5; }
    h1 { font-family: sans-serif; }
    h2 { font-family: sans-serif; font-size: 1rem; margin-top: 2em; border-bottom: 1px solid #ccc; }
    .ok   { color: #155724; background: #d4edda; padding: 2px 8px; border-radius: 3px; }
    .warn { color: #856404; background: #fff3cd; padding: 2px 8px; border-radius: 3px; }
    .err  { color: #721c24; background: #f8d7da; padding: 2px 8px; border-radius: 3px; }
    table { border-collapse: collapse; margin-top: 8px; }
    td, th { padding: 4px 12px; border: 1px solid #ddd; text-align: left; }
    th { background: #eee; }
    pre { background: #fff; border: 1px solid #ccc; padding: 12px; max-height: 400px;
          overflow-y: auto; font-size: 12px; white-space: pre-wrap; word-break: break-all; }
    .login-box { max-width: 340px; margin: 60px auto; background: #fff;
                 border: 1px solid #ccc; border-radius: 6px; padding: 32px; }
    .btn { padding: 8px 16px; background: #4a7c35; color: #fff; border: none;
           border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>

<?php if (!$eingeloggt): ?>

  <div class="login-box">
    <h1>Admin-Login</h1>
    <p style="font-family:sans-serif; color:#666;">
      Zuerst in der <a href="/admin/">Admin-Übersicht</a> einloggen, dann diese Seite neu laden.
    </p>
    <form method="post" action="/admin/">
      <input type="hidden" name="action" value="login">
      <label style="display:block; margin-bottom:4px; font-family:sans-serif">Passwort</label>
      <input type="password" name="passwort" style="width:100%; padding:8px; margin-bottom:12px;
             border:1px solid #ccc; border-radius:4px;" required>
      <button type="submit" class="btn" style="width:100%">Einloggen</button>
    </form>
  </div>

<?php else: ?>

  <h1>Diagnose – OGV Mosterei</h1>
  <p><a href="/admin/">← Admin-Übersicht</a></p>

  <!-- PHP-Umgebung -->
  <h2>PHP-Umgebung</h2>
  <table>
    <tr><th>PHP-Version</th><td><?= h(PHP_VERSION) ?></td></tr>
    <tr>
      <th>pdo_pgsql geladen?</th>
      <td>
        <?php if (extension_loaded('pdo_pgsql')): ?>
          <span class="ok">Ja</span>
        <?php else: ?>
          <span class="err">NEIN – pdo_pgsql Extension fehlt!</span>
        <?php endif; ?>
      </td>
    </tr>
    <tr>
      <th>PDO-Treiber</th>
      <td><?= h(implode(', ', PDO::getAvailableDrivers())) ?></td>
    </tr>
    <tr>
      <th>Zeitzone (PHP)</th>
      <td><?= h(date_default_timezone_get()) ?></td>
    </tr>
    <tr>
      <th>__DIR__ (admin)</th>
      <td><?= h(__DIR__) ?></td>
    </tr>
  </table>

  <!-- Config-Datei -->
  <h2>Konfigurationsdatei</h2>
  <table>
    <tr>
      <th>Pfad</th>
      <td><?= h(realpath($configPath) ?: $configPath) ?></td>
    </tr>
    <tr>
      <th>Gefunden?</th>
      <td>
        <?php if ($configLoaded): ?>
          <span class="ok">Ja</span>
        <?php else: ?>
          <span class="err">NEIN – Datei nicht gefunden</span>
        <?php endif; ?>
      </td>
    </tr>
    <?php if ($configLoaded): ?>
    <tr>
      <th>DB_HOST</th>
      <td><?= defined('DB_HOST') ? h(DB_HOST) : '<span class="err">nicht definiert</span>' ?></td>
    </tr>
    <tr>
      <th>DB_NAME</th>
      <td><?= defined('DB_NAME') ? h(DB_NAME) : '<span class="err">nicht definiert</span>' ?></td>
    </tr>
    <tr>
      <th>DB_USER</th>
      <td><?= defined('DB_USER') ? h(DB_USER) : '<span class="err">nicht definiert</span>' ?></td>
    </tr>
    <tr>
      <th>DB_PASS</th>
      <td><?= defined('DB_PASS') ? '<span class="ok">definiert (wird nicht angezeigt)</span>' : '<span class="err">nicht definiert</span>' ?></td>
    </tr>
    <tr>
      <th>SMTP_HOST</th>
      <td><?= defined('SMTP_HOST') ? h(SMTP_HOST) : '<span class="warn">nicht definiert</span>' ?></td>
    </tr>
    <tr>
      <th>MANAGER_EMAIL</th>
      <td><?= defined('MANAGER_EMAIL') ? h(MANAGER_EMAIL) : '<span class="warn">nicht definiert</span>' ?></td>
    </tr>
    <?php endif; ?>
  </table>

  <!-- Datenbankverbindung testen -->
  <h2>Datenbankverbindung</h2>
  <?php if (!$configLoaded): ?>
    <p class="err">Kann nicht getestet werden – ogv_config.php fehlt.</p>
  <?php elseif (!extension_loaded('pdo_pgsql')): ?>
    <p class="err">Kann nicht getestet werden – pdo_pgsql Extension nicht geladen.</p>
  <?php elseif (!defined('DB_HOST') || !defined('DB_NAME') || !defined('DB_USER') || !defined('DB_PASS')): ?>
    <p class="err">Kann nicht getestet werden – DB-Konstanten fehlen in ogv_config.php.</p>
  <?php else: ?>
    <?php
      $dbError = null;
      $dbOk    = false;
      try {
          $dsn  = sprintf('pgsql:host=%s;port=5432;dbname=%s', DB_HOST, DB_NAME);
          $testDb = new PDO($dsn, DB_USER, DB_PASS);
          $testDb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $ver  = $testDb->query("SELECT version()")->fetchColumn();
          $dbOk = true;
      } catch (Exception $e) {
          $dbError = $e->getMessage();
      }
    ?>
    <table>
      <tr>
        <th>Verbindung</th>
        <td>
          <?php if ($dbOk): ?>
            <span class="ok">Erfolgreich</span>
          <?php else: ?>
            <span class="err">FEHLER</span>
          <?php endif; ?>
        </td>
      </tr>
      <?php if ($dbOk): ?>
      <tr><th>PostgreSQL-Version</th><td><?= h($ver) ?></td></tr>
      <?php else: ?>
      <tr><th>Fehlermeldung</th><td class="err"><?= h($dbError) ?></td></tr>
      <?php endif; ?>
    </table>
  <?php endif; ?>

  <!-- Tabellen-Check -->
  <?php if (isset($testDb) && $dbOk): ?>
  <h2>Tabelle <code>anfragen</code></h2>
  <?php
    try {
      $exists = $testDb->query(
          "SELECT COUNT(*) FROM information_schema.tables
            WHERE table_schema = 'public' AND table_name = 'anfragen'"
      )->fetchColumn();
      if ($exists) {
          $count = $testDb->query("SELECT COUNT(*) FROM anfragen")->fetchColumn();
          echo '<p><span class="ok">Tabelle vorhanden</span> – ' . (int)$count . ' Einträge</p>';
      } else {
          echo '<p><span class="warn">Tabelle existiert noch nicht (wird beim ersten Formular-Absenden erstellt)</span></p>';
      }
    } catch (Exception $e) {
        echo '<p><span class="err">Fehler: ' . h($e->getMessage()) . '</span></p>';
    }
  ?>
  <?php endif; ?>

  <!-- Error-Log -->
  <h2>Fehler-Log (<code>data/error.log</code>)</h2>
  <?php
    $logFile = __DIR__ . '/../data/error.log';
    if (!file_exists($logFile)): ?>
    <p><span class="ok">Keine Fehler-Logdatei vorhanden (noch kein Fehler aufgetreten oder Datei noch nicht erstellt).</span></p>
  <?php else:
    $lines   = file($logFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
    $recent  = array_slice($lines, -100);
    ?>
    <p><?= count($lines) ?> Zeile(n) gesamt – letzte <?= count($recent) ?> werden angezeigt.
       <a href="?clear_log=1" onclick="return confirm('Log wirklich löschen?')">Log leeren</a>
    </p>
    <pre><?= h(implode("\n", $recent)) ?></pre>
  <?php endif; ?>

  <?php
    // Log leeren
    if (isset($_GET['clear_log']) && file_exists($logFile)) {
        @unlink($logFile);
        echo '<p><span class="ok">Log geleert.</span> <a href="/admin/diagnose.php">Neu laden</a></p>';
    }
  ?>

<?php endif; ?>

<?php
function h(mixed $v): string
{
    return htmlspecialchars((string)($v ?? ''), ENT_QUOTES, 'UTF-8');
}
?>
</body>
</html>
