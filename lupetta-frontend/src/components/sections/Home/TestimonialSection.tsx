export default function TestimonialSection() {
  return (
    <section className="bg-[#006473] text-white py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(98,188,70,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-[#62bc46] font-bold text-sm tracking-widest uppercase animate-fade-in">Testimonia</span>
        <h2 className="text-4xl md:text-5xl text-white tracking-tight mt-4 mb-12 animate-slide-up">
          Lorem Ipsum <span className="montserrat-italic text-[#62bc46]">Dolor Sit</span>
        </h2>
        <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-10 animate-slide-up animate-stagger-2">
          &ldquo;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.&rdquo;
        </blockquote>
        <div className="animate-slide-up animate-stagger-3">
          <div className="font-bold text-[#62bc46] text-lg">Lorem Ipsum</div>
          <div className="text-sm text-slate-400">Dolor Sit Amet — Consectetur Adipiscing</div>
        </div>
      </div>
    </section>
  );
}
