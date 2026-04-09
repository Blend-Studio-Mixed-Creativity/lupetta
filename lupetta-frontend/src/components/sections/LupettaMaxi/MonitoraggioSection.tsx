const ITEMS = [
  { icon: '📡', title: 'Lorem Sensorem', desc: 'Vestibulum tortor quam feugiat vitae ultricies.' },
  { icon: '🎥', title: 'Ipsum Visio', desc: 'Donec eu libero sit amet quam egestas semper.' },
  { icon: '🌡️', title: 'Dolor Temperatura', desc: 'Aenean ultricies mi vitae est mauris placerat.' },
  { icon: '🔐', title: 'Amet Securitas', desc: 'Pellentesque habitant morbi tristique senectus.' },
];

export default function MonitoraggioSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Sezione 2</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Tecnologie Avanzate di <span className="montserrat-italic text-[#006473]">Monitoraggio e Sicurezza</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => (
            <div key={i} className={`text-center p-6 rounded-2xl border border-slate-100 hover:border-[#006473]/20 hover:shadow-lg transition-all card-hover animate-scale-in animate-stagger-${i + 1}`}>
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







