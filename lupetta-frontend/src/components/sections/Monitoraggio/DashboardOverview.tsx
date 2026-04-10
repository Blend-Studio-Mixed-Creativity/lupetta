import TiltCard3D from '../../ui/TiltCard3D';

const STATS = [
  { iconPath: 'M3 13.5v6a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6-8v14a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-14a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6 4v10a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75z', value: 'Lorem', label: 'Dashboard Realtime' },
  { iconPath: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0', value: 'Ipsum', label: 'Notifiche Smart' },
  { iconPath: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 9h3', value: 'Dolor', label: 'Accesso Mobile' },
  { iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z', value: 'Amet', label: 'Sicurezza Dati' },
];

export default function DashboardOverview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-16 sm:pb-20 lg:pb-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
        {STATS.map((stat, i) => (
          <TiltCard3D key={i} className={`bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden animate-scale-in animate-stagger-${i + 1}`}>
            <div className="h-1 bg-gradient-to-r from-[#006473] to-[#62bc46]" />
            <div className="p-7 sm:p-8 text-center">
              <div className="w-13 h-13 rounded-xl bg-[#006473]/10 flex items-center justify-center mx-auto mb-5" style={{ width: '3.25rem', height: '3.25rem' }}>
                <svg className="w-6 h-6 text-[#006473]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.iconPath} />
                </svg>
              </div>
              <div className="text-xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          </TiltCard3D>
        ))}
      </div>
    </section>
  );
}







