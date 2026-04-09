const TASKS = [
  { label: 'Lorem Pulizia', time: 'Quotidiana' },
  { label: 'Ipsum Calibrazione', time: 'Settimanale' },
  { label: 'Dolor Ispezione', time: 'Mensile' },
  { label: 'Amet Revisione', time: 'Semestrale' },
];

const CHECKLIST = [
  'Lorem ipsum dolor sit amet consectetur',
  'Pellentesque habitant morbi tristique senectus',
  'Vestibulum tortor quam feugiat vitae',
  'Donec eu libero sit amet quam egestas',
  'Aenean ultricies mi vitae est mauris',
];

export default function ManutenzioneSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-left">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Manutenzione</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
            Configurazione e <span className="montserrat-italic text-[#006473]">Manutenzione</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {TASKS.map((task, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{task.label}</div>
                <div className="text-xs text-[#006473] font-medium">{task.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-slide-right">
          <div className="bg-slate-900 rounded-3xl p-8 text-white">
            <h3 className="text-xl text-[#62bc46] mb-6">Checklist Manutenzione</h3>
            <div className="space-y-4">
              {CHECKLIST.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="w-5 h-5 rounded bg-[#62bc46]/20 border border-[#62bc46]/40 flex items-center justify-center text-[#62bc46] text-xs">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
