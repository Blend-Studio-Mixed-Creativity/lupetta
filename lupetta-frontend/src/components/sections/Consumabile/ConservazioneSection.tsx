import TiltCard3D from '../../ui/TiltCard3D';

const ITEMS = [
  { iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z', title: 'Temperatura di Conservazione', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.' },
  { iconPath: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z', title: 'Condizioni di Stoccaggio', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet.' },
];

export default function ConservazioneSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Conservazione</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Stoccaggio e <span className="montserrat-italic text-[#006071]">Conservazione</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {ITEMS.map((item, i) => (
            <TiltCard3D key={i} className={`p-8 sm:p-10 rounded-2xl border border-slate-100 animate-slide-up animate-stagger-${i + 1}`}>
              <div className="w-13 h-13 rounded-xl bg-[#006473]/10 flex items-center justify-center mb-6" style={{ width: '3.25rem', height: '3.25rem' }}>
                <svg className="w-6 h-6 text-[#006473]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h3 className="text-2xl text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}







