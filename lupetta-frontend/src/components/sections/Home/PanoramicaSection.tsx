import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const CARDS = [
  {
    num: '01',
    iconPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
    title: 'Lorem compactum',
    tag: 'Approccio',
    desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
    subdesc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra.',
    color: '#006071',
    glow: 'rgba(0,96,113,0.6)',
  },
  {
    num: '02',
    iconPath: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
    title: 'Ipsum enterprise',
    tag: 'Approccio',
    desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.',
    subdesc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum.',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.6)',
  },
  {
    num: '03',
    iconPath: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
    title: 'Dolor monitoring',
    tag: 'Approccio',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.',
    subdesc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat.',
    color: '#006071',
    glow: 'rgba(0,96,113,0.6)',
  },
];

const total = CARDS.length;

function getCardStyle(pos: number): React.CSSProperties {
  if (Math.abs(pos) > 1) return { opacity: 0, pointerEvents: 'none', position: 'absolute' };
  const center = pos === 0;
  return {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    transform: `perspective(1200px) translateX(${pos * 68}%) translateZ(${center ? 0 : -160}px) rotateY(${pos * -28}deg) scale(${center ? 1 : 0.78})`,
    opacity: center ? 1 : 0.32,
    transition: 'transform 0.72s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease',
    zIndex: center ? 10 : 5,
    filter: center ? 'none' : 'blur(2px)',
    pointerEvents: 'none',
  };
}

