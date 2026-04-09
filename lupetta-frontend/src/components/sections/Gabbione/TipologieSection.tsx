const GABBIONI = [
  { icon: '🔲', title: 'Gabbione Standard', subtitle: 'Rete Metallica', desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.', features: ['Lorem ipsum dolor sit', 'Consectetur adipiscing', 'Pellentesque habitant'] },
  { icon: '🛡️', title: 'Gabbione Rinforzato', subtitle: 'Antiscivolo e Antiossidante', desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.', features: ['Donec eu libero sit', 'Aenean ultricies mi', 'Mauris placerat eleifend'] },
  { icon: '🏃', title: 'Gabbione con Accessori', subtitle: 'Stimolazione Motoria', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.', features: ['Quisque sit amet est', 'Vestibulum erat wisi', 'Condimentum sed commodo'] },
];

export default function TipologieSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
      <div className="text-center mb-14 animate-slide-up">
        <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Tipologie</span>
        <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
          Tipologie di Gabbioni <span className="montserrat-italic text-[#006473]">Disponibili</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {GABBIONI.map((gab, i) => (
          <div key={i} className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden card-hover animate-slide-up animate-stagger-${i + 1}`}>
            <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 p-8">
              <span className="text-4xl block mb-3">{gab.icon}</span>
              <span className="text-xs font-bold text-[#006473] tracking-widest uppercase">{gab.subtitle}</span>
              <h3 className="text-2xl text-slate-900 mt-1">{gab.title}</h3>
            </div>
            <div className="p-8 pt-0 mt-4">
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{gab.desc}</p>
              <ul className="space-y-2">
                {gab.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006473]" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
