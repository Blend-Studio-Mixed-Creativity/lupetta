import { useEffect, useRef, useState } from 'react';

const METRICS = [
  { label: "Lorem crescita media", before: "0.8 kg/d", after: "1.2 kg/d", pct: "+50%", barPct: 75, positive: true },
  { label: "Ipsum mortalita",      before: "8%",       after: "2%",       pct: "-75%", barPct: 88, positive: false },
  { label: "Dolor costo manodopera", before: "100%",   after: "60%",      pct: "-40%", barPct: 60, positive: false },
];

/* -- animated counter (decimals) -- */
function AnimatedPct({ target, visible, delay = 0 }: { target: string; visible: boolean; delay?: number }) {
  const [display, setDisplay] = useState('0');
  const started = useRef(false);
  const sign = target.startsWith('+') ? '+' : target.startsWith('-') ? '-' : '';
  const num = parseFloat(target.replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (!visible || started.current) return;
    const t = setTimeout(() => {
      started.current = true;
      const steps = 50;
      const dur = 1200;
      let i = 0;
      const iv = setInterval(() => {
        i++;
        const v = (num * i) / steps;
        setDisplay(sign + v.toFixed(0) + '%');
        if (i >= steps) { setDisplay(target); clearInterval(iv); }
      }, dur / steps);
    }, delay);
    return () => clearTimeout(t);
  }, [visible, target, delay, sign, num]);

  return <>{display}</>;
}

/* -- single bar card -- */
function MetricRow({
  label, before, after, pct, barPct, positive, index, visible,
}: {
  label: string; before: string; after: string; pct: string;
  barPct: number; positive: boolean; index: number; visible: boolean;
}) {
  const delay = index * 200;
  const color = positive ? '#65b32e' : '#006071';
  const accent = positive ? '#4fa028' : '#017870';

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {/* Label */}
      <div
        className="font-bold text-slate-800 text-base md:text-lg mb-2"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: `opacity 0.5s ease ${delay + 80}ms, transform 0.5s ease ${delay + 80}ms`,
        }}
      >
        {label}
      </div>

      {/* Before / pct / after */}
      <div
        className="flex items-center justify-between mb-3"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity 0.5s ease ${delay + 150}ms`,
        }}
      >
        <span className="text-slate-400 text-sm font-medium">Prima: {before}</span>
        <span
          className="font-black text-3xl md:text-4xl montserrat-heading tabular-nums"
          style={{
            color,
            filter: visible ? 'blur(0)' : 'blur(8px)',
            transform: visible ? 'scale(1)' : 'scale(0.7)',
            transition: `filter 0.6s ease ${delay + 200}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms`,
            animation: visible ? 'counterPop 0.4s cubic-bezier(0.16,1,0.3,1)' : 'none',
            animationDelay: `${delay + 1300}ms`,
            animationFillMode: 'both',
          }}
        >
          <AnimatedPct target={pct} visible={visible} delay={delay + 300} />
        </span>
        <span className="text-sm font-semibold" style={{ color }}>Dopo: {after}</span>
      </div>

      {/* Bar track */}
      <div className="relative h-7 md:h-8 bg-slate-100 rounded-xl overflow-hidden">
        {/* fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-xl"
          style={{
            width: visible ? `${barPct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${accent})`,
            transition: `width 1.4s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms`,
            boxShadow: `0 0 20px 0px ${color}55`,
          }}
        >
          {/* shimmer */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: visible ? `shimmer 2.5s ease ${delay + 1800}ms infinite` : 'none',
            }}
          />
        </div>
        {/* endpoint marker */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/70 pointer-events-none"
          style={{
            left: visible ? `${barPct}%` : '0%',
            transition: `left 1.4s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms`,
            boxShadow: '0 0 6px rgba(255,255,255,0.9)',
          }}
        />
      </div>

      {/* separator */}
      <div
        className="mt-8 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0,96,113,0.08), transparent)',
          width: visible ? '100%' : '0%',
          transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${delay + 600}ms`,
        }}
      />
    </div>
  );
}

/* -- MetricsPanel -- */
function MetricsPanel() {
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
    <div ref={ref} className="space-y-10">
      {METRICS.map((row, i) => (
        <MetricRow key={i} {...row} index={i} visible={visible} />
      ))}
    </div>
  );
}

/* -- Left text -- */
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
        className="text-[#006071] font-bold text-sm uppercase block mb-4"
        style={{
          letterSpacing: visible ? '0.32em' : '0.05em',
          opacity: visible ? 1 : 0,
          transition: 'letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 0.5s ease 0.1s',
        }}
      >
        Risultati
      </span>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight mt-3 mb-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(36px)',
          filter: visible ? 'blur(0)' : 'blur(6px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
        }}
      >
        Incremento produzione e{' '}
        <span className="montserrat-italic text-[#006071]">miglioramento benessere animale</span>
      </h2>
      <p
        className="text-lg text-slate-500 leading-relaxed mb-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.38s, transform 0.7s ease 0.38s',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
      </p>
      <h3
        className="text-lg font-bold text-slate-800 mb-1"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
        }}
      >
        Risparmi economici e ottimizzazioni operative
      </h3>
      <p
        className="text-slate-500 leading-relaxed text-sm"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.6s ease 0.58s, transform 0.6s ease 0.58s',
        }}
      >
        Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </div>
  );
}

export default function RisultatiSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-12 sm:py-16 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          <LeftPanel />
          <MetricsPanel />
        </div>
      </div>
    </section>
  );
}






