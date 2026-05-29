import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import imgMini from '../../../assets/images/lupetta-mini-hero.webp';
import imgMaxi from '../../../assets/images/lupetta-maxi-render-capacita.webp';



const CARDS = [
  {
    num: '01',
    to: '/come-funziona/mini',
    color: '#65b32e',
    colorLight: '#8fd44e',
    glow: 'rgba(101,179,46,0.55)',
    title: 'Mini Wi-Fi',
    subtitle: 'Versione compatta',
    desc: 'Gestione individuale del vitello in gabbia singola',
    features: [
      'Elevata durabilità nel tempo',
      'Facilità di pulizia',
      'Massima igiene nella gestione del latte',
    ],
    ctaLabel: 'Scopri di più',
    image: imgMini,
  },
  {
    num: '02',
    to: '/come-funziona/maxi',
    color: '#006071',
    colorLight: '#00a8c0',
    glow: 'rgba(0,96,113,0.55)',
    title: 'Maxi Tech',
    subtitle: 'Versione avanzata',
    desc: 'Pensata per la gestione di piccoli gruppi di animali con controllo individuale.',
    features: [
      'Per gruppi da 4 a 8 vitelli',
      'Distribuzione del latte per più animali dalla stessa allattatrice',
      'Gestione personalizzata del piano di svezzamento per singolo animale',
    ],
    ctaLabel: 'Scopri di più',
    image: imgMaxi,
  },
];

export default function ProdottiSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.12 });
  const [hoveredStates, setHoveredStates] = useState<boolean[]>([false, false]);

  function handleEnter(idx: number) {
    setHoveredStates((prev) => prev.map((h, i) => (i === idx ? true : h)));
  }

  function handleLeave(idx: number) {
    setHoveredStates((prev) => prev.map((h, i) => (i === idx ? false : h)));
  }

  return (
    <section
      style={{
        background: '#ffffff',
        padding: 'clamp(4rem, 8vw, 8rem) 0',
      }}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

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
            Scegli il modello <br />
            <span className="montserrat-italic text-accent">
              ideale per la tua struttura
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CARDS.map((card, idx) => {
            const isHovered = hoveredStates[idx];
            return (
              <div
                key={card.num}
                className={`${isVisible ? (idx === 0 ? 'sr-reveal-left' : 'sr-reveal-right') : 'sr-hidden'} ${idx === 1 ? 'sr-delay-2' : ''}`}
                style={{ display: 'flex', flexDirection: 'column' }}
                onMouseEnter={() => handleEnter(idx)}
                onMouseLeave={() => handleLeave(idx)}
              >
                <Link to={card.to} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, textDecoration: 'none', height: '100%' }}>
                  <div
                    style={{
                      background:
                        'linear-gradient(145deg, #001a22 0%, #002d38 55%, #003040 100%)',
                      border: `1.5px solid ${isHovered ? card.color + '55' : 'rgba(255,255,255,0.07)'}`,
                      borderRadius: '2rem',
                      overflow: 'hidden',
                      position: 'relative',
                      transform: isHovered ? 'scale(1.025)' : 'scale(1)',
                      boxShadow: isHovered
                        ? `0 40px 90px ${card.glow}, 0 0 0 1px ${card.color}22, inset 0 1px 0 rgba(255,255,255,0.06)`
                        : '0 8px 40px rgba(0,0,0,0.55)',
                      transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      height: '100%',
                    }}
                  >
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
                    <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3.5vw, 3rem) clamp(2rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      
                      {/* Product Photo */}
                      <div
                        style={{
                          width: '100%',
                          height: '300px',
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          position: 'relative',
                          marginBottom: '2rem',
                          border: '1.5px solid rgba(255,255,255,0.08)',
                          background: 'rgba(0,0,0,0.2)',
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)',
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          }}
                        />
                        {/* Overlay gradient to blend with the card background */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,26,34,0.6) 0%, transparent 40%)',
                            pointerEvents: 'none',
                          }}
                        />
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
                          marginTop: 'auto',
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
                            boxShadow: isHovered ? `0 0 18px ${card.glow}` : 'none',
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








