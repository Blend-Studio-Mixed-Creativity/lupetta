const ITEMS = [
  { icon: '🧱', title: 'Lorem Materialis', subtitle: 'Resistenza', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante.' },
  { icon: '🧹', title: 'Ipsum Hygienia', subtitle: 'Igiene', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est.' },
  { icon: '💧', title: 'Dolor Aquaticus', subtitle: 'Impermeabilità', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames.' },
];

export default function MaterialiSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
          <span className="text-[#62bc46] font-bold text-sm tracking-widest uppercase">Sezione 2</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Materiali e Design <span className="montserrat-italic text-[#62bc46]">Costruttivo</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
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
  );
}







