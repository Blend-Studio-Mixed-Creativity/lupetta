const ITEMS = [
  { iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z', title: 'Temperatura di Conservazione', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.' },
  { iconPath: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z', title: 'Condizioni di Stoccaggio', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet.' },
];

export default function ConservazioneSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Conservazione</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Stoccaggio e <span className="montserrat-italic text-[#006071]">Conservazione</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {ITEMS.map((item, i) => (
            <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all card-hover animate-slide-up animate-stagger-${i + 1}`}>
              <div className="w-11 h-11 rounded-xl bg-[#006473]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#006473]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







