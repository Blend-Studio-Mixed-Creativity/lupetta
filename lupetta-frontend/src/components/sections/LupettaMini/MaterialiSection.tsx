import TiltCard3D from '../../ui/TiltCard3D';

const ITEMS = [
  { iconPath: 'M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z', title: 'Lorem Materialis', subtitle: 'Resistenza', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante.' },
  { iconPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z', title: 'Ipsum Hygienia', subtitle: 'Igiene', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est.' },
  { iconPath: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z', title: 'Dolor Aquaticus', subtitle: 'Impermeabilità', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames.' },
];

export default function MaterialiSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <span className="text-[#65b32e] font-bold text-sm tracking-widest uppercase">Sezione 2</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Materiali e Design <span className="montserrat-italic text-[#65b32e]">Costruttivo</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {ITEMS.map((item, i) => (
            <TiltCard3D key={i} className={`p-8 sm:p-10 rounded-2xl border border-slate-100 animate-slide-up animate-stagger-${i + 1}`}>
              <div className="w-13 h-13 rounded-xl bg-[#65b32e]/10 flex items-center justify-center mb-6" style={{ width: '3.25rem', height: '3.25rem' }}>
                <svg className="w-6 h-6 text-[#65b32e]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <span className="text-xs font-bold text-[#65b32e] tracking-widest uppercase">{item.subtitle}</span>
              <h3 className="text-2xl text-slate-900 mt-2 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}







