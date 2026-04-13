import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onOpen}
        style={{
          ...style,
          background: 'rgba(11, 26, 32, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        className="relative flex flex-col rounded-2xl cursor-pointer select-none group overflow-hidden h-full"
      >
        {/* Glare */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10 overflow-hidden"
          style={{ opacity: glare.opacity, transition: 'opacity 0.3s ease' }}
        >
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)` }} />
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.color}15 0%, transparent 60%)` }} />

        {/* Top accent */}
        <div className="h-0.5 w-full rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}44, transparent)` }} />

        <div className="p-8 sm:p-10 flex flex-col flex-1 relative z-10">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.6, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
            style={{ background: `${item.color}20`, border: `1px solid ${item.color}33` }}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={item.color}>
              <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
            </svg>
          </motion.div>

          <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{item.title}</h3>
          <p className="text-base leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>

          <div className="mt-8 flex items-center gap-2 text-base font-semibold" style={{ color: item.color }}>
            <span>Scopri di più</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Fullscreen Modal ─── */
function Modal({ item, onClose }: { item: Item; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 backdrop-blur-md" style={{ background: 'rgba(0,10,15,0.8)' }} />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 w-full max-w-2xl rounded-3xl overflow-hidden"
          style={{ background: 'rgba(11,26,32,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative px-8 py-10 overflow-hidden" style={{ background: `linear-gradient(135deg, ${item.color}22 0%, transparent 100%)`, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: item.color }} />
            <div className="relative flex items-center gap-6">
              <div className="w-18 h-18 rounded-2xl flex items-center justify-center" style={{ width: '4.5rem', height: '4.5rem', background: `${item.color}25`, border: `1px solid ${item.color}40` }}>
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke={item.color}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-sm">{item.title}</h2>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-8 sm:px-10 py-8 sm:py-10">
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.detail}</p>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: item.color }}>Caratteristiche</h4>
            <ul className="space-y-4">
              {item.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: `${item.color}20`, border: `1px solid ${item.color}33` }}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={item.color}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="px-8 sm:px-10 pb-8 sm:pb-10">
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`, boxShadow: `0 8px 24px -6px ${item.color}44` }}
            >
              Chiudi
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProgrammazioneSection() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section style={{ background: '#0d1f26' }} className="w-full relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>Programmazione</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4">
            Programmazione della <span className="montserrat-italic" style={{ color: '#65b32e' }}>Somministrazione</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <TiltCard key={i} item={item} index={i} onOpen={() => setOpen(item)} />
          ))}
        </div>
      </div>

      {open && <Modal item={open} onClose={() => setOpen(null)} />}
    </section>
  );
}








