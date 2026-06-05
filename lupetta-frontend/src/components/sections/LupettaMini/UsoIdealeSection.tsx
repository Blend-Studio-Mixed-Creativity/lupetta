import { useScrollReveal } from '../../../hooks/useScrollReveal';

const USI = [
  {
    num: '01',
    title: 'Svezzamento in gabbia singola',
    desc: 'Ideale per nutrire i vitelli in gabbia singola nei primi 90 giorni di vita, garantendo un\'alimentazione su misura e controllata.',
    iconPath:
      'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  {
    num: '02',
    title: 'Allevamenti a conduzione diretta',
    desc: 'La scelta ottimale per le aziende che vogliono introdurre l\'allattamento autonomo e il controllo digitale senza stravolgere i propri spazi.',
    iconPath:
      'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    num: '03',
    title: 'Gestione da remoto via portale',
    desc: 'Consente il monitoraggio continuo di temperatura, quantità di latte erogato ed eventuali anomalie direttamente dal tuo smartphone o computer.',
    iconPath:
      'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253',
  },
];

export default function UsoIdealeSection() {
  const { ref: refHeader, isVisible: visHeader } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const { ref: refGrid, isVisible: visGrid } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-white text-gray-900 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 30%, rgba(101,179,46,0.12) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(0,160,190,0.10) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={refHeader}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 ${visHeader ? 'sr-reveal-up' : 'sr-hidden'}`}
        >
          <span
            style={{
              color: '#65b32e',
              fontWeight: 800,
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            Uso Ideale
          </span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900">
            Scenari di{' '}
            <span className="montserrat-italic" style={{ color: '#65b32e' }}>
              applicazione
            </span>
          </h2>
          <p
            className={`text-gray-600 text-lg mt-8 max-w-2xl mx-auto leading-relaxed ${visHeader ? 'sr-reveal-up sr-delay-2' : 'sr-hidden'}`}
          >
            Lupetta Mini Wi-Fi si integra facilmente nel tuo allevamento per rendere l'allattamento autonomo ed efficiente in qualsiasi contesto produttivo.
          </p>
        </div>

        {/* Cards */}
        <style>{`
          @keyframes rotBGimg {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .uiverse-card {
            width: 100%;
            max-width: 340px;
            margin: 0 auto;
            height: 420px;
            background: #07182E;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 2.25rem;
            overflow: hidden;
            border-radius: 20px;
            transform-style: preserve-3d;
            transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }
          .uiverse-card:hover {
            transform: rotateX(8deg) rotateY(-8deg) translateZ(30px);
            box-shadow: 0 30px 60px rgba(101, 179, 46, 0.3), 0 0 40px rgba(0, 200, 160, 0.2);
          }
          .uiverse-card::before {
            content: '';
            position: absolute;
            width: 120px;
            background-image: linear-gradient(180deg, rgb(101, 179, 46), rgb(0, 96, 113), rgb(0, 200, 160));
            height: 150%;
            animation: rotBGimg 3s linear infinite;
            transition: all 0.2s linear;
            top: -25%;
            left: -25%;
          }
          .uiverse-card::after {
            content: '';
            position: absolute;
            background: #07182E;
            inset: 5px;
            border-radius: 15px;
            z-index: 1;
            transition: all 0.6s ease;
          }
          .uiverse-card:hover::after {
            box-shadow: inset 0 0 40px rgba(101, 179, 46, 0.2);
          }
          .uiverse-card-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            height: 100%;
            transform-style: preserve-3d;
          }
        `}</style>
        <div ref={refGrid} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" style={{ perspective: '1200px' }}>
          {USI.map((use, i) => (
            <div
              key={i}
              className={`uiverse-card ${i === USI.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''} ${visGrid ? 'sr-reveal-scale' : 'sr-hidden'}`}
              style={{ animationDelay: `${i * 0.13}s` }}
            >
              <div className="uiverse-card-content">
                {/* Number watermark */}
                  <span
                    className="montserrat-heading select-none mb-4"
                    style={{
                      fontSize: '3.5rem',
                      fontWeight: 900,
                      color: 'rgba(101, 179, 46, 0.15)',
                      lineHeight: 1,
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {use.num}
                  </span>

                  {/* Icon */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(135deg, #65b32e 0%, #00c8a0 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      boxShadow: '0 0 20px rgba(101, 179, 46, 0.5)',
                      flexShrink: 0,
                    }}
                  >
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d={use.iconPath} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="montserrat-heading text-xl mb-3 text-white">{use.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{use.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







