import { motion } from 'motion/react';
import render1 from '../../../assets/images/lupetta-maxi-render-compatibilita.webp';
import render2 from '../../../assets/images/lupetta-maxi-render-monitoraggio.webp';

const ITEMS = [
  {
    image: render1,
    alt: 'Render Lupetta Smart Home — vista chiusa',
    eyebrow: 'Vista esterna',
    title: 'Una struttura progettata per l’allevamento moderno',
    desc: 'Linee compatte e materiali pensati per resistere al lavoro quotidiano in stalla. Lupetta Smart Home si integra in modo discreto negli spazi esistenti senza compromettere praticità e accesso operativo.',
    bullets: [
      'Ingombro studiato per ottimizzare le corsie di servizio',
      'Apertura superiore per ispezioni rapide',
      'Finitura resistente agli agenti tipici dell’ambiente stalla',
    ],
  },
  {
    image: render2,
    alt: 'Render Lupetta Smart Home — vista interna',
    eyebrow: 'Vista interna',
    title: 'Un ambiente pensato attorno al vitello',
    desc: 'All’interno trovano spazio le dotazioni necessarie al benessere dell’animale: alimentazione, abbeveraggio, ventilazione e luce sono organizzati per favorire una crescita serena e regolare.',
    bullets: [
      'Doppia stazione di alimentazione e abbeveraggio',
      'Ventilazione naturale tramite pareti autoventilanti',
      <>Spazio adatto dal giorno<br className="sm:hidden" /> 1 al giorno 150 di vita</>,
    ],
  },
];

export default function RenderShowcaseSection() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-100 via-emerald-50/30 to-slate-50 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      
      {/* Enhanced background blurs */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20 sm:mb-28"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Design e funzione</span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-2 mb-6 leading-tight">
            Uno sguardo da <span className="montserrat-italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">vicino</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ogni dettaglio della Lupetta Smart Home nasce dall’incontro tra esperienza in allevamento e progettazione industriale. Forma, materiali e dotazioni sono studiati per semplificare il lavoro dell’allevatore e migliorare la vita quotidiana dell’animale.
          </p>
        </motion.div>

        {/* Render + text rows */}
        <div className="space-y-24 sm:space-y-36">
          {ITEMS.map((it, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={it.alt}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image Wrapper */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 40 : -40, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full h-80 sm:h-[28rem] lg:h-[32rem] relative flex items-center justify-center group"
                >
                  <img
                    src={it.image}
                    alt={it.alt}
                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-[0_20px_40px_rgba(0,96,113,0.15)] transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  />
                </motion.div>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="pl-2 lg:pl-0"
                >
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent/80 block mb-3">
                    {it.eyebrow}
                  </span>
                  <h3 className="montserrat-heading text-3xl sm:text-4xl md:text-[2.5rem] text-slate-900 tracking-tight mb-6 leading-tight group-hover:text-primary">
                    {it.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-10">
                    {it.desc}
                  </p>
                  <ul className="space-y-4">
                    {it.bullets.map((b, bulletIdx) => (
                      <motion.li
                        key={bulletIdx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + bulletIdx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 text-slate-700 bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/60 shadow-sm"
                      >
                        <div className="mt-1 flex items-center justify-center h-5 w-5 rounded-full bg-accent/20 shrink-0">
                          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(101,179,46,0.6)]" />
                        </div>
                        <span className="text-base leading-relaxed font-medium text-slate-700">{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
