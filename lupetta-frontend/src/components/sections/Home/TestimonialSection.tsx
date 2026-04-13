import RevealSection from '../../RevealSection';

export default function TestimonialSection() {
  return (
    <section className="bg-[#006071] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(101,179,46,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <RevealSection animation="sr-reveal-up">
          <span className="text-white/70 font-bold text-sm tracking-widest uppercase">Testimonia</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4 mb-14">
            Lorem ipsum <span className="montserrat-italic text-white/80">dolor sit</span>
          </h2>
        </RevealSection>
        <RevealSection animation="sr-reveal-scale" delay="sr-delay-2">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed mb-12">
            &ldquo;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.&rdquo;
          </blockquote>
          <div>
            <div className="font-bold text-white text-xl">Lorem Ipsum</div>
            <div className="text-base text-slate-400">Dolor Sit Amet — Consectetur Adipiscing</div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}







