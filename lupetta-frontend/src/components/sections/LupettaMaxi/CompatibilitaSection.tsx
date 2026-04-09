const MODULI = [
  { label: 'Lorem Modulus A', color: 'blue' },
  { label: 'Ipsum Modulus B', color: 'indigo' },
  { label: 'Dolor Modulus C', color: 'purple' },
  { label: 'Amet Modulus D', color: 'violet' },
];

export default function CompatibilitaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 animate-slide-left">
          <div className="grid grid-cols-2 gap-4">
            {MODULI.map((mod, i) => (
              <div key={i} className={`bg-${mod.color}-50 border border-${mod.color}-100 p-6 rounded-2xl text-center animate-scale-in animate-stagger-${i + 1}`}>
                <div className={`text-${mod.color}-600 font-bold text-lg mb-1`}>{mod.label}</div>
                <p className="text-slate-500 text-xs">Lorem ipsum dolor sit amet</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-slide-right">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Sezione 3</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Compatibilità con Gabbioni di <span className="montserrat-italic text-[#006473]">Movimento e Moduli Aggiuntivi</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra.
          </p>
        </div>
      </div>
    </section>
  );
}







