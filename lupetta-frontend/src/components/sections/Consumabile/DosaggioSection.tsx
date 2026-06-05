import { motion } from 'motion/react';

const STEPS = [
  {
    step: '01',
    title: 'Temperatura corretta',
    desc: 'Sciogli la polvere in acqua a circa 45–50 °C per favorire una dispersione omogenea e mantenere intatte le proprietà nutrizionali.',
    detail: 'Temp. ideale: 45–50 °C',
    glowColor: '#006071',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Diluizione consigliata',
    desc: 'Rispetta la concentrazione indicata sulla confezione (in genere 130–150 g per litro) per garantire l\'apporto energetico corretto al vitello.',
    detail: '130–150 g / litro',
    glowColor: '#65b32e',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Miscelazione omogenea',
    desc: 'Mescola fino a ottenere una soluzione liscia, senza grumi, per assicurare la stessa qualità nutritiva in ogni pasto.',
    detail: 'Nessun grumo visibile',
    glowColor: '#006071',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Somministrazione',
    desc: 'Servi alla temperatura del corpo (38–40 °C), suddividendo i pasti nella giornata per favorire una digestione regolare e un\'assimilazione ottimale.',
    detail: 'Temp. servizio: 38–40 °C',
    glowColor: '#65b32e',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '45–50 °C', label: 'Temperatura di scioglimento', color: '#006071' },
  { value: '130–150 g/L', label: 'Concentrazione consigliata', color: '#65b32e' },
  { value: '38–40 °C', label: 'Temperatura di servizio', color: '#006071' },
  { value: '4–6 pasti', label: 'Distribuiti nella giornata', color: '#65b32e' },
];

export default function DosaggioSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Top/bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #65b32e, #006071, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />

      {/* Subtle background orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(101,179,46,0.05) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,96,113,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: '#65b32e', background: 'rgba(101,179,46,0.08)', border: '1px solid rgba(101,179,46,0.2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#65b32e] animate-pulse inline-block" />
            Dosaggio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-2">
            Preparazione e <span className="montserrat-italic" style={{ color: '#006071' }}>dosaggio consigliato</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Seguire le istruzioni di preparazione garantisce al vitello un alimento sempre bilanciato, sicuro e di alta qualità ad ogni somministrazione.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[6%] right-[6%] h-px" style={{ background: 'linear-gradient(90deg, #006071, #65b32e, #006071, #65b32e)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {STEPS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative flex flex-col"
              >
                {/* Step number badge — sits on the connector line */}
                <div className="flex justify-center mb-8 -mt-4 relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${item.glowColor}, ${item.glowColor}bb)`, color: '#fff' }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Card body */}
                <div
                  className="flex-1 rounded-2xl p-7 relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl text-center sm:text-left"
                  style={{ border: `1px solid ${item.glowColor}22`, background: '#fafafa' }}
                >
                  {/* Big watermark number */}
                  <span
                    className="absolute -top-2 -right-1 text-7xl font-black montserrat-heading select-none leading-none"
                    style={{ color: `${item.glowColor}10` }}
                  >
                    {item.step}
                  </span>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.glowColor}0d 0%, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>

                    {/* Detail chip */}
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: `${item.glowColor}12`, color: item.glowColor }}
                    >
                      <span className="w-1 h-1 rounded-full inline-block" style={{ background: item.glowColor }} />
                      {item.detail}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #013d47, #006071)', boxShadow: '0 20px 60px rgba(0,60,80,0.18)' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                viewport={{ once: true }}
                className="px-3 py-6 sm:px-6 sm:py-8 text-center"
              >
                <div className="text-xl sm:text-4xl font-black montserrat-heading text-white mb-1 leading-none" style={{ textShadow: `0 0 30px ${s.color}66` }}>
                  {s.value}
                </div>
                <div className="text-xs font-medium tracking-wide text-white/50 mt-1.5">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
