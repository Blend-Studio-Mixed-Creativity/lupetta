import heroImg from '../assets/images/vitello.jpg';

export default function Gabbione() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#006473]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/30 text-white text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            Gabbione
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Soluzioni di contenimento:<br />
            <span className="text-[#62bc46]">gabbioni integrato per il movimento</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
        </div>
      </section>

      {/* ═══ TIPOLOGIE DI GABBIONI ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        <div className="text-center mb-14 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Tipologie</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Tipologie di Gabbioni <span className="montserrat-italic text-[#006473]">Disponibili</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔲",
              title: "Gabbione Standard",
              subtitle: "Rete Metallica",
              desc: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
              features: ["Lorem ipsum dolor sit", "Consectetur adipiscing", "Pellentesque habitant"],
            },
            {
              icon: "🛡️",
              title: "Gabbione Rinforzato",
              subtitle: "Antiscivolo e Antiossidante",
              desc: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
              features: ["Donec eu libero sit", "Aenean ultricies mi", "Mauris placerat eleifend"],
            },
            {
              icon: "🏃",
              title: "Gabbione con Accessori",
              subtitle: "Stimolazione Motoria",
              desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.",
              features: ["Quisque sit amet est", "Vestibulum erat wisi", "Condimentum sed commodo"],
            },
          ].map((gab, i) => (
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

      {/* ═══ MONTAGGIO E INTEGRAZIONE ═══ */}
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
                  {[
                    { step: "1", label: "Lorem ipsum preparatio" },
                    { step: "2", label: "Dolor sit montaggio structurale" },
                    { step: "3", label: "Consectetur integrazione sistema" },
                    { step: "4", label: "Adipiscing verificatio finalis" },
                  ].map((s, i) => (
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

      {/* ═══ NORMATIVE E SICUREZZA ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Normative</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Normative di Sicurezza e <span className="montserrat-italic text-[#006473]">Benessere</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📋", title: "Requisiti di Sicurezza", subtitle: "Apparecchiature Agricole", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet." },
            { icon: "🐄", title: "Norme Benessere Animale", subtitle: "Allevamenti", desc: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit." },
            { icon: "🌱", title: "Impatto Ambientale", subtitle: "Alimentazione Sostenibile", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam." },
          ].map((norm, i) => (
            <div key={i} className={`p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#006473]/20 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
              <span className="text-3xl block mb-3">{norm.icon}</span>
              <span className="text-xs font-bold text-[#006473] tracking-widest uppercase">{norm.subtitle}</span>
              <h3 className="text-xl text-slate-900 mt-1 mb-3">{norm.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{norm.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#006473] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-scale-in">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Lorem Ipsum <span className="montserrat-italic">Dolor?</span>
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <button className="px-8 py-4 bg-[#62bc46] text-white font-bold rounded-2xl hover:bg-[#52a83d] transition-all shadow-xl text-lg">
            Lorem Ipsum &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}

