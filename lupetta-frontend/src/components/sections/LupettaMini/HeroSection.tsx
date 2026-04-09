import heroImg from '../../../assets/images/mucca.webp';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
    >
      <div className="absolute inset-0 bg-[#006473]/82" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/40 text-[#62bc46] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            MINI Wi-Fi
          </span>
          <h1 className="text-5xl md:text-6xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Specifiche Tecniche della<br />
            <span className="text-[#62bc46]">Versione MINI WiFi di Lupetta</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section>
  );
}
