const BARS = [
  { label: 'Lorem Consumptio', value: '4.2 L', pct: '84%' },
  { label: 'Ipsum Frequentia', value: '6x', pct: '100%' },
  { label: 'Dolor Temperatura', value: '38.2°C', pct: '96%' },
];

export default function RealTimeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 animate-slide-left">
          <div className="bg-[#006473] rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#62bc46]/10 rounded-full blur-3xl" />
            <h3 className="text-xl mb-6 text-[#62bc46]">Dashboard Live</h3>
            <div className="space-y-6 relative z-10">
              {BARS.map((row, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">{row.label}</span>
                    <span className="text-[#62bc46] font-bold">{row.value}</span>
                  </div>
                  <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div className="h-full bg-[#62bc46] rounded-full" style={{ width: row.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-slide-right">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Real-Time</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Monitoraggio in Tempo Reale della <span className="montserrat-italic text-[#006473]">Somministrazione</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
          <h3 className="text-lg text-slate-800">Visualizzazione Consumi</h3>
          <p className="text-slate-500 leading-relaxed text-sm mb-4">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend.
          </p>
          <h3 className="text-lg text-slate-800">Comportamenti Alimentari</h3>
          <p className="text-slate-500 leading-relaxed text-sm">
            Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero sit amet quam.
          </p>
        </div>
      </div>
    </section>
  );
}







