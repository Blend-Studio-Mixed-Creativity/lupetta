const ITEMS = [
  { icon: '⏰', title: 'Impostazione Frequenza', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.' },
  { icon: '📈', title: 'Gestione Quantità e Incrementi', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend.' },
  { icon: '🎯', title: 'Limiti Massimi Personalizzabili', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
];

export default function ProgrammazioneSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Programmazione</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Programmazione della <span className="montserrat-italic text-[#006473]">Somministrazione</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:border-[#006473]/20 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







