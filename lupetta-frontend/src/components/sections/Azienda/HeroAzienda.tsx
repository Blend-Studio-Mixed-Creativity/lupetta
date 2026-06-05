import { useScrollReveal } from '../../../hooks/useScrollReveal';
import heroBg from '../../../assets/images/shooting-slider/shooting-26.webp';

export default function HeroAzienda() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="tablet-hero relative min-h-screen overflow-hidden pt-28 sm:pt-32 md:pt-28 lg:pt-44 pb-24 sm:pb-28 md:pb-28 flex items-center"
      style={{ background: 'linear-gradient(135deg, #006071 0%, #004a58 55%, #003540 100%)' }}
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(0,10,15,0.76) 0%, rgba(0,40,50,0.55) 100%)' }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.6) 100%)' }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(101,179,46,0.35) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[34rem] h-[34rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,168,192,0.25) 0%, transparent 70%)' }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-white">
        <span
          className="text-[#a5d97a] font-bold text-sm tracking-widest uppercase block mb-5"
          style={{
            opacity: isVisible ? 1 : 0,
            letterSpacing: isVisible ? '0.32em' : '0.05em',
            transition: 'opacity 0.6s ease 0.1s, letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          Azienda
        </span>
        <h1
          className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl tracking-tight mb-6 text-balance max-w-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            filter: isVisible ? 'blur(0)' : 'blur(6px)',
            transition:
              'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
          }}
        >
          Innovazione al servizio del <br className="hidden sm:block" />
          <span className="montserrat-italic text-[#a5d97a]">benessere animale</span>
        </h1>
        <p
          className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}
        >
          Dieci anni di ricerca, sviluppo e collaborazione con gli allevatori per ripensare il modo in cui i vitelli vengono nutriti nelle prime fasi di vita.
        </p>
      </div>
    </section>
  );
}
