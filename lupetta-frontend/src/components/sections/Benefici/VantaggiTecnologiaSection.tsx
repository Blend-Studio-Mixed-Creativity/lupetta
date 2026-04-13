const VANTAGGI = [
  { title: 'Riduzione stress da manipolazione', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.' },
  { title: 'Efficienza gestione tempo e risorse', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.' },
  { title: 'Monitoraggio costante e prevenzione', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
];

const STATS = [
  { label: 'Lorem stress reduction', value: '-65%' },
  { label: 'Ipsum efficiency', value: '+40%' },
  { label: 'Dolor monitoring', value: '24/7' },
  { label: 'Amet savings', value: '+30%' },
];

export default function VantaggiTecnologiaSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24 animate-slide-up">
          <span className="inline-block bg-[#65b32e]/10 text-[#65b32e] border border-[#65b32e]/20 px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase mb-6">Automazione & Resa</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight font-semibold leading-tight">
            I vantaggi dell&apos;alimentazione <br className="hidden md:block"/> <span className="montserrat-italic text-transparent bg-clip-text bg-gradient-to-r from-[#006071] to-[#65b32e]">a distanza</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">Scopri come la tecnologia di controllo remoto migliora significativamente l'efficienza e abbassa i livelli di stress del tuo allevamento.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Card Sinistra (Vantaggi Testuali) */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 sm:p-10 lg:p-14 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-12">I benefici sul campo</h3>
            <div className="space-y-10 sm:space-y-12">
              {VANTAGGI.map((item, i) => (
                <div key={i} className={`group flex gap-6 lg:gap-8 animate-slide-left animate-stagger-${i + 1}`}>
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#65b32e] to-[#00c8a0] rounded-2xl sm:rounded-3xl shadow-lg opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="relative w-full h-full bg-gradient-to-br from-[#65b32e] to-[#00c8a0] text-white rounded-2xl sm:rounded-3xl flex items-center justify-center font-bold text-xl sm:text-2xl shadow-[0_4px_20px_rgb(101,179,46,0.3)] group-hover:scale-110 transition-transform duration-500">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-[#65b32e] transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card Destra (Stats Dashboard) */}
          <div className="lg:col-span-5 animate-slide-right group">
            <div className="relative w-full rounded-[2rem] shadow-[0_20px_50px_rgb(0,96,113,0.3)] p-[2px] overflow-hidden"
              style={{ background: 'linear-gradient(to bottom, #0b1a20, #006071)' }}
            >
              {/* Effetto sfondo animato/mesh */}
              <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[radial-gradient(ellipse_at_center,rgba(101,179,46,0.15)_0%,transparent_50%)] blur-[40px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

              <div className="relative w-full bg-[#0b1a20]/90 backdrop-blur-2xl rounded-[1.8rem] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center mt-2">Statistiche rilevate</h3>
                <div className="w-full space-y-3 sm:space-y-4">
                  {STATS.map((stat, i) => (
                    <div key={i} className="group/stat flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#65b32e]/30 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgb(101,179,46,0.15)]">
                      <span className="text-slate-300 font-medium text-sm sm:text-base group-hover/stat:text-white transition-colors truncate mr-3">{stat.label}</span>
                      <span className="text-[#65b32e] font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight drop-shadow-[0_0_15px_rgba(101,179,46,0.4)] flex-shrink-0">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







