const STEPS = [
  { step: '1', label: 'Lorem ipsum preparatio' },
  { step: '2', label: 'Dolor sit montaggio structurale' },
  { step: '3', label: 'Consectetur integrazione sistema' },
  { step: '4', label: 'Adipiscing verificatio finalis' },
];

export default function MontaggioSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Installazione</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Montaggio e Configurazione <span className="montserrat-italic text-[#006473]">Strutturale</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
            </p>
            <h3 className="text-lg text-slate-800">Stabilità e Sicurezza Strutturale</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
            <h3 className="text-lg text-slate-800">Procedure di Montaggio</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor.
            </p>
          </div>
          <div className="animate-slide-right">
            <div className="bg-white rounded-3xl p-10 border border-slate-100">
              <div className="space-y-5">
                {STEPS.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
                    <span className="w-10 h-10 bg-[#006473] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</span>
                    <span className="text-slate-700 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
