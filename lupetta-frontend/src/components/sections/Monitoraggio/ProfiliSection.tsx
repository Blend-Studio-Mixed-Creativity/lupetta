import { motion } from 'motion/react';

const PROFILES = [
  { name: 'Lorem Ipsum #001', weight: '45 kg', feeds: '6x/giorno', status: 'Attivo', pct: 78 },
  { name: 'Dolor Sit #002', weight: '38 kg', feeds: '5x/giorno', status: 'Attivo', pct: 62 },
  { name: 'Amet Consectetur #003', weight: '52 kg', feeds: '7x/giorno', status: 'Attivo', pct: 91 },
];

export default function ProfiliSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #65b32e, #006071, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>Gestione Profili</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-8 leading-tight">
              Creazione e gestione<br /><span className="montserrat-italic" style={{ color: '#006071' }}>profili vitello</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Inserimento dati e condizioni', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est.' },
                { title: 'Aggiornamenti stato di crescita', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-0.5 rounded-full shrink-0 mt-1" style={{ background: 'linear-gradient(to bottom, #65b32e, #006071)', minHeight: '100%' }} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: analytics panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              {/* Panel header */}
              <div className="px-6 py-5 flex items-center justify-between" style={{ borderBottom: '1px solid #e2e8f0' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-slate-800">Profili Attivi</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'rgba(101,179,46,0.15)', color: '#65b32e' }}>
                  {PROFILES.length} online
                </span>
              </div>

              {/* Profile rows */}
              <div className="p-4 space-y-3">
                {PROFILES.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-5 group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-default"
                    style={{ background: '#fff', border: '1px solid #e2e8f0' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">{p.name}</div>
                        <div className="text-xs mt-0.5 text-slate-400">{p.weight} · {p.feeds}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#65b32e]" />
                        <span className="text-xs" style={{ color: '#65b32e' }}>{p.status}</span>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 rounded-full overflow-hidden bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.pct}%` }}
                        transition={{ delay: i * 0.12 + 0.3, duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #006071, #65b32e)' }}
                      />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[10px] text-slate-400">Consumo giornaliero</span>
                      <span className="text-[10px] font-medium" style={{ color: '#65b32e' }}>{p.pct}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer stat */}
              <div className="grid grid-cols-3 gap-px" style={{ background: '#e2e8f0', borderTop: '1px solid #e2e8f0' }}>
                {[
                  { label: 'Media peso', value: '45 kg' },
                  { label: 'Pasti oggi', value: '18' },
                  { label: 'Efficienza', value: '77%' },
                ].map((s, i) => (
                  <div key={i} className="py-4 text-center bg-slate-50">
                    <div className="text-lg font-bold text-slate-800">{s.value}</div>
                    <div className="text-[10px] mt-0.5 text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}







