import heroImg from '../../../assets/images/mucca.webp';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
    >
      <div className="absolute inset-0 bg-[#006071]/82" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-2 px-5 rounded-full bg-[#65b32e]/10 border border-[#65b32e]/40 text-[#65b32e] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            MINI Wi-Fi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 animate-slide-up montserrat-italic text-balance">
            Specifiche Tecniche
            <span className="text-[#65b32e] block">della Versione MINI WiFi di Lupetta</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section>
  );
}







