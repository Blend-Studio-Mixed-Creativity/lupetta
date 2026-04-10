import TiltCard3D from '../../ui/TiltCard3D';
import RevealSection from '../../RevealSection';

export default function ComparativaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <RevealSection className="text-center mb-8 sm:mb-10 lg:mb-14">
        <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Comparativa</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
          Analisi Comparativa Lupetta <span className="montserrat-italic text-[#006071]">vs Altre Allattatrici</span>
        </h2>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.
        </p>
      </RevealSection>

      <TiltCard3D className="rounded-2xl" maxAngle={5}>
        <RevealSection className="overflow-hidden rounded-2xl border border-slate-200 bg-white" animation="sr-reveal-scale">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Lorem Feature</th>
              <th className="px-6 py-4 text-sm font-bold text-[#006071] uppercase tracking-wider text-center">Lupetta</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-400 uppercase tracking-wider text-center">Ipsum A</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-400 uppercase tracking-wider text-center">Dolor B</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              ["Lorem Monitoring", "✓", "✓", "—"],
              ["Ipsum Cloud Access", "✓", "—", "✓"],
              ["Dolor Programmazione", "✓", "✓", "—"],
              ["Amet Multi-profilo", "✓", "—", "—"],
              ["Consectetur Report", "✓", "—", "✓"],
            ].map(([feature, a, b, c], i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors" style={{ animationDelay: `${i * 0.08}s` }}>
                <td className="px-6 py-4 text-slate-700 font-medium">{feature}</td>
                <td className="px-6 py-4 text-center text-lg">{a}</td>
                <td className="px-6 py-4 text-center text-lg text-slate-400">{b}</td>
                <td className="px-6 py-4 text-center text-lg text-slate-400">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </RevealSection>
      </TiltCard3D>
    </section>
  );
}







