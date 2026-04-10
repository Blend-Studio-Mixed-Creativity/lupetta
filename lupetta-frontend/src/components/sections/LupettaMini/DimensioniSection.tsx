import { useScrollReveal } from '../../../hooks/useScrollReveal';

const SPECS = [
  {
    label: 'Dimensioni',
    value: '120 × 80 × 95 cm',
    iconPath:
      'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15',
  },
  {
    label: 'Peso struttura',
    value: '45 kg',
    iconPath:
      'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
  },
  {
    label: 'Volume serbatoio',
    value: '25 L',
    iconPath:
      'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
  },
  {
    label: 'Capi servibili',
    value: '1 – 3 capi',
    iconPath:
      'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  },
];

export default function DimensioniSection() {
  const { ref: refLeft, isVisible: visLeft } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: refRight, isVisible: visRight } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <>
      <style>{`
        .specs-card {
          position: relative;
          background: #0b1a20;
          border-radius: 20px;
          cursor: default;
          isolation: isolate;
        }
        .specs-card::before {
          content: '';
          position: absolute;
          inset: 0;
          left: -4px;
          margin: auto;
          width: calc(100% + 8px);
          height: calc(100% + 8px);
          border-radius: 22px;
          background: linear-gradient(-45deg, #65b32e 0%, #006071 50%, #00c8a0 100%);
          z-index: -1;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .specs-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #4fa028 0%, #006071 100%);
          border-radius: 20px;
          transform: translate3d(0, 0, 0) scale(0.96);
          filter: blur(22px);
          z-index: -2;
          transition: filter 0.4s ease;
        }
        .specs-card:hover::after {
          filter: blur(28px);
          opacity: 0.85;
        }
        .specs-card:hover::before {
          transform: rotate(-6deg) scale(1.03);
        }
      `}</style>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div ref={refLeft} className={visLeft ? 'sr-reveal-left' : 'sr-hidden'}>
            <span
              style={{
                color: '#65b32e',
                fontWeight: 800,
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Sezione 1
            </span>
            <h2 className="montserrat-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight mt-4 mb-8">
              Dimensionamento e{' '}
              <span className="montserrat-italic text-accent">Capacità di Contenimento</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies
              eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
              pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet.
            </p>
          </div>

          <div ref={refRight} className={visRight ? 'sr-reveal-right' : 'sr-hidden'}>
            <div className="specs-card">
              {/* Card header */}
              <div
                style={{
                  padding: '1.75rem 2rem',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  background: 'linear-gradient(135deg, rgba(101,179,46,0.1) 0%, transparent 100%)',
                  borderRadius: '20px 20px 0 0',
                }}
              >
                <span className="montserrat-heading text-lg" style={{ color: 'rgba(255,255,255,0.95)' }}>Specifiche Tecniche</span>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Versione MINI Wi-Fi
                </p>
              </div>

              {/* Specs list */}
              <div style={{ padding: '1rem 1.25rem 1.5rem' }}>
                {SPECS.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group"
                    style={{
                      padding: '0.9rem 0.75rem',
                      borderRadius: 12,
                      borderBottom: i < SPECS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: 'rgba(101,179,46,0.15)',
                        border: '1.5px solid rgba(101,179,46,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#65b32e">
                        <path strokeLinecap="round" strokeLinejoin="round" d={spec.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1 flex justify-between items-center min-w-0">
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{spec.label}</span>
                      <span className="montserrat-heading font-bold ml-4 tabular-nums" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1rem' }}>
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}







