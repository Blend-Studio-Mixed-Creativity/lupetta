import RevealSection from '../../RevealSection';

const CARDS = [
  { iconPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5', title: 'Lorem Compactum', desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.' },
  { iconPath: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21', title: 'Ipsum Enterprise', desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.' },
  { iconPath: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z', title: 'Dolor Monitoring', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.' },
];

export default function PanoramicaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-28">
      <RevealSection className="text-center mb-8 sm:mb-12 lg:mb-16" animation="sr-reveal-up">
        <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Panoramica</span>
        <h2 className="text-4xl md:text-5xl text-[#006071] tracking-tight mt-3 mb-6">
          Lorem Ipsum <span className="montserrat-italic text-[#65b32e]">Dolor Sit</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
      </RevealSection>
      <div className="grid md:grid-cols-3 gap-8">
        {CARDS.map((card, i) => (
          <RevealSection key={i} className="bg-white p-5 sm:p-6 lg:p-8 rounded-3xl shadow-sm border border-slate-100 card-hover group" animation="sr-flip-in" delay={`sr-delay-${(i + 1) * 2}`}>
            <div className="w-16 h-16 bg-[#65b32e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <svg className="w-8 h-8 text-[#65b32e]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
              </svg>
            </div>
            <h3 className="text-2xl text-slate-900 mb-3 tracking-tight">{card.title}</h3>
            <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            <div className="mt-6 h-1 w-12 rounded-full bg-[#65b32e] group-hover:w-20 transition-all duration-500" />
          </RevealSection>
        ))}
      </div>
    </section>
  );
}







