const STEPS = [
  { step: '01', title: 'Temperatura Lorem', desc: 'Vestibulum tortor quam feugiat vitae.' },
  { step: '02', title: 'Diluizione Ipsum', desc: 'Donec eu libero sit amet quam egestas.' },
  { step: '03', title: 'Miscelazione Dolor', desc: 'Aenean ultricies mi vitae est mauris.' },
  { step: '04', title: 'Somministrazione Amet', desc: 'Pellentesque habitant morbi tristique.' },
];

export default function DosaggioSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
        <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Dosaggio</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
          Preparazione e <span className="montserrat-italic text-[#006071]">Dosaggio Consigliato</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {STEPS.map((item, i) => (
          <div key={i} className={`relative p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-100 bg-white hover:border-amber-200 hover:shadow-lg transition-all animate-slide-up animate-stagger-${i + 1} group`}>
            <span className="text-5xl font-semibold text-[#006071]/30 group-hover:text-[#006071]/50 transition-colors absolute top-4 right-6 montserrat-heading">{item.step}</span>
            <div className="relative z-10 mt-6">
              <h3 className="text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}







