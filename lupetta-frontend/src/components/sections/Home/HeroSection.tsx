import { Link } from 'react-router-dom';
import heroImg from '../../../assets/images/vitello1-lupetta.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32 lg:pb-40 text-center relative z-10">
        <span className="inline-block py-2 px-5 rounded-full bg-[#65b32e]/10 border border-[#65b32e]/30 text-[#65b32e] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
          Lorem Ipsum Sit Amet
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 animate-slide-up montserrat-italic text-balance">
          Allattatrice individuale per vitelli
          <span className="text-[#65b32e] block">Lupetta: soluzioni avanzate</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-12 animate-slide-up animate-stagger-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up animate-stagger-3">
          <Link to="/come-funziona" className="group px-8 py-4 bg-[#65b32e] hover:bg-[#50992a] text-white font-bold rounded-2xl shadow-lg shadow-[#65b32e]/25 transition-all duration-300 hover:-translate-y-1 text-lg">
            Lorem Ipsum
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
          <Link to="/monitoraggio" className="px-5 sm:px-8 py-3 sm:py-4 glass-dark text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg">
            Dolor Sit Amet
          </Link>
        </div>
      </div>
    </section>
  );
}







