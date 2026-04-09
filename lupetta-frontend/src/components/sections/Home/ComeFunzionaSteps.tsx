const STEPS = [
  { step: '01', title: 'Installatio', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.' },
  { step: '02', title: 'Configuratio', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris.' },
  { step: '03', title: 'Monitorium', desc: 'Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed.' },
  { step: '04', title: 'Optimizatio', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
];

export default function ComeFunzionaSteps() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Come Funziona</span>
          <h2 className="text-4xl md:text-5xl text-[#006473] tracking-tight mt-3">
            Lorem in <span className="montserrat-italic text-[#62bc46]">Quattuor Passus</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((item, _i) => (
            <div key={_i} className="relative p-8 rounded-3xl border border-slate-100 hover:border-[#62bc46]/50 transition-all animate-slide-up group">
              <span className="text-6xl font-extrabold text-[#62bc46]/20 group-hover:text-[#62bc46]/40 transition-colors absolute top-4 right-6 montserrat-heading">{item.step}</span>
              <div className="relative z-10">
                <h3 className="text-xl text-slate-900 mb-3 mt-8">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
