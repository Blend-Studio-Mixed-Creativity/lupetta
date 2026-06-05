import RevealSection from '../../RevealSection';

export default function TestimonialSection() {
  return (
    <section className="bg-[#006071] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(101,179,46,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <RevealSection animation="sr-reveal-up">
          <span className="text-white/70 font-bold text-sm tracking-widest uppercase">Testimonianze</span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white tracking-tight mt-4 mb-10 lg:mb-14">
            Cosa dicono <span className="montserrat-italic text-white/80">gli allevatori</span>
          </h2>
        </RevealSection>
        <RevealSection animation="sr-reveal-scale" delay="sr-delay-2">
          <blockquote className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-10 lg:mb-12">
            &ldquo;Da quando abbiamo introdotto Lupetta in stalla, la salute dei vitelli è migliorata notevolmente e abbiamo ridotto del 98% il tempo dedicato alla preparazione quotidiana del latte. È un investimento che ripaga fin da subito in termini di benessere animale e serenità lavorativa.&rdquo;
          </blockquote>
          <div>
            <div className="font-bold text-white text-xl">Giovanni Fulcini</div>
            <div className="text-base text-slate-400">Azienda Agricola San Rocco — Cremona</div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}







