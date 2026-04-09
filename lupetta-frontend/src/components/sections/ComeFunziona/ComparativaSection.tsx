const ROWS: [string, string, string][] = [
  ['Lorem Ipsum Dolor', '✓', '✓'],
  ['Consectetur Adipiscing', '—', '✓'],
  ['Pellentesque Habitant', '✓', '✓'],
  ['Vestibulum Tortor', '—', '✓'],
  ['Donec Eu Libero', '✓', '✓'],
  ['Aenean Ultricies', '—', '✓'],
];

export default function ComparativaSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Comparatio</span>
          <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3">
            Lorem <span className="montserrat-italic text-[#006473]">vs</span> Ipsum
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 animate-scale-in">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Caratteristica</th>
                <th className="px-6 py-4 text-sm font-bold text-[#62bc46] uppercase tracking-wider text-center">MINI</th>
                <th className="px-6 py-4 text-sm font-bold text-[#006473] uppercase tracking-wider text-center">MAXI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ROWS.map(([feature, mini, maxi], i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-slate-700 font-medium">{feature}</td>
                  <td className="px-6 py-4 text-center text-lg">{mini}</td>
                  <td className="px-6 py-4 text-center text-lg">{maxi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
