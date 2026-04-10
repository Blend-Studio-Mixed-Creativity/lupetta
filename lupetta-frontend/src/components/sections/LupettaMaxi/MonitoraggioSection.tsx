const ITEMS = [
  { iconPath: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z', title: 'Lorem Sensorem', desc: 'Vestibulum tortor quam feugiat vitae ultricies.' },
  { iconPath: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z', title: 'Ipsum Visio', desc: 'Donec eu libero sit amet quam egestas semper.' },
  { iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z', title: 'Dolor Temperatura', desc: 'Aenean ultricies mi vitae est mauris placerat.' },
  { iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z', title: 'Amet Securitas', desc: 'Pellentesque habitant morbi tristique senectus.' },
];

export default function MonitoraggioSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 animate-slide-up">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Sezione 2</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Tecnologie Avanzate di <span className="montserrat-italic text-[#006071]">Monitoraggio e Sicurezza</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => (
            <div key={i} className={`text-center p-6 rounded-2xl border border-slate-100 hover:border-[#006071]/20 hover:shadow-lg transition-all card-hover animate-scale-in animate-stagger-${i + 1}`}>
              <div className="w-11 h-11 rounded-xl bg-[#006071]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#006071]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h3 className="text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







