import RevealSection from '../../RevealSection';

export default function CtaSection() {
  return (
    <section className="bg-[#006071] py-10 sm:py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <RevealSection animation="sr-reveal-scale">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6">
            Lorem Ipsum <span className="montserrat-italic">Dolor?</span>
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <button className="px-5 sm:px-8 py-3 sm:py-4 bg-[#65b32e] text-white font-bold rounded-2xl hover:bg-[#50992a] transition-all shadow-xl text-lg hover:scale-105 duration-300">
            Lorem Ipsum &rarr;
          </button>
        </RevealSection>
      </div>
    </section>
  );
}







