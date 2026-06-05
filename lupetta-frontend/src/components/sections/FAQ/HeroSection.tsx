import heroImg from '../../../assets/images/header-pagine.jpg';
import { Spotlight } from '../../ui/spotlight-new';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden min-h-screen flex items-center"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 text-center relative z-10 w-full">
        <span className="inline-block py-2 px-5 rounded-full bg-primary/10 border border-primary/30 text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 sm:mb-8">
          FAQ
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 sm:mb-8 montserrat-italic text-balance">
          Domande frequenti
          <span className="text-[#00c8a0] block">sull&apos;allattamento automatizzato e Lupetta</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Trova le risposte alle domande più frequenti su installazione, alimentazione, tecnologia e gestione quotidiana delle allattatrici automatiche Lupetta.
        </p>
      </div>
    </section>
  );
}







