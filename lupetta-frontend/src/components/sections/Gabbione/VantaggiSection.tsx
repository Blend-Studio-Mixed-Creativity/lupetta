import { motion } from 'motion/react';

const VANTAGGI = [
  {
    title: 'Pronta all’uso',
    desc: 'Lupetta Smart Home è pensata per essere installata e utilizzata in modo semplice, senza procedure complesse. Una volta posizionata, consente all’allevatore di integrare rapidamente la soluzione nella gestione quotidiana della stalla.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Completa di dotazioni',
    desc: 'La struttura è progettata per offrire una configurazione completa, con gli elementi necessari per garantire funzionalità, comfort e praticità operativa. Ogni dettaglio è pensato per rendere l’ambiente più adatto alla crescita dell’animale.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20 7l-9 9-5-5" />
        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
      </svg>
    ),
  },
  {
    title: 'Gestione completa dell’animale',
    desc: 'Lupetta Smart Home permette di organizzare in modo più ordinato le principali esigenze del vitello, dall’alimentazione alla permanenza nello spazio dedicato. L’obiettivo è offrire un ambiente stabile, controllato e adatto al benessere quotidiano.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 11-8 0V6a4 4 0 014-4z" />
        <path d="M5 22v-2a7 7 0 0114 0v2" />
      </svg>
    ),
  },
  {
    title: 'Adattabile dal giorno 1 al giorno 150',
    desc: 'Lupetta Smart Home accompagna il vitello dalla primissima fase di vita fino a uno sviluppo più avanzato, adattandosi alle diverse esigenze di crescita. Questo permette una gestione più continua e coerente nel tempo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    title: 'Facile da pulire',
    desc: 'Le superfici e la struttura sono pensate per semplificare le operazioni di pulizia e mantenere un ambiente più igienico. Questo riduce i tempi di intervento dell’operatore e contribuisce a una gestione più sicura degli spazi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3 12c2-2 5-2 7 0s5 2 7 0 3-2 4-1" />
        <path d="M3 18c2-2 5-2 7 0s5 2 7 0 3-2 4-1" />
        <path d="M3 6c2-2 5-2 7 0s5 2 7 0 3-2 4-1" />
      </svg>
    ),
  },
  {
    title: 'Removibile',
    desc: 'La struttura può essere spostata o rimossa in base alle necessità dell’allevamento. Questa flessibilità permette di riorganizzare gli spazi con maggiore libertà, adattando la gestione aziendale ai diversi momenti produttivi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 7h16M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        <path d="M19 7l-1 13a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7" />
        <path d="M3 12h6m6 0h6" />
      </svg>
    ),
  },
];

export default function VantaggiSection() {
  return (
    <section className="w-full bg-slate-50 py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />
      
      {/* Enhanced background elements */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16 sm:mb-24"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">I vantaggi</span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-2 mb-6 leading-tight">
            I vantaggi di <span className="montserrat-italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Lupetta Smart Home</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Non si tratta solo di una Lupetta Smart Home, ma di una soluzione pensata per accompagnare la crescita dell’animale nelle diverse fasi, integrando praticità operativa, igiene, comfort e possibilità di utilizzo in contesti aziendali differenti. La struttura è studiata per semplificare il lavoro quotidiano, favorire il benessere dei vitelli e rendere più ordinata la gestione degli spazi in allevamento.
          </p>
        </motion.div>

        {/* 6 cards: 3 x 2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VANTAGGI.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-xl p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,96,113,0.06)] hover:border-accent/30 hover:bg-white overflow-hidden cursor-default"
            >
              {/* Soft premium inner glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,rgba(101,179,46,0.08)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex flex-col items-start relative z-10 h-full">
                <div className="flex items-center gap-4 mb-5 w-full">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-100 text-slate-600 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(101,179,46,0.2)]">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
