import CtaFinale from '../components/sections/Home/CtaFinale';

export default function Risorse() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-8 sm:mb-12 tracking-tight text-center">
          Risorse
        </h1>
        <div className="grid gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Procedura di installazione base nelle gabbie aziendali',
            'Controlli pre-installazione e preparazione dell’ambiente',
            'Collegamento elettrico e connessione al portale web',
            'Manutenzione periodica: pulizia e controllo dei componenti',
            'Pulizia dei raccoglitori, tubi ed erogatori di latte',
            'Verifica dei sensori e moduli di comunicazione',
            'Risoluzione problemi e supporto tecnico avanzato',
            'Analisi errori comuni e codici di allarme',
            'Sostituzione parti e componenti usurati',
            'Aggiornamenti firmware e software portale'
          ].map((title, i) => (
            <div key={i} className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 leading-snug">{title}</h2>
            </div>
          ))}
        </div>
      </div>
      <CtaFinale />
    </div>
  );
}


