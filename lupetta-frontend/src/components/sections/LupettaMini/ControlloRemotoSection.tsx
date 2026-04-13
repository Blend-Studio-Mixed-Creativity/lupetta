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

export default function ControlloRemotoSection() {
  const { ref: refHero, isVisible: visHero } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: refFeatures, isVisible: visFeatures } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <style>{`
        @keyframes wifiSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes wifiPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.06); }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
        }
        @keyframes orbitDot2 {
          from { transform: rotate(180deg) translateX(170px) rotate(-180deg); }
          to   { transform: rotate(540deg) translateX(170px) rotate(-540deg); }
        }
        .ctrl-ring {
          border-radius: 50%;
          position: absolute;
          border: 1.5px solid rgba(101,179,46,0.2);
          animation: wifiSpin linear infinite;
        }
        .ctrl-ring-1 { width: 80px; height: 80px; animation-duration: 10s; }
        .ctrl-ring-2 { width: 140px; height: 140px; animation-duration: 16s; animation-direction: reverse; border-color: rgba(0,96,113,0.2); }
        .ctrl-ring-3 { width: 210px; height: 210px; animation-duration: 24s; border-color: rgba(0,200,160,0.1); }

        @media (min-width: 640px) {
          .ctrl-ring-1 { width: 120px; height: 120px; }
          .ctrl-ring-2 { width: 200px; height: 200px; }
          .ctrl-ring-3 { width: 300px; height: 300px; }
        }

        .feat-box {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
          z-index: 1;
          width: 260px;
          height: 260px;
        }
        .feat-box::before {
          content: ' ';
          position: absolute;
          top: 0; left: 50px;
          width: 50%; height: 100%;
          border-radius: 8px;
          background: linear-gradient(315deg, #65b32e, #006071, #00c8a0);
          transform: skewX(15deg);
          transition: 0.5s;
        }
        .feat-box::after {
          content: '';
          position: absolute;
          top: 0; left: 50px;
          width: 50%; height: 100%;
          border-radius: 8px;
          background: linear-gradient(315deg, #65b32e, #006071, #00c8a0);
          transform: skewX(15deg);
          transition: 0.5s;
          filter: blur(30px);
        }
        .feat-box:hover::before,
        .feat-box:hover::after {
          transform: skewX(0deg) scaleX(1.3);
        }
        .feat-box span {
          display: block;
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 5;
          pointer-events: none;
        }
        .feat-box span::before {
          content: '';
          position: absolute;
          top: -36px; left: 36px;
          width: 44px; height: 44px;
          border-radius: 8px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          opacity: 1;
        }
        .feat-box span::after {
          content: '';
          position: absolute;
          bottom: -36px; right: 36px;
          width: 44px; height: 44px;
          border-radius: 8px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          opacity: 1;
        }
        .feat-content {
          position: relative;
          width: 224px;
          height: 224px;
          padding: 28px 22px;
          background: rgba(11, 26, 32, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          z-index: 1;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        @keyframes featReveal {
          0%   { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .feat-reveal {
          animation: featReveal 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <section style={{ background: '#0b1a20' }}>

        {/* Hero full screen con WiFi al centro */}
        <div className="w-full flex flex-col justify-center items-center relative overflow-hidden px-4 py-10">
          {/* Anelli rotanti */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="ctrl-ring ctrl-ring-1" />
            <div className="ctrl-ring ctrl-ring-2" />
            <div className="ctrl-ring ctrl-ring-3" />
            {/* Dot orbitanti */}
            <div style={{
              position: 'absolute', width: 10, height: 10, borderRadius: '50%',
              background: '#65b32e', boxShadow: '0 0 10px rgba(101,179,46,0.9)',
              top: '50%', left: '50%', marginTop: -5, marginLeft: -5,
              transformOrigin: '0 0', animation: 'orbitDot 6s linear infinite',
            }} />
            <div style={{
              position: 'absolute', width: 6, height: 6, borderRadius: '50%',
              background: '#00c8a0', boxShadow: '0 0 10px rgba(0,200,160,0.9)',
              top: '50%', left: '50%', marginTop: -3, marginLeft: -3,
              transformOrigin: '0 0', animation: 'orbitDot2 9s linear infinite',
            }} />
          </div>

          {/* Icona WiFi pulsante */}
          <div
            ref={refHero}
            className={visHero ? 'sr-reveal-scale' : 'sr-hidden'}
            style={{ position: 'relative', zIndex: 2, marginBottom: '1.5rem' }}
          >
            <div style={{
              width: 'clamp(60px, 12vw, 90px)', height: 'clamp(60px, 12vw, 90px)', borderRadius: '50%',
              background: 'linear-gradient(135deg, #65b32e 0%, #006071 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(101,179,46,0.4), 0 0 80px rgba(0,96,113,0.2)',
              animation: 'wifiPulse 3.5s ease-in-out infinite',
            }}>
              <svg width="42" height="42" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>
            </div>
          </div>

          {/* Titolo */}
          <div
            className={`text-center max-w-5xl mx-auto ${visHero ? 'sr-reveal-up' : 'sr-hidden'}`}
            style={{ position: 'relative', zIndex: 2, animationDelay: '0.15s' }}
          >
            <span style={{ color: '#65b32e', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Sezione 3
            </span>
            <h2 className="montserrat-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mt-3 mb-4 leading-[1.1]" style={{ color: '#fff' }}>
              Controllo remoto <span className="montserrat-italic text-accent">Wi-Fi</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div
          ref={refFeatures}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 px-4 sm:px-6 lg:px-8 pb-16"
        >
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              className={`w-full ${visFeatures ? 'feat-reveal opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.16}s` }}
            >
              <div 
                className="w-full h-full rounded-[22px] p-[1.5px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(0,96,113,0.4)] group cursor-pointer"
                style={{
                  background: 'linear-gradient(144deg, rgba(0,96,113,0.8), rgba(101,179,46,0.8) 50%, rgba(0,200,160,0.8))',
                }}
              >
                <div className="w-full h-full bg-[#0b1a20] rounded-[20px] p-6 sm:p-8 flex flex-col items-start justify-start relative overflow-hidden group-hover:bg-[#0d222a] transition-colors">
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_#65b32e_0%,_transparent_70%)] pointer-events-none" />
                  
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }} className="mb-5 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-[#65b32e]/50">
                    <svg className="w-6 h-6 text-white group-hover:text-[#65b32e] transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={feat.iconPath} />
                    </svg>
                  </div>
                  <h3 className="montserrat-heading font-semibold mb-3 relative z-10 transition-colors group-hover:text-[#8fd44e]" style={{ color: '#fff', fontSize: '1.25rem', lineHeight: 1.3 }}>{feat.label}</h3>
                  <p className="relative z-10" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


