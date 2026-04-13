import { motion } from 'motion/react';
import { BackgroundGradientAnimation } from '../../ui/BackgroundGradientAnimation';

const STATS = [
  {
    iconPath: 'M3 13.5v6a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6-8v14a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-14a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6 4v10a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75z',
    value: 'Lorem', label: 'Dashboard Realtime', color: '#006071',
  },
  {
    iconPath: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
    value: 'Ipsum', label: 'Notifiche Smart', color: '#65b32e',
  },
  {
    iconPath: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 9h3',
    value: 'Dolor', label: 'Accesso Mobile', color: '#006071',
  },
  {
    iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
    value: 'Amet', label: 'Sicurezza Dati', color: '#65b32e',
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
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

              <div className="p-7 sm:p-8 text-center relative z-10">
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








