import { useScroll, useTransform, motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Wrench, Package, Settings, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    title: 'Step 1',
    label: 'Preparazione strutturale',
    heading: 'Lorem ipsum preparatio',
    desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est.',
    icon: <Package className="w-5 h-5 text-[#006071]" />,
    iconBg: 'bg-[#006071]/20',
  },
  {
    title: 'Step 2',
    label: 'Montaggio principale',
    heading: 'Dolor sit montaggio structurale',
    desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Pellentesque habitant morbi tristique senectus.',
    icon: <Wrench className="w-5 h-5 text-[#65b32e]" />,
    iconBg: 'bg-[#65b32e]/20',
  },
  {
    title: 'Step 3',
    label: 'Integrazione',
    heading: 'Consectetur integrazione sistema',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.',
    icon: <Settings className="w-5 h-5 text-[#006071]" />,
    iconBg: 'bg-[#006071]/20',
  },
  {
    title: 'Step 4',
    label: 'Verifica finale',
    heading: 'Adipiscing verificatio finalis',
    desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra vestibulum.',
    icon: <CheckCircle className="w-5 h-5 text-[#65b32e]" />,
    iconBg: 'bg-[#65b32e]/20',
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
        {/* Center vertical track */}
        <div className="absolute left-6 md:left-1/2 top-0 w-0.5 h-full -translate-x-1/2 bg-white/10 rounded-full" />
        {/* Animated fill */}
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
              {/* Left content (desktop even) / empty (desktop odd) */}
              <div className={`hidden md:flex w-[calc(50%-1.5rem)] justify-end pr-10 ${isLeft ? '' : 'invisible'}`}>
                <StepCard step={step} />
              </div>

              {/* Center dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-[#0d1f26] border-2 border-[#006071]/60 flex items-center justify-center shadow-[0_0_12px_rgba(0,96,113,0.4)]">
                  <div className="w-3 h-3 rounded-full bg-[#65b32e]" />
                </div>
                <span className="text-xs font-bold text-white/30 tracking-widest uppercase hidden md:block">{step.title}</span>
              </div>

              {/* Right content (desktop odd) / all mobile */}
              <div className={`w-full md:w-[calc(50%-1.5rem)] pl-16 md:pl-10 ${!isLeft ? '' : 'md:invisible md:block'}`}>
                <span className="text-xs font-bold tracking-widest uppercase text-white/30 mb-1 block md:hidden">{step.title}</span>
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
          <span className="text-xs font-bold tracking-widest uppercase text-[#65b32e]">{step.label}</span>
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
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      {/* Central radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />

      <div className="relative z-10 pt-16 sm:pt-24">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#65b32e]">Processo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4">
            Montaggio e <span className="montserrat-italic" style={{ color: '#65b32e' }}>configurazione</span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Segui i passaggi per un'installazione strutturale perfetta
          </p>
        </div>

        <CenteredTimeline />
      </div>
    </section>
  );
}








