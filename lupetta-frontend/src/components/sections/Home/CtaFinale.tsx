import { Link } from 'react-router-dom';
import RevealSection from '../../RevealSection';

export default function CtaFinale() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
      <RevealSection
        className="bg-[#65b32e] rounded-3xl p-8 sm:p-10 md:p-14 lg:p-20 text-white relative overflow-hidden"
        animation="sr-reveal-scale"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
            Lorem ipsum <span className="montserrat-italic">dolor?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/come-funziona" className="px-5 sm:px-8 py-3 sm:py-4 bg-white text-[#65b32e] font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-xl text-lg hover:scale-105 duration-300">
              Lorem Ipsum &rarr;
            </Link>
            <Link to="/benefici" className="px-5 sm:px-8 py-3 sm:py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all text-lg">
              Dolor Sit Amet
            </Link>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}







