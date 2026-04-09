const SPECS = [
  { label: 'Lorem Ipsum', value: '120 x 80 x 95 cm' },
  { label: 'Dolor Sit', value: '45 kg' },
  { label: 'Consectetur', value: '25 L' },
  { label: 'Adipiscing', value: '1 - 3 lorem' },
];

export default function DimensioniSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        <div className="animate-slide-left">
          <span className="text-[#62bc46] font-bold text-sm tracking-widest uppercase">Sezione 1</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Dimensionamento e <span className="montserrat-italic text-[#62bc46]">Capacità di Contenimento</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet.
          </p>
        </div>
        <div className="animate-slide-right">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl text-slate-900 mb-6">Specifiche</h3>
            <div className="space-y-4">
              {SPECS.map((spec, i) => (
                <div key={i} className="flex justify-between py-3 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500">{spec.label}</span>
                  <span className="font-bold text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







