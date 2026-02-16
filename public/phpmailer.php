<?php

declare(strict_types=1);

/**
 * SimpleSMTP – Minimaler SMTP-Mailer für PHP 8
 * Unterstützt STARTTLS (Port 587) mit AUTH LOGIN.
 */
class SimpleSMTP
{
    private string $host;
    private int $port;
    private string $username;
    private string $password;

    /** @var resource|null */
    private $socket = null;

    public function __construct(string $host, int $port, string $username, string $password)
    {
        $this->host     = $host;
        $this->port     = $port;
        $this->username = $username;
        $this->password = $password;
    }

    private function readResponse(): string
    {
        $response = '';
        while ($line = fgets($this->socket, 515)) {
            $response .= $line;
            // Continuation lines have a dash after the code; final line has a space
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return $response;
    }

    private function sendCmd(string $command): string
    {
        fwrite($this->socket, $command . "\r\n");
        return $this->readResponse();
    }

    private function expect(string $response, string $code): void
    {
        if (!str_starts_with($response, $code)) {
            throw new RuntimeException("SMTP-Fehler: " . trim($response));
        }
    }

    /**
     * Sendet eine E-Mail via STARTTLS / AUTH LOGIN.
     *
     * @throws RuntimeException bei Verbindungs- oder Protokollfehlern
     */
    public function send(string $from, string $to, string $subject, string $body): void
    {
        // 1. Verbindung aufbauen
        $this->socket = fsockopen($this->host, $this->port, $errno, $errstr, 15);
        if ($this->socket === false) {
            throw new RuntimeException("SMTP-Verbindung fehlgeschlagen: $errstr ($errno)");
        }
        stream_set_timeout($this->socket, 15);

        // 2. Begrüßung lesen
        $this->expect($this->readResponse(), '220');

        // 3. EHLO
        $hostname = gethostname() ?: 'localhost';
        $this->expect($this->sendCmd("EHLO $hostname"), '250');

        // 4. STARTTLS aktivieren
        $this->expect($this->sendCmd("STARTTLS"), '220');

        // 5. TLS-Handshake
        $crypto = STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
        if (!stream_socket_enable_crypto($this->socket, true, $crypto)) {
            throw new RuntimeException("TLS-Handshake fehlgeschlagen");
        }

        // 6. EHLO nach TLS erneut senden
        $this->expect($this->sendCmd("EHLO $hostname"), '250');

        // 7. AUTH LOGIN
        $this->expect($this->sendCmd("AUTH LOGIN"), '334');
        $this->expect($this->sendCmd(base64_encode($this->username)), '334');
        $this->expect($this->sendCmd(base64_encode($this->password)), '235');

        // 8. Envelope
        $this->expect($this->sendCmd("MAIL FROM:<$from>"), '250');
        $this->expect($this->sendCmd("RCPT TO:<$to>"), '250');

        // 9. DATA
        $this->expect($this->sendCmd("DATA"), '354');

        // 10. Nachricht aufbauen (base64-kodiert für sicheres UTF-8)
        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $encodedBody    = chunk_split(base64_encode($body));

        $message  = "From: <$from>\r\n";
        $message .= "To: <$to>\r\n";
        $message .= "Subject: $encodedSubject\r\n";
        $message .= "MIME-Version: 1.0\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "\r\n";
        $message .= $encodedBody;

        // Dot-Stuffing: einzelne Punkte am Zeilenanfang verdoppeln
        $message = str_replace("\r\n.", "\r\n..", $message);

        fwrite($this->socket, $message . "\r\n.\r\n");
        $this->expect($this->readResponse(), '250');

        // 11. Verbindung beenden
        $this->sendCmd("QUIT");
        fclose($this->socket);
        $this->socket = null;
    }

    public function __destruct()
    {
        if ($this->socket) {
            fclose($this->socket);
        }
    }
}
