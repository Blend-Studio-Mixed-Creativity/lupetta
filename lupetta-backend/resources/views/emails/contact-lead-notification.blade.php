<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuovo messaggio dal form di contatto</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: #1a1a2e; padding: 32px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px; }
        .header .badge { display: inline-block; margin-top: 10px; padding: 4px 14px; background: #65b32e; border-radius: 20px; color: #fff; font-size: 12px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; }
        .body { padding: 32px; }
        .body p { color: #444; line-height: 1.6; margin-top: 0; }
        .info-table { width: 100%; border-collapse: collapse; margin-top: 24px; }
        .info-table td { padding: 12px 16px; border-bottom: 1px solid #e8e8e8; color: #333; vertical-align: top; }
        .info-table td:first-child { font-weight: bold; width: 30%; color: #555; white-space: nowrap; }
        .messaggio-box { background: #f8fafc; border-left: 4px solid #006071; padding: 16px 20px; border-radius: 0 8px 8px 0; color: #334155; line-height: 1.7; margin-top: 4px; white-space: pre-wrap; }
        .footer { background: #f9f9f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e8e8e8; }
        .footer p { font-size: 12px; color: #999; margin: 0; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1>Nuovo Messaggio Ricevuto</h1>
            <span class="badge">Form di Contatto</span>
        </div>
        <div class="body">
            <p>È stato ricevuto un nuovo messaggio tramite il form di contatto. Ecco i dettagli:</p>
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
                @if($lead->telefono)
                <tr>
                    <td>Telefono</td>
                    <td><a href="tel:{{ $lead->telefono }}">{{ $lead->telefono }}</a></td>
                </tr>
                @endif
                <tr>
                    <td>Data</td>
                    <td>{{ $lead->created_at->format('d/m/Y H:i') }}</td>
                </tr>
                <tr>
                    <td>Messaggio</td>
                    <td><div class="messaggio-box">{{ $lead->messaggio }}</div></td>
                </tr>
            </table>
        </div>
        <div class="footer">
            <p>Questo messaggio è stato generato automaticamente dal sistema.</p>
        </div>
    </div>
</body>
</html>
