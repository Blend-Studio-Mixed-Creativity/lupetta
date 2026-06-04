import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const ROWS: { feature: string; mini: boolean; maxi: boolean }[] = [
  { feature: 'Piano alimentare personalizzato', mini: true, maxi: true },
  { feature: 'Piano di svezzamento per singolo animale', mini: false, maxi: true },
  { feature: 'Identificazione animale tramite Smart-Tag / RFID', mini: false, maxi: true },
  { feature: 'Monitoraggio dei parametri macchina', mini: true, maxi: true },
  { feature: 'Monitoraggio dell’ingestione del singolo animale', mini: false, maxi: true },
  { feature: 'Registro dei dati alimentari', mini: true, maxi: true },
  { feature: 'Segnalazione di anomalie macchina', mini: true, maxi: true },
  { feature: 'Segnalazione di ritardi o anomalie alimentari dell’animale', mini: false, maxi: true },
  { feature: 'Controllo remoto tramite Wi-Fi / app', mini: true, maxi: true },
  { feature: 'Notifiche su telefono, tablet o PC', mini: true, maxi: true },
  { feature: 'Sistema pensato per gabbia singola', mini: true, maxi: false },
  { feature: 'Sistema pensato per piccoli gruppi', mini: false, maxi: true },
  { feature: 'Utilizzo con app Lupetta dedicata', mini: true, maxi: true },
  { feature: 'Supporto alla diagnosi precoce tramite dati alimentari', mini: false, maxi: true },
];function Check({ color }: { color: string }) {
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

export default function ComparativaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section style={{ background: 'linear-gradient(160deg, #020d12 0%, #001a22 55%, #020d12 100%)', padding: 'clamp(5rem, 10vw, 10rem) 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-24 sm:mb-32 lg:mb-36 ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}>
          <span style={{ color: '#65b32e', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            Comparazione
          </span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl tracking-tight" style={{ color: '#ffffff', lineHeight: 1.1 }}>
            Mini <span className="montserrat-italic text-accent">vs</span> Maxi
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '46rem', margin: '1.5rem auto 0' }}>
            Confronta le caratteristiche e le funzionalità di Lupetta Mini Wi-Fi e Lupetta Maxi Tech per trovare la soluzione ideale per il tuo&nbsp;allevamento.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full">
          {/* Table — left */}
          <div className={`${isVisible ? 'sr-reveal-left sr-delay-2' : 'sr-hidden'}`}>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(145deg, rgba(0,26,34,0.6) 0%, rgba(0,45,56,0.4) 100%)', backdropFilter: 'blur(24px)' }}>
              {/* Table header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(60px, 18vw, 120px) clamp(60px, 18vw, 120px)', padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2.5rem)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
                <span className="hidden sm:block" style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Caratteristica</span>
                <span className="sm:hidden" style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Feature</span>
                <span style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#65b32e', textAlign: 'center' }}>Mini</span>
                <span style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#006071', textAlign: 'center' }}>Maxi</span>
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
        </div>
      </div>
    </section>
  );
}







