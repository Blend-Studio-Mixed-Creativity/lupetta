import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,197,94,0.25),transparent)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-green-500/10 border border-green-400/30 text-green-300 text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            Lorem Ipsum Sit Amet
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Consectetur Adipiscing<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 gradient-mesh">
              Elit Pellentesque
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up animate-stagger-3">
            <Link to="/come-funziona" className="group px-8 py-4 bg-green-500 hover:bg-green-400 text-slate-900 font-bold rounded-2xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-1 text-lg">
              Lorem Ipsum
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link to="/monitoraggio" className="px-8 py-4 glass-dark text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg">
              Dolor Sit Amet
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS RIBBON ═══ */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "1.200+", label: "Lorem Ipsum" },
            { value: "98%", label: "Dolor Amet" },
            { value: "24/7", label: "Sit Consectetur" },
            { value: "45%", label: "Adipiscing Elit" },
          ].map((stat, i) => (
            <div key={i} className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center card-hover animate-scale-in animate-stagger-${i + 1}`}>
              <div className="text-3xl font-extrabold text-green-600 mb-1 montserrat-heading">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PANORAMICA PRODOTTO ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-green-600 font-bold text-sm tracking-widest uppercase">Panoramica</span>
          <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3 mb-6">
            Lorem Ipsum <span className="montserrat-italic text-green-600">Dolor Sit</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🔬", color: "green", title: "Lorem Compactum", desc: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper." },
            { icon: "🏗️", color: "blue", title: "Ipsum Enterprise", desc: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra." },
            { icon: "📡", color: "amber", title: "Dolor Monitoring", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor." },
          ].map((card, i) => (
            <div key={i} className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 card-hover animate-slide-up animate-stagger-${i + 1} group`}>
              <div className={`w-16 h-16 bg-${card.color}-50 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-2xl text-slate-900 mb-3 tracking-tight">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.desc}</p>
              <div className={`mt-6 h-1 w-12 rounded-full bg-${card.color}-500 group-hover:w-20 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ COME FUNZIONA — STEPS ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-16 animate-slide-up">
            <span className="text-green-600 font-bold text-sm tracking-widest uppercase">Come Funziona</span>
            <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3">
              Lorem in <span className="montserrat-italic text-green-600">Quattuor Passus</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Installatio", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique." },
              { step: "02", title: "Configuratio", desc: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris." },
              { step: "03", title: "Monitorium", desc: "Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed." },
              { step: "04", title: "Optimizatio", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
            ].map((item, i) => (
              <div key={i} className={`relative p-8 rounded-3xl border border-slate-100 hover:border-green-200 transition-all animate-slide-up animate-stagger-${i + 1} group`}>
                <span className="text-6xl font-extrabold text-green-100 group-hover:text-green-200 transition-colors absolute top-4 right-6 montserrat-heading">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="text-xl text-slate-900 mb-3 mt-8">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURE HIGHLIGHT — SPLIT ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <span className="text-green-600 font-bold text-sm tracking-widest uppercase">Lorem Feature</span>
            <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3 mb-6">
              Consectetur <span className="montserrat-italic text-green-600">Adipiscing</span> Elit
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae.
            </p>
            <ul className="space-y-4">
              {["Pellentesque habitant morbi tristique senectus", "Netus et malesuada fames ac turpis egestas", "Vestibulum tortor quam feugiat vitae ultricies", "Donec eu libero sit amet quam egestas semper"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-right">
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-10 border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/30 rounded-full blur-3xl" />
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Lorem Ipsum", value: "98.5%", width: "98%" },
                  { label: "Dolor Amet", value: "94.2%", width: "94%" },
                  { label: "Consectetur", value: "87.8%", width: "88%" },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-slate-700">{metric.label}</span>
                      <span className="text-green-600 font-bold">{metric.value}</span>
                    </div>
                    <div className="h-3 bg-white/80 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: metric.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="bg-slate-900 text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-green-400 font-bold text-sm tracking-widest uppercase animate-fade-in">Testimonia</span>
          <h2 className="text-4xl md:text-5xl tracking-tight mt-4 mb-12 animate-slide-up">
            Lorem Ipsum <span className="montserrat-italic text-green-400">Dolor Sit</span>
          </h2>
          <blockquote className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed mb-10 animate-slide-up animate-stagger-2">
            &ldquo;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.&rdquo;
          </blockquote>
          <div className="animate-slide-up animate-stagger-3">
            <div className="font-bold text-green-400 text-lg">Lorem Ipsum</div>
            <div className="text-sm text-slate-400">Dolor Sit Amet — Consectetur Adipiscing</div>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINALE ═══ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden animate-scale-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
              Lorem Ipsum <span className="montserrat-italic">Dolor?</span>
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto mb-10">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/come-funziona" className="px-8 py-4 bg-white text-green-700 font-bold rounded-2xl hover:bg-green-50 transition-all shadow-xl text-lg">
                Lorem Ipsum &rarr;
              </Link>
              <Link to="/benefici" className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all text-lg">
                Dolor Sit Amet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

