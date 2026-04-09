const NORME = [
  { icon: '📋', title: 'Requisiti di Sicurezza', subtitle: 'Apparecchiature Agricole', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.' },
  { icon: '🐄', title: 'Norme Benessere Animale', subtitle: 'Allevamenti', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit.' },
  { icon: '🌱', title: 'Impatto Ambientale', subtitle: 'Alimentazione Sostenibile', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.' },
];

export default function NormativeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-14 animate-slide-up">
        <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Normative</span>
        <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
          Normative di Sicurezza e <span className="montserrat-italic text-[#006473]">Benessere</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {NORME.map((norm, i) => (
          <div key={i} className={`p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#006473]/20 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
            <span className="text-3xl block mb-3">{norm.icon}</span>
            <span className="text-xs font-bold text-[#006473] tracking-widest uppercase">{norm.subtitle}</span>
            <h3 className="text-xl text-slate-900 mt-1 mb-3">{norm.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{norm.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
