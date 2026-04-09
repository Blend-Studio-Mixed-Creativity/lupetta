const ITEMS = [
  { icon: '🌡️', title: 'Temperatura di Conservazione', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.' },
  { icon: '📦', title: 'Condizioni di Stoccaggio', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet.' },
];

export default function ConservazioneSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Conservazione</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Stoccaggio e <span className="montserrat-italic text-[#006473]">Conservazione</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {ITEMS.map((item, i) => (
            <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
