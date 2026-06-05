import { useScrollReveal } from '../../../hooks/useScrollReveal';
import renderCapacita from '../../../assets/images/lupetta-maxi-render-capacita.webp';

const SPECS = [
  { label: 'Assorbimento di corrente massimo', value: '400 Watt - 24 Volt', iconPath: 'M3.75 13.5l10.5-11.25L12 10l8.5 8.5' },
  { label: 'Capacità del serbatoio', value: '60 Litri', iconPath: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' },
  { label: 'Range di mantenimento della temperatura', value: '25° - 40°', iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' },
  { label: 'Identificativo dei vitelli', value: 'RFID adesivo usa e getta', iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
  { label: 'Quantità di latte per pasto', value: 'Regolabile', iconPath: 'M12 6v6h4.5m4.5-15a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Guarnizioni di tenuta', value: 'Anti-insetto', iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z' },
  { label: 'Connessione', value: 'Wi-Fi integrata', iconPath: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z' },
];

const CAPACITY_CARDS = [
  {
    title: 'Distribuzione multi-capo',
    text: 'Gestisce il latte di più animali con una logica operativa stabile e controllata.',
    iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z',
  },
  {
    title: 'Svezzamento su misura',
    text: 'Personalizza il piano alimentare del singolo vitello e mantiene tracciata ogni fase.',
    iconPath: 'M9 12.75L11.25 15 15 9.75M12 3.75c-4.142 0-7.5 2.14-7.5 4.781 0 5.926 7.5 11.719 7.5 11.719s7.5-5.793 7.5-11.719c0-2.64-3.358-4.781-7.5-4.781z',
  },
];

export default function CapacitaSection() {
  const { ref: refLeft, isVisible: visLeft } = useScrollReveal<HTMLDivElement>({ threshold: 0.02 });
  const { ref: refRight, isVisible: visRight } = useScrollReveal<HTMLDivElement>({ threshold: 0.02 });

  return (
    <>
      <style>{`
        .specs-card {
          position: relative;
          background:
            linear-gradient(135deg, rgba(0, 96, 113, 0.95) 0%, rgba(11, 26, 32, 0.98) 42%, rgba(13, 31, 38, 1) 100%),
            #0b1a20;
          cursor: default;
          isolation: isolate;
          overflow: hidden;
        }
        .specs-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(101, 179, 46, 0.42), transparent 24%, transparent 76%, rgba(0, 200, 160, 0.26));
          pointer-events: none;
          z-index: -1;
        }
        .specs-card::after {
          content: '';
          position: absolute;
          inset: 1px;
          border: 1px solid rgba(255,255,255,0.12);
          pointer-events: none;
          z-index: 0;
        }

        @keyframes specSlideUpFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .spec-item-reveal {
          animation: specSlideUpFade 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .capacity-card {
          background:
            linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.94)),
            #ffffff;
          box-shadow: 0 18px 45px -34px rgba(0, 96, 113, 0.65);
        }

        .capacity-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(101,179,46,0.55), rgba(0,96,113,0.18), rgba(255,255,255,0));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .spec-grid-card {
          background: rgba(255,255,255,0.075);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .spec-grid-card:hover {
          background: rgba(255,255,255,0.115);
          border-color: rgba(165,217,122,0.45);
          transform: translateY(-3px);
        }

        .spec-value {
          overflow-wrap: anywhere;
        }

        @media (max-width: 640px) {
          .spec-value--long {
            max-width: 14ch;
          }
        }
      `}</style>

      <div className="w-full relative bg-white pt-24 sm:pt-32 lg:pt-48 pb-0">
        <div className="relative w-full px-4 sm:px-6 lg:px-8 z-0 pt-0 pb-24 sm:pb-32 lg:pb-48">
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-16 items-center">
            <div ref={refLeft} className={`w-full text-left ${visLeft ? 'sr-reveal-up' : 'sr-hidden'}`}>
              <span
                style={{
                  color: '#65b32e',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Capacità e Autonomia
              </span>
              <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6 leading-[1.06] max-w-5xl">
                Capacità di alimentazione<br />
                <span className="montserrat-italic text-accent">e durata operativa</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-4xl mb-8">
                La Lupetta Maxi Tech è progettata per gestire gruppi di vitelli da 4 fino a 8 vitelli con una capacità giornaliera di distribuzione di 64 litri di latte ricostituito per macchina.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-4xl">
                {CAPACITY_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="capacity-card group relative overflow-hidden rounded-2xl px-5 py-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(0,96,113,0.75)]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                      </svg>
                    </div>
                    <h3 className="montserrat-heading text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{card.text}</p>
                    <span className="absolute bottom-0 left-5 right-5 h-px bg-linear-to-r from-primary/0 via-accent/60 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`relative min-h-96 ${visLeft ? 'sr-reveal-right' : 'sr-hidden'}`}
              style={{ animationDelay: '0.16s', minHeight: 'clamp(24rem, 40vw, 32.5rem)' }}
            >
              <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-primary/10 blur-2xl" aria-hidden />
              <img
                src={renderCapacita}
                alt="Render 3D della Lupetta Maxi Tech con serbatoio aperto"
                className="absolute inset-0 w-full h-full object-contain mix-blend-multiply drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Full screen card reveal */}
        <div className="relative z-10 w-full mt-0">
          <div
            ref={refRight}
            className={`specs-card w-full flex flex-col justify-center py-10 sm:py-12 lg:py-16 px-3 sm:px-8 lg:px-24 transition-all duration-1200 ease-out ${visRight ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
            style={{ borderRadius: '0', minHeight: 'clamp(52vh, 64vh, 780px)', paddingTop: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            <div className="w-full max-w-7xl mx-auto">
              {/* Card header */}
              <div
                className={visRight ? 'spec-item-reveal opacity-0' : 'opacity-0'}
                style={{
                  padding: 'clamp(1.5rem, 4vw, 2.75rem)',
                  animationDelay: '100ms',
                }}
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#a5d97a]">Scheda prodotto</p>
                    <span className="montserrat-heading text-4xl md:text-5xl" style={{ color: 'rgba(255,255,255,0.95)' }}>Specifiche tecniche</span>
                    <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '1rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '0.6rem' }}>
                      Versione MAXI Tech
                    </p>
                  </div>
                  <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(101,179,46,0.18)]" />
                    7 parametri chiave
                  </div>
                </div>
              </div>

              {/* Specs list */}
              <div style={{ padding: '0 clamp(1.5rem, 4vw, 2.75rem) clamp(1.5rem, 4vw, 2.75rem)', background: 'transparent' }}>
                {SPECS.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 group ${visRight ? 'spec-item-reveal opacity-0' : 'opacity-0'}`}
                    style={{
                      padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 1.5rem)',
                      borderBottom: i < SPECS.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                      transition: 'background 0.3s ease',
                      borderRadius: 20,
                      animationDelay: `${(i + 1) * 150 + 100}ms`,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div className="flex items-center gap-4 sm:gap-0 sm:block w-full sm:w-auto">
                      <div
                        style={{
                          width: 'clamp(56px, 10vw, 80px)',
                          height: 'clamp(56px, 10vw, 80px)',
                          borderRadius: 20,
                          background: 'rgba(255,255,255,0.12)',
                          border: '1.5px solid rgba(255,255,255,0.22)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(255,255,255,0.9)">
                          <path strokeLinecap="round" strokeLinejoin="round" d={spec.iconPath} />
                        </svg>
                      </div>

                      {/* Solo su mobile: label accanto all'icona */}
                      <span className="sm:hidden font-medium" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem' }}>{spec.label}</span>
                    </div>

                    <div className="flex-1 flex flex-row justify-between items-center w-full min-w-0">
                      {/* Desktop: label a sinistra */}
                      <span className="hidden sm:block" style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 500 }}>{spec.label}</span>

                      <span className="montserrat-heading font-bold sm:ml-6 tabular-nums text-right w-full sm:w-auto" style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}







