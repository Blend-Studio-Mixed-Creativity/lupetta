import { useScroll, useTransform, motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Wind, Sun, Bot, Droplet, Layers } from 'lucide-react';

const STEPS = [
  {
    title: 'Dettaglio 01',
    label: 'Ventilazione',
    heading: 'Ventilazione',
    desc: 'Lupetta Smart Home è progettata per favorire un corretto ricambio dell’aria all’interno dello spazio dedicato agli animali. Una ventilazione adeguata contribuisce a mantenere un ambiente più salubre, riducendo il ristagno di umidità e migliorando il comfort quotidiano dei vitelli.',
    icon: <Wind className="w-5 h-5 text-accent" />,
    iconBg: 'bg-accent/20',
  },
  {
    title: 'Dettaglio 02',
    label: 'Fotoperiodo',
    heading: 'Fotoperiodo lungo di 16 ore',
    desc: 'Il sistema prevede una gestione della luce con fotoperiodo prolungato fino a 16 ore, pensata per accompagnare la crescita dell’animale in un ambiente più controllato. La qualità e la durata dell’esposizione luminosa possono contribuire al benessere generale e a una gestione più regolare delle fasi di sviluppo.',
    icon: <Sun className="w-5 h-5 text-primary" />,
    iconBg: 'bg-primary/20',
  },
  {
    title: 'Dettaglio 03',
    label: 'Allattatrice intelligente',
    heading: 'Allattatrice intelligente Lupetta',
    desc: 'La struttura può integrare il sistema Lupetta Smart Feeder, così da unire ambiente abitativo e alimentazione automatizzata. In questo modo l’allevatore può gestire la somministrazione del latte con maggiore continuità, mantenendo il controllo sui principali parametri di alimentazione.',
    icon: <Bot className="w-5 h-5 text-accent" />,
    iconBg: 'bg-accent/20',
  },
  {
    title: 'Dettaglio 04',
    label: 'Doppia stazione',
    heading: 'Doppia stazione di alimentazione e abbeveraggio',
    desc: 'Lupetta Smart Home è dotata di una doppia postazione dedicata all’alimentazione e all’acqua, per favorire una gestione più ordinata degli animali ospitati. Questa configurazione aiuta a rendere più accessibili i punti di somministrazione e contribuisce al comfort del gruppo.',
    icon: <Droplet className="w-5 h-5 text-primary" />,
    iconBg: 'bg-primary/20',
  },
  {
    title: 'Dettaglio 05',
    label: 'Pareti autoventilanti',
    heading: 'Pareti autoventilanti',
    desc: 'Le pareti sono progettate per favorire il passaggio naturale dell’aria, contribuendo a creare un ambiente più equilibrato e meno soggetto ad accumuli di calore o umidità. Una soluzione utile per migliorare il microclima interno e supportare il benessere degli animali.',
    icon: <Layers className="w-5 h-5 text-accent" />,
    iconBg: 'bg-accent/20',
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
    offset: ['start 15%', 'end 60%'],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const fillOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div ref={lineRef} className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 w-0.5 h-full -translate-x-1/2 bg-white/10 rounded-full" />
        <motion.div
          style={{
            height: fillHeight,
            opacity: fillOpacity,
            background: 'linear-gradient(to bottom, #006071, #65b32e, #00c8a0)',
          }}
          className="absolute left-6 md:left-1/2 top-0 w-0.5 -translate-x-1/2 rounded-full"
        />

        {STEPS.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className="relative flex items-center mb-12 md:mb-20">
              <div className={`hidden md:flex w-[calc(50%-1.5rem)] justify-end pr-10 ${isLeft ? '' : 'invisible'}`}>
                <StepCard step={step} />
              </div>

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-[#0d1f26] border-2 border-primary/60 flex items-center justify-center shadow-[0_0_12px_rgba(0,96,113,0.4)]">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
              </div>

              <div className={`w-full md:w-[calc(50%-1.5rem)] pl-16 md:pl-10 ${!isLeft ? '' : 'md:invisible md:block'}`}>
                <div className="md:hidden"><StepCard step={step} /></div>
                <div className={`hidden md:block ${!isLeft ? '' : 'invisible'}`}><StepCard step={step} /></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StepCard({ step }: { step: typeof STEPS[0] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm w-full">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${step.iconBg}`}>
          {step.icon}
        </div>
        <div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-1">{step.title}</span>
          <span className="text-xs font-bold tracking-widest uppercase text-accent">{step.label}</span>
          <h4 className="text-lg font-semibold text-white">{step.heading}</h4>
        </div>
      </div>
      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}

export default function MontaggioSection() {
  return (
    <section className="dark w-full relative overflow-hidden" style={{ background: '#0d1f26' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />

      <div className="relative z-10 pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Dettagli</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4">
            Scoprila nel <span className="montserrat-italic text-accent">dettaglio</span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Tutte le caratteristiche che rendono Lupetta Smart Home un ambiente progettato per il benessere del vitello.
          </p>
        </div>

        <CenteredTimeline />
      </div>
    </section>
  );
}
