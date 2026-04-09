interface TechItem {
  icon: string;
  title: string;
  desc: string;
}

const TECH_ITEMS: TechItem[] = [
  { icon: '⚙️', title: 'Lorem Hardware', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero.' },
  { icon: '🌐', title: 'Ipsum Software', desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien.' },
  { icon: '🔒', title: 'Dolor Securitas', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  { icon: '📊', title: 'Amet Analytics', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat.' },
  { icon: '🔋', title: 'Consectetur Energia', desc: 'Quisque sit amet est et sapien ullamcorper pharetra vestibulum erat wisi condimentum sed.' },
  { icon: '🛡️', title: 'Adipiscing Protectio', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.' },
];

export default function TecnologiaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="text-center mb-16 animate-slide-up">
        <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Technologia</span>
        <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3">
          Lorem Ipsum <span className="montserrat-italic text-[#006473]">Dolor</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TECH_ITEMS.map((tech, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border border-slate-100 hover:border-[#006473]/20 hover:shadow-lg transition-all animate-slide-up animate-stagger-${(i % 3) + 1} group bg-white`}
          >
            <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{tech.icon}</span>
            <h3 className="text-xl text-slate-900 mb-2">{tech.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
