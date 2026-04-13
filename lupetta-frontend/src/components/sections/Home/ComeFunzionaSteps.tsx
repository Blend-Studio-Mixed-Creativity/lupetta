import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { step: '01', title: 'Installatio', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum.' },
  { step: '02', title: 'Configuratio', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper.' },
  { step: '03', title: 'Monitorium', desc: 'Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed commodo vitae ornare sit amet ante donec eu libero.' },
  { step: '04', title: 'Optimizatio', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget.' },
];

/* -- Animated counter -- */
function AnimatedNumber({ target, visible, onComplete }: {
  target: string; visible: boolean; onComplete?: () => void;
}) {
  const [display, setDisplay] = useState('00');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const num = parseInt(target, 10);
    const steps = 30;
    const stepTime = 900 / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += Math.ceil(num / steps);
      if (current >= num) {
        setDisplay(target);
        setDone(true);
        onComplete?.();
        clearInterval(timer);
      } else {
        setDisplay(String(current).padStart(2, '0'));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [visible, target, onComplete]);

  return (
    <span
      style={{
        display: 'inline-block',
        animation: done ? 'counterPop 0.4s cubic-bezier(0.16,1,0.3,1)' : 'none',
      }}
    >
      {display}
    </span>
  );
}

/* -- Side progress track -- */
function ProgressTrack({ visibleCount, sectionVisible }: {
  visibleCount: number; sectionVisible: boolean;
}) {
  return (
    <div
      className="fixed right-4 sm:right-6 xl:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-4"
      style={{
        display: 'flex',
        opacity: sectionVisible && visibleCount > 0 ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Vertical connector */}
      <div className="absolute right-[7px] inset-y-0 w-px bg-[#006071]/10" />
      <div
        className="absolute right-[7px] top-0 w-px bg-[#65b32e] origin-top"
        style={{
          height: `${(visibleCount / STEPS.length) * 100}%`,
          transition: 'height 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      {STEPS.map((s, i) => (
        <div key={i} className="relative flex items-center gap-3">
          <span
            className="text-[10px] font-mono tabular-nums font-bold transition-all duration-500"
            style={{
              color: i < visibleCount ? '#65b32e' : '#006071',
              opacity: i < visibleCount ? 1 : 0.25,
              transform: i < visibleCount ? 'translateX(0)' : 'translateX(4px)',
            }}
          >
            {s.step}
          </span>
          <div
            className="w-3.5 h-3.5 rounded-full border-2 transition-all duration-500"
            style={{
              borderColor: '#65b32e',
              background: i < visibleCount ? '#65b32e' : 'transparent',
              animation: i === visibleCount - 1 ? 'dotPop 0.5s cubic-bezier(0.16,1,0.3,1)' : 'none',
              boxShadow: i < visibleCount ? '0 0 10px rgba(101,179,46,0.6)' : 'none',
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* -- Step Row -- */
function StepRow({ step, title, desc, index, onVisible }: {
  step: string; title: string; desc: string; index: number; onVisible?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [countDone, setCountDone] = useState(false);
  const isEven = index % 2 === 0;
  const words = title.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); onVisible?.(); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [onVisible]);

  return (
    <div
      ref={ref}
      className="min-h-[80vh] md:min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 sm:py-16 md:py-0 relative overflow-hidden"
      style={{ background: index % 2 === 0 ? '#ffffff' : '#f8fafc' }}
    >
      {/* Background radial glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(24rem, 55vw, 62rem)',
          height: 'clamp(24rem, 55vw, 62rem)',
          background: 'radial-gradient(circle, rgba(101,179,46,0.07) 0%, transparent 70%)',
          [isEven ? 'right' : 'left']: '-15%',
          top: '50%',
          transform: visible ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.3)',
          opacity: visible ? 1 : 0,
          transition: 'transform 1.6s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 1.2s ease 0.1s',
        }}
      />

      {/* Secondary accent orb */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 'clamp(8rem, 18vw, 20rem)',
          height: 'clamp(8rem, 18vw, 20rem)',
          background: 'radial-gradient(circle, rgba(0,96,113,0.05) 0%, transparent 70%)',
          [isEven ? 'left' : 'right']: '5%',
          bottom: '10%',
          transform: visible ? 'scale(1)' : 'scale(0)',
          opacity: visible ? 1 : 0,
          transition: 'transform 1.8s cubic-bezier(0.16,1,0.3,1) 0.4s, opacity 1s ease 0.4s',
        }}
      />

      {/* Bottom separator line that draws across */}
      <div
        className="absolute bottom-0 left-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0,96,113,0.10), transparent)',
          width: visible ? '100%' : '0%',
          transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1) 0.9s',
        }}
      />

      <div
        className={`w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-16 xl:gap-28 relative z-10 ${isEven ? '' : 'md:flex-row-reverse'}`}
      >
        {/* -- Giant number -- */}
        <div className="flex-shrink-0 relative select-none">
          {/* Shimmer sweep overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm"
            style={{ zIndex: 2 }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.55) 50%, transparent 75%)',
                transform: visible ? 'translateX(250%)' : 'translateX(-250%)',
                transition: visible ? 'transform 0.75s ease 1.5s' : 'none',
              }}
            />
          </div>

          <span
            className="font-semibold montserrat-heading block"
            style={{
              fontSize: 'clamp(5rem, 22vw, 22rem)',
              lineHeight: 0.85,
              color: visible ? '#65b32e' : 'transparent',
              WebkitTextStroke: visible ? '0px transparent' : '2px #65b32e',
              opacity: visible ? 1 : 0,
              transform: visible
                ? 'scale(1) translateY(0px)'
                : 'scale(0.72) translateY(48px)',
              filter: visible ? 'blur(0px)' : 'blur(10px)',
              transition: [
                'opacity 0.9s cubic-bezier(0.16,1,0.3,1)',
                'transform 0.9s cubic-bezier(0.16,1,0.3,1)',
                'color 0.5s ease 0.15s',
                '-webkit-text-stroke 0.5s ease 0.15s',
                'filter 0.8s ease',
              ].join(', '),
              animation: visible ? 'subtleFloat 8s ease-in-out infinite' : 'none',
              animationDelay: '1.8s',
            }}
          >
            <AnimatedNumber
              target={step}
              visible={visible}
              onComplete={() => setCountDone(true)}
            />
          </span>
        </div>

        {/* -- Text panel - clip-path curtain wipe -- */}
        <div
          className="flex-1 min-w-0"
          style={{
            clipPath: visible
              ? 'inset(0 0% 0 0)'
              : isEven
                ? 'inset(0 0% 0 100%)'
                : 'inset(0 100% 0 0)',
            transition: 'clip-path 1.1s cubic-bezier(0.77, 0, 0.18, 1) 0.2s',
          }}
        >
          {/* Step label - letter-spacing morph */}
          <span
            className="text-[#006071]/40 font-bold text-sm uppercase block mb-4"
            style={{
              letterSpacing: visible ? '0.32em' : '0.04em',
              opacity: visible ? 1 : 0,
              transition: 'letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s, opacity 0.5s ease 0.45s',
            }}
          >
            Passo {step}
          </span>

          {/* Title - word stagger with rotation */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#006071] montserrat-heading leading-tight mb-4 sm:mb-6 overflow-hidden">
            {words.map((word, wi) => (
              <span
                key={wi}
                className="inline-block mr-[0.25em]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? 'translateY(0) rotate(0deg)'
                    : 'translateY(72px) rotate(5deg)',
                  transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${0.5 + wi * 0.1}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${0.5 + wi * 0.1}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h3>

          {/* Description - blur-in */}
          <p
            className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              filter: visible ? 'blur(0)' : 'blur(5px)',
              transition: [
                `opacity 0.75s ease ${0.6 + words.length * 0.1}s`,
                `transform 0.75s ease ${0.6 + words.length * 0.1}s`,
                `filter 0.75s ease ${0.6 + words.length * 0.1}s`,
              ].join(', '),
            }}
          >
            {desc}
          </p>

          {/* Accent line + glow pulse */}
          <div className="mt-8 h-[3px] rounded-full bg-[#65b32e]"
            style={{
              width: visible ? '5rem' : '0',
              transition: `width 0.8s cubic-bezier(0.16,1,0.3,1) ${0.8 + words.length * 0.1}s`,
              animation: countDone ? 'glowPulseGreen 2s ease-in-out 3' : 'none',
              animationDelay: `${1 + words.length * 0.1}s`,
            }}
          />

        </div>
      </div>
    </div>
  );
}

/* -- Main export -- */
export default function ComeFunzionaSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeadingVisible(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setSectionVisible(e.isIntersecting),
      { threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <ProgressTrack visibleCount={visibleCount} sectionVisible={sectionVisible} />

      {/* Heading */}
      <div
        ref={headingRef}
        className="bg-white border-b border-slate-100 py-20 text-center overflow-hidden"
        style={{
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <span
          className="text-[#006071] font-bold text-sm uppercase"
          style={{
            letterSpacing: headingVisible ? '0.35em' : '0.05em',
            opacity: headingVisible ? 1 : 0,
            transition: 'letter-spacing 1s cubic-bezier(0.16,1,0.3,1) 0.2s, opacity 0.5s ease 0.2s',
          }}
        >
          Come Funziona
        </span>
        <h2 className="text-4xl md:text-5xl text-[#006071] tracking-tight mt-3">
          Lorem in{' '}
          <span className="montserrat-italic text-[#65b32e]">Quattuor passus</span>
        </h2>
      </div>

      {/* Steps */}
      {STEPS.map((item, i) => (
        <StepRow
          key={i}
          {...item}
          index={i}
          onVisible={() => setVisibleCount((c) => Math.max(c, i + 1))}
        />
      ))}
    </section>
  );
}






