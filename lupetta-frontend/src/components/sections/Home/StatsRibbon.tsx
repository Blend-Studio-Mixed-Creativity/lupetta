import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useCountUp } from '../../../hooks/useScrollReveal';

const STATS = [
  {
    num: 30,
    prefix: '+',
    suffix: '%',
    label: 'Incremento Ponderale',
    sublabel: 'primi 30 giorni',
    color: '#006071',
    glow: 'rgba(0,96,113,0.25)',
    bg: 'linear-gradient(145deg, #e6f4f6 0%, #d4ecef 100%)',
    border: 'rgba(0,96,113,0.18)',
  },
  {
    num: 98,
    prefix: '-',
    suffix: '%',
    label: 'Tempo Gestione',
    sublabel: 'risparmio giornaliero',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.28)',
    bg: 'linear-gradient(145deg, #eef7e6 0%, #e0f0d2 100%)',
    border: 'rgba(101,179,46,0.2)',
  },
  {
    num: 30,
    prefix: '-',
    suffix: '%',
    label: 'Episodi Diarroici',
    sublabel: 'primi 7 giorni',
    color: '#e6a23c',
    glow: 'rgba(230,162,60,0.28)',
    bg: 'linear-gradient(145deg, #fdf6e3 0%, #faecc8 100%)',
    border: 'rgba(230,162,60,0.22)',
  },
  {
    num: 0,
    display: '24/7',
    label: 'Monitoraggio',
    sublabel: 'controllo continuo',
    color: '#006071',
    glow: 'rgba(0,96,113,0.25)',
    bg: 'linear-gradient(145deg, #eef2f5 0%, #dfe6eb 100%)',
    border: 'rgba(0,96,113,0.18)',
  },
];

function StatCard({
  num, prefix = '', suffix = '', display, label, sublabel, color, glow, bg, border, delay,
}: {
  num: number; prefix?: string; suffix?: string; display?: string;
  label: string; sublabel: string; color: string; glow: string; bg: string; border: string; delay: number;
}) {
  const [inView, setInView] = useState(false);
  const count = useCountUp(num, 2000, inView && !display);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const formatted = display ? display : `${prefix}${count}${suffix}`;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    setTilt({ x: -dy * 6, y: dx * 6 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      onViewportEnter={() => setInView(true)}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={onMouseMove}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        className="relative overflow-hidden rounded-3xl cursor-default select-none text-center"
        style={{
          background: bg,
          border: `1.5px solid ${border}`,
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 3vw, 2.5rem)',
          minHeight: 'clamp(220px, 28vw, 280px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: hovered
            ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale(1.02)`
            : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
          transition: hovered
            ? 'transform 0.15s ease, box-shadow 0.25s ease'
            : 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
          boxShadow: hovered
            ? `0 20px 50px ${glow}, 0 0 0 1.5px ${color}55`
            : `0 6px 20px rgba(0,0,0,0.04)`,
          willChange: 'transform',
          zIndex: hovered ? 20 : 1,
        }}
      >
        {/* Number */}
        <div
          className={`montserrat-heading tabular-nums ${inView ? 'sr-counter-pop' : ''}`}
          style={{
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color,
            lineHeight: 1,
            marginBottom: '1rem',
            animationDelay: `${delay + 0.3}s`,
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          {formatted}
        </div>

        {/* Label */}
        <div style={{
          color: '#1e293b',
          fontWeight: 700,
          fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
          marginBottom: '0.6rem',
          letterSpacing: '-0.01em',
        }}>
          {label}
        </div>

        {/* Sublabel */}
        <div style={{
          color: 'rgba(100,116,139,0.85)',
          fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
          lineHeight: 1.5,
        }}>
          {sublabel}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsRibbon() {
  return (
    <section
      className="relative flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-8 pt-20 sm:pt-24 md:pt-24 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-28"
      style={{ background: 'linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)' }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">I nostri numeri</span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-slate-900 montserrat-heading mt-3 sm:mt-4 tracking-tight">
            Risultati che <span className="montserrat-italic text-[#006071]">parlano chiaro</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <StatCard key={i} {...stat} delay={0.1 + i * 0.12} />
          ))}
        </div>

        {/* Disclaimer banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-6 sm:mt-8 md:mt-10 rounded-2xl px-5 sm:px-7 py-4 sm:py-5 text-center"
          style={{
            background: 'linear-gradient(145deg, #eef2f5 0%, #e3eaef 100%)',
            border: '1.5px solid rgba(0,96,113,0.15)',
            color: '#334155',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
            lineHeight: 1.55,
          }}
        >
          <span style={{ marginRight: '0.5rem' }} aria-hidden>📊</span>
          Dati ottenuti incrociando report statistici dell'app<br className="hidden lg:inline" /> e feedback di oltre 200 allevamenti in Italia
        </motion.div>
      </div>
    </section>
  );
}
