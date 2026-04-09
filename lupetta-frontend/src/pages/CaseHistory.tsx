import { Link } from 'react-router-dom';
import heroImg from '../assets/images/mucca.webp';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

/* ─── tiny helper ─── */
function RevealSection({
  children,
  className = '',
  animation = 'sr-reveal-up',
  delay = '',
  as: Tag = 'div',
  threshold,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
  as?: React.ElementType;
  threshold?: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });
  return (
    <Tag
      ref={ref}
      className={`${className} ${isVisible ? `${animation} ${delay}` : 'sr-hidden'}`}
    >
      {children}
    </Tag>
  );
}

/* ─── counter card ─── */
function StatCard({ value, suffix = '', label, delay, idx }: { value: number; suffix?: string; label: string; delay: string; idx: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp(value, 1800, isVisible);
  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center card-hover
        ${isVisible ? `sr-reveal-scale ${delay}` : 'sr-hidden'}`}
    >
      <div className={`text-3xl font-extrabold text-[#006473] mb-1 montserrat-heading tabular-nums ${isVisible ? 'sr-counter-pop' : ''}`} style={{ animationDelay: `${0.3 + idx * 0.15}s` }}>
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}

/* ─── progress row ─── */
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

/* ─── metrics panel with animated bars ─── */
const METRICS = [
  { label: "Lorem Crescita Media", before: "0.8 kg/d", after: "1.2 kg/d", pct: "+50%", barPct: 75 },
  { label: "Ipsum Mortalità", before: "8%", after: "2%", pct: "-75%", barPct: 88 },
  { label: "Dolor Costo Manodopera", before: "100%", after: "60%", pct: "-40%", barPct: 60 },
];

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

export default function CaseHistory() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[#006473]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/30 text-white text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in sr-shimmer">
            Case History
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Testimonianze, Studi di Caso<br />
            <span className="text-[#62bc46] inline-block animate-slide-up" style={{ animationDelay: '0.3s' }}>e Confronti sul Mercato</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.
          </p>
        </div>
      </section>

      {/* ═══ STATISTICHE ═══ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 150, suffix: "+", label: "Lorem Installati" },
            { value: 98, suffix: "%", label: "Ipsum Soddisfatti" },
            { value: 35, suffix: "%", label: "Dolor Riduzione" },
            { value: 12, suffix: "", label: "Amet Regioni" },
          ].map((stat, i) => (
            <StatCard key={i} value={stat.value} suffix={stat.suffix} label={stat.label} delay={`sr-delay-${i + 1}`} idx={i} />
          ))}
        </div>
      </section>

      {/* ═══ FEEDBACK DIRETTI ALLEVATORI ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <RevealSection className="text-center mb-14">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Feedback</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Feedback Diretti da <span className="montserrat-italic text-[#006473]">Allevatori con Lupetta MINI e MAXI Tech</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Lorem Ipsum",
              role: "Allevatore — Dolor Sit",
              quote: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
              rating: 5,
            },
            {
              name: "Consectetur Adipiscing",
              role: "Allevatore — Elit Pellentesque",
              quote: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra vestibulum.",
              rating: 5,
            },
            {
              name: "Netus Malesuada",
              role: "Allevatore — Fames Turpis",
              quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam feugiat.",
              rating: 4,
            },
          ].map((testimonial, i) => (
            <RevealSection key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover group" animation="sr-reveal-scale" delay={`sr-delay-${(i + 1) * 2}`}>
              <div className="text-amber-400 text-lg mb-4 transition-transform duration-500 group-hover:scale-110 origin-left">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</div>
              <blockquote className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="border-t border-slate-100 pt-4">
                <div className="font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══ INCREMENTO PRODUZIONE E MIGLIORAMENTO ═══ */}
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

      {/* ═══ ANALISI COMPARATIVA ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <RevealSection className="text-center mb-14">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Comparativa</span>
          <h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mt-3">
            Analisi Comparativa Lupetta <span className="montserrat-italic text-[#006473]">vs Altre Allattatrici</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.
          </p>
        </RevealSection>

        <RevealSection className="overflow-hidden rounded-2xl border border-slate-200 bg-white" animation="sr-reveal-scale">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Lorem Feature</th>
                <th className="px-6 py-4 text-sm font-bold text-[#006473] uppercase tracking-wider text-center">Lupetta</th>
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
      </section>

      {/* ═══ TECNOLOGIE ESCLUSIVE ═══ */}
      <section className="bg-[#006473] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(244,63,94,0.15),transparent)] pointer-events-none" />
        <div className="absolute inset-0 sr-shimmer pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Tecnologie e Funzionalità <span className="montserrat-italic text-[#62bc46]">Esclusive Lupetta</span>
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🧠", title: "Lorem AI Engine", desc: "Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu." },
              { icon: "🔗", title: "Ipsum IoT Connect", desc: "Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et." },
              { icon: "📊", title: "Dolor Smart Analytics", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis." },
            ].map((tech, i) => (
              <RevealSection key={i} className="glass-dark p-8 rounded-2xl card-hover group" animation="sr-flip-in" delay={`sr-delay-${(i + 1) * 2}`}>
                <span className="text-3xl block mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 sr-subtle-float" style={{ animationDelay: `${i * 0.8}s` }}>{tech.icon}</span>
                <h3 className="text-xl text-[#62bc46] mb-3">{tech.title}</h3>
                <p className="text-slate-400 leading-relaxed">{tech.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <RevealSection className="bg-gradient-to-br from-[#006473] to-[#00546b] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden" animation="sr-reveal-scale">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <div className="absolute inset-0 sr-shimmer pointer-events-none opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
              Lorem Ipsum <span className="montserrat-italic">Dolor Sit?</span>
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
            </p>
            <Link to="/come-funziona" className="inline-block px-8 py-4 bg-[#62bc46] text-white font-bold rounded-2xl hover:bg-[#52a83d] transition-all shadow-xl text-lg animate-pulse-glow hover:scale-105 hover:shadow-2xl duration-300">
              Lorem Ipsum &rarr;
            </Link>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}

