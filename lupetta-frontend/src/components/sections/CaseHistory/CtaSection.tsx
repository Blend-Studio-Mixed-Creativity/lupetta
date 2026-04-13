import { Link } from 'react-router-dom';
import RevealSection from '../../RevealSection';

export default function CtaSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28 text-center">
      <RevealSection className="bg-gradient-to-br from-[#006071] to-[#004f5e] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white relative overflow-hidden" animation="sr-reveal-scale">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="absolute inset-0 sr-shimmer pointer-events-none opacity-20" />
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6">
            Lorem ipsum <span className="montserrat-italic">dolor sit?</span>
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
          <Link to="/come-funziona" className="inline-block px-5 sm:px-8 py-3 sm:py-4 bg-[#65b32e] text-white font-bold rounded-2xl hover:bg-[#50992a] transition-all shadow-xl text-lg animate-pulse-glow hover:scale-105 hover:shadow-2xl duration-300">
            Lorem Ipsum &rarr;
          </Link>
        </div>
      </RevealSection>
    </section>
  );
}







