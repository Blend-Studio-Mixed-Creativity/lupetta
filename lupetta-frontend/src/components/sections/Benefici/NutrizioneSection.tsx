const BENEFITS = [
  { icon: '📈', title: 'Incremento del Peso e Sviluppo Muscolare', desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.' },
  { icon: '🛡️', title: 'Riduzione Malattie Gastrointestinali', desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.' },
  { icon: '🔄', title: 'Ottimizzazione Digestione e Assorbimento', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.' },
  { icon: '💪', title: 'Riduzione Malattie Respiratorie', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend leo.' },
  { icon: '🧬', title: 'Sviluppo Sistema Immunitario', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam feugiat vitae ultricies eget.' },
  { icon: '⚡', title: 'Crescita Uniforme e Costante', desc: 'Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed commodo vitae.' },
];

export default function NutrizioneSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
      <div className="text-center mb-14 animate-slide-up">
        <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Nutrizione</span>
        <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
          Effetti della Nutrizione Programmata sul <span className="montserrat-italic text-[#006473]">Benessere e Crescita</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, i) => (
          <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover animate-slide-up animate-stagger-${(i % 3) + 1} group`}>
            <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</span>
            <h3 className="text-xl text-slate-900 mb-3">{benefit.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
