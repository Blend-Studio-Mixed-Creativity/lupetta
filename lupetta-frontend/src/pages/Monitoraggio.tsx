import heroImg from '../assets/images/allevamento-lupetta.jpg';

export default function Monitoraggio() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#006473]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/30 text-white text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            Monitoraggio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Sistema di alimentazione remota<br />
            <span className="text-[#62bc46]">via portale web Lupetta</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
        </div>
      </section>

      {/* ═══ DASHBOARD OVERVIEW ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "📊", value: "Lorem", label: "Dashboard Realtime" },
            { icon: "🔔", value: "Ipsum", label: "Notifiche Smart" },
            { icon: "📱", value: "Dolor", label: "Accesso Mobile" },
            { icon: "🔒", value: "Amet", label: "Sicurezza Dati" },
          ].map((stat, i) => (
            <div key={i} className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center card-hover animate-scale-in animate-stagger-${i + 1}`}>
              <span className="text-3xl block mb-2">{stat.icon}</span>
              <div className="text-lg font-bold text-slate-900">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CREAZIONE E GESTIONE PROFILI VITELLO ═══ */}
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
                {["Lorem Ipsum #001", "Dolor Sit #002", "Amet Consectetur #003"].map((profile, i) => (
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

      {/* ═══ PROGRAMMAZIONE ORARIA E QUANTITÀ ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14 animate-slide-up">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Programmazione</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
              Programmazione della <span className="montserrat-italic text-[#006473]">Somministrazione</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⏰", title: "Impostazione Frequenza", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget." },
              { icon: "📈", title: "Gestione Quantità e Incrementi", desc: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend." },
              { icon: "🎯", title: "Limiti Massimi Personalizzabili", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:border-[#006473]/20 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MONITORAGGIO IN TEMPO REALE ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-left">
            <div className="bg-[#006473] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#62bc46]/10 rounded-full blur-3xl" />
              <h3 className="text-xl mb-6 text-[#62bc46]">Dashboard Live</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Lorem Consumptio", value: "4.2 L", pct: "84%" },
                  { label: "Ipsum Frequentia", value: "6x", pct: "100%" },
                  { label: "Dolor Temperatura", value: "38.2°C", pct: "96%" },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white">{row.label}</span>
                      <span className="text-[#62bc46] font-bold">{row.value}</span>
                    </div>
                    <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-[#62bc46] rounded-full" style={{ width: row.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-slide-right">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Real-Time</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Monitoraggio in Tempo Reale della <span className="montserrat-italic text-[#006473]">Somministrazione</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
            </p>

            <h3 className="text-lg text-slate-800">Visualizzazione Consumi</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-4">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend.
            </p>

            <h3 className="text-lg text-slate-800">Comportamenti Alimentari</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero sit amet quam.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#006473] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-scale-in">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Lorem Ipsum <span className="montserrat-italic">Dolor Sit?</span>
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum.
          </p>
          <button className="px-8 py-4 bg-[#62bc46] text-white font-bold rounded-2xl hover:bg-[#52a83d] transition-all shadow-xl text-lg">
            Lorem Ipsum &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}

