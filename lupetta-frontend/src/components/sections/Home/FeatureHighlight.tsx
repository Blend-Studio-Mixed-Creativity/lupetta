const METRICS = [
  { label: 'Lorem Ipsum', value: '98.5%', width: '98%' },
  { label: 'Dolor Amet', value: '94.2%', width: '94%' },
  { label: 'Consectetur', value: '87.8%', width: '88%' },
];

const FEATURES = [
  'Pellentesque habitant morbi tristique senectus',
  'Netus et malesuada fames ac turpis egestas',
  'Vestibulum tortor quam feugiat vitae ultricies',
  'Donec eu libero sit amet quam egestas semper',
];

export default function FeatureHighlight() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-left">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Lorem Feature</span>
          <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3 mb-6">
            Consectetur <span className="montserrat-italic text-[#62bc46]">Adipiscing</span> Elit
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          </p>
          <ul className="space-y-4">
            {FEATURES.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <span className="mt-1 flex-shrink-0 w-6 h-6 bg-[#62bc46]/20 text-[#62bc46] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-slide-right">
          <div className="bg-white rounded-3xl p-10 border border-[#006473]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#62bc46]/10 rounded-full blur-3xl" />
            <div className="space-y-6 relative z-10">
              {METRICS.map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-700">{metric.label}</span>
                    <span className="text-[#62bc46] font-bold">{metric.value}</span>
                  </div>
                  <div className="h-3 bg-white/80 rounded-full overflow-hidden">
                    <div className="h-full bg-[#62bc46] rounded-full" style={{ width: metric.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
