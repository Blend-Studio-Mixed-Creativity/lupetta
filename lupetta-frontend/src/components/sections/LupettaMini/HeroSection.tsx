import { useScrollReveal } from '../../../hooks/useScrollReveal';
import heroImg from '../../../assets/images/lupetta-mini-hero.webp';
import { Spotlight } from '../../ui/spotlight-new';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      className="relative text-white overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,10,15,0.55) 0%, rgba(0,60,75,0.35) 100%)' }} />

      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 37%, .18) 0, hsla(154, 62%, 44%, .06) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 37%, .12) 0, hsla(154, 62%, 44%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(154, 62%, 44%, .08) 0, transparent 80%)"
        translateY={-200} width={700} height={1200} smallWidth={300} duration={8} xOffset={120}
      />

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div
        ref={ref}
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10"
        style={{ paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        {/* Badge */}
        <div
          className={isVisible ? 'sr-reveal-up' : 'sr-hidden'}
          style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'flex-start' }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-accent/10 border border-accent/30 text-white text-sm font-semibold tracking-widest uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            MINI Wi-Fi
          </span>
        </div>

        {/* Titolo principale */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 montserrat-italic text-balance text-left max-w-4xl ${isVisible ? 'sr-reveal-up sr-delay-1' : 'sr-hidden'}`}
        >
          Lupetta
          <span className="block" style={{ color: '#65b32e' }}>MINI WiFi</span>
        </h1>

        {/* Linea decorativa */}
        <div
          className={isVisible ? 'sr-reveal-up sr-delay-2' : 'sr-hidden'}
          style={{ width: 'clamp(4rem, 8vw, 8rem)', height: 3, borderRadius: 999, background: 'linear-gradient(90deg, #65b32e, rgba(101,179,46,0))', margin: '0 0 1.75rem' }}
        />

        {/* Sottotitolo */}
        <p
          className={`text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed text-left ${isVisible ? 'sr-reveal-up sr-delay-3' : 'sr-hidden'}`}
        >
          La Lupetta Mini è progettata  per la gestione di vitelli in gabbia singola. È ideale per seguire il vitello dai primi giorni di vita fino a circa 90 giorni, garantendo una distribuzione costante e programmata del latte durante tutta la giornata.
        </p>
      </div>

    </section>
  );
}







