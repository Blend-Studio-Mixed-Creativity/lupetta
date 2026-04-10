import { useScrollReveal } from '../../../hooks/useScrollReveal';

const SPECS = [
  { label: 'Lorem Capacitas', value: '200 L', iconPath: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' },
  { label: 'Dolor Autonomia', value: '72h', iconPath: 'M12 6v6h4.5m4.5-15a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Ipsum Potentia', value: '1.5 kW', iconPath: 'M3.75 13.5l10.5-11.25L12 10l8.5 8.5' },
  { label: 'Amet Capacitas', value: '6 - 12 lorem', iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
  { label: 'Consectetur Pressio', value: '2.5 bar', iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' },
];

export default function CapacitaSection() {
  const { ref: refLeft, isVisible: visLeft } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: refRight, isVisible: visRight } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <>
      <style>{`
        .specs-card {
          position: relative;
          background: #0b1a20;
          cursor: default;
          isolation: isolate;
        }
        .specs-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #006071 0%, #65b32e 50%, #00c8a0 100%);
          z-index: -1;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .specs-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #4fa028 0%, #006071 100%);
          transform: translate3d(0, 0, 0);
          filter: blur(28px);
          z-index: -2;
          transition: filter 0.4s ease;
        }
        .specs-card:hover::after {
          filter: blur(36px);
          opacity: 0.85;
        }
        .specs-card:hover::before {
          transform: scale(1.01);
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
      `}</style>

      <div className="w-full relative bg-white">
        {/* Full screen intro text */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 z-0 pt-32 pb-20">
          <div ref={refLeft} className={`w-full text-center max-w-7xl mx-auto ${visLeft ? 'sr-reveal-up' : 'sr-hidden'}`}>
            <span
              style={{
                color: '#65b32e',
                fontWeight: 800,
                fontSize: '0.9rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Capacità e Autonomia
            </span>
            <h2 className="montserrat-heading text-5xl sm:text-7xl md:text-8xl text-slate-900 tracking-tight mt-6 mb-12 leading-[1.1]">
              Capacità di Alimentazione<br />
              <span className="montserrat-italic text-accent">e Durata Operativa</span>
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-slate-500 leading-relaxed max-w-5xl mx-auto mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
            </p>
            <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
              Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper.
            </p>
          </div>
        </section>

        {/* Full screen card reveal */}
        <section className="relative z-10 w-full">
          <div 
            ref={refRight} 
            className={`specs-card w-full min-h-screen flex flex-col justify-center py-24 px-4 sm:px-12 lg:px-24 transition-all duration-[1200ms] ease-out ${visRight ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
            style={{ borderRadius: '0' }}
          >
            <div className="w-full max-w-7xl mx-auto">
              {/* Card header */}
              <div
                className={visRight ? 'spec-item-reveal opacity-0' : 'opacity-0'}
                style={{
                  padding: '3.5rem 4rem',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  background: 'linear-gradient(135deg, rgba(101,179,46,0.1) 0%, transparent 100%)',
                  borderRadius: '32px 32px 0 0',
                  animationDelay: '100ms',
                }}
              >
                <span className="montserrat-heading text-5xl md:text-5xl lg:text-6xl" style={{ color: 'rgba(255,255,255,0.95)' }}>Specifiche Tecniche</span>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.15rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '0.75rem' }}>
                  Versione MAXI Tech
                </p>
              </div>

              {/* Specs list */}
              <div style={{ padding: '2rem 3rem 4rem', background: 'transparent' }}>
                {SPECS.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-8 group ${visRight ? 'spec-item-reveal opacity-0' : 'opacity-0'}`}
                    style={{
                      padding: '2.5rem 1.5rem',
                      borderBottom: i < SPECS.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                      transition: 'background 0.3s ease',
                      borderRadius: 20,
                      animationDelay: `${(i + 1) * 150 + 100}ms`,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.12)',
                        border: '1.5px solid rgba(255,255,255,0.22)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(255,255,255,0.9)">
                        <path strokeLinecap="round" strokeLinejoin="round" d={spec.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1 flex justify-between items-center min-w-0">
                      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.35rem', fontWeight: 500 }}>{spec.label}</span>
                      <span className="montserrat-heading font-bold ml-6 tabular-nums" style={{ color: '#ffffff', fontSize: '2.1rem', textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}







