import { useEffect, useRef, useState } from 'react';

const NUTRIENTI = [
  { label: 'Lorem proteine',       value: 26,  display: '26%',  barPct: 85  },
  { label: 'Ipsum grassi',         value: 18,  display: '18%',  barPct: 60  },
  { label: 'Dolor fibre',          value: 0.5, display: '0.5%', barPct: 15  },
  { label: 'Amet ceneri',          value: 7,   display: '7%',   barPct: 25  },
  { label: 'Consectetur umidità',  value: 3.5, display: '3.5%', barPct: 12  },
];

function AnimatedValue({ target, display, visible, delay = 0 }: {
  target: number; display: string; visible: boolean; delay?: number;
}) {
  const [val, setVal] = useState('0');
  const started = useRef(false);
  const decimals = display.includes('.') ? 1 : 0;

  useEffect(() => {
    if (!visible || started.current) return;
    const t = setTimeout(() => {
      started.current = true;
      const steps = 50;
      const dur = 1200;
      let i = 0;
      const iv = setInterval(() => {
        i++;
        const v = (target * i) / steps;
        setVal(v.toFixed(decimals) + '%');
        if (i >= steps) { setVal(display); clearInterval(iv); }
      }, dur / steps);
    }, delay);
    return () => clearTimeout(t);
  }, [visible, target, display, delay, decimals]);

  return <>{val}</>;
}

function NutriBar({ label, value, display, barPct, index, visible }: {
  label: string; value: number; display: string; barPct: number; index: number; visible: boolean;
}) {
  const delay = index * 160;
  const colors = [
    { color: '#006071', accent: '#017870' },
    { color: '#65b32e', accent: '#4fa028' },
    { color: '#006071', accent: '#017870' },
    { color: '#65b32e', accent: '#4fa028' },
    { color: '#006071', accent: '#017870' },
  ];
  const { color, accent } = colors[index % colors.length];

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-50px)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {/* Label + value */}
      <div className="flex items-end justify-between mb-2">
        <span
          className="text-white font-bold text-lg md:text-xl lg:text-2xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: `opacity 0.5s ease ${delay + 80}ms, transform 0.5s ease ${delay + 80}ms`,
          }}
        >
          {label}
        </span>
        <span
          className="font-black text-2xl md:text-3xl montserrat-heading tabular-nums"
          style={{
            color,
            filter: visible ? 'blur(0)' : 'blur(8px)',
            transform: visible ? 'scale(1)' : 'scale(0.6)',
            transition: `filter 0.6s ease ${delay + 180}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + 180}ms`,
          }}
        >
          <AnimatedValue target={value} display={display} visible={visible} delay={delay + 280} />
        </span>
      </div>

      {/* Bar */}
        <div className="relative h-6 md:h-7 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="absolute inset-y-0 left-0 rounded-xl"
          style={{
            width: visible ? `${barPct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${accent})`,
            transition: `width 1.3s cubic-bezier(0.16,1,0.3,1) ${delay + 180}ms`,
            boxShadow: `0 0 18px 0px ${color}44`,
          }}
        >
          {/* shimmer */}
          <div
            style={{
              position: 'absolute', inset: 0, borderRadius: 'inherit',
              background: 'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.38) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: visible ? `shimmer 2.5s ease ${delay + 1600}ms infinite` : 'none',
            }}
          />
        </div>
        {/* endpoint marker */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/70"
          style={{
            left: visible ? `${barPct}%` : '0%',
            transition: `left 1.3s cubic-bezier(0.16,1,0.3,1) ${delay + 180}ms`,
            boxShadow: '0 0 6px rgba(255,255,255,0.9)',
          }}
        />
      </div>

      {/* separator */}
      <div
        className="mt-6 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0,96,113,0.08), transparent)',
          width: visible ? '100%' : '0%',
          transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${delay + 500}ms`,
        }}
      />
    </div>
  );
}

function BarsPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-8">
      {NUTRIENTI.map((row, i) => (
        <NutriBar key={i} {...row} index={i} visible={visible} />
      ))}
    </div>
  );
}

function LeftPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <span
        className="text-xs font-bold tracking-[0.2em] uppercase block mb-4"
        style={{
          color: '#ffffff',
          letterSpacing: visible ? '0.32em' : '0.05em',
          opacity: visible ? 1 : 0,
          transition: 'letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 0.5s ease 0.1s',
        }}
      >
        Composizione
      </span>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-3 mb-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(36px)',
          filter: visible ? 'blur(0)' : 'blur(6px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
        }}
      >
        Valori Nutrizionali e{' '}
        <span className="montserrat-italic" style={{ color: '#65b32e' }}>Composizione</span>
      </h2>
      <p
        className="text-lg leading-relaxed mb-6"
        style={{
          color: 'rgba(255,255,255,0.6)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
      </p>
      <p
        className="leading-relaxed"
        style={{
          color: 'rgba(255,255,255,0.5)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
        }}
      >
        Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est et sapien.
      </p>
    </div>
  );
}

export default function NutrizioneSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-28" style={{ background: '#0d1f26' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          <LeftPanel />
          <BarsPanel />
        </div>
      </div>
    </section>
  );
}






