import heroImg from '../assets/images/lupetta-img.png';

export default function LupettaMini() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
        <div className="absolute inset-0 bg-[#006473]/82" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/40 text-[#62bc46] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
              MINI Wi-Fi
            </span>
            <h1 className="text-5xl md:text-6xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
              Specifiche Tecniche della<br />
              <span className="text-[#62bc46]">Versione MINI WiFi di Lupetta</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-slide-up animate-stagger-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DIMENSIONAMENTO E CAPACITÀ DI CONTENIMENTO ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <span className="text-[#62bc46] font-bold text-sm tracking-widest uppercase">Sezione 1</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Dimensionamento e <span className="montserrat-italic text-[#62bc46]">Capacità di Contenimento</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet.
            </p>
          </div>
          <div className="animate-slide-right">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl text-slate-900 mb-6">Specifiche</h3>
              <div className="space-y-4">
                {[
                  { label: "Lorem Ipsum", value: "120 x 80 x 95 cm" },
                  { label: "Dolor Sit", value: "45 kg" },
                  { label: "Consectetur", value: "25 L" },
                  { label: "Adipiscing", value: "1 - 3 lorem" },
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

      {/* ═══ MATERIALI E DESIGN ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14 animate-slide-up">
            <span className="text-[#62bc46] font-bold text-sm tracking-widest uppercase">Sezione 2</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
              Materiali e Design <span className="montserrat-italic text-[#62bc46]">Costruttivo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🧱", title: "Lorem Materialis", subtitle: "Resistenza", desc: "Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante." },
              { icon: "🧹", title: "Ipsum Hygienia", subtitle: "Igiene", desc: "Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est." },
              { icon: "💧", title: "Dolor Aquaticus", subtitle: "Impermeabilità", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames." },
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <span className="text-xs font-bold text-[#62bc46] tracking-widest uppercase">{item.subtitle}</span>
                <h3 className="text-xl text-slate-900 mt-1 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRAZIONE SISTEMI DI CONTROLLO REMOTO ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-left">
            <div className="bg-white rounded-3xl p-10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#62bc46]/20 rounded-full blur-3xl" />
              <div className="space-y-5 relative z-10">
                {[
                  { icon: "📶", label: "Lorem Wi-Fi" },
                  { icon: "📱", label: "Ipsum Mobile App" },
                  { icon: "☁️", label: "Dolor Cloud" },
                  { icon: "🔔", label: "Amet Notifications" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
                    <span className="text-2xl">{feat.icon}</span>
                    <span className="text-slate-700 font-medium">{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-slide-right">
            <span className="text-[#62bc46] font-bold text-sm tracking-widest uppercase">Sezione 3</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Integrazione con Sistemi di <span className="montserrat-italic text-[#62bc46]">Controllo Remoto Web</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ USO IDEALE ═══ */}
      <section className="bg-[#006473] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,197,94,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 animate-slide-up">
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Lorem Ipsum <span className="montserrat-italic text-white">Dolor Sit</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lorem Parvum", desc: "Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero." },
              { title: "Ipsum Domesticus", desc: "Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien." },
              { title: "Dolor Initialis", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis." },
            ].map((use, i) => (
              <div key={i} className={`glass-dark p-8 rounded-2xl animate-slide-up animate-stagger-${i + 1}`}>
                <h3 className="text-xl mb-3 text-white">{use.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

