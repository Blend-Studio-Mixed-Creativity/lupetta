import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useCountUp } from '../../../hooks/useScrollReveal';

const STATS = [
  {
    num: 1200, format: 'it', suffix: '+', label: 'Lorem ipsum',
    sublabel: 'Dolor sit amet consectetur',
    iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.35)',
  },
  {
    num: 98, suffix: '%', label: 'Dolor amet',
    sublabel: 'Adipiscing elit sed do',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.55)',
  },
  {
    num: 0, display: '24/7', label: 'Sit consectetur',
    sublabel: 'Eiusmod tempor incididunt',
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.35)',
  },
  {
    num: 45, suffix: '%', label: 'Adipiscing elit',
    sublabel: 'Ut labore et dolore magna',
    iconPath: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.55)',
  },
];

function StatCard({
  num, suffix = '', format, display, label, sublabel, iconPath, color, glow, delay,
}: {
  num: number; suffix?: string; format?: string; display?: string;
  label: string; sublabel: string; iconPath: string; color: string; glow: string; delay: number;
}) {
  const [inView, setInView] = useState(false);
  const count = useCountUp(num, 2200, inView && !display);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const formatted = display
    ? display
    : format === 'it' && count >= 1000
    ? `${Math.floor(count / 1000)}.${String(count % 1000).padStart(3, '0')}${suffix}`
    : `${count}${suffix}`;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    setTilt({ x: -dy * 10, y: dx * 10 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 32 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      onViewportEnter={() => setInView(true)}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={onMouseMove}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        className="relative overflow-hidden rounded-3xl cursor-default select-none"
        style={{
          background: `linear-gradient(145deg, #001a22 0%, #002d38 50%, #003d4a 100%)`,
          border: `1.5px solid ${color}44`,
          padding: 'clamp(1.5rem, 4vw, 4rem) clamp(1.25rem, 3vw, 3rem)',
          minHeight: 'clamp(280px, 40vw, 420px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-12px) scale(1.04)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
          transition: hovered
            ? 'transform 0.1s ease, box-shadow 0.2s ease'
            : 'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease',
          boxShadow: hovered
            ? `0 32px 64px ${glow}, 0 0 0 1.5px ${color}88, 0 0 40px ${glow}`
            : `0 8px 32px ${glow.replace('0.55', '0.2')}`,
          willChange: 'transform',
          zIndex: hovered ? 20 : 1,
        }}
      >
        {/* Glare overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl z-20"
          style={{
            background: hovered
              ? 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)'
              : 'none',
            transition: 'background 0.3s ease',
          }}
        />

        {/* Top glow bar */}
        <div style={{
          position: 'absolute', top: 0, left: '15%', right: '15%', height: 3,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          borderRadius: '0 0 8px 8px',
          boxShadow: `0 0 16px 4px ${color}66`,
          opacity: inView ? 1 : 0,
          transition: `opacity 0.6s ease ${delay + 0.5}s`,
        }} />

        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', bottom: -60, right: -60, width: 220, height: 220,
          background: `radial-gradient(circle, ${color}28 0%, transparent 70%)`,
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: -30, left: -30, width: 160, height: 160,
          background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        {/* Extra top-right glow */}
        <div style={{
          position: 'absolute', top: 20, right: 20, width: 100, height: 100,
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        {/* Icon */}
        <div style={{
          width: 'clamp(48px, 8vw, 80px)', height: 'clamp(48px, 8vw, 80px)', borderRadius: 'clamp(14px, 2vw, 22px)', marginBottom: 'clamp(1rem, 2.5vw, 2.5rem)',
          background: `linear-gradient(135deg, ${color}40 0%, ${color}18 100%)`,
          border: `1.5px solid ${color}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hovered ? `0 0 28px 8px ${glow}` : `0 6px 20px ${glow}`,
          transition: 'box-shadow 0.3s ease',
          flexShrink: 0,
        }}>
          <svg style={{ width: 38, height: 38, color }} fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>

        {/* Number */}
        <div
          className={`montserrat-heading tabular-nums ${inView ? 'sr-counter-pop' : ''}`}
          style={{
            fontSize: 'clamp(4rem, 4.5vw, 5.5rem)',
            fontWeight: 800,
            color,
            lineHeight: 1,
            marginBottom: '1.2rem',
            animationDelay: `${delay + 0.4}s`,
            textShadow: `0 0 50px ${glow}, 0 0 80px ${glow.replace('0.55', '0.25')}`,
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          {formatted}
        </div>

        {/* Label */}
        <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.45rem', marginBottom: '0.7rem', letterSpacing: '-0.015em' }}>
          {label}
        </div>

        {/* Sublabel */}
        <div style={{ color: 'rgba(203,213,225,0.8)', fontSize: '1rem', lineHeight: 1.6 }}>
          {sublabel}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsRibbon() {
  return (
    <section className="relative min-h-0 md:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-20 md:pb-28" style={{ background: 'linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)' }}>
      <div className="max-w-7xl mx-auto w-full">
      {/* Section label */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">I nostri numeri</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 montserrat-heading mt-3 sm:mt-4 tracking-tight">Risultati che <span className="montserrat-italic text-[#006071]">parlano chiaro</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {STATS.map((stat, i) => (
          <StatCard key={i} {...stat} delay={0.1 + i * 0.14} />
        ))}
      </div>
      </div>
    </section>
  );
}








