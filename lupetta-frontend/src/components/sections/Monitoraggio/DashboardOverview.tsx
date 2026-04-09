const STATS = [
  { icon: '📊', value: 'Lorem', label: 'Dashboard Realtime' },
  { icon: '🔔', value: 'Ipsum', label: 'Notifiche Smart' },
  { icon: '📱', value: 'Dolor', label: 'Accesso Mobile' },
  { icon: '🔒', value: 'Amet', label: 'Sicurezza Dati' },
];

export default function DashboardOverview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center card-hover animate-scale-in animate-stagger-${i + 1}`}>
            <span className="text-3xl block mb-2">{stat.icon}</span>
            <div className="text-lg font-bold text-slate-900">{stat.value}</div>
            <div className="text-xs text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
