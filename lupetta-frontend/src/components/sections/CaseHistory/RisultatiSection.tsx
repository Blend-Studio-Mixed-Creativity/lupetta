import { useScrollReveal } from '../../../hooks/useScrollReveal';
import RevealSection from '../../RevealSection';

const METRICS = [
  { label: "Lorem Crescita Media", before: "0.8 kg/d", after: "1.2 kg/d", pct: "+50%", barPct: 75 },
  { label: "Ipsum Mortalità", before: "8%", after: "2%", pct: "-75%", barPct: 88 },
  { label: "Dolor Costo Manodopera", before: "100%", after: "60%", pct: "-40%", barPct: 60 },
];

function MetricRow({ label, before, after, pct, barPct, delay, isVisible }: { label: string; before: string; after: string; pct: string; barPct: number; delay: string; isVisible: boolean }) {
  return (
    <div className={`bg-white p-5 rounded-xl shadow-sm ${isVisible ? `sr-flip-in ${delay}` : 'sr-hidden'}`}>
      <div className="text-sm font-bold text-slate-900 mb-2">{label}</div>
      <div className="flex items-center justify-between text-sm mb-3">
        <span className="text-slate-400">Prima: {before}</span>
        <span className="text-[#006473] font-bold text-lg montserrat-heading">{pct}</span>
        <span className="text-emerald-600 font-medium">Dopo: {after}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-[#006473] to-[#62bc46] ${isVisible ? 'sr-bar-grow' : ''}`}
          style={{ '--bar-width': `${barPct}%`, width: isVisible ? `${barPct}%` : '0%' } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

function MetricsPanel() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div ref={ref} className={`${isVisible ? 'sr-reveal-right' : 'sr-hidden'}`}>
      <div className="bg-white rounded-3xl p-8 border border-slate-100">
        <div className="space-y-6">
          {METRICS.map((row, i) => (
            <MetricRow key={i} {...row} delay={`sr-delay-${i + 2}`} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RisultatiSection() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealSection animation="sr-reveal-left">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Risultati</span>
            <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Incremento Produzione e <span className="montserrat-italic text-[#006473]">Miglioramento Benessere Animale</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget.
            </p>
            <h3 className="text-lg text-slate-800">Risparmi Economici e Ottimizzazioni Operative</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
          </RevealSection>
          <MetricsPanel />
        </div>
      </div>
    </section>
  );
}
