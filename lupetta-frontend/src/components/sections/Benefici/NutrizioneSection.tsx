import TiltCard3D from '../../ui/TiltCard3D';
import RevealSection from '../../RevealSection';

const BENEFITS = [
  { iconPath: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941', title: 'Incremento del Peso e Sviluppo Muscolare', desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.' },
  { iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Riduzione Malattie Gastrointestinali', desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.' },
  { iconPath: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99', title: 'Ottimizzazione Digestione e Assorbimento', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.' },
  { iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', title: 'Riduzione Malattie Respiratorie', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend leo.' },
  { iconPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z', title: 'Sviluppo Sistema Immunitario', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam feugiat vitae ultricies eget.' },
  { iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', title: 'Crescita Uniforme e Costante', desc: 'Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed commodo vitae.' },
];

export default function NutrizioneSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-12 sm:pb-16 lg:pb-12 sm:pb-16 lg:pb-24">
      <RevealSection className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-8 sm:px-10 lg:px-14 py-6 sm:py-8 lg:py-10 text-center">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Nutrizione</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Effetti della nutrizione programmata sul <span className="montserrat-italic text-[#006071]">benessere e crescita</span>
          </h2>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, i) => (
          <TiltCard3D key={i} className="rounded-2xl">
            <RevealSection className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 group" animation="sr-flip-in" delay={`sr-delay-${(i % 3) + 1}`}>
            <div className="w-11 h-11 rounded-xl bg-[#006071]/10 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-[10deg] transition-transform duration-500">
              <svg className="w-5 h-5 text-[#006071]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={benefit.iconPath} />
              </svg>
            </div>
            <h3 className="text-xl text-slate-900 mb-3">{benefit.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
            </RevealSection>
          </TiltCard3D>
        ))}
      </div>
    </section>
  );
}







