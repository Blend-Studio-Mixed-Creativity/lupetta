export default function LupettaMaxi() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_-10%,rgba(99,102,241,0.3),transparent)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-2 px-5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
              MAXI Tech
            </span>
            <h1 className="text-5xl md:text-6xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
              Specifiche Tecniche<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Versione MAXI</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed animate-slide-up animate-stagger-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CAPACITÀ DI ALIMENTAZIONE E DURATA OPERATIVA ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Sezione 1</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Capacità di Alimentazione e <span className="montserrat-italic text-blue-600">Durata Operativa</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed.
            </p>
          </div>
          <div className="animate-slide-right">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl text-slate-900 mb-6">Specifiche Tecniche</h3>
              <div className="space-y-4">
                {[
                  { label: "Lorem Capacitas", value: "200 L" },
                  { label: "Dolor Autonomia", value: "72h" },
                  { label: "Ipsum Potentia", value: "1.5 kW" },
                  { label: "Amet Capacitas", value: "6 - 12 lorem" },
                  { label: "Consectetur Pressio", value: "2.5 bar" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-slate-100 last:border-0">
                    <span className="text-slate-500">{spec.label}</span>
                    <span className="font-bold text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECNOLOGIE AVANZATE DI MONITORAGGIO E SICUREZZA ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14 animate-slide-up">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Sezione 2</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
              Tecnologie Avanzate di <span className="montserrat-italic text-blue-600">Monitoraggio e Sicurezza</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📡", title: "Lorem Sensorem", desc: "Vestibulum tortor quam feugiat vitae ultricies." },
              { icon: "🎥", title: "Ipsum Visio", desc: "Donec eu libero sit amet quam egestas semper." },
              { icon: "🌡️", title: "Dolor Temperatura", desc: "Aenean ultricies mi vitae est mauris placerat." },
              { icon: "🔐", title: "Amet Securitas", desc: "Pellentesque habitant morbi tristique senectus." },
            ].map((item, i) => (
              <div key={i} className={`text-center p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all card-hover animate-scale-in animate-stagger-${i + 1}`}>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPATIBILITÀ GABBIONI E MODULI ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-left">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Lorem Modulus A", color: "blue" },
                { label: "Ipsum Modulus B", color: "indigo" },
                { label: "Dolor Modulus C", color: "purple" },
                { label: "Amet Modulus D", color: "violet" },
              ].map((mod, i) => (
                <div key={i} className={`bg-${mod.color}-50 border border-${mod.color}-100 p-6 rounded-2xl text-center animate-scale-in animate-stagger-${i + 1}`}>
                  <div className={`text-${mod.color}-600 font-bold text-lg mb-1`}>{mod.label}</div>
                  <p className="text-slate-500 text-xs">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-slide-right">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Sezione 3</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Compatibilità con Gabbioni e <span className="montserrat-italic text-blue-600">Moduli Aggiuntivi</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ VANTAGGI ESCLUSIVI ═══ */}
      <section className="bg-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 animate-slide-up">
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Lorem <span className="montserrat-italic text-blue-400">Ipsum Dolor</span> Sit Amet
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Lorem Enterprise Scalabilitas", desc: "Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero sit amet quam egestas semper aenean." },
              { title: "Ipsum Automaticus Processus", desc: "Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra vestibulum." },
              { title: "Dolor Integratio Completus", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam." },
              { title: "Amet Supportus Dedicatus", desc: "Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit." },
            ].map((adv, i) => (
              <div key={i} className={`glass-dark p-8 rounded-2xl animate-slide-up animate-stagger-${i + 1}`}>
                <h3 className="text-xl mb-3 text-blue-300">{adv.title}</h3>
                <p className="text-slate-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

