import heroImg from '../../../assets/images/header-pagine.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 text-center relative z-10">
        <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/40 text-[#62bc46] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
          FAQ
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 animate-slide-up montserrat-italic text-balance">
          Domande frequenti
          <span className="text-[#62bc46] block">sull&apos;allattamento automatizzato e Lupetta</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.
        </p>
      </div>
    </section>
  );
}
