const FEATURES = [
  { iconPath: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z', label: 'Lorem Wi-Fi' },
  { iconPath: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 9h3', label: 'Ipsum Mobile App' },
  { iconPath: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z', label: 'Dolor Cloud' },
  { iconPath: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0', label: 'Amet Notifications' },
];

export default function ControlloRemotoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 animate-slide-left">
          <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#65b32e]/20 rounded-full blur-3xl" />
            <div className="space-y-5 relative z-10">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-[#65b32e]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#65b32e]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.iconPath} />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-slide-right">
          <span className="text-[#65b32e] font-bold text-sm tracking-widest uppercase">Sezione 3</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Integrazione con Sistemi di <span className="montserrat-italic text-[#65b32e]">Controllo Remoto Web</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          </p>
        </div>
      </div>
    </section>
  );
}







