<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuovo lead FAQ</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: #1a1a2e; padding: 32px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px; }
        .body { padding: 32px; }
        .body p { color: #444; line-height: 1.6; margin-top: 0; }
        .info-table { width: 100%; border-collapse: collapse; margin-top: 24px; }
        .info-table td { padding: 12px 16px; border-bottom: 1px solid #e8e8e8; color: #333; }
        .info-table td:first-child { font-weight: bold; width: 30%; color: #555; }
        .footer { background: #f9f9f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e8e8e8; }
        .footer p { font-size: 12px; color: #999; margin: 0; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1>Nuovo Lead FAQ Ricevuto</h1>
        </div>
        <div class="body">
            <p>È stato ricevuto un nuovo contatto tramite il modulo FAQ. Ecco i dettagli:</p>
            <table class="info-table">
                <tr>
                    <td>Nome</td>
                    <td>{{ $lead->nome }}</td>
                </tr>
                <tr>
                    <td>Cognome</td>
                    <td>{{ $lead->cognome }}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><a href="mailto:{{ $lead->email }}">{{ $lead->email }}</a></td>
                </tr>
                <tr>
                    <td>Data</td>
                    <td>{{ $lead->created_at->format('d/m/Y H:i') }}</td>
                </tr>
            </table>
        </div>
        <div class="footer">
            <p>Questo messaggio è stato generato automaticamente dal sistema.</p>
        </div>
    </div>
</body>
</html>
