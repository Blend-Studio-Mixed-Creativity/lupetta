import { useScrollReveal, useCountUp } from '../../../hooks/useScrollReveal';
import { motion } from 'motion/react';

const STATS = [
  {
    value: 150, suffix: '+', label: 'Sistemi installati',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    color: '#006071',
  },
  {
    value: 98, suffix: '%', label: 'Clienti soddisfatti',
    iconPath: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
    color: '#65b32e',
  },
  {
    value: 35, suffix: '%', label: 'Riduzione sprechi',
    iconPath: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    color: '#006071',
  },
  {
    value: 12, suffix: '', label: 'Regioni coperte',
    iconPath: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
    color: '#65b32e',
  },
];

function StatCard({ stat, idx }: { stat: typeof STATS[0]; idx: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.23, 1, 0.32, 1] }}
      className="group relative flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: `1px solid ${stat.color}40`,
        boxShadow: `0 0 40px ${stat.color}15, inset 0 1px 0 rgba(255,255,255,0.07)`,
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: `${stat.color}20`, border: `1.5px solid ${stat.color}50` }}
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={stat.color}>
          <path strokeLinecap="round" strokeLinejoin="round" d={stat.iconPath} />
        </svg>
      </div>

      {/* Number */}
      <div
        className="text-5xl sm:text-6xl font-black montserrat-heading tabular-nums leading-none mb-3"
        style={{ color: stat.color }}
      >
        {count}{stat.suffix}
      </div>

      {/* Label */}
      <p className="text-white/55 text-sm font-medium leading-snug">{stat.label}</p>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full opacity-50"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function StatisticheSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden py-20 sm:py-28"
      style={{ background: 'linear-gradient(160deg, #071217 0%, #0c2030 55%, #071217 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,96,113,0.22)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(101,179,46,0.15)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-5 border"
            style={{ background: 'rgba(0,96,113,0.2)', color: '#4ecbdf', borderColor: 'rgba(0,96,113,0.4)' }}
          >
            I Numeri di Lupetta
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Risultati concreti,{' '}
            <span className="montserrat-italic text-transparent bg-clip-text bg-linear-to-r from-[#4ecbdf] to-[#65b32e]">
              misurati sul campo
            </span>
          </h2>
          <p className="mt-5 text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            Dati reali raccolti nelle aziende agricole italiane che utilizzano Lupetta ogni giorno.
          </p>
        </motion.div>

        {/* Grid stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


