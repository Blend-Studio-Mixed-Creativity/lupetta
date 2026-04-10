const VANTAGGI = [
  { title: 'Riduzione Stress da Manipolazione', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.' },
  { title: 'Efficienza Gestione Tempo e Risorse', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.' },
  { title: 'Monitoraggio Costante e Prevenzione', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
];

const STATS = [
  { label: 'Lorem Stress Reduction', value: '-65%' },
  { label: 'Ipsum Efficiency', value: '+40%' },
  { label: 'Dolor Monitoring', value: '24/7' },
  { label: 'Amet Savings', value: '+30%' },
];

export default function VantaggiTecnologiaSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Tecnologia</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Vantaggi dell&apos;Alimentazione <span className="montserrat-italic text-[#006071]">a Distanza</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
          <div className="space-y-8">
            {VANTAGGI.map((item, i) => (
              <div key={i} className={`flex gap-6 animate-slide-left animate-stagger-${i + 1}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#65b32e] text-white rounded-2xl flex items-center justify-center font-bold text-lg montserrat-heading">{i + 1}</div>
                <div>
                  <h3 className="text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-slide-right">
            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#65b32e]/10 rounded-full blur-3xl" />
              <div className="space-y-6 relative z-10">
                {STATS.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/80 p-4 rounded-xl">
                    <span className="text-slate-600 font-medium">{stat.label}</span>
                    <span className="text-[#65b32e] font-bold text-xl montserrat-heading">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







