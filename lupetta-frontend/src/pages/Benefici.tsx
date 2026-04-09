import heroImg from '../assets/images/allattamento2-lupetta.webp';

export default function Benefici() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#006473]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/40 text-[#62bc46] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            Benefici
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Benefici dell&apos;Allattamento<br />
            <span className="text-[#62bc46]">Regolare e Automatico per Vitelli</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.
          </p>
        </div>
      </section>

      {/* ═══ EFFETTI SULLA NUTRIZIONE ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        <div className="text-center mb-14 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Nutrizione</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Effetti della Nutrizione Programmata sul <span className="montserrat-italic text-[#006473]">Benessere e Crescita</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "📈", title: "Incremento del Peso e Sviluppo Muscolare", desc: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper." },
            { icon: "🛡️", title: "Riduzione Malattie Gastrointestinali", desc: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra." },
            { icon: "🔄", title: "Ottimizzazione Digestione e Assorbimento", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor." },
            { icon: "💪", title: "Riduzione Malattie Respiratorie", desc: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend leo." },
            { icon: "🧬", title: "Sviluppo Sistema Immunitario", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam feugiat vitae ultricies eget." },
            { icon: "⚡", title: "Crescita Uniforme e Costante", desc: "Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed commodo vitae." },
          ].map((benefit, i) => (
            <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover animate-slide-up animate-stagger-${(i % 3) + 1} group`}>
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</span>
              <h3 className="text-xl text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ VANTAGGI TECNOLOGIA A DISTANZA ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14 animate-slide-up">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Tecnologia</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
              Vantaggi dell&apos;Alimentazione <span className="montserrat-italic text-[#006473]">a Distanza</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {[
                { title: "Riduzione Stress da Manipolazione", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante." },
                { title: "Efficienza Gestione Tempo e Risorse", desc: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." },
                { title: "Monitoraggio Costante e Prevenzione", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
              ].map((item, i) => (
                <div key={i} className={`flex gap-6 animate-slide-left animate-stagger-${i + 1}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-[#62bc46] text-white rounded-2xl flex items-center justify-center font-bold text-lg montserrat-heading">{i + 1}</div>
                  <div>
                    <h3 className="text-xl text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-slide-right">
              <div className="bg-white rounded-3xl p-10 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#62bc46]/10 rounded-full blur-3xl" />
                <div className="space-y-6 relative z-10">
                  {[
                    { label: "Lorem Stress Reduction", value: "-65%" },
                    { label: "Ipsum Efficiency", value: "+40%" },
                    { label: "Dolor Monitoring", value: "24/7" },
                    { label: "Amet Savings", value: "+30%" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/80 p-4 rounded-xl">
                      <span className="text-slate-600 font-medium">{stat.label}</span>
                      <span className="text-[#62bc46] font-bold text-xl montserrat-heading">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONFIGURAZIONE E MANUTENZIONE ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Manutenzione</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Configurazione e <span className="montserrat-italic text-[#006473]">Manutenzione</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Lorem Pulizia", time: "Quotidiana" },
                { label: "Ipsum Calibrazione", time: "Settimanale" },
                { label: "Dolor Ispezione", time: "Mensile" },
                { label: "Amet Revisione", time: "Semestrale" },
              ].map((task, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">{task.label}</div>
                  <div className="text-xs text-[#006473] font-medium">{task.time}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-slide-right">
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-xl text-[#62bc46] mb-6">Checklist Manutenzione</h3>
              <div className="space-y-4">
                {[
                  "Lorem ipsum dolor sit amet consectetur",
                  "Pellentesque habitant morbi tristique senectus",
                  "Vestibulum tortor quam feugiat vitae",
                  "Donec eu libero sit amet quam egestas",
                  "Aenean ultricies mi vitae est mauris",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="w-5 h-5 rounded bg-[#62bc46]/20 border border-[#62bc46]/40 flex items-center justify-center text-[#62bc46] text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

