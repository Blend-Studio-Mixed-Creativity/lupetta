import heroImg from '../../../assets/images/vitello.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-2 px-5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            MAXI Tech
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tight leading-[1.1] mb-8 animate-slide-up montserrat-italic">
            Specifiche Tecniche della Versione MAXI Tech di Lupetta
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est.
          </p>
        </div>
      </div>
    </section>
  );
}







