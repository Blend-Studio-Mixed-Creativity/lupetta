import RevealSection from '../../RevealSection';

export default function FeedbackSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <RevealSection className="text-center mb-8 sm:mb-10 lg:mb-14">
        <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Feedback</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
          Feedback Diretti da <span className="montserrat-italic text-[#006473]">Allevatori con Lupetta MINI e MAXI Tech</span>
        </h2>
      </RevealSection>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Lorem Ipsum",
            role: "Allevatore — Dolor Sit",
            quote: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
            rating: 5,
          },
          {
            name: "Consectetur Adipiscing",
            role: "Allevatore — Elit Pellentesque",
            quote: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra vestibulum.",
            rating: 5,
          },
          {
            name: "Netus Malesuada",
            role: "Allevatore — Fames Turpis",
            quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat.",
            rating: 4,
          },
        ].map((testimonial, i) => (
          <RevealSection key={i} className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 card-hover group" animation="sr-reveal-scale" delay={`sr-delay-${(i + 1) * 2}`}>
            <div className="text-amber-400 text-lg mb-4 transition-transform duration-500 group-hover:scale-110 origin-left">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</div>
            <blockquote className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <div className="border-t border-slate-100 pt-4">
              <div className="font-bold text-slate-900">{testimonial.name}</div>
              <div className="text-sm text-slate-400">{testimonial.role}</div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}







