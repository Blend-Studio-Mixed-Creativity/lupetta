import { motion } from 'motion/react';
import { BackgroundGradientAnimation } from '../../ui/BackgroundGradientAnimation';

const STATS = [
  {
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    value: 'Erogazione pasti', label: 'Ogni Lupetta mostra quanti pasti ha erogato e se è in funzione.', color: '#65b32e',
  },
  {
    iconPath: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
    value: 'Temperatura del liquido', label: 'Un colore rosso avverte se la temperatura dell’acqua è troppo alta', color: '#ef4444',
  },
  {
    iconPath: 'M12 21a9.004 9.004 0 008.716-6.747c.224-.827.054-1.724-.465-2.422l-7.051-9.402a1.5 1.5 0 00-2.4 0l-7.051 9.402c-.519.698-.689 1.595-.465 2.422A9.004 9.004 0 0012 21z',
    value: 'Livello del Latte', label: 'Misurazione in tempo reale con alert in caso di valori sospetti', color: '#006071',
  },
  {
    iconPath: 'M3 13.5v6a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6-8v14a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-14a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6 4v10a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75z',
    value: 'Storico dati', label: 'Grafico intuitivo per vedere andamenti e valori nutrizionali', color: '#65b32e',
  },
];

export default function DashboardOverview() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 30, 40)"
      gradientBackgroundEnd="rgb(0, 10, 20)"
      firstColor="0, 96, 113"
      secondColor="101, 179, 46"
      thirdColor="0, 200, 160"
      fourthColor="0, 60, 80"
      fifthColor="50, 100, 60"
      pointerColor="101, 179, 46"
      blendingValue="hard-light"
      interactive={false}
      containerClassName="w-full py-20 sm:py-28 lg:py-36"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#ffffff' }}>
          Funzionalità chiave
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Tutto sotto <span className="montserrat-italic" style={{ color: '#ffffff' }}>controllo</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.03 }}
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative rounded-2xl overflow-hidden cursor-default h-full group"
              style={{
                background: 'rgba(11, 26, 32, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)`,
              }}
            >
              {/* Top gradient line */}
              <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${stat.color}, ${stat.color}44, transparent)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${stat.color}18 0%, transparent 60%)` }}
              />

              <div className="p-5 sm:p-7 md:p-8 text-center relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.12 + 0.4, duration: 0.6, type: 'spring', stiffness: 200, damping: 15 }}
                  viewport={{ once: true }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}33, ${stat.color}11)`,
                    border: `1px solid ${stat.color}44`,
                  }}
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={stat.color}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.iconPath} />
                  </svg>
                </motion.div>

                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </BackgroundGradientAnimation>
  );
}








