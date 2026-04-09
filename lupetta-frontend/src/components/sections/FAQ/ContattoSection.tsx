import RevealSection from '../../RevealSection';

export default function ContattoSection() {
  return (
    <section className="bg-[#006473] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <RevealSection animation="sr-reveal-scale">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Lorem Ipsum <span className="montserrat-italic">Non Trovato?</span>
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat.
          </p>
          <button className="px-8 py-4 bg-[#62bc46] text-white font-bold rounded-2xl hover:bg-[#52a83d] transition-all shadow-xl text-lg hover:scale-105 duration-300">
            Lorem Contactus &rarr;
          </button>
        </RevealSection>
      </div>
    </section>
  );
}







