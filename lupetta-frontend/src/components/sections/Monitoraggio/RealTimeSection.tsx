import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { motion } from 'motion/react';
import breakImg from '../../../assets/images/lupetta-mini-break-03.webp';

const FEATURES = [
  {
    title: 'Visualizzazione consumi',
    desc: 'Lupetta consente di consultare i consumi registrati da ogni vitello, così da verificare quanto latte è stato assunto e confrontare l’andamento nel tempo. Questo aiuta a mantenere un controllo più preciso sulla crescita e sulla regolarità alimentare.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 3v18h18" />
        <path d="M7 15l3-3 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Comportamenti alimentari',
    desc: 'Il sistema permette di osservare come ogni animale si avvicina alla somministrazione, quante volte richiede il pasto e se il suo comportamento cambia rispetto alla norma. Queste informazioni aiutano l’allevatore a intervenire con maggiore tempestività quando qualcosa non segue l’andamento previsto.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 11-8 0V6a4 4 0 014-4z" />
        <path d="M5 22v-2a7 7 0 0114 0v2" />
      </svg>
    ),
  },
];

export default function RealTimeSection() {
  const { ref } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="w-full bg-linear-to-br from-slate-50 via-white to-emerald-50/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #65b32e, #006071, transparent)' }} />

      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #006071 1px, transparent 1px), linear-gradient(to bottom, #006071 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative max-w-xl w-full group">
              {/* Glow halo */}
              <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-accent/30 via-primary/20 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/80 shadow-2xl bg-white p-3 transition-transform duration-500 group-hover:-translate-y-1">
                <img
                  src={breakImg}
                  alt="Monitoraggio vitelli in stalla"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                {/* Live badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 shadow-md border border-slate-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-primary">Live</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Real-Time
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-5 mb-8 leading-tight">
              Monitoraggio in <span className="montserrat-italic text-accent">tempo reale</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 text-slate-500">
              Il monitoraggio in tempo reale permette all’allevatore di seguire l’andamento dei vitelli durante tutta la giornata, senza dover controllare manualmente ogni singola situazione. Attraverso i dati raccolti da Lupetta, è possibile avere una visione aggiornata dei consumi e del comportamento alimentare, individuando più facilmente eventuali variazioni che possono richiedere attenzione.
            </p>
            <div className="space-y-4">
              {FEATURES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
