export default function Risorse() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 tracking-tight text-center">
          Risorse
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Procedura di Installazione Base nelle Gabbie Aziendali',
            'Controlli Pre-Installazione e Preparazione dell’Ambiente',
            'Collegamento Elettrico e Connessione al Portale Web',
            'Manutenzione Periodica: Pulizia e Controllo dei Componenti',
            'Pulizia dei Raccoglitori, Tubi ed erogatori di Latte',
            'Verifica dei Sensori e Moduli di Comunicazione',
            'Risoluzione Problemi e Supporto Tecnico Avanzato',
            'Analisi Errori Comune e Codici di Allarme',
            'Sostituzione Parti e Componenti Usurati',
            'Aggiornamenti Firmware e Software Portale'
          ].map((title, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


