const VANTAGGI = [
  { title: 'Lorem Enterprise Scalabilitas', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero sit amet quam egestas semper aenean.' },
  { title: 'Ipsum Automaticus Processus', desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra vestibulum.' },
  { title: 'Dolor Integratio Completus', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.' },
  { title: 'Amet Supportus Dedicatus', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit.' },
];

export default function VantaggiSection() {
  return (
    <section className="bg-[#006473] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-slide-up">
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Lorem <span className="montserrat-italic text-[#62bc46]">Ipsum Dolor</span> Sit Amet
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {VANTAGGI.map((adv, i) => (
            <div key={i} className={`glass-dark p-8 rounded-2xl animate-slide-up animate-stagger-${i + 1}`}>
              <h3 className="text-xl mb-3 text-white">{adv.title}</h3>
              <p className="text-slate-400 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
