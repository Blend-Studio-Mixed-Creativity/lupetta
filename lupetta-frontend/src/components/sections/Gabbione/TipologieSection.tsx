const GABBIONI = [
  { iconPath: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z', title: 'Gabbione Standard', subtitle: 'Rete Metallica', desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.', features: ['Lorem ipsum dolor sit', 'Consectetur adipiscing', 'Pellentesque habitant'] },
  { iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Gabbione Rinforzato', subtitle: 'Antiscivolo e Antiossidante', desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.', features: ['Donec eu libero sit', 'Aenean ultricies mi', 'Mauris placerat eleifend'] },
  { iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', title: 'Gabbione con Accessori', subtitle: 'Stimolazione Motoria', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.', features: ['Quisque sit amet est', 'Vestibulum erat wisi', 'Condimentum sed commodo'] },
];

export default function TipologieSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-12 sm:pb-16 lg:pb-12 sm:pb-16 lg:pb-24">
      <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-8 sm:px-10 lg:px-14 py-6 sm:py-8 lg:py-10 text-center">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Tipologie</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Tipologie di Gabbioni <span className="montserrat-italic text-[#006071]">Disponibili</span>
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {GABBIONI.map((gab, i) => (
          <div key={i} className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden card-hover animate-slide-up animate-stagger-${i + 1}`}>
            <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 p-6 sm:p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-[#006473]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#006473]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={gab.iconPath} />
                </svg>
              </div>
              <span className="text-xs font-bold text-[#006071] tracking-widest uppercase">{gab.subtitle}</span>
              <h3 className="text-2xl text-slate-900 mt-1">{gab.title}</h3>
            </div>
            <div className="p-8 sm:p-10 pt-0 mt-5">
              <p className="text-slate-500 text-base leading-relaxed mb-5">{gab.desc}</p>
              <ul className="space-y-3">
                {gab.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-base text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006071]" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}







