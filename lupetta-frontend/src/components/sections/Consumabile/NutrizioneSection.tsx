const NUTRIENTI = [
  { label: 'Lorem Proteine', value: '26%', width: '85%' },
  { label: 'Ipsum Grassi', value: '18%', width: '60%' },
  { label: 'Dolor Fibre', value: '0.5%', width: '15%' },
  { label: 'Amet Ceneri', value: '7%', width: '25%' },
  { label: 'Consectetur Umidità', value: '3.5%', width: '12%' },
];

export default function NutrizioneSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Composizione</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Valori Nutrizionali e <span className="montserrat-italic text-[#006473]">Composizione</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est et sapien.
            </p>
          </div>
          <div className="animate-slide-right">
            <div className="bg-white rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl text-slate-900 mb-6">Tabella Nutrizionale</h3>
              <div className="space-y-4">
                {NUTRIENTI.map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">{row.label}</span>
                      <span className="font-bold text-[#006473]">{row.value}</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-[#006473] rounded-full" style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
