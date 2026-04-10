const SPECS = [
  { label: 'Lorem Ipsum', value: '120 x 80 x 95 cm' },
  { label: 'Dolor Sit', value: '45 kg' },
  { label: 'Consectetur', value: '25 L' },
  { label: 'Adipiscing', value: '1 - 3 lorem' },
];

export default function DimensioniSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <div className="animate-slide-left">
          <span className="text-[#65b32e] font-bold text-sm tracking-widest uppercase">Sezione 1</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-8">
            Dimensionamento e <span className="montserrat-italic text-[#65b32e]">Capacità di Contenimento</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet.
          </p>
        </div>
        <div className="animate-slide-right">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
            <h3 className="text-2xl text-slate-900 mb-8">Specifiche</h3>
            <div className="space-y-5">
              {SPECS.map((spec, i) => (
                <div key={i} className="flex justify-between py-4 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500 text-base">{spec.label}</span>
                  <span className="font-bold text-lg text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







