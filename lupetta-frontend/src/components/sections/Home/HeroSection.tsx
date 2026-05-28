import { Link } from 'react-router-dom';
import heroImg from '../../../assets/images/vitello1-lupetta.jpg';
import { Spotlight } from '../../ui/spotlight-new';

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden text-white min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-start"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,10,15,0.92) 0%, rgba(0,60,75,0.80) 100%)' }} />

      {/* Spotlight Aceternity */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 37%, .18) 0, hsla(154, 62%, 44%, .06) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 37%, .12) 0, hsla(154, 62%, 44%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(154, 62%, 44%, .08) 0, transparent 80%)"
        translateY={-200} width={700} height={1200} smallWidth={300} duration={8} xOffset={120}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40 lg:py-56 text-left relative z-10">
        <span className="inline-block py-2.5 px-6 rounded-full bg-[#65b32e]/10 border border-[#65b32e]/30 text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-8 lg:mb-12 shadow-2xl backdrop-blur-md text-left">
          <span className="bg-gradient-to-r from-emerald-300 to-[#65b32e] bg-clip-text text-transparent inline-block animate-pulse">Tecnologia</span> al servizio della tua stalla
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 montserrat-italic text-balance text-left">
          <span className="block text-white">
            Con Lupetta migliori crescita,<br />
            salute e performance dei tuoi animali.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-14 text-left">
          Lupetta è l’allattatrice automatica progettata per garantire il massimo benessere dei vitelli<br className="hidden md:inline" /> e semplificare la gestione quotidiana in azienda agricola.
        </p>
        <div className="flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-6 animate-slide-up animate-stagger-3">
          <Link
            to="/come-funziona"
            className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-gradient-to-b from-[#65b32e] to-[#4fa028] text-white font-bold rounded-2xl shadow-[0_0_40px_rgba(101,179,46,0.5)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(101,179,46,0.7)] text-base sm:text-lg lg:text-xl xl:text-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_20%,rgba(255,255,255,0.4)_50%,transparent_80%)] -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]" style={{ backgroundSize: '200% 100%' }} />
            <span className="relative z-10 flex items-center">
              Sistema brevettato Lupetta® 
              <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </span>
          </Link>
          <Link
            to="/monitoraggio"
            className="group px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 relative bg-white/5 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)] text-base sm:text-lg lg:text-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            <span className="relative z-10">Casi studio reali</span>
          </Link>
        </div>
      </div>
    </section>
  );
}







