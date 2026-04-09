const CARDS = [
  { icon: '🔬', title: 'Lorem Compactum', desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.' },
  { icon: '🏗️', title: 'Ipsum Enterprise', desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.' },
  { icon: '📡', title: 'Dolor Monitoring', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.' },
];

export default function PanoramicaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="text-center mb-16 animate-slide-up">
        <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Panoramica</span>
        <h2 className="text-4xl md:text-5xl text-[#006473] tracking-tight mt-3 mb-6">
          Lorem Ipsum <span className="montserrat-italic text-[#62bc46]">Dolor Sit</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {CARDS.map((card, i) => (
          <div key={i} className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 card-hover animate-slide-up animate-stagger-${i + 1} group`}>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-2xl text-slate-900 mb-3 tracking-tight">{card.title}</h3>
            <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            <div className="mt-6 h-1 w-12 rounded-full bg-[#62bc46] group-hover:w-20 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
