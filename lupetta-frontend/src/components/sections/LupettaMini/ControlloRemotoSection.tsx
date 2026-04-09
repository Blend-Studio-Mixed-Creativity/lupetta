const FEATURES = [
  { icon: '📶', label: 'Lorem Wi-Fi' },
  { icon: '📱', label: 'Ipsum Mobile App' },
  { icon: '☁️', label: 'Dolor Cloud' },
  { icon: '🔔', label: 'Amet Notifications' },
];

export default function ControlloRemotoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 animate-slide-left">
          <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#62bc46]/20 rounded-full blur-3xl" />
            <div className="space-y-5 relative z-10">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
                  <span className="text-2xl">{feat.icon}</span>
                  <span className="text-slate-700 font-medium">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-slide-right">
          <span className="text-[#62bc46] font-bold text-sm tracking-widest uppercase">Sezione 3</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Integrazione con Sistemi di <span className="montserrat-italic text-[#62bc46]">Controllo Remoto Web</span>
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







