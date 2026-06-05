import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ITEMS = [
  {
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Impostazione della frequenza',
    desc: 'Lupetta consente di programmare la frequenza di somministrazione del latte durante la giornata, distribuendo i pasti in modo più regolare e vicino alle esigenze naturali del vitello. L’allevatore può così evitare somministrazioni troppo concentrate e garantire una gestione alimentare più continua, ordinata e controllata.',
    detail: 'Programmare la somministrazione in più pasti distribuiti equamente nell’arco delle 24 ore riduce lo stress digestivo dell’animale. Lupetta gestisce la pianificazione in modo completamente autonomo, erogando il latte solo quando il vitello è effettivamente autorizzato a riceverlo secondo il piano impostato.',
    features: ['Frequenza dei pasti bilanciata', 'Intervalli regolari automatici', 'Prevenzione di somministrazioni eccessive', 'Rispetto dei ritmi biologici del vitello'],
    color: '#006071',
  },
  {
    iconPath: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    title: 'Gestione quantità e incrementi',
    desc: 'Il sistema permette di definire le quantità di latte da somministrare e di gestire eventuali incrementi progressivi nel tempo, accompagnando il vitello nelle diverse fasi di crescita. In questo modo il piano alimentare può essere adattato in modo più preciso all’età, allo sviluppo e alle necessità dell’animale.',
    detail: 'La crescita del vitello richiede un incremento graduale dei nutrienti. Lupetta permette di impostare curve di accrescimento personalizzate che aumentano automaticamente la razione giornaliera o la concentrazione di latte in polvere giorno dopo giorno, senza richiedere interventi manuali quotidiani.',
    features: ['Curve di crescita automatiche', 'Incremento progressivo del latte', 'Fasi di svezzamento impostabili', 'Adattamento automatico della dieta'],
    color: '#65b32e',
  },
  {
    iconPath: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
    title: 'Limiti massimi personalizzabili',
    desc: 'Lupetta consente di impostare limiti massimi di somministrazione personalizzabili, così da mantenere il controllo sulla quantità di latte erogata a ogni animale. Questa funzione aiuta l’allevatore a gestire l’alimentazione con maggiore sicurezza, evitando eccessi e mantenendo un piano coerente con gli obiettivi di crescita.',
    detail: 'Per tutelare la salute digestiva dei vitelli ed evitare indigestioni, Lupetta consente di definire una soglia massima invalicabile di assunzione per singolo pasto e per l’intera giornata. Se un animale tenta di superare il limite, il sistema blocca l’erogazione ed invia una segnalazione all’allevatore.',
    features: ['Soglia massima per pasto e giorno', 'Controllo volumetrico di sicurezza', 'Prevenzione delle indigestioni', 'Alert per tentato sforamento del limite'],
    color: '#006071',
  },
];

type Item = (typeof ITEMS)[number];

/* ─── Card ─── */
function TiltCard({ item, onOpen, index }: { item: Item; onOpen: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        onClick={onOpen}
        style={{
          background: 'rgba(11, 26, 32, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        className="relative flex flex-col rounded-2xl cursor-pointer select-none group overflow-hidden h-full transition-colors duration-300 hover:border-white/20"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.color}15 0%, transparent 60%)` }} />

        {/* Top accent */}
        <div className="h-0.5 w-full rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}44, transparent)` }} />

        <div className="p-8 sm:p-10 flex flex-col flex-1 relative z-10">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
            style={{ background: `${item.color}20`, border: `1px solid ${item.color}33` }}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={item.color}>
              <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
            </svg>
          </div>

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
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
          style={{ background: 'rgba(11,26,32,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative px-6 sm:px-8 py-8 sm:py-10 overflow-hidden" style={{ background: `linear-gradient(135deg, ${item.color}22 0%, transparent 100%)`, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: item.color }} />
            <div className="relative flex items-center gap-4 sm:gap-6 pr-10">
              <div className="rounded-2xl flex items-center justify-center shrink-0" style={{ width: '4.5rem', height: '4.5rem', background: `${item.color}25`, border: `1px solid ${item.color}40` }}>
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke={item.color}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">{item.title}</h2>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-8 sm:py-10">
            <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.detail}</p>
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
          <div className="px-6 sm:px-10 pb-8 sm:pb-10">
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
            Programmazione della <span className="montserrat-italic" style={{ color: '#65b32e' }}>somministrazione</span>
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








