const ITEMS = [
  { iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Impostazione Frequenza', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.' },
  { iconPath: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941', title: 'Gestione Quantità e Incrementi', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend.' },
  { iconPath: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75', title: 'Limiti Massimi Personalizzabili', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
];

export default function ProgrammazioneSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Programmazione</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Programmazione della <span className="montserrat-italic text-[#006071]">Somministrazione</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:border-[#006071]/20 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
              <div className="w-11 h-11 rounded-xl bg-[#006473]/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#006473]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