export default function PanoramicaSection() {
  const { ref: headerRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function prev() { 
    setActive(a => Math.max(0, a - 1)); 
  }
  function next() { 
    setActive(a => Math.min(total - 1, a + 1)); 
  }

  const c = CARDS[active];

  return (
    <section style={{
      minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      background: 'linear-gradient(170deg, #f8fafc 0%, #f0f7ff 100%)', padding: 'clamp(2rem, 5vw, 5rem) 0', overflow: 'hidden',
    }}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`mb-12 grid lg:grid-cols-2 gap-8 items-end ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}>
          <div>
            <span style={{ color: '#65b32e', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              Panoramica
            </span>
            <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-slate-900 tracking-tight leading-[1.05]">
              Lorem ipsum{' '}
              <span className="montserrat-italic" style={{ color: '#006071' }}>dolor sit</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base sm:text-lg lg:text-xl leading-relaxed lg:text-right">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </div>

        {/* 3D Stage */}
        <div className="relative select-none" style={{ height: 'clamp(260px, 40vw, 460px)', perspective: '1200px' }}>
          {CARDS.map((card, i) => {
            const raw = i - active;
            const pos = Math.max(-1, Math.min(1, raw > total / 2 ? raw - total : raw < -total / 2 ? raw + total : raw));
            return (
              <div key={i} style={getCardStyle(pos)}>
                <div 
                  className="w-full h-full rounded-3xl flex flex-col cursor-pointer" 
                  onClick={() => {
                    if (pos === 0) setIsModalOpen(true);
                  }}
                  style={{
                    background: 'linear-gradient(145deg, #001a22 0%, #002d38 55%, #003d4a 100%)',
                    border: `1.5px solid ${card.color}44`,
                    boxShadow: pos === 0
                      ? `0 40px 80px ${card.glow}, 0 0 0 1px ${card.color}33, inset 0 1px 0 rgba(255,255,255,0.06)`
                      : '0 16px 40px rgba(0,0,0,0.25)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
                    pointerEvents: pos === 0 ? 'auto' : 'none',
                  }}
                >
                  {/* FRONTE */}
                  <div className="absolute inset-0 flex flex-col rounded-3xl overflow-hidden">
                    <div style={{ height: 4, background: `linear-gradient(90deg, ${card.color}, ${card.color === '#006071' ? '#00a8c0' : '#8fd44e'}, ${card.color})`, boxShadow: `0 0 20px 4px ${card.glow}` }} />
                    <div className="flex flex-col flex-1 p-5 sm:p-8 md:p-10 lg:p-14">
                      <div className="flex items-start justify-between mb-6 sm:mb-10">
                        <div style={{ width: 72, height: 72, borderRadius: 20, background: `linear-gradient(135deg, ${card.color}44, ${card.color}22)`, border: `1.5px solid ${card.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 28px ${card.glow}` }}>
                          <svg style={{ width: 34, height: 34, color: card.color }} fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                          </svg>
                        </div>
                        <span className="montserrat-heading font-black tabular-nums" style={{ fontSize: '5rem', color: `${card.color}20`, lineHeight: 1, letterSpacing: '-0.05em' }}>{card.num}</span>
                      </div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: card.color, marginBottom: '0.75rem' }}>{card.tag}</span>
                      <h3 className="montserrat-heading text-white mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{card.title}</h3>
                      
                      {/* Su desktop si vede il descritto, su mobile c'è un pulsantino "Scopri di più" */}
                      <div className="hidden sm:block">
                        <p style={{ color: 'rgba(203,213,225,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>{card.desc}</p>
                        <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: '0.92rem', lineHeight: 1.65 }}>{card.subdesc}</p>
                      </div>
                      <div className="sm:hidden mt-0 sm:mt-2 -top-2 relative">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80">
                          Tocca per leggere
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                          </svg>
                        </span>
                      </div>

                      <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${card.color}44, transparent)` }} />
                        <span style={{ color: card.color, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{active + 1} / {total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls: frecce + dots + progress */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
          {/* Prev */}
          <button
            onClick={prev}
            disabled={active === 0}
            style={{
              width: 52, height: 52, borderRadius: '50%', border: '1.5px solid #e2e8f0',
              background: 'white', color: '#006071', cursor: active === 0 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              opacity: active === 0 ? 0.35 : 1,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { if (active > 0) { (e.currentTarget as HTMLButtonElement).style.background = '#006071'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; } }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'white'; (e.currentTarget as HTMLButtonElement).style.color = '#006071'; }}
          >
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Progress bar + dots */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 'clamp(140px, 30vw, 220px)', height: 3, borderRadius: 999, background: '#e2e8f0', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 999,
                background: `linear-gradient(90deg, ${c.color}, ${c.color === '#006071' ? '#00a8c0' : '#8fd44e'})`,
                width: `${((active + 1) / total) * 100}%`,
                transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: `0 0 8px 2px ${c.glow}`,
              }} />
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {CARDS.map((cd, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: i === active ? 32 : 8, height: 8, borderRadius: 999,
                  background: i === active ? cd.color : '#cbd5e1', border: 'none', cursor: 'pointer',
                  transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: i === active ? `0 0 10px 2px ${cd.glow}` : 'none',
                }} />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={active === total - 1}
            style={{
              width: 52, height: 52, borderRadius: '50%', border: '1.5px solid #e2e8f0',
              background: 'white', color: '#006071', cursor: active === total - 1 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              opacity: active === total - 1 ? 0.35 : 1,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { if (active < total - 1) { (e.currentTarget as HTMLButtonElement).style.background = '#006071'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; } }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'white'; (e.currentTarget as HTMLButtonElement).style.color = '#006071'; }}
          >
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>

      {/* Modal Mobile */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[999] p-5 flex items-center justify-center sm:hidden"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" 
            style={{ animation: 'modalFadeOverlay 0.3s ease-out forwards' }} 
          />
          <div 
            className="relative w-full rounded-3xl bg-[#001a22] p-8 shadow-2xl flex flex-col items-center text-center border overflow-hidden"
            style={{ 
              borderColor: `${c.color}66`, 
              boxShadow: `0 20px 60px ${c.glow}`,
              animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position:'absolute', top:0, left:0, right:0, height: 4, background: `linear-gradient(90deg, ${c.color}, ${c.color === '#006071' ? '#00a8c0' : '#8fd44e'}, ${c.color})`, boxShadow: `0 0 20px 4px ${c.glow}` }} />
            <svg style={{ width: 48, height: 48, color: c.color, marginBottom: '1.5rem' }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d={c.iconPath} />
            </svg>
            <h4 className="montserrat-heading text-white text-3xl mb-4">{c.title}</h4>
            <p style={{ color: 'rgba(203,213,225,0.9)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>{c.desc}</p>
            <p style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>{c.subdesc}</p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-8 text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all active:scale-95"
              style={{ color: '#fff', backgroundColor: c.color, border: `1px solid ${c.color}` }}
            >
              X Chiudi
            </button>
          </div>
          <style>{`
            @keyframes modalFadeOverlay {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalSlideUp {
              from { opacity: 0; transform: translateY(30px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
