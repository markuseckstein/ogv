<?php

declare(strict_types=1);

session_start();

// Konfiguration laden (zwei Ebenen über public_html/admin/)
$configPath = __DIR__ . '/../../ogv_config.php';
if (!file_exists($configPath)) {
    die('Konfigurationsdatei nicht gefunden. Bitte ogv_config.php einrichten.');
}
require $configPath;

// --- Datenbank öffnen ---

function openDb(): PDO
{
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
    return $db;
}

// --- Login / Logout ---

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $action = $_POST['action'];

    if ($action === 'login') {
        if (isset($_POST['passwort']) && hash_equals(ADMIN_PASSWORD, (string)$_POST['passwort'])) {
            session_regenerate_id(true);
            $_SESSION['admin_auth'] = true;
        }
        header('Location: /admin/');
        exit;
    }

    if ($action === 'logout') {
        session_destroy();
        header('Location: /admin/');
        exit;
    }

    // Anfrage aktualisieren (nur wenn eingeloggt)
    if ($action === 'update_anfrage' && !empty($_SESSION['admin_auth'])) {
        $id     = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
        $status = (string)($_POST['status'] ?? '');
        $termin = trim((string)($_POST['vereinbarter_termin'] ?? ''));
        $notiz  = trim((string)($_POST['bemerkung'] ?? ''));

        $erlaubteStatus = ['offen', 'kontaktiert', 'Termin vereinbart'];

        if ($id && in_array($status, $erlaubteStatus, true)) {
            $db = openDb();
            $stmt = $db->prepare(
                "UPDATE anfragen
                    SET status = ?, vereinbarter_termin = ?, bemerkung = ?
                  WHERE id = ?"
            );
            $stmt->execute([$status, $termin ?: null, $notiz ?: null, $id]);
        }

        // PRG – Filter aus GET beibehalten
        $qs = http_build_query(array_filter([
            'filter_status' => $_POST['filter_status'] ?? '',
            'filter_termin' => $_POST['filter_termin'] ?? '',
        ]));
        header('Location: /admin/' . ($qs ? '?' . $qs : ''));
        exit;
    }
}

// --- Login-Prüfung ---

$eingeloggt = !empty($_SESSION['admin_auth']);

// --- Helfer ---

function h(mixed $val): string
{
    return htmlspecialchars((string)($val ?? ''), ENT_QUOTES, 'UTF-8');
}

function statusBadge(string $status): string
{
    $klassen = [
        'offen'              => 'badge-offen',
        'kontaktiert'        => 'badge-kontaktiert',
        'Termin vereinbart'  => 'badge-termin',
    ];
    $k = $klassen[$status] ?? 'badge-offen';
    return '<span class="badge ' . $k . '">' . h($status) . '</span>';
}

// --- Daten laden (nur wenn eingeloggt) ---

$anfragen      = [];
$filterStatus  = '';
$filterTermin  = '';

