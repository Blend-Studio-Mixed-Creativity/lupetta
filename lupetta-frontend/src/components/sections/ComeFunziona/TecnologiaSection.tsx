import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

interface TechItem {
  iconPath: string;
  title: string;
  desc: string;
  color: string;
  glow: string;
}

const TECH_ITEMS: TechItem[] = [
  { iconPath: 'M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z', title: 'Lorem Hardware', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero sit amet quam egestas semper.', color: '#65b32e', glow: 'rgba(101,179,46,0.55)' },
  { iconPath: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418', title: 'Ipsum Software', desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra.', color: '#006071', glow: 'rgba(0,96,113,0.55)' },
  { iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z', title: 'Dolor Securitas', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.', color: '#65b32e', glow: 'rgba(101,179,46,0.55)' },
  { iconPath: 'M3 13.5v6a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6-8v14a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-14a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6 4v10a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75z', title: 'Amet Analytics', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat eleifend leo.', color: '#006071', glow: 'rgba(0,96,113,0.55)' },
  { iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', title: 'Consectetur Energia', desc: 'Quisque sit amet est et sapien ullamcorper pharetra vestibulum erat wisi condimentum sed aenean.', color: '#65b32e', glow: 'rgba(101,179,46,0.55)' },
  { iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Adipiscing Protectio', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.', color: '#006071', glow: 'rgba(0,96,113,0.55)' },
];

const total = TECH_ITEMS.length;

function getCardStyle(pos: number, color: string, glow: string): React.CSSProperties {
  if (Math.abs(pos) > 1) return { opacity: 0, pointerEvents: 'none', position: 'absolute' };
  const center = pos === 0;
  return {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    transform: `perspective(1000px) translateY(${pos * 62}%) translateZ(${center ? 0 : -140}px) rotateX(${pos * 22}deg) scale(${center ? 1 : 0.82})`,
    opacity: center ? 1 : 0.28,
    transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease',
    zIndex: center ? 10 : 5,
    filter: center ? 'none' : 'blur(2px)',
    pointerEvents: center ? 'auto' : 'none',
    background: 'linear-gradient(145deg, #001a22 0%, #002d38 55%, #003040 100%)',
    border: `1.5px solid ${center ? color + '44' : 'rgba(255,255,255,0.05)'}`,
    borderRadius: '2rem',
    overflow: 'hidden',
    boxShadow: center ? `0 40px 90px ${glow}, 0 0 0 1px ${color}22` : '0 10px 30px rgba(0,0,0,0.3)',
  };
}

export default function TecnologiaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [animState, setAnimState] = useState<'idle' | 'out' | 'in'>('idle');

  function navigate(newIdx: number) {
    if (newIdx === active) return;
    setActive(newIdx);
    setDisplayed(newIdx);
    setAnimState('in');
    setTimeout(() => setAnimState('idle'), 450);
  }

  function prev() { if (active > 0) navigate(active - 1); }
  function next() { if (active < total - 1) navigate(active + 1); }

  const tech = TECH_ITEMS[displayed];

  return (
    <section style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 0', overflow: 'hidden' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}>
          <span style={{ color: '#006071', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            Technologia
          </span>
          <h2 className="montserrat-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Lorem Ipsum <span className="montserrat-italic" style={{ color: '#006071' }}>Dolor</span>
          </h2>
        </div>

        {/* Two-col: detail left + 3D carousel right */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isVisible ? 'sr-reveal-up sr-delay-2' : 'sr-hidden'}`}>

          {/* LEFT — active card detail */}
          <div
            style={{
              animation: animState === 'in'
                ? 'cardFadeIn 0.45s cubic-bezier(0.16,1,0.3,1) both'
                : undefined,
            }}
          >
            <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', color: tech.color, display: 'block', marginBottom: '1.5rem' }}>
              NO.{String(active + 1).padStart(2, '0')} — {active + 1}/{total}
            </span>

            <div style={{ width: 68, height: 68, borderRadius: 20, background: `${tech.color}18`, border: `1.5px solid ${tech.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: `0 8px 32px ${tech.glow}` }}>
              <svg width={32} height={32} fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke={tech.color}>
                <path strokeLinecap="round" strokeLinejoin="round" d={tech.iconPath} />
              </svg>
            </div>

            <h3 className="montserrat-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '1.25rem', color: '#0f172a' }}>
              {tech.title}
            </h3>

            <div style={{ height: 1, background: `linear-gradient(90deg, ${tech.color}55, transparent)`, marginBottom: '1.5rem' }} />

            <p style={{ color: '#64748b', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '3rem' }}>
              {tech.desc}
            </p>

            {/* Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button onClick={prev} disabled={active === 0} style={{ width: 48, height: 48, borderRadius: '50%', background: active === 0 ? '#e2e8f0' : `${tech.color}18`, border: `1.5px solid ${active === 0 ? '#e2e8f0' : tech.color + '44'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: active === 0 ? 'not-allowed' : 'pointer', opacity: active === 0 ? 0.3 : 1, transition: 'all 0.25s', color: tech.color }}>
                <svg width={18} height={18} fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
              </button>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {TECH_ITEMS.map((_, i) => (
                  <button key={i} onClick={() => navigate(i)} style={{ width: i === active ? 28 : 7, height: 7, borderRadius: 999, background: i === active ? tech.color : '#cbd5e1', border: 'none', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)', boxShadow: i === active ? `0 0 10px ${tech.glow}` : 'none' }} />
                ))}
              </div>

              <button onClick={next} disabled={active === total - 1} style={{ width: 48, height: 48, borderRadius: '50%', background: active === total - 1 ? '#e2e8f0' : `${tech.color}18`, border: `1.5px solid ${active === total - 1 ? '#e2e8f0' : tech.color + '44'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: active === total - 1 ? 'not-allowed' : 'pointer', opacity: active === total - 1 ? 0.3 : 1, transition: 'all 0.25s', color: tech.color }}>
                <svg width={18} height={18} fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </button>
            </div>
          </div>

          {/* RIGHT — 3D vertical carousel */}
          <div className="select-none" style={{ height: 'clamp(320px, 36vw, 440px)', position: 'relative', perspective: '1000px', overflow: 'hidden', borderRadius: '2rem' }}>
            {TECH_ITEMS.map((card, i) => {
              const pos = i - active;
              const clamped = Math.max(-1, Math.min(1, pos));
              return (
                <div key={i} style={getCardStyle(clamped, card.color, card.glow)}>
                  {/* Top accent */}
                  <div style={{ height: 3, background: `linear-gradient(90deg, ${card.color}, ${card.color === '#65b32e' ? '#8fd44e' : '#00a8c0'}, ${card.color})`, boxShadow: `0 0 20px 4px ${card.glow}` }} />

                  <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                      <div style={{ width: 56, height: 56, borderRadius: 16, background: `${card.color}22`, border: `1.5px solid ${card.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 6px 24px ${card.glow}` }}>
                        <svg width={26} height={26} fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke={card.color}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                        </svg>
                      </div>
                      <span className="montserrat-heading" style={{ fontSize: '5rem', fontWeight: 900, color: `${card.color}15`, lineHeight: 1, letterSpacing: '-0.05em' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="montserrat-heading text-white" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>{card.title}</h3>
                    <p style={{ color: 'rgba(203,213,225,0.7)', fontSize: '0.92rem', lineHeight: 1.65 }}>{card.desc}</p>
                    <div style={{ marginTop: '1.5rem', height: 1, background: `linear-gradient(90deg, ${card.color}44, transparent)` }} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
