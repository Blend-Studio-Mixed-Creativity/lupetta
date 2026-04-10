import { useRef, useState } from 'react';

const ITEMS = [
  {
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Impostazione Frequenza',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    features: ['Intervalli personalizzabili per ogni profilo', 'Programmazione a cadenza oraria o giornaliera', 'Sincronizzazione automatica cloud', 'Notifiche push in caso di scostamento'],
    color: '#006071',
  },
  {
    iconPath: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    title: 'Gestione Quantità e Incrementi',
    desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend.',
    detail: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.',
    features: ['Incrementi graduali programmabili', 'Soglie minime e massime configurabili', 'Storico consumi per analisi trend', 'Adattamento automatico in base al peso'],
    color: '#65b32e',
  },
  {
    iconPath: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
    title: 'Limiti Massimi Personalizzabili',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    detail: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est.',
    features: ['Parametri impostabili per fascia di età', 'Alert automatici al raggiungimento soglia', 'Blocco erogazione su superamento limite', 'Report periodici di conformità'],
    color: '#006071',
  },
];

type Item = (typeof ITEMS)[number];

/* ─── 3D Tilt Card ─── */
function TiltCard({ item, onOpen, index }: { item: Item; onOpen: () => void; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
    transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1), box-shadow 0.6s ease',
    transformStyle: 'preserve-3d',
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rX = (0.5 - y) * 16;
    const rY = (x - 0.5) * 16;
    setStyle({
      transform: `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.04,1.04,1.04)`,
      transition: 'transform 0.1s linear, box-shadow 0.1s linear',
      transformStyle: 'preserve-3d',
      boxShadow: `${rY * -1.5}px ${rX * 1.5}px 36px -8px ${item.color}44, 0 12px 40px -10px rgba(0,0,0,0.12)`,
    });
    setGlare({ x: x * 100, y: y * 100, opacity: 0.18 });
  };

  const onLeave = () => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.7s ease',
      transformStyle: 'preserve-3d',
    });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      style={{ ...style, animationDelay: `${index * 120}ms` }}
      className="relative flex flex-col rounded-2xl bg-white border border-slate-100 shadow-sm cursor-pointer select-none animate-slide-up group overflow-hidden"
    >
      {/* Glare */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 overflow-hidden"
        style={{ opacity: glare.opacity, transition: 'opacity 0.3s ease' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.6) 0%, transparent 60%)` }}
        />
      </div>

      {/* Top accent */}
      <div className="h-1 w-full rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}66)` }} />

      <div className="p-8 sm:p-10 flex flex-col flex-1">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
          style={{ background: `${item.color}15`, transform: 'translateZ(20px)' }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={item.color}>
            <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
        <p className="text-slate-500 text-base leading-relaxed flex-1">{item.desc}</p>

        {/* CTA hint */}
        <div className="mt-8 flex items-center gap-2 text-base font-semibold" style={{ color: item.color }}>
          <span>Scopri di più</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Fullscreen Modal ─── */
function Modal({ item, onClose }: { item: Item; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Header band */}
        <div
          className="relative px-8 py-10 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}bb 100%)` }}
        >
          {/* Grid decoration */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-6 w-48 h-48 rounded-full bg-white/5" />

          <div className="relative flex items-center gap-6">
            <div className="w-18 h-18 rounded-2xl bg-white/20 flex items-center justify-center" style={{ width: '4.5rem', height: '4.5rem' }}>
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-sm">{item.title}</h2>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 sm:px-10 py-8 sm:py-10">
          <p className="text-slate-600 text-lg leading-relaxed mb-10">{item.detail}</p>

          <h4 className="text-sm font-bold tracking-widest uppercase mb-5" style={{ color: item.color }}>
            Caratteristiche
          </h4>
          <ul className="space-y-4">
            {item.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: `${item.color}18` }}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={item.color}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-slate-700 text-base leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-8 sm:px-10 pb-8 sm:pb-10">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-xl text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`, boxShadow: `0 8px 24px -6px ${item.color}55` }}
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammazioneSection() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Programmazione</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Programmazione della <span className="montserrat-italic text-[#006071]">Somministrazione</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {ITEMS.map((item, i) => (
            <TiltCard key={i} item={item} index={i} onOpen={() => setOpen(item)} />
          ))}
        </div>
      </div>

      {open && <Modal item={open} onClose={() => setOpen(null)} />}
    </section>
  );
}








