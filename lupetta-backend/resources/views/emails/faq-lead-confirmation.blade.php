<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abbiamo ricevuto la tua richiesta</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: #1a1a2e; padding: 32px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px; }
        .body { padding: 32px; }
        .body p { color: #444; line-height: 1.6; }
        .body .highlight { font-weight: bold; color: #1a1a2e; }
        .footer { background: #f9f9f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e8e8e8; }
        .footer p { font-size: 12px; color: #999; margin: 0; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1>Richiesta Ricevuta</h1>
        </div>
        <div class="body">
            <p>Ciao <span class="highlight">{{ $lead->nome }}</span>,</p>
            <p>
                grazie per averci contattato! Abbiamo ricevuto correttamente la tua richiesta e ti risponderemo
                il prima possibile all'indirizzo <span class="highlight">{{ $lead->email }}</span>.
            </p>
            <p>Se nel frattempo hai ulteriori domande, non esitare a scriverci.</p>
            <p>A presto,<br><strong>Il team</strong></p>
        </div>
        <div class="footer">
            <p>Questo messaggio è stato generato automaticamente. Non rispondere a questa email.</p>
        </div>
    </div>
</body>
</html>
