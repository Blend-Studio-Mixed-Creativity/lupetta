const SPECS = [
  { label: 'Lorem Capacitas', value: '200 L' },
  { label: 'Dolor Autonomia', value: '72h' },
  { label: 'Ipsum Potentia', value: '1.5 kW' },
  { label: 'Amet Capacitas', value: '6 - 12 lorem' },
  { label: 'Consectetur Pressio', value: '2.5 bar' },
];

export default function CapacitaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        <div className="animate-slide-left">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Sezione 1</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Capacità di Alimentazione e <span className="montserrat-italic text-[#006473]">Durata Operativa</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed.
          </p>
        </div>
        <div className="animate-slide-right">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl text-slate-900 mb-6">Specifiche Tecniche</h3>
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







