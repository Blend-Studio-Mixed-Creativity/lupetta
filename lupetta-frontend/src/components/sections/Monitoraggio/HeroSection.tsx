import heroImg from '../../../assets/images/shooting-slider/shooting-02.webp';
import appStoreBtn from '../../../assets/images/app-store.png';
import playStoreBtn from '../../../assets/images/play-store.png';
import { Spotlight } from '../../ui/spotlight-new';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,10,15,0.78) 0%, rgba(0,30,40,0.58) 100%)' }} />
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 37%, .18) 0, hsla(154, 62%, 44%, .06) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 37%, .12) 0, hsla(154, 62%, 44%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(154, 62%, 44%, .08) 0, transparent 80%)"
        translateY={-200} width={700} height={1200} smallWidth={300} duration={8} xOffset={120}
      />
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 relative z-10 w-full text-left">
        <span className="inline-block py-2 px-5 rounded-full bg-[#65b32e]/10 border border-[#65b32e]/30 text-white text-sm font-semibold tracking-widest uppercase mb-8">
          Monitoraggio
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 montserrat-italic text-left max-w-4xl">
          Sistema di alimentazione remota <span className="text-[#65b32e]">via web e app </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed text-left mb-0">
          Controlla e gestisci l’alimentazione dei tuoi vitelli ovunque ti trovi. Con la nostra piattaforma web e l'app dedicata hai a disposizione tutti i dati in tempo reale per garantire salute e benessere al tuo allevamento.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/12 border border-white/12 hover:border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] group shadow-lg"
          >
            <img src={appStoreBtn} alt="App Store" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-white/50 font-semibold tracking-wider uppercase">Scarica su</span>
              <span className="text-base font-bold text-white tracking-wide">App Store</span>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/12 border border-white/12 hover:border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] group shadow-lg"
          >
            <img src={playStoreBtn} alt="Play Store" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] text-white/50 font-semibold tracking-wider uppercase">Disponibile su</span>
              <span className="text-base font-bold text-white tracking-wide">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}