if ($eingeloggt) {
    $db           = openDb($dbPath);
    $filterStatus = trim((string)($_GET['filter_status'] ?? ''));
    $filterTermin = trim((string)($_GET['filter_termin'] ?? ''));

    $where  = [];
    $params = [];

    if ($filterStatus !== '') {
        $where[]  = 'status = ?';
        $params[] = $filterStatus;
    }
    if ($filterTermin !== '') {
        $where[]  = "vereinbarter_termin LIKE ?";
        $params[] = '%' . $filterTermin . '%';
    }

    $sql = "SELECT * FROM anfragen";
    if ($where) {
        $sql .= " WHERE " . implode(" AND ", $where);
    }
    $sql .= " ORDER BY created_at DESC";

    $stmt     = $db->prepare($sql);
    $stmt->execute($params);
    $anfragen = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

?><!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin – Mostanfragen</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }

    body {
      font-family: Arial, sans-serif;
      font-size: 14px;
      margin: 0;
      padding: 16px;
      background: #f5f5f5;
      color: #222;
    }

    h1 { margin-top: 0; font-size: 1.4rem; }

    /* Login */
    .login-box {
      max-width: 340px;
      margin: 80px auto;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 6px;
      padding: 32px;
    }
    .login-box h1 { text-align: center; }
    .login-box label { display: block; margin-bottom: 4px; }
    .login-box input[type=password] {
      width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;
      margin-bottom: 12px;
    }
    .btn {
      display: inline-block;
      padding: 8px 16px;
      background: #4a7c35;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      font-size: 13px;
    }
    .btn:hover { background: #3a6228; }
    .btn-secondary { background: #666; }
    .btn-secondary:hover { background: #444; }
    .btn-small { padding: 4px 10px; font-size: 12px; }

    /* Toolbar */
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-end;
      margin-bottom: 16px;
      background: #fff;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
    }
    .toolbar label { font-size: 12px; color: #555; display: block; margin-bottom: 3px; }
    .toolbar select, .toolbar input[type=text] {
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 13px;
    }
    .toolbar .spacer { flex: 1; }

    /* Tabelle */
    .table-wrap { overflow-x: auto; }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      font-size: 13px;
    }
    th {
      background: #4a7c35;
      color: #fff;
      text-align: left;
      padding: 8px 6px;
      white-space: nowrap;
    }
    td {
      padding: 6px;
      border-bottom: 1px solid #e0e0e0;
      vertical-align: top;
    }
    tr:nth-child(even) td { background: #fafafa; }
    tr:hover td { background: #f0f7ec; }

    /* Badges */
    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: bold;
      white-space: nowrap;
    }
    .badge-offen       { background: #fff3cd; color: #856404; }
    .badge-kontaktiert { background: #cce5ff; color: #004085; }
    .badge-termin      { background: #d4edda; color: #155724; }

    /* Inline-Editierformular */
    .edit-form { display: flex; flex-direction: column; gap: 4px; }
    .edit-form select,
    .edit-form input[type=text] {
      padding: 4px 6px;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 12px;
      width: 100%;
      min-width: 130px;
    }
    .edit-form .row { display: flex; gap: 4px; align-items: center; }
    .edit-form label { font-size: 11px; color: #666; white-space: nowrap; }

    /* Druck */
    @media print {
      body { background: #fff; padding: 0; font-size: 11pt; }
      .no-print { display: none !important; }
      table { font-size: 9pt; }
      th { background: #ddd !important; color: #000 !important; }
      .badge { border: 1px solid #999; background: none !important; color: #000 !important; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>

<?php if (!$eingeloggt): ?>

  <div class="login-box">
    <h1>Admin-Login</h1>
    <form method="post">
      <input type="hidden" name="action" value="login">
      <label for="passwort">Passwort</label>
      <input type="password" id="passwort" name="passwort" autofocus required>
      <button type="submit" class="btn" style="width:100%">Einloggen</button>
    </form>
  </div>

<?php else: ?>

  <h1>Mostanfragen</h1>

  <!-- Toolbar -->
  <div class="toolbar no-print">
    <form method="get" style="display:contents">
      <div>
        <label for="f_status">Status-Filter</label>
        <select id="f_status" name="filter_status" onchange="this.form.submit()">
          <option value="" <?= $filterStatus === '' ? 'selected' : '' ?>>Alle</option>
          <option value="offen"             <?= $filterStatus === 'offen'             ? 'selected' : '' ?>>offen</option>
          <option value="kontaktiert"       <?= $filterStatus === 'kontaktiert'       ? 'selected' : '' ?>>kontaktiert</option>
          <option value="Termin vereinbart" <?= $filterStatus === 'Termin vereinbart' ? 'selected' : '' ?>>Termin vereinbart</option>
        </select>
      </div>
      <div>
        <label for="f_termin">Termin enthält</label>
        <input type="text" id="f_termin" name="filter_termin"
               value="<?= h($filterTermin) ?>" placeholder="z.B. 06.09.">
      </div>
      <button type="submit" class="btn btn-small">Filtern</button>
      <a href="/admin/" class="btn btn-small btn-secondary">Zurücksetzen</a>
    </form>

    <div class="spacer"></div>

    <button onclick="window.print()" class="btn btn-small btn-secondary">Drucken</button>

    <form method="post" style="margin:0">
      <input type="hidden" name="action" value="logout">
      <button type="submit" class="btn btn-small btn-secondary">Abmelden</button>
    </form>
  </div>

  <!-- Anzahl -->
  <p style="margin-bottom:8px; color:#555;">
    <?= count($anfragen) ?> Anfrage<?= count($anfragen) !== 1 ? 'n' : '' ?>
    <?= ($filterStatus || $filterTermin) ? ' (gefiltert)' : '' ?>
  </p>

  <!-- Tabelle -->
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Eingang</th>
          <th>Name</th>
          <th>Telefon</th>
          <th>E-Mail</th>
          <th>Tag</th>
          <th>Zeit</th>
          <th>Zentner</th>
          <th>Mosttyp</th>
          <th>Abfüllung</th>
          <th>Bemerkung</th>
          <th class="no-print">Termin / Status</th>
          <th class="print-only" style="display:none">Termin</th>
          <th class="print-only" style="display:none">Status</th>
        </tr>
      </thead>
      <tbody>
        <?php if (empty($anfragen)): ?>
          <tr><td colspan="12" style="text-align:center; padding:20px; color:#888;">
            Keine Anfragen vorhanden.
          </td></tr>
        <?php else: ?>
          <?php foreach ($anfragen as $a): ?>
            <?php
              $filterQs = http_build_query(array_filter([
                'filter_status' => $filterStatus,
                'filter_termin' => $filterTermin,
              ]));
            ?>
            <tr>
              <td><?= h($a['id']) ?></td>
              <td style="white-space:nowrap"><?= h($a['created_at']) ?></td>
              <td style="white-space:nowrap">
                <strong><?= h($a['vorname']) ?> <?= h($a['nachname']) ?></strong>
              </td>
              <td style="white-space:nowrap"><?= h($a['telefon']) ?></td>
              <td><?= h($a['email']) ?></td>
              <td><?= h($a['gewuenschter_tag']) ?></td>
              <td><?= h($a['praeferierte_zeit']) ?></td>
              <td style="text-align:center"><?= h($a['menge_zentner']) ?></td>
              <td><?= h($a['mosttyp']) ?></td>
              <td><?= h($a['abfuellung']) ?></td>
              <td><?= h($a['bemerkung']) ?></td>

              <!-- Inline-Edit (nur Bildschirm) -->
              <td class="no-print">
                <form method="post" class="edit-form">
                  <input type="hidden" name="action" value="update_anfrage">
                  <input type="hidden" name="id" value="<?= h($a['id']) ?>">
                  <input type="hidden" name="filter_status" value="<?= h($filterStatus) ?>">
                  <input type="hidden" name="filter_termin" value="<?= h($filterTermin) ?>">

                  <div class="row">
                    <label>Status</label>
                    <select name="status">
                      <?php foreach (['offen', 'kontaktiert', 'Termin vereinbart'] as $s): ?>
                        <option value="<?= h($s) ?>" <?= $a['status'] === $s ? 'selected' : '' ?>>
                          <?= h($s) ?>
                        </option>
                      <?php endforeach; ?>
                    </select>
                  </div>

                  <div class="row">
                    <label>Termin</label>
                    <input type="text" name="vereinbarter_termin"
                           value="<?= h($a['vereinbarter_termin']) ?>"
                           placeholder="z.B. 06.09.2025 09:00">
                  </div>

                  <div class="row">
                    <label>Notiz</label>
                    <input type="text" name="bemerkung"
                           value="<?= h($a['bemerkung']) ?>">
                  </div>

                  <button type="submit" class="btn btn-small">Speichern</button>
                </form>
              </td>

              <!-- Druckansicht: Termin + Status als Text -->
              <td class="print-only" style="display:none"><?= h($a['vereinbarter_termin']) ?></td>
              <td class="print-only" style="display:none"><?= statusBadge($a['status']) ?></td>
            </tr>
          <?php endforeach; ?>
        <?php endif; ?>
      </tbody>
    </table>
  </div>

<?php endif; ?>

<!-- Druckoptimierung: print-only-Spalten einblenden, no-print ausblenden -->
<script>
  (function () {
    var style = document.createElement('style');
    style.media = 'print';
    style.textContent = '.print-only { display: table-cell !important; }';
    document.head.appendChild(style);
  })();
</script>

</body>
</html>
