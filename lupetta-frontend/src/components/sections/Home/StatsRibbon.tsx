const STATS = [
  { value: '1.200+', label: 'Lorem Ipsum' },
  { value: '98%', label: 'Dolor Amet' },
  { value: '24/7', label: 'Sit Consectetur' },
  { value: '45%', label: 'Adipiscing Elit' },
];

export default function StatsRibbon() {
  return (
    <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center card-hover animate-scale-in animate-stagger-${i + 1}`}>
            <div className="text-3xl font-extrabold text-[#62bc46] mb-1 montserrat-heading">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
