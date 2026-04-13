import heroImg from '../../../assets/images/latte-per-vitelli-lupetta.webp';
import { Spotlight } from '../../ui/spotlight-new';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,10,15,0.92) 0%, rgba(0,60,75,0.80) 100%)' }} />

      {/* Spotlight Aceternity — brand teal/green */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 37%, .18) 0, hsla(154, 62%, 44%, .06) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 37%, .12) 0, hsla(154, 62%, 44%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(154, 62%, 44%, .08) 0, transparent 80%)"
        translateY={-200}
        width={700}
        height={1200}
        smallWidth={300}
        duration={8}
        xOffset={120}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 text-center relative z-10 w-full">
        <span className="inline-block py-2 px-5 rounded-full bg-[#65b32e]/10 border border-[#65b32e]/30 text-white text-sm font-semibold tracking-widest uppercase mb-8">
          Consumabile
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 montserrat-italic text-balance">
          Approfondimento
          <span className="text-[#65b32e] block">sulla linea latte</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.
        </p>
      </div>
    </section>
  );
}






