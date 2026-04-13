const VANTAGGI = [
  { title: 'Lorem enterprise scalabilitas', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero sit amet quam egestas semper aenean.' },
  { title: 'Ipsum automaticus processus', desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra vestibulum.' },
  { title: 'Dolor integratio completus', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.' },
  { title: 'Amet supportus dedicatus', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit.' },
];

export default function VantaggiSection() {
  return (
    <section className="bg-[#006071] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Lorem <span className="montserrat-italic text-white/80">ipsum dolor</span> sit amet
          </h2>
          <p className="text-slate-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {VANTAGGI.map((adv, i) => (
            <div key={i} className={`glass-dark p-6 sm:p-8 lg:p-10 rounded-2xl animate-slide-up animate-stagger-${i + 1}`}>
              <h3 className="text-2xl mb-4 text-white">{adv.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







