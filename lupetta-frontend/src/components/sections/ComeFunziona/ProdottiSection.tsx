import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

interface Tilt {
  x: number;
  y: number;
  gx: number;
  gy: number;
  active: boolean;
}

const INIT: Tilt = { x: 0, y: 0, gx: 50, gy: 50, active: false };

const CARDS = [
  {
    num: '01',
    to: '/come-funziona/mini',
    color: '#65b32e',
    colorLight: '#8fd44e',
    glow: 'rgba(101,179,46,0.55)',
    title: 'MINI Wi-Fi',
    subtitle: 'Versione compatta',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante.',
    features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Pellentesque habitant morbi'],
    ctaLabel: 'Lorem ipsum',
    iconPath:
      'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
  },
  {
    num: '02',
    to: '/come-funziona/maxi',
    color: '#006071',
    colorLight: '#00a8c0',
    glow: 'rgba(0,96,113,0.55)',
    title: 'MAXI Tech',
    subtitle: 'Versione avanzata',
    desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet.',
    features: ['Donec eu libero sit amet', 'Aenean ultricies mi vitae', 'Mauris placerat eleifend'],
    ctaLabel: 'Lorem ipsum',
    iconPath:
      'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
];

export default function ProdottiSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.12 });
  const [tilts, setTilts] = useState<Tilt[]>([INIT, INIT]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>, idx: number) {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    setTilts((prev) =>
      prev.map((t, i) =>
        i === idx
          ? { x: (nx - 0.5) * 22, y: -(ny - 0.5) * 16, gx: nx * 100, gy: ny * 100, active: true }
          : t,
      ),
    );
  }

  function handleLeave(idx: number) {
    setTilts((prev) => prev.map((t, i) => (i === idx ? { ...INIT } : t)));
  }

  return (
    <section
      style={{
        background: '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 text-center ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}
        >
          <span
            style={{
              color: '#65b32e',
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            I Prodotti
          </span>
          <h2
            className="montserrat-heading text-[#006071]"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Scegli la versione{' '}
            <span className="montserrat-italic" style={{ color: '#65b32e' }}>
              giusta per te
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CARDS.map((card, idx) => {
            const tilt = tilts[idx];
            return (
              <div
                key={card.num}
                className={`${isVisible ? (idx === 0 ? 'sr-reveal-left' : 'sr-reveal-right') : 'sr-hidden'} ${idx === 1 ? 'sr-delay-2' : ''}`}
                style={{ perspective: '1200px' }}
                onMouseMove={(e) => handleMove(e, idx)}
                onMouseLeave={() => handleLeave(idx)}
              >
                <Link to={card.to} style={{ display: 'block', textDecoration: 'none' }}>
                  <div
                    style={{
                      background:
                        'linear-gradient(145deg, #001a22 0%, #002d38 55%, #003040 100%)',
                      border: `1.5px solid ${tilt.active ? card.color + '55' : 'rgba(255,255,255,0.07)'}`,
                      borderRadius: '2rem',
                      overflow: 'hidden',
                      position: 'relative',
                      transform: tilt.active
                        ? `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.025) translateZ(12px)`
                        : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)',
                      boxShadow: tilt.active
                        ? `0 40px 90px ${card.glow}, 0 0 0 1px ${card.color}22, inset 0 1px 0 rgba(255,255,255,0.06)`
                        : '0 8px 40px rgba(0,0,0,0.55)',
                      transition: tilt.active
                        ? 'border-color 0.25s ease, box-shadow 0.35s ease, transform 0.08s ease'
                        : 'border-color 0.5s ease, box-shadow 0.55s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    {/* Glare */}
                    {tilt.active && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          zIndex: 20,
                          borderRadius: '2rem',
                          pointerEvents: 'none',
                          background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.11) 0%, transparent 58%)`,
                        }}
                      />
                    )}

                    {/* Top color accent bar */}
                    <div
                      style={{
                        height: 4,
                        background: `linear-gradient(90deg, ${card.color}, ${card.colorLight}, ${card.color})`,
                        boxShadow: `0 0 28px 6px ${card.glow}`,
                      }}
                    />

                    {/* NO.XX label + edge glow line */}
                    <div
                      style={{
                        padding: '2rem 2.5rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 900,
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: card.color,
                        }}
                      >
                        NO.{card.num}
                      </span>
                      <div
                        style={{
                          flex: 1,
                          height: 1,
                          background: `linear-gradient(90deg, ${card.color}55, transparent)`,
                        }}
                      />
                    </div>

                    {/* Body */}
                    <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3.5vw, 3rem) clamp(2rem, 4vw, 3rem)' }}>

                      {/* Number watermark + icon */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          marginBottom: '2rem',
                        }}
                      >
                        <span
                          className="montserrat-heading"
                          style={{
                            fontSize: '7rem',
                            fontWeight: 900,
                            lineHeight: 0.85,
                            color: `${card.color}18`,
                            letterSpacing: '-0.06em',
                            textShadow: `0 0 40px ${card.glow}`,
                            userSelect: 'none',
                          }}
                        >
                          {card.num}
                        </span>
                        <div
                          style={{
                            width: 72,
                            height: 72,
                            borderRadius: 20,
                            background: `linear-gradient(135deg, ${card.color}33, ${card.color}11)`,
                            border: `1.5px solid ${card.color}44`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: tilt.active
                              ? `0 10px 36px ${card.glow}`
                              : `0 4px 18px ${card.glow}55`,
                            transition: 'box-shadow 0.4s ease',
                          }}
                        >
                          <svg
                            width={32}
                            height={32}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.4}
                            stroke={card.color}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                          </svg>
                        </div>
                      </div>

                      {/* Subtitle tag */}
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: card.color,
                          display: 'block',
                          marginBottom: '0.65rem',
                        }}
                      >
                        {card.subtitle}
                      </span>

                      {/* Title */}
                      <h2
                        className="montserrat-italic text-white"
                        style={{
                          fontSize: 'clamp(2rem, 4vw, 3rem)',
                          lineHeight: 1.08,
                          letterSpacing: '-0.025em',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {card.title}
                      </h2>

                      {/* Divider */}
                      <div
                        style={{
                          height: 1,
                          background: `linear-gradient(90deg, ${card.color}55, transparent)`,
                          marginBottom: '1.5rem',
                        }}
                      />

                      {/* Description */}
                      <p
                        style={{
                          color: 'rgba(203,213,225,0.72)',
                          fontSize: '1rem',
                          lineHeight: 1.78,
                          marginBottom: '2rem',
                        }}
                      >
                        {card.desc}
                      </p>

                      {/* Features */}
                      <ul
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.8rem',
                          marginBottom: '2.5rem',
                        }}
                      >
                        {card.features.map((feat, fi) => (
                          <li
                            key={fi}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
                          >
                            <div
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                flexShrink: 0,
                                background: card.color,
                                boxShadow: `0 0 10px ${card.glow}`,
                              }}
                            />
                            <span
                              style={{ color: 'rgba(203,213,225,0.65)', fontSize: '0.95rem' }}
                            >
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          paddingTop: '1.25rem',
                          borderTop: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <span
                          style={{
                            color: card.color,
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {card.ctaLabel}
                        </span>
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            background: `${card.color}22`,
                            border: `1.5px solid ${card.color}44`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: tilt.active ? `0 0 18px ${card.glow}` : 'none',
                            transition: 'box-shadow 0.35s ease',
                          }}
                        >
                          <svg
                            width={16}
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke={card.color}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}








