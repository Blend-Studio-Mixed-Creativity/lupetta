const PROFILES = ['Lorem Ipsum #001', 'Dolor Sit #002', 'Amet Consectetur #003'];

export default function ProfiliSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-left">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Profili</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Creazione e Gestione<br /><span className="montserrat-italic text-[#006473]">Profili</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.
          </p>
          <div className="space-y-4">
            <h3 className="text-lg text-slate-800">Inserimento Dati e Condizioni</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est.
            </p>
            <h3 className="text-lg text-slate-800 mt-6">Aggiornamenti Stato di Crescita</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.
            </p>
          </div>
        </div>
        <div className="animate-slide-right">
          <div className="bg-white rounded-3xl p-8 border border-slate-100">
            <div className="space-y-4">
              {PROFILES.map((profile, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">{profile}</div>
                    <div className="text-xs text-slate-400">Lorem ipsum • 45 kg • Activ</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
