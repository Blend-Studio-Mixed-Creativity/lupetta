import { useScrollReveal } from '../../../hooks/useScrollReveal';

const USI = [
  {
    num: '01',
    title: 'Lorem Parvum',
    desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero.',
    iconPath:
      'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  {
    num: '02',
    title: 'Ipsum Domesticus',
    desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien.',
    iconPath:
      'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    num: '03',
    title: 'Dolor Initialis',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
    iconPath:
      'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253',
  },
];

export default function UsoIdealeSection() {
  const { ref: refHeader, isVisible: visHeader } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const { ref: refGrid, isVisible: visGrid } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-primary text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
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
          <h2 className="montserrat-heading text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Scenari di{' '}
            <span className="montserrat-italic" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Applicazione
            </span>
          </h2>
          <p
            className={`text-white/55 text-xl mt-8 max-w-2xl mx-auto leading-relaxed ${visHeader ? 'sr-reveal-up sr-delay-2' : 'sr-hidden'}`}
          >
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>

        {/* Cards */}
        <div ref={refGrid} className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {USI.map((use, i) => (
            <div
              key={i}
              className={visGrid ? 'sr-reveal-scale' : 'sr-hidden'}
              style={{ animationDelay: `${i * 0.13}s` }}
            >
              <div
                className="glass-dark rounded-2xl h-full relative overflow-hidden"
                style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* Number watermark */}
                <span
                  className="montserrat-heading absolute top-4 right-6 select-none"
                  style={{ fontSize: '5rem', fontWeight: 900, color: 'rgba(101,179,46,0.1)', lineHeight: 1, letterSpacing: '-0.05em' }}
                >
                  {use.num}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, #65b32e 0%, #4fa028 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 24px rgba(101,179,46,0.35)',
                  }}
                >
                  <svg width={26} height={26} fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d={use.iconPath} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="montserrat-heading text-2xl mb-4 text-white relative z-10">{use.title}</h3>
                <p className="text-white/55 text-base leading-relaxed relative z-10">{use.desc}</p>

                {/* Bottom accent */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '1.5rem',
                    right: '1.5rem',
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(101,179,46,0.4), transparent)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







