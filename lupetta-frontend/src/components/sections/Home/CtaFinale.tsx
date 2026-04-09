import { Link } from 'react-router-dom';

export default function CtaFinale() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
      <div className="bg-[#62bc46] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden animate-scale-in">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
            Lorem Ipsum <span className="montserrat-italic">Dolor?</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/come-funziona" className="px-8 py-4 bg-white text-[#62bc46] font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-xl text-lg">
              Lorem Ipsum &rarr;
            </Link>
            <Link to="/benefici" className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all text-lg">
              Dolor Sit Amet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
