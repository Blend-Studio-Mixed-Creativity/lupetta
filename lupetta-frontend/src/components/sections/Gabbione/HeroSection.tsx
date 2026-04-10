import heroImg from '../../../assets/images/vitello.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 text-center relative z-10">
        <span className="inline-block py-2 px-5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
          Gabbione
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 animate-slide-up montserrat-italic text-balance">
          Soluzioni di contenimento:
          <span className="text-white/80 block">gabbioni integrato per il movimento</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
        </p>
      </div>
    </section>
  );
}







