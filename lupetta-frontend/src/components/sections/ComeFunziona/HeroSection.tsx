import heroImg from '../../../assets/images/coselupetta.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 hero-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 text-center relative z-10">
        <span className="inline-block py-2 px-5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
          Lorem Ipsum
        </span>
        <h1 className="tracking-tight leading-[1.05] mb-8 montserrat-heading animate-slide-up text-balance" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 6rem)' }}>
          Caratteristiche tecniche
          <span className="montserrat-italic block mt-2" style={{ color: 'rgba(255,255,255,0.78)' }}>
            e varianti di Lupetta:
          </span>
          <span className="montserrat-italic block mt-2 animate-slide-up animate-stagger-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
            MINI e MAXI Tech
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </section>
  );
}


