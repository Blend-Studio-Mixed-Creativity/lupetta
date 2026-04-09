export default function Consumabile() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-orange-950 via-amber-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-20%,rgba(245,158,11,0.25),transparent)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            Consumabile
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Approfondimento sulla<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Linea Latte</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.
          </p>
        </div>
      </section>

      {/* ═══ PANORAMICA PRODOTTI ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🥛",
              title: "Lorem Lacteum Premium",
              desc: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
              specs: ["Lorem 26% ipsum", "Dolor 18% sit", "Amet 0.5% consectetur"],
            },
            {
              icon: "🧪",
              title: "Ipsum Integratum Plus",
              desc: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
              specs: ["Lorem vitamine A-D-E", "Dolor minerali essent.", "Amet probiotici select."],
            },
            {
              icon: "💊",
              title: "Dolor Supplementum",
              desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.",
              specs: ["Lorem elettroliti", "Dolor aminoacidi", "Amet antiossidanti"],
            },
          ].map((prod, i) => (
            <div key={i} className={`bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden card-hover animate-slide-up animate-stagger-${i + 1}`}>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center">
                <span className="text-5xl block mb-3">{prod.icon}</span>
                <h3 className="text-2xl text-slate-900">{prod.title}</h3>
              </div>
              <div className="p-8">
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{prod.desc}</p>
                <ul className="space-y-2">
                  {prod.specs.map((s, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ COMPOSIZIONE E NUTRIZIONE ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left">
              <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Composizione</span>
              <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
                Valori Nutrizionali e <span className="montserrat-italic text-amber-600">Composizione</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est et sapien.
              </p>
            </div>
            <div className="animate-slide-right">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-xl text-slate-900 mb-6">Tabella Nutrizionale</h3>
                <div className="space-y-4">
                  {[
                    { label: "Lorem Proteine", value: "26%", width: "85%" },
                    { label: "Ipsum Grassi", value: "18%", width: "60%" },
                    { label: "Dolor Fibre", value: "0.5%", width: "15%" },
                    { label: "Amet Ceneri", value: "7%", width: "25%" },
                    { label: "Consectetur Umidità", value: "3.5%", width: "12%" },
                  ].map((row, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600">{row.label}</span>
                        <span className="font-bold text-amber-700">{row.value}</span>
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" style={{ width: row.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PREPARAZIONE E DOSAGGIO ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14 animate-slide-up">
          <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Dosaggio</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Preparazione e <span className="montserrat-italic text-amber-600">Dosaggio Consigliato</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Temperatura Lorem", desc: "Vestibulum tortor quam feugiat vitae." },
            { step: "02", title: "Diluizione Ipsum", desc: "Donec eu libero sit amet quam egestas." },
            { step: "03", title: "Miscelazione Dolor", desc: "Aenean ultricies mi vitae est mauris." },
            { step: "04", title: "Somministrazione Amet", desc: "Pellentesque habitant morbi tristique." },
          ].map((item, i) => (
            <div key={i} className={`relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-amber-200 hover:shadow-lg transition-all animate-slide-up animate-stagger-${i + 1} group`}>
              <span className="text-5xl font-extrabold text-amber-100 group-hover:text-amber-200 transition-colors absolute top-4 right-6 montserrat-heading">{item.step}</span>
              <div className="relative z-10 mt-6">
                <h3 className="text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CONSERVAZIONE E STOCCAGGIO ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14 animate-slide-up">
            <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Conservazione</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
              Stoccaggio e <span className="montserrat-italic text-amber-600">Conservazione</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🌡️", title: "Temperatura di Conservazione", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet." },
              { icon: "📦", title: "Condizioni di Stoccaggio", desc: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet." },
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

