const USI = [
  { title: 'Lorem Parvum', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero.' },
  { title: 'Ipsum Domesticus', desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien.' },
  { title: 'Dolor Initialis', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.' },
];

export default function UsoIdealeSection() {
  return (
    <section className="bg-[#006071] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,197,94,0.15),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Lorem Ipsum <span className="montserrat-italic text-white">Dolor Sit</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {USI.map((use, i) => (
            <div key={i} className={`glass-dark p-7 sm:p-8 lg:p-10 rounded-2xl animate-slide-up animate-stagger-${i + 1}`}>
              <h3 className="text-2xl mb-4 text-white">{use.title}</h3>
              <p className="text-slate-300 text-base leading-relaxed">{use.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







