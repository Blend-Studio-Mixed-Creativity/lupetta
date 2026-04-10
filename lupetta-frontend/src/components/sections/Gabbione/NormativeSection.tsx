const NORME = [
  { iconPath: 'M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12', title: 'Requisiti di Sicurezza', subtitle: 'Apparecchiature Agricole', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.' },
  { iconPath: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z', title: 'Norme Benessere Animale', subtitle: 'Allevamenti', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit.' },
  { iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z', title: 'Impatto Ambientale', subtitle: 'Alimentazione Sostenibile', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.' },
];

export default function NormativeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
        <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Normative</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
          Normative di Sicurezza e <span className="montserrat-italic text-[#006071]">Benessere</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {NORME.map((norm, i) => (
          <div key={i} className={`p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#006071]/20 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
            <div className="w-11 h-11 rounded-xl bg-[#006071]/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-[#006071]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={norm.iconPath} />
              </svg>
            </div>
            <span className="text-xs font-bold text-[#006071] tracking-widest uppercase">{norm.subtitle}</span>
            <h3 className="text-xl text-slate-900 mt-1 mb-3">{norm.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{norm.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}







