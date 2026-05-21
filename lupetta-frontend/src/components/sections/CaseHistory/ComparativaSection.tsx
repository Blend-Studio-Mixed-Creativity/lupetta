// import RevealSection from '../../RevealSection';
import { motion } from 'motion/react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const FEATURES = [
  { name: 'Monitoraggio remoto 24/7', lupetta: true, a: true, b: false },
  { name: 'Accesso cloud & app mobile', lupetta: true, a: false, b: true },
  { name: 'Programmazione individuale', lupetta: true, a: true, b: false },
  { name: 'Multi-profilo alimentare', lupetta: true, a: false, b: false },
  { name: 'Report & statistiche avanzate', lupetta: true, a: false, b: true },
  { name: 'Assistenza dedicata Italia', lupetta: true, a: false, b: false },
  { name: 'Igienizzazione automatica', lupetta: true, a: true, b: true },
];

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#65b32e]/15">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#65b32e]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

function Cross() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100">
      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

export default function ComparativaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      {/* Header */}
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#006071]/8 text-[#006071] font-bold text-xs tracking-[0.2em] uppercase mb-5 border border-[#006071]/15">
          Comparativa
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mt-2">
          Perché scegliere{' '}
          <span className="montserrat-italic text-transparent bg-clip-text bg-linear-to-r from-[#006071] to-[#65b32e]">
            Lupetta
          </span>
        </h2>
        <p className="text-slate-500 mt-5 max-w-xl mx-auto leading-relaxed">
          Il confronto parla chiaro: Lupetta offre funzionalità che nessun altro sistema può eguagliare.
        </p>
      </motion.div>

      {/* Table */}
      <motion.div
        className="rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Table header */}
        <div className="grid grid-cols-[1fr_72px_64px_64px] sm:grid-cols-[1fr_140px_110px_110px] items-center bg-gradient-to-r from-slate-50 to-slate-50/60 border-b border-slate-100">
          <div className="px-4 sm:px-8 py-4 sm:py-5 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
            Funzionalità
          </div>
          <div className="px-1 sm:px-4 py-4 sm:py-5 text-center">
            <span
              className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider uppercase text-white"
              style={{ background: 'linear-gradient(135deg, #006071, #65b32e)' }}
            >
              Lupetta
            </span>
          </div>
          <div className="px-1 sm:px-4 py-4 sm:py-5 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
            Brand A
          </div>
          <div className="px-1 sm:px-4 py-4 sm:py-5 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
            Brand B
          </div>
        </div>

        {/* Rows */}
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-[1fr_72px_64px_64px] sm:grid-cols-[1fr_140px_110px_110px] items-center border-b border-slate-50 last:border-b-0 hover:bg-[#006071]/[0.02] transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-4 sm:px-8 py-4 sm:py-5">
              <span className="text-slate-700 font-medium text-xs sm:text-base leading-snug">{f.name}</span>
            </div>
            <div className="px-1 sm:px-4 py-4 sm:py-5 flex justify-center">
              {f.lupetta ? <Check /> : <Cross />}
            </div>
            <div className="px-1 sm:px-4 py-4 sm:py-5 flex justify-center">
              {f.a ? <Check /> : <Cross />}
            </div>
            <div className="px-1 sm:px-4 py-4 sm:py-5 flex justify-center">
              {f.b ? <Check /> : <Cross />}
            </div>
          </motion.div>
        ))}

        {/* Score footer */}
        <div className="grid grid-cols-[1fr_72px_64px_64px] sm:grid-cols-[1fr_140px_110px_110px] items-center bg-gradient-to-r from-[#006071]/5 to-[#65b32e]/5 border-t border-slate-100">
          <div className="px-4 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
            Totale
          </div>
          <div className="px-1 sm:px-4 py-4 sm:py-5 text-center">
            <span className="text-xl sm:text-2xl font-black" style={{ color: '#006071' }}>
              {FEATURES.filter(f => f.lupetta).length}/{FEATURES.length}
            </span>
          </div>
          <div className="px-1 sm:px-4 py-4 sm:py-5 text-center">
            <span className="text-base sm:text-xl font-bold text-slate-400">
              {FEATURES.filter(f => f.a).length}/{FEATURES.length}
            </span>
          </div>
          <div className="px-1 sm:px-4 py-4 sm:py-5 text-center">
            <span className="text-base sm:text-xl font-bold text-slate-400">
              {FEATURES.filter(f => f.b).length}/{FEATURES.length}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}



