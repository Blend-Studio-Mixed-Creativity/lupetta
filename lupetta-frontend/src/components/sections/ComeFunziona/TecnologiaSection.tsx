interface TechItem {
  iconPath: string;
  title: string;
  desc: string;
}

const TECH_ITEMS: TechItem[] = [
  { iconPath: 'M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z', title: 'Lorem Hardware', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero.' },
  { iconPath: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418', title: 'Ipsum Software', desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien.' },
  { iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z', title: 'Dolor Securitas', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  { iconPath: 'M3 13.5v6a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6-8v14a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-14a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6 4v10a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75z', title: 'Amet Analytics', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat.' },
  { iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', title: 'Consectetur Energia', desc: 'Quisque sit amet est et sapien ullamcorper pharetra vestibulum erat wisi condimentum sed.' },
  { iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Adipiscing Protectio', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.' },
];

export default function TecnologiaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-28">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
        <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Technologia</span>
        <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3">
          Lorem Ipsum <span className="montserrat-italic text-[#006071]">Dolor</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TECH_ITEMS.map((tech, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border border-slate-100 hover:border-[#006071]/20 hover:shadow-lg transition-all animate-slide-up animate-stagger-${(i % 3) + 1} group bg-white`}
          >
            <div className="w-11 h-11 rounded-xl bg-[#006071]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-[#006071]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={tech.iconPath} />
              </svg>
            </div>
            <h3 className="text-xl text-slate-900 mb-2">{tech.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}







