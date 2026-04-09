import RevealSection from '../../RevealSection';

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-12 sm:pb-16 lg:pb-12 sm:pb-16 lg:pb-24">
      <RevealSection className="flex justify-center mb-8 sm:mb-10 lg:mb-14">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 sm:px-8 lg:px-12 py-5 sm:py-6 lg:py-8 text-center">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Nutrizione</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Effetti della Nutrizione Programmata sul <span className="montserrat-italic text-[#006473]">Benessere e Crescita</span>
          </h2>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, i) => (
          <RevealSection key={i} className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 card-hover group" animation="sr-flip-in" delay={`sr-delay-${(i % 3) + 1}`}>
            <span className="text-3xl block mb-4 group-hover:scale-125 group-hover:rotate-[10deg] transition-transform duration-500">{benefit.icon}</span>
            <h3 className="text-xl text-slate-900 mb-3">{benefit.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}







