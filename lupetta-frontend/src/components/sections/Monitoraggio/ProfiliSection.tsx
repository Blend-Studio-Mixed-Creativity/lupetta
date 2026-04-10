import TiltCard3D from '../../ui/TiltCard3D';

const PROFILES = ['Lorem Ipsum #001', 'Dolor Sit #002', 'Amet Consectetur #003'];

export default function ProfiliSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <div className="animate-slide-left">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Profili</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-8">
            Creazione e Gestione<br /><span className="montserrat-italic text-[#006071]">Profili</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.
          </p>
          <div className="space-y-5">
            <h3 className="text-xl text-slate-800">Inserimento Dati e Condizioni</h3>
            <p className="text-slate-500 leading-relaxed">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est.
            </p>
            <h3 className="text-xl text-slate-800 mt-8">Aggiornamenti Stato di Crescita</h3>
            <p className="text-slate-500 leading-relaxed">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.
            </p>
          </div>
        </div>
        <div className="animate-slide-right">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100">
            <div className="space-y-5">
              {PROFILES.map((profile, i) => (
                <TiltCard3D key={i} className="bg-white p-5 sm:p-6 rounded-xl shadow-sm flex items-center justify-between" maxAngle={6}>
                  <div>
                    <div className="font-bold text-lg text-slate-900">{profile}</div>
                    <div className="text-sm text-slate-400">Lorem ipsum • 45 kg • Activ</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse-glow" />
                </TiltCard3D>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







