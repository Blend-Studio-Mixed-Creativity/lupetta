import RevealSection from '../../RevealSection';

export default function TecnologieSection() {
  return (
    <section className="bg-[#006071] text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(244,63,94,0.15),transparent)] pointer-events-none" />
      <div className="absolute inset-0 sr-shimmer pointer-events-none opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealSection className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Tecnologie e funzionalità <span className="montserrat-italic text-[#65b32e]">esclusive Lupetta</span>
          </h2>
        </RevealSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Lorem AI engine", desc: "Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu." },
            { title: "Ipsum IoT connect", desc: "Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et." },
            { title: "Dolor smart analytics", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis." },
          ].map((tech, i) => (
            <RevealSection key={i} className="glass-dark p-5 sm:p-6 lg:p-8 rounded-2xl card-hover group" animation="sr-flip-in" delay={`sr-delay-${(i + 1) * 2}`}>
              <h3 className="text-xl text-[#65b32e] mb-3">{tech.title}</h3>
              <p className="text-slate-400 leading-relaxed">{tech.desc}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}







