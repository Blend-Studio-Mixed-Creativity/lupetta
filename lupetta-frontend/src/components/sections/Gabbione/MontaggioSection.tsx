import { useScroll, useTransform, motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Wind, Sun, Bot, Droplet, Layers } from 'lucide-react';

const STEPS = [
  {
    title: 'Dettaglio 01',
    label: 'Ventilazione',
    heading: 'Ventilazione',
    desc: 'Lupetta Smart Home è progettata per favorire un corretto ricambio dell’aria all’interno dello spazio dedicato agli animali. Una ventilazione adeguata contribuisce a mantenere un ambiente più salubre, riducendo il ristagno di umidità e migliorando il comfort quotidiano dei vitelli.',
    icon: <Wind className="w-5 h-5 text-white" />,
    iconBg: 'bg-gradient-to-br from-accent to-accent-dark',
  },
  {
    title: 'Dettaglio 02',
    label: 'Fotoperiodo',
    heading: <>Fotoperiodo <br className="sm:hidden" /> lungo di 16 ore</>,
    desc: 'Il sistema prevede una gestione della luce con fotoperiodo prolungato fino a 16 ore, pensata per accompagnare la crescita dell’animale in un ambiente più controllato. La qualità e la durata dell’esposizione luminosa possono contribuire al benessere generale e a una gestione più regolare delle fasi di sviluppo.',
    icon: <Sun className="w-5 h-5 text-white" />,
    iconBg: 'bg-gradient-to-br from-primary to-primary-dark',
  },
  {
    title: 'Dettaglio 03',
    label: 'Allattatrice intelligente',
    heading: 'Allattatrice intelligente Lupetta',
    desc: 'La struttura può integrare il sistema Lupetta Smart Feeder, così da unire ambiente abitativo e alimentazione automatizzata. In questo modo l’allevatore può gestire la somministrazione del latte con maggiore continuità, mantenendo il controllo sui principali parametri di alimentazione.',
    icon: <Bot className="w-5 h-5 text-white" />,
    iconBg: 'bg-gradient-to-br from-accent to-accent-dark',
  },
  {
    title: 'Dettaglio 04',
    label: 'Doppia stazione',
    heading: 'Doppia stazione di alimentazione e abbeveraggio',
    desc: 'Lupetta Smart Home è dotata di una doppia postazione dedicata all’alimentazione e all’acqua, per favorire una gestione più ordinata degli animali ospitati. Questa configurazione aiuta a rendere più accessibili i punti di somministrazione e contribuisce al comfort del gruppo.',
    icon: <Droplet className="w-5 h-5 text-white" />,
    iconBg: 'bg-gradient-to-br from-primary to-primary-dark',
  },
  {
    title: 'Dettaglio 05',
    label: 'Pareti autoventilanti',
    heading: 'Pareti autoventilanti',
    desc: 'Le pareti sono progettate per favorire il passaggio naturale dell’aria, contribuendo a creare un ambiente più equilibrato e meno soggetto ad accumuli di calore o umidità. Una soluzione utile per migliorare il microclima interno e supportare il benessere degli animali.',
    icon: <Layers className="w-5 h-5 text-white" />,
    iconBg: 'bg-gradient-to-br from-accent to-accent-dark',
  },
];

function CenteredTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setLineHeight(lineRef.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 65%'],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const fillOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div ref={lineRef} className="relative">
        {/* Grey background timeline track */}
        <div className="absolute left-6 md:left-1/2 top-0 w-0.5 h-full -translate-x-1/2 bg-white/10 rounded-full" />
        {/* Glowing moving timeline track */}
        <motion.div
          style={{
            height: fillHeight,
            opacity: fillOpacity,
            background: 'linear-gradient(to bottom, #006071, #65b32e, #00c8a0)',
          }}
          className="absolute left-6 md:left-1/2 top-0 w-0.5 -translate-x-1/2 rounded-full shadow-[0_0_12px_#00c8a0]"
        />

        {STEPS.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className="relative flex items-center mb-16 md:mb-24">
              {/* Left Column Card (Desktop) */}
              <div className={`hidden md:flex w-[calc(50%-2rem)] justify-end pr-12 ${isLeft ? '' : 'invisible pointer-events-none'}`}>
                <AnimatedStepCard step={step} isLeft={true} />
              </div>

              {/* Timeline Center Node (Spring animation) */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 15, delay: 0.15 }}
                  className="w-12 h-12 rounded-full bg-[#0d1f26] border-2 border-primary/60 flex items-center justify-center shadow-[0_0_20px_rgba(0,96,113,0.5)] hover:border-accent hover:shadow-[0_0_30px_rgba(101,179,46,0.6)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-4 h-4 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 animate-pulse" />
                </motion.div>
              </div>

              {/* Right Column Card (Desktop) / Full Width (Mobile) */}
              <div className={`w-full md:w-[calc(50%-2rem)] pl-20 md:pl-12 ${!isLeft ? '' : 'md:invisible md:pointer-events-none md:block'}`}>
                <div className="md:hidden">
                  <AnimatedStepCard step={step} isLeft={false} />
                </div>
                <div className={`hidden md:block ${!isLeft ? '' : 'invisible pointer-events-none'}`}>
                  <AnimatedStepCard step={step} isLeft={false} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnimatedStepCard({ step, isLeft }: { step: typeof STEPS[0]; isLeft: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="w-full"
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl w-full transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/[0.06] hover:shadow-[0_25px_50px_-12px_rgba(101,179,46,0.15)] group cursor-default relative overflow-hidden">
        {/* Soft radial backdrop glow on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(101,179,46,0.12)_0%,transparent_60%)] pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-5 relative z-10">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${step.iconBg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-[0_8px_16px_rgba(0,0,0,0.3)]`}>
            {step.icon}
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight leading-snug">{step.heading}</h4>
          </div>
        </div>
        <p className="text-white/70 text-base leading-relaxed relative z-10 font-light">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function MontaggioSection() {
  return (
    <section className="dark w-full relative overflow-hidden pb-16" style={{ background: '#0d1f26' }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />

      <div className="relative z-10 pt-20 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">Dettagli</span>
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white tracking-tight mt-2 mb-6">
              Scoprila nel <span className="montserrat-italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">dettaglio</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
              Tutte le caratteristiche che rendono Lupetta Smart Home un ambiente progettato per il benessere del vitello.
            </p>
          </motion.div>
        </div>

        <CenteredTimeline />
      </div>
    </section>
  );
}
