import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const ROWS: { feature: string; mini: boolean; maxi: boolean }[] = [
  { feature: 'Lorem Ipsum Dolor', mini: true, maxi: true },
  { feature: 'Consectetur Adipiscing', mini: false, maxi: true },
  { feature: 'Pellentesque Habitant', mini: true, maxi: true },
  { feature: 'Vestibulum Tortor', mini: false, maxi: true },
  { feature: 'Donec Eu Libero', mini: true, maxi: true },
  { feature: 'Aenean Ultricies', mini: false, maxi: true },
];

const MINI_COUNT = ROWS.filter((r) => r.mini).length;
const MAXI_COUNT = ROWS.filter((r) => r.maxi).length;

function Check({ color }: { color: string }) {
  return (
    <div style={{ width: 36, height: 36, borderRadius: 12, background: `${color}18`, border: `1.5px solid ${color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={18} height={18} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={color}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );
}

function Cross() {
  return (
    <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={14} height={14} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="rgba(255,255,255,0.22)">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}

interface Tilt { x: number; y: number; gx: number; gy: number; active: boolean }
const INIT: Tilt = { x: 0, y: 0, gx: 50, gy: 50, active: false };

function StatCard({ label, count, total, color, colorLight, glow, iconPath, tilt, onMove, onLeave }: {
  label: string; count: number; total: number; color: string; colorLight: string; glow: string; iconPath: string;
  tilt: Tilt; onMove: (e: React.MouseEvent) => void; onLeave: () => void;
}) {
  return (
    <div style={{ perspective: '1000px' }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div style={{
        background: 'linear-gradient(145deg, #001a22 0%, #002d38 55%, #003040 100%)',
        border: `1.5px solid ${tilt.active ? color + '55' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '1.5rem',
        padding: 'clamp(2rem, 3vw, 3rem)',
        position: 'relative',
        overflow: 'hidden',
        transform: tilt.active
          ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.03) translateZ(8px)`
          : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
        boxShadow: tilt.active
          ? `0 30px 70px ${glow}, 0 0 0 1px ${color}22`
          : '0 8px 40px rgba(0,0,0,0.4)',
        transition: tilt.active
          ? 'border-color 0.2s, box-shadow 0.3s, transform 0.08s ease'
          : 'border-color 0.5s, box-shadow 0.5s, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        {/* Glare */}
        {tilt.active && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 5, borderRadius: '1.5rem', pointerEvents: 'none', background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.1) 0%, transparent 55%)` }} />
        )}

        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, ${colorLight}, ${color})`, boxShadow: `0 0 20px 3px ${glow}` }} />

        {/* Big number watermark */}
        <span className="montserrat-heading" style={{ position: 'absolute', top: '-0.3rem', right: '0.8rem', fontSize: '8rem', fontWeight: 900, lineHeight: 1, color: `${color}10`, letterSpacing: '-0.06em', userSelect: 'none', zIndex: 0 }}>
          {count}
        </span>

        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* Icon */}
          <div style={{ width: 56, height: 56, borderRadius: 16, background: `${color}22`, border: `1.5px solid ${color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: `0 6px 24px ${glow}` }}>
            <svg width={26} height={26} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color}>
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
          </div>

          {/* Label */}
          <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color, marginBottom: '0.75rem' }}>
            {label}
          </span>

          {/* Score */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.75rem' }}>
            <span className="montserrat-heading" style={{ fontSize: 'clamp(3.5rem, 5vw, 5rem)', color: '#ffffff', lineHeight: 1, letterSpacing: '-0.04em', textShadow: `0 0 40px ${glow}` }}>
              {count}
            </span>
            <span style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>/{total}</span>
          </div>

          {/* Bar */}
          <div style={{ width: '100%', height: 6, borderRadius: 999, background: 'rgba(255,255,255,0.06)', overflow: 'hidden', marginBottom: '1rem' }}>
            <div style={{ height: '100%', borderRadius: 999, width: `${(count / total) * 100}%`, background: `linear-gradient(90deg, ${color}, ${colorLight})`, boxShadow: `0 0 12px 2px ${glow}`, transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)' }} />
          </div>

          <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
            funzionalità incluse
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ComparativaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [tilts, setTilts] = useState<Tilt[]>([INIT, INIT]);

  function handleMove(e: React.MouseEvent, idx: number) {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    setTilts(prev => prev.map((t, i) => i === idx ? { x: (nx - 0.5) * 18, y: -(ny - 0.5) * 14, gx: nx * 100, gy: ny * 100, active: true } : t));
  }

  return (
    <section style={{ background: 'linear-gradient(160deg, #020d12 0%, #001a22 55%, #020d12 100%)', padding: 'clamp(5rem, 10vw, 10rem) 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-14 ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}>
          <span style={{ color: '#65b32e', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            Comparazione
          </span>
          <h2 className="montserrat-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#ffffff' }}>
            MINI <span className="montserrat-italic" style={{ color: '#65b32e' }}>vs</span> MAXI
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '36rem', margin: '1.5rem auto 0' }}>
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          </p>
        </div>

        {/* Two-column layout: table left + stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Table — left */}
          <div className={`${isVisible ? 'sr-reveal-left sr-delay-2' : 'sr-hidden'}`}>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(145deg, rgba(0,26,34,0.6) 0%, rgba(0,45,56,0.4) 100%)', backdropFilter: 'blur(24px)' }}>
              {/* Table header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(60px, 18vw, 120px) clamp(60px, 18vw, 120px)', padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2.5rem)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
                <span className="hidden sm:block" style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Caratteristica</span>
                <span className="sm:hidden" style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Feature</span>
                <span style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#65b32e', textAlign: 'center' }}>MINI</span>
                <span style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#006071', textAlign: 'center' }}>MAXI</span>
              </div>

              {ROWS.map((row, i) => {
                const isHovered = hoveredRow === i;
                return (
                  <div key={i} onMouseEnter={() => setHoveredRow(i)} onMouseLeave={() => setHoveredRow(null)} style={{
                    display: 'grid', gridTemplateColumns: '1fr clamp(60px, 18vw, 120px) clamp(60px, 18vw, 120px)', alignItems: 'center', padding: 'clamp(1.1rem, 3vw, 1.4rem) clamp(1rem, 4vw, 2.5rem)',
                    borderBottom: i < ROWS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    background: isHovered ? 'rgba(101,179,46,0.06)' : 'transparent', transition: 'background 0.3s ease', cursor: 'default',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.6rem, 2vw, 0.85rem)' }}>
                      <div style={{ width: 4, height: 24, borderRadius: 2, background: isHovered ? 'linear-gradient(180deg, #65b32e, #006071)' : 'rgba(255,255,255,0.06)', transition: 'background 0.3s ease', flexShrink: 0 }} />
                      <span style={{ color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.85rem, 3vw, 1.05rem)', fontWeight: 500, transition: 'color 0.3s ease', lineHeight: 1.3 }}>{row.feature}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>{row.mini ? <Check color="#65b32e" /> : <Cross />}</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>{row.maxi ? <Check color="#006071" /> : <Cross />}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats — right */}
          <div className={`${isVisible ? 'sr-reveal-right sr-delay-3' : 'sr-hidden'}`} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <StatCard
              label="MINI Wi-Fi" count={MINI_COUNT} total={ROWS.length}
              color="#65b32e" colorLight="#8fd44e" glow="rgba(101,179,46,0.45)"
              iconPath="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              tilt={tilts[0]}
              onMove={(e) => handleMove(e, 0)}
              onLeave={() => setTilts(prev => prev.map((t, i) => i === 0 ? INIT : t))}
            />
            <StatCard
              label="MAXI Tech" count={MAXI_COUNT} total={ROWS.length}
              color="#006071" colorLight="#00a8c0" glow="rgba(0,96,113,0.45)"
              iconPath="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              tilt={tilts[1]}
              onMove={(e) => handleMove(e, 1)}
              onLeave={() => setTilts(prev => prev.map((t, i) => i === 1 ? INIT : t))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}







