import { useEffect, useRef, useState } from 'react';

type Nutriente = { label: string; value: number; display: string; barPct: number };

const GOLD: Nutriente[] = [
  { label: 'Proteina grezza', value: 19.5, display: '19.5%', barPct: 78 },
  { label: 'Grassi grezzi',   value: 16.5, display: '16.5%', barPct: 66 },
  { label: 'Fibra grezza',    value: 0.0,  display: '0.0%',  barPct: 2  },
  { label: 'Ceneri grezze',   value: 8.5,  display: '8.5%',  barPct: 34 },
];

const PLATINUM: Nutriente[] = [
  { label: 'Proteina grezza', value: 22.0, display: '22.0%', barPct: 88 },
  { label: 'Grassi grezzi',   value: 18.0, display: '18.0%', barPct: 72 },
  { label: 'Fibra grezza',    value: 0.05, display: '0.05%', barPct: 3  },
  { label: 'Ceneri grezze',   value: 8.0,  display: '8.0%',  barPct: 32 },
];

function AnimatedValue({ target, display, visible, delay = 0 }: { target: number; display: string; visible: boolean; delay?: number }) {
  const [val, setVal] = useState('0');
  const started = useRef(false);
  const decimals = display.includes('.') ? (display.split('.')[1].length > 1 ? 2 : 1) : 0;

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

function NutriBar({ label, value, display, barPct, index, visible, baseColor, accentColor }: {
  label: string; value: number; display: string; barPct: number; index: number; visible: boolean;
  baseColor: string; accentColor: string;
}) {
  const delay = index * 140;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-30px)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div className="flex items-end justify-between mb-2">
        <span className="text-white font-semibold text-sm sm:text-base">
          {label}
        </span>
        <span
          className="font-black text-xl sm:text-2xl montserrat-heading tabular-nums"
          style={{
            color: baseColor,
            filter: visible ? 'blur(0)' : 'blur(8px)',
            transform: visible ? 'scale(1)' : 'scale(0.6)',
            transition: `filter 0.6s ease ${delay + 180}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + 180}ms`,
          }}
        >
          <AnimatedValue target={value} display={display} visible={visible} delay={delay + 280} />
        </span>
      </div>

      <div className="relative h-5 sm:h-6 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="absolute inset-y-0 left-0 rounded-xl"
          style={{
            width: visible ? `${barPct}%` : '0%',
            background: `linear-gradient(90deg, ${baseColor}, ${accentColor})`,
            transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay + 180}ms`,
            boxShadow: `0 0 18px 0px ${baseColor}44`,
          }}
        >
          <div
            style={{
              position: 'absolute', inset: 0, borderRadius: 'inherit',
              background: 'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.38) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: visible ? `shimmer 2.5s ease ${delay + 1600}ms infinite` : 'none',
            }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-px bg-white/70"
          style={{
            left: visible ? `${barPct}%` : '0%',
            transition: `left 1.2s cubic-bezier(0.16,1,0.3,1) ${delay + 180}ms`,
            boxShadow: '0 0 6px rgba(255,255,255,0.9)',
          }}
        />
      </div>
    </div>
  );
}

function ProductPanel({ name, badge, baseColor, accentColor, claim, data }: {
  name: string; badge: string; baseColor: string; accentColor: string; claim: string; data: Nutriente[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10"
      style={{ boxShadow: `0 0 60px -20px ${baseColor}55` }}
    >
      <span
        className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-4"
        style={{ background: `${baseColor}22`, color: accentColor }}
      >
        {badge}
      </span>
      <h3 className="text-2xl sm:text-3xl text-white tracking-tight mb-2 montserrat-heading">
        {name}
      </h3>
      <p className="text-white/60 text-sm sm:text-base mb-8">{claim}</p>

      <p className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-5">Composizione analitica</p>
      <div className="space-y-6">
        {data.map((row, i) => (
          <NutriBar
            key={row.label}
            {...row}
            index={i}
            visible={visible}
            baseColor={baseColor}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
}

export default function NutrizioneSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32" style={{ background: '#0d1f26' }}>
      <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Composizione</span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white tracking-tight mt-4 mb-6 leading-tight">
            Valori nutrizionali e <span className="montserrat-italic text-accent">composizione</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Ogni formulazione è studiata per garantire stabilità, digeribilità e un apporto bilanciato di proteine, grassi, fibre e ceneri. I valori riportati sono frutto della ricerca Tredì Italia sul benessere e la crescita del vitello.
          </p>
        </div>

        <div className="grid min-[960px]:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          <ProductPanel
            name="Latte MR Gold"
            badge="MR Gold"
            baseColor="#006071"
            accentColor="#00a8b8"
            claim="Ideale per una crescita sana e risultati eccellenti."
            data={GOLD}
          />
          <ProductPanel
            name="Latte MR Platinum"
            badge="MR Platinum"
            baseColor="#65b32e"
            accentColor="#9ee05a"
            claim="Il massimo degli accrescimenti, formula ricca di WPC."
            data={PLATINUM}
          />
        </div>
      </div>
    </section>
  );
}
