import { useScrollReveal } from '../../../hooks/useScrollReveal';
import heroImg from '../../../assets/images/mucca.webp';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="absolute inset-0 hero-overlay" />

      {/* Orb verde */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', right: '8%',
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(101,179,46,0.22) 0%, transparent 68%)',
          filter: 'blur(2px)',
          animation: 'subtleFloat 7s ease-in-out infinite',
        }}
      />
      {/* Orb teal */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', left: '5%',
          width: 360, height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,160,190,0.18) 0%, transparent 68%)',
          filter: 'blur(4px)',
          animation: 'subtleFloat 9s ease-in-out 1.5s infinite',
        }}
      />

      <div
        ref={ref}
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10"
        style={{ paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        {/* Badge */}
        <div
          className={isVisible ? 'sr-reveal-up' : 'sr-hidden'}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <span className="hero-badge" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.08)' }}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            MINI Wi-Fi
          </span>
        </div>

        {/* Titolo principale */}
        <h1
          className={`montserrat-italic text-center ${isVisible ? 'sr-reveal-up sr-delay-1' : 'sr-hidden'}`}
          style={{
            fontSize: 'clamp(3.2rem, 7vw, 8rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          Specifiche
          <br />
          Tecniche
          <span
            className="block"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            MINI WiFi
          </span>
        </h1>

        {/* Linea decorativa */}
        <div
          className={isVisible ? 'sr-reveal-up sr-delay-2' : 'sr-hidden'}
          style={{
            width: 'clamp(4rem, 8vw, 8rem)',
            height: 3,
            borderRadius: 999,
            background: 'linear-gradient(90deg, rgba(101,179,46,0), #65b32e, rgba(101,179,46,0))',
            margin: '0 auto 1.75rem',
          }}
        />

        {/* Sottotitolo */}
        <p
          className={`text-center ${isVisible ? 'sr-reveal-up sr-delay-3' : 'sr-hidden'}`}
          style={{
            fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            maxWidth: '52ch',
            margin: '0 auto',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>

    </section>
  );
}







