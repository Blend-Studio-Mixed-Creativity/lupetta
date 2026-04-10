import { useScrollReveal } from '../../../hooks/useScrollReveal';

const FEATURES = [
  {
    iconPath:
      'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
    label: 'Connessione Wi-Fi integrata',
    desc: 'Standard 802.11n/ac, portata fino a 100 m in campo aperto.',
    color: '#65b32e',
  },
  {
    iconPath:
      'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 9h3',
    label: 'App mobile iOS & Android',
    desc: 'Monitoraggio in tempo reale da smartphone o tablet.',
    color: '#006071',
  },
  {
    iconPath:
      'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
    label: 'Dashboard cloud centralizzata',
    desc: 'Storico dati e reportistica accessibile ovunque via browser.',
    color: '#65b32e',
  },
  {
    iconPath:
      'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
    label: 'Notifiche e alert automatici',
    desc: 'Push notification su anomalie, livelli critici o guasti.',
    color: '#006071',
  },
];

function WifiRings() {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: '100%', height: '100%', minHeight: 320 }}
    >
      {/* Outer rings */}
      {[160, 120, 80].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: size * 2,
            height: size * 2,
            borderColor: i === 0 ? 'rgba(101,179,46,0.12)' : i === 1 ? 'rgba(101,179,46,0.18)' : 'rgba(101,179,46,0.26)',
            animation: `pulse-ring ${2.8 + i * 0.6}s ease-out ${i * 0.4}s infinite`,
          }}
        />
      ))}

      {/* Center disc */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: 100,
          height: 100,
          background: 'linear-gradient(135deg, #65b32e 0%, #4fa028 100%)',
          boxShadow: '0 0 0 8px rgba(101,179,46,0.15), 0 0 40px rgba(101,179,46,0.4), 0 16px 40px rgba(101,179,46,0.25)',
          animation: 'subtleFloat 4s ease-in-out infinite',
        }}
      >
        <svg
          width={44}
          height={44}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
          />
        </svg>
      </div>

      {/* Orbit dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: 10,
          height: 10,
          background: '#65b32e',
          boxShadow: '0 0 10px rgba(101,179,46,0.8)',
          top: '50%',
          left: '50%',
          transformOrigin: '0 0',
          animation: 'orbitDot 5s linear infinite',
          marginTop: -5,
          marginLeft: -5,
        }}
      />
    </div>
  );
}

export default function ControlloRemotoSection() {
  const { ref: refLeft, isVisible: visLeft } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const { ref: refRight, isVisible: visRight } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0%   { opacity: 0.9; transform: scale(1); }
          70%  { opacity: 0; transform: scale(1.35); }
          100% { opacity: 0; transform: scale(1.35); }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
      `}</style>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          {/* LEFT — WiFi visualization panel */}
          <div ref={refLeft} className={`order-2 lg:order-1 ${visLeft ? 'sr-reveal-left' : 'sr-hidden'}`}>
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                background: 'linear-gradient(145deg, #001a22 0%, #002d38 60%, #003040 100%)',
                boxShadow: '0 32px 80px rgba(0,96,113,0.35), 0 0 0 1px rgba(101,179,46,0.15)',
                padding: '2.5rem',
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Top accent */}
              <div
                style={{ height: 2, background: 'linear-gradient(90deg, transparent, #65b32e, transparent)', marginBottom: '2rem', borderRadius: 999 }}
              />

              {/* WiFi rings visualization */}
              <WifiRings />

              {/* Status chips */}
              <div className="flex flex-wrap gap-2 justify-center mt-6 relative z-10">
                {['Online', 'Segnale forte', '— 62 dBm'].map((chip, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.3rem 0.9rem',
                      borderRadius: 999,
                      background: i === 0 ? 'rgba(101,179,46,0.15)' : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${i === 0 ? 'rgba(101,179,46,0.4)' : 'rgba(255,255,255,0.1)'}`,
                      color: i === 0 ? '#65b32e' : 'rgba(255,255,255,0.5)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                    }}
                  >
                    {i === 0 && (
                      <span
                        style={{
                          display: 'inline-block',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#65b32e',
                          boxShadow: '0 0 6px #65b32e',
                          marginRight: 6,
                          verticalAlign: 'middle',
                        }}
                      />
                    )}
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — text + feature list */}
          <div ref={refRight} className={`order-1 lg:order-2 ${visRight ? 'sr-reveal-right' : 'sr-hidden'}`}>
            <span
              style={{
                color: '#65b32e',
                fontWeight: 800,
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Sezione 3
            </span>
            <h2 className="montserrat-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight mt-4 mb-6">
              Integrazione con Sistemi di{' '}
              <span className="montserrat-italic text-accent">Controllo Remoto Web</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-colors duration-200 hover:bg-slate-50 group"
                  style={{ border: '1px solid #f1f5f9' }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      background: `${feat.color}12`,
                      border: `1.5px solid ${feat.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'box-shadow 0.3s ease',
                    }}
                    className={`group-hover:shadow-[0_0_16px_${feat.color}44]`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={feat.color}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.iconPath} />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="montserrat-heading text-slate-900 font-semibold block">{feat.label}</span>
                    <p className="text-slate-500 text-base leading-relaxed mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}







