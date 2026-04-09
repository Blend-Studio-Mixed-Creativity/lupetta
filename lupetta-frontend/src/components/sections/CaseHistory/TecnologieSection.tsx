import RevealSection from '../../RevealSection';

export default function TecnologieSection() {
  return (
    <section className="bg-[#006473] text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(244,63,94,0.15),transparent)] pointer-events-none" />
      <div className="absolute inset-0 sr-shimmer pointer-events-none opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealSection className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Tecnologie e Funzionalità <span className="montserrat-italic text-[#62bc46]">Esclusive Lupetta</span>
          </h2>
        </RevealSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🧠", title: "Lorem AI Engine", desc: "Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu." },
            { icon: "🔗", title: "Ipsum IoT Connect", desc: "Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et." },
            { icon: "📊", title: "Dolor Smart Analytics", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis." },
          ].map((tech, i) => (
            <RevealSection key={i} className="glass-dark p-8 rounded-2xl card-hover group" animation="sr-flip-in" delay={`sr-delay-${(i + 1) * 2}`}>
              <span className="text-3xl block mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 sr-subtle-float" style={{ animationDelay: `${i * 0.8}s` }}>{tech.icon}</span>
              <h3 className="text-xl text-[#62bc46] mb-3">{tech.title}</h3>
              <p className="text-slate-400 leading-relaxed">{tech.desc}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}







